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
        <Terminal className="mx-auto h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-neutral-500" strokeWidth={1.75} />
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
          className="mt-8 inline-flex items-center justify-center rounded-sm bg-neutral-900 px-7 py-3 text-sm font-semibold !text-white transition hover:bg-neutral-800"
          style={{ color: "#ffffff" }}
        >
          View command docs
        </a>
      </div>
    </section>
  );
}
