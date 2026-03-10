import React, { useState } from "react";
import axios from "axios";

const fields = [
  {
    name: "problemCode",
    label: "Problem Code",
    type: "text",
    placeholder: "e.g. TGPDS1",
    icon: "🧩",
    color1: "#f97316", color2: "#facc15",
  },
  {
    name: "teamName",
    label: "Team Name",
    type: "text",
    placeholder: "Your team name",
    icon: "👥",
    color1: "#06b6d4", color2: "#a855f7",
  },
  {
    name: "link",
    label: "Repository Link",
    type: "url",
    placeholder: "https://github.com/team/repo",
    icon: "🔗",
    color1: "#ec4899", color2: "#a855f7",
  },
];

const ProblemForm = () => {
  const [formData, setFormData] = useState({ problemCode: "", teamName: "", link: "" });
  const [message, setMessage]   = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [focused, setFocused]   = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); setError("");

    if (!formData.problemCode || !formData.teamName || !formData.link) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    try {
      await axios.post(
        "https://techkruti-backend.onrender.com/api/problem-form/submit",
        formData
      );
      setMessage("Submission successful! Good luck.");
      setSubmitted(true);
      setFormData({ problemCode: "", teamName: "", link: "" });
    } catch (err) {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        .pf-root {
          position: relative;
          min-height: 100svh;
          background: #050508;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
          font-family: 'Rajdhani', sans-serif;
          color: #fff;
          isolation: isolate;
          padding: 40px 20px;
        }

        /* Noise */
        .pf-root::before {
          content: ""; position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.022; pointer-events: none; z-index: 0;
        }
        /* Scanlines */
        .pf-root::after {
          content: ""; position: absolute; inset: 0;
          background-image: repeating-linear-gradient(
            to bottom, transparent, transparent 3px,
            rgba(255,255,255,0.01) 3px, rgba(255,255,255,0.01) 4px
          );
          pointer-events: none; z-index: 0;
        }

        /* Orbs */
        .pf-orb {
          position: absolute; border-radius: 50%;
          filter: blur(100px); pointer-events: none; z-index: 0;
        }
        .pf-orb1 {
          width: clamp(280px,55vw,650px); height: clamp(280px,55vw,650px);
          background: radial-gradient(circle, #f97316, transparent 70%);
          top: -15%; left: -10%; opacity: 0.12;
          animation: pfDrift1 18s ease-in-out infinite;
        }
        .pf-orb2 {
          width: clamp(200px,40vw,520px); height: clamp(200px,40vw,520px);
          background: radial-gradient(circle, #7c3aed, transparent 70%);
          bottom: -10%; right: -8%; opacity: 0.14;
          animation: pfDrift2 22s ease-in-out infinite;
        }

        @keyframes pfDrift1 {
          0%,100%{ transform:translate(0,0) scale(1); }
          50%    { transform:translate(3%,5%) scale(1.06); }
        }
        @keyframes pfDrift2 {
          0%,100%{ transform:translate(0,0); }
          50%    { transform:translate(-4%,-3%); }
        }

        /* ── Card ── */
        .pf-card {
          position: relative; z-index: 2;
          width: 100%; max-width: 460px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: clamp(28px,6vw,44px) clamp(24px,6vw,40px);
          backdrop-filter: blur(20px);
          animation: pfFadeUp 0.7s ease both;
        }

        @keyframes pfFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .pf-card-top {
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #f97316aa, #a855f7aa, transparent);
          border-radius: 20px 20px 0 0;
        }

        /* Corners */
        .pf-corner {
          position: absolute; width: 16px; height: 16px; opacity: 0.35;
        }
        .pf-corner.tl { top:12px; left:12px; border-top:1.5px solid #f97316; border-left:1.5px solid #f97316; }
        .pf-corner.tr { top:12px; right:12px; border-top:1.5px solid #f97316; border-right:1.5px solid #f97316; }
        .pf-corner.bl { bottom:12px; left:12px; border-bottom:1.5px solid #a855f7; border-left:1.5px solid #a855f7; }
        .pf-corner.br { bottom:12px; right:12px; border-bottom:1.5px solid #a855f7; border-right:1.5px solid #a855f7; }

        /* ── Header ── */
        .pf-header { text-align: center; margin-bottom: 28px; }

        .pf-icon-badge {
          width: 52px; height: 52px; border-radius: 14px;
          background: linear-gradient(135deg, #f9731622, #a855f722);
          border: 1px solid rgba(249,115,22,0.25);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; margin: 0 auto 14px;
        }

        .pf-eyebrow {
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.4em; text-transform: uppercase;
          color: rgba(255,255,255,0.2); margin-bottom: 8px;
        }

        .pf-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem,7vw,2.8rem);
          letter-spacing: 0.06em; line-height: 0.95;
        }
        .pf-title-submit {
          display: block;
          background: linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.5));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pf-title-problem {
          display: block;
          background: linear-gradient(135deg, #f97316 0%, #ec4899 55%, #a855f7 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Alerts ── */
        .pf-alert {
          display: flex; align-items: center; gap: 10px;
          padding: 11px 14px; border-radius: 10px;
          font-size: clamp(12px,2.4vw,13px); font-weight: 600;
          letter-spacing: 0.04em; margin-bottom: 20px;
        }
        .pf-alert.success {
          background: rgba(16,185,129,0.08);
          border: 1px solid rgba(16,185,129,0.2);
          color: #4ade80;
        }
        .pf-alert.error {
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.2);
          color: #f87171;
        }
        .pf-alert-dot {
          width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
        }

        /* ── Fields ── */
        .pf-field { margin-bottom: 18px; }

        .pf-label-row {
          display: flex; align-items: center; gap: 7px;
          margin-bottom: 8px;
        }
        .pf-label-icon { font-size: 14px; }
        .pf-label {
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.32em; text-transform: uppercase;
          color: rgba(255,255,255,0.28);
        }

        .pf-input-wrap { position: relative; }

        .pf-input {
          width: 100%;
          padding: 12px 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 10px;
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(13px,2.5vw,15px); font-weight: 600;
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.85);
          outline: none;
          transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
          -webkit-appearance: none;
        }
        .pf-input::placeholder {
          color: rgba(255,255,255,0.18); font-weight: 400;
        }
        .pf-input:focus {
          background: rgba(255,255,255,0.06);
          border-color: rgba(249,115,22,0.4);
          box-shadow: 0 0 0 3px rgba(249,115,22,0.07);
        }

        .pf-focus-bar {
          position: absolute; bottom: 0; left: 10%; right: 10%; height: 1px;
          background: linear-gradient(90deg, #f97316, #a855f7);
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.3s cubic-bezier(.4,0,.2,1);
          pointer-events: none;
        }
        .pf-input:focus ~ .pf-focus-bar { transform: scaleX(1); }

        /* ── Divider ── */
        .pf-divider {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
          margin: 6px 0 20px;
        }

        /* ── Submit Button ── */
        .pf-btn {
          width: 100%; padding: 13px;
          border-radius: 100px; border: none; cursor: pointer;
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(13px,2.5vw,15px); font-weight: 700;
          letter-spacing: 0.25em; text-transform: uppercase;
          color: #fff;
          background: linear-gradient(135deg, #f97316, #a855f7);
          box-shadow: 0 4px 24px rgba(249,115,22,0.3);
          transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .pf-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 36px rgba(249,115,22,0.5);
        }
        .pf-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        /* Spinner */
        .pf-spinner {
          width: 14px; height: 14px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: pfSpin 0.7s linear infinite;
        }
        @keyframes pfSpin { to { transform: rotate(360deg); } }

        /* ── Success state ── */
        .pf-success-state {
          text-align: center; padding: 12px 0;
        }
        .pf-success-icon {
          font-size: 40px; margin-bottom: 12px;
          display: block;
        }
        .pf-success-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.4rem,5vw,2rem);
          letter-spacing: 0.06em;
          background: linear-gradient(135deg, #4ade80, #06b6d4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }
        .pf-success-sub {
          font-size: clamp(12px,2.4vw,13px); color: rgba(255,255,255,0.3);
          letter-spacing: 0.06em;
        }
        .pf-success-btn {
          display: inline-flex; align-items: center; gap: 8px;
          margin-top: 20px; padding: 10px 28px; border-radius: 100px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          font-family: 'Rajdhani', sans-serif;
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.25em; text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          cursor: pointer; transition: background 0.25s, color 0.25s;
        }
        .pf-success-btn:hover {
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.75);
        }

        /* ── Footer ── */
        .pf-footer {
          text-align: center; margin-top: 18px;
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: rgba(255,255,255,0.1);
        }
      `}</style>

      <div className="pf-root">
        <div className="pf-orb pf-orb1" />
        <div className="pf-orb pf-orb2" />

        <div className="pf-card">
          <div className="pf-card-top" />
          <div className="pf-corner tl" /><div className="pf-corner tr" />
          <div className="pf-corner bl" /><div className="pf-corner br" />

          {/* Header */}
          <div className="pf-header">
            <div className="pf-icon-badge">🚀</div>
            <p className="pf-eyebrow">KrutiVerse Hackathon · 2K26</p>
            <h1 className="pf-title">
              <span className="pf-title-submit">Submit Your</span>
              <span className="pf-title-problem">Problem</span>
            </h1>
          </div>

          {/* Error alert */}
          {error && (
            <div className="pf-alert error">
              <span className="pf-alert-dot" style={{ background:"#f87171" }} />
              {error}
            </div>
          )}

          {/* Success state */}
          {submitted ? (
            <div className="pf-success-state">
              <span className="pf-success-icon">✅</span>
              <div className="pf-success-title">Submission Received!</div>
              <p className="pf-success-sub">Your problem has been submitted.<br />Good luck, team!</p>
              <button
                className="pf-success-btn"
                onClick={() => { setSubmitted(false); setMessage(""); }}
              >
                Submit Another →
              </button>
            </div>
          ) : (
            <>
              {/* Form */}
              {fields.map((f) => (
                <div key={f.name} className="pf-field">
                  <div className="pf-label-row">
                    <span className="pf-label-icon">{f.icon}</span>
                    <label className="pf-label" htmlFor={f.name}>{f.label}</label>
                  </div>
                  <div className="pf-input-wrap">
                    <input
                      id={f.name}
                      type={f.type}
                      name={f.name}
                      value={formData[f.name]}
                      onChange={handleChange}
                      onFocus={() => setFocused(f.name)}
                      onBlur={() => setFocused("")}
                      placeholder={f.placeholder}
                      required
                      className="pf-input"
                    />
                    <div
                      className="pf-focus-bar"
                      style={{
                        background: `linear-gradient(90deg, ${f.color1}, ${f.color2})`,
                      }}
                    />
                  </div>
                </div>
              ))}

              <div className="pf-divider" />

              <button
                className="pf-btn"
                disabled={loading}
                onClick={handleSubmit}
              >
                {loading ? (
                  <><div className="pf-spinner" /> Submitting...</>
                ) : (
                  <>Launch Submission →</>
                )}
              </button>
            </>
          )}

          <p className="pf-footer">TechKruti · TGPCET · Hackathon 2K26</p>
        </div>
      </div>
    </>
  );
};

export default ProblemForm;