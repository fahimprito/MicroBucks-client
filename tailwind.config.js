import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0d775d',
        'secondary': '#71c1ae',
        'accent': '#bcb08c',
      },
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
        orbitron: "Orbitron, serif",
      }
    },
  },
  plugins: [daisyui],
}