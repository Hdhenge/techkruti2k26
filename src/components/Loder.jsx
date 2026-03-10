import React, { useEffect, useState } from "react";

const bootLines = [
  "Initializing TECHKRUTI_2K26.exe...",
  "Loading event modules............",
  "Connecting to TGPCET mainframe...",
  "Mounting hackathon database......",
  "Calibrating neural interface.....",
  "System ready. Launching..........",
];

const Loder = () => {
  const [progress, setProgress]         = useState(0);
  const [visibleLines, setVisibleLines] = useState([]);
  const [glitch, setGlitch]             = useState(false);
  const [scanPos, setScanPos]           = useState(0);

  useEffect(() => {
    const step = 100 / 60;
    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    bootLines.forEach((_, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, i * 450 + 200);
    });
  }, []);

  useEffect(() => {
    const burst = () => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 130);
    };
    const id = setInterval(burst, 1800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setScanPos((p) => (p + 1) % 101);
    }, 20);
    return () => clearInterval(id);
  }, []);

  const hexPct = Math.round(progress)
    .toString(16).toUpperCase().padStart(2, "0");

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes lBlink  { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes lFadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes lOrb1   { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(3%,5%) scale(1.06)} }
        @keyframes lOrb2   { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-4%,3%)} }
        @keyframes lOrb3   { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(2%,-4%) scale(1.08)} }
        @keyframes lCorner { 0%,100%{opacity:0.3} 50%{opacity:0.9} }
        @keyframes lShimmer{ 0%{transform:translateX(-100%)} 100%{transform:translateX(400%)} }
        @keyframes lGlow   {
          0%,100%{box-shadow:0 0 8px rgba(249,115,22,0.4)}
          50%    {box-shadow:0 0 20px rgba(249,115,22,0.85),0 0 38px rgba(168,85,247,0.3)}
        }

        .l-root {
          position: fixed; inset: 0;
          background: #050508;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          overflow: hidden;
          font-family: 'Rajdhani', sans-serif;
          z-index: 9999;
          isolation: isolate;
        }

        /* Noise */
        .l-root::before {
          content:""; position:absolute; inset:0;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity:0.022; pointer-events:none; z-index:0;
        }
        /* Scanlines */
        .l-root::after {
          content:""; position:absolute; inset:0;
          background-image:repeating-linear-gradient(
            to bottom,transparent,transparent 3px,
            rgba(255,255,255,0.01) 3px,rgba(255,255,255,0.01) 4px
          );
          pointer-events:none; z-index:0;
        }

        /* Aurora orbs */
        .l-orb { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; z-index:0; }
        .l-orb1 {
          width:clamp(300px,60vw,600px); height:clamp(300px,60vw,600px);
          background:radial-gradient(circle,#7c3aed,transparent 70%);
          top:-130px; left:-80px; opacity:0.18;
          animation:lOrb1 18s ease-in-out infinite;
        }
        .l-orb2 {
          width:clamp(220px,45vw,480px); height:clamp(220px,45vw,480px);
          background:radial-gradient(circle,#f97316,transparent 70%);
          bottom:-100px; right:-60px; opacity:0.14;
          animation:lOrb2 22s ease-in-out infinite;
        }
        .l-orb3 {
          width:clamp(160px,32vw,320px); height:clamp(160px,32vw,320px);
          background:radial-gradient(circle,#be185d,transparent 70%);
          top:30%; right:10%; opacity:0.10;
          animation:lOrb3 16s ease-in-out infinite;
        }

        /* Grid */
        .l-grid {
          position:absolute; inset:0; z-index:0;
          background-image:
            linear-gradient(rgba(249,115,22,0.04) 1px,transparent 1px),
            linear-gradient(90deg,rgba(249,115,22,0.04) 1px,transparent 1px);
          background-size:40px 40px;
        }

        /* Moving scanline */
        .l-sweep {
          position:absolute; left:0; right:0; height:2px; z-index:1; pointer-events:none;
          background:linear-gradient(90deg,transparent,rgba(249,115,22,0.12),rgba(168,85,247,0.08),transparent);
          transition:top 0.02s linear;
        }

        /* Top accent */
        .l-topline {
          position:absolute; top:0; left:0; right:0; height:2px; z-index:2;
          background:linear-gradient(90deg,transparent,#f97316cc,#ec4899cc,#a855f7cc,transparent);
        }

        /* Corner brackets */
        .l-corner {
          position:absolute; width:clamp(14px,3vw,20px); height:clamp(14px,3vw,20px);
          animation:lCorner 2.5s ease-in-out infinite; z-index:2;
        }
        .l-tl { top:clamp(10px,2vw,18px); left:clamp(10px,2vw,18px);  border-top:1.5px solid rgba(249,115,22,0.65); border-left:1.5px solid rgba(249,115,22,0.65); }
        .l-tr { top:clamp(10px,2vw,18px); right:clamp(10px,2vw,18px); border-top:1.5px solid rgba(249,115,22,0.65); border-right:1.5px solid rgba(249,115,22,0.65); }
        .l-bl { bottom:clamp(10px,2vw,18px); left:clamp(10px,2vw,18px);  border-bottom:1.5px solid rgba(168,85,247,0.65); border-left:1.5px solid rgba(168,85,247,0.65); }
        .l-br { bottom:clamp(10px,2vw,18px); right:clamp(10px,2vw,18px); border-bottom:1.5px solid rgba(168,85,247,0.65); border-right:1.5px solid rgba(168,85,247,0.65); }

        /* Content */
        .l-content {
          position:relative; z-index:3;
          width:100%; max-width:520px;
          padding:clamp(20px,5vw,32px) clamp(20px,5vw,36px);
          animation:lFadeUp 0.7s ease both;
          color:#fff;
        }

        /* Eyebrow */
        .l-eyebrow {
          display:inline-flex; align-items:center; gap:8px;
          font-size:clamp(8px,1.8vw,10px); font-weight:700;
          letter-spacing:0.42em; text-transform:uppercase;
          color:rgba(255,255,255,0.2); margin-bottom:clamp(10px,2.5vw,14px);
        }
        .l-eline { width:22px; height:1px; }
        .l-eline.ll { background:linear-gradient(90deg,transparent,rgba(255,255,255,0.15)); }
        .l-eline.rr { background:linear-gradient(90deg,rgba(255,255,255,0.15),transparent); }

        /* Title */
        .l-title-wrap { position:relative; display:inline-block; line-height:1; user-select:none; }

        .l-tech {
          display:block;
          font-family:'Bebas Neue',sans-serif;
          font-size:clamp(3rem,14vw,5.5rem); letter-spacing:0.05em; line-height:0.88;
          background:linear-gradient(135deg,#fff 25%,rgba(255,255,255,0.5));
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .l-kruti {
          display:block;
          font-family:'Bebas Neue',sans-serif;
          font-size:clamp(3rem,14vw,5.5rem); letter-spacing:0.05em; line-height:0.88;
          background:linear-gradient(135deg,#f97316 0%,#ec4899 50%,#a855f7 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          filter:drop-shadow(0 0 18px rgba(249,115,22,0.3));
        }
        .l-year {
          display:block;
          font-family:'Bebas Neue',sans-serif;
          font-size:clamp(1rem,4.5vw,1.8rem); letter-spacing:0.38em; line-height:1; margin-top:4px;
          color:rgba(255,255,255,0.18);
        }

        /* Glitch layers */
        .l-glitch {
          position:absolute; top:0; left:0; display:block; pointer-events:none;
          font-family:'Bebas Neue',sans-serif;
          font-size:clamp(3rem,14vw,5.5rem); letter-spacing:0.05em; line-height:0.88;
        }

        .l-tagline {
          font-size:clamp(8px,1.8vw,10px); font-weight:700;
          letter-spacing:0.4em; text-transform:uppercase;
          color:rgba(255,255,255,0.2); margin-top:clamp(8px,2vw,12px);
        }

        /* Terminal */
        .l-terminal {
          position:relative; overflow:hidden;
          background:rgba(255,255,255,0.025);
          border:1px solid rgba(255,255,255,0.07);
          border-radius:12px;
          padding:clamp(12px,3vw,16px) clamp(14px,4vw,20px);
          margin-top:clamp(18px,4vw,26px); margin-bottom:clamp(16px,3.5vw,22px);
          min-height:clamp(110px,22vw,148px);
        }
        .l-terminal::before {
          content:""; position:absolute; top:0; left:0; right:0; height:1px;
          background:linear-gradient(90deg,transparent,rgba(249,115,22,0.4),rgba(168,85,247,0.35),transparent);
        }

        .l-term-hdr {
          display:flex; align-items:center; gap:6px;
          font-size:clamp(8px,1.8vw,9px); font-weight:700;
          letter-spacing:0.35em; text-transform:uppercase;
          color:rgba(255,255,255,0.18); margin-bottom:clamp(8px,2vw,12px);
        }
        .l-dot { width:6px; height:6px; border-radius:50%; }

        .l-line {
          font-family:'Rajdhani',sans-serif;
          font-size:clamp(10px,2.2vw,12px); font-weight:600; letter-spacing:0.04em;
          margin-bottom:4px; display:flex; align-items:center; gap:8px;
          transition:color 0.35s ease, opacity 0.35s ease;
        }
        .l-prompt {
          font-size:clamp(8px,1.8vw,9px); font-weight:700;
          letter-spacing:0.1em; color:rgba(249,115,22,0.5); flex-shrink:0;
        }
        .l-cursor {
          display:inline-block;
          width:clamp(5px,1.2vw,7px); height:clamp(10px,2.2vw,13px);
          background:rgba(249,115,22,0.7); margin-left:2px; vertical-align:middle;
          animation:lBlink 0.8s step-end infinite;
        }

        /* Progress */
        .l-prog-row {
          display:flex; justify-content:space-between; align-items:center;
          font-size:clamp(8px,1.8vw,9px); font-weight:700;
          letter-spacing:0.3em; text-transform:uppercase;
          color:rgba(255,255,255,0.2); margin-bottom:clamp(6px,1.5vw,9px);
          flex-wrap:wrap; gap:4px;
        }
        .l-hex {
          font-family:'Rajdhani',sans-serif;
          font-size:clamp(9px,2vw,11px); font-weight:700; letter-spacing:0.1em;
          background:linear-gradient(135deg,#f97316,#a855f7);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .l-track {
          width:100%; height:4px;
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.07);
          border-radius:100px; overflow:hidden; position:relative;
        }
        .l-fill {
          height:100%;
          background:linear-gradient(90deg,#f97316,#ec4899,#a855f7);
          border-radius:100px; position:relative; overflow:hidden;
          animation:lGlow 1.5s ease-in-out infinite;
          transition:width 0.06s linear;
        }
        .l-fill::after {
          content:""; position:absolute; top:0; left:0; bottom:0; width:36px;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent);
          animation:lShimmer 1.8s ease infinite;
        }
        .l-ticks {
          display:flex; justify-content:space-between;
          margin-top:5px; padding:0 1px;
        }
        .l-tick {
          font-family:'Rajdhani',sans-serif;
          font-size:clamp(7px,1.6vw,8px); font-weight:700; letter-spacing:0.15em;
          transition:color 0.3s;
        }

        /* Footer */
        .l-footer {
          text-align:center; margin-top:clamp(16px,3.5vw,22px);
          font-size:clamp(7px,1.6vw,9px); font-weight:700;
          letter-spacing:0.4em; text-transform:uppercase;
          color:rgba(255,255,255,0.1);
        }

        @media (max-width:380px) {
          .l-line { white-space:normal; word-break:break-word; }
        }
        @media (max-height:500px) and (orientation:landscape) {
          .l-terminal { min-height:80px; margin-top:10px; margin-bottom:10px; }
          .l-content { padding:10px 20px; }
          .l-footer { margin-top:10px; }
        }
      `}</style>

      <div className="l-root">
        <div className="l-grid" />
        <div className="l-orb l-orb1" />
        <div className="l-orb l-orb2" />
        <div className="l-orb l-orb3" />
        <div className="l-sweep" style={{ top: `${scanPos}%` }} />
        <div className="l-topline" />
        <div className="l-corner l-tl" />
        <div className="l-corner l-tr" />
        <div className="l-corner l-bl" />
        <div className="l-corner l-br" />

        <div className="l-content">

          <div style={{ textAlign: "center" }}>
            <div className="l-eyebrow">
              <span className="l-eline ll" />
              TGPCET · CSE Data Science Dept · Mohgaon
              <span className="l-eline rr" />
            </div>

            <div className="l-title-wrap">
              <span className="l-tech">TECH</span>
              <span className="l-kruti">KRUTI</span>

              {glitch && (
                <>
                  <span className="l-glitch" style={{ left: 3, color: "#f97316", opacity: 0.4, clipPath: "inset(15% 0 55% 0)" }}>
                    TECH
                  </span>
                  <span className="l-glitch" style={{
                    top: "52%", left: -3, opacity: 0.4, clipPath: "inset(0 0 20% 0)",
                    background: "linear-gradient(135deg,#f97316,#ec4899,#a855f7)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>
                    KRUTI
                  </span>
                </>
              )}
            </div>

            <span className="l-year">2K26</span>
            <p className="l-tagline">National Level Tech Fest</p>
          </div>

          {/* Terminal */}
          <div className="l-terminal">
            <div className="l-term-hdr">
              <div className="l-dot" style={{ background: "rgba(249,115,22,0.55)" }} />
              <div className="l-dot" style={{ background: "rgba(168,85,247,0.55)" }} />
              <div className="l-dot" style={{ background: "rgba(236,72,153,0.55)" }} />
              <span style={{ marginLeft: 4 }}>▸ BOOT LOG</span>
            </div>

            {bootLines.map((line, i) => {
              const isVisible = visibleLines.includes(i);
              const isLast    = i === bootLines.length - 1;
              const isActive  = visibleLines.length - 1 === i && !isLast;

              return (
                <div
                  key={i}
                  className="l-line"
                  style={{
                    color: isVisible ? (isLast ? "#4ade80" : "rgba(255,255,255,0.5)") : "transparent",
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  <span className="l-prompt" style={{ color: isLast ? "rgba(74,222,128,0.6)" : "rgba(249,115,22,0.5)" }}>›</span>
                  {line}
                  {isActive && <span className="l-cursor" />}
                </div>
              );
            })}
          </div>

          {/* Progress */}
          <div>
            <div className="l-prog-row">
              <span>Loading</span>
              <span className="l-hex">0x{hexPct} / {Math.round(progress)}%</span>
            </div>
            <div className="l-track">
              <div className="l-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="l-ticks">
              {[0, 25, 50, 75, 100].map((mark) => (
                <span
                  key={mark}
                  className="l-tick"
                  style={{ color: progress >= mark ? "rgba(249,115,22,0.65)" : "rgba(255,255,255,0.15)" }}
                >
                  {mark}
                </span>
              ))}
            </div>
          </div>

          <p className="l-footer">March 24–25, 2026 · TGPCET Campus</p>
        </div>
      </div>
    </>
  );
};

export default Loder;