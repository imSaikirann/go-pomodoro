import { ArrowDown } from "lucide-react";
import CopyCommand from "@/components/CopyCommand";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-60px)] max-w-4xl flex-col items-center justify-center px-4 pb-12 pt-20 text-center sm:px-5 sm:pt-24">
      <div className="mb-8 inline-flex max-w-full flex-wrap justify-center rounded border border-neutral-300 bg-white px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-800 sm:mb-10 sm:px-4 sm:text-[11px] sm:tracking-[0.28em]">
        Open source <span className="px-2 text-neutral-500 sm:px-3">-</span> CLI <span className="px-2 text-neutral-500 sm:px-3">-</span> Go
      </div>

      <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight text-black sm:text-6xl md:text-7xl">
        Focus sessions
        <br />
        <span className="text-neutral-700">without the noise.</span>
      </h1>

      <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-900 sm:mt-8 sm:text-lg sm:leading-9">
        A Pomodoro timer that lives in your terminal, runs in the background, and stays out of your way.
      </p>

      <div className="mt-10 flex w-full max-w-xl flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:items-center">
        <CopyCommand command="npm i -g go-pomodoro" className="w-full sm:w-64" />
        <a
          href="https://github.com/imSaikirann/go-pomodoro"
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-lg border border-neutral-300 bg-white px-4 py-3 font-mono text-sm font-semibold text-black transition hover:border-black sm:w-40"
        >
          View on GitHub
        </a>
      </div>

      <a
        href="#problem"
        className="mt-8 inline-flex h-11 w-11 items-center justify-center rounded-full bg-neutral-200 text-white shadow-lg transition"
        aria-label="Scroll to problem section"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
