import { Brain, Clock3, Database, PlayCircle } from "lucide-react";
import SectionLabel from "./SectionLabel";

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

export default function Features() {
  return (
    <section id="features" className="border-t border-neutral-200 px-4 py-20 sm:px-5 sm:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <SectionLabel>Features</SectionLabel>
        <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-5xl">Everything you need, nothing loud.</h2>
        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="rounded-2xl border border-neutral-200 bg-white p-5 text-center sm:p-6">
                <Icon className="mx-auto h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16" strokeWidth={1.75} />
                <h3 className="mt-5 text-lg font-semibold text-black sm:mt-6">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-900">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
