/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Colores básicos
        "color-primary": "#101540",
        "color-secondary": "#700000",
        "color-tertiary": "#870000",
        "color-light": "#E9F2EF",
        "color-dark": "#00000F",
        "color-border": "#7E7F9A",

        // Colores derivados
        "color-body-bg": "#E9F2EF",
        "color-header-bg": "#101540",
        "color-button-bg": "#700000",
        "color-hover": "#7E7F9A",
        "text-color-primary": "#E9F2EF",
        "text-color-secondary": "#333",
      },
      spacing: {
        "0.75": "6px"
      },
    },
  },
  plugins: [],
}
