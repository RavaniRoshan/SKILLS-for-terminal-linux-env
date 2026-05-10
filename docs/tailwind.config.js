/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF5A36',
          navy: '#2A3B8B',
          bg: '#F5F5F5',
          darkBg: '#1A2359',
          lightBlue: '#E8F0FE',
          card: '#FFFFFF',
          text: '#222222',
          subtext: '#666666'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
