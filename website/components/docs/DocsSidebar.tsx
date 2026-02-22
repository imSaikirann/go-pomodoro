"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const items = [
  { title: "Introduction", href: "/docs" },
  { title: "Installation", href: "/docs/installation" },
  { title: "Usage", href: "/docs/usage" },
];

export default function DocsSidebar({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 flex-col border-r bg-background">
      {/* Header */}
      <div className="border-b px-6 py-5">
        <h2 className="text-base font-semibold tracking-tight">
          go-pomodoro
        </h2>
        <p className="mt-1 text-xs text-muted-foreground">
          Documentation
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-1">
          {items.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate} // ✅ magic line
                className={clsx(
                  "group relative flex items-center rounded-md px-3 py-2 text-sm transition-all duration-200",
                  active
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                )}
              >
                <span
                  className={clsx(
                    "absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full transition-all",
                    active
                      ? "bg-primary opacity-100"
                      : "bg-transparent opacity-0 group-hover:opacity-40"
                  )}
                />
                <span className="ml-2">{item.title}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4">
        <div className="rounded-lg border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
          v1.0 • CLI docs
        </div>
      </div>
    </aside>
  );
}