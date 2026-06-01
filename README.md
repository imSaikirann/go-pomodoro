# go-pomodoro

A terminal-first Pomodoro timer for developers who want background focus sessions, live CLI status, session history, and optional AI break guidance.

## Highlights

- Background timer that does not block your terminal
- Live status with current phase, time left, cycles, and breaks remaining
- Pause, resume, stop, and recent session history commands
- Deep-work mode and automatic break/cycle rules
- AI-powered break tips and coaching when `GROQ_API_KEY` is configured

## Install

### npm

```bash
npm install -g go-pomodoro
```

### Go

```bash
go install github.com/imSaikirann/go-pomodoro@latest
```

### Local development

```bash
git clone https://github.com/imSaikirann/go-pomodoro
cd go-pomodoro
go run .
```

## Quick Start

Start a default 25 minute session:

```bash
pomodoro start
```

Start a custom session:

```bash
pomodoro start -m 45
```

Watch progress live:

```bash
pomodoro status -w
```

Pause, resume, or stop:

```bash
pomodoro pause
pomodoro resume
pomodoro stop
```

See recent sessions:

```bash
pomodoro sessions
```

## Command Help

Show all commands:

```bash
pomodoro --help
```

Show command-specific help:

```bash
pomodoro start --help
pomodoro status --help
pomodoro deep --help
```

## Core Commands

```bash
pomodoro start
pomodoro start -m 25
pomodoro start -m 60 -d
pomodoro deep
pomodoro status
pomodoro status -w
pomodoro pause
pomodoro resume
pomodoro stop
pomodoro sessions
pomodoro coach
pomodoro monitor
pomodoro update
pomodoro version
```

## How The Timer Works

- `start` launches the timer in the background and returns your terminal immediately
- `status` reads the shared runtime state from SQLite
- `status -w` shows the live phase, time remaining, cycle progress, and breaks left
- Session history is stored in the local database and shown with `sessions`

## AI Setup

AI is optional. Without a key, the CLI falls back to built-in tips.

### What AI powers

- Break-tip notifications after focus sessions
- Deep-work break guidance
- `pomodoro coach` productivity advice

### Set the key

macOS / Linux:

```bash
export GROQ_API_KEY="your_api_key_here"
```

Windows PowerShell:

```powershell
setx GROQ_API_KEY "your_api_key_here"
```

Open a new terminal after running `setx`.

### Verify AI is working

```bash
pomodoro coach
```

You can also start a timer and wait for the focus-complete notification. If AI is available, the break message uses an AI-generated tip. If not, it uses the built-in fallback tips.

## Break And Cycle Rules

- Under 10 min focus: 2 cycles, 1 min break
- 10 to 30 min focus: 2 cycles, 5 min break
- 31 to 45 min focus: 3 cycles, 8 min break
- 46 to 60 min focus: 4 cycles, 10 min break
- 61 to 90 min focus: 6 cycles, 15 min break
- 90+ min focus: 6 cycles, 20 min break

## Project Structure

```text
go-pomodoro/
├─ cmd/pomodoro/   # Cobra commands
├─ internal/       # timer, storage, AI, notifier, analytics
├─ main.go
└─ README.md
```

## License

MIT
