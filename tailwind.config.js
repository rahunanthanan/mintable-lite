/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C0346"
      },
      fontFamily: {
        sans: "Lato, sans-serif"
      }
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
