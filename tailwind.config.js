/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primaryBlack: "#0F1014",
        secondaryBlack: "#282828",
        textColor: "#888888",
        primaryGray: "#A5A5A5",
        primaryRed: "#FF0000",
        primaryBlue: "#3EA6FF",
        backgroundGray:"#262626"
      },
      width: {
        rem26: '26rem',
      }
    },
    fontFamily: {
       textFont: ["Noto Sans", "sans-serif"],
    },
    
  },
  plugins: [],
}
