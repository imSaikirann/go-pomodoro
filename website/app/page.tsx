import { ArrowRight, Brain, Clock3, Database, PlayCircle, TerminalSquare } from "lucide-react";
import CodeBlock from "@/components/common/CodeBlock";
import { siteLinks } from "@/lib/site-links";

const commandFlow = `pomodoro start -m 25
pomodoro status -w
pomodoro pause
pomodoro resume
pomodoro stop`;

const commands = [
  "pomodoro start",
  "pomodoro start -m 45",
  "pomodoro start -m 60 -d",
  "pomodoro status -w",
  "pomodoro sessions",
  "pomodoro coach",
];

const features = [
  {
    icon: PlayCircle,
    title: "Background timer",
    text: "Start a session and keep using your terminal instead of staring at a blocked process.",
  },
  {
    icon: TerminalSquare,
    title: "Live CLI status",
    text: "Watch focus time, break state, cycles, and remaining time with one command.",
  },
  {
    icon: Brain,
    title: "Optional AI tips",
    text: "Add GROQ_API_KEY when you want smarter break guidance and coach output.",
  },
  {
    icon: Database,
    title: "Local session history",
    text: "Recent sessions live in SQLite so the app can show history and coaching context.",
  },
];

export default function Home() {
  return (
    <div className="pb-16">
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:gap-8 sm:px-6 sm:py-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center lg:gap-10 lg:py-16">
        <div className="space-y-5">
          <div className="inline-flex max-w-full rounded-full border border-stone-300 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-700 sm:text-xs">
            CLI timer for deep work
          </div>

          <div className="space-y-3">
            <h1 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              A cleaner Pomodoro workflow for people who live in the terminal.
            </h1>
            <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:text-lg">
              Run focus sessions in the background, check live status on demand, and use AI break tips only when you want them.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={siteLinks.installation}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 sm:w-auto"
            >
              Install the CLI
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={siteLinks.commands}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-700 sm:w-auto"
            >
              See commands
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-stone-300 bg-white p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Timer</div>
              <div className="mt-2 text-sm font-medium text-slate-900">Runs in background</div>
            </div>
            <div className="rounded-2xl border border-stone-300 bg-white p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Status</div>
              <div className="mt-2 text-sm font-medium text-slate-900">Cycles and breaks visible</div>
            </div>
            <div className="rounded-2xl border border-stone-300 bg-white p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">AI</div>
              <div className="mt-2 text-sm font-medium text-slate-900">Optional break tips</div>
            </div>
          </div>
        </div>

        <div className="space-y-4 lg:pl-2">
          <CodeBlock code={commandFlow} />
          <div className="rounded-3xl border border-stone-300 bg-white p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Clock3 className="h-4 w-4 text-teal-700" />
              Live watch output
            </div>
            <pre className="mt-4 overflow-x-auto rounded-2xl bg-stone-950 p-4 text-[13px] leading-6 text-stone-100 sm:text-sm">
              <code>{`Focus | 24:41 | cycle 1/2 | breaks left 2 | #####--------------- |  21%
Paused | 10:12 | cycle 1/2 | breaks left 2 | ##########---------- |  58%
Break | 04:32 | cycle 1/2 | breaks left 1 | ####---------------- |  18%`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            What the CLI does well
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            The product should feel predictable, readable, and useful without over-design.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="rounded-3xl border border-stone-300 bg-white p-5 sm:p-6">
                <div className="inline-flex rounded-2xl bg-stone-100 p-3">
                  <Icon className="h-5 w-5 text-teal-700" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[0.9fr,1.1fr] lg:py-10">
        <div className="rounded-3xl border border-stone-300 bg-white p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Command surface</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Cobra gives you built-in help, flags, and discoverability.
          </p>
          <div className="mt-5 space-y-3">
            {commands.map((command) => (
              <div
                key={command}
                className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 font-mono text-sm text-slate-800"
              >
                {command}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-stone-300 bg-[#f1ece1] p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Setup in one minute</h2>
          <div className="mt-5 grid gap-4">
            <div className="rounded-2xl border border-stone-300 bg-white p-4">
              <div className="text-sm font-semibold text-slate-900">1. Install</div>
              <div className="mt-2 font-mono text-sm text-slate-700">npm i -g go-pomodoro</div>
            </div>
            <div className="rounded-2xl border border-stone-300 bg-white p-4">
              <div className="text-sm font-semibold text-slate-900">2. Start a session</div>
              <div className="mt-2 font-mono text-sm text-slate-700">pomodoro start</div>
            </div>
            <div className="rounded-2xl border border-stone-300 bg-white p-4">
              <div className="text-sm font-semibold text-slate-900">3. Enable AI later if you want</div>
              <div className="mt-2 font-mono text-sm text-slate-700">setx GROQ_API_KEY &quot;your_api_key_here&quot;</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
