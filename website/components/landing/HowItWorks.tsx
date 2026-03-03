'use client';

import { motion } from 'framer-motion';

export const HowItWorks = () => {
  const steps = [
    {
      title: 'Start from your terminal',
      desc: 'Install and launch a deep work session instantly using the go-pomodoro CLI.',
    },
    {
      title: 'AI observes your focus patterns',
      desc: 'Your sessions, breaks, and sitting behavior are analyzed in real time.',
    },
    {
      title: 'Get smarter every session',
      desc: 'Receive adaptive break suggestions and coaching that improves your deep work.',
    },
  ];

  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            How go-pomodoro works
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Three steps between you and distraction-free deep work.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-8
                bg-white/70 dark:bg-gray-900/70
                backdrop-blur-xl
                border border-gray-200/60 dark:border-gray-800/60
                shadow-sm hover:shadow-xl
                transition-all duration-300"
            >
              <div className="text-3xl font-bold text-blue-600 mb-4">
                0{i + 1}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};