import { Link, useLocation } from "react-router-dom";
import type { NavItem } from "../types/invitation";

type MobileDockProps = {
  navItems: NavItem[];
};

export function MobileDock({ navItems }: MobileDockProps) {
  const location = useLocation();
  const isGalleryPage = location.pathname === "/gallery";

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 mx-auto flex w-[calc(100%-1.5rem)] max-w-sm items-center justify-between rounded-full border border-white/10 bg-midnight/80 px-2 py-2 shadow-soft backdrop-blur-xl md:hidden">
      {navItems.slice(0, 4).map((item) => (
        <a
          key={item.href}
          href={location.pathname === "/" ? item.href : `/${item.href}`}
          className="rounded-full px-3 py-2 text-xs font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          {item.label}
        </a>
      ))}
      <Link
        to={isGalleryPage ? "/" : "/gallery"}
        className="rounded-full bg-gold px-4 py-2 text-xs font-bold text-midnight"
      >
        {isGalleryPage ? "Home" : "Media"}
      </Link>
    </div>
  );
}
