import Link from "next/link";
import CodeBlock from "@/components/common/CodeBlock";

export default function InstallationPage() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 px-4 sm:px-0">
      {/* header */}
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Installation
        </h1>

        <p className="text-sm text-muted-foreground">
          Get go-pomodoro up and running in seconds.
        </p>
      </div>

      {/* npm */}
      <section className="space-y-4">
        <h2 className="text-base sm:text-xl font-medium">
          Install via npm (recommended)
        </h2>

        <CodeBlock code="npm i -g go-pomodoro" />

        <p className="text-sm text-muted-foreground">
          After installation, verify it works:
        </p>

        <CodeBlock code="pomodoro -v" />
      </section>

      {/* go install */}
      <section className="space-y-4">
        <h2 className="text-base sm:text-xl font-medium">
          Install via Go
        </h2>

        <CodeBlock code="go install github.com/imSaikirann/go-pomodoro@latest" />

        <p className="text-sm text-muted-foreground break-words">
          Make sure{" "}
          <span className="font-mono text-foreground">$GOPATH/bin</span>{" "}
          is in your PATH.
        </p>
      </section>

      {/* next step CTA */}
      <div className="rounded-xl border bg-muted/40 p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium">Next step</p>
          <p className="text-xs text-muted-foreground">
            Learn how to start your first focus session.
          </p>
        </div>

        <Link
          href="/docs/usage"
          className="inline-flex w-full sm:w-auto items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition"
        >
          Go to Usage →
        </Link>
      </div>
    </div>
  );
}