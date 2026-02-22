import DocsSidebar from "./DocsSidebar";
import DocsMobileNav from "./DocsMobileNav";

export default function DocsShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* mobile top bar */}
      <DocsMobileNav />

      <div className="mx-auto flex w-full max-w-7xl md:px-6">
        {/* desktop sidebar */}
        <aside className="hidden md:block">
          <DocsSidebar />
        </aside>

        {/* content */}
        <main className="flex-1 px-4 py-8 sm:px-8 sm:py-10">
          <div className="mx-auto w-full max-w-3xl">{children}</div>
        </main>
      </div>
    </div>
  );
}