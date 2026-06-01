package storage

import (
	"database/sql"
	"time"
)

const activeTimerID = 1

type TimerState struct {
	ID              int
	PID             sql.NullInt64
	Running         bool
	Paused          bool
	Deep            bool
	Phase           string
	FocusMinutes    int
	BreakMinutes    int
	TotalCycles     int
	CycleIndex      int
	RemainingSec    int
	PhaseTotalSec   int
	StartedAt       sql.NullTime
	UpdatedAt       time.Time
	CompletedCycles int
}

func ensureTimerStateTable(db *sql.DB) error {
	schema := `
	CREATE TABLE IF NOT EXISTS timer_state (
		id               INTEGER PRIMARY KEY CHECK (id = 1),
		pid              INTEGER,
		running          INTEGER NOT NULL DEFAULT 0,
		paused           INTEGER NOT NULL DEFAULT 0,
		deep             INTEGER NOT NULL DEFAULT 0,
		phase            TEXT NOT NULL DEFAULT '',
		focus_minutes    INTEGER NOT NULL DEFAULT 0,
		break_minutes    INTEGER NOT NULL DEFAULT 0,
		total_cycles     INTEGER NOT NULL DEFAULT 0,
		cycle_index      INTEGER NOT NULL DEFAULT 0,
		remaining_sec    INTEGER NOT NULL DEFAULT 0,
		phase_total_sec  INTEGER NOT NULL DEFAULT 0,
		started_at       DATETIME,
		updated_at       DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
		completed_cycles INTEGER NOT NULL DEFAULT 0
	);
	INSERT OR IGNORE INTO timer_state (id) VALUES (1);
	`
	_, err := db.Exec(schema)
	return err
}

func SaveTimerState(db *sql.DB, s TimerState) error {
	_, err := db.Exec(`
		INSERT INTO timer_state (
			id, pid, running, paused, deep, phase, focus_minutes, break_minutes,
			total_cycles, cycle_index, remaining_sec, phase_total_sec, started_at,
			updated_at, completed_cycles
		) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		ON CONFLICT(id) DO UPDATE SET
			pid = excluded.pid,
			running = excluded.running,
			paused = excluded.paused,
			deep = excluded.deep,
			phase = excluded.phase,
			focus_minutes = excluded.focus_minutes,
			break_minutes = excluded.break_minutes,
			total_cycles = excluded.total_cycles,
			cycle_index = excluded.cycle_index,
			remaining_sec = excluded.remaining_sec,
			phase_total_sec = excluded.phase_total_sec,
			started_at = excluded.started_at,
			updated_at = excluded.updated_at,
			completed_cycles = excluded.completed_cycles
	`, activeTimerID, nullableInt64(s.PID), boolToInt(s.Running), boolToInt(s.Paused), boolToInt(s.Deep),
		s.Phase, s.FocusMinutes, s.BreakMinutes, s.TotalCycles, s.CycleIndex, s.RemainingSec,
		s.PhaseTotalSec, nullableTime(s.StartedAt), s.UpdatedAt, s.CompletedCycles)
	return err
}

func GetTimerState(db *sql.DB) (*TimerState, error) {
	row := db.QueryRow(`
		SELECT id, pid, running, paused, deep, phase, focus_minutes, break_minutes,
		       total_cycles, cycle_index, remaining_sec, phase_total_sec, started_at,
		       updated_at, completed_cycles
		FROM timer_state
		WHERE id = ?
	`, activeTimerID)

	var s TimerState
	var running, paused, deep int
	err := row.Scan(
		&s.ID, &s.PID, &running, &paused, &deep, &s.Phase, &s.FocusMinutes,
		&s.BreakMinutes, &s.TotalCycles, &s.CycleIndex, &s.RemainingSec,
		&s.PhaseTotalSec, &s.StartedAt, &s.UpdatedAt, &s.CompletedCycles,
	)
	if err != nil {
		return nil, err
	}

	s.Running = running == 1
	s.Paused = paused == 1
	s.Deep = deep == 1
	return &s, nil
}

func ResetTimerState(db *sql.DB) error {
	_, err := db.Exec(`
		UPDATE timer_state
		SET pid = NULL,
		    running = 0,
		    paused = 0,
		    deep = 0,
		    phase = '',
		    focus_minutes = 0,
		    break_minutes = 0,
		    total_cycles = 0,
		    cycle_index = 0,
		    remaining_sec = 0,
		    phase_total_sec = 0,
		    started_at = NULL,
		    updated_at = ?,
		    completed_cycles = 0
		WHERE id = ?
	`, time.Now(), activeTimerID)
	return err
}

func SetTimerPaused(db *sql.DB, paused bool) error {
	_, err := db.Exec(`
		UPDATE timer_state
		SET paused = ?, updated_at = ?
		WHERE id = ?
	`, boolToInt(paused), time.Now(), activeTimerID)
	return err
}

func boolToInt(v bool) int {
	if v {
		return 1
	}
	return 0
}

func nullableInt64(v sql.NullInt64) any {
	if v.Valid {
		return v.Int64
	}
	return nil
}

func nullableTime(v sql.NullTime) any {
	if v.Valid {
		return v.Time
	}
	return nil
}
