/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D9026E", // Magenta
        secondary: "#FFDC00", // Kuning
        accent: "#0044FF", // Biru tua
        neutralBlack: "#222222", // Hitam
        neutralWhite: "#F5F5F5", // Putih
        buttonGreen: "#A7FF83", // Hijau
        hoverWhite: "#E0E0E0", // Warna hover putih
        hoverGreen: "#88E076", // Warna hover hijau
        hoverPrimary: "#C00163", // Warna hover magenta
        hoverAccent: "#003BCC", // Warna hover aksen
      },
    },
  },
  plugins: [],
};
