import React from "react";
import { motion } from "framer-motion";

const supportTeam = [
  { id: 1, name: "Chhagan Rakhade",  role: "Registration Technical Support", email: "chhaganrakhade7@gmail.com",    phone: "+91 9158396794" },
  { id: 2, name: "Himanshu Dhenge",  role: "Judging & Participation Tech",    email: "himanshudhenge4@gmail.com",    phone: "+91 9322913858" },
  { id: 3, name: "Aditya Korde",     role: "E-Sport Coordinator",             email: "amdk282005@gmail.com",         phone: "+91 8446950836" },
  { id: 4, name: "Priyanshu Patle",  role: "E-Sport Coordinator",             email: "priyanshupatle2@gmail.com",    phone: "+91 7038836841" },
  { id: 5, name: "Ram Dhote",     role: "E-Sport Coordinator",             email: "dhoteram68@gmail.com",         phone: "+91 8208268304" },
  { id: 6, name: "Sarang Kachare",   role: "Registration Technical Support",  email: "sarangkachare111@gmail.com",   phone: "+91 9325489326" },
  { id: 7, name: "Vedant Nanoti",   role: "Registration Technical Support",  email: "vedant.max005@gmail.com",   phone: "+919960116568" },
  { id: 7, name: "Sudhanshu kumar",   role: "Judging & Participation Tech",  email: "Sudhanshukumar0430@gmail.com",   phone: "+91 96999 21161" },
];

