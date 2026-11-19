import { useEffect, useState } from "react";
import { galleryImages } from "../data";

export default function Gallery() {
  const [open, setOpen] = useState(null);
  const [failed, setFailed] = useState({});

  useEffect(() => {
    const onKey = (e) => {
      if (open === null) return;
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i + 1) % galleryImages.length);
      if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="gallery" className="px-4 py-6 sm:px-8 lg:px-10">
      <h2 className="section-title mb-4">Gallery</h2>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((src, i) => (
          <button
            key={src}
            onClick={() => !failed[i] && setOpen(i)}
            className="glass aspect-[4/5] overflow-hidden rounded-2xl p-1.5 transition active:scale-95 md:hover:scale-[1.02]"
          >
            {failed[i] ? (
              <div className="flex aspect-square h-full w-full items-center justify-center rounded-xl bg-white/5 text-3xl">
                📸
              </div>
            ) : (
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                onError={() => setFailed((f) => ({ ...f, [i]: true }))}
                className="h-full w-full rounded-xl object-cover"
              />
            )}
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-purple-950/80 p-4 backdrop-blur-md"
          onClick={() => setOpen(null)}
        >
          <img
            src={galleryImages[open]}
            alt=""
            className="max-h-[85vh] max-w-full rounded-3xl"
          />
          <button
            className="glass absolute right-5 top-5 h-10 w-10 rounded-full text-lg"
            onClick={() => setOpen(null)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
