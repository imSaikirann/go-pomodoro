"use client";

import PomodoroProblemsBento from "@/components/PomodoroProblemsBento";
import Link from "next/link";
import { motion } from "framer-motion";
import MacTerminalDemo from "@/components/MacTerminalDemo";
import FinalCTA from "@/components/FinalCTA";

export default function DocsHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* 🌌 layered glow background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* top glow */}
          <div className="absolute left-1/2 top-[-20%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[120px]" />

          {/* secondary glow */}
          <div className="absolute left-1/2 top-[10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[140px]" />

          {/* subtle radial */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.15),transparent_60%)]" />
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center px-6 text-center"
        >
          <div className="space-y-6">
            {/* ✅ Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center rounded-full border border-white/10 bg-background/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
            >
              🍅 Free & Open Source
            </motion.div>

            {/* ✅ Headline */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Stay focused from your{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                terminal
              </span>
            </motion.h1>

            {/* ✅ Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
              className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground"
            >
              go-pomodoro is a lightweight Pomodoro CLI built with Go that helps
              developers maintain deep focus with automatic cycles and smart
              break timing.
            </motion.p>

            {/* ✅ CTA Row */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
              className="flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              {/* 🔥 PRIMARY BLACK BUTTON */}
              <Link
                href="/docs"
                className="inline-flex items-center rounded-xl bg-black px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-black/90"
              >
                Get started
              </Link>

              {/* secondary */}
              <a
                href="https://github.com/imSaikirann/go-pomodoro"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl border px-7 py-3 text-sm font-medium hover:bg-muted/50 transition hover:-translate-y-0.5"
              >
                View on GitHub
              </a>
            </motion.div>

            {/* ✅ install hint */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="pt-4"
            >
              <div className="mx-auto w-fit rounded-lg border bg-muted/30 px-4 py-2 font-mono text-sm text-muted-foreground">
                npm install -g go-pomodoro
              </div>
            </motion.div>

            {/* ✅ Built with Go */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="pt-6"
            >
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <span>Built with</span>
                <span className="font-semibold text-sky-600">Go</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Terminal demo */}
      <MacTerminalDemo />

      {/* Bento */}
      <PomodoroProblemsBento />

      <FinalCTA/>
    </>
  );
}