import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">

      {/* ARC REACTOR GLOW BACKGROUND */}
      <div className="absolute inset-0 flex justify-center items-center opacity-20">
        <div className="relative w-80 h-80 rounded-full border border-cyan-500 animate-spin-slow">

          {/* Inner Rings */}
          <div className="absolute inset-10 rounded-full border border-cyan-400 animate-pulse"></div>
          <div className="absolute inset-20 rounded-full border border-blue-400"></div>

          {/* Reactor Core */}
          <div className="absolute inset-28 rounded-full bg-cyan-400 blur-xl"></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 py-10 px-6 text-center">

        {/* Title */}
        <h2 className="text-2xl font-bold text-cyan-400 tracking-widest">
          TECHKRUTI 2K25
        </h2>

        <p className="text-gray-400 text-sm mt-2">
          CSE & Data Science | TGPCET, Mohgav
        </p>

        {/* Navigation */}
        <nav className="mt-6 flex justify-center gap-6 text-cyan-300 text-sm">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Sponsors</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 text-xl">

          <a href="#" className="hover:text-cyan-400 transition transform hover:scale-125">
            <FaFacebook />
          </a>

          <a href="#" className="hover:text-red-500 transition transform hover:scale-125">
            <FaYoutube />
          </a>

          <a href="#" className="hover:text-blue-400 transition transform hover:scale-125">
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/ds_tgpcet/?hl=en"
            className="hover:text-pink-400 transition transform hover:scale-125"
          >
            <FaInstagram />
          </a>

        </div>

        {/* Divider */}
        <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-8"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs mt-4">
          © 2025 TECHKRUTI. All Rights Reserved.
        </p>

        {/* <p className="text-gray-500 text-xs">
          Developed by
          <span className="text-cyan-400 font-semibold ml-1">
            Chhagan Rakhade
          </span>
        </p> */}

      </div>
    </footer>
  );
};

export default Footer;