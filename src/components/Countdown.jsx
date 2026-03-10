import { useState, useEffect } from "react";
import React from "react";

/* ─── SVG Ring Timer Card ─────────────────────────────────────── */
const RingCard = ({ value, unit, max, color1, color2, delay = "0s" }) => {
  const SIZE = 120;
  const STROKE = 6;
  const R = (SIZE - STROKE * 2) / 2;
  const CIRC = 2 * Math.PI * R;
  const pct = value / max;
  const dash = CIRC * pct;

  return (
    <div
      className="ring-card"
      style={{ animationDelay: delay }}
    >
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="ring-svg"
      >
        {/* Track */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={R}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={STROKE}
        />
        {/* Progress */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={R}
          fill="none"
          stroke={`url(#grad-${unit})`}
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${CIRC}`}
          strokeDashoffset={CIRC * 0.25}
          style={{ transition: "stroke-dasharray 0.6s cubic-bezier(.4,0,.2,1)" }}
        />
        <defs>
          <linearGradient id={`grad-${unit}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color1} />
            <stop offset="100%" stopColor={color2} />
          </linearGradient>
        </defs>
        {/* Glow dot at tip */}
        <circle
          cx={SIZE / 2 + R * Math.cos(2 * Math.PI * pct - Math.PI / 2)}
          cy={SIZE / 2 + R * Math.sin(2 * Math.PI * pct - Math.PI / 2)}
          r={4}
          fill={color2}
          style={{
            filter: `drop-shadow(0 0 6px ${color2})`,
            transition: "cx 0.6s cubic-bezier(.4,0,.2,1), cy 0.6s cubic-bezier(.4,0,.2,1)",
          }}
        />
      </svg>

      {/* Number */}
      <div className="ring-inner">
        <span
          className="ring-value"
          style={{
            background: `linear-gradient(135deg, ${color1}, ${color2})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {String(value).padStart(2, "0")}
        </span>
        <span className="ring-unit">{unit}</span>
      </div>
    </div>
  );
};

/* ─── Orb background ─────────────────────────────────────────── */
const Orbs = () => (
  <div className="orbs-wrap" aria-hidden="true">
    <div className="orb orb1" />
    <div className="orb orb2" />
    <div className="orb orb3" />
    <div className="orb orb4" />
  </div>
);

/* ─── Main Countdown ─────────────────────────────────────────── */
const Countdown = () => {
  const targetDate = new Date("March 24, 2026 09:00:00").getTime();

  const getTimeRemaining = () => {
    const diff = Math.max(0, targetDate - Date.now());
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(getTimeRemaining());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { key: "days",    max: 365, color1: "#f97316", color2: "#facc15" },
    { key: "hours",   max: 24,  color1: "#ec4899", color2: "#a855f7" },
    { key: "minutes", max: 60,  color1: "#06b6d4", color2: "#6366f1" },
    { key: "seconds", max: 60,  color1: "#10b981", color2: "#06b6d4" },
  ];

  return (
    <>
      {/* ── Google Font ── */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        /* ── Reset ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Root ── */
        .cd-root {
          position: relative;
          width: 100%;
          min-height: 100svh;
          background: #050508;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 60px 20px;
          isolation: isolate;
        }

        /* ── Noise grain overlay ── */
        .cd-root::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.025;
          pointer-events: none;
          z-index: 1;
        }

        /* ── Thin horizontal rule lines ── */
        .cd-root::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 3px,
            rgba(255,255,255,0.012) 3px,
            rgba(255,255,255,0.012) 4px
          );
          pointer-events: none;
          z-index: 1;
        }

        /* ── Orbs ── */
        .orbs-wrap {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.18;
        }

        .orb1 {
          width: clamp(300px, 55vw, 700px);
          height: clamp(300px, 55vw, 700px);
          background: radial-gradient(circle, #7c3aed, transparent 70%);
          top: -15%;
          left: -10%;
          animation: orbDrift1 18s ease-in-out infinite;
        }

        .orb2 {
          width: clamp(250px, 45vw, 600px);
          height: clamp(250px, 45vw, 600px);
          background: radial-gradient(circle, #0e7490, transparent 70%);
          bottom: -10%;
          right: -8%;
          animation: orbDrift2 22s ease-in-out infinite;
        }

        .orb3 {
          width: clamp(150px, 30vw, 400px);
          height: clamp(150px, 30vw, 400px);
          background: radial-gradient(circle, #be185d, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: orbDrift3 14s ease-in-out infinite;
        }

        .orb4 {
          width: clamp(100px, 20vw, 280px);
          height: clamp(100px, 20vw, 280px);
          background: radial-gradient(circle, #f59e0b, transparent 70%);
          bottom: 15%;
          left: 8%;
          opacity: 0.10;
          animation: orbDrift1 26s ease-in-out infinite reverse;
        }

        @keyframes orbDrift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(4%, 6%) scale(1.05); }
          66%       { transform: translate(-3%, 3%) scale(0.97); }
        }

        @keyframes orbDrift2 {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(-5%, -4%); }
        }

        @keyframes orbDrift3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50%       { transform: translate(-50%, -50%) scale(1.15); }
        }

        /* ── Content wrapper ── */
        .cd-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 900px;
          text-align: center;
        }

        /* ── Eyebrow ── */
        .cd-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: rgba(251,191,36,0.7);
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(10px, 2.2vw, 13px);
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          margin-bottom: 20px;
          animation: fadeUp 0.8s ease both;
        }

        .eyebrow-line {
          width: 40px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(251,191,36,0.5));
        }

        .eyebrow-line.right {
          background: linear-gradient(90deg, rgba(251,191,36,0.5), transparent);
        }

        /* ── Main Title ── */
        .cd-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(4rem, 18vw, 11rem);
          line-height: 0.9;
          letter-spacing: 0.04em;
          animation: fadeUp 0.8s 0.1s ease both;
          position: relative;
        }

        .cd-title-tech {
          display: block;
          background: linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.5) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cd-title-kruti {
          display: block;
          background: linear-gradient(135deg, #f97316 0%, #ec4899 50%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cd-year-badge {
          display: inline-block;
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(0.9rem, 3vw, 1.4rem);
          font-weight: 700;
          letter-spacing: 0.5em;
          color: rgba(255,255,255,0.25);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 4px 18px;
          margin-top: 10px;
          animation: fadeUp 0.8s 0.15s ease both;
        }

        /* ── Subtitle ── */
        .cd-subtitle {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(11px, 2.4vw, 14px);
          color: rgba(148,163,184,0.8);
          letter-spacing: 0.08em;
          max-width: 480px;
          margin: 18px auto 0;
          line-height: 1.7;
          animation: fadeUp 0.8s 0.2s ease both;
        }

        /* ── Divider ── */
        .cd-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 36px auto;
          max-width: 320px;
          animation: fadeUp 0.8s 0.25s ease both;
        }

        .cd-divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
        }

        .cd-divider-text {
          font-family: 'Rajdhani', sans-serif;
          font-size: 11px;
          letter-spacing: 0.35em;
          color: rgba(255,255,255,0.22);
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* ── Ring Cards Grid ── */
        .cd-rings {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: clamp(12px, 4vw, 32px);
          animation: fadeUp 0.8s 0.3s ease both;
        }

        /* ── Ring Card ── */
        .ring-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: default;
          animation: cardIn 0.6s ease both;
          transition: transform 0.3s ease;
        }

        .ring-card:hover {
          transform: translateY(-6px);
        }

        .ring-svg {
          width: clamp(80px, 20vw, 120px);
          height: clamp(80px, 20vw, 120px);
          overflow: visible;
        }

        /* Number overlay on top of SVG */
        .ring-inner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
        }

        .ring-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.6rem, 5vw, 2.4rem);
          line-height: 1;
          letter-spacing: 0.02em;
        }

        .ring-unit {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(8px, 1.8vw, 10px);
          font-weight: 600;
          letter-spacing: 0.25em;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
          margin-top: 2px;
        }

        @keyframes cardIn {
          from { opacity: 0; transform: scale(0.8) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* ── Bottom strip ── */
        .cd-bottom {
          margin-top: 44px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          animation: fadeUp 0.8s 0.4s ease both;
        }

        .cd-date-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 100px;
          padding: 8px 22px;
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(11px, 2.5vw, 14px);
          font-weight: 600;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase;
        }

        .pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.75); }
        }

        .cd-venue {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(10px, 2vw, 12px);
          letter-spacing: 0.3em;
          color: rgba(255,255,255,0.18);
          text-transform: uppercase;
        }

        /* ── Shared fade-up ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Landscape phones ── */
        @media (max-height: 520px) and (orientation: landscape) {
          .cd-root { padding: 30px 20px; }
          .cd-title { font-size: clamp(2.5rem, 12vw, 6rem); }
          .cd-subtitle { display: none; }
          .cd-divider { margin: 18px auto; }
          .cd-bottom { margin-top: 20px; }
        }

        /* ── Very small phones ── */
        @media (max-width: 360px) {
          .cd-rings { gap: 10px; }
          .ring-svg { width: 72px; height: 72px; }
        }
      `}</style>

      <div className="cd-root">
        <Orbs />

        <div className="cd-content">

          {/* Eyebrow */}
          <div className="cd-eyebrow">
            <span className="eyebrow-line" />
            National Level Tech Fest
            <span className="eyebrow-line right" />
          </div>

          {/* Title */}
          <h1 className="cd-title">
            <span className="cd-title-tech">TECH</span>
            <span className="cd-title-kruti">KRUTI</span>
          </h1>
          <div className="cd-year-badge">2 0 2 6</div>

          {/* Subtitle */}
          <p className="cd-subtitle">
            CSE (Data Science) Dept · In Association with CSI
            <br />TGPCET Nagpur Mohgaon — Autonomous Institute
          </p>

          {/* Divider */}
          <div className="cd-divider">
            <div className="cd-divider-line" />
            <span className="cd-divider-text">Countdown</span>
            <div className="cd-divider-line" />
          </div>

          {/* Ring Timers */}
          <div className="cd-rings">
            {units.map(({ key, max, color1, color2 }, i) => (
              <RingCard
                key={key}
                value={time[key]}
                unit={key}
                max={max}
                color1={color1}
                color2={color2}
                delay={`${i * 0.08}s`}
              />
            ))}
          </div>

          {/* Bottom */}
          <div className="cd-bottom">
            <div className="cd-date-pill">
              <span className="pill-dot" />
              March 24 – 25, 2026
            </div>
            <span className="cd-venue">TGPCET Campus · Mohgaon, Nagpur</span>
          </div>

        </div>
      </div>
    </>
  );
};

export default Countdown;