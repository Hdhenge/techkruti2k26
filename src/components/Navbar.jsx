import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Rocket,
  LogIn,
  LogOut,
  Code2,
  Home,
  Contact,
  Info,
  Trophy,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthStatus = () => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  };

  useEffect(() => {
    checkAuthStatus();

    const handleStorageChange = () => checkAuthStatus();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "KrutiVerse Hack", path: "/hackthon", icon: <Rocket size={18} /> },
    { name: "About", path: "/about", icon: <Info size={18} /> },
    { name: "Contact Us", path: "/contact", icon: <Contact size={18} /> },
    // { name: "Register Problem", path: "/ProblemForm", icon: <Code2 size={18} /> },
    { name: "Sponsor", path: "/sponsor", icon: <Trophy size={18} /> },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[9999] backdrop-blur-xl bg-[#020617]/80 border-b border-cyan-500/20 shadow-[0_0_25px_rgba(6,182,212,0.35)]">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center">

          {/* Left Logo */}
          <div className="flex-1 flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="p-2 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl shadow-[0_0_15px_#06b6d4]">
                <Code2 className="text-white" size={26} />
              </div>

              <h1 className="text-2xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                TechKruti 2K26
              </h1>
            </motion.div>
          </div>

          {/* Center Menu */}
         <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="relative group"
              >
                <Link
                  to={link.path}
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium tracking-wide hover:drop-shadow-[0_0_6px_#22d3ee]"
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.name}
                </Link>

                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Right Login */}
          <div className="flex-1 flex justify-end items-center">

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="hidden md:flex px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold items-center shadow-[0_0_12px_rgba(239,68,68,0.7)] hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,1)] transition-all duration-300"
              >
                <LogOut className="mr-2" size={18} />
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="hidden md:flex px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold items-center shadow-[0_0_12px_rgba(6,182,212,0.8)] hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,1)] transition-all duration-300"
              >
                <LogIn className="mr-2" size={18} />
                Admin Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden ml-3 p-2 bg-gray-800 rounded-lg text-cyan-400 hover:bg-gray-700 transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>

          </div>

        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed inset-0 w-3/4 h-screen bg-[#020617]/95 backdrop-blur-xl border-r border-cyan-500/20 flex flex-col items-center justify-start pt-24 space-y-6 z-40"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-full px-8"
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-6 py-3 text-gray-300 hover:bg-[#0f172a] rounded-xl transition-all hover:text-cyan-400 hover:shadow-[0_0_10px_#22d3ee]"
                >
                  <span className="mr-4 text-cyan-400">{link.icon}</span>
                  <span className="text-lg font-medium">{link.name}</span>
                </Link>
              </motion.div>
            ))}

            {/* Mobile Login */}
            <div className="w-full px-8 mt-6 border-t border-gray-800 pt-4">
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-white font-semibold flex items-center justify-center"
                >
                  <LogOut className="mr-2" size={18} />
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold flex items-center justify-center"
                >
                  <LogIn className="mr-2" size={18} />
                  Admin Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;