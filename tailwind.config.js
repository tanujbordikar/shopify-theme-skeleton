/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/customers/*.liquid",
    "./templates/*.liquid",
    "./sections/*.json",
    "./templates/*.json",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slide: "slide 3s linear infinite",
      },
    },
  },
};
