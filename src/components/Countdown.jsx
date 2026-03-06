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

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">

      {/* 🌌 Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(#0ff1_1px,transparent_1px),linear-gradient(90deg,#0ff1_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>

      {/* ✨ Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`
            }}
          ></span>
        ))}
      </div>

      {/* 🚀 Content */}
      <div className="relative z-10 text-center px-6">

        {/* Title */}
        <h3 className="text-xl sm:text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 animate-text-glow">
          NATIONAL LEVEL TECH FEST
        </h3>

        <h1 className="text-6xl sm:text-8xl font-extrabold mt-4">

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 animate-gradient">
            TECHKRUTI
          </span>

          <span className="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 animate-gradient-reverse">
            2K26
          </span>

        </h1>

        <p className="mt-4 text-lg text-cyan-300 max-w-3xl mx-auto">
          Organized by CSE (Data Science) Department In Association with CSI,
          TGPCET Nagpur Mohgaon – An Autonomous Institute
        </p>

        <h2 className="mt-4 text-purple-400 text-xl">
          TechKruti 2K26 Begins In
        </h2>

        {/* ⏳ Countdown */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">

          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div
              key={index}
              className="group relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center
              bg-white/5 backdrop-blur-lg border border-cyan-400/30 rounded-2xl
              shadow-[0_0_20px_rgba(0,255,255,0.2)]
              hover:shadow-[0_0_40px_rgba(0,255,255,0.9)]
              transition-all duration-500 transform hover:-translate-y-3"
            >

              <div className="flex flex-col items-center">

                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  {value}
                </span>

                <span className="text-xs uppercase text-cyan-300 tracking-wider mt-1">
                  {unit}
                </span>

              </div>

            </div>
          ))}

        </div>

        {/* 📅 Date */}
        <p className="mt-10 text-green-300 text-lg">
          March 24–25, 2026 | TGPCET Campus
        </p>

      </div>

      {/* 🎨 Animations */}
      <style jsx global>{`

        .particle{
          position:absolute;
          bottom:-10px;
          width:3px;
          height:3px;
          background:#00ffff;
          border-radius:50%;
          animation:float 8s linear infinite;
        }

        @keyframes float{
          0%{transform:translateY(0);opacity:0}
          20%{opacity:1}
          100%{transform:translateY(-100vh);opacity:0}
        }

        @keyframes gradient{
          0%{background-position:0%}
          50%{background-position:100%}
          100%{background-position:0%}
        }

        .animate-gradient{
          background-size:200%;
          animation:gradient 6s linear infinite;
        }

        .animate-gradient-reverse{
          background-size:200%;
          animation:gradient 6s linear infinite reverse;
        }

        @keyframes textGlow{
          0%,100%{text-shadow:0 0 10px rgba(255,255,255,0.3)}
          50%{text-shadow:0 0 25px rgba(255,255,255,0.8)}
        }

        .animate-text-glow{
          animation:textGlow 2s ease-in-out infinite;
        }

      `}</style>

    </div>
  );
};

export default Countdown;