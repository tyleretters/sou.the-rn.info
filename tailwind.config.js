/** @type {import('tailwindcss').Config} */

const sizes = {
  'xs': '11px',
  'sm': '22px',
  'md': '33px',
  'lg': '44px',
  'xl': '55px',
  'xx': '66px',
}

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'alpha': '#333',
        'beta':  '#555',
        'gamma': '#ddd',
      },
      fontFamily: {
        departure: ['Departure', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: sizes,
      lineHeight: sizes,
      spacing: sizes,
      screens: {
        'xx': '1600px',
      },
      keyframes: {
        blink: {
          '0%, 66.6%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 4s infinite',
      },
    },
  },
  plugins: [],
}

