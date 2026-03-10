import React from "react";
import { motion } from "framer-motion";

const coordinators = [
  { name: "Chhagan Rakhade",  phone: "+919158396794" },
  { name: "Shubham Kopare",   phone: "+918485029672" },
  { name: "Himanshu Dhenge",  phone: "+919322913858" },
  { name: "Gagan Zade",       phone: "+919689477797" },
  { name: "Sarang Kachare",   phone: "+919325489326" },
  { name: "Vedant Nanoti",    phone: "+919960116568" },
];

const details = [
  { icon: "📅", label: "Date",       value: "24th March, 2026" },
  { icon: "⏰", label: "Time",       value: "9:00 AM – 4:00 PM" },
  { icon: "📍", label: "Venue",      value: "TGPCET Campus" },
  { icon: "💰", label: "Entry Fee",  value: "₹90 per head" },
  { icon: "👥", label: "Team Size",  value: "2 – 4 members" },
  { icon: "🏆", label: "Prize Pool", value: "₹20,000+" },
];

const domains = [
  { icon: "🤖", label: "AI / ML" },
  { icon: "🌐", label: "Web Development" },
  { icon: "📱", label: "App Development" },
  { icon: "🔗", label: "Blockchain" },
  { icon: "📊", label: "Data Science" },
];

const rules = [
  { icon: "🔌", text: "Bring your own laptops and accessories" },
  { icon: "🌐", text: "Internet access will be provided" },
  { icon: "🖥️", text: "Follow ethical coding practices" },
  { icon: "🤝", text: "Respect team collaboration and fair play" },
  { icon: "⚖️", text: "Judging: Innovation, functionality, scalability" },
  { icon: "⏳", text: "Hackathon duration — 8 hours" },
  { icon: "🚀", text: "Problem statements given at start" },
  { icon: "📤", text: "Final submissions before deadline" },
  { icon: "🔍", text: "Judges evaluate creativity and execution" },
  { icon: "🚫", text: "Registration fees are non-refundable" },
];

