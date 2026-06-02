"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteLinks } from "@/lib/site-links";

const links = [
  { href: "#problem", label: "Why" },
  { href: "#features", label: "Features" },
  { href: "#commands", label: "Commands" },
  { href: siteLinks.docs, label: "Docs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-[60px] max-w-4xl items-center justify-between px-4 sm:px-5">
        <Link href="/" className="font-mono text-[15px] font-semibold tracking-tight text-black">
          go-pomodoro
        </Link>

        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-black transition hover:border-black"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>

          {open && (
            <nav className="absolute right-0 top-12 w-44 overflow-hidden rounded-lg border border-neutral-200 bg-white text-left shadow-lg">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-neutral-100 px-4 py-3 text-sm font-medium text-black transition last:border-b-0 hover:bg-neutral-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteLinks.installation}
              onClick={() => setOpen(false)}
              className="block bg-black px-4 py-3 text-sm font-semibold !text-white transition hover:bg-neutral-800"
              style={{ color: "#ffffff" }}
            >
              Install now
            </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
