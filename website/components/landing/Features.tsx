const features = [
  {
    icon: "⚡",
    title: "Background timer",
    text: "Start a session and keep using your terminal. The timer runs as a background daemon — never blocking your workflow.",
  },
  {
    icon: "👁️",
    title: "Live status watch",
    text: "One command shows real-time progress: time left, cycle count, break state, and a visual progress bar. Pull it up whenever.",
  },
  {
    icon: "🧠",
    title: "AI break coaching",
    text: "Add your Groq API key and get context-aware break suggestions based on your session history. Completely optional.",
  },
  {
    icon: "📁",
    title: "Local session history",
    text: "Every session is stored in SQLite on your machine. No cloud, no sync, no account. Your data stays yours forever.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-[6vw] py-20 max-w-[1100px] mx-auto">
      <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#aaa] mb-4">Features</div>
      <h2 className="text-[clamp(28px,3.5vw,42px)] font-semibold tracking-[-0.03em] leading-[1.15] mb-4">
        Simple by design.
      </h2>
      <p className="text-base font-light text-[#666] max-w-[500px] leading-[1.75] mb-14">
        No dashboard. No subscription. No account. Just a timer that works the way your brain does.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="border border-[#e8e8e8] rounded-xl p-7 hover:border-[#ccc] transition-colors"
          >
            <div className="text-[36px] mb-5 leading-none">{f.icon}</div>
            <h3 className="text-[15px] font-semibold tracking-tight mb-2">{f.title}</h3>
            <p className="text-[13px] font-light text-[#666] leading-relaxed">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}