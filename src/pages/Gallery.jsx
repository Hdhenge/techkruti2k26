import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { id: 1,  src: "/gallery/Hackathon1.jpeg",   category: "hackathon" },
  { id: 2,  src: "/gallery/Hackathon2.jpeg",   category: "hackathon" },
  { id: 3,  src: "/gallery/Hackathon3.jpeg",   category: "hackathon" },
  { id: 4,  src: "/gallery/Hackathon4.jpeg",   category: "hackathon" },
  { id: 5,  src: "/gallery/Winner1.jpeg",      category: "winner" },
  { id: 6,  src: "/gallery/winner2.jpeg",      category: "winner" },
  { id: 7,  src: "/gallery/winner3.jpeg",      category: "winner" },
  { id: 8,  src: "/gallery/winner4.jpeg",      category: "winner" },
  { id: 9,  src: "/gallery/winner5.jpeg",      category: "winner" },
  { id: 10, src: "/gallery/winner6.jpeg",      category: "winner" },
  { id: 11, src: "/gallery/sponsors1.jpeg",    category: "sponsors" },
  { id: 12, src: "/gallery/sponsors2.jpeg",    category: "sponsors" },
  { id: 13, src: "/gallery/sponsors3.jpeg",    category: "sponsors" },
  { id: 14, src: "/gallery/sponsors4.jpeg",    category: "sponsors" },
  { id: 15, src: "/gallery/coordinator1.jpeg", category: "coordinator" },
  { id: 16, src: "/gallery/coordinator2.jpeg", category: "coordinator" },
  { id: 17, src: "/gallery/coordinator3.jpeg", category: "coordinator" },
  { id: 18, src: "/gallery/coordinator4.jpeg", category: "coordinator" },
];

