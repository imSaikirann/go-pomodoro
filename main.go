package main

import (
	"log"
	"os"
	"strconv"

	cmd "github.com/imSaikirann/go-pomodoro/cmd/pomodoro"
	"github.com/imSaikirann/go-pomodoro/internal/storage"
	"github.com/imSaikirann/go-pomodoro/internal/timer"
)

func main() {

	db, err := storage.InitDB(storage.DBPath())
	if err != nil {
		log.Fatal(err)
	}

	storage.DB = db

	defer db.Close()

	if len(os.Args) > 1 && os.Args[1] == "internal-timer" {

		minutes, _ := strconv.Atoi(os.Args[2])
		deep := len(os.Args) > 3 && os.Args[3] == "true"

		timer.Run(db, minutes, deep)

		return
	}

	if err := storage.CleanupOldSessions(db, 30); err != nil {
		log.Println("cleanup warning:", err)
	}

	cmd.Execute()
}
