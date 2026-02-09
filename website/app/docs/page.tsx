export default function DocsHome() {
  return (
    <div className="max-w-3xl mx-auto py-20 space-y-8">
      <h1 className="text-4xl font-semibold">Documentation</h1>

      <p className="text-muted-foreground">
        Learn how to install, configure, and use go-pomodoro from your terminal.
      </p>

      <ul className="space-y-2">
        <li><a href="/docs/installation" className="underline">Installation</a></li>
        <li><a href="/docs/commands" className="underline">Commands</a></li>
        <li><a href="/docs/usage" className="underline">Usage</a></li>
      </ul>
    </div>
  );
}
