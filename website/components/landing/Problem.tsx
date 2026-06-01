const problems = [
  {
    icon: "🖥️",
    title: "Browser timers steal focus",
    text: "Switching to a tab just to check your timer breaks the flow you were trying to protect in the first place.",
  },
  {
    icon: "⏸️",
    title: "Blocking processes are useless",
    text: "Most CLI timers lock your terminal for 25 minutes. You can't type a single command while they run.",
  },
  {
    icon: "📊",
    title: "No session memory",
    text: "When the session ends, it's gone. No history, no patterns, no way to understand your focus habits over time.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="px-[6vw] py-20 max-w-[1100px] mx-auto">
      <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#aaa] mb-4">The problem</div>
      <h2 className="text-[clamp(28px,3.5vw,42px)] font-semibold tracking-[-0.03em] leading-[1.15] mb-4">
        Pomodoro tools get in the way.
      </h2>
      <p className="text-base font-light text-[#666] max-w-[500px] leading-[1.75] mb-14">
        Every existing timer asks you to switch context, watch a countdown, or install an app. You just want to focus.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e8e8e8] border border-[#e8e8e8] rounded-xl overflow-hidden">
        {problems.map((p) => (
          <div key={p.title} className="bg-white p-8">
            <div className="text-[40px] mb-5 leading-none">{p.icon}</div>
            <h3 className="text-base font-semibold tracking-tight mb-2">{p.title}</h3>
            <p className="text-sm font-light text-[#666] leading-relaxed">{p.text}</p>
          </div>
        ))}
        <div className="bg-[#0a0a0a] p-8">
          <div className="text-[40px] mb-5 leading-none">✦</div>
          <h3 className="text-base font-semibold tracking-tight mb-2 text-white">
            go-pomodoro solves all three.
          </h3>
          <p className="text-sm font-light text-[#555] leading-relaxed">
            Runs in the background. Status on demand. Stores sessions locally in SQLite. No setup required.
          </p>
        </div>
      </div>
    </section>
  );
}