/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ["Poppins", "system-ui"],
        ptsans: ["PT Sans", "system-ui"]
      },
    },
  },
  plugins: [],
}

