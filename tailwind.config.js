/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mdmax: { max: "767px" },
      },
      fontFamily: {
        sans: ["var(--font-jost)"],
      },
      fontSize: {
        body: [
          "1rem",
          {
            lineHeight: "1.625em",
            fontWeight: "regular",
          },
        ],
      },
      colors: {
        black: "#1D1C1E",
        "dark-grey": "#333136",
        "light-grey": "#F1F3F5",
        peach: "#E7816B",
        "light-peach": "#FFAD9B",
        "lighter-peach": "#FDF3F0",
        darkPeach50: "rgba(93,2,2,0.10)",
      },
      dropShadow: {
        heroShadow: "20px -40px 80px rgba(93,2,2,0.5)",
      },
      keyframes: {
        slideUpMobile: {
          "0%": {
            transform: "translateY(300px)",
            "drop-shadow": "drop-shadow(0px 0px 0px rgba(93,2,2,0.5))",
          },
          "100%": {
            transform: "translateY(0px)",
            "drop-shadow": "drop-shadow(20px -40px 80px rgba(93,2,2,0.5))",
          },
        },
        slideUpLarge: {
          "0%": {
            transform: "translateY(400px)",
            "drop-shadow": "drop-shadow(0px 0px 0px rgba(93,2,2,0.5))",
          },
          "100%": {
            transform: "translateY(0px)",
            "drop-shadow": "drop-shadow(20px -40px 80px rgba(93,2,2,0.5))",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        slideUpMobile:
          "slideUpMobile 0.8s cubic-bezier(0.65,0.05,0.36,1) forwards;",
        slideUpLarge:
          "slideUpLarge 0.8s cubic-bezier(0.65,0.05,0.36,1) forwards;",
        fadeIn: "fadeIn 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
