'use client';

import { motion } from 'framer-motion';

export const HowItWorks = () => {
  const steps = [
    {
      title: 'Start a session',
      desc: 'Launch the timer from the CLI and immediately get your shell back.',
    },
    {
      title: 'Check status when you want',
      desc: 'Use the status command to see focus, break, cycles, and remaining time.',
    },
    {
      title: 'Let breaks guide recovery',
      desc: 'Use built-in tips by default, or enable AI for more personalized break prompts.',
    },
  ];

  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A simpler loop for deep work.
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Three small actions, no heavy dashboard required.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-[1.75rem] border border-stone-200 bg-white/85 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
            >
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                0{i + 1}
              </div>

              <h3 className="mb-2 text-lg font-semibold text-slate-950">
                {step.title}
              </h3>

              <p className="text-sm leading-6 text-slate-600">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
