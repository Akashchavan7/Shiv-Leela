import { Outlet } from "react-router-dom";
import { MobileDock } from "./MobileDock";
import { invitationData } from "../data/invitationData";
import { useScrollToTop } from "../hooks/useScrollToTop";

export function AppShell() {
  useScrollToTop();

  return (
    <div className="relative overflow-hidden bg-hero-glow">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-gold/10 to-transparent" />
      <Outlet />
      <MobileDock navItems={invitationData.nav} />
    </div>
  );
}
