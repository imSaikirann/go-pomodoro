'use client';

import { motion } from 'framer-motion';

export const RealityCheck = () => {
  const shouldUse = [
    'You spend long hours sitting at your desk',
    'You often lose track of time while working or studying',
    'You feel neck, shoulder, or lower back stiffness',
    'You forget to take breaks during focused sessions',
    'You want healthier, more sustainable work habits',
  ];

  const maybeNot = [
    'You rarely sit for extended periods',
    'You already follow a strict break routine manually',
    'You prefer completely hands-off productivity tools',
    'You are only looking for a simple timer',
  ];

  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            A quick reality check
          </h2>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Many people don’t realize how long they stay seated until fatigue,
            stiffness, and focus drop start to appear. If long sitting is part
            of your daily routine, your body and productivity are already being
            affected.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* SHOULD USE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl p-8
              bg-blue-50/60 dark:bg-blue-950/20
              border border-blue-200/60 dark:border-blue-900/40
              shadow-sm"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                This will help you if…
              </h3>
              <p className="text-sm text-blue-700/80 dark:text-blue-300/80 mt-1">
                Long sitting is part of your daily life
              </p>
            </div>

            <ul className="space-y-4">
              {shouldUse.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  ✓ {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* MAYBE NOT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-2xl p-8
              bg-white dark:bg-gray-900
              border border-gray-200 dark:border-gray-800
              shadow-sm"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                You may not need this if…
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Keeping expectations clear
              </p>
            </div>

            <ul className="space-y-4">
              {maybeNot.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  — {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      
      </div>
    </section>
  );
};