"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24">
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <div className="h-64 w-[500px] rounded-full bg-sky-500/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl border bg-background/60 p-10 text-center backdrop-blur"
      >
        <div className="mx-auto max-w-2xl space-y-5">
          {/* headline */}
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to focus without distractions?
          </h2>

          {/* description */}
          <p className="text-muted-foreground">
            Start your first Pomodoro session in seconds and stay in the flow
            where developers work best in the terminal.
          </p>

          {/* buttons */}
          <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
            <Link
              href="/docs"
              className="inline-flex items-center rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-black/90"
            >
              Get started
            </Link>

          
          </div>
        </div>
      </motion.div>
    </section>
  );
}