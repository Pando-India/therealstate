/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url('./assets/images/hero/hero_bg.svg')",
      },
    },
  },
  plugins: [],
};
