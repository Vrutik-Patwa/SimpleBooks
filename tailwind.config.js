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
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
