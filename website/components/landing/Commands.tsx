const commands = [
  { name: "pomodoro start",          desc: "25 min default"  },
  { name: "pomodoro start -m 45",    desc: "custom duration" },
  { name: "pomodoro start -m 60 -d", desc: "deep mode"       },
  { name: "pomodoro status -w",      desc: "live watch"      },
  { name: "pomodoro pause",          desc: "pause session"   },
  { name: "pomodoro resume",         desc: "resume paused"   },
  { name: "pomodoro sessions",       desc: "view history"    },
  { name: "pomodoro coach",          desc: "AI break tip"    },
];

const steps = [
  { num: 1, title: "Install globally",              code: "npm i -g go-pomodoro"          },
  { num: 2, title: "Start your first session",      code: "pomodoro start"                },
  { num: 3, title: "Check progress anytime",        code: "pomodoro status -w"            },
  { num: 4, title: "Optionally enable AI coaching", code: 'export GROQ_API_KEY="sk-..."'  },
];

export default function Commands() {
  return (
    <section id="commands" className="px-[6vw] py-20 max-w-[1100px] mx-auto">
      <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#aaa] mb-4">Commands</div>
      <h2 className="text-[clamp(28px,3.5vw,42px)] font-semibold tracking-[-0.03em] leading-[1.15] mb-4">
        The full surface.
      </h2>
      <p className="text-base font-light text-[#666] max-w-[500px] leading-[1.75] mb-14">
        Eight commands. Flags for every use case. Built on Cobra for built-in help and discoverability.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Command list */}
        <div className="flex flex-col gap-1">
          {commands.map((c) => (
            <div
              key={c.name}
              className="flex items-center px-4 py-3 bg-[#f9f9f9] rounded-md border border-[#f0f0f0] hover:border-[#ccc] hover:bg-[#f5f5f5] transition-colors cursor-default"
            >
              <span className="font-mono text-xs font-medium text-[#0a0a0a]">{c.name}</span>
              <span className="font-mono text-xs text-[#bbb] ml-auto">{c.desc}</span>
            </div>
          ))}
        </div>

        {/* Setup steps */}
        <div>
          <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#aaa] mb-5">
            Setup in 60 seconds
          </div>
          <div className="flex flex-col gap-5">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-4 items-start">
                <div className="w-7 h-7 bg-[#0a0a0a] text-white rounded-full font-mono text-xs font-medium flex items-center justify-center shrink-0 mt-0.5">
                  {s.num}
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1.5">{s.title}</h4>
                  <code className="font-mono text-xs bg-[#f5f5f5] border border-[#ebebeb] px-3 py-1.5 rounded text-[#0a0a0a] inline-block">
                    {s.code}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}