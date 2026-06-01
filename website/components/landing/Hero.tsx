export default function Hero() {
  return (
    <section className="px-[6vw] pt-24 pb-20 text-center max-w-[820px] mx-auto">
      <div className="inline-block font-mono text-[11px] tracking-[0.12em] uppercase text-[#888] border border-[#e0e0e0] px-[14px] py-[5px] rounded mb-9">
        Open source &nbsp;·&nbsp; CLI &nbsp;·&nbsp; Go
      </div>

      <h1 className="text-[clamp(36px,6vw,68px)] font-semibold leading-[1.08] tracking-[-0.04em] mb-6">
        Focus sessions
        <br />
        <span className="text-[#aaa]">without the noise.</span>
      </h1>

      <p className="text-lg font-light text-[#555] max-w-[520px] mx-auto leading-[1.7] mb-11">
        A Pomodoro timer that lives in your terminal, runs in the background,
        and stays out of your way.
      </p>

      <div className="flex gap-3 justify-center flex-wrap mb-0">
        <button className="bg-[#0a0a0a] text-white font-mono text-sm font-medium px-7 py-3.5 rounded-lg hover:opacity-70 transition-opacity border-none cursor-pointer">
          npm i -g go-pomodoro &nbsp;↗
        </button>
        <button className="bg-white text-[#0a0a0a] font-mono text-sm font-medium px-7 py-3.5 rounded-lg border border-[#ddd] hover:border-[#aaa] transition-colors cursor-pointer">
          View on GitHub
        </button>
      </div>

      {/* Terminal */}
      <div className="max-w-[640px] mx-auto mt-14 bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#1f1f1f]">
        <div className="px-4 py-3 flex gap-1.5 items-center border-b border-[#1f1f1f]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block" />
          <span className="font-mono text-[11px] text-[#555] ml-2">~/workspace</span>
        </div>
        <div className="p-6 font-mono text-[13px] leading-loose text-left">
          <div>
            <span className="text-[#555]">$ </span>
            <span className="text-white">pomodoro start -m 25</span>
          </div>
          <div className="text-[#27c93f] text-xs">✓ Session started · 25 min · running in background</div>
          <div className="mt-2">
            <span className="text-[#555]">$ </span>
            <span className="text-white">pomodoro status -w</span>
          </div>
          <div className="text-[#ffbd2e] text-xs">Focus · 18:42 left · cycle 1/4 · ████████░░░░░░░░░░░░ 43%</div>
          <div className="mt-2 text-[#444] text-xs"># your terminal is still yours</div>
          <div>
            <span className="text-[#555]">$ </span>
            <span className="text-white">git commit -m &quot;ship it&quot;</span>
          </div>
          <div className="text-[#27c93f] text-xs">✓ 3 files changed, 42 insertions</div>
        </div>
      </div>
    </section>
  );
}