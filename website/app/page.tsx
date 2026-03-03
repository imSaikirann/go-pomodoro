'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Bell,
  Brain,
  BarChart3,
  TerminalSquare,
  Sparkles,
  Github,
  Twitter,
} from 'lucide-react';
import { ProblemSolution } from '@/components/landing/ProblemSolution';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { BreakCard } from '@/components/landing/bento/BreakCard';
import { CoachCard } from '@/components/landing/bento/CoachCard';
import { MonitorCard } from '@/components/landing/bento/MonitorCard';
import { CliCard } from '@/components/landing/bento/CliCard';
import { RealityCheck } from '@/components/landing/RealityCheck';
import Hero from '@/components/landing/Hero';






const SocialProof = () => (
  <section className="px-4 py-10 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-5xl text-center">
      <p className="text-sm text-gray-500 mb-6">
        Trusted by focused developers worldwide
      </p>

      <div className="flex flex-wrap justify-center gap-8 opacity-70 text-sm font-semibold text-gray-600 dark:text-gray-400">
        <span>Developers</span>
        <span>Startup Founders</span>
        <span>Remote Teams</span>
        <span>Indie Hackers</span>
      </div>
    </div>
  </section>
);


const CTA = () => {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div
        className="
          mx-auto max-w-4xl text-center rounded-3xl p-12
          bg-gradient-to-b from-blue-50 to-white
          dark:from-blue-950/30 dark:to-gray-950
          border border-blue-100 dark:border-blue-900/40
        "
      >
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
          Build healthier focus habits
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
          Stay aware of long sitting, take smarter breaks, and protect your
          deep work energy throughout the day.
        </p>

        <button
          className="
            px-8 py-3 rounded-xl
            bg-blue-600 hover:bg-blue-700
            text-white font-medium
            shadow-sm hover:shadow-md
            transition-all duration-200
          "
        >
          Get started
        </button>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Hero />
      <SocialProof />
      <ProblemSolution/>
      <RealityCheck/>

<section className="px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <BreakCard />
    <CoachCard />
    <MonitorCard />
    <CliCard />
  </div>
</section>
      <HowItWorks/>


      <CTA />

    </main>
  );
}