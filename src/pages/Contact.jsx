import React from "react";
import { motion } from "framer-motion";

const supportTeam = [
  {
    id: 1,
    name: "Chhagan Rakhade",
    role: "Registration Technical Support",
    email: "chhaganrakhade7@gmail.com",
    phone: "+91 9158396794"
  },
  {
    id: 2,
    name: "Himanshu Dhenge",
    role: "Judging & Participation Tech",
    email: "himanshudhenge4@gmail.com",
    phone: "+91 9322913858"
  },
  {
    id: 3,
    name: "Shubham Kopare",
    role: "Judging Tech",
    email: "shubhamkopare2004@gmail.com",
    phone: "+91 8485029672"
  },
  {
    id: 4,
    name: "Gagan Zade",
    role: "Registration Technical Support",
    email: "zadegagan17@gmail.com",
    phone: "+91 9689477797"
  },
  {
    id: 5,
    name: "Priyanshu Patle",
    role: "E-Sport Coordinator",
    email: "priyanshupatle2@gmail.com",
    phone: "+91 703883684"
  },
  {
    id: 6,
    name: "Aditya Korde",
    role: "E-Sport Coordinator",
    email: "amdk282005@gmail.com",
    phone: "+91 8446950836"
  },
  {
    id: 7,
    name: "Sarang Kachare",
    role: "Registration Technical Support",
    email: "sarangkachare111@gmail.com",
    phone: "+91 9325489326"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-28 px-6">

      {/* Heading */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          Contact Our Team
        </h1>
        <p className="text-gray-400 mt-4">
          Get in touch with the TECHKRUTI support team
        </p>
      </motion.div>

      {/* Support Team */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {supportTeam.map((person, index) => (
          <motion.div
            key={person.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-cyan-400">
              {person.name}
            </h2>

            <p className="text-gray-400 text-sm mt-1">
              {person.role}
            </p>

            <div className="mt-4 space-y-2">

              <p>
                📧{" "}
                <a
                  href={`mailto:${person.email}`}
                  className="text-purple-400 hover:text-cyan-400 transition"
                >
                  {person.email}
                </a>
              </p>

              <p>
                📞{" "}
                <a
                  href={`tel:${person.phone}`}
                  className="text-purple-400 hover:text-cyan-400 transition"
                >
                  {person.phone}
                </a>
              </p>

            </div>
          </motion.div>
        ))}

      </div>

      {/* Map Section */}
      <motion.div
        className="mt-20 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-purple-400">
          Our Location
        </h2>

        <div className="rounded-2xl overflow-hidden border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
          <iframe
            title="TGPCET Location"
            className="w-full h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3495438371925!2d79.0125!3d20.9607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd495fb10c4e4f3%3A0x77a4d2c0a5a8f6f9!2sTulsiramji%20Gaikwad-Patil%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1712345678901"
            loading="lazy"
          ></iframe>
        </div>

      </motion.div>

      {/* Gradient Animation */}
      <style jsx global>{`
        @keyframes gradient {
          0% {background-position:0% 50%}
          50% {background-position:100% 50%}
          100% {background-position:0% 50%}
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 6s ease infinite;
        }
      `}</style>

    </div>
  );
};

export default Contact;