/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'persian-blue': '#1d34a3',
        'eastern-blue': '#2596be',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1d34a3 0%, #2596be 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1d34a3 60%, #2596be 100%)',
      },
    },
  },
  plugins: [],
}

