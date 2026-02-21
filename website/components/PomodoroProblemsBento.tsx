"use client";

import { motion } from "framer-motion";

export default function PomodoroFeaturesBento() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-14 max-w-2xl text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Built for how developers actually work
        </h2>
        <p className="mt-3 text-muted-foreground">
          go-pomodoro removes friction from focus sessions with a
          terminal-first workflow and smart break alerts.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[190px]">
        
        {/* 🖥 TERMINAL CARD — PREMIUM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 text-white lg:col-span-2 lg:row-span-2"
        >
          {/* subtle glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_60%)]" />

          <div className="relative flex h-full flex-col justify-between">
            <div>
              <p className="text-xs text-white/60">Terminal-first</p>
              <h3 className="mt-3 text-2xl font-semibold">
                Stay in your coding flow
              </h3>
              <p className="mt-3 max-w-md text-sm text-white/70">
                Run focus sessions directly from your terminal. No browser
                tabs. No heavy UI. Just pure deep work where developers live.
              </p>
            </div>

            {/* fake terminal */}
            <div className="mt-6 w-fit rounded-md border border-white/10 bg-black/60 px-3 py-2 font-mono text-xs text-green-400">
              $ pomodoro start
            </div>
          </div>
        </motion.div>

        {/* 🔔 ALERT CARD — MORE REALISTIC */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-background/60 backdrop-blur p-6"
        >
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Smart alerts</p>
              <h3 className="mt-2 font-semibold">
                Break time, right on time
              </h3>
            </div>

            {/* 🔥 OS-style notification */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              viewport={{ once: true }}
              className="mt-4 rounded-lg border border-white/10 bg-black/80 p-3 text-xs text-white shadow-lg"
            >
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <div className="space-y-1">
                  <p className="font-medium">go-pomodoro</p>
                  <p className="text-white/70">
                    Break time started. Step away and recharge.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 🎯 FOCUS CARD — CLEAN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          viewport={{ once: true }}
          className="group rounded-2xl border border-white/10 bg-muted/30 p-6 backdrop-blur"
        >
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-xs text-muted-foreground">
                Distraction-free
              </p>
              <h3 className="mt-2 font-semibold">
                Minimal by design
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                No dashboards. No noise. Just a fast CLI timer built
                for deep focus sessions.
              </p>
            </div>

            <span className="font-mono text-xs text-muted-foreground">
              → deep work ready
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}