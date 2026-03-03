"use client";

import { useState } from "react";
import DocsSidebar from "./DocsSidebar";
import { Menu } from "lucide-react";

export default function DocsMobileNav() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      {/* 🔥 Mobile top bar */}
      <header
        className="
          md:hidden
          sticky top-0 z-50
          flex items-center justify-between
          h-14 px-4
          bg-white/80 dark:bg-gray-950/80
          backdrop-blur-md
          border-b border-gray-200/60 dark:border-gray-800/60
        "
      >
        <button
          onClick={() => setOpen(true)}
          className="p-2 -ml-2"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        <span className="font-semibold text-[15px] tracking-tight">
          Docs
        </span>

        <div className="w-6" />
      </header>

      {/* 🔥 Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
            onClick={handleClose}
          />

          {/* sidebar */}
          <div
            className="
              absolute left-0 top-0 h-full w-64
              bg-white dark:bg-gray-950
              shadow-2xl
              border-r border-gray-200 dark:border-gray-800
            "
          >
            <DocsSidebar onNavigate={handleClose} />
          </div>
        </div>
      )}
    </>
  );
}