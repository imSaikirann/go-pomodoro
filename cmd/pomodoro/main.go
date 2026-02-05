package main

import (
	"fmt"
	"os"
	"strconv"

	"github.com/imSaikirann/go-pomodoro/internal/timer"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: pomodoro start [minutes]")
		return
	}
	

	command := os.Args[1]  // arg 1 ("start","2")

	switch command {
	case "start":
		minutes := 25
		if len(os.Args) > 2 {
			if m, err := strconv.Atoi(os.Args[2]); err == nil {
				minutes = m
			}
		}
		timer.Start(minutes)
	default:
		fmt.Println("unknown command:", command)
	}
}
