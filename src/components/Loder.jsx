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
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState([]);
  const [glitch, setGlitch] = useState(false);
  const [scanPos, setScanPos] = useState(0);

  // Progress bar fills over ~3s
  useEffect(() => {
    const step = 100 / 60;
    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Reveal boot lines one by one
  useEffect(() => {
    bootLines.forEach((_, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, i * 450 + 200);
    });
  }, []);

  // Random glitch bursts
  useEffect(() => {
    const burst = () => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 130);
    };
    const id = setInterval(burst, 1800);
    return () => clearInterval(id);
  }, []);

  // Scanline sweep
  useEffect(() => {
    const id = setInterval(() => {
      setScanPos((p) => (p + 1) % 101);
    }, 20);
    return () => clearInterval(id);
  }, []);

  const hexPct = Math.round(progress)
    .toString(16)
    .toUpperCase()
    .padStart(2, "0");

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        @keyframes gridPulse {
          0%, 100% { opacity: 0.06; }
          50%       { opacity: 0.12; }
        }

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes cornerPulse {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 1; }
        }

        @keyframes progressGlow {
          0%, 100% { box-shadow: 0 0 8px rgba(0,255,255,0.5); }
          50%       { box-shadow: 0 0 20px rgba(0,255,255,0.9), 0 0 40px rgba(168,85,247,0.4); }
        }

        .loader-root {
          position: fixed;
          inset: 0;
          background: #000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: 'Courier New', Courier, monospace;
          z-index: 9999;
        }

        .loader-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.07) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          animation: gridPulse 4s ease-in-out infinite;
        }

        .loader-scanline {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,255,255,0.22), transparent);
          pointer-events: none;
        }

        .loader-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.82) 100%);
          pointer-events: none;
        }

        /* Corner decorations */
        .corner {
          position: absolute;
          width: 22px;
          height: 22px;
          animation: cornerPulse 2.2s ease-in-out infinite;
        }
        .corner-tl { top: 18px; left: 18px; border-top: 1.5px solid #00ffff; border-left: 1.5px solid #00ffff; }
        .corner-tr { top: 18px; right: 18px; border-top: 1.5px solid #00ffff; border-right: 1.5px solid #00ffff; }
        .corner-bl { bottom: 18px; left: 18px; border-bottom: 1.5px solid #00ffff; border-left: 1.5px solid #00ffff; }
        .corner-br { bottom: 18px; right: 18px; border-bottom: 1.5px solid #00ffff; border-right: 1.5px solid #00ffff; }

        /* Main content */
        .loader-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 540px;
          padding: 24px 20px;
          animation: fadeSlideIn 0.6s ease both;
        }

        /* Badge */
        .loader-badge {
          display: inline-block;
          border: 1px solid rgba(0,255,255,0.22);
          color: rgba(0,255,255,0.42);
          font-size: clamp(9px, 2vw, 11px);
          letter-spacing: 4px;
          padding: 3px 12px;
          margin-bottom: 14px;
          text-transform: uppercase;
        }

        /* Title */
        .loader-title-wrap {
          position: relative;
          display: inline-block;
          line-height: 1;
          user-select: none;
        }

        .loader-title-main {
          font-size: clamp(2rem, 10vw, 4rem);
          font-weight: 900;
          letter-spacing: 0.07em;
          background: linear-gradient(135deg, #00ffff 0%, #a855f7 50%, #f472b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
        }

        .loader-year-main {
          font-size: clamp(1rem, 5vw, 2.1rem);
          font-weight: 900;
          letter-spacing: 0.35em;
          background: linear-gradient(135deg, #f472b6, #facc15);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          margin-top: 2px;
        }

        .glitch-layer {
          position: absolute;
          top: 0;
          font-size: clamp(2rem, 10vw, 4rem);
          font-weight: 900;
          letter-spacing: 0.07em;
          pointer-events: none;
          -webkit-text-fill-color: initial;
        }

        .loader-tagline {
          color: rgba(0,255,255,0.32);
          font-size: clamp(9px, 2vw, 11px);
          letter-spacing: 3px;
          margin-top: 10px;
          text-transform: uppercase;
        }

        /* Terminal */
        .loader-terminal {
          background: rgba(0,255,255,0.025);
          border: 1px solid rgba(0,255,255,0.11);
          border-radius: 3px;
          padding: clamp(10px, 3vw, 16px) clamp(12px, 4vw, 20px);
          margin-top: 26px;
          margin-bottom: 20px;
          min-height: 128px;
        }

        .terminal-header {
          color: rgba(0,255,255,0.28);
          font-size: clamp(9px, 2vw, 10px);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .terminal-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }

        .boot-line {
          font-size: clamp(10px, 2.4vw, 12px);
          margin-bottom: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: color 0.35s ease, opacity 0.35s ease;
        }

        .boot-line-prompt {
          color: rgba(0,255,255,0.28);
          margin-right: 8px;
        }

        .boot-cursor {
          display: inline-block;
          animation: blink 0.8s step-end infinite;
          color: rgba(0,255,255,0.7);
        }

        /* Progress */
        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: clamp(9px, 2vw, 11px);
          color: rgba(0,255,255,0.38);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 8px;
          flex-wrap: wrap;
          gap: 4px;
        }

        .progress-track {
          width: 100%;
          height: 5px;
          background: rgba(0,255,255,0.07);
          border: 1px solid rgba(0,255,255,0.12);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00ffff, #a855f7, #f472b6);
          border-radius: 2px;
          animation: progressGlow 1.5s ease-in-out infinite;
          transition: width 0.06s linear;
        }

        .progress-ticks {
          display: flex;
          justify-content: space-between;
          margin-top: 5px;
          padding: 0 1px;
        }

        .tick-label {
          font-size: clamp(8px, 1.8vw, 9px);
          font-family: 'Courier New', monospace;
          transition: color 0.3s;
        }

        .loader-footer {
          text-align: center;
          margin-top: 22px;
          font-size: clamp(9px, 2vw, 10px);
          color: rgba(255,255,255,0.11);
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        /* Small phones */
        @media (max-width: 380px) {
          .corner { width: 14px; height: 14px; }
          .corner-tl, .corner-tr { top: 10px; }
          .corner-bl, .corner-br { bottom: 10px; }
          .corner-tl, .corner-bl { left: 10px; }
          .corner-tr, .corner-br { right: 10px; }
          .loader-terminal { min-height: 100px; }
          .boot-line { white-space: normal; word-break: break-word; }
          .loader-content { padding: 16px 14px; }
        }

        /* Landscape phones */
        @media (max-height: 500px) and (orientation: landscape) {
          .loader-terminal { min-height: 80px; margin-top: 12px; margin-bottom: 12px; }
          .loader-content { padding: 10px 20px; }
          .loader-footer { margin-top: 10px; }
        }
      `}</style>

      <div className="loader-root">

        {/* Grid */}
        <div className="loader-grid" />

        {/* Scanline */}
        <div
          className="loader-scanline"
          style={{ top: `${scanPos}%`, transition: "top 0.02s linear" }}
        />

        {/* Vignette */}
        <div className="loader-vignette" />

        {/* Corners */}
        <div className="corner corner-tl" />
        <div className="corner corner-tr" />
        <div className="corner corner-bl" />
        <div className="corner corner-br" />

        {/* Content */}
        <div className="loader-content">

          {/* Header */}
          <div style={{ textAlign: "center" }}>
            <div className="loader-badge">TGPCET · CSE DATA SCIENCE Dept · Otur</div>

            {/* Glitch Title */}
            <div className="loader-title-wrap">
              <span className="loader-title-main">TECHKRUTI</span>
              <span className="loader-year-main">2K26</span>

              {glitch && (
                <>
                  <span
                    className="glitch-layer"
                    style={{
                      left: 3,
                      color: "#00ffff",
                      opacity: 0.55,
                      clipPath: "inset(20% 0 50% 0)",
                    }}
                  >
                    TECHKRUTI
                  </span>
                  <span
                    className="glitch-layer"
                    style={{
                      left: -3,
                      color: "#f472b6",
                      opacity: 0.45,
                      clipPath: "inset(60% 0 10% 0)",
                    }}
                  >
                    TECHKRUTI
                  </span>
                </>
              )}
            </div>

            <p className="loader-tagline">National Level Tech Fest</p>
          </div>

          {/* Boot Terminal */}
          <div className="loader-terminal">
            <div className="terminal-header">
              <div className="terminal-dot" style={{ background: "rgba(0,255,255,0.35)" }} />
              <div className="terminal-dot" style={{ background: "rgba(168,85,247,0.35)" }} />
              <div className="terminal-dot" style={{ background: "rgba(244,114,182,0.35)" }} />
              <span style={{ marginLeft: 4 }}>▸ BOOT LOG</span>
            </div>

            {bootLines.map((line, i) => {
              const isVisible = visibleLines.includes(i);
              const isLast = i === bootLines.length - 1;
              const isActive = visibleLines.length - 1 === i && !isLast;

              return (
                <div
                  key={i}
                  className="boot-line"
                  style={{
                    color: isVisible
                      ? isLast
                        ? "#4ade80"
                        : "rgba(0,255,255,0.72)"
                      : "transparent",
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  <span className="boot-line-prompt">$</span>
                  {line}
                  {isActive && <span className="boot-cursor">█</span>}
                </div>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div>
            <div className="progress-header">
              <span>Loading</span>
              <span>0x{hexPct} / {Math.round(progress)}%</span>
            </div>

            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>

            <div className="progress-ticks">
              {[0, 25, 50, 75, 100].map((mark) => (
                <span
                  key={mark}
                  className="tick-label"
                  style={{
                    color: progress >= mark
                      ? "rgba(0,255,255,0.55)"
                      : "rgba(0,255,255,0.18)",
                  }}
                >
                  {mark}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <p className="loader-footer">March 24–25, 2026 · TGPCET Campus</p>
        </div>
      </div>
    </>
  );
};

export default Loder;