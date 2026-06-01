export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mb-4 w-fit rounded-full border border-neutral-300 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-800">
      {children}
    </div>
  );
}
