/** @type {import('tailwindcss').Config} */
module.exports = {
  // Add the paths to all of your template files
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#bfa888",
        darkBlue: "#021527",
      },
      fontFamily: {
        sans: ["Jost", "sans-serif"],
      },
      backgroundImage: {
        testimonial: "url('./src/assets/bg-testimonial.webp')",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
