"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export default function InstallViaGo() {
  const cmd =
    "go install github.com/imSaikirann/go-pomodoro/cmd/pomodoro@latest";

  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement("textarea");
      textarea.value = cmd;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="max-w-2xl mx-auto text-center space-y-4">
      <h3 className="text-xl font-semibold">
        Install via Go (recommended for developers)
      </h3>

      <div className="relative">
        <pre className="bg-muted rounded-xl p-4 text-sm overflow-x-auto text-left">
          <code>{cmd}</code>
        </pre>

        <Button
          size="sm"
          variant="secondary"
          className="absolute right-3 top-3"
          onClick={copy}
        >
          <Copy size={16} className="mr-2" />
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </section>
  );
}
