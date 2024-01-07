/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#39DB4A",
        "third": "#FF6868",
        "foreground": "#555555",
        "white-background": "#FCFCFC"
      },
      fontFamily: {
        "primary": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}