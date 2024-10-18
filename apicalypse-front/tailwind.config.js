/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#F6F8FD",
        "gris" : {
          50 : "#66666640",
          100: "#333333B2",
          200 : '#666666',
          300 : '#333333',
          400: '#667085',
        }
      },
    },
  },
  plugins: [],
}