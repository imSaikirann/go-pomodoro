"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Laptop, Apple, Download, Terminal } from "lucide-react";
import InstallViaGo from "@/components/InstallByLink";
import PomodoroCLI from "@/app/assests/logo.png"
type OS = "windows" | "linux" | "mac";

export default function InstallPage() {
  const [os, setOs] = useState<OS>("windows");

  const data = {
    windows: {
      download:
        "https://github.com/imSaikirann/go-pomodoro/releases/latest/download/pomodoro-windows-amd64.zip",
      steps: `1. Download the zip file
2. Extract it
3. Move pomodoro.exe to:
   C:\\Users\\<your-username>\\go\\bin\\
4. Run:
   pomodoro start`,
    },
    linux: {
      download:
        "https://github.com/imSaikirann/go-pomodoro/releases/latest/download/pomodoro-linux-amd64.tar.gz",
      steps: `1. Download the archive
2. Extract:
   tar -xzf pomodoro-linux-amd64.tar.gz
3. Move binary:
   sudo mv pomodoro-linux-amd64 /usr/local/bin/pomodoro
4. Run:
   pomodoro start`,
    },
    mac: {
      download:
        "https://github.com/imSaikirann/go-pomodoro/releases/latest/download/pomodoro-darwin-amd64.tar.gz",
      steps: `1. Download the archive
2. Extract:
   tar -xzf pomodoro-darwin-amd64.tar.gz
3. Move binary:
   mv pomodoro-darwin-amd64 /usr/local/bin/pomodoro
4. Run:
   pomodoro start`,
    },
  };

  return (
    <div className="min-h-screen bg-background px-6 py-20">

      
      <main className="max-w-4xl mx-auto space-y-20 flex flex-col items-center justify-center">
       <a href="https://www.producthunt.com/products/go-pomodoro-cli?embed=true&amp;utm_source=badge-featured&amp;utm_medium=badge&amp;utm_campaign=badge-go-pomodoro-cli" target="_blank" rel="noopener noreferrer"><img alt="Go Pomodoro CLI - A minimal terminal Pomodoro timer with smart alerts | Product Hunt" width="250" height="54" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1075881&amp;theme=light&amp;t=1770558861574"/></a>
        {/* INTRO */}

<section className="text-center space-y-6">

  <div className="flex items-center justify-center gap-4">
    <img
      src={PomodoroCLI.src}
      alt="go-pomodoro logo"
      className="w-14 h-14"
    />

    <h1 className="text-4xl font-semibold tracking-tight">
      go-pomodoro
    </h1>
  </div>

  <p className="text-muted-foreground max-w-2xl mx-auto">
    A developer-first Pomodoro CLI built with Go that helps you stay
    focused directly from the terminal. Automatic focus cycles,
    intelligent break timing, and a zero-distraction workflow.
  </p>

  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
    <Terminal size={16} />
    <span>terminal-native productivity tool</span>
  </div>
</section>


        {/* INSTALL */}
        <section className="space-y-14">

          {/* Install via Go */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-semibold">Install</h2>
            <p className="text-muted-foreground">
              Fastest way for developers
            </p>
            <InstallViaGo />
          </div>

          <div className="border-t" />

          {/* Binary Install */}
          <div className="space-y-8">

            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold">
                Download binary
              </h3>
              <p className="text-muted-foreground text-sm">
                Choose your platform and follow the setup steps
              </p>
            </div>

            {/* OS selector */}
            <div className="flex justify-center gap-3 flex-wrap">
              <Button
                variant={os === "windows" ? "default" : "outline"}
                onClick={() => setOs("windows")}
              >
                <Laptop className="mr-2" size={16} />
                Windows
              </Button>

              <Button
                variant={os === "linux" ? "default" : "outline"}
                onClick={() => setOs("linux")}
              >
                <Download className="mr-2" size={16} />
                Linux
              </Button>

              <Button
                variant={os === "mac" ? "default" : "outline"}
                onClick={() => setOs("mac")}
              >
                <Apple className="mr-2" size={16} />
                macOS
              </Button>
            </div>

            {/* Install Card */}
            <div className="max-w-2xl mx-auto rounded-2xl border bg-card shadow-sm p-8 space-y-6">
              <Button size="lg" className="w-full" asChild>
                <a href={data[os].download}>
                  Download for {os}
                </a>
              </Button>

              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Setup steps
                </p>

                <pre className="bg-muted rounded-xl p-5 text-sm overflow-x-auto">
                  <code>{data[os].steps}</code>
                </pre>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
