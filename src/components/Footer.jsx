import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook, FaYoutube, FaLinkedin, FaInstagram,
  FaMapMarkerAlt, FaCalendarAlt, FaEnvelope
} from "react-icons/fa";

const socials = [
  { icon: <FaInstagram />,  href: "https://www.instagram.com/ds_tgpcet/?hl=en", label: "Instagram", hoverColor: "#e1306c" },
  { icon: <FaLinkedin />,   href: "#", label: "LinkedIn",  hoverColor: "#0a66c2" },
  { icon: <FaFacebook />,   href: "#", label: "Facebook",  hoverColor: "#1877f2" },
  { icon: <FaYoutube />,    href: "#", label: "YouTube",   hoverColor: "#ff0000" },
];

const quickLinks = [
  { to: "/",        label: "Home" },
  { to: "/about",   label: "About" },
  { to: "/event",   label: "Events" },
  { to: "/Sponsor", label: "Sponsors" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        .ft-root {
          position: relative;
          background: #030305;
          color: #fff;
          overflow: hidden;
          font-family: 'Rajdhani', sans-serif;
          isolation: isolate;
        }

        /* ── Top border gradient ── */
        .ft-top-border {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(249,115,22,0.5), rgba(168,85,247,0.5), transparent);
        }

        /* ── Noise grain ── */
        .ft-root::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.022;
          pointer-events: none;
          z-index: 0;
        }

        /* ── Orbs ── */
        .ft-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }
        .ft-orb1 {
          width: clamp(250px, 40vw, 550px);
          height: clamp(250px, 40vw, 550px);
          background: radial-gradient(circle, #7c3aed, transparent 70%);
          bottom: -20%; left: -8%;
          opacity: 0.13;
        }
        .ft-orb2 {
          width: clamp(200px, 35vw, 480px);
          height: clamp(200px, 35vw, 480px);
          background: radial-gradient(circle, #0e7490, transparent 70%);
          top: -10%; right: -6%;
          opacity: 0.12;
        }

        /* ── Inner ── */
        .ft-inner {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(48px, 8vw, 80px) clamp(20px, 5vw, 48px);
        }

        /* ── Brand block ── */
        .ft-brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
          grid-area: brand;
        }

        .ft-brand-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2rem, 6vw, 3.2rem);
          letter-spacing: 0.06em;
          line-height: 0.92;
        }

        .ft-brand-tech {
          background: linear-gradient(135deg, #fff 40%, rgba(255,255,255,0.5));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ft-brand-kruti {
          background: linear-gradient(135deg, #f97316, #ec4899, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ft-brand-year {
          display: inline-block;
          font-size: clamp(9px, 1.6vw, 11px);
          font-weight: 700;
          letter-spacing: 0.5em;
          color: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 3px 12px;
          margin-top: 4px;
        }

        .ft-brand-desc {
          font-size: clamp(12px, 2.2vw, 14px);
          color: rgba(255,255,255,0.38);
          line-height: 1.75;
          max-width: 280px;
          letter-spacing: 0.03em;
        }

        /* ── Grid ── */
        .ft-grid {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas:
            "brand"
            "details"
            "links"
            "map";
          gap: clamp(36px, 6vw, 56px);
        }

        @media (min-width: 640px) {
          .ft-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
              "brand  details"
              "links  map";
          }
        }

        @media (min-width: 1024px) {
          .ft-grid {
            grid-template-columns: 2fr 1.2fr 1fr 1.8fr;
            grid-template-areas: "brand details links map";
          }
        }

        /* ── Section heading ── */
        .ft-section-title {
          font-size: clamp(10px, 2vw, 12px);
          font-weight: 700;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .ft-section-title::after {
          content: "";
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.08), transparent);
        }

        /* ── Event details ── */
        .ft-details { grid-area: details; }

        .ft-detail-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
        }

        .ft-detail-icon {
          width: 32px;
          height: 32px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #f97316;
          font-size: 13px;
        }

        .ft-detail-text {
          font-size: clamp(12px, 2.2vw, 14px);
          color: rgba(255,255,255,0.45);
          line-height: 1.6;
          letter-spacing: 0.03em;
        }

        .ft-detail-label {
          display: block;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-bottom: 2px;
        }

        /* ── Quick links ── */
        .ft-links { grid-area: links; }

        .ft-link-item {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: rgba(255,255,255,0.38);
          font-size: clamp(12px, 2.4vw, 14px);
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 7px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: color 0.25s ease, gap 0.25s ease;
          position: relative;
        }

        .ft-link-item::before {
          content: "→";
          font-size: 11px;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.25s, transform 0.25s;
          color: #f97316;
        }

        .ft-link-item:hover {
          color: rgba(255,255,255,0.85);
          gap: 12px;
        }

        .ft-link-item:hover::before {
          opacity: 1;
          transform: translateX(0);
        }

        /* ── Map ── */
        .ft-map { grid-area: map; }

        .ft-map-frame {
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          position: relative;
        }

        .ft-map-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 10px;
          box-shadow: inset 0 0 0 1px rgba(249,115,22,0.15);
          pointer-events: none;
        }

        .ft-map-frame iframe {
          display: block;
          width: 100%;
          height: clamp(140px, 20vw, 180px);
          filter: invert(90%) hue-rotate(180deg) saturate(0.4) brightness(0.75);
        }

        /* ── Divider ── */
        .ft-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
          margin: clamp(36px, 6vw, 52px) 0 clamp(28px, 5vw, 40px);
        }

        /* ── Bottom strip ── */
        .ft-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        @media (min-width: 768px) {
          .ft-bottom {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        /* ── Socials ── */
        .ft-socials {
          display: flex;
          gap: 10px;
        }

        .ft-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.4);
          font-size: 15px;
          text-decoration: none;
          transition: background 0.3s, color 0.3s, border-color 0.3s, transform 0.3s, box-shadow 0.3s;
        }

        .ft-social-btn:hover {
          transform: translateY(-4px);
          color: #fff;
          border-color: rgba(255,255,255,0.15);
        }

        /* ── Copyright ── */
        .ft-copy {
          text-align: center;
        }

        .ft-copy-main {
          font-size: clamp(10px, 2vw, 12px);
          font-weight: 600;
          letter-spacing: 0.25em;
          color: rgba(255,255,255,0.2);
          text-transform: uppercase;
        }

        .ft-copy-sub {
          font-size: 10px;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.1);
          margin-top: 4px;
        }

        .ft-copy-heart {
          color: #ec4899;
        }

        /* ── Contact email ── */
        .ft-email-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: clamp(11px, 2vw, 13px);
          font-weight: 600;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.25);
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.25s;
        }

        .ft-email-link:hover {
          color: rgba(255,255,255,0.7);
        }

        .ft-email-icon {
          color: #f97316;
          font-size: 13px;
        }
      `}</style>

      <footer className="ft-root">
        {/* Top border */}
        <div className="ft-top-border" />

        {/* Orbs */}
        <div className="ft-orb ft-orb1" />
        <div className="ft-orb ft-orb2" />

        <div className="ft-inner">

          {/* Main Grid */}
          <div className="ft-grid">

            {/* ── Brand ── */}
            <div className="ft-brand">
              <div>
                <div className="ft-brand-name">
                  <span className="ft-brand-tech">TECH</span>
                  <span className="ft-brand-kruti">KRUTI</span>
                </div>
                <span className="ft-brand-year">2 0 2 6</span>
              </div>
              <p className="ft-brand-desc">
                Annual national-level tech fest organized by the CSE &amp; Data Science
                department of TGPCET Mohgaon. Innovation, coding &amp; competitions.
              </p>
            </div>

            {/* ── Event Details ── */}
            <div className="ft-details">
              <div className="ft-section-title">Event Details</div>

              <div className="ft-detail-row">
                <div className="ft-detail-icon"><FaCalendarAlt /></div>
                <div className="ft-detail-text">
                  <span className="ft-detail-label">Date</span>
                  24 – 25 March 2026
                </div>
              </div>

              <div className="ft-detail-row">
                <div className="ft-detail-icon"><FaMapMarkerAlt /></div>
                <div className="ft-detail-text">
                  <span className="ft-detail-label">Venue</span>
                  TGPCET, Mohgaon, Nagpur
                </div>
              </div>

              <div className="ft-detail-row">
                <div className="ft-detail-icon"><FaEnvelope /></div>
                <div className="ft-detail-text">
                  <span className="ft-detail-label">Contact</span>
                  <a
                    href="mailto:techkruti.ds@tgpcet.com"
                    className="ft-email-link"
                    style={{ fontSize: "inherit", letterSpacing: "0.04em", textTransform: "none" }}
                  >
                    techkruti.ds@tgpcet.com
                  </a>
                </div>
              </div>
            </div>

            {/* ── Quick Links ── */}
            <div className="ft-links">
              <div className="ft-section-title">Navigate</div>
              {quickLinks.map((l) => (
                <Link key={l.to} to={l.to} className="ft-link-item">
                  {l.label}
                </Link>
              ))}
            </div>

            {/* ── Map ── */}
            <div className="ft-map">
              <div className="ft-section-title">Location</div>
              <div className="ft-map-frame">
                <iframe
                  title="tgpcet-location"
                  src="https://www.google.com/maps?q=TGPCET%20Mohgaon%20Nagpur&output=embed"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="ft-divider" />

          {/* Bottom strip */}
          <div className="ft-bottom">

            {/* Socials */}
            <div className="ft-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="ft-social-btn"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = s.hoverColor + "22";
                    e.currentTarget.style.borderColor = s.hoverColor + "55";
                    e.currentTarget.style.color = s.hoverColor;
                    e.currentTarget.style.boxShadow = `0 0 18px ${s.hoverColor}33`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "";
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.color = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="ft-copy">
              <p className="ft-copy-main">© 2026 TechKruti · TGPCET Mohgaon</p>
              <p className="ft-copy-sub">
                Developed with <span className="ft-copy-heart">♥</span> by TechKruti Dev Team
              </p>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;