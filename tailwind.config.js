/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      keyframes: {
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        slideInUp: 'slideInUp 1s ease-out',
      },
      colors: {
        primary: "rgb(20 184 166)",
        secondary: '#64748b',
        dark: "#020617",
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transform-none-important': {
          transform: 'none !important',
        },
      }, ['responsive', 'hover']);
    },
  ],
}