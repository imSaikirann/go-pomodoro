import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer";
import { Analytics } from "@vercel/analytics/next";
import { Bricolage_Grotesque } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700"],
});
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} antialiased min-h-screen`}
      >
        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}