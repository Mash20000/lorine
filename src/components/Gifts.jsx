import { useState } from "react";
import { gifts, graduate, toIntl } from "../data";
import { Confetti } from "./Effects";

function GiftBox({ colors, emoji, open = false }) {
  return (
    <div className="relative mx-auto h-32 w-32">
      {/* lid */}
      <div
        className={`absolute left-1/2 top-3 z-10 h-9 w-[8.5rem] -translate-x-1/2 rounded-xl bg-gradient-to-r ${colors} ring-1 ring-white/40 ${
          open ? "gift-lid" : ""
        }`}
      >
        <div className="absolute left-1/2 top-0 h-full w-5 -translate-x-1/2 bg-white/60" />
        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-3xl">🎀</span>
      </div>
      {/* base */}
      <div
        className={`absolute bottom-0 left-1/2 h-[5.2rem] w-28 -translate-x-1/2 rounded-b-2xl bg-gradient-to-b ${colors} opacity-90 ring-1 ring-white/30`}
      >
        <div className="absolute left-1/2 top-0 h-full w-5 -translate-x-1/2 bg-white/50" />
        <span className="absolute inset-0 flex items-center justify-center pt-3 text-2xl">{emoji}</span>
      </div>
    </div>
  );
}

function GiftModal({ gift, onClose }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(gift.number);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: number is still visible */
    }
  };

  const spark = ["-top-2 left-2", "top-4 -right-3", "-top-4 right-10", "bottom-6 -left-4", "bottom-2 -right-2", "-top-6 left-14"];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-purple-950/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <Confetti />
      <div className="relative flex flex-col items-center py-6" onClick={(e) => e.stopPropagation()}>
        {/* glow rays */}
        <div className="gift-rays pointer-events-none absolute left-1/2 top-4 h-72 w-72 -translate-x-1/2 rounded-full" />

        <div className="gift-shake relative">
          <GiftBox colors={gift.colors} emoji={gift.emoji} open />
          {spark.map((p, i) => (
            <span
              key={i}
              className={`gift-spark absolute text-xl ${p}`}
              style={{ animationDelay: `${0.7 + i * 0.12}s` }}
            >
              ✨
            </span>
          ))}
        </div>

        <div className="gift-rise glass-strong relative mt-4 w-[min(88vw,22rem)] rounded-3xl p-6 text-center">
          <p className="gradient-text animate-shimmer font-display text-3xl font-bold">
            Congratulations! 🎉
          </p>
          <p className="mt-2 text-sm text-white/80">
            Thank you for celebrating {graduate.firstName}. Send your gift to:
          </p>
          <p className="glass mt-4 rounded-2xl py-3 font-display text-2xl font-bold tracking-wider tabular-nums">
            {gift.number.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3")}
          </p>
          <div className="mt-4 flex gap-2">
            <button onClick={copy} className="btn-glass glass flex-1">
              {copied ? "✓ Copied" : "📋 Copy"}
            </button>
            <a
              href={`https://wa.me/${toIntl(gift.number)}?text=${encodeURIComponent(
                `Congratulations ${graduate.firstName}! 🎓💜 Sending my gift.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-glass flex-1 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white"
            >
              💬 WhatsApp
            </a>
          </div>
          <button onClick={onClose} className="mt-4 text-sm font-semibold text-white/70">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Gifts() {
  const [active, setActive] = useState(null);

  return (
    <section className="px-4 py-6 sm:px-8 lg:px-10">
      <h2 className="section-title">Gifts 🎁</h2>
      <p className="mb-6 mt-1 text-sm text-white/70 sm:text-base">
        Want to bless {graduate.firstName}? Tap a box to open it.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        {gifts.map((g) => (
          <button
            key={g.id}
            onClick={() => setActive(g)}
            className="glass group rounded-3xl px-4 pb-5 pt-8 text-center transition active:scale-95 md:hover:-translate-y-1"
          >
            <div className="gift-bob">
              <GiftBox colors={g.colors} emoji={g.emoji} />
            </div>
            <p className="mt-5 font-display text-lg font-semibold">{g.title}</p>
            <p className="mt-1 text-xs font-semibold text-pink-200">Tap to open</p>
          </button>
        ))}
      </div>

      {active && <GiftModal key={active.id} gift={active} onClose={() => setActive(null)} />}
    </section>
  );
}
