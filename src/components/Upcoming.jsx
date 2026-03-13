import React from "react";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "KrutiVerse Hackathon 2K26",
    description: "Compete in an intense 10-hour coding marathon to solve real-world challenges.",
    img: "/event/hackathon.png",
    fee: "₹90 per Head",
    teamSize: "2-4 members",
    venue: "TGPCET Campus",
    date: "24th March",
    time: "9:00 AM – 7:00 PM",
    registration: "https://forms.gle/XghiHw85MWDSuBNJ6",
    tag: "HACKATHON",
    accent: "#f97316",
    accent2: "#facc15",
  },
  {
    id: 2,
    title: "Project Expo",
    description: "Showcase your innovative tech projects to industry leaders and investors.",
    img: "/event/project.png",
    fee: "₹200 per Team",
    teamSize: "2-4 members",
    venue: "Data Science Dept",
    date: "24th March",
    time: "10:00 AM – 3:00 PM",
    registration: "https://forms.gle/fvdqevFSYk9bhBqJ6",
    tag: "EXPO",
    accent: "#06b6d4",
    accent2: "#6366f1",
  },
  {
    id: 3,
    title: "KrutiArena E-Sports LAN",
    description: "Battle in top-tier gaming tournaments featuring BGMI and Free Fire.",
    img: "/event/esport.png",
    fee: "₹200 per Squad",
    teamSize: "4 members",
    venue: "TGPCET Campus",
    date: "25th March",
    time: "9:00 AM – 4:00 PM",
    registration: "https://forms.gle/7ptdP8uYdvVZtf8F8",
    tag: "E-SPORTS",
    accent: "#10b981",
    accent2: "#06b6d4",
  },
  {
    id: 4,
    title: "Open Mic",
    description: "Showcase your talent and express your creativity on stage.",
    img: "/event/Openmic.png",
    fee: "Free",
    teamSize: "Solo",
    venue: "TGPCET Campus",
    date: "24th March",
    time: "11:00 AM – 3:00 PM",
    registration: "https://forms.gle/n3EFvmZ6FNuVXjDo8",
    tag: "TALENT",
    accent: "#ec4899",
    accent2: "#a855f7",
  },
  {
    id: 5,
    title: "Reel Making / Short Film",
    description: "Turn your ideas into a creative reel or short film and win big.",
    img: "/event/reel.png",
    fee: "Free",
    teamSize: "Solo / Team",
    venue: "TGPCET Campus",
    date: "25th March",
    time: "10:00 AM – 5:00 PM",
    registration: "https://forms.gle/fnNGchSssi7usPyY7",
    tag: "CREATIVE",
    accent: "#f472b6",
    accent2: "#fb923c",
  },
  {
    id: 6,
    title: "Ciphertext Treasure Hunt",
    description: "Decode encrypted clues and solve puzzles to find the hidden treasure.",
    img: "/event/treasure.png",
    fee: "₹50 per Team",
    teamSize: "4 members",
    venue: "Mystery Room",
    date: "25th March",
    time: "10:00 AM – 2:00 PM",
    registration: "https://forms.gle/WY2MdvM2Suqx3Lxp9",
    tag: "PUZZLE",
    accent: "#a78bfa",
    accent2: "#38bdf8",
  },
  {
    id: 7,
    title: "Vibe — Coding",
    description: "Solo coding challenge with tricky problems designed to test your logic and speed.",
    img: "/event/vibecode.png",
    fee: "₹200 per Team",
    teamSize: "2-4 members",
    venue: "TGPCET Campus",
    date: "25th March",
    time: "10:00 AM – 4:00 PM",
    registration: "https://forms.gle/Y7Yydv2j4DbyTr979",
    tag: "CODING",
    accent: "#34d399",
    accent2: "#60a5fa",
    tgpcetOnly: true,
  },
];

/* ─── Card ─────────────────────────────────────────────── */
const EventCard = ({ event, index }) => {
  const navigate = useNavigate();
  const isFree = event.fee.toLowerCase() === "free";

  return (
    <div className="ev-card" style={{ animationDelay: `${index * 0.07}s` }}>

      {/* Image */}
      <div className="ev-img-wrap">
        <img src={event.img} alt={event.title} className="ev-img" />
        <div className="ev-img-overlay" />

        <span
          className="ev-tag"
          style={{ background: `linear-gradient(135deg, ${event.accent}, ${event.accent2})` }}
        >
          {event.tag}
        </span>

        {isFree && <span className="ev-free-badge">FREE</span>}
      </div>

      {/* Body */}
      <div className="ev-body">
        <div
          className="ev-accent-bar"
          style={{ background: `linear-gradient(90deg, ${event.accent}, ${event.accent2}, transparent)` }}
        />

        <h3 className="ev-title">{event.title}</h3>
        <p className="ev-desc">{event.description}</p>

        {event.tgpcetOnly && (
          <p className="ev-note">⚠ Only for TGPCET students</p>
        )}

        {/* Chips */}
        <div className="ev-chips">
          {[
            { icon: "💰", label: event.fee, c: event.accent },
            { icon: "👥", label: event.teamSize, c: event.accent2 },
            { icon: "📍", label: event.venue, c: "rgba(148,163,184,0.85)" },
          ].map(({ icon, label, c }) => (
            <span
              key={label}
              className="ev-chip"
              style={{ color: c, borderColor: `${c}30`, background: `${c}0d` }}
            >
              {icon} {label}
            </span>
          ))}
        </div>

        {/* Date / Time */}
        <div className="ev-meta">
          <span>📅 {event.date}</span>
          <span>⏰ {event.time}</span>
        </div>

        {/* Buttons */}
        <div className="ev-btns">
          <button
            className="ev-btn-details"
            style={{ borderColor: `${event.accent}55`, color: event.accent }}
            onClick={() => navigate(`/event/${event.id}`)}
          >
            Details
          </button>
          <button
            className="ev-btn-register"
            style={{ background: `linear-gradient(135deg, ${event.accent}, ${event.accent2})` }}
            onClick={() => window.open(event.registration, "_blank")}
          >
            Register →
          </button>
        </div>
      </div>
    </div>
  );
};

