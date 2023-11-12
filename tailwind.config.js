/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a9396",
        secondary: "#ffb703",

        "primary-100": "#faf9dd",
      },
    },
  },
  plugins: [],
};
