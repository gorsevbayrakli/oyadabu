/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Headings use Fredoka, everything else Nunito (per the VeYa design).
        display: ["Fredoka", "sans-serif"],
        sans: ["Nunito", "sans-serif"],
      },
      colors: {
        veya: {
          bg: "#0d1117",        // page background
          surface: "#1a1e24",   // cards, inputs, inactive pills
          border: "#1f2530",    // hairlines, switch track (off)
          ink: "#f9f9f9",       // primary text / inverted surfaces
          muted: "#a0b3c1",     // secondary text
          primary: "#d55e2d",   // brand orange
          onPrimary: "#050810", // text on orange
          blue: "#2f5d8c",      // ambient glow only
          focus: "#2dd4bf",     // focus ring
        },
      },
      borderRadius: {
        card: "28px",
        panel: "24px",
      },
      maxWidth: {
        app: "448px",
      },
    },
  },
  plugins: [],
};