/* rotate accent colors per card */
const accentPairs = [
  ["#f97316", "#a855f7"],
  ["#06b6d4", "#6366f1"],
  ["#ec4899", "#f97316"],
  ["#10b981", "#06b6d4"],
  ["#a855f7", "#ec4899"],
  ["#facc15", "#f97316"],
  ["#f97316", "#ec4899"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
};

const Contact = () => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;600;700&display=swap"
      rel="stylesheet"
    />

    <style>{`
      *, *::before, *::after { box-sizing: border-box; }

      .ct-root {
        position: relative;
        min-height: 100svh;
        background: #050508;
        color: #fff;
        overflow: hidden;
        font-family: 'Rajdhani', sans-serif;
        isolation: isolate;
      }

      /* Noise */
      .ct-root::before {
        content: ""; position: absolute; inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
        opacity: 0.022; pointer-events: none; z-index: 0;
      }

      /* Scanlines */
      .ct-root::after {
        content: ""; position: absolute; inset: 0;
        background-image: repeating-linear-gradient(
          to bottom, transparent, transparent 3px,
          rgba(255,255,255,0.01) 3px, rgba(255,255,255,0.01) 4px
        );
        pointer-events: none; z-index: 0;
      }

      /* Orbs */
      .ct-orb {
        position: absolute; border-radius: 50%;
        filter: blur(100px); pointer-events: none; z-index: 0;
      }
      .ct-orb1 {
        width: clamp(300px,55vw,700px); height: clamp(300px,55vw,700px);
        background: radial-gradient(circle, #7c3aed, transparent 70%);
        top: -15%; left: -10%; opacity: 0.13;
        animation: ctDrift1 20s ease-in-out infinite;
      }
      .ct-orb2 {
        width: clamp(200px,40vw,550px); height: clamp(200px,40vw,550px);
        background: radial-gradient(circle, #be185d, transparent 70%);
        bottom: 5%; right: -8%; opacity: 0.11;
        animation: ctDrift2 25s ease-in-out infinite;
      }
      .ct-orb3 {
        width: clamp(150px,28vw,380px); height: clamp(150px,28vw,380px);
        background: radial-gradient(circle, #0e7490, transparent 70%);
        top: 45%; left: 12%; opacity: 0.09;
        animation: ctDrift3 18s ease-in-out infinite;
      }

      @keyframes ctDrift1 {
        0%,100%{ transform:translate(0,0) scale(1); }
        50%    { transform:translate(3%,5%) scale(1.06); }
      }
      @keyframes ctDrift2 {
        0%,100%{ transform:translate(0,0); }
        50%    { transform:translate(-4%,-3%); }
      }
      @keyframes ctDrift3 {
        0%,100%{ transform:translate(0,0) scale(1); }
        50%    { transform:translate(2%,-4%) scale(1.08); }
      }

      /* Inner */
      .ct-inner {
        position: relative; z-index: 2;
        max-width: 1100px; margin: 0 auto;
        padding: clamp(80px,10vw,120px) clamp(20px,5vw,48px) clamp(60px,8vw,100px);
        display: flex; flex-direction: column;
        gap: clamp(52px,7vw,80px);
      }

      /* ── Hero ── */
      .ct-hero { text-align: center; }

      .ct-eyebrow {
        display: inline-flex; align-items: center; gap: 10px;
        font-size: clamp(9px,2vw,11px); font-weight: 700;
        letter-spacing: 0.38em; text-transform: uppercase;
        color: rgba(255,255,255,0.2); margin-bottom: 18px;
      }
      .ct-eline { width: 30px; height: 1px; }
      .ct-eline.l { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15)); }
      .ct-eline.r { background: linear-gradient(90deg, rgba(255,255,255,0.15), transparent); }

      .ct-hero-title {
        font-family: 'Bebas Neue', sans-serif;
        font-size: clamp(3rem,13vw,7.5rem);
        letter-spacing: 0.05em; line-height: 0.9; margin-bottom: 18px;
      }
      .ct-title-contact {
        display: block;
        background: linear-gradient(135deg, #fff 25%, rgba(255,255,255,0.45));
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .ct-title-team {
        display: block;
        background: linear-gradient(135deg, #f97316 0%, #ec4899 55%, #a855f7 100%);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .ct-hero-desc {
        font-size: clamp(13px,2.5vw,15px); color: rgba(255,255,255,0.35);
        max-width: 480px; margin: 0 auto; line-height: 1.8; letter-spacing: 0.04em;
      }

      /* ── Section label ── */
      .ct-section-label {
        font-size: clamp(9px,1.8vw,10px); font-weight: 700;
        letter-spacing: 0.4em; text-transform: uppercase;
        color: rgba(255,255,255,0.2);
        display: flex; align-items: center; gap: 10px;
        margin-bottom: clamp(22px,4vw,34px);
      }
      .ct-section-label::after {
        content: ""; flex: 1; height: 1px;
        background: linear-gradient(90deg, rgba(255,255,255,0.07), transparent);
      }

      /* ── Cards grid ── */
      .ct-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(280px,100%), 1fr));
        gap: clamp(12px,3vw,20px);
      }

      /* ── Person card ── */
      .ct-card {
        position: relative;
        background: rgba(255,255,255,0.025);
        border: 1px solid rgba(255,255,255,0.07);
        border-radius: 14px;
        padding: clamp(20px,4vw,28px);
        overflow: hidden;
        backdrop-filter: blur(12px);
        transition: transform 0.3s cubic-bezier(.34,1.56,.64,1),
                    border-color 0.3s, background 0.3s;
      }

      .ct-card:hover {
        transform: translateY(-6px);
        border-color: rgba(255,255,255,0.13);
        background: rgba(255,255,255,0.04);
      }

      /* Shimmer */
      .ct-card::after {
        content: ""; position: absolute; inset: 0;
        background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.03) 50%, transparent 70%);
        transform: translateX(-100%); transition: transform 0.5s ease;
        border-radius: 14px;
      }
      .ct-card:hover::after { transform: translateX(100%); }

      /* Avatar initials */
      .ct-avatar {
        width: 44px; height: 44px; border-radius: 12px;
        display: flex; align-items: center; justify-content: center;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 18px; letter-spacing: 0.04em;
        color: #fff; flex-shrink: 0; margin-bottom: 14px;
        position: relative; overflow: hidden;
      }

      .ct-card-name {
        font-size: clamp(14px,2.8vw,17px); font-weight: 700;
        letter-spacing: 0.08em; text-transform: uppercase;
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text; margin-bottom: 4px;
      }

      .ct-card-role {
        font-size: clamp(10px,2vw,11px); font-weight: 600;
        letter-spacing: 0.3em; text-transform: uppercase;
        color: rgba(255,255,255,0.22); margin-bottom: 16px;
      }

      .ct-divider {
        width: 100%; height: 1px;
        background: rgba(255,255,255,0.06);
        margin-bottom: 14px;
      }

      .ct-contact-row {
        display: flex; align-items: center; gap: 10px;
        margin-bottom: 10px;
      }

      .ct-contact-icon {
        width: 28px; height: 28px; border-radius: 8px;
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.07);
        display: flex; align-items: center; justify-content: center;
        font-size: 11px; flex-shrink: 0;
        transition: background 0.2s, border-color 0.2s;
      }

      .ct-card:hover .ct-contact-icon {
        background: rgba(255,255,255,0.07);
        border-color: rgba(255,255,255,0.12);
      }

      .ct-contact-link {
        font-size: clamp(11px,2vw,12px); font-weight: 600;
        letter-spacing: 0.04em;
        color: rgba(255,255,255,0.32);
        text-decoration: none; word-break: break-all;
        transition: color 0.2s;
      }
      .ct-contact-link:hover { color: rgba(255,255,255,0.72); }

      /* ── Map ── */
      .ct-map-wrap {
        border-radius: 16px; overflow: hidden;
        border: 1px solid rgba(255,255,255,0.07);
        position: relative;
      }

      .ct-map-wrap::after {
        content: ""; position: absolute; inset: 0;
        box-shadow: inset 0 0 0 1px rgba(249,115,22,0.12);
        border-radius: 16px; pointer-events: none;
      }

      .ct-map-wrap iframe {
        display: block; width: 100%;
        height: clamp(260px, 40vw, 420px);
        filter: invert(90%) hue-rotate(180deg) saturate(0.4) brightness(0.75);
      }
    `}</style>

    <div className="ct-root">
      <div className="ct-orb ct-orb1" />
      <div className="ct-orb ct-orb2" />
      <div className="ct-orb ct-orb3" />

      <div className="ct-inner">

        {/* ── Hero ── */}
        <motion.div
          className="ct-hero"
          variants={fadeUp} initial="hidden"
          animate="show" transition={{ duration: 0.7 }}
        >
          <div className="ct-eyebrow">
            <span className="ct-eline l" />
            TechKruti 2K26
            <span className="ct-eline r" />
          </div>

          <h1 className="ct-hero-title">
            <span className="ct-title-contact">Contact</span>
            <span className="ct-title-team">Our Team</span>
          </h1>

          <p className="ct-hero-desc">
            Get in touch with the TechKruti support team for queries
            about registration, events, or participation.
          </p>
        </motion.div>

        {/* ── Team Cards ── */}
        <div>
          <motion.div
            className="ct-section-label"
            variants={fadeUp} initial="hidden"
            animate="show" transition={{ duration: 0.6, delay: 0.1 }}
          >
            Support Team
          </motion.div>

          <div className="ct-grid">
            {supportTeam.map((person, i) => {
              const [c1, c2] = accentPairs[i % accentPairs.length];
              const initials = person.name.split(" ").map(w => w[0]).join("").slice(0, 2);

              return (
                <motion.div
                  key={person.id}
                  className="ct-card"
                  variants={fadeUp} initial="hidden"
                  animate="show"
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                >
                  {/* Top accent border */}
                  <span style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 1,
                    background: `linear-gradient(90deg, transparent, ${c1}77, ${c2}77, transparent)`,
                    pointerEvents: "none",
                  }} />

                  {/* Avatar */}
                  <div
                    className="ct-avatar"
                    style={{ background: `linear-gradient(135deg, ${c1}33, ${c2}33)`,
                             border: `1px solid ${c1}44` }}
                  >
                    <span style={{
                      background: `linear-gradient(135deg, ${c1}, ${c2})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                      {initials}
                    </span>
                  </div>

                  {/* Name */}
                  <div
                    className="ct-card-name"
                    style={{ backgroundImage: `linear-gradient(135deg, #fff 20%, ${c1} 80%, ${c2} 100%)` }}
                  >
                    {person.name}
                  </div>

                  {/* Role */}
                  <div className="ct-card-role">{person.role}</div>

                  <div className="ct-divider" />

                  {/* Email */}
                  <div className="ct-contact-row">
                    <div className="ct-contact-icon">✉</div>
                    <a href={`mailto:${person.email}`} className="ct-contact-link">
                      {person.email}
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="ct-contact-row">
                    <div className="ct-contact-icon">📞</div>
                    <a href={`tel:${person.phone.replace(/\s/g, "")}`} className="ct-contact-link">
                      {person.phone}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Map ── */}
        <motion.div
          variants={fadeUp} initial="hidden"
          animate="show" transition={{ duration: 0.7, delay: 0.35 }}
        >
          <div className="ct-section-label">Our Location</div>
          <div className="ct-map-wrap">
            <iframe
              title="TGPCET Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3495438371925!2d79.0125!3d20.9607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd495fb10c4e4f3%3A0x77a4d2c0a5a8f6f9!2sTulsiramji%20Gaikwad-Patil%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1712345678901"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </motion.div>

      </div>
    </div>
  </>
);

export default Contact;