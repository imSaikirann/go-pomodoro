package timer

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"time"
)

func Break(minutes int) {
	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt)
	defer stop()

	fmt.Printf("\nBreak started (%d minutes)\n\n", minutes)

	totalSeconds := minutes * 60
	for i := totalSeconds; i >= 0; i-- {
		select {
		case <-ctx.Done():
			fmt.Printf("\ncancelled\n")
			return
		default:
			fmt.Printf("\r%02d:%02d remaining", i/60, i%60)
			time.Sleep(time.Second)
		}
	}

	fmt.Println("\nBreak completed!")
}
