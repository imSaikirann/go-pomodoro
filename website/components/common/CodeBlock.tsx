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
    } catch {}
  };

  return (
    <div className="relative group">
      {/* code surface */}
      <pre
        className="
          overflow-x-auto rounded-xl
          bg-blue-50/70 dark:bg-blue-950/30
          border border-blue-100 dark:border-blue-900/40
          p-4 pr-14
          text-[13px] sm:text-sm
          leading-relaxed
          backdrop-blur-sm
        "
      >
        <code className="whitespace-pre text-gray-800 dark:text-gray-200">
          {code}
        </code>
      </pre>

      {/* copy button */}
      <button
        onClick={handleCopy}
        className={clsx(
          `
          absolute right-2 top-2
          inline-flex items-center gap-1
          cursor-pointer
          rounded-md border
          bg-white/90 dark:bg-gray-900/90
          border-gray-200 dark:border-gray-700
          px-2.5 py-1.5
          text-xs font-medium
          backdrop-blur
          transition-all duration-200
          hover:border-blue-200 dark:hover:border-blue-700
          hover:text-blue-600 dark:hover:text-blue-400
          `,
          "opacity-100 md:opacity-0 md:group-hover:opacity-100",
          copied && "opacity-100"
        )}
        aria-label="Copy code"
      >
        {copied ? (
          <>
            <Check size={14} className="text-blue-600" />
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