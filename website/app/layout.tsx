import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "go-pomodoro",
  description:
    "A simple and lightweight Pomodoro timer CLI built with Go to help developers stay focused directly from the terminal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased text-black">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
