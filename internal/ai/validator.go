package ai

import (
	"strings"

	"github.com/go-playground/validator/v10"
)

var validate = validator.New()

type tipPayload struct {
	Text string `validate:"required,max=80"`
}

func isValidTip(s string) bool {
	s = strings.TrimSpace(s)


	if err := validate.Struct(tipPayload{Text: s}); err != nil {
		return false
	}

	


	if len(strings.Fields(s)) > 8 {
		return false
	}


	for _, r := range s {
		if r >= 0x1F300 && r <= 0x1FAFF {
			return false
		}
	}


	last := s[len(s)-1]
	if last == '.' || last == '!' || last == '?' {
		return false
	}

	return true
}