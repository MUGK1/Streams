/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryBlack: "#0F1014",
        secondaryBlack: "#282828",
        textColor: "#888888",
        primaryGray: "#A5A5A5",
        primaryRed: "#179F2E",
        primaryBlue: "#3EA6FF",
        backgroundGray: "#262626",
        buttonBlack: "#3d3d3d",
      },
      width: {
        rem26: "26rem",
        rem27: "27rem",
        rem28: "28rem",
        rem30: "30rem",
        rem32: "32rem",
        rem34: "34rem",
        pr95: "95%",
      },
    },
    fontFamily: {
      textFont: ["Noto Sans", "sans-serif"],
    },
    minHeight: {
      min3: "3rem",
    },
  },
  plugins: [],
};
