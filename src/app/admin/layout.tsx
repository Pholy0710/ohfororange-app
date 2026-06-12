import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { href: "/admin/dashboard", label: "Dashboard", emoji: "📊" },
    { href: "/admin/stories", label: "Stories", emoji: "📖" },
    { href: "/admin/worksheets", label: "Worksheets", emoji: "📝" },
    { href: "/admin/users", label: "Users", emoji: "👥" },
    { href: "/admin/analytics", label: "Analytics", emoji: "📈" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm flex-shrink-0 hidden md:flex">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🍊</span>
            <div>
              <div className="font-black text-[#FF6B2B] text-lg">OhforOrange</div>
              <div className="text-xs text-gray-400 font-bold">Admin Panel</div>
            </div>
          </div>
        </div>
        <nav className="p-4 flex-1 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-gray-600
                         hover:bg-orange-50 hover:text-[#FF6B2B] transition-colors"
            >
              <span className="text-xl">{item.emoji}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <Link href="/home" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#FF6B2B] transition-colors">
            ← Back to App
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍊</span>
            <span className="font-black text-[#FF6B2B]">Admin</span>
          </div>
          <div className="flex gap-1 overflow-x-auto">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="p-2 text-xl">{item.emoji}</Link>
            ))}
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
