/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        lightBlue: "#edf2f8",
        blue: "#313bac",
        bluryBlue: "rgba(255, 255, 255, 0.25)",
        borderColor: "rgba(255, 255, 255, 0.18)",
        boxShadow: "0 0 25px rgba(0, 0, 0, 0.2)",
        shadow: "-79px 51px 60px rgba(0, 0, 0, 0.08)",
        lightGray: "#e4e4e4",
        topBtnColor: "#4f46e5",
        topBtnBgColor: "#1d4ed8",
        gray: "#6b7688",
        brown: "#46364a",
        black: "#030303",
        white: "#ffffff",
      },
      backgroundImage: {
        "bg-hero": "url('./images/bgIMG.png')",
        "bg-white": "url('./images/bgWhite.png')",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
    screens: {
      xs: "375px",
      ss: "540px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1700px",
    },
  },
  plugins: [],
};
