import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

const fields = [
  { name: "name",     label: "Full Name",      type: "text",     placeholder: "Your name",          icon: "👤", color1: "#f97316", color2: "#facc15" },
  { name: "email",    label: "Email Address",   type: "email",    placeholder: "admin@tgpcet.ac.in", icon: "✉",  color1: "#06b6d4", color2: "#6366f1" },
  { name: "password", label: "Password",        type: "password", placeholder: "••••••••",           icon: "🔒", color1: "#ec4899", color2: "#a855f7" },
];

const RegisterForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage]   = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [done, setDone]         = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); setError(""); setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      // Save display name
      await updateProfile(cred.user, { displayName: formData.name });
      setMessage("Registration successful!");
      setFormData({ name: "", email: "", password: "" });
      setDone(true);
    } catch (err) {
      switch (err.code) {
        case "auth/email-already-in-use": setError("This email is already registered."); break;
        case "auth/invalid-email":        setError("Invalid email address."); break;
        case "auth/weak-password":        setError("Password must be at least 6 characters."); break;
        default: setError("Registration failed. " + err.message);
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

        .rf-root {
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

        .rf-root::before {
          content: ""; position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.022; pointer-events: none; z-index: 0;
        }
        .rf-root::after {
          content: ""; position: absolute; inset: 0;
          background-image: repeating-linear-gradient(
            to bottom, transparent, transparent 3px,
            rgba(255,255,255,0.01) 3px, rgba(255,255,255,0.01) 4px
          );
          pointer-events: none; z-index: 0;
        }

        .rf-orb { position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none; z-index: 0; }
        .rf-orb1 { width: clamp(280px,55vw,650px); height: clamp(280px,55vw,650px); background: radial-gradient(circle, #ec4899, transparent 70%); top: -15%; right: -8%; opacity: 0.12; animation: rfD1 18s ease-in-out infinite; }
        .rf-orb2 { width: clamp(200px,40vw,520px); height: clamp(200px,40vw,520px); background: radial-gradient(circle, #7c3aed, transparent 70%); bottom: -10%; left: -8%; opacity: 0.13; animation: rfD2 22s ease-in-out infinite; }

        @keyframes rfD1 { 0%,100%{ transform:translate(0,0) scale(1); } 50%{ transform:translate(-3%,5%) scale(1.06); } }
        @keyframes rfD2 { 0%,100%{ transform:translate(0,0); } 50%{ transform:translate(4%,-3%); } }

        .rf-card {
          position: relative; z-index: 2;
          width: 100%; max-width: 420px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: clamp(28px,6vw,44px) clamp(24px,6vw,40px);
          backdrop-filter: blur(20px);
          animation: rfFadeUp 0.7s ease both;
        }

        @keyframes rfFadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }

        .rf-card-top { position: absolute; top:0; left:0; right:0; height:1px; background: linear-gradient(90deg, transparent, #ec4899aa, #a855f7aa, transparent); border-radius: 20px 20px 0 0; }

        .rf-corner { position: absolute; width:16px; height:16px; opacity:0.35; }
        .rf-corner.tl { top:12px; left:12px; border-top:1.5px solid #ec4899; border-left:1.5px solid #ec4899; }
        .rf-corner.tr { top:12px; right:12px; border-top:1.5px solid #ec4899; border-right:1.5px solid #ec4899; }
        .rf-corner.bl { bottom:12px; left:12px; border-bottom:1.5px solid #a855f7; border-left:1.5px solid #a855f7; }
        .rf-corner.br { bottom:12px; right:12px; border-bottom:1.5px solid #a855f7; border-right:1.5px solid #a855f7; }

        .rf-header { text-align:center; margin-bottom:28px; }

        .rf-icon-badge { width:52px; height:52px; border-radius:14px; background: linear-gradient(135deg, #ec489922, #a855f722); border: 1px solid rgba(236,72,153,0.25); display:flex; align-items:center; justify-content:center; font-size:22px; margin:0 auto 14px; }

        .rf-eyebrow { font-size:10px; font-weight:700; letter-spacing:0.4em; text-transform:uppercase; color:rgba(255,255,255,0.2); margin-bottom:8px; }

        .rf-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(1.8rem,7vw,2.8rem); letter-spacing:0.06em; line-height:0.95; }
        .rf-title-admin { display:block; background:linear-gradient(135deg,#fff 30%,rgba(255,255,255,0.5)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .rf-title-register { display:block; background:linear-gradient(135deg,#ec4899 0%,#f97316 55%,#a855f7 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }

        .rf-alert { display:flex; align-items:center; gap:10px; padding:11px 14px; border-radius:10px; font-size:clamp(12px,2.4vw,13px); font-weight:600; letter-spacing:0.04em; margin-bottom:20px; }
        .rf-alert.success { background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.2); color:#4ade80; }
        .rf-alert.error   { background:rgba(239,68,68,0.08);  border:1px solid rgba(239,68,68,0.2);  color:#f87171; }
        .rf-alert-dot { width:6px; height:6px; border-radius:50%; flex-shrink:0; }

        .rf-field { margin-bottom:18px; }
        .rf-label-row { display:flex; align-items:center; gap:7px; margin-bottom:8px; }
        .rf-label-icon { font-size:13px; }
        .rf-label { font-size:10px; font-weight:700; letter-spacing:0.32em; text-transform:uppercase; color:rgba(255,255,255,0.28); }

        .rf-input-wrap { position:relative; }

        .rf-input { width:100%; padding:12px 16px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.09); border-radius:10px; font-family:'Rajdhani',sans-serif; font-size:clamp(13px,2.5vw,15px); font-weight:600; letter-spacing:0.05em; color:rgba(255,255,255,0.85); outline:none; transition:border-color 0.25s, background 0.25s, box-shadow 0.25s; -webkit-appearance:none; }
        .rf-input::placeholder { color:rgba(255,255,255,0.18); font-weight:400; }
        .rf-input:focus { background:rgba(255,255,255,0.06); border-color:rgba(236,72,153,0.4); box-shadow:0 0 0 3px rgba(236,72,153,0.07); }

        .rf-focus-bar { position:absolute; bottom:0; left:10%; right:10%; height:1px; border-radius:2px; transform:scaleX(0); transition:transform 0.3s cubic-bezier(.4,0,.2,1); pointer-events:none; }
        .rf-input:focus ~ .rf-focus-bar { transform:scaleX(1); }

        .rf-divider { width:100%; height:1px; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent); margin:6px 0 20px; }

        .rf-btn { width:100%; padding:13px; border-radius:100px; border:none; cursor:pointer; font-family:'Rajdhani',sans-serif; font-size:clamp(13px,2.5vw,15px); font-weight:700; letter-spacing:0.25em; text-transform:uppercase; color:#fff; background:linear-gradient(135deg,#ec4899,#a855f7); box-shadow:0 4px 24px rgba(236,72,153,0.3); transition:transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s; display:flex; align-items:center; justify-content:center; gap:8px; margin-top:4px; }
        .rf-btn:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 8px 36px rgba(236,72,153,0.5); }
        .rf-btn:disabled { opacity:0.6; cursor:not-allowed; }

        .rf-spinner { width:14px; height:14px; border:2px solid rgba(255,255,255,0.3); border-top-color:#fff; border-radius:50%; animation:rfSpin 0.7s linear infinite; }
        @keyframes rfSpin { to { transform:rotate(360deg); } }

        .rf-login-link { text-align:center; margin-top:18px; font-size:11px; font-weight:700; letter-spacing:0.25em; text-transform:uppercase; color:rgba(255,255,255,0.2); }
        .rf-login-link a { color:rgba(236,72,153,0.7); text-decoration:none; transition:color 0.2s; }
        .rf-login-link a:hover { color:#ec4899; }

        .rf-success { text-align:center; padding:12px 0; }
        .rf-success-icon { font-size:44px; display:block; margin-bottom:14px; }
        .rf-success-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(1.5rem,5vw,2.2rem); letter-spacing:0.06em; background:linear-gradient(135deg,#4ade80,#06b6d4); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; margin-bottom:8px; }
        .rf-success-sub { font-size:clamp(12px,2.4vw,13px); color:rgba(255,255,255,0.28); letter-spacing:0.06em; line-height:1.7; }
        .rf-success-btn { display:inline-flex; align-items:center; gap:8px; margin-top:22px; padding:10px 28px; border-radius:100px; background:linear-gradient(135deg,#ec4899,#a855f7); font-family:'Rajdhani',sans-serif; font-size:12px; font-weight:700; letter-spacing:0.25em; text-transform:uppercase; color:#fff; text-decoration:none; box-shadow:0 4px 18px rgba(236,72,153,0.3); transition:transform 0.25s,box-shadow 0.25s; }
        .rf-success-btn:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(236,72,153,0.45); }

        .rf-footer { text-align:center; margin-top:20px; font-size:10px; font-weight:700; letter-spacing:0.3em; text-transform:uppercase; color:rgba(255,255,255,0.1); }
      `}</style>

      <div className="rf-root">
        <div className="rf-orb rf-orb1" />
        <div className="rf-orb rf-orb2" />

        <div className="rf-card">
          <div className="rf-card-top" />
          <div className="rf-corner tl" /><div className="rf-corner tr" />
          <div className="rf-corner bl" /><div className="rf-corner br" />

          <div className="rf-header">
            <div className="rf-icon-badge">📝</div>
            <p className="rf-eyebrow">TechKruti 2K26 · Admin</p>
            <h1 className="rf-title">
              <span className="rf-title-admin">Admin</span>
              <span className="rf-title-register">Register</span>
            </h1>
          </div>

          {error && (
            <div className="rf-alert error">
              <span className="rf-alert-dot" style={{ background:"#f87171" }} />
              {error}
            </div>
          )}

          {done ? (
            <div className="rf-success">
              <span className="rf-success-icon">✅</span>
              <div className="rf-success-title">Registered!</div>
              <p className="rf-success-sub">{message}<br />You can now log in.</p>
              <a href="/login" className="rf-success-btn">Go to Login →</a>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {fields.map((f) => (
                <div key={f.name} className="rf-field">
                  <div className="rf-label-row">
                    <span className="rf-label-icon">{f.icon}</span>
                    <label className="rf-label" htmlFor={f.name}>{f.label}</label>
                  </div>
                  <div className="rf-input-wrap">
                    <input
                      id={f.name} type={f.type} name={f.name}
                      value={formData[f.name]}
                      onChange={handleChange}
                      placeholder={f.placeholder}
                      required
                      className="rf-input"
                    />
                    <div
                      className="rf-focus-bar"
                      style={{ background:`linear-gradient(90deg,${f.color1},${f.color2})` }}
                    />
                  </div>
                </div>
              ))}

              <div className="rf-divider" />

              <button type="submit" className="rf-btn" disabled={loading}>
                {loading
                  ? <><div className="rf-spinner" /> Registering...</>
                  : <>Register →</>
                }
              </button>

              <p className="rf-login-link">
                Already have an account? <a href="/login">Login</a>
              </p>
            </form>
          )}

          <p className="rf-footer">TechKruti · TGPCET · Secured Access</p>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;