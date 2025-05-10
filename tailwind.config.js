const { m } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#ffffffeb",
          secondary: "#BABABA",
          accent: "#ffd798",
          // accent: "#ff9a90",
          cards: "#1f2023",
          // cards: "#a4a4a433",
          cards2: "#a4a4a421",
          cards3: "#2b2b2be2",
          hoverbg: "#8a8a8a",
          headerCard: "#1f2023",
          energybar: "#1D1D1D",
          btn: "#ffd798",
          // btn: "#c67e77",
          btn2: "#1f2023",
          btn3: "#5A4420",
          btn4: '#fff',
          taskicon: "#6b69699c",
          divider: "#f3ba2f",
          borders: "#42361c",
          borders2: "rgb(54, 54, 54)",
         
            midnight: 'rgba(24, 29, 56, 0.7)',
          
          energybar: "#1D1D1D",
          accent2: "#bcbcbc",
          cardtext: "#e7e7e7",
          lime: "#e1f75c",
          dimtext: "#ffffff71",
          divider2: "#554f3f",
          divider3: "#393D43",
          modal: "#303030",
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          Inter: ["'Inter', sans-serif"],
          outfit: ["'Outfit', sans-serif"],
          RobotoMono: ["'Roboto Mono', monospace"],
          PublicSans: ["'Public Sans', sans-serif"],
          Monserrat: ["'Montserrat', sans-serif"],
          Syne: ["'Syne', sans-serif"],
          Orkney: ["'Orkney', sans-serif"],
          Cerebri: ["'Cerebri Sans', sans-serif"]
        },
      },
      screens: {
        xs: "480px",
        ss: "600px",
        sm: "768px",
        ms: "1024px",
        md: "1140px",
        lg: "1200px",
        xl: "1700px",
      },
      
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        zoomBounce: {
          "0%, 100%": { transform: "scale(0.9)" },
          "50%": { transform: "scale(1.1)" },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        spinslow: "spin 10s linear infinite", // Custom slow spin
        zoomBounce: "zoomBounce 1.5s ease-in-out infinite",
        'fade-in': 'fadeIn 1s ease-out forwards',
        slideUp: 'slideUp 0.4s ease-out',
      },
      
    },
    plugins: [require('tailwindcss')],
  };
  