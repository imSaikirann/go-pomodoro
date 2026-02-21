"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const command = "$ pomodoro start";

export default function MacTerminalDemo() {
  const [typed, setTyped] = useState("");
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // typing effect
  useEffect(() => {
    if (typed.length < command.length) {
      const t = setTimeout(() => {
        setTyped(command.slice(0, typed.length + 1));
      }, 45);
      return () => clearTimeout(t);
    } else {
      setRunning(true);
    }
  }, [typed]);

  // timer effect
  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [running]);

  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-xl"
    >
      <div className="overflow-hidden rounded-2xl border bg-black text-green-400 shadow-xl">
        {/* mac header */}
        <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-3 text-xs text-zinc-400">
            go-pomodoro — bash
          </span>
        </div>

        {/* terminal body */}
        <div className="space-y-3 p-5 font-mono text-sm">
          <div>
            {typed}
            <span className="ml-1 animate-pulse">▌</span>
          </div>

          {/* running timer */}
          {running && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-500"
            >
              Focus session running… {mins}:{secs}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}