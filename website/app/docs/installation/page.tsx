export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Installation</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Install via npm (recommended)</h2>

        <pre className="rounded-xl bg-muted p-4 text-sm overflow-x-auto">
          <code>npm i -g go-pomodoro</code>
        </pre>

        <p className="text-muted-foreground text-sm">
          After installation, verify:
        </p>

        <pre className="rounded-xl bg-muted p-4 text-sm">
          <code>pomodoro start</code>
        </pre>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Install via Go</h2>

        <pre className="rounded-xl bg-muted p-4 text-sm overflow-x-auto">
          <code>go install github.com/imSaikirann/go-pomodoro@latest</code>
        </pre>
      </section>
    </div>
  );
}