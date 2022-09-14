/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      lora: ["Lora", "Times New Roman", "Times", "serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#A216C5",
      },
    },
  },
  plugins: [],
};
