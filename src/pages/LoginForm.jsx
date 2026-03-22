import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage]   = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [focused, setFocused]   = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); setError(""); setLoading(true);
    try {
      const cred = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const token = await cred.user.getIdToken();
      localStorage.setItem("token", token);
      localStorage.setItem("isAdmin", true);
      setMessage("Login successful! Redirecting...");
      setTimeout(() => { window.location.href = "/repos"; }, 1500);
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
        case "auth/invalid-credential":  setError("Invalid email or password."); break;
        case "auth/wrong-password":      setError("Incorrect password. Try again."); break;
        case "auth/invalid-email":       setError("Invalid email address."); break;
        case "auth/too-many-requests":   setError("Too many attempts. Try again later."); break;
        default: setError("Login failed. " + err.message);
      }
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

        .lf-root {
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

        .lf-root::before {
          content: ""; position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.022; pointer-events: none; z-index: 0;
        }
        .lf-root::after {
          content: ""; position: absolute; inset: 0;
          background-image: repeating-linear-gradient(
            to bottom, transparent, transparent 3px,
            rgba(255,255,255,0.01) 3px, rgba(255,255,255,0.01) 4px
          );
          pointer-events: none; z-index: 0;
        }

        .lf-orb {
          position: absolute; border-radius: 50%;
          filter: blur(100px); pointer-events: none; z-index: 0;
        }
        .lf-orb1 {
          width: clamp(280px,55vw,650px); height: clamp(280px,55vw,650px);
          background: radial-gradient(circle, #7c3aed, transparent 70%);
          top: -15%; left: -10%; opacity: 0.18;
          animation: lfDrift1 18s ease-in-out infinite;
        }
        .lf-orb2 {
          width: clamp(200px,40vw,520px); height: clamp(200px,40vw,520px);
          background: radial-gradient(circle, #f97316, transparent 70%);
          bottom: -10%; right: -8%; opacity: 0.13;
          animation: lfDrift2 22s ease-in-out infinite;
        }

        @keyframes lfDrift1 { 0%,100%{ transform:translate(0,0) scale(1); } 50%{ transform:translate(3%,5%) scale(1.06); } }
        @keyframes lfDrift2 { 0%,100%{ transform:translate(0,0); } 50%{ transform:translate(-4%,-3%); } }

        .lf-card {
          position: relative; z-index: 2;
          width: 100%; max-width: 420px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: clamp(28px,6vw,44px) clamp(24px,6vw,40px);
          backdrop-filter: blur(20px);
          animation: lfFadeUp 0.7s ease both;
        }

        @keyframes lfFadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }

        .lf-card-top {
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #f97316aa, #a855f7aa, transparent);
          border-radius: 20px 20px 0 0;
        }

        .lf-corner { position: absolute; width: 16px; height: 16px; opacity: 0.4; }
        .lf-corner.tl { top: 12px; left: 12px; border-top: 1.5px solid #f97316; border-left: 1.5px solid #f97316; }
        .lf-corner.tr { top: 12px; right: 12px; border-top: 1.5px solid #f97316; border-right: 1.5px solid #f97316; }
        .lf-corner.bl { bottom: 12px; left: 12px; border-bottom: 1.5px solid #a855f7; border-left: 1.5px solid #a855f7; }
        .lf-corner.br { bottom: 12px; right: 12px; border-bottom: 1.5px solid #a855f7; border-right: 1.5px solid #a855f7; }

        .lf-header { text-align: center; margin-bottom: 28px; }

        .lf-lock-icon {
          width: 52px; height: 52px; border-radius: 14px;
          background: linear-gradient(135deg, #f9731622, #a855f722);
          border: 1px solid rgba(249,115,22,0.25);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; margin: 0 auto 16px;
        }

        .lf-eyebrow {
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.4em; text-transform: uppercase;
          color: rgba(255,255,255,0.2); margin-bottom: 8px;
        }

        .lf-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2rem,8vw,3rem);
          letter-spacing: 0.06em; line-height: 0.95;
        }
        .lf-title-admin {
          display: block;
          background: linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.5));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .lf-title-login {
          display: block;
          background: linear-gradient(135deg, #f97316 0%, #ec4899 55%, #a855f7 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .lf-alert {
          display: flex; align-items: center; gap: 10px;
          padding: 11px 14px; border-radius: 10px;
          font-size: clamp(12px,2.4vw,13px); font-weight: 600;
          letter-spacing: 0.04em; margin-bottom: 20px;
        }
        .lf-alert.success { background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.2); color: #4ade80; }
        .lf-alert.error   { background: rgba(239,68,68,0.08);  border: 1px solid rgba(239,68,68,0.2);  color: #f87171; }
        .lf-alert-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }

        .lf-field { margin-bottom: 18px; }

        .lf-label {
          display: block;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: rgba(255,255,255,0.28); margin-bottom: 8px;
        }

        .lf-input-wrap { position: relative; }

        .lf-input {
          width: 100%; padding: 12px 16px;
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
        .lf-input::placeholder { color: rgba(255,255,255,0.18); font-weight: 400; }
        .lf-input:focus {
          background: rgba(255,255,255,0.06);
          border-color: rgba(249,115,22,0.45);
          box-shadow: 0 0 0 3px rgba(249,115,22,0.08);
        }

        .lf-focus-bar {
          position: absolute; bottom: 0; left: 10%; right: 10%; height: 1px;
          background: linear-gradient(90deg, #f97316, #a855f7);
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.3s cubic-bezier(.4,0,.2,1);
        }
        .lf-input:focus ~ .lf-focus-bar { transform: scaleX(1); }

        .lf-btn {
          width: 100%; padding: 13px;
          border-radius: 100px; border: none; cursor: pointer;
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(13px,2.5vw,15px); font-weight: 700;
          letter-spacing: 0.25em; text-transform: uppercase;
          color: #fff;
          background: linear-gradient(135deg, #f97316, #a855f7);
          box-shadow: 0 4px 24px rgba(249,115,22,0.3);
          transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s;
          margin-top: 6px;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .lf-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 36px rgba(249,115,22,0.5); }
        .lf-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .lf-spinner {
          width: 14px; height: 14px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff; border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .lf-footer-text {
          text-align: center; margin-top: 20px;
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: rgba(255,255,255,0.12);
        }
      `}</style>

      <div className="lf-root">
        <div className="lf-orb lf-orb1" />
        <div className="lf-orb lf-orb2" />

        <div className="lf-card">
          <div className="lf-card-top" />
          <div className="lf-corner tl" />
          <div className="lf-corner tr" />
          <div className="lf-corner bl" />
          <div className="lf-corner br" />

          <div className="lf-header">
            <div className="lf-lock-icon">🔑</div>
            <p className="lf-eyebrow">TechKruti 2K26</p>
            <h1 className="lf-title">
              <span className="lf-title-admin">Admin</span>
              <span className="lf-title-login">Login</span>
            </h1>
          </div>

          {message && (
            <div className="lf-alert success">
              <span className="lf-alert-dot" style={{ background: "#4ade80" }} />
              {message}
            </div>
          )}
          {error && (
            <div className="lf-alert error">
              <span className="lf-alert-dot" style={{ background: "#f87171" }} />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="lf-field">
              <label className="lf-label" htmlFor="email">Email Address</label>
              <div className="lf-input-wrap">
                <input
                  id="email" type="email" name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  placeholder="admin@tgpcet.ac.in"
                  required
                  className="lf-input"
                />
                <div className="lf-focus-bar" />
              </div>
            </div>

            <div className="lf-field">
              <label className="lf-label" htmlFor="password">Password</label>
              <div className="lf-input-wrap">
                <input
                  id="password" type="password" name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => setFocused("password")}
                  onBlur={() => setFocused("")}
                  placeholder="••••••••"
                  required
                  className="lf-input"
                />
                <div className="lf-focus-bar" />
              </div>
            </div>

            <button type="submit" className="lf-btn" disabled={loading}>
              {loading ? (
                <><div className="lf-spinner" /> Logging in...</>
              ) : (
                <>Login →</>
              )}
            </button>
          </form>

          <p className="lf-footer-text">TechKruti · TGPCET · Secured Access</p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;