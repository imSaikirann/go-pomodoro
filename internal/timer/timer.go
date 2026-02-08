package timer

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"os/signal"
	"runtime"
	"time"

	figure "github.com/common-nighthawk/go-figure"
)

func Start(minutes int) {
	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt)
	defer stop()

	myFigure := figure.NewFigure("GO-POMODORO", "", true)
	myFigure.Print()

	cycles := getCycles(minutes)

	for c := 1; c <= cycles; c++ {

		fmt.Printf("\n🍅 cycle %d/%d — focus started (%d minutes)\n\n", c, cycles, minutes)

		totalSeconds := minutes * 60

		for i := totalSeconds; i > 0; i-- {

			select {
			case <-ctx.Done():
				focused := totalSeconds - i
				fmt.Printf("\n⏹ cancelled\n🍅 focused: %02d:%02d\n", focused/60, focused%60)
				return

			default:
				fmt.Printf("\r⏳ %02d:%02d remaining", i/60, i%60)
				time.Sleep(time.Second)
			}
		}

		fmt.Println("\n✅ focus session completed!")

		if runtime.GOOS == "windows" {
			exec.Command("powershell", "-c", "[console]::beep(800,300)").Run()
		}

		// break after each cycle except lastone
		if c < cycles {
			breakTime := getBreakMinutes(minutes)
			if breakTime > 0 {
				Break(breakTime)
			}
		}
	}
}

