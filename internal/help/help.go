package help

import "fmt"

func Print() {
	fmt.Println(`
go-pomodoro 🍅

Usage:
  pomodoro start [minutes | preset]

Examples:
  pomodoro start
  pomodoro start 15


Cycles:
  Sessions automatically repeat based on focus duration.
  Example:
    25 min focus → 5 min break → repeated cycles

Break rules:
  <10 min focus     → no break
  10–30 min         → 5 min break
  30–60 min         → 8–10 min break
  60+ min           → 15+ min break

Commands:
  start             Start a focus session
  help              Show this help message
`)
}

