import { event, graduate, programme, timeline } from "../data";

function downloadICS() {
  const start = new Date(event.dateISO);
  const end = new Date(start.getTime() + 5 * 3600000);
  const fmt = (d) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Lorine Graduation//EN",
    "BEGIN:VEVENT",
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:${graduate.name}'s Graduation`,
    `LOCATION:${event.venue}`,
    `DESCRIPTION:Join us in celebrating ${graduate.name}'s graduation.`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "lorine-graduation.ics";
  a.click();
  URL.revokeObjectURL(url);
}

function Row({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">{icon}</span>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-pink-200">{label}</p>
        <p className="text-[15px] text-white/90">{value}</p>
      </div>
    </div>
  );
}

export function Details() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(event.mapQuery)}&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(event.mapQuery)}`;
  return (
    <section className="grid gap-4 px-4 py-6 sm:px-8 lg:grid-cols-2 lg:px-10">
      <h2 className="section-title col-span-full">Event Details</h2>
      <div className="glass-strong space-y-4 rounded-3xl p-6">
        <Row icon="📅" label="Date" value={event.displayDate} />
        <Row icon="⏰" label="Time" value={event.displayTime} />
        <Row icon="📍" label="Venue" value={event.venue} />
        <div className="flex flex-wrap gap-3 pt-2">
          <button onClick={downloadICS} className="btn-glass glass">🗓️ Add to calendar</button>
          <a href={directions} target="_blank" rel="noreferrer" className="btn-glass glass">🧭 Directions</a>
        </div>
      </div>
      <div className="glass overflow-hidden rounded-3xl p-2 lg:flex">
        <iframe
          title="Venue map"
          src={mapSrc}
          loading="lazy"
          className="h-64 w-full rounded-2xl border-0 lg:h-full lg:min-h-[18rem]"
        />
      </div>
    </section>
  );
}

export function Programme() {
  return (
    <section className="px-4 py-6 sm:px-8 lg:px-10 lg:pr-3">
      <h2 className="section-title mb-4">Programme</h2>
      <div className="space-y-3">
        {programme.map((p) => (
          <div key={p.time} className="glass flex gap-4 rounded-2xl p-4">
            <span className="w-20 shrink-0 text-sm font-bold text-pink-200">{p.time}</span>
            <div>
              <p className="font-semibold">{p.title}</p>
              <p className="text-sm text-white/70">{p.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Timeline() {
  return (
    <section className="px-4 py-6 sm:px-8 lg:px-10 lg:pl-3">
      <h2 className="section-title mb-4">Her Journey</h2>
      <div className="relative ml-3 border-l border-white/30 pl-6">
        {timeline.map((t) => (
          <div key={t.year} className="relative mb-6 last:mb-0">
            <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-pink-300 ring-4 ring-pink-300/30" />
            <p className="text-sm font-bold text-pink-200">{t.year}</p>
            <p className="font-semibold">{t.title}</p>
            <p className="text-sm text-white/70">{t.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
