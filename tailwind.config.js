/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        card: {
          green: "#4dd395",
          yellow: "#f8be3d",
          gray: "#a1a1aa",
        },
        brand: {
          teal: "#14b8a6",
          progress: "#79b9e9",
          dark: "#3f3f46",
        },
      },
    },
  },
  plugins: [],
};