const accentPairs = [
  ["#f97316","#a855f7"],["#06b6d4","#6366f1"],["#ec4899","#f97316"],
  ["#10b981","#06b6d4"],["#facc15","#f97316"],["#a855f7","#ec4899"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show:   { opacity: 1, y: 0 },
};

const TechverseHackathon = () => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;600;700&display=swap"
      rel="stylesheet"
    />

    <style>{`
      *, *::before, *::after { box-sizing: border-box; }

      .hk-root {
        position: relative;
        min-height: 100svh;
        background: #050508;
        color: #fff;
        overflow: hidden;
        font-family: 'Rajdhani', sans-serif;
        isolation: isolate;
      }

      /* Noise */
      .hk-root::before {
        content: ""; position: absolute; inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
        opacity: 0.022; pointer-events: none; z-index: 0;
      }
      /* Scanlines */
      .hk-root::after {
        content: ""; position: absolute; inset: 0;
        background-image: repeating-linear-gradient(
          to bottom, transparent, transparent 3px,
          rgba(255,255,255,0.01) 3px, rgba(255,255,255,0.01) 4px
        );
        pointer-events: none; z-index: 0;
      }

      /* Orbs */
      .hk-orb {
        position: absolute; border-radius: 50%;
        filter: blur(100px); pointer-events: none; z-index: 0;
      }
      .hk-orb1 {
        width: clamp(300px,55vw,700px); height: clamp(300px,55vw,700px);
        background: radial-gradient(circle, #7c3aed, transparent 70%);
        top: -12%; left: -8%; opacity: 0.14;
        animation: hkDrift1 20s ease-in-out infinite;
      }
      .hk-orb2 {
        width: clamp(200px,40vw,560px); height: clamp(200px,40vw,560px);
        background: radial-gradient(circle, #f97316, transparent 70%);
        top: 20%; right: -8%; opacity: 0.09;
        animation: hkDrift2 26s ease-in-out infinite;
      }
      .hk-orb3 {
        width: clamp(180px,32vw,420px); height: clamp(180px,32vw,420px);
        background: radial-gradient(circle, #be185d, transparent 70%);
        bottom: -8%; left: 14%; opacity: 0.10;
        animation: hkDrift3 18s ease-in-out infinite;
      }

      @keyframes hkDrift1 {
        0%,100%{ transform:translate(0,0) scale(1); }
        50%    { transform:translate(3%,5%) scale(1.06); }
      }
      @keyframes hkDrift2 {
        0%,100%{ transform:translate(0,0); }
        50%    { transform:translate(-4%,3%); }
      }
      @keyframes hkDrift3 {
        0%,100%{ transform:translate(0,0) scale(1); }
        50%    { transform:translate(2%,-4%) scale(1.08); }
      }

      /* Inner */
      .hk-inner {
        position: relative; z-index: 2;
        max-width: 960px; margin: 0 auto;
        padding: clamp(80px,10vw,120px) clamp(20px,5vw,48px) clamp(60px,8vw,100px);
        display: flex; flex-direction: column;
        gap: clamp(40px,6vw,64px);
      }

      /* ── Hero ── */
      .hk-hero { text-align: center; }

      .hk-eyebrow {
        display: inline-flex; align-items: center; gap: 10px;
        font-size: clamp(9px,2vw,11px); font-weight: 700;
        letter-spacing: 0.38em; text-transform: uppercase;
        color: rgba(255,255,255,0.2); margin-bottom: 18px;
      }
      .hk-eline { width: 30px; height: 1px; }
      .hk-eline.l { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15)); }
      .hk-eline.r { background: linear-gradient(90deg, rgba(255,255,255,0.15), transparent); }

      .hk-title {
        font-family: 'Bebas Neue', sans-serif;
        font-size: clamp(2.6rem,12vw,7rem);
        letter-spacing: 0.05em; line-height: 0.9; margin-bottom: 18px;
      }
      .hk-title-kruti {
        display: block;
        background: linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.45));
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .hk-title-hack {
        display: block;
        background: linear-gradient(135deg, #f97316 0%, #ec4899 55%, #a855f7 100%);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .hk-assoc {
        display: inline-flex; flex-direction: column;
        align-items: center; gap: 10px;
        margin-bottom: 18px;
      }
      .hk-assoc-label {
        font-size: clamp(9px,2vw,11px); font-weight: 700;
        letter-spacing: 0.35em; text-transform: uppercase;
        color: rgba(255,255,255,0.2);
      }
      .hk-assoc-logo {
        height: clamp(48px,10vw,72px);
        width: auto; object-fit: contain;
        filter: brightness(0.85) saturate(0.7);
        transition: filter 0.3s;
      }
      .hk-assoc-logo:hover { filter: brightness(1.05) saturate(1); }

      .hk-tagline {
        font-size: clamp(13px,2.6vw,16px);
        color: rgba(255,255,255,0.38);
        max-width: 560px; margin: 0 auto;
        line-height: 1.8; letter-spacing: 0.04em;
      }
      .hk-tagline strong { color: rgba(255,255,255,0.65); font-weight: 700; }

      /* Pill row */
      .hk-pills {
        display: flex; flex-wrap: wrap;
        justify-content: center; gap: 10px;
        margin-top: 22px;
      }
      .hk-pill {
        display: inline-flex; align-items: center; gap: 7px;
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 100px; padding: 6px 16px;
        font-size: clamp(10px,2vw,12px); font-weight: 700;
        letter-spacing: 0.2em; text-transform: uppercase;
        color: rgba(255,255,255,0.35);
      }
      .hk-pill-dot {
        width: 6px; height: 6px; border-radius: 50%;
        animation: hkPulse 2s ease-in-out infinite;
      }
      @keyframes hkPulse {
        0%,100%{ opacity:1; transform:scale(1); }
        50%    { opacity:0.4; transform:scale(0.7); }
      }

      /* ── Register CTA ── */
      .hk-cta-wrap { text-align: center; }
      .hk-cta-btn {
        display: inline-flex; align-items: center; gap: 10px;
        padding: 14px 40px; border-radius: 100px;
        font-family: 'Rajdhani', sans-serif;
        font-size: clamp(13px,2.5vw,15px); font-weight: 700;
        letter-spacing: 0.22em; text-transform: uppercase;
        color: #fff; text-decoration: none;
        background: linear-gradient(135deg, #f97316, #a855f7);
        box-shadow: 0 4px 28px rgba(249,115,22,0.35);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .hk-cta-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 40px rgba(249,115,22,0.55);
      }

      /* ── Section label ── */
      .hk-label {
        font-size: clamp(9px,1.8vw,10px); font-weight: 700;
        letter-spacing: 0.4em; text-transform: uppercase;
        color: rgba(255,255,255,0.2);
        display: flex; align-items: center; gap: 10px;
        margin-bottom: clamp(20px,4vw,30px);
      }
      .hk-label::after {
        content: ""; flex: 1; height: 1px;
        background: linear-gradient(90deg, rgba(255,255,255,0.07), transparent);
      }

      /* ── Card ── */
      .hk-card {
        position: relative;
        background: rgba(255,255,255,0.025);
        border: 1px solid rgba(255,255,255,0.07);
        border-radius: 16px;
        padding: clamp(22px,5vw,36px);
        backdrop-filter: blur(12px);
        overflow: hidden;
      }

      /* Top accent */
      .hk-card-top {
        position: absolute; top: 0; left: 0; right: 0; height: 1px;
        pointer-events: none;
      }

      /* ── Event details grid ── */
      .hk-details-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(220px,100%), 1fr));
        gap: clamp(10px,2.5vw,16px);
      }

      .hk-detail-item {
        display: flex; align-items: flex-start; gap: 12px;
        padding: clamp(14px,3vw,18px);
        background: rgba(255,255,255,0.03);
        border: 1px solid rgba(255,255,255,0.06);
        border-radius: 10px;
        transition: background 0.25s, border-color 0.25s, transform 0.25s;
      }
      .hk-detail-item:hover {
        background: rgba(255,255,255,0.05);
        border-color: rgba(255,255,255,0.11);
        transform: translateY(-2px);
      }
      .hk-detail-icon {
        font-size: 20px; flex-shrink: 0; margin-top: 1px;
      }
      .hk-detail-right { display: flex; flex-direction: column; gap: 2px; }
      .hk-detail-label {
        font-size: 10px; font-weight: 700; letter-spacing: 0.32em;
        text-transform: uppercase; color: rgba(255,255,255,0.2);
      }
      .hk-detail-value {
        font-size: clamp(13px,2.6vw,15px); font-weight: 700;
        letter-spacing: 0.06em; color: rgba(255,255,255,0.7);
      }

      /* ── Domains ── */
      .hk-domains-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(160px,100%), 1fr));
        gap: clamp(10px,2.5vw,14px);
      }
      .hk-domain-item {
        display: flex; align-items: center; gap: 10px;
        padding: clamp(12px,2.5vw,16px);
        background: rgba(255,255,255,0.03);
        border: 1px solid rgba(255,255,255,0.06);
        border-radius: 10px;
        font-size: clamp(12px,2.4vw,14px); font-weight: 600;
        letter-spacing: 0.07em; color: rgba(255,255,255,0.52);
        transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.25s;
      }
      .hk-domain-item:hover {
        background: rgba(255,255,255,0.05);
        border-color: rgba(255,255,255,0.12);
        color: rgba(255,255,255,0.82);
        transform: translateY(-2px);
      }
      .hk-domain-emoji { font-size: 18px; flex-shrink: 0; }

      /* ── Rules ── */
      .hk-rules-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(280px,100%), 1fr));
        gap: clamp(8px,2vw,12px);
      }
      .hk-rule-item {
        display: flex; align-items: flex-start; gap: 10px;
        padding: clamp(10px,2.5vw,14px);
        background: rgba(255,255,255,0.025);
        border: 1px solid rgba(255,255,255,0.05);
        border-radius: 10px;
        font-size: clamp(12px,2.2vw,13px); font-weight: 600;
        letter-spacing: 0.04em; color: rgba(255,255,255,0.42);
        line-height: 1.6;
        transition: background 0.2s, color 0.2s;
      }
      .hk-rule-item:hover {
        background: rgba(255,255,255,0.04);
        color: rgba(255,255,255,0.68);
      }
      .hk-rule-emoji { font-size: 15px; flex-shrink: 0; margin-top: 1px; }

      /* ── Coordinators ── */
      .hk-coords-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(220px,100%), 1fr));
        gap: clamp(10px,2.5vw,16px);
      }
      .hk-coord-card {
        position: relative;
        padding: clamp(16px,3.5vw,22px);
        background: rgba(255,255,255,0.025);
        border: 1px solid rgba(255,255,255,0.06);
        border-radius: 12px;
        overflow: hidden;
        transition: background 0.25s, border-color 0.25s, transform 0.25s;
      }
      .hk-coord-card::after {
        content: ""; position: absolute; inset: 0;
        background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.025) 50%, transparent 70%);
        transform: translateX(-100%); transition: transform 0.5s ease;
        border-radius: 12px;
      }
      .hk-coord-card:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.12); }
      .hk-coord-card:hover::after { transform: translateX(100%); }

      .hk-coord-avatar {
        width: 40px; height: 40px; border-radius: 10px;
        display: flex; align-items: center; justify-content: center;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 16px; margin-bottom: 12px; flex-shrink: 0;
      }
      .hk-coord-name {
        font-size: clamp(13px,2.6vw,15px); font-weight: 700;
        letter-spacing: 0.08em; text-transform: uppercase;
        margin-bottom: 6px;
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .hk-coord-phone {
        font-size: clamp(11px,2vw,13px); font-weight: 600;
        letter-spacing: 0.05em; color: rgba(255,255,255,0.3);
        text-decoration: none; transition: color 0.2s;
      }
      .hk-coord-phone:hover { color: rgba(255,255,255,0.7); }
    `}</style>

    <div className="hk-root">
      <div className="hk-orb hk-orb1" />
      <div className="hk-orb hk-orb2" />
      <div className="hk-orb hk-orb3" />

      <div className="hk-inner">

        {/* ── Hero ── */}
        <motion.div className="hk-hero"
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ duration: 0.7 }}
        >
          <div className="hk-eyebrow">
            <span className="hk-eline l" />
            TechKruti 2K26 · TGPCET
            <span className="hk-eline r" />
          </div>

          <h1 className="hk-title">
            <span className="hk-title-kruti">KrutiVerse</span>
            <span className="hk-title-hack">Hackathon</span>
          </h1>

          {/* Association */}
          <div className="hk-assoc">
            <span className="hk-assoc-label">In Association With</span>
            <img src="Dev.jpg" alt="DevCult Logo" className="hk-assoc-logo" />
          </div>

          <p className="hk-tagline">
            <strong>Where Innovation Meets Execution!</strong><br />
            A high-energy <strong>8-hour coding marathon</strong> where top minds
            solve <strong>real-world challenges</strong> and compete with elite developers.
          </p>

          <div className="hk-pills">
            <div className="hk-pill">
              <span className="hk-pill-dot" style={{ background:"#f97316", boxShadow:"0 0 8px #f97316" }} />
              24 March 2026
            </div>
            <div className="hk-pill">
              <span className="hk-pill-dot" style={{ background:"#10b981", boxShadow:"0 0 8px #10b981" }} />
              ₹20,000+ Prize Pool
            </div>
            <div className="hk-pill">
              <span className="hk-pill-dot" style={{ background:"#a855f7", boxShadow:"0 0 8px #a855f7" }} />
              8 Hours
            </div>
          </div>
        </motion.div>

        {/* ── Register CTA ── */}
        <motion.div className="hk-cta-wrap"
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <a
            href="https://forms.gle/XghiHw85MWDSuBNJ6"
            target="_blank" rel="noopener noreferrer"
            className="hk-cta-btn"
          >
            Register Now →
          </a>
        </motion.div>

        {/* ── Event Details ── */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="hk-label">Event Details</div>
          <div className="hk-details-grid">
            {details.map((d, i) => (
              <div key={i} className="hk-detail-item">
                <span className="hk-detail-icon">{d.icon}</span>
                <div className="hk-detail-right">
                  <span className="hk-detail-label">{d.label}</span>
                  <span
                    className="hk-detail-value"
                    style={{
                      background: `linear-gradient(135deg, ${accentPairs[i%accentPairs.length][0]}, ${accentPairs[i%accentPairs.length][1]})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {d.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Domains ── */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hk-label">Hackathon Domains</div>
          <div className="hk-domains-grid">
            {domains.map((d, i) => {
              const [c1, c2] = accentPairs[i % accentPairs.length];
              return (
                <div key={i} className="hk-domain-item">
                  <span className="hk-domain-emoji">{d.icon}</span>
                  <span
                    style={{
                      background: `linear-gradient(135deg, ${c1}, ${c2})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontWeight: 700,
                    }}
                  >
                    {d.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Rules ── */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className="hk-label">Rules & Guidelines</div>
          <div className="hk-rules-grid">
            {rules.map((r, i) => (
              <div key={i} className="hk-rule-item">
                <span className="hk-rule-emoji">{r.icon}</span>
                {r.text}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Coordinators ── */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="hk-label">Contact Coordinators</div>
          <div className="hk-coords-grid">
            {coordinators.map((c, i) => {
              const [c1, c2] = accentPairs[i % accentPairs.length];
              const initials = c.name.split(" ").map(w => w[0]).join("").slice(0,2);
              return (
                <div key={i} className="hk-coord-card">
                  {/* top accent */}
                  <span style={{
                    position:"absolute", top:0, left:0, right:0, height:1,
                    background:`linear-gradient(90deg, transparent, ${c1}77, ${c2}77, transparent)`,
                    pointerEvents:"none",
                  }}/>

                  <div
                    className="hk-coord-avatar"
                    style={{
                      background:`linear-gradient(135deg, ${c1}33, ${c2}33)`,
                      border:`1px solid ${c1}44`,
                    }}
                  >
                    <span style={{
                      background:`linear-gradient(135deg, ${c1}, ${c2})`,
                      WebkitBackgroundClip:"text",
                      WebkitTextFillColor:"transparent",
                      backgroundClip:"text",
                    }}>{initials}</span>
                  </div>

                  <div
                    className="hk-coord-name"
                    style={{ backgroundImage:`linear-gradient(135deg, #fff 20%, ${c1} 80%, ${c2} 100%)` }}
                  >
                    {c.name}
                  </div>

                  <a href={`tel:${c.phone}`} className="hk-coord-phone">
                    {c.phone}
                  </a>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  </>
);

export default TechverseHackathon;