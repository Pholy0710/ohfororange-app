import Link from "next/link";

export default function ParentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FFF8F4]">
      {/* Parent Nav */}
      <header className="bg-white border-b-4 border-orange-200 shadow-soft sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/home" className="text-3xl">🍊</Link>
            <div>
              <div className="font-black text-[#FF6B2B] text-lg">OhforOrange</div>
              <div className="text-xs text-gray-400 font-bold">Parent Portal</div>
            </div>
          </div>
          <nav className="flex gap-2">
            {[
              { href: "/parent/dashboard", label: "Dashboard", emoji: "📊" },
              { href: "/parent/progress", label: "Progress", emoji: "⭐" },
              { href: "/parent/worksheets", label: "Worksheets", emoji: "📝" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold text-sm
                           text-gray-600 hover:bg-orange-50 hover:text-[#FF6B2B] transition-colors"
              >
                <span>{item.emoji}</span>
                <span className="hidden sm:block">{item.label}</span>
              </Link>
            ))}
            <Link
              href="/home"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold text-sm
                         bg-[#FF6B2B] text-white hover:bg-orange-600 transition-colors"
            >
              👧 Child Mode
            </Link>
          </nav>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-6">{children}</main>
    </div>
  );
}
