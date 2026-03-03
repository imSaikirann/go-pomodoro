import BackButton from "@/components/common/BackButton";
import CodeBlock from "@/components/common/CodeBlock";

export default function UsagePage() {
  return (
    <div className="space-y-12">
      <BackButton />

      {/* ================= HERO ================= */}
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-lg border bg-muted/50 px-3 py-1 text-xs font-medium">
          Documentation
        </div>

        <h1 className="text-4xl font-semibold tracking-tight">
          Usage Guide
        </h1>

        <p className="max-w-2xl text-muted-foreground">
          Learn how to use <span className="font-medium">go-pomodoro</span> to run
          intelligent focus sessions, monitor posture, and get AI-powered
          productivity insights.
        </p>
      </div>

      {/* ================= QUICK START ================= */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Quick start
        </h2>

        <div className="rounded-2xl border bg-muted/40 p-6 space-y-4">
          <p className="text-sm text-muted-foreground">
            Get started in under 30 seconds.
          </p>

          <CodeBlock code={`go install github.com/imSaikirann/go-pomodoro@latest`} />
          <CodeBlock code={`pomodoro start`} />
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          How it works
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <FeatureCard
            title="Structured focus cycles"
            desc="Automatically runs focus and break cycles based on session length."
          />
          <FeatureCard
            title="Deep work detection"
            desc="Special deep mode with focus-dip intelligence."
          />
          <FeatureCard
            title="Posture monitoring"
            desc="Real-time sitting detection with smart reminders."
          />
          <FeatureCard
            title="AI productivity coach"
            desc="Personalized insights based on your recent sessions."
          />
        </div>
      </section>

      {/* ================= COMMANDS ================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Core commands
        </h2>

        <CommandBlock
          title="Start session"
          code="pomodoro start"
          desc="Start a default focus session using built-in cycle rules."
        />

        <CommandBlock
          title="Custom duration"
          code="pomodoro start -m 15"
          desc="Run a focus session with custom minutes."
        />

        <CommandBlock
          title="Deep work mode"
          code="pomodoro start --deep"
          desc="Distraction-minimized deep focus session."
        />

        <CommandBlock
          title="Posture monitor"
          code="pomodoro monitor"
          desc="Continuously detects long sitting in real time."
        />

        <CommandBlock
          title="Session history"
          code="pomodoro sessions"
          desc="View recent focus sessions and performance."
        />

        <CommandBlock
          title="AI coach"
          code="pomodoro coach"
          desc="Get personalized productivity advice."
        />
      </section>

      {/* ================= AI SETUP ================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Enable AI features
        </h2>

        <div className="rounded-2xl border bg-muted/40 p-6 space-y-5">
          <p className="text-sm text-muted-foreground">
            Set your GROQ API key to enable AI coaching and smart break tips.
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">
                Windows (PowerShell)
              </p>
              <CodeBlock code={`$env:GROQ_API_KEY="your_api_key_here"`} />
            </div>

            <div>
              <p className="text-sm font-medium mb-2">
                Mac / Linux
              </p>
              <CodeBlock code={`export GROQ_API_KEY="your_api_key_here"`} />
            </div>
          </div>

          <div className="rounded-lg border bg-background p-4 text-xs text-muted-foreground">
            After setting the key, restart your terminal.
          </div>
        </div>
      </section>

      {/* ================= BREAK RULES ================= */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Break rules
        </h2>

        <div className="rounded-2xl border bg-muted/40 p-6">
          <pre className="text-sm font-mono leading-relaxed">
{`<10 min focus   → no break
10–30 min        → 5 min break
30–60 min        → 8–10 min break
60+ min          → 15+ min break`}
          </pre>
        </div>
      </section>
    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border bg-background p-5 space-y-2">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function CommandBlock({
  title,
  code,
  desc,
}: {
  title: string;
  code: string;
  desc: string;
}) {
  return (
    <div className="space-y-3 rounded-2xl border bg-muted/40 p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{title}</h3>
      </div>
      <CodeBlock code={code} />
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}