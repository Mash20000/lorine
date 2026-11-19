import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", icon: "🏠" },
  { to: "/event", label: "Event", icon: "📍" },
  { to: "/gallery", label: "Gallery", icon: "📸" },
  { to: "/wishes", label: "Wishes", icon: "💌" },
  { to: "/gifts", label: "Gifts", icon: "🎁" },
];

export default function TopNav() {
  const [open, setOpen] = useState(false);

  const cls = ({ isActive }) =>
    `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive ? "bg-white/25 text-white" : "text-white/70 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-40 px-3 pt-3">
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong flex h-14 items-center justify-between rounded-full pl-5 pr-2">
          <span className="font-display text-lg font-semibold">🎓 Lorine</span>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end className={cls}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-lg md:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <nav className="glass-strong mt-2 grid animate-fade-up gap-1 rounded-3xl p-2 md:hidden">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end className={cls} onClick={() => setOpen(false)}>
                <span>{l.icon}</span>
                {l.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
