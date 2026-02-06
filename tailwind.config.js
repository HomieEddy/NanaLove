/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        valentine: {
          pink: '#FFD1DC',
          cream: '#FFFDD0',
          red: '#FF007F',
        }
      }
    },
  },
  plugins: [],
}
