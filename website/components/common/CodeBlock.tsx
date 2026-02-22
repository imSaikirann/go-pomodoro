"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import clsx from "clsx";

export default function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // silent fail
    }
  };

  return (
    <div className="relative group">
      {/* code */}
      <pre className="overflow-x-auto rounded-xl bg-muted p-4 pr-14 text-sm leading-relaxed">
        <code className="whitespace-pre">{code}</code>
      </pre>

      {/* copy button */}
      <button
        onClick={handleCopy}
        className={clsx(
          "absolute right-2 top-2 inline-flex items-center gap-1 rounded-md border bg-background/90 px-2.5 py-1.5 text-xs font-medium backdrop-blur transition-all",
          // mobile: always visible
          "opacity-100",
          // desktop: hover polish
          "md:opacity-0 md:group-hover:opacity-100",
          copied && "opacity-100"
        )}
        aria-label="Copy code"
      >
        {copied ? (
          <>
            <Check size={14} className="text-green-600" />
            <span className="hidden sm:inline">Copied</span>
          </>
        ) : (
          <>
            <Copy size={14} />
            <span className="hidden sm:inline">Copy</span>
          </>
        )}
      </button>
    </div>
  );
}