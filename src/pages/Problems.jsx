import React, { useState } from "react";

const dataToShow = [
  // ── Web & App Development ──────────────────────────────────────
  {
    title: "HungerBridge",
    code: "PS-01",
    domain: "Web & App Development",
    description:
      "Every day, wedding halls, canteens, and restaurants discard hundreds of meals while nearby shelters run short. Build a real-time surplus food coordination app where donors post availability with a pickup countdown, NGOs claim slots, and a volunteer dispatch system manages last-mile delivery — all within a 2-hour expiry window.",
    features: [
      "Live food listing with countdown timer",
      "Claim & volunteer dispatch flow",
      "Donor reputation score & monthly impact report",
    ],
    color: "#f97316",
  },
  {
    title: "RozgarSaathi",
    code: "PS-02",
    domain: "Web & App Development",
    description:
      "Daily wage workers — plumbers, electricians, painters, mazdoors — lose work days standing at nakas with zero digital visibility. Build a hyperlocal daily gig board where workers register with skill tags and availability, and households or contractors post same-day jobs with location. No middleman, no commission.",
    features: [
      "Skill filter & geo-based job feed",
      "WhatsApp-style contact flow",
      "Verified worker badges via Aadhaar OTP",
    ],
    color: "#06b6d4",
  },
  {
    title: "HostelSync",
    code: "PS-03",
    domain: "Web & App Development",
    description:
      "Hostel wardens manage attendance, gate passes, visitor logs, and mess feedback through registers and WhatsApp groups — creating operational chaos. Build a unified hostel operations platform with digital gate pass approvals, parent SMS notifications, real-time room allocation, and mess menu voting.",
    features: [
      "Digital gate pass approval workflow",
      "Parent SMS & real-time room management",
      "Complaint escalation with SLA tracking",
    ],
    color: "#10b981",
  },
  {
    title: "WillMaker",
    code: "PS-04",
    domain: "Web & App Development",
    description:
      "Over 70% of Indian families face legal disputes after a member's passing due to absence of a registered will. Build a guided digital will creation tool where users answer plain-language questions, the system generates a legally structured draft will, and optionally stores a timestamped hash on a public ledger as proof of existence.",
    features: [
      "Guided will builder with plain-language questions",
      "Legally structured PDF export",
      "Witness e-signature flow + hash proof of creation",
    ],
    color: "#a855f7",
  },

  // ── Data Science ───────────────────────────────────────────────
  {
    title: "NakaAnalytics",
    code: "PS-05",
    domain: "Data Science",
    description:
      "Traffic police nakas operate on instinct — no data on which checkpoints catch the most violations at what times. Using synthetic naka check data (vehicle type, time, violation type, GPS), build a predictive deployment model that recommends optimal naka locations and shift timings to maximise violation detection.",
    features: [
      "Violation pattern analysis & location-time heatmap",
      "Predictive naka placement model",
      "Shift scheduling optimizer with resource constraints",
    ],
    color: "#ec4899",
  },
  {
    title: "SheepOrSleep",
    code: "PS-06",
    domain: "Data Science",
    description:
      "Mutual fund and SIP investors in India panic-sell during market dips, following herd behaviour at significant financial cost. Using historical NAV data and retail investor flows, build a behavioural bias detector that identifies panic-selling patterns and visualises what disciplined investors gained vs. panic sellers over the same period.",
    features: [
      "Herd behaviour detection from historical data",
      "Disciplined vs. panic investor gain/loss comparison",
      "Personalised nudge system for irrational decisions",
    ],
    color: "#facc15",
  },
  {
    title: "WaterWatch",
    code: "PS-07",
    domain: "Data Science",
    description:
      "Municipal water supply in Indian cities is irregular, uneven, and untracked at ward level. Using synthetic supply schedule data, complaint logs, and ward-level population density, build a water scarcity forecasting model that predicts which wards will face shortage next week and surfaces root cause indicators.",
    features: [
      "Ward-level scarcity prediction model",
      "Risk heatmap with root cause indicators",
      "Tanker demand pre-allocation recommendation",
    ],
    color: "#10b981",
  },
  {
    title: "ExamStress Index",
    code: "PS-08",
    domain: "Data Science",
    description:
      "College exam seasons spike student mental health crises but no data-driven early warning exists. Using anonymised synthetic data — library occupancy, portal login times, canteen footfall, health centre visits — build a campus stress index model that detects pre-exam burnout hotspots and recommends optimal intervention timing for counsellors.",
    features: [
      "Stress index score with time-series trend",
      "Burnout hotspot detection across campus",
      "Department-wise comparison + counsellor alert trigger",
    ],
    color: "#6366f1",
  },

  // ── AI / ML ────────────────────────────────────────────────────
  {
    title: "SilentSOS",
    code: "PS-09",
    domain: "AI / ML",
    description:
      "Elderly people living alone often cannot call for help during a fall or cardiac event. Build an AI-powered ambient audio monitor that runs passively on a phone or tablet, detecting distress sounds — unusual silence after movement, falls, laboured breathing — and automatically alerts a registered family member with timestamp and audio clip.",
    features: [
      "Real-time ambient sound event detection",
      "Instant family alert with timestamp & audio clip",
      "False positive suppression via contextual time patterns",
    ],
    color: "#f97316",
  },
  {
    title: "CourtScribe",
    code: "PS-10",
    domain: "AI / ML",
    description:
      "Indian district courts still use longhand transcription, causing delays and errors in FIRs and hearing records. Build an AI court transcription assistant that accepts audio input of a legal deposition, transcribes it in real-time, auto-tags speaker roles (judge, advocate, witness), and formats output into a structured legal document.",
    features: [
      "Real-time speech-to-text transcription",
      "Automatic speaker role tagging",
      "Multilingual support for Hindi-English code-switching",
    ],
    color: "#a855f7",
  },
  {
    title: "GrainGuard",
    code: "PS-11",
    domain: "AI / ML",
    description:
      "Warehouse managers at food storage corporations visually inspect grain sacks for infestation and spoilage — unreliable and slow. Build a computer vision model trained to detect moisture damage, pest infestation, and mould growth from grain sack images, generating a shelf-life risk report per batch.",
    features: [
      "CV model for damage & infestation detection",
      "Per-batch shelf-life risk report",
      "Batch tracking with predicted spoilage timeline",
    ],
    color: "#06b6d4",
  },
  {
    title: "MoodMentor",
    code: "PS-12",
    domain: "AI / ML",
    description:
      "College students avoid counsellors due to stigma but willingly journal anonymously. Build an AI journaling companion that tracks emotional tone over time, detects sustained negative spirals (not one-off bad days), and — only when a threshold is crossed — gently suggests professional help with opt-in campus resources.",
    features: [
      "Sentiment tracking & negative spiral detection",
      "Mood trend visualisation over time",
      "Anonymised campus-wide mental health heatmap",
    ],
    color: "#ec4899",
  },

  // ── Blockchain ─────────────────────────────────────────────────
  {
    title: "TrustBite",
    code: "PS-13",
    domain: "Blockchain",
    description:
      "Food adulteration in milk, spices, and edible oils is rampant in India with no consumer-facing traceability. Build a farm-to-shelf supply chain tracker on blockchain where each food batch gets a digital passport — recording source farm, processing unit, lab tests, and transport — accessible via QR scan at point of purchase.",
    features: [
      "Batch digital passport creation on-chain",
      "Consumer QR scan verification portal",
      "Anomaly flagging for skipped steps or timestamp gaps",
    ],
    color: "#facc15",
  },
  {
    title: "DAOVoice",
    code: "PS-14",
    domain: "Blockchain",
    description:
      "Resident Welfare Associations collect maintenance funds but residents have zero transparent say in how it's spent. Build a decentralised community treasury system where each flat owner holds governance tokens, spending proposals are submitted on-chain, and funds are released only when a quorum approves via smart contract.",
    features: [
      "Token-based governance & quorum voting",
      "Smart contract treasury with fund release control",
      "Full spending audit trail + proposal deadline enforcement",
    ],
    color: "#10b981",
  },
  {
    title: "MediProof",
    code: "PS-15",
    domain: "Blockchain",
    description:
      "Counterfeit medicines cause preventable deaths across India, yet pharmacists have no real-time batch verification tool. Build a blockchain-based drug verification system where manufacturers register every batch on-chain with ingredient details and expiry, enabling pharmacists and patients to verify legitimacy via QR scan — flagging recalled or unregistered batches instantly.",
    features: [
      "Manufacturer batch registration on-chain",
      "QR-based real-time verification for pharmacists",
      "Broadcast recall mechanism to all registered nodes",
    ],
    color: "#6366f1",
  },
];

