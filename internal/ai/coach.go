package ai

import (
	"context"
	"os"
	"time"

	"github.com/imSaikirann/go-pomodoro/internal/ui"
)

func GetCoachAdvice(prompt string) string {

	apiKey := os.Getenv("GROQ_API_KEY")
	if apiKey == "" {
		return randomCoachFallback()
	}

	loader := ui.NewLoader("Analyzing productivity patterns...")
	loader.Start()

	ctx, cancel := context.WithTimeout(context.Background(), 6*time.Second)
	defer cancel()

	for i := 0; i < 2; i++ {

		resp, err := callGroq(ctx, apiKey, prompt, 120)

		if err == nil {

			resp = cleanAIText(resp)

			loader.StopSuccess("Insights generated")

			return resp
		}

		time.Sleep(300 * time.Millisecond)
	}

	loader.StopFail("AI unavailable, using fallback")

	return randomCoachFallback()
}

func randomCoachFallback() string {
	return `• Increase deep work sessions for better focus
• Keep sessions consistent each day
• Avoid very short interrupted sessions`
}