import React, { useEffect, useState } from "react";
import axios from "axios";

const ProblemList = () => {
  const [problems, setProblems]           = useState([]);
  const [loading, setLoading]             = useState(true);
  const [error, setError]                 = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [search, setSearch]               = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      fetchData();
    } else {
      setIsAuthenticated(false);
      setLoading(false);
    }
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://techkruti-backend.onrender.com/api/problem-form/getTeamData",
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setProblems(res.data.data);
    } catch {
      setError("Failed to load submissions.");
    } finally {
      setLoading(false);
    }
  };

  const filtered = problems.filter(
    (p) =>
      p.teamName?.toLowerCase().includes(search.toLowerCase()) ||
      p.problemCode?.toLowerCase().includes(search.toLowerCase())
  );

  /* ── Not authenticated ── */
  if (!isAuthenticated) return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;600;700&display=swap" rel="stylesheet" />
      <style>{baseStyles}</style>
      <div className="pl-root" style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
        <div className="pl-orb pl-orb1" /><div className="pl-orb pl-orb2" />
        <div style={{ textAlign:"center", zIndex:2, position:"relative" }}>
          <div style={{ fontSize:48, marginBottom:16 }}>🔒</div>
          <p style={{
            fontFamily:"'Bebas Neue',sans-serif",
            fontSize:"clamp(1.6rem,6vw,2.5rem)",
            letterSpacing:"0.06em",
            background:"linear-gradient(135deg,#f87171,#f97316)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
          }}>Access Denied</p>
          <p style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:13, letterSpacing:"0.25em",
            textTransform:"uppercase", color:"rgba(255,255,255,0.25)", marginTop:8 }}>
            Admin login required
          </p>
          <a href="/login" style={{
            display:"inline-flex", alignItems:"center", gap:8,
            marginTop:22, padding:"10px 28px", borderRadius:100,
            background:"linear-gradient(135deg,#f97316,#a855f7)",
            fontFamily:"'Rajdhani',sans-serif", fontSize:13, fontWeight:700,
            letterSpacing:"0.25em", textTransform:"uppercase",
            color:"#fff", textDecoration:"none",
            boxShadow:"0 4px 20px rgba(249,115,22,0.3)",
          }}>Login →</a>
        </div>
      </div>
    </>
  );

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;600;700&display=swap" rel="stylesheet" />
      <style>{baseStyles + tableStyles}</style>

      <div className="pl-root">
        <div className="pl-orb pl-orb1" /><div className="pl-orb pl-orb2" />

        <div className="pl-inner">

          {/* ── Header ── */}
          <div className="pl-header">
            <div className="pl-eyebrow">
              <span className="pl-eline l" />
              Admin Panel · TechKruti 2K26
              <span className="pl-eline r" />
            </div>
            <h1 className="pl-title">
              <span className="pl-title-submitted">Submitted</span>
              <span className="pl-title-problems">Problems</span>
            </h1>
            <p className="pl-desc">All hackathon team submissions in real-time.</p>
          </div>

          {/* ── Stats row ── */}
          {!loading && !error && (
            <div className="pl-stats">
              {[
                { label:"Total Submissions", value: problems.length, color:"#f97316" },
                { label:"Filtered Results",  value: filtered.length, color:"#06b6d4" },
              ].map((s, i) => (
                <div key={i} className="pl-stat-card">
                  <span className="pl-stat-value" style={{
                    background:`linear-gradient(135deg, ${s.color}, #a855f7)`,
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                    backgroundClip:"text",
                  }}>{s.value}</span>
                  <span className="pl-stat-label">{s.label}</span>
                </div>
              ))}
              <button className="pl-refresh-btn" onClick={fetchData}>
                ↻ Refresh
              </button>
            </div>
          )}

          {/* ── Search ── */}
          {!loading && !error && problems.length > 0 && (
            <div className="pl-search-wrap">
              <span className="pl-search-icon">🔍</span>
              <input
                className="pl-search"
                type="text"
                placeholder="Search by team name or problem code..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          )}

          {/* ── Loading ── */}
          {loading && (
            <div className="pl-state-wrap">
              <div className="pl-spinner" />
              <p className="pl-state-text">Loading submissions...</p>
            </div>
          )}

          {/* ── Error ── */}
          {error && (
            <div className="pl-alert error">
              <span className="pl-alert-dot" style={{ background:"#f87171" }} />
              {error}
            </div>
          )}

          {/* ── Table ── */}
          {!loading && !error && (
            <div className="pl-table-wrap">
              {/* Desktop table */}
              <table className="pl-table">
                <thead>
                  <tr>
                    <th className="pl-th" style={{ width:40 }}>#</th>
                    <th className="pl-th">Team Name</th>
                    <th className="pl-th">Problem Code</th>
                    <th className="pl-th">Repository</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length > 0 ? (
                    filtered.map((p, i) => (
                      <tr key={p._id} className="pl-tr">
                        <td className="pl-td pl-td-num">{i + 1}</td>
                        <td className="pl-td">
                          <div className="pl-team-name">{p.teamName}</div>
                        </td>
                        <td className="pl-td">
                          <span className="pl-code-badge">{p.problemCode}</span>
                        </td>
                        <td className="pl-td">
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pl-repo-link"
                          >
                            View Repo →
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="pl-empty">
                        {search ? `No results for "${search}"` : "No submissions yet."}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Mobile cards */}
              <div className="pl-mobile-cards">
                {filtered.length > 0 ? filtered.map((p, i) => (
                  <div key={p._id} className="pl-mobile-card">
                    <span className="pl-mobile-num">{i + 1}</span>
                    <div className="pl-mobile-body">
                      <div className="pl-team-name" style={{ marginBottom:6 }}>{p.teamName}</div>
                      <span className="pl-code-badge" style={{ marginBottom:10, display:"inline-block" }}>{p.problemCode}</span>
                      <div>
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="pl-repo-link">
                          View Repo →
                        </a>
                      </div>
                    </div>
                  </div>
                )) : (
                  <div className="pl-empty" style={{ borderRadius:10, border:"1px solid rgba(255,255,255,0.06)", padding:24 }}>
                    {search ? `No results for "${search}"` : "No submissions yet."}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

const baseStyles = `
  *, *::before, *::after { box-sizing: border-box; }

  .pl-root {
    position: relative;
    min-height: 100svh;
    background: #050508;
    color: #fff;
    overflow: hidden;
    font-family: 'Rajdhani', sans-serif;
    isolation: isolate;
  }

  .pl-root::before {
    content: ""; position: absolute; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
    opacity: 0.022; pointer-events: none; z-index: 0;
  }
  .pl-root::after {
    content: ""; position: absolute; inset: 0;
    background-image: repeating-linear-gradient(
      to bottom, transparent, transparent 3px,
      rgba(255,255,255,0.01) 3px, rgba(255,255,255,0.01) 4px
    );
    pointer-events: none; z-index: 0;
  }

  .pl-orb {
    position: absolute; border-radius: 50%;
    filter: blur(100px); pointer-events: none; z-index: 0;
  }
  .pl-orb1 {
    width: clamp(280px,50vw,650px); height: clamp(280px,50vw,650px);
    background: radial-gradient(circle, #7c3aed, transparent 70%);
    top: -12%; left: -8%; opacity: 0.13;
    animation: plD1 20s ease-in-out infinite;
  }
  .pl-orb2 {
    width: clamp(200px,38vw,520px); height: clamp(200px,38vw,520px);
    background: radial-gradient(circle, #f97316, transparent 70%);
    bottom: -8%; right: -6%; opacity: 0.10;
    animation: plD2 24s ease-in-out infinite;
  }
  @keyframes plD1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(3%,5%) scale(1.06)} }
  @keyframes plD2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-4%,-3%)} }
`;

const tableStyles = `
  .pl-inner {
    position: relative; z-index: 2;
    max-width: 1000px; margin: 0 auto;
    padding: clamp(80px,10vw,120px) clamp(16px,4vw,40px) clamp(60px,8vw,100px);
    display: flex; flex-direction: column;
    gap: clamp(28px,5vw,44px);
  }

  /* Header */
  .pl-header { text-align: center; }
  .pl-eyebrow {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: clamp(9px,2vw,11px); font-weight: 700;
    letter-spacing: 0.38em; text-transform: uppercase;
    color: rgba(255,255,255,0.2); margin-bottom: 16px;
  }
  .pl-eline { width: 30px; height: 1px; }
  .pl-eline.l { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15)); }
  .pl-eline.r { background: linear-gradient(90deg, rgba(255,255,255,0.15), transparent); }

  .pl-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(2.6rem,11vw,6rem);
    letter-spacing: 0.05em; line-height: 0.9; margin-bottom: 14px;
  }
  .pl-title-submitted {
    display: block;
    background: linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.45));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .pl-title-problems {
    display: block;
    background: linear-gradient(135deg, #f97316 0%, #ec4899 55%, #a855f7 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .pl-desc {
    font-size: clamp(12px,2.4vw,14px); color: rgba(255,255,255,0.28);
    letter-spacing: 0.06em;
  }

  /* Stats */
  .pl-stats {
    display: flex; flex-wrap: wrap;
    align-items: center; gap: clamp(10px,2.5vw,16px);
  }
  .pl-stat-card {
    display: flex; flex-direction: column; gap: 3px;
    padding: clamp(12px,3vw,18px) clamp(18px,4vw,28px);
    background: rgba(255,255,255,0.025);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 12px; flex: 1; min-width: 120px;
  }
  .pl-stat-value {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(1.6rem,5vw,2.4rem);
    letter-spacing: 0.04em; line-height: 1;
  }
  .pl-stat-label {
    font-size: 10px; font-weight: 700;
    letter-spacing: 0.3em; text-transform: uppercase;
    color: rgba(255,255,255,0.22);
  }
  .pl-refresh-btn {
    padding: 10px 22px; border-radius: 100px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.09);
    font-family: 'Rajdhani', sans-serif;
    font-size: 12px; font-weight: 700;
    letter-spacing: 0.25em; text-transform: uppercase;
    color: rgba(255,255,255,0.35); cursor: pointer;
    transition: background 0.25s, color 0.25s, border-color 0.25s;
    white-space: nowrap;
  }
  .pl-refresh-btn:hover {
    background: rgba(249,115,22,0.1);
    border-color: rgba(249,115,22,0.3);
    color: #f97316;
  }

  /* Search */
  .pl-search-wrap {
    position: relative; display: flex; align-items: center;
  }
  .pl-search-icon {
    position: absolute; left: 14px; font-size: 14px;
    pointer-events: none; opacity: 0.4;
  }
  .pl-search {
    width: 100%; padding: 12px 16px 12px 40px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 10px;
    font-family: 'Rajdhani', sans-serif;
    font-size: clamp(13px,2.5vw,14px); font-weight: 600;
    letter-spacing: 0.05em; color: rgba(255,255,255,0.8);
    outline: none;
    transition: border-color 0.25s, box-shadow 0.25s;
  }
  .pl-search::placeholder { color: rgba(255,255,255,0.18); font-weight: 400; }
  .pl-search:focus {
    border-color: rgba(249,115,22,0.4);
    box-shadow: 0 0 0 3px rgba(249,115,22,0.07);
  }

  /* Loading */
  .pl-state-wrap {
    display: flex; flex-direction: column;
    align-items: center; gap: 14px; padding: 48px 0;
  }
  .pl-spinner {
    width: 32px; height: 32px;
    border: 2px solid rgba(255,255,255,0.08);
    border-top-color: #f97316;
    border-radius: 50%;
    animation: plSpin 0.8s linear infinite;
  }
  @keyframes plSpin { to { transform: rotate(360deg); } }
  .pl-state-text {
    font-size: 12px; font-weight: 700; letter-spacing: 0.3em;
    text-transform: uppercase; color: rgba(255,255,255,0.22);
  }

  /* Alert */
  .pl-alert {
    display: flex; align-items: center; gap: 10px;
    padding: 12px 16px; border-radius: 10px;
    font-size: clamp(12px,2.4vw,13px); font-weight: 600; letter-spacing: 0.04em;
  }
  .pl-alert.error {
    background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.2); color: #f87171;
  }
  .pl-alert-dot { width:6px; height:6px; border-radius:50%; flex-shrink:0; }

  /* Table wrapper */
  .pl-table-wrap {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px; overflow: hidden;
  }

  /* Desktop table */
  .pl-table { width: 100%; border-collapse: collapse; }

  @media(max-width: 640px) { .pl-table { display: none; } }

  .pl-th {
    padding: clamp(12px,2.5vw,16px) clamp(14px,3vw,20px);
    text-align: left;
    font-size: 10px; font-weight: 700; letter-spacing: 0.35em; text-transform: uppercase;
    color: rgba(255,255,255,0.22);
    background: rgba(255,255,255,0.03);
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }

  .pl-tr {
    border-bottom: 1px solid rgba(255,255,255,0.04);
    transition: background 0.2s;
  }
  .pl-tr:last-child { border-bottom: none; }
  .pl-tr:hover { background: rgba(255,255,255,0.03); }

  .pl-td {
    padding: clamp(12px,2.5vw,16px) clamp(14px,3vw,20px);
    font-size: clamp(12px,2.4vw,14px);
    vertical-align: middle;
  }
  .pl-td-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(14px,3vw,18px);
    color: rgba(255,255,255,0.18);
    letter-spacing: 0.04em;
    width: 40px;
  }

  .pl-team-name {
    font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
    background: linear-gradient(135deg, #fff 20%, rgba(255,255,255,0.55));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: clamp(13px,2.4vw,15px);
  }

  .pl-code-badge {
    display: inline-block;
    padding: 4px 12px; border-radius: 100px;
    background: rgba(249,115,22,0.1);
    border: 1px solid rgba(249,115,22,0.25);
    font-size: 11px; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: #f97316;
  }

  .pl-repo-link {
    display: inline-flex; align-items: center; gap: 5px;
    font-size: 12px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
    color: rgba(6,182,212,0.7); text-decoration: none;
    transition: color 0.2s;
  }
  .pl-repo-link:hover { color: #06b6d4; }

  .pl-empty {
    padding: 40px; text-align: center;
    font-size: 12px; font-weight: 700; letter-spacing: 0.3em; text-transform: uppercase;
    color: rgba(255,255,255,0.2);
  }

  /* Mobile cards */
  .pl-mobile-cards { display: none; padding: 16px; }
  @media(max-width: 640px) { .pl-mobile-cards { display: flex; flex-direction: column; gap: 10px; } }

  .pl-mobile-card {
    display: flex; gap: 12px; align-items: flex-start;
    padding: 16px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 12px;
  }
  .pl-mobile-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 20px; color: rgba(255,255,255,0.15);
    letter-spacing: 0.04em; flex-shrink: 0; width: 24px;
    line-height: 1.2;
  }
  .pl-mobile-body { flex: 1; min-width: 0; }
`;

export default ProblemList;