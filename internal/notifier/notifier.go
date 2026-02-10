package notifier

import (
	"log"

	"github.com/gen2brain/beeep"
)

func Notify(title, message string) {
	err := beeep.Notify(title, message, "")
	if err != nil {
		log.Println("notification error:", err)
	}
}

func Alert(title, message string) {
	err := beeep.Alert(title, message, "")
	if err != nil {
		log.Println("alert error:", err)
	}
}
