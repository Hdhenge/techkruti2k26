import { motion } from "framer-motion";
import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center z-50">

      <div className="flex flex-col items-center gap-10">

        {/* ARC REACTOR */}
        <div className="relative w-40 h-40 flex items-center justify-center">

          {/* Outer Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute w-full h-full rounded-full border-4 border-cyan-400/40 shadow-[0_0_30px_#00ffff]"
          />

          {/* Middle Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute w-32 h-32 rounded-full border-4 border-blue-400/40 shadow-[0_0_25px_#3b82f6]"
          />

          {/* Inner Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute w-24 h-24 rounded-full border-4 border-cyan-300 shadow-[0_0_20px_#22d3ee]"
          />

          {/* Core Reactor */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity
            }}
            className="w-10 h-10 rounded-full bg-cyan-400 shadow-[0_0_30px_#00ffff]"
          />

        </div>

        {/* TECHKRUTI TEXT */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wider"
        >
          TECHKRUTI
        </motion.h1>

        {/* ORGANIZED TEXT */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 text-center"
        >
          Organized by <br />
          <span className="text-cyan-400 font-semibold">
            CSE Data Science • TGPCET
          </span>
        </motion.p>

        {/* Loading dots */}
        <div className="flex gap-3 mt-2">
          {[0,1,2].map((i)=>(
            <motion.div
              key={i}
              animate={{ y:[0,-8,0] }}
              transition={{
                duration:0.8,
                repeat:Infinity,
                delay:i*0.2
              }}
              className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Loader;