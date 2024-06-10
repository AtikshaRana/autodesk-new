module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "dark-gray": "#666666",
      "light-gray": "#cccccc",
    }),
    container: {
      center: true,
      padding: "20px",
    },
    fontFamily: {
      sans: ['"Artifakt Element", sans-serif'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradientLinearBlack:
          "linear-gradient(90deg, rgba(0,0,0,1) 35%, rgba(255,255,255,0.23713235294117652) 80%)",
        gradientLinearBlackSecondry:
          "linear-gradient(90deg, rgba(0,0,0,1) 55%, rgba(255,255,255,0.23713235294117652) 80%)",
        gradientLinearBlackVertical:
          "linear-gradient(180deg, rgba(0,0,0,1) 55%, rgba(255,255,255,0.23713235294117652) 80%)",
        grayGradient:
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(242,242,242,1) 79%)",
        grayGradientReverse:
          "linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(242,242,242,1) 79%)",
      },
      boxShadow: {
        light: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        blackShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        "desktop-laptop": { min: "992px", max: "1599px" },
        // => @media (min-width: 992px and max-width: 1599px) { ... }
        "2xl": { max: "1536px" },
        // => @media (max-width: 1536px) { ... }

        desktop: { min: "992px", max: "1279px" },

        tablet: { min: "768px", max: "1024px" },

        lg: { max: "1024px" },
        // => @media (max-width: 1024px) { ... }

        "lg-up": { min: "1025px" },
        // => @media (min-width: 1025px) { ... }

        xl: { max: "1280px" },
        // => @media (max-width: 1280px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "md-up": { min: "768px" },
        // => @media (max-width: 767px) { ... }

        phablet: { min: "640px", max: "767px" },
        // => @media (min-width: 596px and max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 595px) { ... }

        xs: { max: "480px" },
        // => @media (max-width: 480px) { ... }

        //up widths
        "sm-up": { min: "596px" },
        // => @media (min-width: 596px) { ... }

        "xl-up": { min: "1280px" },
        // => @media (min-width: 1280px) { ... }

        "xxl-up": { min: "1601px" },
        // => @media (min-width: 1280px) { ... }

        "mid-wide-screen": { min: "1800px" },
        // wide screen
        "wide-screen": { min: "2499px" },
        // wide screen

        "wide-nav-screen": { min: "3052px" },
        // wide screen
      },
      colors: {
        purple: "#2084fa",
        mustered: "rgb(255, 194, 26)",
        "dull-white": "#B1B1B1",
        gold: "#ffc21a",
        iris: "#5F60FF",
        plantGreen: "#2bc275",
        clay: "#d74e26",
        blue: "#186bff",
        lightBlue: "#37a5cc",
        darkGreen: "#038c4a",
        dustyGray: "#978E8E",
        darkGrey: "#666666",
        lightGrey: "#cccccc",
        "tintSlate-600": "#333333",
        gray: "#f2f2f2",
        offWhite: "#e4e4e4",
      },
    },
  },
  plugins: [],
};
