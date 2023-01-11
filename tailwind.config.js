/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    fontFamily: {
      body: ["Space Grotesk"],
    },

    extend: {
      backgroundImage: {
        "mobile-main": "url('/images/bg-main-mobile.png')",
        "desktop-main": "url('/images/bg-main-desktop.png')",
        "card-back": "url('/images/bg-card-back.png')",
        "card-front": "url('/images/bg-card-front.png')",
      },

      colors: {
        White: "hsl(0, 0%, 100%)",
        lightGrayishViolet: "hsl(270, 3%, 87%)",
        darkGrayishViolet: "hsl(279, 6%, 55%)",
        veryDarkViolet: "hsl(278, 68%, 11%)",
        lightGray: "hsl(0, 6%, 87%)",
      },
    },
  },
  plugins: [],
};
