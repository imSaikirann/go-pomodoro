

# go-pomodoro

A fast, distraction-free Pomodoro timer for developers who live in the terminal.

Built for focus. Designed for speed. Open source.

![Go Version](https://img.shields.io/github/go-mod/go-version/imSaikirann/go-pomodoro)
![Downloads](https://img.shields.io/github/downloads/imSaikirann/go-pomodoro/total)
![License](https://img.shields.io/github/license/imSaikirann/go-pomodoro)

---

## What is go-pomodoro?

go-pomodoro is a modern terminal-first focus timer that helps developers stay in deep work without leaving the CLI.

Unlike traditional Pomodoro apps, go-pomodoro is:

* Extremely fast
* Distraction-free
* Insight-driven
* Terminal native
* Fully open source

It fits naturally into developer workflows.

---

## Demo

```bash
$ pomodoro start
⏱  25:00 Focus session started...
```

> Tip: Add a GIF or screenshot here to improve conversions.

---

## Features

### Core

* Terminal-native Pomodoro timer
* Default 25-minute focus session
* Custom duration support
* Deep work mode
* Session tracking
* Real-time activity monitor

### Intelligence Layer

* AI productivity coach
* Smart break suggestions
* Progress-aware insights
* Momentum detection

### Developer Experience

* Fast startup time
* Clean Cobra command structure
* Lipgloss-powered styling
* Simple installation
* Fully open source

---

## Installation

### Option 1 — npm (Recommended)

```bash
npm install -g go-pomodoro
```

After installation:

```bash
pomodoro start
```

---

### Option 2 — Go install

Requirements:

* Go 1.20+

```bash
go install github.com/imSaikirann/go-pomodoro/cmd/pomodoro@latest
```

---

## Enable AI Features (Required for Coach)

To use the AI coach and smart break suggestions, set your Groq API key as an environment variable.

### Step 1 — Get your API key

Get your Groq API key from your provider dashboard.

---

### Step 2 — Set the environment variable

#### macOS / Linux

```bash
export GROQ_API_KEY=your_api_key_here
```

To make it permanent, add it to your shell config:

```bash
echo 'export GROQ_API_KEY=your_api_key_here' >> ~/.bashrc
# or ~/.zshrc
```

---

#### Windows (PowerShell)

```powershell
setx GROQ_API_KEY "your_api_key_here"
```

Restart the terminal after setting the variable.

---

### Step 3 — Verify

Run:

```bash
pomodoro coach
```

If the key is set correctly, AI insights will appear.

---

## Commands

### Start focus session (default 25 minutes)

```bash
pomodoro start
```

### Start with custom duration

```bash
pomodoro start 15
```

### Deep work mode

```bash
pomodoro deep
```

### Activity monitor

```bash
pomodoro monitor
```

### View sessions

```bash
pomodoro sessions
```

### AI coach

```bash
pomodoro coach
```

### Update CLI

```bash
pomodoro update
```

### Version

```bash
pomodoro version
```

---

## How the AI Coach Works

The coach analyzes:

* daily focus time
* session patterns
* momentum trends
* deep work frequency

It then generates contextual insights to help improve consistency.

The system is designed to remain lightweight and fast.

---

## Project Structure

```text
go-pomodoro/
├─ cmd/            # Cobra commands
├─ internal/       # core logic
├─ pkg/            # reusable utilities
├─ main.go
└─ README.md
```

---

## Philosophy

Most productivity tools fail because they add friction.

go-pomodoro follows three principles:

1. Stay in the terminal
2. Reduce cognitive load
3. Protect deep work

If a feature does not improve focus, it does not ship.

---

## Roadmap

* Adaptive focus scoring
* Focus streak tracking
* Weekly analytics
* Optional rich TUI mode
* Cross-device sync (experimental)

---

## Contributing

Contributions are welcome.

### Development setup

```bash
git clone https://github.com/imSaikirann/go-pomodoro
cd go-pomodoro
go run .
```

---

## Open Source

go-pomodoro is fully open source under the MIT License.

You are free to use, modify, and distribute it.

---

## License

MIT © imSaikirann
