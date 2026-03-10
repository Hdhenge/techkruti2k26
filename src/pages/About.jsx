import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const events = [
  {
    emoji: "💻", title: "KrutiVerse Hackathon",
    desc: "An 8-hour coding marathon where teams collaborate to build innovative tech solutions for real-world problems using modern technologies.",
    color1: "#f97316", color2: "#a855f7", id: 1,
  },
  {
    emoji: "🚀", title: "Project Expo",
    desc: "Present your innovative tech projects and research ideas to faculty members, mentors, and industry professionals for expert evaluation.",
    color1: "#06b6d4", color2: "#6366f1", id: 2,
  },
  {
    emoji: "🎮", title: "E-Sports Championship",
    desc: "Intense gaming action in BGMI and Free Fire tournaments where squads compete head-to-head for the championship title.",
    color1: "#10b981", color2: "#06b6d4", id: 3,
  },
  {
    emoji: "🎤", title: "Open Mic Talent Show",
    desc: "A creative stage for poetry, storytelling, stand-up comedy, and singing — any artistic performance that moves a crowd.",
    color1: "#ec4899", color2: "#f97316", id: 4,
  },
  {
    emoji: "🎬", title: "Reel & Short Film",
    desc: "Create and present reels or short films that express creativity, storytelling, and digital media skills to a panel of judges.",
    color1: "#a855f7", color2: "#ec4899", id: 5,
  },
  {
    emoji: "🧩", title: "Ciphertext Treasure Hunt",
    desc: "Decode encrypted clues, solve cryptographic puzzles and complete hidden challenges to uncover the final treasure.",
    color1: "#facc15", color2: "#f97316", id: 6,
  },
  {
    emoji: "⚡", title: "Vibe Coding Challenge",
    desc: "Fast-paced competitive programming where participants solve algorithmic challenges and coding problems under time pressure.",
    color1: "#f59e0b", color2: "#f97316", id: 7,
  },
];

