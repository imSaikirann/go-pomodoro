//go:build !windows

package monitor

import "fmt"

func Start() {
	fmt.Println("Activity monitor is currently only supported on Windows.")
}
