/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#111111",
      "blue-20": "#D3DFEC",
      "blue-60": "#88B4E8",
      "primary-grey": "#5451FF",
      "gray-500": "#5E0000",
      "primary-300": "#FFA6A3",
      "indigo-600": "rgb(79 70 229 / 1)",
      "indigo-500": "#667eea",
      "light-blue": "#eee",
    },
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "490px",
        sm: "760px",
        md: "1060px",
      },
      dropShadow: {
        ok: "0 11px 11px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
