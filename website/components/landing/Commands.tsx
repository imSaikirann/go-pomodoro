import { Terminal } from "lucide-react";
import { siteLinks } from "@/lib/site-links";
import SectionLabel from "./SectionLabel";

const commands = [
  "pomodoro start",
  "pomodoro status -w",
  "pomodoro pause",
  "pomodoro resume",
  "pomodoro sessions",
];

export default function Commands() {
  return (
    <section id="commands" className="border-t border-neutral-200 px-4 py-20 sm:px-5 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <SectionLabel>Commands</SectionLabel>
        <Terminal className="mx-auto h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20" strokeWidth={1.75} />
        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-black sm:mt-8 sm:text-5xl">Small command surface.</h2>
        <div className="mt-10 overflow-hidden rounded-2xl border border-neutral-300 text-left sm:mt-12">
          {commands.map((command) => (
            <div key={command} className="border-b border-neutral-200 px-4 py-4 font-mono text-sm font-semibold text-black last:border-b-0 sm:px-5">
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
  );
}
