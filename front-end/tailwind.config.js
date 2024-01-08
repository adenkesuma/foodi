/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#7D0A0A",
        "secondary": "#BF3131",
        "third": "#EAD196",
        "foreground": "#555555",
        "white-background": "#FCFCFC"
      },
      fontFamily: {
        "primary": ["Inter", "sans-serif"]
      }
    },
  },
  daisyui: {
    themes: ["cupcake", "dark", "cmyk", "retro"],
  },
  plugins: [require("daisyui")],
}
