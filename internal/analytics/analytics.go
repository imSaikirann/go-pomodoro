package analytics

import "fmt"
func BuildCoachPrompt(sum FocusSummary, prevData string) string {
	return fmt.Sprintf(`
You are a strict productivity coach.

Analyze the user's focus data and respond with exactly 3 bullet points.

STRICT RULES:
- Output plain text only
- No markdown
- No numbering
- No emojis
- Each bullet must be under 12 words
- Each bullet must start with "• "
- Use simple human language
- DO NOT mention numeric focus scores
- Prefer time-based or habit-based advice
- No extra commentary

USER DATA:
Total sessions: %d
Deep sessions: %d
Normal sessions: %d
Focus quality: %s
Total focus minutes: %d

PREVIOUS COACH ADVICE:
%s

Avoid repeating the same advice if possible.

Now return the 3 bullets.
`,
		sum.TotalSessions,
		sum.DeepSessions,
		sum.NormalSessions,
		scoreLabel(sum.AvgFocusScore),
		sum.TotalFocusMin,
		prevData,
	)
}

func scoreLabel(score float64) string {
	switch {
	case score >= 0.9:
		return "excellent"
	case score >= 0.75:
		return "good but can improve"
	case score >= 0.5:
		return "inconsistent"
	default:
		return "needs improvement"
	}
}