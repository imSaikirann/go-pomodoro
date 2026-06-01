package ai

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"net/http"
	"strings"
	"time"
)

const groqURL = "https://api.groq.com/openai/v1/chat/completions"

var httpClient = &http.Client{
	Timeout: 8 * time.Second,
}

func callGroq(ctx context.Context, apiKey, prompt string, maxTokens int ,) (string, error) {
	payload := map[string]interface{}{
		"model":       "llama-3.1-8b-instant",
		"temperature": 0.7,
		"max_tokens":  maxTokens,
		"messages": []map[string]string{
			{
				"role":    "user",
				"content": prompt,
			},
		},
	}

	body, err := json.Marshal(payload)
	if err != nil {
		return "", err
	}

	req, err := http.NewRequestWithContext(ctx, "POST", groqURL, bytes.NewBuffer(body))
	if err != nil {
		return "", err
	}

	req.Header.Set("Authorization", "Bearer "+apiKey)
	req.Header.Set("Content-Type", "application/json")

	resp, err := httpClient.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return "", errors.New("groq request failed")
	}

	var result groqResponse
	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		return "", err
	}

	if len(result.Choices) == 0 {
		return "", errors.New("no choices")
	}

	return strings.TrimSpace(result.Choices[0].Message.Content), nil
}



type groqResponse struct {
	Choices []struct {
		Message struct {
			Content string `json:"content"`
		} `json:"message"`
	} `json:"choices"`
}