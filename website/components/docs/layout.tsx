import DocsSidebar from "@/components/docs/DocsSidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-7xl">
        {/* Desktop sidebar */}
        <aside className="hidden md:sticky md:top-0 md:block md:h-screen md:w-64 md:flex-shrink-0 border-r bg-background">
          <DocsSidebar />
        </aside>

        {/* Content */}
        <main className="flex-1 px-4 py-10 sm:px-8">
          <div className="mx-auto w-full max-w-3xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}