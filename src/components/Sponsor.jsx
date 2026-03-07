import React from "react";

const sponsors = [
  { id: 1, name: "CSI", logo: "/sponsors/CSI.jpg", website: "https://csiindia.org/" }

  
];

const Sponsor = () => {
  return (
    <div className="w-full min-h-screen bg-black py-20 px-6 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[150px]  left-10"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[150px]  right-10"></div>

      {/* heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-14 text-center tracking-wider">
        Our <span className="text-cyan-400">Sponsors</span>
      </h1>

      {/* sponsors grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 px-6 z-10">

        {sponsors.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center
            bg-white/5 backdrop-blur-md border border-white/10
            p-8 rounded-xl
            hover:scale-110 transition duration-500
            shadow-lg hover:shadow-cyan-500/40"
          >

            {/* neon border effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 border border-cyan-400/40"></div>

            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-24 h-24 object-contain mb-4 group-hover:rotate-6 transition duration-500"
            />

            <span className="text-white text-lg font-semibold group-hover:text-cyan-400 transition">
              {sponsor.name}
            </span>

          </a>
        ))}

      </div>

    </div>
  );
};

export default Sponsor;