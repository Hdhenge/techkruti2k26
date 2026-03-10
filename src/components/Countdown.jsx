import { useState, useEffect } from "react";
import React from "react";

const Countdown = () => {
  const targetDate = new Date("March 24, 2026 09:00:00").getTime();

  const getTimeRemaining = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Pre-generate stable particle positions to avoid layout shift
  const particles = Array.from({ length: 40 }, (_, i) => ({
    left: `${(i * 2.5) % 100}%`,
    delay: `${(i * 0.3) % 8}s`,
    duration: `${6 + (i % 5)}s`,
  }));

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-4 py-12">

      {/* 🌌 Cyber Grid Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0ff1 1px, transparent 1px), linear-gradient(90deg, #0ff1 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ✨ Floating Particles — clipped to container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              bottom: "-10px",
              left: p.left,
              width: "3px",
              height: "3px",
              background: "#00ffff",
              borderRadius: "50%",
              animation: `float ${p.duration} ${p.delay} linear infinite`,
            }}
          />
        ))}
      </div>

      {/* 🚀 Content */}
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">

        {/* Subtitle */}
        <h3
          className="text-sm sm:text-lg md:text-2xl font-bold tracking-widest uppercase"
          style={{
            background: "linear-gradient(90deg, #facc15, #f97316)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "textGlow 2s ease-in-out infinite",
          }}
        >
          National Level Tech Fest
        </h3>

        {/* Main Title */}
        <h1 className="mt-3 leading-tight">
          <span
            className="block sm:inline text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold"
            style={{
              background: "linear-gradient(90deg, #c084fc, #f472b6, #f87171)",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradient 6s linear infinite",
            }}
          >
            TECHKRUTI
          </span>
          <span
            className="block sm:inline sm:ml-3 md:ml-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold"
            style={{
              background: "linear-gradient(90deg, #22d3ee, #60a5fa, #4ade80)",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradient 6s linear infinite reverse",
            }}
          >
            2K26
          </span>
        </h1>

        {/* Description */}
        <p className="mt-4 text-xs sm:text-sm md:text-base text-cyan-300 max-w-xl mx-auto leading-relaxed px-2">
          Organized by CSE (Data Science) Department · In Association with CSI
          <br className="hidden sm:block" />
          <span className="sm:hidden"> · </span>
          TGPCET Nagpur Mohgaon — An Autonomous Institute
        </p>

        <p className="mt-3 text-purple-400 text-sm sm:text-base md:text-xl font-medium tracking-wide">
          TechKruti 2K26 Begins In
        </p>

        {/* ⏳ Countdown Cards */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center
                w-20 h-20
                sm:w-28 sm:h-28
                md:w-32 md:h-32
                lg:w-36 lg:h-36
                rounded-2xl
                backdrop-blur-lg
                transition-all duration-500
                hover:-translate-y-2"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(0,255,255,0.25)",
                boxShadow: "0 0 18px rgba(0,255,255,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 36px rgba(0,255,255,0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 18px rgba(0,255,255,0.15)";
              }}
            >
              <span
                className="text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums"
                style={{
                  background: "linear-gradient(180deg, #f472b6, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {String(value).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-cyan-300 mt-1">
                {unit}
              </span>
            </div>
          ))}
        </div>

        {/* 📅 Date & Venue */}
        <p className="mt-8 text-green-300 text-sm sm:text-base md:text-lg font-medium tracking-wide">
          March 24–25, 2026 &nbsp;|&nbsp; TGPCET Campus
        </p>

      </div>

      {/* 🎨 Global Animations */}
      <style>{`
        @keyframes float {
          0%   { transform: translateY(0);      opacity: 0; }
          15%  { opacity: 1; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }

        @keyframes gradient {
          0%   { background-position: 0% center; }
          50%  { background-position: 100% center; }
          100% { background-position: 0% center; }
        }

        @keyframes textGlow {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(255,220,0,0.3)); }
          50%       { filter: drop-shadow(0 0 14px rgba(255,220,0,0.8)); }
        }
      `}</style>
    </div>
  );
};

export default Countdown;