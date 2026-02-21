"use client";

import { useState } from "react";
import DocsSidebar from "./DocsSidebar";
import { Menu } from "lucide-react";

export default function DocsMobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* top bar */}
      <div className="md:hidden flex items-center justify-between border-b px-4 h-14">
        <button onClick={() => setOpen(true)}>
          <Menu size={20} />
        </button>
        <span className="font-medium">Docs</span>
        <div />
      </div>

      {/* drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden">
          <div className="absolute left-0 top-0 h-full">
            <DocsSidebar />
          </div>

          <div
            className="absolute inset-0"
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </>
  );
}