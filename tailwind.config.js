/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        petal: {
          DEFAULT: '#B8929A',
          light: '#F5EBED',
          dark: '#96727A',
        },
        pearl: {
          DEFAULT: '#FDFCF9',
          dark: '#F0E3D0',
        },
        mocha: {
          DEFAULT: '#3D2D26',
          light: '#5C4A42',
        },
        charcoal: {
          DEFAULT: '#2C2018',
          light: '#4A3830',
        },
        coral: '#C96840',
      },
    },
  },
  plugins: [],
}
