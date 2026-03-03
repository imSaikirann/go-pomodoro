'use client';

import { useEffect, useState } from 'react';

function formatDownloads(n: number) {
  if (n >= 1000) return `${Math.floor(n / 1000)}k+`;
  if (n >= 100) return `${Math.floor(n / 100) * 100}+`;
  return `${n}+`;
}

export default function DownloadProof() {
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      'https://api.npmjs.org/downloads/point/last-month/go-pomodoro'
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.downloads) {
          setLabel(formatDownloads(data.downloads));
        }
      })
      .catch(() => {});
  }, []);

  if (!label) return null;

  return (
    <div className="mt-6 flex justify-center">
      <div
        className="
          inline-flex items-center gap-2
          rounded-full
          border border-blue-200/60 dark:border-blue-900/40
          bg-blue-50/70 dark:bg-blue-950/30
          px-4 py-2
          text-sm font-medium
          text-blue-700 dark:text-blue-300
          backdrop-blur-sm
        "
      >
        <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
       {label} installs last month
      </div>
    </div>
  );
}