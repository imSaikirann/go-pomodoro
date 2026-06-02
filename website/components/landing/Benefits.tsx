import { CheckCircle2, PauseCircle } from "lucide-react";
import SectionLabel from "./SectionLabel";

const benefits = [
  "No browser tab to babysit.",
  "No blocked terminal while a timer runs.",
  "No account, dashboard, or cloud sync.",
  "No complicated workflow to remember.",
];

export default function Benefits() {
  return (
    <section id="benefits" className="border-t border-neutral-200 px-4 py-20 text-center sm:px-5 sm:py-24">
      <SectionLabel>Benefits</SectionLabel>
      <PauseCircle className="mx-auto h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-neutral-500" strokeWidth={1.75} />
      <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-black sm:mt-8 sm:text-5xl">
        Less setup. Less switching. More work finished.
      </h2>
      <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:mt-12 sm:grid-cols-2">
        {benefits.map((benefit) => (
          <div key={benefit} className="flex items-center justify-start gap-3 rounded-2xl border border-neutral-300 p-4 text-left text-sm font-semibold text-black sm:justify-center sm:p-5 sm:text-center">
            <CheckCircle2 className="h-5 w-5 shrink-0 sm:h-6 sm:w-6 text-neutral-500" strokeWidth={2} />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
