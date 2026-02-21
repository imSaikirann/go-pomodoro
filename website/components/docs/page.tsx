export default function DocsHome() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">go-pomodoro</h1>

      <p className="text-muted-foreground">
        go-pomodoro is a developer-first Pomodoro CLI built with Go that helps
        you stay focused directly from the terminal.
      </p>

      <div className="rounded-xl border bg-muted/40 p-4">
        <p className="text-sm font-medium mb-2">Quick install</p>
        <pre className="text-sm overflow-x-auto">
          <code>npm i -g go-pomodoro</code>
        </pre>
      </div>
    </div>
  );
}