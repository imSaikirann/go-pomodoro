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

      <div className="mx-auto flex w-full">
        {/* 🔥 Desktop fixed sidebar */}
        <aside
          className="
            hidden md:block
            fixed left-0 top-0
            h-screen w-64
            border-r bg-background
          "
        >
          <DocsSidebar />
        </aside>

 
        <main
          className="
            flex-1
            md:ml-64
            px-4 py-6
            sm:px-8 sm:py-10
          "
        >
          <div className="w-full max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}