/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    animation: {
      typewriter: '1s typewriter 2s steps(14) forwards',
      caret: '1s typewriter 2s steps(14) forwards, blink 2s steps(14) infinite 2s',
      fadeIn: 'fadeIn 1.5s ease-in-out',
      slideIn: 'slideIn 1.5s ease-in-out',
      slideIn2: 'slideIn2 1.5s ease-in-out'
    },
    keyframes: {
      typewriter: {
        to: {
          left: '100%',
        },
      },
      blink: {
        '0%': {
          opacity: '0',
        },
        '0.1%': {
          opacity: '1',
        },
        '50%': {
          opacity: '1',
        },
        '50.1%': {
          opacity: '0',
        },
        '100%': {
          opacity: '0',
        },
      },
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      slideIn: {
        '0%': { transform: 'translateY(+50%)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      slideIn2: {
        '0%': { transform: 'translateY(+75%)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
    },
    boxShadow: {
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      'inner-bottom': 'inset 0 -6px 12px 10px rgba(0, 0, 0, 0.16)',
      'inner-lg': 'inset 0 4px 8px 0 rgba(0, 0, 0, 0.12)',
      'inner-xl': 'inset 20px 20px 20px 20px rgba(0, 0, 0, 0.16)',
    },
  },
  plugins: [],
  darkMode: 'class'
}

