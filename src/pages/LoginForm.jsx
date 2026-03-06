import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://techkruti-backend.onrender.com/api/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("isAdmin", true);

      setMessage("Admin login successful!");

      setTimeout(() => {
        window.location.href = "/repos";
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">

      <div className="w-full max-w-md p-8 rounded-xl
      bg-[#0b0b0b] border border-cyan-500/30
      shadow-lg shadow-cyan-500/20">

        <h2 className="text-3xl font-bold text-center
        bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
        text-transparent bg-clip-text">
          🔑 Admin Login
        </h2>

        {message && (
          <p className="text-green-400 text-center mt-4">{message}</p>
        )}

        {error && (
          <p className="text-red-400 text-center mt-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 mt-6">

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-1">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-black border border-gray-700
              text-white focus:outline-none focus:border-cyan-400
              focus:ring-1 focus:ring-cyan-400 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-1">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-black border border-gray-700
              text-white focus:outline-none focus:border-purple-400
              focus:ring-1 focus:ring-purple-400 transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold
            bg-gradient-to-r from-blue-500 to-purple-600
            hover:scale-105 transition
            shadow-lg shadow-purple-500/40"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>

    </div>
  );
};

export default LoginForm;