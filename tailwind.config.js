/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          orbitron: ['Orbitron', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
        }
      },
    },
    plugins: [],
    fontFamily: {
        chakra: ['Chakra Petch', 'sans-serif'],
      }
  }
  