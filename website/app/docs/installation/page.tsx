export default function Installation() {
  return (
    <div className="max-w-3xl mx-auto py-20 space-y-6">
      <h1 className="text-3xl font-semibold">Installation</h1>

      <h2 className="text-xl font-medium">Install via Go</h2>
      <pre className="bg-muted rounded-xl p-4 text-sm">
        <code>
go install github.com/imSaikirann/go-pomodoro/cmd/pomodoro@latest
        </code>
      </pre>

      <h2 className="text-xl font-medium">Run</h2>
      <pre className="bg-muted rounded-xl p-4 text-sm">
        <code>
pomodoro start
        </code>
      </pre>
    </div>
  );
}
