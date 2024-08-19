/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "Hero-Image": "url('/src/Assets/Images/Hero-image.jpg')",
      },
    },
  },
  plugins: [],
};
