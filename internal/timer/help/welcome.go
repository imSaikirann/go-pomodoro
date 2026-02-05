package help

import "fmt"

func Welcome() {
	fmt.Println(`
🍅 Welcome to Pomodoro CLI!

Start your first focus session:
  pomodoro start

Need help?
  pomodoro help
`)
}
