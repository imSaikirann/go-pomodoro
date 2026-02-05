package help

import "fmt"

func Print() {
	fmt.Println(`
Pomodoro CLI 🍅

Usage:
  pomodoro start [minutes]

Examples:
  pomodoro start
  pomodoro start 15

Options:
  help          Show this help message
`)
}
