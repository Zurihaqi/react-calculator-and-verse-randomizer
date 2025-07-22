/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        digital: ["digital-7", "sans-serif"],
        typo: ["typo-digit", "sans-serif"],
        calculator: ["calculator", "sans-serif"],
        amiri: ["amiri-quran", "serif"],
        alquran: ["alquran-ali", "serif"],
      },
    },
  },
  plugins: [],
};
