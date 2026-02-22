import React from "react";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Terminal block */}
        <div className="overflow-hidden rounded-2xl border bg-muted/30 font-mono text-sm shadow-sm">
          {/* terminal header */}
          <div className="flex items-center justify-between border-b px-4 py-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              {/* mac dots */}
              <span className="h-2 w-2 rounded-full bg-red-500/80" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
              <span className="h-2 w-2 rounded-full bg-green-500/80" />
              <span className="ml-2">~/go-pomodoro</span>
            </div>
            <span className="opacity-60">bash</span>
          </div>

          {/* terminal content */}
          <div className="space-y-3 px-4 py-5">
            <p className="leading-relaxed text-muted-foreground">
              <span className="text-foreground">$</span>{" "}
              Built with focus by{" "}
              <span className="font-semibold text-foreground">
                SaiKiran
              </span>
            </p>

            <a
              href="https://github.com/imSaikirann/go-pomodoro"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex max-w-full items-center gap-2 break-all text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="text-foreground">$</span>
              <Github
                size={14}
                className="transition-transform group-hover:scale-110"
              />
              <span className="underline-offset-4 group-hover:underline">
                git clone github.com/imSaikirann/go-pomodoro
              </span>
            </a>
          </div>
        </div>

        {/* bottom note */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} go-pomodoro. Stay focused.
        </p>
      </div>
    </footer>
  );
}