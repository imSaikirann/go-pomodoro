import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 flex items-center justify-center">
      <main className="w-full max-w-2xl px-6 py-24 space-y-10">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">
            🍅 go-pomodoro
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 leading-7">
            A simple and lightweight <span className="font-medium">Pomodoro timer CLI</span>{" "}
            built with <span className="font-medium">Go</span> to help developers stay focused
            directly from the terminal.
          </p>
        </header>

        {/* Features */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Features</h2>
          <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
            <li>Terminal-based Pomodoro timer</li>
            <li>Default 25-minute focus session</li>
            <li>Custom duration support</li>
            <li>Minimal and distraction-free</li>
          </ul>
        </section>

        {/* Installation */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Installation</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Make sure Go is installed:{" "}
            <a
              href="https://go.dev/dl"
              className="underline underline-offset-4"
              target="_blank"
            >
              https://go.dev/dl
            </a>
          </p>

          <pre className="rounded-lg bg-zinc-100 dark:bg-zinc-900 p-4 text-sm overflow-x-auto">
            <code>
go install github.com/imSaikirann/go-pomodoro/cmd/pomodoro@latest
            </code>
          </pre>
        </section>

        {/* Usage */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Usage</h2>

          <p className="text-zinc-600 dark:text-zinc-400">
            Start a Pomodoro session (default 25 minutes):
          </p>

          <pre className="rounded-lg bg-zinc-100 dark:bg-zinc-900 p-4 text-sm overflow-x-auto">
            <code>
pomodoro start
            </code>
          </pre>

          <p className="text-zinc-600 dark:text-zinc-400">
            Start a Pomodoro session with a custom duration (minutes):
          </p>

          <pre className="rounded-lg bg-zinc-100 dark:bg-zinc-900 p-4 text-sm overflow-x-auto">
            <code>
pomodoro start 15
            </code>
          </pre>
        </section>

        {/* Footer */}
        <footer className="pt-8 text-sm text-zinc-500 dark:text-zinc-400">
          Built for developers who prefer focus over noise.
        </footer>
      </main>
    </div>
  );
}
