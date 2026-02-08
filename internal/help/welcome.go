package help

import "fmt"

func Welcome() {
	fmt.Println(`
🍅 go-pomodoro — terminal-first developer focus mode

built for developers who live in the terminal and want zero-distraction focus
while coding, learning, debugging, or shipping features.

start coding:
pomodoro start [mins]


need commands?
pomodoro help

warning: may increase deep work, reduce random scrolling,
and lead to unexpected commits being pushed.

`)
}

