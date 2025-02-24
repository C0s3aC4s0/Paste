/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee': {
          50: '#F5F0E8',
          100: '#E6D5C3',
          200: '#D4B79E',
          300: '#C19879',
          400: '#A67B5B',
          500: '#8B5E3D',
          600: '#704C31',
          700: '#553A25',
          800: '#3A2819',
          900: '#1F160D',
        },
        'cream': {
          50: '#FFFBF7',
          100: '#FFF7ED',
          200: '#FFE9D4',
          300: '#FFD5B4',
          400: '#FFC08F',
          500: '#FFAB6A',
          600: '#FF9645',
          700: '#FF8020',
          800: '#FF6A00',
          900: '#FF5500',
        }
      },
      fontFamily: {
        'script': ['Pacifico', 'cursive'],
        'sans': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 