import daisyui from './node_modules/daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        federo: ["Federo", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
}

