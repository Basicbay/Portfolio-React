/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],

  theme: {
    extend: {},
  },

  plugins: [
    require("daisyui")
  ],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },

  darkMode: 'class',
}
