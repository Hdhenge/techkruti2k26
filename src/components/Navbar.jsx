import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Rocket, LogIn, LogOut,
  Code2, Home, Contact, Info, BookImage,
} from "lucide-react";

const navLinks = [
  { name: "Home",           path: "/",          icon: <Home size={15} /> },
  { name: "KrutiVerse Hack",path: "/hackthon",  icon: <Rocket size={15} /> },
  { name: "About",          path: "/about",     icon: <Info size={15} /> },
  { name: "Gallery",        path: "/gallery",   icon: <BookImage size={15} /> },
  { name: "Contact",        path: "/contact",   icon: <Contact size={15} /> },
  // { name: "Register Problem", path: "/ProblemForm", icon: <Code2 size={15} /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen]               = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const location                          = useLocation();

  /* ── Auth ── */
  const checkAuth = () => setIsAuthenticated(!!localStorage.getItem("token"));

  useEffect(() => {
    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Body lock ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* ── Close on route change ── */
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        /* ── Nav root ── */
        .nb-root {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          z-index: 9999;
          font-family: 'Rajdhani', sans-serif;
          transition: background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
        }

        .nb-root.scrolled {
          background: rgba(3,3,5,0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(249,115,22,0.12);
          box-shadow: 0 4px 40px rgba(0,0,0,0.6), 0 1px 0 rgba(249,115,22,0.08);
        }

        .nb-root.top {
          background: rgba(3,3,5,0.5);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }

        /* ── Top accent line ── */
        .nb-accent-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(249,115,22,0.6) 30%,
            rgba(168,85,247,0.6) 70%,
            transparent 100%
          );
        }

        /* ── Inner ── */
        .nb-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(16px, 4vw, 40px);
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        /* ── Logo ── */
        .nb-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
          user-select: none;
        }

        .nb-logo-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #f97316, #a855f7);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 0 14px rgba(249,115,22,0.35);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .nb-logo:hover .nb-logo-icon {
          box-shadow: 0 0 24px rgba(249,115,22,0.6);
          transform: rotate(-6deg) scale(1.05);
        }

        .nb-logo-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.3rem, 3.5vw, 1.8rem);
          letter-spacing: 0.06em;
          line-height: 1;
        }

        .nb-logo-tech {
          background: linear-gradient(135deg, #fff 40%, rgba(255,255,255,0.55));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nb-logo-kruti {
          background: linear-gradient(135deg, #f97316, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nb-logo-year {
          font-family: 'Rajdhani', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.35em;
          color: rgba(255,255,255,0.25);
          margin-left: 3px;
        }

        /* ── Desktop nav links ── */
        .nb-links {
          display: none;
          align-items: center;
          gap: clamp(4px, 2vw, 8px);
          list-style: none;
        }

        @media (min-width: 900px) {
          .nb-links { display: flex; }
        }

        .nb-link {
          position: relative;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: clamp(12px, 1.5vw, 14px);
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.42);
          transition: color 0.25s ease, background 0.25s ease;
          white-space: nowrap;
        }

        .nb-link svg {
          flex-shrink: 0;
          transition: color 0.25s ease;
        }

        .nb-link::after {
          content: "";
          position: absolute;
          bottom: 2px; left: 12px; right: 12px;
          height: 1.5px;
          background: linear-gradient(90deg, #f97316, #ec4899);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(.4,0,.2,1);
        }

        .nb-link:hover,
        .nb-link.active {
          color: rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.04);
        }

        .nb-link.active::after,
        .nb-link:hover::after {
          transform: scaleX(1);
        }

        .nb-link.active {
          color: #f97316;
        }

        /* ── Right CTA ── */
        .nb-right {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .nb-cta {
          display: none;
          align-items: center;
          gap: 7px;
          padding: 8px 20px;
          border-radius: 100px;
          font-family: 'Rajdhani', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
        }

        @media (min-width: 900px) {
          .nb-cta { display: flex; }
        }

        .nb-cta-login {
          background: linear-gradient(135deg, #f97316, #a855f7);
          color: #fff;
          box-shadow: 0 0 16px rgba(249,115,22,0.35);
        }

        .nb-cta-login:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 28px rgba(249,115,22,0.6);
        }

        .nb-cta-logout {
          background: rgba(239,68,68,0.12);
          border: 1px solid rgba(239,68,68,0.25);
          color: rgba(239,68,68,0.8);
          box-shadow: none;
        }

        .nb-cta-logout:hover {
          background: rgba(239,68,68,0.2);
          border-color: rgba(239,68,68,0.5);
          color: #ef4444;
          transform: translateY(-2px);
        }

        /* ── Hamburger ── */
        .nb-hamburger {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          transition: background 0.25s, color 0.25s, border-color 0.25s;
        }

        .nb-hamburger:hover {
          background: rgba(249,115,22,0.1);
          border-color: rgba(249,115,22,0.3);
          color: #f97316;
        }

        @media (min-width: 900px) {
          .nb-hamburger { display: none; }
        }

        /* ── Mobile drawer ── */
        .nb-drawer {
          position: fixed;
          top: 0; left: 0;
          width: min(80vw, 320px);
          height: 100svh;
          background: rgba(5,5,10,0.97);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-right: 1px solid rgba(249,115,22,0.1);
          z-index: 9998;
          display: flex;
          flex-direction: column;
          padding: 0 0 32px;
          overflow-y: auto;
        }

        .nb-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          height: 64px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          flex-shrink: 0;
        }

        .nb-drawer-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.3rem;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.4);
        }

        .nb-drawer-close {
          width: 34px; height: 34px;
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.5);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }

        .nb-drawer-close:hover {
          background: rgba(239,68,68,0.12);
          color: #ef4444;
        }

        .nb-drawer-links {
          flex: 1;
          padding: 24px 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nb-drawer-link {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 13px 16px;
          border-radius: 10px;
          text-decoration: none;
          color: rgba(255,255,255,0.45);
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: 1px solid transparent;
          transition: all 0.25s ease;
        }

        .nb-drawer-link:hover,
        .nb-drawer-link.active {
          background: rgba(249,115,22,0.07);
          border-color: rgba(249,115,22,0.15);
          color: rgba(255,255,255,0.85);
        }

        .nb-drawer-link.active {
          color: #f97316;
        }

        .nb-drawer-icon {
          width: 34px; height: 34px;
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          color: rgba(249,115,22,0.6);
          transition: background 0.25s, border-color 0.25s;
        }

        .nb-drawer-link:hover .nb-drawer-icon,
        .nb-drawer-link.active .nb-drawer-icon {
          background: rgba(249,115,22,0.1);
          border-color: rgba(249,115,22,0.25);
          color: #f97316;
        }

        .nb-drawer-footer {
          padding: 0 16px;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 20px;
          flex-shrink: 0;
        }

        .nb-drawer-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 13px 20px;
          border-radius: 100px;
          font-family: 'Rajdhani', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: opacity 0.25s, transform 0.25s;
        }

        .nb-drawer-cta:hover { opacity: 0.88; transform: translateY(-1px); }

        .nb-drawer-cta-login {
          background: linear-gradient(135deg, #f97316, #a855f7);
          color: #fff;
          box-shadow: 0 4px 24px rgba(249,115,22,0.3);
        }

        .nb-drawer-cta-logout {
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.25) !important;
          color: #ef4444;
        }

        /* ── Overlay ── */
        .nb-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(2px);
          z-index: 9997;
        }
      `}</style>

      {/* ── Navbar ── */}
      <nav className={`nb-root ${scrolled ? "scrolled" : "top"}`}>
        <div className="nb-accent-line" />

        <div className="nb-inner">

          {/* Logo */}
          <Link to="/" className="nb-logo">
            <div className="nb-logo-icon">
              <Code2 color="#fff" size={20} />
            </div>
            <div className="nb-logo-text">
              <span className="nb-logo-tech">TECH</span>
              <span className="nb-logo-kruti">KRUTI</span>
              <span className="nb-logo-year"> 2K26</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="nb-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nb-link ${location.pathname === link.path ? "active" : ""}`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="nb-right">
            {isAuthenticated ? (
              <button onClick={handleLogout} className="nb-cta nb-cta-logout">
                <LogOut size={14} />
                Logout
              </button>
            ) : (
              <Link to="/login" className="nb-cta nb-cta-login">
                <LogIn size={14} />
                Admin Login
              </Link>
            )}

            {/* Hamburger */}
            <button
              className="nb-hamburger"
              onClick={() => setIsOpen((p) => !p)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile Drawer + Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="nb-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="nb-drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Header */}
              <div className="nb-drawer-header">
                <span className="nb-drawer-title">MENU</span>
                <button
                  className="nb-drawer-close"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Links */}
              <div className="nb-drawer-links">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`nb-drawer-link ${location.pathname === link.path ? "active" : ""}`}
                    >
                      <div className="nb-drawer-icon">{link.icon}</div>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="nb-drawer-footer">
                {isAuthenticated ? (
                  <button
                    onClick={() => { handleLogout(); setIsOpen(false); }}
                    className="nb-drawer-cta nb-drawer-cta-logout"
                  >
                    <LogOut size={15} />
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="nb-drawer-cta nb-drawer-cta-login"
                  >
                    <LogIn size={15} />
                    Admin Login
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer so content doesn't hide under fixed nav */}
      <div style={{ height: 65 }} />
    </>
  );
};

export default Navbar;