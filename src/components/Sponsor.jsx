import React from "react";

const sponsors = [
  { id: 1, name: "CSI", logo: "/sponsors/CSI.jpg", website: "https://csiindia.org/", tier: "title" },
  { id: 2, name: "DevCult", logo: "/sponsors/Dev.jpg", website: "https://www.instagram.com/devcult.india", tier: "title" },
  { id: 3, name: "Softronix", logo: "/sponsors/SoftronixLogo1.png", website: "https://softronix.in/", tier: "title" },
];

const tierConfig = {
  title: {
    label: "Title Sponsor",
    color1: "#f97316",
    color2: "#facc15",
    cardSize: "sponsor-card--title",
    imgSize: 110,
  },
  gold: {
    label: "Gold Sponsor",
    color1: "#fbbf24",
    color2: "#f59e0b",
    cardSize: "sponsor-card--gold",
    imgSize: 88,
  },
  silver: {
    label: "Silver Sponsor",
    color1: "#94a3b8",
    color2: "#cbd5e1",
    cardSize: "sponsor-card--silver",
    imgSize: 72,
  },
};

const Sponsor = () => {
  const grouped = {
    title:  sponsors.filter((s) => s.tier === "title"),
    gold:   sponsors.filter((s) => s.tier === "gold"),
    silver: sponsors.filter((s) => s.tier === "silver"),
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .sp-root {
          position: relative;
          width: 100%;
          min-height: 100svh;
          background: #050508;
          overflow: hidden;
          padding: 80px 20px 100px;
          isolation: isolate;
          font-family: 'Rajdhani', sans-serif;
        }

        /* ── Noise grain ── */
        .sp-root::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.025;
          pointer-events: none;
          z-index: 0;
        }

        /* ── Scanlines ── */
        .sp-root::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            to bottom,
            transparent, transparent 3px,
            rgba(255,255,255,0.01) 3px, rgba(255,255,255,0.01) 4px
          );
          pointer-events: none;
          z-index: 0;
        }

        /* ── Orbs ── */
        .sp-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          z-index: 0;
        }
        .sp-orb1 {
          width: clamp(300px, 50vw, 700px);
          height: clamp(300px, 50vw, 700px);
          background: radial-gradient(circle, #7c3aed, transparent 70%);
          top: -10%; left: -10%;
          opacity: 0.16;
          animation: orbFloat1 20s ease-in-out infinite;
        }
        .sp-orb2 {
          width: clamp(250px, 40vw, 600px);
          height: clamp(250px, 40vw, 600px);
          background: radial-gradient(circle, #0e7490, transparent 70%);
          bottom: -8%; right: -8%;
          opacity: 0.16;
          animation: orbFloat2 24s ease-in-out infinite;
        }
        .sp-orb3 {
          width: clamp(150px, 25vw, 350px);
          height: clamp(150px, 25vw, 350px);
          background: radial-gradient(circle, #f59e0b, transparent 70%);
          top: 40%; left: 42%;
          opacity: 0.08;
          animation: orbFloat3 16s ease-in-out infinite;
        }

        @keyframes orbFloat1 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(4%,6%) scale(1.06); }
        }
        @keyframes orbFloat2 {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(-5%,-4%); }
        }
        @keyframes orbFloat3 {
          0%,100% { transform: translate(-50%,-50%) scale(1); }
          50%      { transform: translate(-50%,-50%) scale(1.2); }
        }

        /* ── Content ── */
        .sp-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        /* ── Eyebrow ── */
        .sp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: rgba(251,191,36,0.65);
          font-size: clamp(10px, 2vw, 12px);
          font-weight: 600;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          margin-bottom: 16px;
          animation: fadeUp 0.7s ease both;
        }

        .sp-eyebrow-line {
          width: 36px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(251,191,36,0.4));
        }
        .sp-eyebrow-line.r {
          background: linear-gradient(90deg, rgba(251,191,36,0.4), transparent);
        }

        /* ── Heading ── */
        .sp-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 12vw, 8rem);
          letter-spacing: 0.06em;
          line-height: 0.92;
          animation: fadeUp 0.7s 0.08s ease both;
        }

        .sp-heading-our {
          display: block;
          background: linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.45));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sp-heading-sponsors {
          display: block;
          background: linear-gradient(135deg, #f97316 0%, #ec4899 55%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Divider ── */
        .sp-divider {
          display: flex;
          align-items: center;
          gap: 14px;
          max-width: 320px;
          margin: 36px auto 48px;
          animation: fadeUp 0.7s 0.14s ease both;
        }

        .sp-divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        }

        .sp-divider-text {
          font-size: 10px;
          letter-spacing: 0.4em;
          color: rgba(255,255,255,0.2);
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* ── Tier section ── */
        .sp-tier {
          margin-bottom: 60px;
          animation: fadeUp 0.7s 0.2s ease both;
        }

        .sp-tier-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: clamp(9px, 1.8vw, 11px);
          font-weight: 700;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .sp-tier-pip {
          width: 24px;
          height: 1px;
        }

        /* ── Cards grid ── */
        .sp-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: clamp(16px, 4vw, 32px);
        }

        /* ── Card ── */
        .sponsor-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: clamp(20px, 4vw, 36px) clamp(24px, 5vw, 44px);
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.35s ease, border-color 0.35s ease;
          overflow: hidden;
          backdrop-filter: blur(12px);
        }

        /* Shimmer sweep on hover */
        .sponsor-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            115deg,
            transparent 30%,
            rgba(255,255,255,0.04) 50%,
            transparent 70%
          );
          transform: translateX(-100%);
          transition: transform 0.5s ease;
          border-radius: 16px;
        }

        .sponsor-card:hover::before {
          transform: translateX(100%);
        }

        .sponsor-card:hover {
          transform: translateY(-8px) scale(1.03);
          border-color: rgba(255,255,255,0.15);
        }

        /* Title tier */
        .sponsor-card--title {
          min-width: clamp(200px, 40vw, 320px);
        }
        .sponsor-card--title:hover {
          box-shadow: 0 0 40px rgba(249,115,22,0.25), 0 20px 60px rgba(0,0,0,0.5);
        }

        /* Gold tier */
        .sponsor-card--gold {
          min-width: clamp(160px, 30vw, 240px);
        }
        .sponsor-card--gold:hover {
          box-shadow: 0 0 30px rgba(251,191,36,0.2), 0 16px 48px rgba(0,0,0,0.5);
        }

        /* Silver tier */
        .sponsor-card--silver {
          min-width: clamp(130px, 25vw, 200px);
        }
        .sponsor-card--silver:hover {
          box-shadow: 0 0 24px rgba(148,163,184,0.15), 0 12px 36px rgba(0,0,0,0.5);
        }

        /* Corner accents */
        .sponsor-card .c-acc {
          position: absolute;
          width: 14px;
          height: 14px;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .sponsor-card:hover .c-acc { opacity: 1; }
        .c-acc.tl { top: 10px; left: 10px; border-top: 1.5px solid; border-left: 1.5px solid; }
        .c-acc.tr { top: 10px; right: 10px; border-top: 1.5px solid; border-right: 1.5px solid; }
        .c-acc.bl { bottom: 10px; left: 10px; border-bottom: 1.5px solid; border-left: 1.5px solid; }
        .c-acc.br { bottom: 10px; right: 10px; border-bottom: 1.5px solid; border-right: 1.5px solid; }

        /* ── Logo wrapper ── */
        .sp-logo-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }

        .sp-logo-bg {
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.35s ease;
          filter: blur(20px);
        }

        .sponsor-card:hover .sp-logo-bg { opacity: 0.35; }

        .sp-logo {
          position: relative;
          object-fit: contain;
          transition: transform 0.4s cubic-bezier(.34,1.56,.64,1), filter 0.3s ease;
          filter: grayscale(20%) brightness(0.9);
          border-radius: 8px;
        }

        .sponsor-card:hover .sp-logo {
          transform: scale(1.08) rotate(-2deg);
          filter: grayscale(0%) brightness(1.1);
        }

        /* ── Name ── */
        .sp-name {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(14px, 3vw, 18px);
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          transition: color 0.3s ease;
        }

        .sponsor-card:hover .sp-name {
          color: rgba(255,255,255,0.9);
        }

        /* ── CTA pill ── */
        .sp-cta {
          display: inline-block;
          margin-top: 8px;
          font-size: 9px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .sponsor-card:hover .sp-cta {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── "Become a sponsor" CTA ── */
        .sp-become {
          margin-top: 60px;
          animation: fadeUp 0.7s 0.35s ease both;
        }

        .sp-become-text {
          font-size: clamp(10px, 2vw, 12px);
          letter-spacing: 0.3em;
          color: rgba(255,255,255,0.18);
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .sp-become-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.55);
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(12px, 2.5vw, 14px);
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          padding: 12px 28px;
          border-radius: 100px;
          text-decoration: none;
          transition: background 0.3s, border-color 0.3s, color 0.3s, box-shadow 0.3s;
        }

        .sp-become-btn:hover {
          background: rgba(249,115,22,0.1);
          border-color: rgba(249,115,22,0.4);
          color: #f97316;
          box-shadow: 0 0 24px rgba(249,115,22,0.2);
        }

        .sp-become-arrow {
          font-size: 16px;
          transition: transform 0.3s ease;
        }

        .sp-become-btn:hover .sp-become-arrow {
          transform: translateX(4px);
        }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Responsive ── */
        @media (max-width: 480px) {
          .sp-root { padding: 60px 16px 80px; }
          .sponsor-card--title { min-width: calc(100vw - 60px); max-width: 340px; }
          .sponsor-card--gold, .sponsor-card--silver { min-width: calc(50vw - 30px); }
        }

        @media (max-height: 520px) and (orientation: landscape) {
          .sp-root { padding: 40px 20px 60px; }
          .sp-divider { margin: 20px auto 32px; }
          .sp-tier { margin-bottom: 36px; }
        }
      `}</style>

      <div className="sp-root">
        {/* Orbs */}
        <div className="sp-orb sp-orb1" />
        <div className="sp-orb sp-orb2" />
        <div className="sp-orb sp-orb3" />

        <div className="sp-content">

          {/* Eyebrow */}
          <div className="sp-eyebrow">
            <span className="sp-eyebrow-line" />
            TechKruti 2K26
            <span className="sp-eyebrow-line r" />
          </div>

          {/* Heading */}
          <h1 className="sp-heading">
            <span className="sp-heading-our">Our</span>
            <span className="sp-heading-sponsors">Sponsors</span>
          </h1>
          {/* Divider */}
          <div className="sp-divider">
            <div className="sp-divider-line" />
            <span className="sp-divider-text">Supported By</span>
            <div className="sp-divider-line" />
          </div>

          {/* Tier: Title */}
          {grouped.title.length > 0 && (
            <TierRow
              sponsors={grouped.title}
              config={tierConfig.title}
            />
          )}

          {/* Tier: Gold */}
          {grouped.gold.length > 0 && (
            <TierRow
              sponsors={grouped.gold}
              config={tierConfig.gold}
            />
          )}

          {/* Tier: Silver */}
          {grouped.silver.length > 0 && (
            <TierRow
              sponsors={grouped.silver}
              config={tierConfig.silver}
            />
          )}

          {/* Become a sponsor CTA */}
          <div className="sp-become">
            <p className="sp-become-text">Interested in sponsoring?</p>
            <a
              href="mailto:techkruti.ds@tgpcet.com"
              className="sp-become-btn"
            >
              Become a Sponsor
              <span className="sp-become-arrow">→</span>
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

/* ── Tier Row ── */
const TierRow = ({ sponsors, config }) => (
  <div className="sp-tier">
    <div
      className="sp-tier-label"
      style={{ color: config.color1 }}
    >
      <span
        className="sp-tier-pip"
        style={{ background: `linear-gradient(90deg, transparent, ${config.color1})` }}
      />
      {config.label}
      <span
        className="sp-tier-pip"
        style={{ background: `linear-gradient(90deg, ${config.color1}, transparent)` }}
      />
    </div>

    <div className="sp-grid">
      {sponsors.map((s) => (
        <a
          key={s.id}
          href={s.website}
          target="_blank"
          rel="noopener noreferrer"
          className={`sponsor-card ${config.cardSize}`}
        >
          {/* Corner accents */}
          {["tl","tr","bl","br"].map((pos) => (
            <span
              key={pos}
              className={`c-acc ${pos}`}
              style={{ borderColor: config.color1 }}
            />
          ))}

          {/* Logo */}
          <div className="sp-logo-wrap">
            <div
              className="sp-logo-bg"
              style={{ background: `radial-gradient(circle, ${config.color1}, ${config.color2})` }}
            />
            <img
              src={s.logo}
              alt={s.name}
              className="sp-logo"
              style={{ width: config.imgSize, height: config.imgSize }}
            />
          </div>

          {/* Name */}
          <span className="sp-name">{s.name}</span>

          {/* Visit CTA */}
          <span className="sp-cta">Visit →</span>
        </a>
      ))}
    </div>
  </div>
);

export default Sponsor;