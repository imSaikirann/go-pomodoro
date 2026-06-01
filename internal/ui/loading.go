package ui

import (
	"fmt"
	"time"

	"github.com/briandowns/spinner"
)

type Loader struct {
	s *spinner.Spinner
}

func NewLoader(text string) *Loader {
	s := spinner.New(spinner.CharSets[14], 80*time.Millisecond)
	s.Suffix = " " + text
	return &Loader{s: s}
}

func (l *Loader) Start() {
	l.s.Start()
}

func (l *Loader) StopSuccess(msg string) {
	l.s.Stop()
	fmt.Println("✔ " + msg)
}

func (l *Loader) StopFail(msg string) {
	l.s.Stop()
	fmt.Println("✖ " + msg)
}