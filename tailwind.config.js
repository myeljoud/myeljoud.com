/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {},
    fontFamily: {
      default: ["var(--font-inter)", "system-ui", "sans-serif"],
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
