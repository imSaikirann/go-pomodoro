import Link from "next/link";
import CodeBlock from "@/components/common/CodeBlock";
import BackButton from "@/components/common/BackButton";

export default function DocsHomePage() {
  return (
    <div className="space-y-8">
      <BackButton/>
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">go-pomodoro</h1>

        <p className="text-muted-foreground">
          go-pomodoro is a developer-first Pomodoro CLI built with Go that helps
          you stay focused directly from the terminal. No distractions, no UI
          clutter — just fast, keyboard-driven productivity.
        </p>

        <p className="text-sm text-muted-foreground">
          Designed for developers who live in the terminal and want a simple,
          reliable way to manage deep work sessions.
        </p>

        <Link
          href="/docs/installation"
          className="inline-flex text-sm font-medium text-primary hover:underline underline-offset-4"
        >
          View full installation guide 
        </Link>
      </div>

      {/* Quick install */}

        <p className="text-sm font-medium">Quick install</p>

        <CodeBlock code="npm i -g go-pomodoro" />

        <p className="text-sm text-muted-foreground">
          After installation, verify it works:
        </p>

        <CodeBlock code="pomodoro -v" />
      </div>

  );
}