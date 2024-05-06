/** @type {import('tailwindcss').Config} */
const colors = require("@material-tailwind/html/theme/base/colors");
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{react,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-red": "#d23f57",
        "theme-blue": "#2b3445",
        "theme-slate": "#f3f5f9",
      },
    },
  },
  plugins: [require("daisyui")],
});
