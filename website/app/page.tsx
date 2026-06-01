import {
  Activity,
  ArrowDown,
  Brain,
  CheckCircle2,
  Clock3,
  Database,
  PauseCircle,
  PlayCircle,
  Terminal,
} from "lucide-react";
import { siteLinks } from "@/lib/site-links";

const features = [
  {
    icon: PlayCircle,
    title: "Background sessions",
    text: "Start a timer and keep using your terminal. The session keeps running behind your work.",
  },
  {
    icon: Clock3,
    title: "Live status",
    text: "Check phase, time left, cycles, breaks, and progress with one readable command.",
  },
  {
    icon: Database,
    title: "Local history",
    text: "Completed sessions are saved locally, so your focus record stays on your machine.",
  },
  {
    icon: Brain,
    title: "Optional coaching",
    text: "Add an API key when you want AI break tips. Ignore it when you want a plain timer.",
  },
];

const benefits = [
  "No browser tab to babysit.",
  "No blocked terminal while a timer runs.",
  "No account, dashboard, or cloud sync.",
  "No complicated workflow to remember.",
];

const commands = [
  "pomodoro start",
  "pomodoro status -w",
  "pomodoro pause",
  "pomodoro resume",
  "pomodoro sessions",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mb-4 w-fit rounded-full border border-neutral-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white text-black">
      <section className="mx-auto flex min-h-[calc(100vh-60px)] max-w-4xl flex-col items-center justify-center px-5 pb-12 pt-24 text-center">
        <div className="mb-10 inline-flex rounded border border-neutral-300 bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-neutral-500">
          Open source <span className="px-3 text-neutral-300">-</span> CLI <span className="px-3 text-neutral-300">-</span> Go
        </div>

        <h1 className="max-w-3xl text-[44px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[64px]">
          Focus sessions
          <span className="ml-2 inline-block h-[0.95em] w-2 translate-y-1 bg-neutral-300" />
          <br />
          <span className="text-neutral-400">without the noise.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-9 text-neutral-700">
          A Pomodoro timer that lives in your terminal, runs in the background, and stays out of your way.
        </p>

        <div className="mt-12 flex w-full max-w-xl flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={siteLinks.installation}
            className="inline-flex w-full items-center justify-center rounded-lg border border-neutral-200 bg-white px-6 py-3 font-mono text-sm font-semibold text-neutral-300 transition hover:border-black hover:text-black sm:w-60"
          >
            npm i -g go-pomodoro
          </a>
          <a
            href="https://github.com/imSaikirann/go-pomodoro"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-lg border border-neutral-200 bg-white px-6 py-3 font-mono text-sm font-semibold text-neutral-300 transition hover:border-black hover:text-black sm:w-40"
          >
            View on GitHub
          </a>
        </div>

        <a
          href="#problem"
          className="mt-8 inline-flex h-11 w-11 items-center justify-center rounded-full bg-neutral-700 text-white shadow-lg transition hover:bg-black"
          aria-label="Scroll to problem section"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </section>

      <section id="problem" className="border-t border-neutral-200 px-5 py-24 text-center">
        <SectionLabel>Problem</SectionLabel>
        <Activity className="mx-auto h-20 w-20" />
        <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Most timers interrupt the focus they are supposed to protect.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-600">
          Browser timers pull you into another tab. App timers add another window. Many CLI timers block your shell. go-pomodoro keeps the timer useful and quiet.
        </p>
      </section>

      <section id="features" className="border-t border-neutral-200 px-5 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <SectionLabel>Features</SectionLabel>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Everything you need, nothing loud.</h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-2xl border border-neutral-200 bg-white p-6 text-center">
                  <Icon className="mx-auto h-16 w-16" />
                  <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="benefits" className="border-t border-neutral-200 px-5 py-24 text-center">
        <SectionLabel>Benefits</SectionLabel>
        <PauseCircle className="mx-auto h-20 w-20" />
        <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Less setup. Less switching. More work finished.
        </h2>
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center justify-center gap-3 rounded-2xl border border-neutral-200 p-5 text-sm font-medium">
              <CheckCircle2 className="h-6 w-6 shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="commands" className="border-t border-neutral-200 px-5 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Commands</SectionLabel>
          <Terminal className="mx-auto h-20 w-20" />
          <h2 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">Small command surface.</h2>
          <div className="mt-12 overflow-hidden rounded-2xl border border-neutral-200 text-left">
            {commands.map((command) => (
              <div key={command} className="border-b border-neutral-200 px-5 py-4 font-mono text-sm last:border-b-0">
                {command}
              </div>
            ))}
          </div>
          <a
            href={siteLinks.commands}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            View command docs
          </a>
        </div>
      </section>

      <section className="border-t border-neutral-200 px-5 py-24 text-center text-black">
        <h2 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-black sm:text-5xl">
          Start your first
          <br />
          focus session now.
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-black">
          Open your terminal. One command is all it takes.
        </p>
        <div className="mx-auto mt-10 inline-flex rounded-lg border border-neutral-200 bg-neutral-100 px-7 py-4 font-mono text-sm font-semibold text-black">
          npm i -g go-pomodoro
        </div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={siteLinks.docs}
            className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-7 py-3 font-mono text-sm font-semibold text-black transition hover:border-black"
          >
            Read the docs
          </a>
          <a
            href="https://github.com/imSaikirann/go-pomodoro"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-7 py-3 font-mono text-sm font-semibold text-black transition hover:border-black"
          >
            View source &gt;
          </a>
        </div>
      </section>
    </div>
  );
}
