package timer

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"os/signal"
	"runtime"
	"time"

)

func Break(minutes int) {
	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt)
	defer stop()



	fmt.Printf("\n🍅 Break started (%d minutes)\n\n", minutes)

	totalSeconds := minutes * 60


	for i := totalSeconds; i > 0; i-- {

		select {
		case <-ctx.Done():
			fmt.Printf("\n⏹ cancelled\n🍅 focused:")
			return

		default:
			fmt.Printf("\r⏳ %02d:%02d remaining", i/60, i%60)
			time.Sleep(time.Second)
		}
	}

	fmt.Println("\n✅ Break completed!")
	if runtime.GOOS == "windows" {
		exec.Command("powershell", "-c", "[console]::beep(800,300)").Run()
	}



}
