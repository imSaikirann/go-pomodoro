# Contributing

Thank you for your interest in contributing to **go-pomodoro**.
This project aims to provide a minimal, developer-friendly Pomodoro CLI with AI productivity insights.

We welcome bug fixes, improvements, and new features.

---

## 1. Getting Started

Clone the repository and run the CLI locally.

```bash
git clone https://github.com/imSaikirann/go-pomodoro.git
cd go-pomodoro
go run ./cmd/pomodoro start
```

You can also build the binary:

```bash
go build -o pomodoro ./cmd/pomodoro
./pomodoro start
```

---

## 2. Project Structure

```
cmd/                CLI commands (Cobra)
internal/
  ai/               AI coaching logic
  analytics/        session analysis
  monitor/          posture & activity monitoring
  notifier/         system notifications
  session/          caching & session utilities
  storage/          persistence layer
  ui/               CLI UI components
```

---

## 3. Development Workflow

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes
4. Run and test locally
5. Commit using clear commit messages

Example:

```
feat: add AI coaching cache
fix: improve monitor idle detection
refactor: simplify session analytics
```

---

## 4. Coding Guidelines

* Follow standard Go formatting

```bash
go fmt ./...
```

* Keep functions small and readable
* Prefer simple, clear logic over complex abstractions
* Avoid adding heavy dependencies unless necessary

---

## 5. Adding New Commands

Commands live in:

```
cmd/
```

Use Cobra's structure:

```go
var exampleCmd = &cobra.Command{
    Use:   "example",
    Short: "Example command",
    RunE: func(cmd *cobra.Command, args []string) error {
        // logic
        return nil
    },
}
```

Then register it in `root.go`.

---

## 6. Testing Changes

Run the CLI locally while developing:

```bash
go run main.go start
go run main.go coach
go run main.go monitor
```

Ensure your changes do not break existing commands.

---

## 7. Submitting a Pull Request

1. Push your branch

```bash
git push origin feature/your-feature
```

2. Open a Pull Request
3. Describe what your change does and why

Example:

```
Adds smarter idle detection to activity monitor.
Improves posture reminder accuracy.
```

---

## 8. Good First Issues

If you're new to the project, look for:

* CLI UX improvements
* better notifications
* analytics improvements
* documentation updates

---

Thanks again for helping improve **go-pomodoro**.
