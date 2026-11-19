import { useState } from "react";
import { graduate, event, heroImage } from "../data";

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section className="flex min-h-[calc(100dvh-5rem)] flex-col items-center justify-center px-4 py-8 text-center sm:px-8 lg:flex-row lg:gap-16 lg:text-left">
      <div className="glass-strong m-3 w-[min(74vw,18rem)] shrink-0 animate-fade-up rounded-[2.5rem] p-2 sm:w-80 lg:w-96">
        <div className="aspect-[3/4] overflow-hidden rounded-[2rem] bg-gradient-to-br from-fuchsia-400/40 to-violet-500/40">
          {imgOk ? (
            <img
              src={heroImage}
              alt={graduate.name}
              className="h-full w-full object-cover"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-6xl">🎓</div>
          )}
        </div>
      </div>

      <div className="mt-6 lg:mt-0">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-pink-200 sm:text-sm">
          Graduation Celebration 2026
        </p>
        <h1 className="gradient-text mt-3 animate-shimmer font-display text-[clamp(2.5rem,11vw,5rem)] font-bold leading-tight">
          {graduate.name}
        </h1>
        <p className="mt-3 text-base text-white/90 sm:text-xl">{graduate.degree}</p>
        <p className="text-sm text-white/70 sm:text-base">{graduate.university}</p>

        <div className="glass mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold sm:text-base">
          <span>📅</span>
          {event.displayDate}
        </div>
      </div>
    </section>
  );
}
