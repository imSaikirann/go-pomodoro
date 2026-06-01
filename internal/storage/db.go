package storage

import (
	"database/sql"
	"fmt"
	"os"
	"path/filepath"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

// DBPath returns a stable writable path and falls back to the local directory.
func DBPath() string {
	home, err := os.UserHomeDir()
	if err == nil && home != "" {
		dir := filepath.Join(home, ".pomodoro")
		if mkErr := os.MkdirAll(dir, 0755); mkErr == nil {
			return filepath.Join(dir, "pomodoro.db")
		}
	}

	return "pomodoro.db"
}

type Session struct {
	ID            string
	StartTime     time.Time
	EndTime       sql.NullTime
	DurationSec   int
	SessionType   string
	FocusScore    float64
	Interruptions int
	CreatedAt     time.Time
}

func InitDB(path string) (*sql.DB, error) {
	db, err := sql.Open("sqlite3", path)
	if err != nil {
		return nil, err
	}

	schema := `
	CREATE TABLE IF NOT EXISTS sessions (
		id            TEXT PRIMARY KEY,
		start_time    DATETIME,
		end_time      DATETIME,
		paused_at     DATETIME,
		duration_sec  INTEGER,
		session_type  TEXT,
		focus_score   REAL,
		interruptions INTEGER,
		created_at    DATETIME
	);
	`

	_, err = db.Exec(schema)
	if err != nil {
		return nil, err
	}

	_, _ = db.Exec(`ALTER TABLE sessions ADD COLUMN paused_at DATETIME;`)

	if err := ensureTimerStateTable(db); err != nil {
		return nil, err
	}

	return db, nil
}

func InsertSession(db *sql.DB, s Session) error {
	_, err := db.Exec(`
		INSERT INTO sessions (
			id, start_time, end_time, paused_at,
			duration_sec, session_type, focus_score,
			interruptions, created_at
		) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
	`,
		s.ID, s.StartTime, s.EndTime, nil,
		s.DurationSec, s.SessionType, s.FocusScore,
		s.Interruptions, s.CreatedAt,
	)
	return err
}

func GetRecentSessions(db *sql.DB, limit int) ([]Session, error) {
	rows, err := db.Query(`
		SELECT id, start_time, end_time, duration_sec,
		       session_type, focus_score, interruptions, created_at
		FROM sessions
		ORDER BY created_at DESC
		LIMIT ?
	`, limit)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var sessions []Session
	for rows.Next() {
		var s Session
		err := rows.Scan(
			&s.ID, &s.StartTime, &s.EndTime, &s.DurationSec,
			&s.SessionType, &s.FocusScore, &s.Interruptions, &s.CreatedAt,
		)
		if err != nil {
			return nil, err
		}
		sessions = append(sessions, s)
	}
	return sessions, nil
}

func CleanupOldSessions(db *sql.DB, days int) error {
	_, err := db.Exec(`
		DELETE FROM sessions
		WHERE created_at < datetime('now', ?)
	`, fmt.Sprintf("-%d days", days))
	return err
}
