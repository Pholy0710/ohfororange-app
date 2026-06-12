import { ChildNav } from "@/components/layout/ChildNav";
import { TopBar } from "@/components/layout/TopBar";

export default function ChildLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FFF8F4]">
      <TopBar />
      <main className="pb-24 pt-2">{children}</main>
      <ChildNav />
    </div>
  );
}
