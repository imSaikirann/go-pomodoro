'use client';

import { motion } from 'framer-motion';

export const ProblemSolution = () => {
  const problems = [
    {
      title: 'Most timers count minutes, not momentum',
      desc: 'A basic countdown does not tell you whether the session still fits your energy, posture, or workload.',
    },
    {
      title: 'Developers lose flow when tools force context switches',
      desc: 'When a timer drags you into a separate app, it breaks the exact focus state it is supposed to protect.',
    },
    {
      title: 'Breaks are often too generic to follow',
      desc: 'Static reminders get ignored because they do not feel timely, relevant, or useful in the moment.',
    },
    {
      title: 'Health signals are easy to overlook during deep work',
      desc: 'Long sitting and sustained strain usually show up after the damage starts, not before.',
    },
  ];

  const solutions = [
    {
      title: 'Background-first timer flow',
      desc: 'Start a session, keep using your terminal, and only check in when you want live status.',
    },
    {
      title: 'Readable CLI status',
      desc: 'See focus time, current phase, cycles, and breaks left directly from the command line.',
    },
    {
      title: 'AI break guidance when you want it',
      desc: 'With a key configured, break notifications can include context-aware recovery suggestions.',
    },
    {
      title: 'Local session history',
      desc: 'Recent sessions are stored in SQLite so the coach and your own habits have something real to build from.',
    },
  ];

  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            Why it feels better
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            A focus timer that respects terminal workflow.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            go-pomodoro is meant to stay out of your way until it has something useful to tell you.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[1.75rem] border border-stone-200 bg-white/90 p-6 shadow-sm sm:p-8"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-950">
                Where normal focus tools fall short
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Common friction in developer workflows
              </p>
            </div>

            <ul className="space-y-5">
              {problems.map((item, i) => (
                <li key={i} className="rounded-2xl border border-stone-100 bg-stone-50/70 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-[1.75rem] border border-amber-200 bg-[linear-gradient(180deg,#fff9ed,#fff4db)] p-6 shadow-sm sm:p-8"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-950">
                What go-pomodoro changes
              </h3>
              <p className="mt-1 text-sm text-amber-700">
                Less friction, more useful signal
              </p>
            </div>

            <ul className="space-y-5">
              {solutions.map((item, i) => (
                <li key={i} className="rounded-2xl border border-amber-100 bg-white/70 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
