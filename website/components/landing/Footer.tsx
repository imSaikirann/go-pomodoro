import Link from "next/link";

const links = [
  { label: "GitHub", href: "#" },
  { label: "Docs", href: "#" },
  { label: "Commands", href: "#commands" },
  { label: "Changelog", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e8e8e8] px-[6vw] py-7 flex items-center justify-between flex-wrap gap-4">
      <div className="font-mono text-[13px] font-medium">
        go<span className="opacity-30">-</span>pomodoro
      </div>
      <div className="flex gap-6">
        {links.map((l) => (
          <Link key={l.label} href={l.href} className="text-[13px] text-[#888] hover:text-[#0a0a0a] transition-colors">
            {l.label}
          </Link>
        ))}
      </div>
      <div className="text-xs text-[#bbb]">MIT License &nbsp;·&nbsp; Built with Go</div>
    </footer>
  );
}