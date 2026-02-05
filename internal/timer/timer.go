package timer

import (
	"fmt"
	"time"
)

func Start(minutes int) {
	fmt.Printf(" Pomodoro started (%d minutes)\n", minutes)

	for i := minutes * 60; i > 0; i-- {
		fmt.Printf("\r %02d:%02d remaining", i/60, i%60)
		time.Sleep(time.Second)
	}

	fmt.Println("\nTime’s up! Take a break.")
}
