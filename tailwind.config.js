/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
      },
      animation: {
        slideUp: 'slideUp 300ms ease-out',
      },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }
        },
        fontFamily: {
          sans: ['MyFont', 'system-ui', '-apple-system', 'sans-serif'],
        },
      },
      animation: {
        'fadeIn': 'fadeIn 400ms ease-out forwards'
      }
    }
  },
  plugins: [],
}

