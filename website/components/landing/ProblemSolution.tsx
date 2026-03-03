'use client';

import { motion } from 'framer-motion';

export const ProblemSolution = () => {
  const problems = [
    {
      title: 'Focus tools measure time — not real focus',
      desc: 'Most timers only count minutes. They do not understand fatigue, posture, or cognitive decline during long sessions.',
    },
    {
      title: 'Long sitting is silently damaging developers',
      desc: 'Research shows prolonged sitting is associated with increased risk of back pain, neck strain, and reduced metabolic health.',
    },
    {
      title: 'Break reminders are generic and mistimed',
      desc: 'Static intervals ignore your actual workload and energy patterns, which leads to ignored or poorly timed breaks.',
    },
    {
      title: 'Most tools are not built for terminal workflows',
      desc: 'Developers live in the CLI, yet most productivity tools force heavy GUI interruptions that break deep work flow.',
    },
  ];

  const solutions = [
    {
      title: 'Behavior-aware focus intelligence',
      desc: 'go-pomodoro analyzes real session patterns — not just elapsed time — to understand your true focus rhythm.',
    },
    {
      title: 'Proactive fatigue and sitting signals',
      desc: 'The system monitors prolonged work patterns and nudges you before strain and burnout begin to accumulate.',
    },
    {
      title: 'Adaptive break recommendations',
      desc: 'Break timing evolves with your usage patterns instead of relying on rigid, one-size-fits-all intervals.',
    },
    {
      title: 'Built terminal-first for serious developers',
      desc: 'Start and control deep work directly from your CLI without breaking your flow state.',
    },
  ];

  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Most focus tools miss the
            <span className="text-blue-600"> real problem</span>
          </h2>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Developers are not struggling with timers — they are struggling with
            cognitive fatigue, long sitting strain, and broken deep work flow.
            go-pomodoro is designed to fix the root causes.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* ================= PROBLEMS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl p-8
              bg-white dark:bg-gray-900
              border border-gray-200 dark:border-gray-800
              shadow-sm"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                What developers are missing
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Hidden productivity and health risks
              </p>
            </div>

            <ul className="space-y-6">
              {problems.map((item, i) => (
                <li key={i} className="space-y-1">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ================= SOLUTIONS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-2xl p-8
              bg-blue-50/60 dark:bg-blue-950/20
              border border-blue-200/60 dark:border-blue-900/40
              shadow-sm"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                How go-pomodoro solves it
              </h3>
              <p className="text-sm text-blue-700/80 dark:text-blue-300/80 mt-1">
                Intelligence instead of simple timers
              </p>
            </div>

            <ul className="space-y-6">
              {solutions.map((item, i) => (
                <li key={i} className="space-y-1">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ================= RESEARCH NOTE ================= */}
        <div className="mt-10 text-center max-w-3xl mx-auto">
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            Studies from major health organizations have linked prolonged sitting
            with increased risk of musculoskeletal strain and reduced metabolic
            health. go-pomodoro is designed to encourage healthier deep work
            patterns.
          </p>
        </div>
      </div>
    </section>
  );
};