'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, Menu, X } from 'lucide-react';
import { siteLinks } from '@/lib/site-links';

const links = [
  { href: '/', label: 'Home' },
  { href: siteLinks.docs, label: 'Docs' },
  { href: siteLinks.commands, label: 'Commands' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-300/80 bg-[#faf7f1]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-sm font-bold text-white">
            gp
          </span>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
              go-pomodoro
            </div>
            <div className="hidden text-xs text-slate-500 sm:block">
              Background focus timer for the CLI
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/imSaikirann/go-pomodoro"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
            aria-label="GitHub repository"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={siteLinks.installation}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Install
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white text-slate-700 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-stone-300 bg-[#faf7f1] md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm font-medium text-slate-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteLinks.installation}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-teal-700 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Install
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
