/** @type {import('tailwindcss').Config} */

const colors = {
  myCustomColor: '#343F4F',
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
}