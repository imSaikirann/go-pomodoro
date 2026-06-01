import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/common/Footer";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";

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
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 font-sans">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
