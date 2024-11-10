/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
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

