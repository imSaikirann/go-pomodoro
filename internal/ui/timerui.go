package ui

import (
	"fmt"
	"strings"

	"github.com/charmbracelet/lipgloss"
)

var (
	title = lipgloss.NewStyle().
		Bold(true)

	line = lipgloss.NewStyle().
		Foreground(lipgloss.Color("240"))
)

func RenderTimer(remaining int, total int) string {

	elapsed := total - remaining
	progress := float64(elapsed) / float64(total)

	bar := progressBar(progress)

	min := remaining / 60
	sec := remaining % 60

	return fmt.Sprintf(
		"\r%s\n%s\n\n🍅 Focu session running\n\n%s\n\n⏳ %02d:%02d remaining\n",
		title.Render("GO-POMODORO"),
		line.Render("────────────"),
		bar,
		min,
		sec,
	)
}

func progressBar(percent float64) string {

	total := 20
	filled := int(percent * float64(total))

	if filled > total {
		filled = total
	}

	return strings.Repeat("█", filled) +
		strings.Repeat("░", total-filled)
}