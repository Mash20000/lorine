import { useState } from "react";
import { wishes, contact, graduate, event } from "../data";

const wa = (text) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;

export function Wishes() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const custom = `Congratulations ${graduate.firstName}! 🎓💜 ${msg}${name ? ` - ${name}` : ""}`;

  return (
    <section className="px-4 py-6 sm:px-8 lg:px-10">
      <h2 className="section-title">Wishes for {graduate.firstName}</h2>
      <p className="mb-5 mt-1 text-sm text-white/70 sm:text-base">
        Tap a wish to send it to {graduate.firstName} on WhatsApp.
      </p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {wishes.map((w) => (
          <a
            key={w.from}
            href={wa(`Congratulations ${graduate.firstName}! 🎓💜 ${w.text}`)}
            target="_blank"
            rel="noreferrer"
            className="glass group block rounded-3xl p-5 transition active:scale-95 md:hover:-translate-y-1"
          >
            <p className="text-[15px] leading-relaxed text-white/90">“{w.text}”</p>
            <p className="mt-3 text-sm font-semibold text-pink-200">{w.from}</p>
            <p className="mt-3 text-xs font-semibold text-white/60 group-active:text-white">
              💬 Tap to send on WhatsApp
            </p>
          </a>
        ))}
      </div>

      <div className="glass-strong mx-auto mt-8 max-w-2xl rounded-3xl p-5 sm:p-8">
        <h3 className="font-display text-xl font-semibold">Write your own</h3>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="mt-4 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-pink-300"
        />
        <textarea
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          rows={3}
          placeholder="Your message to Lorine…"
          className="mt-3 w-full resize-none rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-pink-300"
        />
        <a
          href={msg.trim() ? wa(custom) : undefined}
          target="_blank"
          rel="noreferrer"
          aria-disabled={!msg.trim()}
          className={`btn-glass mt-4 w-full bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white ${
            msg.trim() ? "" : "pointer-events-none opacity-50"
          }`}
        >
          💬 Send on WhatsApp
        </a>
      </div>
    </section>
  );
}

export function Rsvp() {
  const rsvpMsg = `Hello! I will be attending ${graduate.name}'s graduation on ${event.displayDate}. 🎓`;
  const shareMsg = `You're invited to celebrate ${graduate.name}'s graduation at ${graduate.university} on ${event.displayDate}! 🎓💜 ${typeof window !== "undefined" ? window.location.href : ""}`;

  return (
    <section className="px-4 py-6 sm:px-8 lg:px-10">
      <div className="glass-strong mx-auto max-w-2xl rounded-3xl p-6 text-center sm:p-8">
        <h2 className="section-title">Will you join us?</h2>
        <p className="mt-2 text-sm text-white/80 sm:text-base">Let us know you are coming. It only takes a tap.</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={wa(rsvpMsg)}
            target="_blank"
            rel="noreferrer"
            className="btn-glass bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white"
          >
            💬 RSVP on WhatsApp
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareMsg)}`}
            target="_blank"
            rel="noreferrer"
            className="btn-glass glass"
          >
            🔗 Share this invitation
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="px-5 pb-10 pt-6 text-center">
      <p className="font-display text-xl">With love & gratitude 💜</p>
      <p className="mt-2 text-sm text-white/70">
        Questions? WhatsApp {contact.display}
      </p>
      <p className="mt-4 text-xs text-white/50">
        © 2026 {graduate.name} · {graduate.university}
      </p>
    </footer>
  );
}
