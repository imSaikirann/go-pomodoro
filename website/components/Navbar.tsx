"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteLinks } from "@/lib/site-links";

const links = [
  { href: "#problem", label: "Why" },
  { href: "#features", label: "Features" },
  { href: "#commands", label: "Commands" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-[60px] max-w-4xl items-center justify-between px-4 sm:px-5">
        <Link href="/" className="font-mono text-[15px] font-semibold tracking-tight text-black">
          go-pomodoro
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-black transition hover:text-neutral-600">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteLinks.installation}
            className="rounded-md bg-black px-5 py-2.5 text-sm font-semibold !text-white transition hover:bg-neutral-800"
            style={{ color: "#ffffff" }}
          >
            Install now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-black md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium text-black"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteLinks.installation}
              onClick={() => setOpen(false)}
              className="rounded-xl bg-black px-4 py-3 text-center text-sm font-semibold !text-white"
              style={{ color: "#ffffff" }}
            >
              Install now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
