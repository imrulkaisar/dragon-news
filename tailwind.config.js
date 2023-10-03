/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heading: "#403F3F",
        text: "#706F6F",
        grayText: "#9F9F9F",
        grayBg: "#F3F3F3",
        highlighter: "#D72050",
      },
    },
  },
  plugins: [],
};
