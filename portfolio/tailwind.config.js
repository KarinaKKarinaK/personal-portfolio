module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: "#00FFA3",
        cyberpurple: "#A259FF",
        body: "#D1D1D1",
        muted: "#A0A0A0",
        richblack: "#0A0A0A",
      },
      fontFamily: {
        display: ['"Neue Haas Grotesk Display Pro"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}