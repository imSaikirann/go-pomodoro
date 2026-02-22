"use client";

import { useState } from "react";
import DocsSidebar from "./DocsSidebar";
import { Menu } from "lucide-react";

export default function DocsMobileNav() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      {/* top bar */}
      <div className="md:hidden flex items-center justify-between border-b px-4 h-14 bg-white">
        <button onClick={() => setOpen(true)}>
          <Menu size={20} />
        </button>
        <span className="font-medium">Docs</span>
        <div />
      </div>

      {/* drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/40 z-40"
            onClick={handleClose}
          />

          {/* sidebar */}
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-xl z-50">
            <DocsSidebar onNavigate={handleClose} />
          </div>
        </div>
      )}
    </>
  );
}