import Link from "next/link";
import { siteLinks } from "@/lib/site-links";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white px-4 py-8 text-black sm:px-5">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div className="shrink-0">
          <Link href="/" className="font-mono text-sm font-semibold">
            go-pomodoro
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-black">
          <a
            href="https://github.com/imSaikirann/go-pomodoro"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-600"
          >
            GitHub
          </a>
          <a href={siteLinks.docs} className="hover:text-neutral-600">
            Docs
          </a>
          <a href={siteLinks.commands} className="hover:text-neutral-600">
            Commands
          </a>
          <a href="#" className="hover:text-neutral-600">
            Changelog
          </a>
        </div>

        <div className="text-xs font-medium text-neutral-800">
          MIT License - Built with Go
        </div>
      </div>
    </footer>
  );
}
