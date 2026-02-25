/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b", // Zinc 950
        foreground: "#fafafa", // Zinc 50
        primary: "#ef4444", // Red 500
        secondary: "#27272a", // Zinc 800
        muted: "#71717a", // Zinc 500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
