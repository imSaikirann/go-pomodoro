package ai

import "strings"

// cleanAIText normalizes AI output for CLI display
func cleanAIText(s string) string {
	s = strings.ReplaceAll(s, "**", "")
	s = strings.ReplaceAll(s, "\r", "")
	s = strings.TrimSpace(s)

	// normalize numbered bullets → •
	lines := strings.Split(s, "\n")
	for i, line := range lines {
		line = strings.TrimSpace(line)

		if strings.HasPrefix(line, "1.") ||
			strings.HasPrefix(line, "2.") ||
			strings.HasPrefix(line, "3.") {
			line = "• " + strings.TrimSpace(line[2:])
		}

		lines[i] = line
	}

	return strings.Join(lines, "\n")
}