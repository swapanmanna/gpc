/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Roboto", ...fontFamily.serif]
      },
      colors: {
        "brand-purple": "#a622e1",
        "brand-blue": "#3a1292",
        "brand-gray": "#6f6d7e",
        "brand-dark": "#100e28",
        "brand-contrast": "#ffcc33",
      },
      scale: {
        "130": "1.325",
        "175": "1.75",
        "200": "2",
        "225": "2.25",
        "250": "2.5",
      }
    },
  },
  plugins: [],
})