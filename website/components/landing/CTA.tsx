export default function CTA() {
  return (
    <section className="text-center px-[6vw] py-24 border-t border-[#e8e8e8]">
      <h2 className="text-[clamp(32px,5vw,56px)] font-semibold tracking-[-0.04em] leading-[1.1] mb-5">
        Start your first<br />focus session now.
      </h2>
      <p className="text-base font-light text-[#666] mb-9">
        Open your terminal. One command is all it takes.
      </p>
      <div className="inline-block font-mono text-[15px] bg-[#f5f5f5] border border-[#e8e8e8] px-7 py-3.5 rounded-lg mb-8 cursor-pointer hover:bg-[#efefef] transition-colors">
        npm i -g go-pomodoro
      </div>
      <div className="flex gap-3 justify-center flex-wrap">
        <button className="bg-[#0a0a0a] text-white font-mono text-sm font-medium px-7 py-3.5 rounded-lg hover:opacity-70 transition-opacity border-none cursor-pointer">
          Read the docs &nbsp;↗
        </button>
        <button className="bg-white text-[#0a0a0a] font-mono text-sm font-medium px-7 py-3.5 rounded-lg border border-[#ddd] hover:border-[#aaa] transition-colors cursor-pointer">
          View source →
        </button>
      </div>
    </section>
  );
}