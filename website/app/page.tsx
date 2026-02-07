"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Apple, Laptop, Terminal } from "lucide-react";

export default function Home() {
  const [seconds, setSeconds] = useState(1500);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev <= 0 ? 1500 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const format = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <main className="w-full max-w-4xl py-24 space-y-12">

        {/* Hero */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">
            🍅 go-pomodoro
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Lightweight Pomodoro timer CLI built with Go  stay focused directly
            from your terminal with a minimal and distraction-free workflow.
          </p>
        </section>

        {/* Terminal Preview */}
        <Card className="bg-black text-green-400 font-mono">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-2 text-green-300">
              <Terminal size={16} />
              <span>$ pomodoro start</span>
            </div>
            <p className="text-sm text-green-500">Session running...</p>
            <p className="text-4xl font-semibold mt-3">{format(seconds)}</p>
          </CardContent>
        </Card>

        {/* Download buttons */}
        <section className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <a href="https://github.com/imSaikirann/go-pomodoro/releases/download/v0.1.0/go-pomodoro-windows.exe">
              <Laptop className="mr-2" size={18} />
              Windows
            </a>
          </Button>

          <Button asChild size="lg" variant="secondary">
            <a href="https://github.com/imSaikirann/go-pomodoro/releases/download/v0.1.0/go-pomodoro-linux">
              <Download className="mr-2" size={18} />
              Linux
            </a>
          </Button>

          <Button asChild size="lg" variant="outline">
            <a href="https://github.com/imSaikirann/go-pomodoro/releases/download/v0.1.0/go-pomodoro-mac">
              <Apple className="mr-2" size={18} />
              macOS
            </a>
          </Button>
        </section>

        {/* Install via Go */}
        <section className="text-center space-y-3">
          <p className="text-muted-foreground">Install via Go</p>
          <pre className="rounded-xl bg-muted p-4 text-sm overflow-x-auto">
            <code>
go install github.com/imSaikirann/go-pomodoro/cmd/pomodoro@latest
            </code>
          </pre>
        </section>

      </main>
    </div>
  );
}
