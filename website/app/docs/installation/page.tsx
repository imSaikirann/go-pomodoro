import Link from "next/link";
import CodeBlock from "@/components/common/CodeBlock";
import BackButton from "@/components/common/BackButton";

export default function InstallationPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <BackButton />

      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Installation
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground">
          Get go-pomodoro up and running in seconds.
        </p>
      </div>

      {/* npm */}
      <div className="space-y-4">
        <p className="text-sm font-medium">
          Install via npm (recommended)
        </p>

        <CodeBlock code="npm i -g go-pomodoro" />

        <p className="text-sm text-muted-foreground">
          After installation, verify it works:
        </p>

        <CodeBlock code="pomodoro -v" />
      </div>


   


      {/* Next step */}
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