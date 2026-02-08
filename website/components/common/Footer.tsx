import React from "react";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-20 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">

        {/* Left */}
        <p>
          Built with ❤️ by <span className="font-medium">SaiKiran</span>
        </p>

        {/* Right */}
        <a
          href="https://github.com/imSaikirann/go-pomodoro"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-foreground transition"
        >
          <Github size={16} />
          Star on GitHub
        </a>
      </div>
    </footer>
  );
}
