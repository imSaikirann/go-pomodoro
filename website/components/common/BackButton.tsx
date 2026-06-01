"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import clsx from "clsx";

type BackButtonProps = {
  label?: string;
  className?: string;
  fallbackHref?: string;
};

export default function BackButton({
  label = "Back",
  className,
  fallbackHref = "/docs",
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length <= 1) {
      router.push(fallbackHref);
      return;
    }
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      aria-label="Go back"
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-300 hover:text-teal-700",
        className
      )}
    >
      <ArrowLeft size={16} />
      <span>{label}</span>
    </button>
  );
}
