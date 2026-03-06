import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white py-20 px-6 md:px-16">

      {/* Header */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          TECHKRUTI 2026
        </h1>

        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
          TECHKRUTI is the premier tech fest of TGPCET organized by the
          <span className="text-cyan-400 font-semibold"> CSE & Data Science Department</span>.
          It brings together innovators, developers, gamers and tech enthusiasts
          to compete, learn and showcase their futuristic ideas.
        </p>
      </motion.div>

      {/* Events Section */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >

        {/* Hackathon */}
        <div className="bg-white/5 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] transition">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            💻 KrutiVerse Hackathon
          </h2>
          <p className="text-gray-300">
            A high-energy coding marathon where teams collaborate to build
            innovative tech solutions for real-world problems using modern
            technologies and creative ideas.
          </p>
        </div>

        {/* Project Expo */}
        <div className="bg-white/5 backdrop-blur-xl border border-pink-400/30 rounded-2xl p-8 hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] transition">
          <h2 className="text-2xl font-bold text-pink-400 mb-4">
            🚀 Project Expo
          </h2>
          <p className="text-gray-300">
            Present your innovative tech projects and research ideas to
            faculty members, mentors, and industry professionals.
          </p>
        </div>

        {/* E-Sports */}
        <div className="bg-white/5 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-8 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">
            🎮 E-Sports Tournament
          </h2>
          <p className="text-gray-300">
            Experience intense gaming action in LAN tournaments featuring
            BGMI and Free Fire where squads compete for the championship.
          </p>
        </div>

        {/* Open Mic */}
        <div className="bg-white/5 backdrop-blur-xl border border-green-400/30 rounded-2xl p-8 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transition">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            🎤 Open Mic
          </h2>
          <p className="text-gray-300">
            A creative stage where participants can showcase their talents
            in poetry, storytelling, stand-up comedy, singing, or any
            artistic performance.
          </p>
        </div>

        {/* Reel Making */}
        <div className="bg-white/5 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-8 hover:shadow-[0_0_25px_rgba(250,204,21,0.4)] transition">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            🎬 Reel / Short Film Presentation
          </h2>
          <p className="text-gray-300">
            Create and present engaging reels or short films that express
            creativity, storytelling, and digital media skills.
          </p>
        </div>

        {/* Cipher Hunt */}
        <div className="bg-white/5 backdrop-blur-xl border border-indigo-400/30 rounded-2xl p-8 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition">
          <h2 className="text-2xl font-bold text-indigo-400 mb-4">
            🔐 Ciphertext Treasure Hunt
          </h2>
          <p className="text-gray-300">
            Solve encrypted clues, decode hidden messages and complete
            challenging puzzles to uncover the hidden treasure.
          </p>
        </div>

        {/* Vibe Coding */}
        <div className="bg-white/5 backdrop-blur-xl border border-orange-400/30 rounded-2xl p-8 hover:shadow-[0_0_25px_rgba(251,146,60,0.4)] transition">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">
            ⚡ Vibe Coding
          </h2>
          <p className="text-gray-300">
            A fast-paced coding competition where participants solve
            programming challenges and algorithmic problems under time pressure.
          </p>
        </div>

      </motion.div>

      {/* Why Join */}
      <motion.div
        className="max-w-5xl mx-auto mt-16 bg-white/5 border border-purple-400/30 rounded-2xl p-10 backdrop-blur-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-6">
          Why Join TECHKRUTI?
        </h2>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-300 text-lg">
          <li>✅ Compete with talented developers and creators</li>
          <li>✅ Showcase projects and innovative ideas</li>
          <li>✅ Win prizes and recognition</li>
          <li>✅ Network with tech enthusiasts and mentors</li>
        </ul>
      </motion.div>

      {/* Gradient animation */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position:0% 50% }
          50% { background-position:100% 50% }
          100% { background-position:0% 50% }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 6s ease infinite;
        }
      `}</style>

    </div>
  );
};

export default About;