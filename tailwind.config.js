const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        back: "#262626",
        button: "rgb(167, 139, 250, 1)",
        sidebar: "#1F213A",
        bg_invoice: "#141625",
        invoice: "#1F213A",
        status_paid: "#1F2C3F",
        status_text_paid: "#1FFD9F",
        arrow: "#6557B7",
        hashtag: "#767DA8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
