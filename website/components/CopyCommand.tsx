"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyCommandProps = {
  command: string;
  className?: string;
};

export default function CopyCommand({ command, className = "" }: CopyCommandProps) {
  const [copied, setCopied] = useState(false);

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(command);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = command;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div
      className={`inline-flex max-w-full items-center overflow-hidden rounded-lg border border-neutral-300 bg-neutral-100 text-black ${className}`}
    >
      <code className="min-w-0 flex-1 truncate px-4 py-3 font-mono text-sm font-semibold sm:px-5">
        {command}
      </code>
      <button
        type="button"
        onClick={copyCommand}
        className="inline-flex h-full min-h-11 w-12 shrink-0 items-center justify-center border-l border-neutral-300 bg-white text-black transition hover:bg-neutral-50"
        aria-label={copied ? "Copied" : "Copy install command"}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}
