package ai

import (
	"context"
	"math/rand"
	"os"
	"time"

	"github.com/imSaikirann/go-pomodoro/internal/data"
	"github.com/imSaikirann/go-pomodoro/internal/prompts"
)

func GetBreakTip(deep bool) string {
	apiKey := os.Getenv("GROQ_API_KEY")
	if apiKey == "" {
		return randomFallbackTip()
	}

	ctx, cancel := context.WithTimeout(context.Background(), 4*time.Second)
	defer cancel()

	for i := 0; i < 2; i++ {
		prompt := prompts.BreakTipPrompt
		if deep {
			prompt = prompts.DeepDipPrompt
		}

		resp, err := callGroq(ctx, apiKey, prompt, 30)
		if err == nil && isValidTip(resp) {
			return resp
		}
	}

	return randomFallbackTip()
}

func randomFallbackTip() string {
	return data.BreakFallbackTips[rand.Intn(len(data.BreakFallbackTips))]
}
