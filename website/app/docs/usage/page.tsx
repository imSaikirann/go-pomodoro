import BackButton from "@/components/common/BackButton";
import CodeBlock from "@/components/common/CodeBlock";

export default function UsagePage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <BackButton />

      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Usage Guide
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground">
          Learn how to use <span className="font-medium">go-pomodoro</span> to
          run focus sessions, monitor long sitting, and get AI-powered insights.
        </p>
      </div>

      {/* CLI usage */}
      <div className="space-y-4">
        <p className="text-sm font-medium">CLI usage</p>

        <CodeBlock
          code={`pomodoro [flags]
pomodoro [command]`}
        />

        <p className="text-sm text-muted-foreground">
          Use the commands below to control your focus workflow directly from
          the terminal.
        </p>
      </div>

      {/* Start */}
      <div className="space-y-4">
        <p className="text-sm font-medium">Start a focus session</p>

        <CodeBlock code="pomodoro start" />

        <p className="text-sm text-muted-foreground">
          Starts a standard focus timer using built-in break and cycle rules.
        </p>

        <CodeBlock code="pomodoro start -m 25" />

        <p className="text-sm text-muted-foreground">
          Runs a session with a custom focus duration in minutes.
        </p>
      </div>

      {/* Deep */}
      <div className="space-y-4">
        <p className="text-sm font-medium">Deep work mode</p>

        <CodeBlock code="pomodoro deep" />

        <p className="text-sm text-muted-foreground">
          Starts a distraction-minimized deep work session for longer,
          uninterrupted focus.
        </p>
      </div>

      {/* Monitor */}
      <div className="space-y-4">
        <p className="text-sm font-medium">Monitor long sitting</p>

        <CodeBlock code="pomodoro monitor" />

        <p className="text-sm text-muted-foreground">
          Continuously tracks activity and alerts you when prolonged sitting is
          detected.
        </p>
      </div>

      {/* Sessions */}
      <div className="space-y-4">
        <p className="text-sm font-medium">View session history</p>

        <CodeBlock code="pomodoro sessions" />

        <p className="text-sm text-muted-foreground">
          Displays recent focus sessions and basic productivity insights.
        </p>
      </div>

      {/* Coach */}
      <div className="space-y-4">
        <p className="text-sm font-medium">AI productivity coach</p>

        <CodeBlock code="pomodoro coach" />

        <p className="text-sm text-muted-foreground">
          Generates personalized focus recommendations based on your recent
          sessions.
        </p>
      </div>

      {/* Update */}
      <div className="space-y-4">
        <p className="text-sm font-medium">Update the CLI</p>

        <CodeBlock code="pomodoro update" />

        <p className="text-sm text-muted-foreground">
          Updates go-pomodoro to the latest available version.
        </p>
      </div>

      {/* Version */}
      <div className="space-y-4">
        <p className="text-sm font-medium">Check version</p>

        <CodeBlock code="pomodoro version" />

        <p className="text-sm text-muted-foreground">
          Prints the currently installed version.
        </p>
      </div>

      {/* AI setup */}
      <div className="space-y-4">
        <p className="text-sm font-medium">Enable AI features (Groq)</p>

        <p className="text-sm text-muted-foreground">
          To enable AI coaching and smart break suggestions, set your GROQ API
          key as an environment variable.
        </p>

        <div className="space-y-3">
          <p className="text-xs text-muted-foreground">
            macOS / Linux
          </p>
          <CodeBlock code={`export GROQ_API_KEY="your_api_key_here"`} />

          <p className="text-xs text-muted-foreground">
            Windows (PowerShell)
          </p>
          <CodeBlock code={`$env:GROQ_API_KEY="your_api_key_here"`} />
        </div>

        <p className="text-xs text-muted-foreground">
          Restart your terminal after setting the key.
        </p>
      </div>

      {/* Break explanation */}
      <div className="space-y-3">
        <p className="text-sm font-medium">How breaks are calculated</p>

        <p className="text-sm text-muted-foreground">
          Break duration and focus cycles automatically adjust based on your
          session length. Short sessions keep breaks minimal, while longer deep
          work sessions receive longer recovery periods to reduce fatigue.
        </p>
      </div>
    </div>
  );
}