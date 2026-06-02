import { Activity } from "lucide-react";
import SectionLabel from "./SectionLabel";

export default function Problem() {
  return (
    <section id="problem" className="border-t border-neutral-200 px-4 py-20 text-center sm:px-5 sm:py-24">
      <SectionLabel>Problem</SectionLabel>
      <Activity className="mx-auto h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-neutral-500" strokeWidth={1.75} />
      <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-black sm:mt-8 sm:text-5xl">
        Most timers interrupt the focus they are supposed to protect.
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-900">
        Browser timers pull you into another tab. App timers add another window. Many CLI timers block your shell. go-pomodoro keeps the timer useful and quiet.
      </p>
    </section>
  );
}
