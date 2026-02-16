/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kku-gold': '#FF6633',      // สีทอง มข.
        'kku-maroon': '#CC33FF',    // สีแดงเลือดหมู มข.
      },
    },
  },
  plugins: [],
}