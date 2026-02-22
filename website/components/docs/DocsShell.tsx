import DocsSidebar from "./DocsSidebar";
import DocsMobileNav from "./DocsMobileNav";

export default function DocsShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <DocsMobileNav />

      <div className="mx-auto flex w-full  md:px-6">
        {/* sidebar */}
        <aside className="hidden md:block">
          <DocsSidebar />
        </aside>

        {/* content */}
       <main className="flex-1 px-4 py-6 sm:px-8 sm:py-10">
      
          <div className="w-full max-w-3xl md:mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}