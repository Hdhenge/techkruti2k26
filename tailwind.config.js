/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors: {
        primary: "#00E5FF",
        secondary: "#7C3AED",
        neon: "#22D3EE",
        darkbg: "#0D1117",
      },

      animation: {

        // Slow spin (Arc Reactor)
        "spin-slow": "spin 20s linear infinite",

        // Pulse glow
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",

        // Floating particles
        "float": "float 6s ease-in-out infinite",

        // Gradient animation
        "gradient-x": "gradientX 8s ease infinite",

        // Text glow
        "text-glow": "textGlow 2s ease-in-out infinite",

      },

      keyframes: {

        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },

        gradientX: {
          "0%,100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },

        pulseGlow: {
          "0%,100%": {
            boxShadow: "0 0 10px rgba(0,229,255,0.5)"
          },
          "50%": {
            boxShadow: "0 0 30px rgba(0,229,255,1)"
          },
        },

        textGlow: {
          "0%,100%": {
            textShadow: "0 0 10px rgba(0,229,255,0.5)"
          },
          "50%": {
            textShadow: "0 0 25px rgba(0,229,255,1)"
          },
        },

      },

      boxShadow: {
        glow: "0 0 20px rgba(0,229,255,0.8)",
        neon: "0 0 30px rgba(124,58,237,0.8)",
      },

      backgroundSize: {
        "200": "200% 200%",
      },

    },
  },

  plugins: [],
};