import React from "react";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Terminal block */}
        <div className="rounded-xl border bg-muted/30 font-mono text-sm">
          {/* terminal header */}
          <div className="flex items-center justify-between border-b px-4 py-2 text-xs text-muted-foreground">
            <span>~/go-pomodoro</span>
            <span className="opacity-60">bash</span>
          </div>

          {/* terminal content */}
          <div className="space-y-2 px-4 py-4">
            <p className="text-muted-foreground">
              <span className="text-foreground">$</span>{" "}
              Built with focus by{" "}
              <span className="text-foreground font-medium">
                SaiKiran
              </span>
            </p>

            <a
              href="https://github.com/imSaikirann/go-pomodoro"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-muted-foreground transition hover:text-foreground"
            >
              <span className="text-foreground">$</span>
              <Github size={14} />
              <span>git clone github.com/imSaikirann/go-pomodoro</span>
            </a>
          </div>
        </div>

        {/* subtle bottom note */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} go-pomodoro. Stay focused.
        </p>
      </div>
    </footer>
  );
}