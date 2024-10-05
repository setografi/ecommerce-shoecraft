/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D9026E", // Magenta
        secondary: "#FFDC00", // Kuning
        accent: "#00A3A3", // Cyan untuk warna aksen
        neutralBlack: "#222222", // Hitam
        neutralWhite: "#F5F5F5", // Putih
        buttonGreen: "#A7FF83", // Hijau
        hoverWhite: "#E0E0E0", // Warna hover putih
        hoverGreen: "#88E076", // Warna hover hijau
        hoverPrimary: "#C00163", // Warna hover magenta
        hoverAccent: "#008F8F", // Warna hover aksen
        hoverNeutralBlack: "#4A4A4A",
      },
      fontFamily: {
        grotesk: ["Familjen Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        ":root": Object.keys(theme("colors")).reduce((vars, color) => {
          const value = theme(`colors.${color}`);
          if (typeof value === "string") {
            vars[`--color-${color}`] = value;
          }
          return vars;
        }, {}),
      });
    }),
  ],
};
