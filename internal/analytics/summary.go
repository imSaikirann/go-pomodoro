package analytics

import "github.com/imSaikirann/go-pomodoro/internal/storage"

// FocusSummary represents aggregated user focus behavior
type FocusSummary struct {
	TotalSessions  int
	DeepSessions   int
	NormalSessions int

	AvgFocusScore float64
	TotalFocusMin int
	DeepFocusMin  int

	DeepRatio float64 
}


func BuildSummary(sessions []storage.Session) FocusSummary {
	var sum FocusSummary

	if len(sessions) == 0 {
		return sum
	}

	var totalScore float64
	var totalSec int

	for _, s := range sessions {
		sum.TotalSessions++
		totalScore += s.FocusScore
		totalSec += s.DurationSec

		if s.SessionType == "deep" {
			sum.DeepSessions++
			sum.DeepFocusMin += s.DurationSec / 60
		} else {
			sum.NormalSessions++
		}
	}


	sum.AvgFocusScore = totalScore / float64(sum.TotalSessions)
	sum.TotalFocusMin = totalSec / 60

	
	if sum.TotalSessions > 0 {
		sum.DeepRatio = float64(sum.DeepSessions) / float64(sum.TotalSessions)
	}

	return sum
}


func WorkloadLabel(sum FocusSummary) string {
	switch {
	case sum.DeepFocusMin >= 360:
		return "overworked"
	case sum.DeepFocusMin >= 240:
		return "heavy"
	default:
		return "normal"
	}
}