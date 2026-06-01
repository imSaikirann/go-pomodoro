'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Sparkles, TerminalSquare } from 'lucide-react';
import DownloadProof from './DownloadProof';
import { siteLinks } from '@/lib/site-links';

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(191,219,254,0.55),transparent_36%),radial-gradient(circle_at_80%_20%,rgba(186,230,253,0.35),transparent_28%)]" />
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-sm backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-blue-600" />
            Background timer with AI guidance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Run your focus timer.
            <br />
            <span className="text-blue-600">Keep your terminal free.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0"
          >
            go-pomodoro is a Cobra-powered CLI with background sessions, live status,
            automatic cycles and breaks, session history, and AI-generated break tips.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href={siteLinks.docs}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl"
            >
              Read docs
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={siteLinks.commands}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-3 font-semibold text-slate-700 transition-all duration-200 hover:border-slate-400 hover:bg-slate-50"
            >
              See commands
            </a>
          </motion.div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-left shadow-sm">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
                <TerminalSquare className="h-4 w-4 text-sky-600" />
                Live CLI status
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Watch focus time, cycles, and breaks with <code>pomodoro status -w</code>.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-left shadow-sm">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
                <Brain className="h-4 w-4 text-sky-600" />
                Optional AI layer
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Add <code>GROQ_API_KEY</code> for AI break notifications and coaching.
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="rounded-[2rem] border border-slate-200 bg-slate-950 p-5 text-left text-slate-100 shadow-2xl"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-slate-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Live terminal flow
          </div>
          <pre className="mt-4 overflow-x-auto text-sm leading-7 text-slate-200">
            <code>{`$ pomodoro start -m 25
Pomodoro started in background
Run \`pomodoro status -w\` to watch progress

$ pomodoro status -w
Focus | 24:41 | cycle 1/2 | breaks left 2 | ###----------------- |  1%

$ pomodoro pause
Session paused

$ pomodoro resume
Session resumed`}</code>
          </pre>
          <div className="mt-4">
            <DownloadProof />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
