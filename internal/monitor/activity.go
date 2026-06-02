//go:build windows

package monitor

import (
	"fmt"
	"os"
	"time"

	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
	"github.com/go-vgo/robotgo"
)

type model struct {
	startTime    time.Time
	lastActivity time.Time
	lastX        int
	lastY        int
}

func initialModel() model {

	x, y := robotgo.Location()

	return model{
		startTime:    time.Now(),
		lastActivity: time.Now(),
		lastX:        x,
		lastY:        y,
	}
}

func tick() tea.Cmd {
	return tea.Tick(time.Second, func(t time.Time) tea.Msg {
		return t
	})
}

func (m model) Init() tea.Cmd {
	return tick()
}

func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {

	switch msg := msg.(type) {

	case tea.KeyMsg:
		if msg.String() == "q" || msg.String() == "ctrl+c" {
			return m, tea.Quit
		}

	case time.Time:

		x, y := robotgo.Location()

		if distance(x, y, m.lastX, m.lastY) > 50 {
			m.lastActivity = time.Now()
		}

		m.lastX = x
		m.lastY = y

		return m, tick()
	}

	return m, nil
}

var (
	titleStyle = lipgloss.NewStyle().
			Bold(true).
			Foreground(lipgloss.Color("205"))

	labelStyle = lipgloss.NewStyle().
			Foreground(lipgloss.Color("241"))

	goodStyle = lipgloss.NewStyle().
			Foreground(lipgloss.Color("42"))

	warnStyle = lipgloss.NewStyle().
			Foreground(lipgloss.Color("214"))

	dangerStyle = lipgloss.NewStyle().
			Foreground(lipgloss.Color("196"))
)

func (m model) View() string {

	elapsed := time.Since(m.startTime)
	min := int(elapsed.Minutes())
	sec := int(elapsed.Seconds()) % 60

	idle := int(time.Since(m.lastActivity).Seconds())

	status := postureStatusStyled(min)

	return fmt.Sprintf(
		"%s\n%s\n\n%s %02d:%02d\n%s %s\n%s %ds ago\n\nPress q to quit\n",
		titleStyle.Render("Activity Monitor"),
		lipgloss.NewStyle().Foreground(lipgloss.Color("240")).Render("────────────────────────"),
		labelStyle.Render("🪑 Sitting:     "),
		min,
		sec,
		labelStyle.Render("Status:        "),
		status,
		labelStyle.Render("Last movement: "),
		idle,
	)
}

func postureStatusStyled(min int) string {

	switch {

	case min >= 90:
		return dangerStyle.Render("⚠️ urgent")

	case min >= 60:
		return warnStyle.Render("⚠️ move")

	case min >= 45:
		return warnStyle.Render("⚠️ stretch")

	default:
		return goodStyle.Render("✅ good")
	}
}

func distance(x1, y1, x2, y2 int) int {

	dx := x1 - x2
	if dx < 0 {
		dx = -dx
	}

	dy := y1 - y2
	if dy < 0 {
		dy = -dy
	}

	return dx + dy
}


func Start() {

	p := tea.NewProgram(initialModel())

	if err := p.Start(); err != nil {
		fmt.Println("Error starting monitor:", err)
		os.Exit(1)
	}
}