const DOMAINS = [
  { label: "All", color: "#ffffff" },
  { label: "Web & App Development", color: "#06b6d4" },
  { label: "Data Science", color: "#10b981" },
  { label: "AI / ML", color: "#a855f7" },
  { label: "Blockchain", color: "#facc15" },
];

const ProblemStatements = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [activeDomain, setActiveDomain] = useState("All");

  const filtered = dataToShow.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.code.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchDomain =
      activeDomain === "All" || p.domain === activeDomain;
    return matchSearch && matchDomain;
  });

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        .ps-root {
          position: relative;
          min-height: 100svh;
          background: #050508;
          color: #fff;
          overflow: hidden;
          font-family: 'Rajdhani', sans-serif;
          isolation: isolate;
        }

        .ps-root::before {
          content: ""; position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.022; pointer-events: none; z-index: 0;
        }

        .ps-root::after {
          content: ""; position: absolute; inset: 0;
          background-image: repeating-linear-gradient(
            to bottom, transparent, transparent 3px,
            rgba(255,255,255,0.01) 3px, rgba(255,255,255,0.01) 4px
          );
          pointer-events: none; z-index: 0;
        }

        .ps-orb {
          position: absolute; border-radius: 50%;
          filter: blur(100px); pointer-events: none; z-index: 0;
        }
        .ps-orb1 {
          width: clamp(300px,55vw,700px); height: clamp(300px,55vw,700px);
          background: radial-gradient(circle, #7c3aed, transparent 70%);
          top: -15%; left: -10%; opacity: 0.14;
          animation: psDrift1 20s ease-in-out infinite;
        }
        .ps-orb2 {
          width: clamp(200px,40vw,500px); height: clamp(200px,40vw,500px);
          background: radial-gradient(circle, #be185d, transparent 70%);
          bottom: 0; right: -8%; opacity: 0.10;
          animation: psDrift2 25s ease-in-out infinite;
        }

        @keyframes psDrift1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(3%,5%) scale(1.06)} }
        @keyframes psDrift2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-4%,3%)} }
        @keyframes psFadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

        .ps-inner {
          position: relative; z-index: 2;
          max-width: 1200px; margin: 0 auto;
          padding: clamp(80px,10vw,120px) clamp(16px,4vw,40px) clamp(60px,8vw,100px);
          display: flex; flex-direction: column;
          gap: clamp(28px,4vw,44px);
          animation: psFadeUp 0.7s ease both;
        }

        .ps-hero { text-align: center; }
        .ps-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: clamp(9px,2vw,11px); font-weight: 700;
          letter-spacing: 0.38em; text-transform: uppercase;
          color: rgba(255,255,255,0.2); margin-bottom: 14px;
        }
        .ps-eline { width: 28px; height: 1px; }
        .ps-eline.l { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15)); }
        .ps-eline.r { background: linear-gradient(90deg, rgba(255,255,255,0.15), transparent); }
        .ps-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem,12vw,7rem);
          letter-spacing: 0.05em; line-height: 0.9; margin-bottom: 16px;
        }
        .ps-title-problem {
          display: block;
          background: linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.5));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .ps-title-statements {
          display: block;
          background: linear-gradient(135deg, #f97316 0%, #ec4899 50%, #a855f7 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          filter: drop-shadow(0 0 18px rgba(249,115,22,0.25));
        }
        .ps-hero-sub {
          font-size: clamp(12px,2.2vw,14px); color: rgba(255,255,255,0.3);
          letter-spacing: 0.05em; max-width: 480px; margin: 0 auto; line-height: 1.75;
        }

        .ps-stats {
          display: flex; justify-content: center; gap: clamp(10px,2.5vw,20px); flex-wrap: wrap;
        }
        .ps-stat {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 100px;
        }
        .ps-stat-dot { width: 6px; height: 6px; border-radius: 50%; }
        .ps-stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem; letter-spacing: 0.1em;
          background: linear-gradient(135deg, #f97316, #a855f7);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .ps-stat-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.3em; text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }

        .ps-filters {
          display: flex; justify-content: center; flex-wrap: wrap; gap: 8px;
        }
        .ps-filter-pill {
          padding: 6px 16px; border-radius: 100px;
          font-family: 'Rajdhani', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: 0.3em; text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent; color: rgba(255,255,255,0.35);
          cursor: pointer; transition: all 0.22s;
        }
        .ps-filter-pill:hover { color: rgba(255,255,255,0.7); border-color: rgba(255,255,255,0.2); }
        .ps-filter-pill.active { color: #050508; font-weight: 700; border-color: transparent; }

        .ps-search-wrap {
          position: relative; max-width: 480px; margin: 0 auto; width: 100%;
        }
        .ps-search-icon {
          position: absolute; left: 16px; top: 50%; transform: translateY(-50%);
          color: rgba(255,255,255,0.2); font-size: 14px; pointer-events: none;
        }
        .ps-search {
          width: 100%; padding: 13px 16px 13px 44px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px; color: #fff;
          font-family: 'Rajdhani', sans-serif;
          font-size: 14px; font-weight: 600; letter-spacing: 0.05em;
          outline: none; transition: border-color 0.25s, box-shadow 0.25s;
        }
        .ps-search::placeholder { color: rgba(255,255,255,0.2); }
        .ps-search:focus {
          border-color: rgba(249,115,22,0.35);
          box-shadow: 0 0 20px rgba(249,115,22,0.08);
        }

        .ps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(340px,100%), 1fr));
          gap: clamp(12px,2.5vw,18px);
        }

        .ps-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px; overflow: hidden; position: relative;
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
          display: flex; flex-direction: column;
        }
        .ps-card:hover {
          border-color: rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          transform: translateY(-4px);
        }
        .ps-card::after {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.025) 50%, transparent 65%);
          transform: translateX(-100%); transition: transform 0.55s ease;
          border-radius: 14px; pointer-events: none;
        }
        .ps-card:hover::after { transform: translateX(100%); }

        .ps-card-body { padding: clamp(16px,3vw,22px); flex: 1; display: flex; flex-direction: column; gap: 10px; }

        .ps-domain-tag {
          font-size: 9px; font-weight: 700; letter-spacing: 0.3em; text-transform: uppercase;
          color: rgba(255,255,255,0.2); margin-bottom: -4px;
        }

        .ps-code {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 3px 10px; border-radius: 100px;
          font-size: 9px; font-weight: 700; letter-spacing: 0.35em; text-transform: uppercase;
          border: 1px solid; width: fit-content;
        }
        .ps-code-dot { width: 4px; height: 4px; border-radius: 50%; }

        .ps-card-title {
          font-size: clamp(13px,2.2vw,15px); font-weight: 700;
          letter-spacing: 0.05em; line-height: 1.4; color: rgba(255,255,255,0.85);
        }
        .ps-card-desc {
          font-size: clamp(11px,1.9vw,12.5px); font-weight: 600;
          color: rgba(255,255,255,0.35); line-height: 1.75; letter-spacing: 0.03em; flex: 1;
        }

        .ps-toggle {
          display: flex; align-items: center; justify-content: space-between;
          width: 100%; padding: clamp(10px,2vw,14px) clamp(16px,3vw,22px);
          background: rgba(255,255,255,0.02);
          border: none; border-top: 1px solid rgba(255,255,255,0.05);
          cursor: pointer; font-family: 'Rajdhani', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: 0.35em; text-transform: uppercase;
          color: rgba(255,255,255,0.28); transition: color 0.2s, background 0.2s;
        }
        .ps-toggle:hover { color: rgba(255,255,255,0.6); background: rgba(255,255,255,0.03); }
        .ps-toggle-arrow {
          width: 16px; height: 16px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; border: 1px solid rgba(255,255,255,0.1);
          transition: transform 0.3s, border-color 0.3s;
        }
        .ps-toggle-arrow.open { transform: rotate(180deg); }

        .ps-features {
          padding: clamp(12px,2.5vw,16px) clamp(16px,3vw,22px) clamp(14px,2.5vw,18px);
          border-top: 1px solid rgba(255,255,255,0.04);
          display: flex; flex-direction: column; gap: 8px;
          background: rgba(255,255,255,0.015);
        }
        .ps-feature {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: clamp(11px,1.9vw,12px); font-weight: 600;
          color: rgba(255,255,255,0.45); letter-spacing: 0.04em; line-height: 1.5;
        }
        .ps-feature-arrow { flex-shrink: 0; margin-top: 1px; font-size: 10px; font-weight: 700; }

        .ps-empty {
          text-align: center; padding: 60px 20px;
          font-size: 13px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase;
          color: rgba(255,255,255,0.15);
        }
        .ps-count {
          font-size: 10px; font-weight: 700; letter-spacing: 0.35em; text-transform: uppercase;
          color: rgba(255,255,255,0.18); text-align: center;
        }
      `}</style>

      <div className="ps-root">
        <div className="ps-orb ps-orb1" />
        <div className="ps-orb ps-orb2" />

        <div className="ps-inner">

          <div className="ps-hero">
            <div className="ps-eyebrow">
              <span className="ps-eline l" />
              TechKruti 2K26 · KrutiVerse Hackathon
              <span className="ps-eline r" />
            </div>
            <h1 className="ps-hero-title">
              <span className="ps-title-problem">Problem</span>
              <span className="ps-title-statements">Statements</span>
            </h1>
            <p className="ps-hero-sub">
              Choose your challenge. Build your solution. Make an impact.
            </p>
          </div>

          <div className="ps-stats">
            <div className="ps-stat">
              <span className="ps-stat-dot" style={{ background: "#f97316", boxShadow: "0 0 6px #f97316" }} />
              <span className="ps-stat-num">15</span>
              <span className="ps-stat-label">Problem Statements</span>
            </div>
            <div className="ps-stat">
              <span className="ps-stat-dot" style={{ background: "#10b981", boxShadow: "0 0 6px #10b981" }} />
              <span className="ps-stat-num">10 HRS</span>
              <span className="ps-stat-label">Hackathon Duration</span>
            </div>
            <div className="ps-stat">
              <span className="ps-stat-dot" style={{ background: "#a855f7", boxShadow: "0 0 6px #a855f7" }} />
              <span className="ps-stat-num">4</span>
              <span className="ps-stat-label">Domains</span>
            </div>
            <div className="ps-stat">
              <span className="ps-stat-dot" style={{ background: "#facc15", boxShadow: "0 0 6px #facc15" }} />
              <span className="ps-stat-num">MARCH 24</span>
              <span className="ps-stat-label">Event Date</span>
            </div>
          </div>

          <div className="ps-filters">
            {DOMAINS.map((d) => (
              <button
                key={d.label}
                className={"ps-filter-pill" + (activeDomain === d.label ? " active" : "")}
                style={activeDomain === d.label ? { background: d.color, color: "#050508" } : {}}
                onClick={() => { setActiveDomain(d.label); setOpenIndex(null); }}
              >
                {d.label}
              </button>
            ))}
          </div>

          <div className="ps-search-wrap">
            <span className="ps-search-icon">🔍</span>
            <input
              className="ps-search"
              type="text"
              placeholder="Search by title, code, or keyword…"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setOpenIndex(null); }}
            />
          </div>

          {(search || activeDomain !== "All") && (
            <p className="ps-count">
              Showing {filtered.length} of {dataToShow.length} problem statements
            </p>
          )}

          {filtered.length > 0 ? (
            <div className="ps-grid">
              {filtered.map((item, index) => (
                <div key={item.code} className="ps-card">
                  <span style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 1,
                    background: `linear-gradient(90deg, transparent, ${item.color}88, transparent)`,
                    pointerEvents: "none",
                  }} />

                  <div className="ps-card-body">
                    <span className="ps-domain-tag">{item.domain}</span>
                    <div className="ps-code" style={{
                      color: item.color,
                      borderColor: `${item.color}33`,
                      background: `${item.color}10`,
                    }}>
                      <span className="ps-code-dot" style={{ background: item.color }} />
                      {item.code}
                    </div>
                    <h3 className="ps-card-title">{item.title}</h3>
                    <p className="ps-card-desc">{item.description}</p>
                  </div>

                  <button
                    className="ps-toggle"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    style={openIndex === index ? { color: item.color } : {}}
                  >
                    <span>{openIndex === index ? "Hide Features" : "View Features"}</span>
                    <span
                      className={"ps-toggle-arrow" + (openIndex === index ? " open" : "")}
                      style={openIndex === index ? { borderColor: `${item.color}55`, color: item.color } : {}}
                    >↓</span>
                  </button>

                  {openIndex === index && (
                    <div className="ps-features">
                      {item.features.map((f, fi) => (
                        <div key={fi} className="ps-feature">
                          <span className="ps-feature-arrow" style={{ color: item.color }}>→</span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="ps-empty">No results found · Try a different search or filter</div>
          )}

        </div>
      </div>
    </>
  );
};

export default ProblemStatements;