export default function UsagePage() {
  return (
    <div className="space-y-10">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Usage</h1>
        <p className="text-muted-foreground">
          Learn how to run focus sessions and understand how cycles work in
          go-pomodoro.
        </p>
      </div>

      {/* Help Output */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">CLI help</h2>

        <pre className="rounded-xl border bg-muted/40 p-5 text-sm overflow-x-auto font-mono">
          <code>{`go-pomodoro 🍅

Usage:
  pomodoro start [minutes | preset]

Examples:
  pomodoro start
  pomodoro start 15

Cycles:
  Sessions automatically repeat based on focus duration.
  Example:
    25 min focus → 5 min break → repeated cycles

Break rules:
  <10 min focus     → no break
  10–30 min         → 5 min break
  30–60 min         → 8–10 min break
  60+ min           → 15+ min break

Commands:
  start             Start a focus session
  help              Show this help message`}</code>
        </pre>
      </section>

      {/* Start session */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Start a focus session</h2>

        <pre className="rounded-xl border bg-muted/40 p-4 text-sm font-mono">
          <code>pomodoro start</code>
        </pre>

        <p className="text-sm text-muted-foreground">
          Starts a default focus session using the built-in cycle rules.
        </p>
      </section>

      {/* Custom duration */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Custom duration</h2>

        <pre className="rounded-xl border bg-muted/40 p-4 text-sm font-mono">
          <code>pomodoro start 15</code>
        </pre>

        <p className="text-sm text-muted-foreground">
          Start a focus session with a custom duration in minutes.
        </p>
      </section>

      {/* Workflow */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Typical workflow</h2>

        <pre className="rounded-xl border bg-muted/40 p-5 text-sm overflow-x-auto font-mono">
          <code>{`pomodoro start
# focus…
# break…
# repeat`}</code>
        </pre>
      </section>
    </div>
  );
}