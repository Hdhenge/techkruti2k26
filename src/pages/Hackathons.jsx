import React from "react";

const TechverseHackathon = () => {
  const coordinators = [
    { name: "Chhagan Rakhade", phone: "+919158396794" },
    { name: "Shubham Kopare", phone: "+918485029672" },
    { name: "Himanshu Dhenge", phone: "+919322913858" },
    { name: "Gagan Zade", phone: "+919689477797" },
    { name: "Sarang Kachare", phone: "+919325489326" },
    { name: "Vedant Nanoti", phone: "+919960116568" }
  ];

  return (
    <div className="w-full mt-10 py-16 min-h-screen bg-black text-white flex flex-col items-center px-4 sm:px-10">

      {/* Hero Section */}
      <div className="w-full max-w-6xl text-center">

        <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">
          KrutiVerse Hackathon 2K26
        </h1>

        {/* Association */}
        <div className="flex flex-col items-center mt-6">
          <p className="text-lg font-semibold text-cyan-400">
            In Association with
          </p>

          <img
            src="Dev.jpg"
            alt="DevCult Logo"
            className="w-52 sm:w-80 mt-4 hover:scale-105 transition duration-300"
          />
        </div>

        <p className="text-gray-300 text-lg mt-4">
          🚀 <strong>Where Innovation Meets Execution!</strong>
        </p>

        <p className="text-gray-400 text-md sm:text-lg mt-2">
          💡 Join a high-energy <strong>7-hour coding marathon</strong> where top minds solve
          <strong> real-world challenges</strong>, compete with
          <strong> elite developers</strong>, and showcase their skills.
        </p>

      </div>

      {/* Event Details */}
      <div className="w-full max-w-4xl bg-[#0b0b0b] border border-cyan-500/30 p-6 rounded-xl shadow-lg mt-10 hover:shadow-cyan-500/20 transition">

        <h2 className="text-2xl font-semibold text-yellow-400">
          📍 Event Details
        </h2>

        <ul className="mt-4 space-y-2 text-gray-300">
          <li>📅 <strong>Date:</strong> 24th March, 2025</li>
          <li>⏰ <strong>Time:</strong> 9:00 AM - 4:00 PM</li>
          <li>📍 <strong>Venue:</strong> TGPCET Campus</li>
          <li>💰 <strong>Entry Fee:</strong> ₹90 per head</li>
          <li>👥 <strong>Team Size:</strong> 2-4 members</li>
          <li>🏆 <strong>Prize Pool:</strong> ₹30,000+</li>
        </ul>

      </div>

      {/* Domains */}
      <div className="w-full max-w-4xl bg-[#0b0b0b] border border-purple-500/30 p-6 rounded-xl shadow-lg mt-8 hover:shadow-purple-500/20 transition">

        <h2 className="text-2xl font-semibold text-blue-400">
          🌍 Hackathon Domains
        </h2>

        <ul className="mt-4 space-y-2 text-gray-300">
          <li>🤖 AI / ML</li>
          <li>🌐 Web Development</li>
          <li>📱 App Development</li>
          <li>🔗 Blockchain</li>
          <li>📊 Data Science</li>
        </ul>

      </div>

      {/* Rules */}
      <div className="w-full max-w-4xl bg-[#0b0b0b] border border-red-500/30 p-6 rounded-xl shadow-lg mt-8 hover:shadow-red-500/20 transition">

        <h2 className="text-2xl font-semibold text-red-400">
          📜 Hackathon Rules & Guidelines
        </h2>

        <ul className="mt-4 space-y-2 text-gray-300">
          <li>🔌 Bring your own laptops and accessories</li>
          <li>🌐 Internet access will be provided</li>
          <li>🖥️ Follow ethical coding practices</li>
          <li>🤝 Respect team collaboration and fair play</li>
          <li>⚖️ Judging criteria: Innovation, functionality, scalability</li>
          <li>⏳ Hackathon duration <strong>8 hours</strong></li>
          <li>🚀 Problem statements will be given at start</li>
          <li>📤 Final submissions before deadline</li>
          <li>🔍 Judges evaluate creativity and execution</li>
          <li>🚫 Registration fees are non-refundable</li>
        </ul>

      </div>

      {/* Register Button */}
      <div className="mt-12">

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-lg text-lg font-semibold
          bg-gradient-to-r from-blue-500 to-purple-600
          hover:scale-105 transition shadow-lg shadow-purple-500/40"
        >
          🚀 Register Now
        </a>

      </div>

      {/* Contact Section */}
      <div className="mt-14 bg-[#0b0b0b] border border-cyan-500/30 p-6 rounded-xl shadow-lg text-center w-full max-w-4xl">

        <h1 className="text-3xl font-bold text-cyan-400 mb-6">
          📞 Contact Coordinators
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {coordinators.map((coordinator, index) => (

            <div
              key={index}
              className="p-4 bg-black border border-gray-700 rounded-lg hover:border-cyan-400 transition"
            >

              <h2 className="text-lg font-semibold text-gray-200">
                {coordinator.name}
              </h2>

              <a
                href={`tel:${coordinator.phone}`}
                className="text-cyan-400"
              >
                {coordinator.phone}
              </a>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default TechverseHackathon;