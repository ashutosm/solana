/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#f3f2f3",
          "200": "#d9d9d9",
          "300": "#737bae",
          "400": "#6b6673",
          "500": "#5a5f7d",
          "600": "#14172b",
          "700": "#110523",
        },
        linearGradient: {
          "100":"#626A88",
          "200":"#EAB300",
        },
        border:{
          "100":"#ECF0FF1A",
          "200":"#3B3F5700",
        },
        "secondary-blue-000": "#ecf0ff",
        brown: "#ff4d4d",
        turquoise: "#00ffa3",
        indigo: "#321d52",
        color: "#ab8dff",
        violet: "#9d5cff",
        white: "#fff",
      },
      fontFamily: { tomorrow: "Tomorrow", poppins: "Poppins" },
      borderRadius: { base: "17px" },
    },
    fontSize: { base: "12px", lg: "14px", xl: "16px" },
  },
  corePlugins: { preflight: false },
};
