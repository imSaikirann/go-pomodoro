package session

import (

	"os"
	"time"
)

const cacheFile = ".coach_cache"

func GetCachedCoach(maxAge time.Duration) (string, bool) {
	data, err := os.ReadFile(cacheFile)
	if err != nil {
		return "", false
	}

	info, err := os.Stat(cacheFile)
	if err != nil {
		return "", false
	}

	if time.Since(info.ModTime()) > maxAge {
		return "", false
	}

	


	return string(data), true
}

func SaveCoachCache(text string) {

	_ = os.WriteFile(cacheFile, []byte(text), 0644)
}