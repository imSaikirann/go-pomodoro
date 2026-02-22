"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import clsx from "clsx";

type BackButtonProps = {
  label?: string;
  className?: string;
  fallbackHref?: string; // optional: if no history
};

export default function BackButton({
  label,
  className,
  fallbackHref = "/docs",
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    // if user came directly (no history), fallback
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
        "inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition hover:bg-muted",
        className
      )}
    >
      <ArrowLeft size={16} />
      {label && <span>{label}</span>}
    </button>
  );
}