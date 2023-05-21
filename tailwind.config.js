/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#08142F",
        secondary: "#D96F00",
        text: "#DADADA",
        Tilte: {
          100: "#4682B4",
          200: "#2A405E",
        },
      },
    },
  },
  plugins: [],
};
