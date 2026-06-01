package timer

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"os"
	"os/exec"
	"os/signal"
	"path/filepath"
	"runtime"
	"strings"
	"time"

	"github.com/fatih/color"
	"github.com/imSaikirann/go-pomodoro/internal/ai"
	"github.com/imSaikirann/go-pomodoro/internal/notifier"
	"github.com/imSaikirann/go-pomodoro/internal/session"
	"github.com/imSaikirann/go-pomodoro/internal/storage"
)

func Start(minutes int, deep bool) {
	db, err := storage.InitDB(storage.DBPath())
	if err != nil {
		fmt.Println("failed to open db:", err)
		return
	}
	defer db.Close()

	if state, err := storage.GetTimerState(db); err == nil && state.Running {
		fmt.Println("A pomodoro session is already running.")
		fmt.Println("Run `pomodoro status -w` to watch or `pomodoro stop` to end it.")
		return
	}

	exePath, err := backgroundExecutablePath()
	if err != nil {
		fmt.Println("failed to prepare timer executable:", err)
		return
	}

	cmd := exec.Command(exePath, "internal-timer", fmt.Sprint(minutes), fmt.Sprint(deep))
	cmd.Stdout = nil
	cmd.Stderr = nil
	cmd.Stdin = nil
	cmd.SysProcAttr = detachedProcAttr()

	if err := cmd.Start(); err != nil {
		fmt.Println("failed to start timer:", err)
		return
	}

	pid := cmd.Process.Pid
	_ = os.WriteFile(".pomodoro.pid", []byte(fmt.Sprint(pid)), 0644)

	if err := storage.SaveTimerState(db, storage.TimerState{
		ID:            1,
		PID:           sql.NullInt64{Int64: int64(pid), Valid: true},
		Running:       true,
		Deep:          deep,
		Phase:         "focus",
		FocusMinutes:  minutes,
		BreakMinutes:  getBreakMinutes(minutes),
		TotalCycles:   getCycles(minutes),
		CycleIndex:    1,
		RemainingSec:  minutes * 60,
		PhaseTotalSec: minutes * 60,
		StartedAt:     sql.NullTime{Time: time.Now(), Valid: true},
		UpdatedAt:     time.Now(),
	}); err != nil {
		fmt.Println("failed to store timer state:", err)
	}

	green := color.New(color.FgGreen).SprintFunc()
	yellow := color.New(color.FgYellow).SprintFunc()

	fmt.Println(green("Pomodoro started in background"))
	fmt.Println(yellow("Run `pomodoro status -w` to watch progress"))
}

func backgroundExecutablePath() (string, error) {
	exePath, err := os.Executable()
	if err != nil {
		return "", err
	}

	if runtime.GOOS != "windows" {
		return exePath, nil
	}

	lowerExe := strings.ToLower(exePath)
	if !strings.Contains(lowerExe, `\go-build`) {
		return exePath, nil
	}

	cacheDir := filepath.Join(os.TempDir(), "go-pomodoro")
	if err := os.MkdirAll(cacheDir, 0755); err != nil {
		return "", err
	}

	stablePath := filepath.Join(cacheDir, "go-pomodoro-background.exe")
	data, err := os.ReadFile(exePath)
	if err != nil {
		return "", err
	}

	if err := os.WriteFile(stablePath, data, 0755); err != nil {
		return "", err
	}

	return stablePath, nil
}

func Run(db *sql.DB, minutes int, deep bool) {
	done := make(chan struct{})
	go func() {
		defer close(done)
		runTimer(db, minutes, deep)
	}()
	<-done
}

func runTimer(db *sql.DB, minutes int, deep bool) {
	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt)
	defer stop()

	cycles := getCycles(minutes)
	breakMinutes := getBreakMinutes(minutes)
	focusSeconds := minutes * 60

	for c := 1; c <= cycles; c++ {
		session.Start(db, time.Now(), focusSeconds, deep)
		if err := saveRuntimeState(db, "focus", minutes, breakMinutes, cycles, c, focusSeconds, focusSeconds, c-1, deep); err != nil {
			log.Println("failed to update timer state:", err)
		}

		notifier.Notify("Go-Pomodoro", "Focus session started")
		if !runPhase(ctx, db, "focus", minutes, breakMinutes, cycles, c, focusSeconds, c-1, deep) {
			session.End(db, time.Now())
			_ = storage.ResetTimerState(db)
			return
		}

		session.End(db, time.Now())
		tip := ai.GetBreakTip(deep)
		notifier.Alert("Go-Pomodoro", "Focus completed - "+tip)

		if c < cycles && breakMinutes > 0 {
			notifier.Alert("Go-Pomodoro", "Break started - "+tip)
			if !runPhase(ctx, db, "break", minutes, breakMinutes, cycles, c, breakMinutes*60, c, deep) {
				_ = storage.ResetTimerState(db)
				return
			}
		}
	}

	_ = storage.ResetTimerState(db)
}

func runPhase(ctx context.Context, db *sql.DB, phase string, focusMinutes int, breakMinutes int, totalCycles int, cycleIndex int, totalSeconds int, completedCycles int, deep bool) bool {
	remaining := totalSeconds
	ticker := time.NewTicker(time.Second)
	defer ticker.Stop()

	for {
		select {
		case <-ctx.Done():
			return false
		case <-ticker.C:
			state, err := storage.GetTimerState(db)
			if err != nil {
				log.Println("failed to read timer state:", err)
				continue
			}

			if !state.Running {
				return false
			}

			if state.Paused {
				continue
			}

			remaining--
			if err := saveRuntimeState(db, phase, focusMinutes, breakMinutes, totalCycles, cycleIndex, remaining, totalSeconds, completedCycles, deep); err != nil {
				log.Println("failed to update timer state:", err)
			}

			if remaining <= 0 {
				return true
			}
		}
	}
}

func saveRuntimeState(db *sql.DB, phase string, focusMinutes int, breakMinutes int, totalCycles int, cycleIndex int, remainingSec int, phaseTotalSec int, completedCycles int, deep bool) error {
	state, err := storage.GetTimerState(db)
	if err != nil {
		return err
	}

	return storage.SaveTimerState(db, storage.TimerState{
		ID:              state.ID,
		PID:             state.PID,
		Running:         true,
		Paused:          state.Paused,
		Deep:            deep,
		Phase:           phase,
		FocusMinutes:    focusMinutes,
		BreakMinutes:    breakMinutes,
		TotalCycles:     totalCycles,
		CycleIndex:      cycleIndex,
		RemainingSec:    remainingSec,
		PhaseTotalSec:   phaseTotalSec,
		StartedAt:       state.StartedAt,
		UpdatedAt:       time.Now(),
		CompletedCycles: completedCycles,
	})
}
