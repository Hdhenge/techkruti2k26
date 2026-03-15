import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const coordinators = [
  { name: "Chhagan Rakhade",  phone: "+919158396794" },
  { name: "Himanshu Dhenge",  phone: "+919322913858" },
  { name: "Ram Dhote",        phone: "+918208268304" },
  { name: "Aditya Korde",     phone: "+918446950836" },
  { name: "Sarang Kachare",   phone: "+919325489326" },
  { name: "Vedant Nanoti",    phone: "+919960116568" },
];

const details = [
  { icon: "📅", label: "Date",       value: "24th March, 2026" },
  { icon: "⏰", label: "Time",       value: "9:00 AM – 7:00 PM" },
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

// ── Timeline ──────────────────────────────────────────────
const timeline = [
  { time: "9:00 AM",        tag: "Round 1 · Start",        tagColor: "#f97316", label: "Problem Statement Revealed",                  desc: "All teams receive the same problem statement simultaneously. Clock starts now." },
  { time: "9 AM – 1 PM",   tag: "Round 1 · Build (4 hrs)", tagColor: "#f97316", label: "Prototype Build + PPT Preparation",           desc: "Build a working prototype AND prepare a PPT — both within these 4 hours. No pre-made slides allowed." },
  { time: "11:00 AM",       tag: "Bonus Push +5 pts",       tagColor: "#22c55e", label: "GitHub Checkpoint 1",                         desc: "Teams that push meaningful code to GitHub by 11 AM earn +5 bonus points." },
  { time: "1:00 PM",        tag: "Round 1 · Evaluation",    tagColor: "#ec4899", label: "Combined PPT + Prototype Evaluation Begins",  desc: "Each team presents their PPT and live prototype together — both evaluated simultaneously by judges. 5 min pitch + 2 min Q&A. Judges score PPT clarity, prototype demo, and tech depth in one single session." },
  { time: "After 1 PM",     tag: "Evaluation Window",       tagColor: "#ec4899", label: "Judges Deliberate · Teams Keep Building",     desc: "All teams must continue building until the Round 1 result is officially announced. Use this time to extend features and improve your prototype — it gives you a head start in Round 2." },
  { time: "~2:00 PM",       tag: "Round 2 · Start",         tagColor: "#a855f7", label: "Selected Teams Announced → Round 2 Begins",   desc: "Top teams announced. Non-qualifying teams dismissed. Selected teams now build the complete final model." },
  { time: "2 PM – 6:30 PM", tag: "Round 2 · Build",         tagColor: "#a855f7", label: "Full Model Development Sprint",               desc: "Build complete, production-ready solution. Every 2 hours — GitHub push checkpoint for +5 bonus points." },
  { time: "6:30 PM",        tag: "Code Freeze",              tagColor: "#ec4899", label: "Final Push — No More Commits",                desc: "All code pushed to GitHub. README finalized. No commits accepted after 5:30 PM." },
  { time: "6:30 – 7 PM",   tag: "Final Presentations",     tagColor: "#f7c948", label: "Selected Teams Final Presentations",           desc: "Each selected team: 5 min demo + 3 min Q&A. Live working demo required." },
  { time: "7:30 PM",        tag: "Winner",                   tagColor: "#f7c948", label: "Winner Announcement + Certificates",          desc: "Top 3 teams announced. Certificates for all. Prizes as announced by organizing committee." },
];

// ── Rules split into Round 1 & Round 2 ───────────────────
const rulesR1 = [
  { icon: "💻", text: "Bring your own laptops and chargers — power strips will be provided." },
  { icon: "🌐", text: "Internet access will be provided on campus Wi-Fi." },
  { icon: "🚀", text: "Problem statement revealed at 9 AM sharp — no early access to any team." },
  { icon: "⚙️", text: "Build a working prototype AND prepare a PPT within the same 4-hour window." },
  { icon: "📊", text: "PPT must be made on the day — 10 to 12 slides, Tech Stack slide is mandatory." },
  { icon: "🎤", text: "PPT + Prototype evaluated together in one session — 5 min pitch (with live demo) + 2 min Q&A. Both judged simultaneously, not separately." },
  { icon: "🐙", text: "Public GitHub repo must be created within 30 min of 9 AM. Push code regularly." },
  { icon: "⏳", text: "All teams must keep building until Round 1 results are officially announced — do not stop working." },
];

const rulesR2 = [
  { icon: "🔥", text: "Selected teams build a complete, polished final model — not just a prototype." },
  { icon: "🌿", text: "Continue from Round 1 codebase. Extend and complete the same GitHub repo." },
  { icon: "📤", text: "GitHub push every 2 hours earns +5 bonus points per checkpoint (max +20 pts)." },
  { icon: "🔒", text: "Code freeze at 5:30 PM — no commits accepted after this. Repo must stay public." },
  { icon: "👥", text: "Every team member must have at least 2 meaningful commits." },
  { icon: "🔍", text: "Judges review GitHub Contributors tab — zero-commit members may lose prize eligibility." },
  { icon: "🤝", text: "External person writing code for your team during the event = disqualification." },
  { icon: "⚖️", text: "Judged on: Problem Relevance · Technical Execution · Innovation · Collaboration · Demo." },
];

// ── AI Policy ─────────────────────────────────────────────
const aiAllowed = [
  { icon: "✅", text: "GitHub Copilot, ChatGPT, Claude, Gemini, Cursor — all AI coding tools fully allowed." },
  { icon: "✅", text: "AI-generated code counts as your work — as long as you can explain it to judges in Q&A." },
  { icon: "✅", text: "AI design tools, image generators, and AI-powered APIs integrated in your project are permitted." },
  { icon: "✅", text: "Open-source libraries and public APIs are allowed — must be credited in README." },
];

// ── Disqualification ──────────────────────────────────────
const dqList = [
  "Submitting a pre-built project that existed before the event (9 AM start = fresh build).",
  "Copying another team's codebase — detected via GitHub repo comparison.",
  "GitHub commit timestamps outside the 9 AM – 5:30 PM event window.",
  "Force-pushing to rewrite or tamper with commit history.",
  "External non-registered person writing or pushing code for the team.",
  "No working demo at final presentation.",
  "Repo made private or deleted before judge review is complete.",
  "Duplicate team member registration across multiple teams.",
  "Offensive, harmful, or inappropriate content anywhere in the project.",
];

// ── Judging Criteria ──────────────────────────────────────
const criteriaR1 = [
  { pts: 30, label: "Innovation & Problem Fit",       desc: "How well the idea addresses the given problem statement",                           color: "#f97316" },
  { pts: 25, label: "Prototype Quality",              desc: "Working features, functional demo — evaluated live during the same session as PPT", color: "#a855f7" },
  { pts: 25, label: "Technical Depth (PPT + Demo)",   desc: "Tech stack choice, architecture clarity, code quality — PPT & prototype judged together", color: "#ec4899" },
  { pts: 20, label: "Presentation & Q&A",             desc: "PPT clarity, communication, live demo flow, Q&A handling, time adherence",         color: "#f7c948" },
];

const criteriaR2 = [
  { pts: 30, label: "Problem Relevance",   desc: "How completely the model solves the problem",    color: "#f97316" },
  { pts: 25, label: "Technical Execution", desc: "Code quality, feature completeness, robustness", color: "#a855f7" },
  { pts: 20, label: "Innovation",          desc: "Unique approach, creative feature choices",       color: "#ec4899" },
  { pts: 15, label: "Collaboration",       desc: "Commit distribution across all team members",     color: "#10b981" },
  { pts: 10, label: "Final Demo",          desc: "5-min demo + 3-min Q&A, live working build",     color: "#f7c948" },
];

const accentPairs = [
  ["#f97316","#a855f7"],["#06b6d4","#6366f1"],["#ec4899","#f97316"],
  ["#10b981","#06b6d4"],["#facc15","#f97316"],["#a855f7","#ec4899"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show:   { opacity: 1, y: 0 },
};

// ── Shared styled pill for section tags ───────────────────
const Tag = ({ color, children }) => (
  <span style={{
    display: "inline-block",
    padding: "2px 10px",
    borderRadius: 100,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    background: `${color}18`,
    border: `1px solid ${color}44`,
    color,
    marginBottom: 4,
  }}>{children}</span>
);

// ── Section Label ─────────────────────────────────────────
const SLabel = ({ children }) => (
  <div style={{
    fontSize: 10, fontWeight: 700, letterSpacing: "0.4em",
    textTransform: "uppercase", color: "rgba(255,255,255,0.2)",
    display: "flex", alignItems: "center", gap: 10,
    marginBottom: "clamp(20px,4vw,30px)",
  }}>
    {children}
    <span style={{ flex: 1, height: 1, background: "linear-gradient(90deg,rgba(255,255,255,0.07),transparent)" }} />
  </div>
);

// ── Tabbed Rules component ────────────────────────────────
const RulesTabs = () => {
  const [tab, setTab] = useState("r1");
  const rules = tab === "r1" ? rulesR1 : rulesR2;
  const active = tab === "r1"
    ? { from: "#f97316", to: "#ec4899" }
    : { from: "#a855f7", to: "#6366f1" };

  return (
    <div>
      {/* Tabs */}
      <div style={{ display: "flex", gap: 0, marginBottom: 20, borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", width: "fit-content" }}>
        {[
          { id: "r1", label: "Round 1 Rules" },
          { id: "r2", label: "Round 2 Rules" },
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              padding: "9px 22px",
              background: tab === t.id
                ? `linear-gradient(135deg,${t.id==="r1"?"#f97316":"#a855f7"},${t.id==="r1"?"#ec4899":"#6366f1"})`
                : "rgba(255,255,255,0.03)",
              border: "none",
              color: tab === t.id ? "#fff" : "rgba(255,255,255,0.3)",
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.1em",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >{t.label}</button>
        ))}
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(min(280px,100%),1fr))",
        gap: "clamp(8px,2vw,12px)",
      }}>
        {rules.map((r, i) => (
          <motion.div
            key={tab + i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="hk-rule-item"
          >
            <span className="hk-rule-emoji">{r.icon}</span>
            {r.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ── Judging Criteria component ────────────────────────────
const JudgingTabs = () => {
  const [tab, setTab] = useState("r1");
  const criteria = tab === "r1" ? criteriaR1 : criteriaR2;

  return (
    <div>
      <div style={{ display: "flex", gap: 0, marginBottom: 20, borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", width: "fit-content" }}>
        {[{ id:"r1", label:"Round 1" },{ id:"r2", label:"Round 2 + Bonus" }].map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              padding: "9px 22px",
              background: tab === t.id
                ? `linear-gradient(135deg,${t.id==="r1"?"#f97316":"#a855f7"},${t.id==="r1"?"#ec4899":"#6366f1"})`
                : "rgba(255,255,255,0.03)",
              border: "none",
              color: tab === t.id ? "#fff" : "rgba(255,255,255,0.3)",
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.1em",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >{t.label}</button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(200px,100%),1fr))", gap: 10 }}>
        {criteria.map((c, i) => (
          <motion.div
            key={tab + i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${c.color}33`,
              borderRadius: 10,
              padding: "16px",
            }}
          >
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 34,
              lineHeight: 1,
              color: c.color,
              marginBottom: 4,
            }}>{c.pts}</div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.4px", color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>{c.label}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", lineHeight: 1.5 }}>{c.desc}</div>
          </motion.div>
        ))}
      </div>

      {tab === "r2" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            marginTop: 12,
            padding: "12px 16px",
            background: "rgba(34,197,94,0.06)",
            border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: 10,
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          <span style={{ color: "#22c55e", fontWeight: 700 }}>+ Up to 20 Bonus Points</span> from GitHub push checkpoints · +5 per checkpoint · Max 4 checkpoints across both rounds
        </motion.div>
      )}

      {tab === "r1" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            marginTop: 12,
            padding: "12px 16px",
            background: "rgba(247,201,72,0.06)",
            border: "1px solid rgba(247,201,72,0.2)",
            borderRadius: 10,
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          <span style={{ color: "#f7c948", fontWeight: 700 }}>Top teams advance to Round 2.</span> Tie-breaker: Innovation score → Prototype Quality score.
        </motion.div>
      )}
    </div>
  );
};

// ── Main Component ─────────────────────────────────────────
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

      .hk-root::before {
        content: ""; position: absolute; inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
        opacity: 0.022; pointer-events: none; z-index: 0;
      }
      .hk-root::after {
        content: ""; position: absolute; inset: 0;
        background-image: repeating-linear-gradient(
          to bottom, transparent, transparent 3px,
          rgba(255,255,255,0.01) 3px, rgba(255,255,255,0.01) 4px
        );
        pointer-events: none; z-index: 0;
      }

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

      @keyframes hkDrift1 { 0%,100%{transform:translate(0,0) scale(1);} 50%{transform:translate(3%,5%) scale(1.06);} }
      @keyframes hkDrift2 { 0%,100%{transform:translate(0,0);} 50%{transform:translate(-4%,3%);} }
      @keyframes hkDrift3 { 0%,100%{transform:translate(0,0) scale(1);} 50%{transform:translate(2%,-4%) scale(1.08);} }

      .hk-inner {
        position: relative; z-index: 2;
        max-width: 960px; margin: 0 auto;
        padding: clamp(80px,10vw,120px) clamp(20px,5vw,48px) clamp(60px,8vw,100px);
        display: flex; flex-direction: column;
        gap: clamp(40px,6vw,64px);
      }

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
        -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      }
      .hk-title-hack {
        display: block;
        background: linear-gradient(135deg, #f97316 0%, #ec4899 55%, #a855f7 100%);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      }

      .hk-tagline {
        font-size: clamp(13px,2.6vw,16px);
        color: rgba(255,255,255,0.38);
        max-width: 560px; margin: 0 auto;
        line-height: 1.8; letter-spacing: 0.04em;
      }
      .hk-tagline strong { color: rgba(255,255,255,0.65); font-weight: 700; }

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
      @keyframes hkPulse { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:0.4;transform:scale(0.7);} }

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
      .hk-cta-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 40px rgba(249,115,22,0.55); }

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
      .hk-detail-item:hover { background:rgba(255,255,255,0.05); border-color:rgba(255,255,255,0.11); transform:translateY(-2px); }
      .hk-detail-icon { font-size: 20px; flex-shrink: 0; margin-top: 1px; }
      .hk-detail-right { display: flex; flex-direction: column; gap: 2px; }
      .hk-detail-label { font-size: 10px; font-weight: 700; letter-spacing: 0.32em; text-transform: uppercase; color: rgba(255,255,255,0.2); }
      .hk-detail-value { font-size: clamp(13px,2.6vw,15px); font-weight: 700; letter-spacing: 0.06em; color: rgba(255,255,255,0.7); }

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
      .hk-domain-item:hover { background:rgba(255,255,255,0.05); border-color:rgba(255,255,255,0.12); color:rgba(255,255,255,0.82); transform:translateY(-2px); }
      .hk-domain-emoji { font-size: 18px; flex-shrink: 0; }

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
      .hk-rule-item:hover { background:rgba(255,255,255,0.04); color:rgba(255,255,255,0.68); }
      .hk-rule-emoji { font-size: 15px; flex-shrink: 0; margin-top: 1px; }

      /* Timeline */
      .hk-tl { display: flex; flex-direction: column; }
      .hk-tl-row { display: flex; gap: 16px; }
      .hk-tl-left { display: flex; flex-direction: column; align-items: center; width: 20px; flex-shrink: 0; }
      .hk-tl-dot { width: 12px; height: 12px; border-radius: 50%; flex-shrink: 0; margin-top: 4px; border: 2px solid #050508; }
      .hk-tl-line { flex: 1; width: 1.5px; background: rgba(255,255,255,0.08); }
      .hk-tl-content { padding-bottom: 22px; flex: 1; }
      .hk-tl-row:last-child .hk-tl-content { padding-bottom: 0; }
      .hk-tl-row:last-child .hk-tl-line { display: none; }
      .hk-tl-time { font-family: 'Bebas Neue', sans-serif; font-size: 15px; letter-spacing: 1.5px; line-height: 1; margin-bottom: 2px; }
      .hk-tl-head { font-size: 15px; font-weight: 700; color: rgba(255,255,255,0.75); margin-bottom: 3px; }
      .hk-tl-desc { font-size: 13px; color: rgba(255,255,255,0.3); line-height: 1.6; }

      /* DQ list */
      .hk-dq-list { list-style: none; padding: 0; margin: 0; }
      .hk-dq-list li {
        display: flex; gap: 10px;
        padding: 10px 0;
        border-bottom: 1px solid rgba(255,255,255,0.04);
        font-size: 13.5px; color: rgba(255,255,255,0.4);
        line-height: 1.55;
      }
      .hk-dq-list li:last-child { border-bottom: none; }
      .hk-dq-x { color: #e84040; font-weight: 700; font-size: 15px; flex-shrink: 0; }

      /* AI allowed */
      .hk-ai-list { list-style: none; padding: 0; margin: 0; }
      .hk-ai-list li {
        display: flex; gap: 10px;
        padding: 10px 0;
        border-bottom: 1px solid rgba(255,255,255,0.04);
        font-size: 13.5px; color: rgba(255,255,255,0.4);
        line-height: 1.55;
      }
      .hk-ai-list li:last-child { border-bottom: none; }
      .hk-ai-ck { color: #22c55e; font-weight: 700; font-size: 15px; flex-shrink: 0; }

      /* Coordinators */
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
        -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
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
        <motion.div className="hk-hero" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.7 }}>
          <div className="hk-eyebrow">
            <span className="hk-eline l" />
            TechKruti 2K26 · TGPCET
            <span className="hk-eline r" />
          </div>
          <h1 className="hk-title">
            <span className="hk-title-kruti">KrutiVerse</span>
            <span className="hk-title-hack">Hackathon</span>
          </h1>
          <p className="hk-tagline">
            <strong>Where Innovation Meets Execution!</strong><br />
            A high-energy <strong>10-hour coding marathon</strong> where top minds
            solve <strong>real-world challenges</strong> across 2 intense rounds.
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
              10 Hours · 2 Rounds
            </div>
          </div>
        </motion.div>

        {/* ── Register CTA ── */}
        <motion.div className="hk-cta-wrap" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6, delay: 0.1 }}>
          <a href="https://forms.gle/XghiHw85MWDSuBNJ6" target="_blank" rel="noopener noreferrer" className="hk-cta-btn">
            Register Now →
          </a>
        </motion.div>

        {/* ── Event Details ── */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6, delay: 0.15 }}>
          <div className="hk-label">Event Details</div>
          <div className="hk-details-grid">
            {details.map((d, i) => (
              <div key={i} className="hk-detail-item">
                <span className="hk-detail-icon">{d.icon}</span>
                <div className="hk-detail-right">
                  <span className="hk-detail-label">{d.label}</span>
                  <span className="hk-detail-value" style={{
                    background: `linear-gradient(135deg, ${accentPairs[i%accentPairs.length][0]}, ${accentPairs[i%accentPairs.length][1]})`,
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
                  }}>{d.value}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Timeline ── */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6, delay: 0.18 }}>
          <div className="hk-label">10-Hour Timeline · 9 AM – 7 PM</div>
          <div style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 16,
            padding: "clamp(20px,4vw,32px)",
          }}>
            <div className="hk-tl">
              {timeline.map((t, i) => (
                <div key={i} className="hk-tl-row">
                  <div className="hk-tl-left">
                    <div className="hk-tl-dot" style={{ background: t.tagColor }} />
                    <div className="hk-tl-line" />
                  </div>
                  <div className="hk-tl-content">
                    <Tag color={t.tagColor}>{t.tag}</Tag>
                    <div className="hk-tl-time" style={{ color: t.tagColor }}>{t.time}</div>
                    <div className="hk-tl-head">{t.label}</div>
                    <div className="hk-tl-desc">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Domains ── */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="hk-label">Hackathon Domains</div>
          <div className="hk-domains-grid">
            {domains.map((d, i) => {
              const [c1, c2] = accentPairs[i % accentPairs.length];
              return (
                <div key={i} className="hk-domain-item">
                  <span className="hk-domain-emoji">{d.icon}</span>
                  <span style={{ background:`linear-gradient(135deg,${c1},${c2})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", fontWeight:700 }}>
                    {d.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Rules (Tabbed) ── */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6, delay: 0.22 }}>
          <div className="hk-label">Rules & Guidelines</div>
          <RulesTabs />
        </motion.div>

        {/* ── AI Policy ── */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6, delay: 0.24 }}>
          <div className="hk-label">AI Tools Policy</div>
          <div style={{
            background: "rgba(34,197,94,0.04)",
            border: "1px solid rgba(34,197,94,0.15)",
            borderRadius: 16,
            padding: "clamp(18px,4vw,28px)",
          }}>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
              <span style={{ fontSize:20 }}>🤖</span>
              <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:18, letterSpacing:"2px", color:"#22c55e" }}>AI Tools Fully Allowed</span>
            </div>
            <ul className="hk-ai-list">
              {aiAllowed.map((a, i) => (
                <li key={i}><span className="hk-ai-ck">{a.icon}</span>{a.text}</li>
              ))}
            </ul>
            <div style={{ marginTop:14, padding:"10px 14px", background:"rgba(247,201,72,0.06)", border:"1px solid rgba(247,201,72,0.15)", borderRadius:8, fontSize:12, color:"rgba(255,255,255,0.35)", lineHeight:1.6 }}>
              <span style={{ color:"#f7c948", fontWeight:700 }}>Note: </span>
              If you use AI to generate significant portions of your project, judges may ask you to explain how it works. Inability to explain your own code affects your score — it does not disqualify you.
            </div>
          </div>
        </motion.div>

        {/* ── Judging Criteria ── */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6, delay: 0.26 }}>
          <div className="hk-label">Judging Criteria</div>
          <JudgingTabs />
        </motion.div>

        {/* ── Disqualification ── */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6, delay: 0.28 }}>
          <div className="hk-label">Disqualification Grounds</div>
          <div style={{
            background: "rgba(232,64,64,0.04)",
            border: "1px solid rgba(232,64,64,0.14)",
            borderRadius: 16,
            padding: "clamp(18px,4vw,28px)",
          }}>
            <ul className="hk-dq-list">
              {dqList.map((d, i) => (
                <li key={i}><span className="hk-dq-x">✕</span>{d}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── Coordinators ── */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6, delay: 0.3 }}>
          <div className="hk-label">Contact Coordinators</div>
          <div className="hk-coords-grid">
            {coordinators.map((c, i) => {
              const [c1, c2] = accentPairs[i % accentPairs.length];
              const initials = c.name.split(" ").map(w => w[0]).join("").slice(0,2);
              return (
                <div key={i} className="hk-coord-card">
                  <span style={{ position:"absolute", top:0, left:0, right:0, height:1, background:`linear-gradient(90deg,transparent,${c1}77,${c2}77,transparent)`, pointerEvents:"none" }} />
                  <div className="hk-coord-avatar" style={{ background:`linear-gradient(135deg,${c1}33,${c2}33)`, border:`1px solid ${c1}44` }}>
                    <span style={{ background:`linear-gradient(135deg,${c1},${c2})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>{initials}</span>
                  </div>
                  <div className="hk-coord-name" style={{ backgroundImage:`linear-gradient(135deg,#fff 20%,${c1} 80%,${c2} 100%)` }}>
                    {c.name}
                  </div>
                  <a href={`tel:${c.phone}`} className="hk-coord-phone">{c.phone}</a>
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