"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#e8e8e8] px-[6vw] h-[60px] flex items-center justify-between">
      <div className="font-mono font-medium text-[15px] tracking-tight">
        go<span className="opacity-30">-</span>pomodoro
      </div>
      <div className="hidden sm:flex items-center gap-8">
        <Link href="#problem" className="text-[13px] text-[#555] hover:text-[#0a0a0a] transition-colors">Why</Link>
        <Link href="#features" className="text-[13px] text-[#555] hover:text-[#0a0a0a] transition-colors">Features</Link>
        <Link href="#commands" className="text-[13px] text-[#555] hover:text-[#0a0a0a] transition-colors">Commands</Link>
        <Link
          href="#"
          className="bg-neutral-950 !text-white text-[13px] font-medium px-[18px] py-2 rounded-md hover:opacity-70 transition-opacity"
          style={{ color: "#ffffff" }}
        >
          Install now
        </Link>
      </div>
    </nav>
  );
}
