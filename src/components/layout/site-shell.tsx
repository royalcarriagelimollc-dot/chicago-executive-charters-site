import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { ReserveSection } from "@/components/sections/reserve-section";

export function SiteShell({ children, showReserve = true }: { children: ReactNode; showReserve?: boolean }) {
  return (
    <div className="min-h-dvh flex flex-col bg-bg text-fg">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      {showReserve && <ReserveSection />}
      <SiteFooter />
    </div>
  );
}
