'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative px-4 pt-24 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 px-4 py-2 text-sm backdrop-blur"
        >
          <Sparkles className="w-4 h-4 text-blue-600" />
          AI-Powered Focus System
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
        >
          Deep work.
          <br />
          <span className="text-blue-600">Zero distractions.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Smart break detection, AI coaching, and real-time focus monitoring —
          designed for people who spend long hours in focused work.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/docs"
            className="
              inline-flex items-center justify-center
              px-8 py-3 rounded-xl
              bg-blue-600 hover:bg-blue-700
              text-white font-semibold
              shadow-lg hover:shadow-xl
              transition-all duration-200
            "
          >
            Get started
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;