/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "zenitsu" : "url('/zenitsu.jpg')"
      },
      height: {
        "50vh":"50vh",
        "60vh":"60vh",
        "70vh":"70vh",
        "80vh":"80vh",
        "90vh":"90vh",
      },
      width: {
        "max": "300px"
      }
    },
  },
  plugins: [],
}