/* ─── Page ──────────────────────────────────────────────── */
const Upcoming = () => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <style>{`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

      /* Page */
      .up-page {
        width: 100%;
        min-height: 100svh;
        background: #050508;
        color: #fff;
        padding: clamp(48px, 8vw, 96px) clamp(16px, 5vw, 40px);
        position: relative;
        overflow: hidden;
        isolation: isolate;
      }

      /* grain */
      .up-page::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
        opacity: 0.022;
        pointer-events: none;
        z-index: 0;
      }

      /* scanlines */
      .up-page::after {
        content: "";
        position: fixed;
        inset: 0;
        background-image: repeating-linear-gradient(
          to bottom,
          transparent, transparent 3px,
          rgba(255,255,255,0.01) 3px, rgba(255,255,255,0.01) 4px
        );
        pointer-events: none;
        z-index: 0;
      }

      /* Orbs */
      .up-orb {
        position: fixed;
        border-radius: 50%;
        filter: blur(100px);
        pointer-events: none;
        z-index: 0;
        animation: orbDrift 22s ease-in-out infinite;
      }

      .up-orb1 {
        width: clamp(260px, 42vw, 560px);
        height: clamp(260px, 42vw, 560px);
        background: radial-gradient(circle, #7c3aed, transparent 70%);
        top: -8%; left: -6%;
        opacity: 0.13;
      }

      .up-orb2 {
        width: clamp(200px, 32vw, 460px);
        height: clamp(200px, 32vw, 460px);
        background: radial-gradient(circle, #0e7490, transparent 70%);
        bottom: -6%; right: -5%;
        opacity: 0.11;
        animation-direction: reverse;
      }

      @keyframes orbDrift {
        0%,100% { transform: translate(0,0); }
        50%      { transform: translate(3%, 4%); }
      }

      /* ── Header ── */
      .up-header {
        position: relative;
        z-index: 1;
        text-align: center;
        margin-bottom: clamp(32px, 6vw, 64px);
      }

      .up-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        font-family: 'Rajdhani', sans-serif;
        font-size: clamp(10px, 2vw, 13px);
        font-weight: 600;
        letter-spacing: 0.32em;
        text-transform: uppercase;
        color: rgba(251,191,36,0.62);
        margin-bottom: 14px;
      }

      .ew-bar { width: 36px; height: 1px; background: linear-gradient(90deg, transparent, rgba(251,191,36,0.45)); }
      .ew-bar.r { background: linear-gradient(90deg, rgba(251,191,36,0.45), transparent); }

      .up-h1 {
        font-family: 'Bebas Neue', sans-serif;
        font-size: clamp(3rem, 13vw, 8.5rem);
        line-height: 0.9;
        letter-spacing: 0.04em;
      }

      .up-h1-a {
        display: block;
        background: linear-gradient(135deg, #fff 40%, rgba(255,255,255,0.4));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .up-h1-b {
        display: block;
        background: linear-gradient(135deg, #06b6d4, #a855f7 50%, #ec4899);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .up-sub {
        font-family: 'Rajdhani', sans-serif;
        font-size: clamp(11px, 2.2vw, 13px);
        color: rgba(148,163,184,0.65);
        letter-spacing: 0.08em;
        margin-top: 12px;
      }

      .up-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-top: 18px;
        font-family: 'Rajdhani', sans-serif;
        font-size: clamp(10px, 1.8vw, 11px);
        font-weight: 600;
        letter-spacing: 0.28em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.2);
        border: 1px solid rgba(255,255,255,0.07);
        padding: 5px 16px;
        border-radius: 100px;
      }

      /* ── Grid ── */
      .up-grid {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
        gap: clamp(14px, 2.5vw, 26px);
        max-width: 1180px;
        margin: 0 auto;
      }

      /* ── Card ── */
      .ev-card {
        display: flex;
        flex-direction: column;
        border-radius: 14px;
        overflow: hidden;
        background: rgba(255,255,255,0.028);
        border: 1px solid rgba(255,255,255,0.07);
        backdrop-filter: blur(14px);
        transition: transform 0.32s ease, box-shadow 0.32s ease, border-color 0.32s ease;
        animation: cardIn 0.55s ease both;
      }

      .ev-card:hover {
        transform: translateY(-8px);
        border-color: rgba(255,255,255,0.14);
        box-shadow: 0 28px 60px rgba(0,0,0,0.55);
      }

      @keyframes cardIn {
        from { opacity: 0; transform: translateY(28px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      /* Image */
      .ev-img-wrap {
        position: relative;
        height: clamp(150px, 22vw, 210px);
        overflow: hidden;
        flex-shrink: 0;
      }

      .ev-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.5s ease;
      }

      .ev-card:hover .ev-img { transform: scale(1.06); }

      .ev-img-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(5,5,8,0.92) 0%, rgba(5,5,8,0.25) 55%, transparent);
      }

      .ev-tag {
        position: absolute;
        top: 10px;
        left: 10px;
        font-family: 'Rajdhani', sans-serif;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.22em;
        padding: 3px 9px;
        border-radius: 4px;
        color: #000;
        text-transform: uppercase;
      }

      .ev-free-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        font-family: 'Rajdhani', sans-serif;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.2em;
        padding: 3px 9px;
        border-radius: 4px;
        background: rgba(16,185,129,0.12);
        border: 1px solid rgba(16,185,129,0.35);
        color: #34d399;
      }

      /* Body */
      .ev-body {
        padding: clamp(14px, 2.5vw, 20px);
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 9px;
      }

      .ev-accent-bar {
        height: 2px;
        width: 36px;
        border-radius: 2px;
        margin-bottom: 2px;
      }

      .ev-title {
        font-family: 'Bebas Neue', sans-serif;
        font-size: clamp(1.15rem, 3.2vw, 1.55rem);
        letter-spacing: 0.04em;
        color: #fff;
        line-height: 1.1;
      }

      .ev-desc {
        font-family: 'Rajdhani', sans-serif;
        font-size: clamp(11px, 2vw, 13px);
        color: rgba(148,163,184,0.78);
        line-height: 1.6;
      }

      .ev-note {
        font-family: 'Rajdhani', sans-serif;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.06em;
        color: #fbbf24;
        background: rgba(251,191,36,0.07);
        border: 1px solid rgba(251,191,36,0.2);
        padding: 6px 10px;
        border-radius: 6px;
      }

      .ev-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
      }

      .ev-chip {
        font-family: 'Rajdhani', sans-serif;
        font-size: clamp(10px, 1.8vw, 11px);
        font-weight: 600;
        letter-spacing: 0.04em;
        padding: 3px 9px;
        border-radius: 100px;
        border: 1px solid;
        white-space: nowrap;
      }

      .ev-meta {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 4px;
        font-family: 'Rajdhani', sans-serif;
        font-size: clamp(10px, 1.8vw, 11px);
        font-weight: 500;
        color: rgba(100,116,139,0.85);
        letter-spacing: 0.04em;
      }

      .ev-btns {
        display: flex;
        gap: 8px;
        margin-top: auto;
        padding-top: 4px;
      }

      .ev-btn-details,
      .ev-btn-register {
        flex: 1;
        padding: clamp(8px, 1.8vw, 11px) 0;
        border-radius: 8px;
        font-family: 'Rajdhani', sans-serif;
        font-size: clamp(11px, 2vw, 13px);
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        cursor: pointer;
        transition: transform 0.2s, opacity 0.2s;
        outline: none;
      }

      .ev-btn-details:hover,
      .ev-btn-register:hover { transform: scale(1.04); opacity: 0.9; }
      .ev-btn-details:active,
      .ev-btn-register:active { transform: scale(0.97); }

      .ev-btn-details {
        background: transparent;
        border: 1px solid;
      }

      .ev-btn-register {
        color: #000;
        font-weight: 800;
        border: none;
      }

      /* ── Responsive ── */
      @media (max-width: 380px) {
        .ev-btns { flex-direction: column; }
      }

      @media (max-height: 520px) and (orientation: landscape) {
        .up-h1 { font-size: clamp(2rem, 9vw, 4rem); }
        .up-page { padding: 24px 16px; }
        .up-header { margin-bottom: 24px; }
      }
    `}</style>

    <div className="up-page">
      <div className="up-orb up-orb1" />
      <div className="up-orb up-orb2" />

      {/* Header */}
      <header className="up-header">
        <div className="up-eyebrow">
          <span className="ew-bar" />
          TechKruti 2K26
          <span className="ew-bar r" />
        </div>
        <h1 className="up-h1">
          <span className="up-h1-a">Upcoming</span>
          <span className="up-h1-b">Events</span>
        </h1>
        <p className="up-sub">March 24–25 · TGPCET Campus · Mohgaon, Nagpur</p>
        <div className="up-pill">{events.length} events this year</div>
      </header>

      {/* Cards */}
      <div className="up-grid">
        {events.map((ev, i) => (
          <EventCard key={ev.id} event={ev} index={i} />
        ))}
      </div>
    </div>
  </>
);

export default Upcoming;