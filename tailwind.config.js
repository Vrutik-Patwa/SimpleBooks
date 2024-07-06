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
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
