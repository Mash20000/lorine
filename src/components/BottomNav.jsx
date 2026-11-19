import { useEffect, useState } from "react";

const items = [
  { id: "home", icon: "🏠", label: "Home" },
  { id: "details", icon: "📍", label: "Details" },
  { id: "programme", icon: "🗓️", label: "Programme" },
  { id: "gallery", icon: "📸", label: "Gallery" },
  { id: "rsvp", icon: "💬", label: "RSVP" },
];

export default function BottomNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
      <div className="glass-strong flex w-full max-w-md justify-between rounded-full px-2 py-2">
        {items.map((i) => (
          <a
            key={i.id}
            href={`#${i.id}`}
            className={`flex flex-1 flex-col items-center rounded-full py-1.5 text-[10px] font-semibold transition ${
              active === i.id ? "bg-white/25 text-white" : "text-white/70"
            }`}
          >
            <span className="text-lg leading-none">{i.icon}</span>
            {i.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
