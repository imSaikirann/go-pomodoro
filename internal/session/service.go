package session

import (
	"database/sql"
	"fmt"
	"log"
	"time"

	"github.com/google/uuid"
	"github.com/imSaikirann/go-pomodoro/internal/storage"
)

type Session struct {
	StartTime   time.Time
	DurationSec int
	PausedAt    sql.NullTime
}

func Start(db *sql.DB, start time.Time, durationSec int, deep bool) {

	sessionType := "normal"
	if deep {
		sessionType = "deep"
	}

	s := storage.Session{
		ID:            uuid.NewString(),
		StartTime:     start,
		EndTime:       sql.NullTime{Valid: false},
		DurationSec:   durationSec,
		SessionType:   sessionType,
		FocusScore:    0.85,
		Interruptions: 0,
		CreatedAt:     time.Now(),
	}

	if err := storage.InsertSession(db, s); err != nil {
		log.Println("failed to start session:", err)
	}
}

func Pause(db *sql.DB) {

	_, err := db.Exec(`
		UPDATE sessions
		SET paused_at = ?
		WHERE end_time IS NULL AND paused_at IS NULL
	`, time.Now())

	if err != nil {
		log.Println("failed to pause session:", err)
	}
}

func Resume(db *sql.DB) {

	var pausedAt time.Time

	err := db.QueryRow(`
		SELECT paused_at
		FROM sessions
		WHERE end_time IS NULL AND paused_at IS NOT NULL
		ORDER BY start_time DESC
		LIMIT 1
	`).Scan(&pausedAt)

	if err != nil {
		log.Println("no paused session")
		return
	}

	pauseDuration := time.Since(pausedAt)

	_, err = db.Exec(`
		UPDATE sessions
		SET start_time = datetime(start_time, ?),
		    paused_at = NULL
		WHERE end_time IS NULL
	`, fmt.Sprintf("+%d seconds", int(pauseDuration.Seconds())))

	if err != nil {
		log.Println("failed to resume session:", err)
	}
}

func End(db *sql.DB, end time.Time) {

	_, err := db.Exec(`
		UPDATE sessions
		SET end_time = ?
		WHERE id = (
			SELECT id
			FROM sessions
			WHERE end_time IS NULL
			ORDER BY start_time DESC
			LIMIT 1
		)
	`, end)

	if err != nil {
		log.Println("failed to end session:", err)
	}
}

func GetActive(db *sql.DB) *Session {

	row := db.QueryRow(`
		SELECT start_time, duration_sec, paused_at
		FROM sessions
		WHERE end_time IS NULL
		ORDER BY start_time DESC
		LIMIT 1
	`)

	var s Session

	err := row.Scan(&s.StartTime, &s.DurationSec, &s.PausedAt)
	if err != nil {
		return nil
	}

	return &s
}