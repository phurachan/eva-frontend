/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},

    colors: {
      primary: {
        DEFAULT: "#e75b27",
        100: "#f19d7d",
        200: "#ee8c68",
        300: "#ec7c52",
        400: "#e96b3d",
        500: "#e75b27",
        600: "#d05223",
        700: "#b9491f",
        800: "#a2401b",
      },
      appgray: "#999999",
      disabled: "#DDDDDD",
      appblack: "#333333",
    },
  },
  plugins: [require("flowbite/plugin")],
};
