"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteLinks } from "@/lib/site-links";

export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/docs")) {
    return null;
  }

  return (
    <footer className="border-t border-stone-300 bg-[#f3eee5]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-900">go-pomodoro</p>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            A background-first Pomodoro CLI with live status, session history, and optional AI break tips.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:justify-items-end">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Site
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <Link href="/">Home</Link>
              <a href={siteLinks.docs} target="_blank" rel="noreferrer">Docs</a>
              <a href={siteLinks.commands} target="_blank" rel="noreferrer">Commands</a>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Project
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <a href="https://github.com/imSaikirann/go-pomodoro" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={siteLinks.installation} target="_blank" rel="noreferrer">Install</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-300 px-4 py-4 text-center text-xs text-slate-500 sm:px-6">
        &copy; {new Date().getFullYear()} go-pomodoro
      </div>
    </footer>
  );
}
