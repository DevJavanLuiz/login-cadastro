/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "r-shadow": "0px 10px 50px 5px black",
        "b-shadow": "0px 3px 5px 0px rgb(74 222 128 / 0.9)",
      },
    },
  },
  plugins: [],
};
