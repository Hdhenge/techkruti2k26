import React, { useState } from "react";
import axios from "axios";

const ProblemForm = () => {
  const [formData, setFormData] = useState({
    problemCode: "",
    teamName: "",
    link: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!formData.problemCode || !formData.teamName || !formData.link) {
      setError("⚠️ All fields are required.");
      return;
    }

    try {
      await axios.post(
        "https://techkruti-backend.onrender.com/api/problem-form/submit",
        formData
      );

      setMessage("✅ Submission successful!");
      setFormData({
        problemCode: "",
        teamName: "",
        link: "",
      });
    } catch (err) {
      setError("❌ Submission failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">

      {/* Card */}
      <div className="w-full max-w-md p-8 rounded-xl
      bg-[#0b0b0b]
      border border-cyan-500/30
      shadow-lg shadow-cyan-500/20">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6
        bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
        text-transparent bg-clip-text">
          🚀 Submit Your Problem
        </h2>

        {/* Success Message */}
        {message && (
          <p className="mb-4 text-green-400 text-center">
            {message}
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p className="mb-4 text-red-400 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Problem Code */}
          <div>
            <label className="text-gray-300 block mb-1">
              Problem Code
            </label>

            <input
              type="text"
              name="problemCode"
              value={formData.problemCode}
              onChange={handleChange}
              placeholder="e.g. TGPDS1"
              className="w-full p-3 rounded-lg
              bg-black border border-gray-700
              text-white
              focus:outline-none
              focus:border-cyan-400
              focus:ring-1 focus:ring-cyan-400"
            />
          </div>

          {/* Team Name */}
          <div>
            <label className="text-gray-300 block mb-1">
              Team Name
            </label>

            <input
              type="text"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              placeholder="Your team name"
              className="w-full p-3 rounded-lg
              bg-black border border-gray-700
              text-white
              focus:outline-none
              focus:border-purple-400
              focus:ring-1 focus:ring-purple-400"
            />
          </div>

          {/* Repo Link */}
          <div>
            <label className="text-gray-300 block mb-1">
              Repository Link
            </label>

            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              placeholder="https://github.com/team/repo"
              className="w-full p-3 rounded-lg
              bg-black border border-gray-700
              text-white
              focus:outline-none
              focus:border-pink-400
              focus:ring-1 focus:ring-pink-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold
            bg-gradient-to-r from-blue-500 to-purple-600
            hover:scale-105 transition
            shadow-lg shadow-purple-500/40"
          >
            🚀 Launch Submission
          </button>

        </form>
      </div>
    </div>
  );
};

export default ProblemForm;