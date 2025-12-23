/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a202c",
        secondary: "#2d3748",
        accent: "#3182ce",
        textPrimary: "#edf2f7",
        textSecondary: "#a0aec0",

        lightBlue: "#2196f3",
        graydark: "#343a40",
        darkRich: "#020D19",
        darkNavy: "#011222",
        darkOil: "#0C0C0C",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },

      perspective: {
        1000: "1000px",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
    },
  },
  plugins: [],
};
