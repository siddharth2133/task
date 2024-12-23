/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path based on your project
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "sans-serif"],
        caveat: ["Caveat", "serif"],
        dmsans: ["DM Sans", "serif"], // Customize font-family if needed
      },
    },
  },
  plugins: [],
};
