package notifier

import (
	"fmt"
	"os"

	"github.com/gen2brain/beeep"
)

func Notify(title, message string) {
	if err := beeep.Notify(title, message, ""); err != nil {
		fmt.Fprintln(os.Stderr, "notification error:", err)
	}
}

func Alert(title, message string) {
	if err := beeep.Alert(title, message, ""); err != nil {
		fmt.Fprintln(os.Stderr, "alert error:", err)
	}
}
