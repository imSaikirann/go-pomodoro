const benefits = [
  {
    num: "0",
    title: "Context switches to start",
    text: "One command from your terminal. No app to open, no tab to switch to. You're already in the right place.",
  },
  {
    num: "∞",
    title: "Terminal access while running",
    text: "The daemon model means your terminal is always free. Code, commit, and build while your timer counts down.",
  },
  {
    num: "100%",
    title: "Your data, offline",
    text: "SQLite. Local. No network calls unless you opt into AI coaching. Nothing leaves your machine without your say.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="px-[6vw] py-20 max-w-[1100px] mx-auto">
      <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#aaa] mb-4">Why it works</div>
      <h2 className="text-[clamp(28px,3.5vw,42px)] font-semibold tracking-[-0.03em] leading-[1.15] mb-4">
        Built around how you actually work.
      </h2>
      <p className="text-base font-light text-[#666] max-w-[500px] leading-[1.75] mb-14">
        Deep focus requires low friction. Every decision in go-pomodoro reduces the cost of starting a session.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#e8e8e8] border border-[#e8e8e8] rounded-xl overflow-hidden">
        {benefits.map((b) => (
          <div key={b.title} className="bg-white p-9">
            <div className="font-mono text-[48px] font-light tracking-[-0.04em] leading-none mb-2">{b.num}</div>
            <h3 className="text-[15px] font-semibold tracking-tight mb-2">{b.title}</h3>
            <p className="text-[13px] font-light text-[#777] leading-relaxed">{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}