const whyJoin = [
  { icon: "🏆", text: "Win prizes & recognition" },
  { icon: "🤝", text: "Network with tech enthusiasts" },
  { icon: "💡", text: "Showcase innovative ideas" },
  { icon: "🎓", text: "Mentorship from industry experts" },
  { icon: "🚀", text: "Compete with talented developers" },
  { icon: "📈", text: "Boost your portfolio & profile" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
};

const About = () => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;600;700&display=swap"
      rel="stylesheet"
    />

    <style>{`
      *, *::before, *::after { box-sizing: border-box; }

      .ab-root {
        position: relative;
        min-height: 100svh;
        background: #050508;
        color: #fff;
        overflow: hidden;
        font-family: 'Rajdhani', sans-serif;
        isolation: isolate;
      }

      /* Noise */
      .ab-root::before {
        content: "";
        position: absolute; inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
        opacity: 0.022; pointer-events: none; z-index: 0;
      }

      /* Scanlines */
      .ab-root::after {
        content: "";
        position: absolute; inset: 0;
        background-image: repeating-linear-gradient(
          to bottom,
          transparent, transparent 3px,
          rgba(255,255,255,0.01) 3px, rgba(255,255,255,0.01) 4px
        );
        pointer-events: none; z-index: 0;
      }

      /* Orbs */
      .ab-orb {
        position: absolute; border-radius: 50%;
        filter: blur(100px); pointer-events: none; z-index: 0;
      }
      .ab-orb1 {
        width: clamp(300px,55vw,700px); height: clamp(300px,55vw,700px);
        background: radial-gradient(circle, #7c3aed, transparent 70%);
        top: -15%; left: -10%; opacity: 0.14;
        animation: oDrift1 20s ease-in-out infinite;
      }
      .ab-orb2 {
        width: clamp(200px,40vw,550px); height: clamp(200px,40vw,550px);
        background: radial-gradient(circle, #be185d, transparent 70%);
        top: 30%; right: -8%; opacity: 0.11;
        animation: oDrift2 25s ease-in-out infinite;
      }
      .ab-orb3 {
        width: clamp(180px,32vw,420px); height: clamp(180px,32vw,420px);
        background: radial-gradient(circle, #0e7490, transparent 70%);
        bottom: -8%; left: 15%; opacity: 0.1;
        animation: oDrift3 18s ease-in-out infinite;
      }

      @keyframes oDrift1 {
        0%,100% { transform: translate(0,0) scale(1); }
        50%      { transform: translate(3%,5%) scale(1.06); }
      }
      @keyframes oDrift2 {
        0%,100% { transform: translate(0,0); }
        50%      { transform: translate(-4%,3%); }
      }
      @keyframes oDrift3 {
        0%,100% { transform: translate(0,0) scale(1); }
        50%      { transform: translate(2%,-4%) scale(1.08); }
      }

      /* Inner */
      .ab-inner {
        position: relative; z-index: 2;
        max-width: 1100px; margin: 0 auto;
        padding: clamp(80px,10vw,120px) clamp(20px,5vw,48px) clamp(60px,8vw,100px);
        display: flex; flex-direction: column;
        gap: clamp(56px, 8vw, 88px);
      }

      /* ── Hero ── */
      .ab-hero { text-align: center; }

      .ab-eyebrow {
        display: inline-flex; align-items: center; gap: 10px;
        font-size: clamp(9px,2vw,11px); font-weight: 700;
        letter-spacing: 0.38em; text-transform: uppercase;
        color: rgba(255,255,255,0.2); margin-bottom: 18px;
      }
      .ab-eyebrow-line { width: 30px; height: 1px; }
      .ab-eyebrow-line.l { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15)); }
      .ab-eyebrow-line.r { background: linear-gradient(90deg, rgba(255,255,255,0.15), transparent); }

      .ab-hero-title {
        font-family: 'Bebas Neue', sans-serif;
        font-size: clamp(3rem,14vw,8rem);
        letter-spacing: 0.05em; line-height: 0.9;
        margin-bottom: 20px;
      }
      .ab-title-tech {
        display: block;
        background: linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.5));
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .ab-title-kruti {
        display: block;
        background: linear-gradient(135deg, #f97316 0%, #ec4899 55%, #a855f7 100%);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .ab-hero-desc {
        font-size: clamp(13px,2.5vw,16px); color: rgba(255,255,255,0.38);
        max-width: 620px; margin: 0 auto; line-height: 1.8; letter-spacing: 0.04em;
      }

      .ab-hero-desc strong {
        color: rgba(255,255,255,0.65); font-weight: 700;
        -webkit-text-fill-color: initial;
      }

      .ab-year-row {
        display: flex; justify-content: center; gap: 20px;
        margin-top: 24px; flex-wrap: wrap;
      }

      .ab-pill {
        display: inline-flex; align-items: center; gap: 8px;
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 100px; padding: 7px 18px;
        font-size: clamp(10px,2vw,12px); font-weight: 700;
        letter-spacing: 0.22em; text-transform: uppercase;
        color: rgba(255,255,255,0.35);
      }
      .ab-pill-dot {
        width: 6px; height: 6px; border-radius: 50%;
        animation: abPulse 2s ease-in-out infinite;
      }
      @keyframes abPulse {
        0%,100%{ opacity:1; transform:scale(1); }
        50%    { opacity:0.4; transform:scale(0.7); }
      }

      /* ── Section label ── */
      .ab-section-label {
        font-size: clamp(9px,1.8vw,10px); font-weight: 700;
        letter-spacing: 0.4em; text-transform: uppercase;
        color: rgba(255,255,255,0.2);
        display: flex; align-items: center; gap: 10px;
        margin-bottom: clamp(24px,4vw,36px);
      }
      .ab-section-label::after {
        content: ""; flex: 1; height: 1px;
        background: linear-gradient(90deg, rgba(255,255,255,0.07), transparent);
      }

      /* ── Events grid ── */
      .ab-events-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
        gap: clamp(14px,3vw,22px);
      }

      .ab-event-card {
        position: relative;
        background: rgba(255,255,255,0.025);
        border: 1px solid rgba(255,255,255,0.07);
        border-radius: 14px;
        padding: clamp(18px,4vw,28px);
        text-decoration: none; color: inherit;
        overflow: hidden;
        transition: transform 0.3s cubic-bezier(.34,1.56,.64,1),
                    border-color 0.3s ease, background 0.3s ease;
        display: block;
        backdrop-filter: blur(10px);
      }

      /* Top border glow */
      .ab-event-card::before {
        content: ""; position: absolute;
        top: 0; left: 0; right: 0; height: 1px;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .ab-event-card:hover {
        transform: translateY(-6px);
        border-color: rgba(255,255,255,0.12);
        background: rgba(255,255,255,0.04);
      }
      .ab-event-card:hover::before { opacity: 1; }

      /* Shimmer */
      .ab-event-card::after {
        content: ""; position: absolute; inset: 0;
        background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.03) 50%, transparent 70%);
        transform: translateX(-100%);
        transition: transform 0.5s ease;
        border-radius: 14px;
      }
      .ab-event-card:hover::after { transform: translateX(100%); }

      .ab-event-emoji {
        width: 44px; height: 44px; border-radius: 12px;
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.07);
        display: flex; align-items: center; justify-content: center;
        font-size: 20px; margin-bottom: 14px;
        transition: transform 0.3s ease;
      }
      .ab-event-card:hover .ab-event-emoji { transform: scale(1.1) rotate(-5deg); }

      .ab-event-title {
        font-size: clamp(14px,2.8vw,17px); font-weight: 700;
        letter-spacing: 0.08em; text-transform: uppercase;
        margin-bottom: 10px;
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .ab-event-desc {
        font-size: clamp(12px,2.2vw,13px);
        color: rgba(255,255,255,0.38); line-height: 1.75;
        letter-spacing: 0.03em;
      }

      .ab-event-cta {
        display: inline-flex; align-items: center; gap: 6px;
        margin-top: 16px; font-size: 10px; font-weight: 700;
        letter-spacing: 0.35em; text-transform: uppercase;
        opacity: 0; transform: translateY(4px);
        transition: opacity 0.25s, transform 0.25s;
      }
      .ab-event-card:hover .ab-event-cta { opacity: 1; transform: translateY(0); }

      /* ── Why Join ── */
      .ab-why-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(220px, 100%), 1fr));
        gap: clamp(12px,3vw,18px);
        margin-top: 0;
      }

      .ab-why-item {
        display: flex; align-items: flex-start; gap: 14px;
        padding: clamp(16px,3.5vw,22px);
        background: rgba(255,255,255,0.025);
        border: 1px solid rgba(255,255,255,0.06);
        border-radius: 12px;
        transition: background 0.25s, border-color 0.25s, transform 0.25s;
      }
      .ab-why-item:hover {
        background: rgba(255,255,255,0.045);
        border-color: rgba(255,255,255,0.12);
        transform: translateY(-3px);
      }

      .ab-why-icon {
        font-size: 22px; flex-shrink: 0; line-height: 1;
        margin-top: 1px;
      }

      .ab-why-text {
        font-size: clamp(13px,2.4vw,15px); font-weight: 600;
        letter-spacing: 0.06em; color: rgba(255,255,255,0.52);
        line-height: 1.5;
      }

      /* ── CTA Banner ── */
      .ab-banner {
        position: relative; border-radius: 18px; overflow: hidden;
        padding: clamp(32px,6vw,56px) clamp(24px,5vw,56px);
        text-align: center;
        background: rgba(255,255,255,0.025);
        border: 1px solid rgba(255,255,255,0.07);
        backdrop-filter: blur(14px);
      }

      .ab-banner-glow {
        position: absolute; inset: 0; pointer-events: none;
        background: radial-gradient(ellipse at 50% 120%, rgba(249,115,22,0.15), transparent 60%);
      }

      .ab-banner-title {
        font-family: 'Bebas Neue', sans-serif;
        font-size: clamp(2rem,8vw,4.5rem);
        letter-spacing: 0.06em; line-height: 0.95;
        background: linear-gradient(135deg, #fff 20%, #f97316 60%, #a855f7 100%);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text; margin-bottom: 14px;
      }

      .ab-banner-sub {
        font-size: clamp(12px,2.4vw,15px); color: rgba(255,255,255,0.35);
        letter-spacing: 0.08em; margin-bottom: 28px;
      }

      .ab-banner-btn {
        display: inline-flex; align-items: center; gap: 10px;
        padding: 13px 34px; border-radius: 100px;
        background: linear-gradient(135deg, #f97316, #a855f7);
        font-family: 'Rajdhani', sans-serif;
        font-size: clamp(12px,2.5vw,14px); font-weight: 700;
        letter-spacing: 0.22em; text-transform: uppercase;
        color: #fff; text-decoration: none;
        box-shadow: 0 4px 24px rgba(249,115,22,0.3);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .ab-banner-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 36px rgba(249,115,22,0.5);
      }

      /* Date badge */
      .ab-banner-date {
        margin-top: 18px; font-size: 11px; letter-spacing: 0.35em;
        text-transform: uppercase; color: rgba(255,255,255,0.18);
      }
    `}</style>

    <div className="ab-root">
      <div className="ab-orb ab-orb1" />
      <div className="ab-orb ab-orb2" />
      <div className="ab-orb ab-orb3" />

      <div className="ab-inner">

        {/* ── Hero ── */}
        <motion.div
          className="ab-hero"
          variants={fadeUp} initial="hidden"
          animate="show" transition={{ duration: 0.7 }}
        >
          <div className="ab-eyebrow">
            <span className="ab-eyebrow-line l" />
            TGPCET · CSE Data Science Dept · Otur
            <span className="ab-eyebrow-line r" />
          </div>

          <h1 className="ab-hero-title">
            <span className="ab-title-tech">TECH</span>
            <span className="ab-title-kruti">KRUTI</span>
          </h1>

          <p className="ab-hero-desc">
            TechKruti is the premier tech fest of TGPCET organized by the{" "}
            <strong>CSE &amp; Data Science Department</strong>. It brings
            together innovators, developers, gamers and tech enthusiasts to
            compete, learn and showcase futuristic ideas.
          </p>

          <div className="ab-year-row">
            <div className="ab-pill">
              <span className="ab-pill-dot" style={{ background: "#f97316", boxShadow: "0 0 8px #f97316" }} />
              March 24–25, 2026
            </div>
            <div className="ab-pill">
              <span className="ab-pill-dot" style={{ background: "#a855f7", boxShadow: "0 0 8px #a855f7" }} />
              TGPCET Campus · Nagpur
            </div>
            <div className="ab-pill">
              <span className="ab-pill-dot" style={{ background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
              National Level
            </div>
          </div>
        </motion.div>

        {/* ── Events ── */}
        <motion.div
          variants={fadeUp} initial="hidden"
          animate="show" transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="ab-section-label">Events at TechKruti</div>
          <div className="ab-events-grid">
            {events.map((ev, i) => (
              <motion.div
                key={ev.id}
                variants={fadeUp} initial="hidden"
                animate="show"
                transition={{ duration: 0.5, delay: 0.18 + i * 0.06 }}
              >
                <Link
                  to={`/event/${ev.id}`}
                  className="ab-event-card"
                  style={{ "--c1": ev.color1, "--c2": ev.color2 }}
                >
                  {/* top glow border */}
                  <span
                    style={{
                      position: "absolute", top: 0, left: 0, right: 0, height: 1,
                      background: `linear-gradient(90deg, transparent, ${ev.color1}88, ${ev.color2}88, transparent)`,
                      opacity: 0, transition: "opacity 0.3s",
                    }}
                    className="ab-event-top-border"
                  />

                  <div className="ab-event-emoji">{ev.emoji}</div>

                  <div
                    className="ab-event-title"
                    style={{ backgroundImage: `linear-gradient(135deg, #fff 20%, ${ev.color1} 70%, ${ev.color2} 100%)` }}
                  >
                    {ev.title}
                  </div>

                  <p className="ab-event-desc">{ev.desc}</p>

                  <span className="ab-event-cta" style={{ color: ev.color1 }}>
                    View Details →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Why Join ── */}
        <motion.div
          variants={fadeUp} initial="hidden"
          animate="show" transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="ab-section-label">Why Join TechKruti?</div>
          <div className="ab-why-grid">
            {whyJoin.map((w, i) => (
              <motion.div
                key={i} className="ab-why-item"
                variants={fadeUp} initial="hidden"
                animate="show"
                transition={{ duration: 0.45, delay: 0.34 + i * 0.06 }}
              >
                <span className="ab-why-icon">{w.icon}</span>
                <span className="ab-why-text">{w.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA Banner ── */}
        <motion.div
          className="ab-banner"
          variants={fadeUp} initial="hidden"
          animate="show" transition={{ duration: 0.7, delay: 0.42 }}
        >
          <div className="ab-banner-glow" />
          <div className="ab-banner-title">Join the Fest</div>
          <p className="ab-banner-sub">
            Be part of the biggest tech event at TGPCET. Register now before seats fill up.
          </p>
          <Link to="/event/1" className="ab-banner-btn">
            Explore Events →
          </Link>
          <p className="ab-banner-date">March 24–25, 2026 · TGPCET Campus</p>
        </motion.div>

      </div>
    </div>
  </>
);

export default About;