/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          950: '#0a0a0c', // Deeper, bespoke charcoal
          900: '#121214',
          800: '#1e1e21',
        }
      }
    },
  },
  plugins: [],
}
