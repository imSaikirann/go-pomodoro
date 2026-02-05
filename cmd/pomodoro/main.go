package main

import (
	"fmt"
	"os"
	"strconv"

	"github.com/imSaikirann/go-pomodoro/internal/timer"
	"github.com/imSaikirann/go-pomodoro/internal/timer/help"
)

func main() {
	if len(os.Args) < 2 {
		help.Welcome()
		return
	}

	command := os.Args[1]

	switch command {
	case "start":
		minutes := 25 // default timer if dont provide min in command

		if len(os.Args) > 2 {
			min, err := strconv.Atoi(os.Args[2])
			if err != nil || min < 1 || min > 100 {
				fmt.Println(" Minutes must be a number between 1 and 100")
				return
			}
			minutes = min
		}

		timer.Start(minutes)
	case "help":
		help.Print()

	default:
		fmt.Println("Unknown command:", command)
	}
}
