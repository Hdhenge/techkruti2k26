import React from "react";
import {Link} from "react-router-dom";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaCalendarAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[450px] h-[450px] bg-cyan-500/10 blur-[140px] -left-20 top-0"></div>
      <div className="absolute w-[450px] h-[450px] bg-purple-500/10 blur-[140px] -right-20 bottom-0"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400 tracking-widest">
              TECHKRUTI 2K26
            </h2>

            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              TechKruti is the annual technical festival organized by the
              CSE & Data Science department of TGPCET Mohgav.
              Experience innovation, coding and tech competitions.
            </p>
          </div>

          {/* Event Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Event Details
            </h3>

            <div className="space-y-4 text-gray-400 text-sm">

              <p className="flex items-center gap-2">
                <FaCalendarAlt className="text-cyan-400" />
                24 - 25 March 2026
              </p>

              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-cyan-400" />
                TGPCET, Mohgav, Nagpur
              </p>


            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
              <li><Link to="/upcoming" className="hover:text-cyan-400">Events</Link></li>
              <li><Link to="/Sponsor" className="hover:text-cyan-400">Sponsors</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Event Location
            </h3>

            <div className="rounded-lg overflow-hidden border border-gray-700">
              <iframe
                title="tgpcet-location"
                src="https://www.google.com/maps?q=TGPCET%20Mohgaon%20Nagpur&output=embed"
                className="w-full h-40"
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mt-12 text-xl">

          <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition transform hover:scale-110">
            <FaFacebook />
          </a>

          <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-red-600 transition transform hover:scale-110">
            <FaYoutube />
          </a>

          <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-blue-400 transition transform hover:scale-110">
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/ds_tgpcet/?hl=en"
            className="bg-white/10 p-3 rounded-full hover:bg-pink-500 transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">

          <p className="text-gray-500 text-sm">
            © 2026 TECHKRUTI | TGPCET Mohgav
          </p>

          <p className="text-gray-600 text-xs mt-1">
            Developed with ❤️ by TechKruti Team
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;