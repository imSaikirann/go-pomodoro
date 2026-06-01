'use client';

import { motion } from 'framer-motion';

export const RealityCheck = () => {
  const shouldUse = [
    'You lose track of time when coding or studying',
    'You want visible cycle and break status in the CLI',
    'You prefer keyboard-first tools over productivity dashboards',
    'You want better break nudges without leaving the terminal',
  ];

  const maybeNot = [
    'You only want a plain countdown with no workflow features',
    'You dislike notifications entirely',
    'You already have a break system that feels perfect',
    'You do not care about session history or coaching',
  ];

  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            Quick check
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            This tool is best when you want focus support, not just a stopwatch.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            It works best for people who want a useful CLI routine around focus and recovery.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[1.75rem] border border-sky-200 bg-[linear-gradient(180deg,#f0f9ff,#eff6ff)] p-6 shadow-sm sm:p-8"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-950">
                A good fit if...
              </h3>
              <p className="mt-1 text-sm text-sky-700">
                You want a more intentional terminal workflow
              </p>
            </div>

            <ul className="space-y-3">
              {shouldUse.map((item, i) => (
                <li
                  key={i}
                  className="rounded-2xl border border-sky-100 bg-white/70 px-4 py-3 text-sm leading-6 text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-[1.75rem] border border-stone-200 bg-white/90 p-6 shadow-sm sm:p-8"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-950">
                Maybe skip it if...
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Your needs are much simpler
              </p>
            </div>

            <ul className="space-y-3">
              {maybeNot.map((item, i) => (
                <li
                  key={i}
                  className="rounded-2xl border border-stone-100 bg-stone-50 px-4 py-3 text-sm leading-6 text-slate-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
