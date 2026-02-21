import DocsSidebar from "./DocsSidebar";
import DocsMobileNav from "./DocsMobileNav";

export default function DocsShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <DocsMobileNav />

      <div className="mx-auto flex max-w-7xl">
        <div className="hidden md:block">
          <DocsSidebar />
        </div>

        <main className="flex-1 px-4 sm:px-8 py-10">
          <div className="mx-auto max-w-3xl">{children}</div>
        </main>
      </div>
    </div>
  );
}