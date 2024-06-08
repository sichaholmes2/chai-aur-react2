/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // this searches for content in index and source
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