const categories = [
  { key: "all",         label: "All",         color1: "#f97316", color2: "#a855f7" },
  { key: "hackathon",   label: "Hackathon",   color1: "#06b6d4", color2: "#6366f1" },
  { key: "winner",      label: "Winners",     color1: "#facc15", color2: "#f97316" },
  { key: "sponsors",    label: "Sponsors",    color1: "#10b981", color2: "#06b6d4" },
  { key: "coordinator", label: "Coordinators",color1: "#ec4899", color2: "#a855f7" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
};

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [imgLoaded, setImgLoaded] = useState({});

  useEffect(() => {
    setGalleryImages([...images].sort(() => Math.random() - 0.5));
  }, []);

  const filtered = activeFilter === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  const activeCat = categories.find((c) => c.key === activeFilter);

  /* keyboard nav */
  const handleKey = useCallback((e) => {
    if (selectedIndex === null) return;
    if (e.key === "ArrowRight") setSelectedIndex((p) => (p + 1) % filtered.length);
    if (e.key === "ArrowLeft")  setSelectedIndex((p) => (p - 1 + filtered.length) % filtered.length);
    if (e.key === "Escape")     setSelectedIndex(null);
  }, [selectedIndex, filtered.length]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  /* body lock when lightbox open */
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedIndex]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        .gl-root {
          position: relative;
          min-height: 100svh;
          background: #050508;
          color: #fff;
          overflow: hidden;
          font-family: 'Rajdhani', sans-serif;
          isolation: isolate;
        }

        /* Noise */
        .gl-root::before {
          content: ""; position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.022; pointer-events: none; z-index: 0;
        }

        /* Scanlines */
        .gl-root::after {
          content: ""; position: absolute; inset: 0;
          background-image: repeating-linear-gradient(
            to bottom, transparent, transparent 3px,
            rgba(255,255,255,0.01) 3px, rgba(255,255,255,0.01) 4px
          );
          pointer-events: none; z-index: 0;
        }

        /* Orbs */
        .gl-orb {
          position: absolute; border-radius: 50%;
          filter: blur(100px); pointer-events: none; z-index: 0;
        }
        .gl-orb1 {
          width: clamp(280px,50vw,650px); height: clamp(280px,50vw,650px);
          background: radial-gradient(circle, #7c3aed, transparent 70%);
          top: -12%; left: -8%; opacity: 0.13;
          animation: glDrift1 20s ease-in-out infinite;
        }
        .gl-orb2 {
          width: clamp(200px,38vw,520px); height: clamp(200px,38vw,520px);
          background: radial-gradient(circle, #be185d, transparent 70%);
          bottom: 5%; right: -8%; opacity: 0.10;
          animation: glDrift2 26s ease-in-out infinite;
        }

        @keyframes glDrift1 {
          0%,100%{ transform:translate(0,0) scale(1); }
          50%    { transform:translate(3%,5%) scale(1.06); }
        }
        @keyframes glDrift2 {
          0%,100%{ transform:translate(0,0); }
          50%    { transform:translate(-4%,-3%); }
        }

        /* Inner */
        .gl-inner {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto;
          padding: clamp(80px,10vw,120px) clamp(16px,4vw,40px) clamp(60px,8vw,100px);
          display: flex; flex-direction: column;
          gap: clamp(40px,6vw,64px);
        }

        /* ── Hero ── */
        .gl-hero { text-align: center; }

        .gl-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: clamp(9px,2vw,11px); font-weight: 700;
          letter-spacing: 0.38em; text-transform: uppercase;
          color: rgba(255,255,255,0.2); margin-bottom: 18px;
        }
        .gl-eline { width: 30px; height: 1px; }
        .gl-eline.l { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15)); }
        .gl-eline.r { background: linear-gradient(90deg, rgba(255,255,255,0.15), transparent); }

        .gl-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem,13vw,7.5rem);
          letter-spacing: 0.05em; line-height: 0.9; margin-bottom: 16px;
        }
        .gl-title-event {
          display: block;
          background: linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.45));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gl-title-gallery {
          display: block;
          background: linear-gradient(135deg, #f97316 0%, #ec4899 55%, #a855f7 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gl-hero-desc {
          font-size: clamp(12px,2.4vw,14px); color: rgba(255,255,255,0.3);
          max-width: 440px; margin: 0 auto; line-height: 1.8; letter-spacing: 0.04em;
        }

        /* ── Filter bar ── */
        .gl-filters {
          display: flex; flex-wrap: wrap;
          justify-content: center; gap: clamp(8px,2vw,12px);
        }

        .gl-filter-btn {
          position: relative;
          display: inline-flex; align-items: center; gap: 7px;
          padding: 8px 20px; border-radius: 100px;
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(11px,2vw,13px); font-weight: 700;
          letter-spacing: 0.22em; text-transform: uppercase;
          cursor: pointer; border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.35);
          transition: color 0.25s, border-color 0.25s, background 0.25s,
                      transform 0.25s, box-shadow 0.25s;
          outline: none;
        }

        .gl-filter-btn:hover {
          color: rgba(255,255,255,0.7);
          border-color: rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.06);
        }

        .gl-filter-btn.active {
          color: #fff;
          transform: translateY(-1px);
        }

        .gl-filter-dot {
          width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
        }

        /* ── Count badge ── */
        .gl-count {
          font-size: clamp(9px,1.8vw,10px); font-weight: 700;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: rgba(255,255,255,0.2); text-align: center;
          margin-top: -24px;
        }

        /* ── Masonry ── */
        .gl-masonry {
          columns: 1;
          gap: clamp(10px,2vw,16px);
        }
        @media(min-width:480px)  { .gl-masonry { columns: 2; } }
        @media(min-width:768px)  { .gl-masonry { columns: 3; } }
        @media(min-width:1100px) { .gl-masonry { columns: 4; } }

        .gl-item {
          break-inside: avoid;
          margin-bottom: clamp(10px,2vw,16px);
          position: relative; cursor: pointer;
          border-radius: 12px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.03);
        }

        .gl-item img {
          display: block; width: 100%;
          object-fit: cover; border-radius: 11px;
          transition: transform 0.45s cubic-bezier(.4,0,.2,1),
                      filter 0.45s ease;
          filter: brightness(0.88) saturate(0.9);
        }

        .gl-item:hover img {
          transform: scale(1.06);
          filter: brightness(1.05) saturate(1.1);
        }

        /* Overlay on hover */
        .gl-item-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(5,5,8,0.7) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.35s ease;
          border-radius: 11px;
          display: flex; align-items: flex-end;
          padding: 14px;
        }
        .gl-item:hover .gl-item-overlay { opacity: 1; }

        .gl-item-tag {
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }

        /* Skeleton shimmer while loading */
        .gl-skeleton {
          width: 100%; min-height: 180px; border-radius: 11px;
          background: linear-gradient(90deg,
            rgba(255,255,255,0.04) 25%,
            rgba(255,255,255,0.07) 50%,
            rgba(255,255,255,0.04) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.6s infinite;
        }
        @keyframes shimmer {
          0%  { background-position: 200% 0; }
          100%{ background-position: -200% 0; }
        }

        /* ── Lightbox ── */
        .gl-lb-backdrop {
          position: fixed; inset: 0;
          background: rgba(3,3,5,0.96);
          backdrop-filter: blur(16px);
          z-index: 9990;
          display: flex; align-items: center; justify-content: center;
        }

        .gl-lb-img {
          max-height: 85svh;
          max-width: clamp(280px, 88vw, 1100px);
          border-radius: 12px;
          object-fit: contain;
          box-shadow: 0 0 60px rgba(0,0,0,0.8);
          border: 1px solid rgba(255,255,255,0.08);
          user-select: none;
        }

        /* Nav buttons */
        .gl-lb-nav {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 44px; height: 44px; border-radius: 12px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.6);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 18px;
          transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;
          z-index: 2;
        }
        .gl-lb-nav:hover {
          background: rgba(249,115,22,0.15);
          border-color: rgba(249,115,22,0.3);
          color: #f97316;
          transform: translateY(-50%) scale(1.08);
        }
        .gl-lb-prev { left: clamp(10px,3vw,28px); }
        .gl-lb-next { right: clamp(10px,3vw,28px); }

        /* Close */
        .gl-lb-close {
          position: absolute; top: 16px; right: 16px;
          width: 38px; height: 38px; border-radius: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          color: rgba(255,255,255,0.5);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 20px;
          transition: background 0.2s, color 0.2s;
          z-index: 2;
        }
        .gl-lb-close:hover {
          background: rgba(239,68,68,0.15);
          color: #ef4444;
          border-color: rgba(239,68,68,0.3);
        }

        /* Counter */
        .gl-lb-counter {
          position: absolute; bottom: 18px; left: 50%;
          transform: translateX(-50%);
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.35em; text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          background: rgba(5,5,8,0.7);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 5px 16px; border-radius: 100px;
          white-space: nowrap;
        }
      `}</style>

      <div className="gl-root">
        <div className="gl-orb gl-orb1" />
        <div className="gl-orb gl-orb2" />

        <div className="gl-inner">

          {/* ── Hero ── */}
          <motion.div
            className="gl-hero"
            variants={fadeUp} initial="hidden"
            animate="show" transition={{ duration: 0.7 }}
          >
            <div className="gl-eyebrow">
              <span className="gl-eline l" />
              TechKruti 2K26
              <span className="gl-eline r" />
            </div>

            <h1 className="gl-title">
              <span className="gl-title-event">Event</span>
              <span className="gl-title-gallery">Gallery</span>
            </h1>

            <p className="gl-hero-desc">
              Memories from TechKruti — hackathons, winners, coordinators &amp; sponsors.
            </p>
          </motion.div>

          {/* ── Filter Bar ── */}
          <motion.div
            className="gl-filters"
            variants={fadeUp} initial="hidden"
            animate="show" transition={{ duration: 0.6, delay: 0.1 }}
          >
            {categories.map((cat) => {
              const isActive = activeFilter === cat.key;
              return (
                <button
                  key={cat.key}
                  className={`gl-filter-btn ${isActive ? "active" : ""}`}
                  onClick={() => setActiveFilter(cat.key)}
                  style={isActive ? {
                    background: `linear-gradient(135deg, ${cat.color1}22, ${cat.color2}22)`,
                    borderColor: `${cat.color1}55`,
                    boxShadow: `0 0 16px ${cat.color1}33`,
                    color: cat.color1,
                  } : {}}
                >
                  <span
                    className="gl-filter-dot"
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, ${cat.color1}, ${cat.color2})`
                        : "rgba(255,255,255,0.2)",
                      boxShadow: isActive ? `0 0 6px ${cat.color1}` : "none",
                    }}
                  />
                  {cat.label}
                </button>
              );
            })}
          </motion.div>

          {/* count */}
          {/* <p className="gl-count">
            Showing {filtered.length} photo{filtered.length !== 1 ? "s" : ""} ·{" "}
            {activeCat?.label}
          </p> */}

          {/* ── Masonry Grid ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="gl-masonry"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {filtered.map((img, index) => (
                <div
                  key={img.id}
                  className="gl-item"
                  onClick={() => setSelectedIndex(index)}
                >
                  {!imgLoaded[img.id] && <div className="gl-skeleton" />}
                  <img
                    src={img.src}
                    alt={img.category}
                    loading="lazy"
                    style={{ display: imgLoaded[img.id] ? "block" : "" }}
                    onLoad={() => setImgLoaded((prev) => ({ ...prev, [img.id]: true }))}
                  />
                  <div className="gl-item-overlay">
                    <span className="gl-item-tag">{img.category}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selectedIndex !== null && filtered[selectedIndex] && (
          <motion.div
            className="gl-lb-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedIndex(null)}
          >
            {/* Prev */}
            <button
              className="gl-lb-nav gl-lb-prev"
              onClick={(e) => { e.stopPropagation(); setSelectedIndex((p) => (p - 1 + filtered.length) % filtered.length); }}
            >
              ‹
            </button>

            {/* Image */}
            <motion.img
              key={filtered[selectedIndex].src}
              src={filtered[selectedIndex].src}
              alt="preview"
              className="gl-lb-img"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2 }}
              draggable={false}
            />

            {/* Next */}
            <button
              className="gl-lb-nav gl-lb-next"
              onClick={(e) => { e.stopPropagation(); setSelectedIndex((p) => (p + 1) % filtered.length); }}
            >
              ›
            </button>

            {/* Close */}
            <button
              className="gl-lb-close"
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
            >
              ×
            </button>

            {/* Counter */}
            <div className="gl-lb-counter" onClick={(e) => e.stopPropagation()}>
              {selectedIndex + 1} / {filtered.length} · {filtered[selectedIndex].category}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;