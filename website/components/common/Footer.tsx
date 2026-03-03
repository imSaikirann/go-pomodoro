'use client';

import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-gray-200/70 dark:border-gray-800/70 bg-white dark:bg-gray-950">
      {/* ================= SOFT BLUE GLOW ================= */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* ================= BACKGROUND WORDMARK ================= */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center"
      >
        <span
          className="
            whitespace-nowrap font-bold tracking-tight
            text-blue-100 dark:text-blue-950/40
            text-[44px]
            sm:text-[70px]
            md:text-[110px]
            lg:text-[150px]
            xl:text-[190px]
            2xl:text-[230px]
            opacity-60
          "
        >
          go-pomodoro
        </span>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col items-center text-center gap-6 sm:gap-8"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            Build healthier focus habits
          </h3>

          <p className="max-w-xl text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            Designed for people who spend long hours sitting and want smarter
            awareness around breaks, posture, and sustained deep work.
          </p>

          {/* GitHub button */}
          <a
            href="https://github.com/imSaikirann/go-pomodoro"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group inline-flex items-center gap-2 rounded-xl
              border border-gray-200 dark:border-gray-800
              px-4 py-2.5 text-sm font-medium
              text-gray-700 dark:text-gray-300
              bg-white/80 dark:bg-gray-900/80
              backdrop-blur
              transition-all duration-200
              hover:border-blue-200 dark:hover:border-blue-800
              hover:text-blue-600 dark:hover:text-blue-400
              hover:shadow-sm
            "
          >
            <Github
              size={16}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            View on GitHub
          </a>
        </motion.div>

        {/* Divider */}
        <div className="my-10 sm:my-12 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} go-pomodoro. All rights reserved.
          </p>

          <p className="text-[11px] text-gray-400 dark:text-gray-500">
            Crafted by Sai Kiran for healthier and smarter deep work habits.
          </p>
        </div>
      </div>
    </footer>
  );
}