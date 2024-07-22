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
        sidebar: "#2E2E38",
        bg_invoice: "#141625",
        invoice: "#020024",
        status_paid: "#9e9e9e",
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
