import { useMemo } from "react";

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 -top-24 h-80 w-80 animate-float rounded-full bg-fuchsia-400/30 blur-3xl" />
      <div className="absolute -right-24 top-1/3 h-96 w-96 animate-float-slow rounded-full bg-pink-400/25 blur-3xl" />
      <div className="absolute -bottom-24 left-1/4 h-96 w-96 animate-float rounded-full bg-violet-400/30 blur-3xl" />
    </div>
  );
}

const COLORS = ["#f9c6ff", "#ffd6e8", "#e0c3ff", "#ffe9a8", "#ffffff"];

export function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2.5,
        size: 6 + Math.random() * 8,
        color: COLORS[i % COLORS.length],
      })),
    []
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 animate-fall rounded-sm"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.6,
            background: p.color,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
