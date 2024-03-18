/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('Virtual_Assistant_Website/src/assets/bg1.png')",
      }
    },
  },
  plugins: [],
}

