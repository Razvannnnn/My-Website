/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flyonui/dist/js/*.js"
  ],
  darkMode: 'class',
  theme: {
    animation: {
      typewriter: '1s typewriter 2s steps(14) forwards',
      caret: '1s typewriter 2s steps(14) forwards, blink 2s steps(14) infinite 2s',
      fadeIn: 'fadeIn 1.5s ease-in-out',
      slideIn: 'slideIn 1.5s ease-in-out',
      slideIn2: 'slideIn2 1.5s ease-in-out',
      shimmer: "shimmer 2s linear infinite",
      text: 'text 5s ease infinite',
      zoomIn: 'zoomIn 1s ease-in-out'
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
      shimmer: {
        from: {
          backgroundPosition: "0 0",
        },
        to: {
          backgroundPosition: "-200% 0",
        },
      },
      text: {
        '0%, 100%': {'background-size':'200% 200%',
                  'background-position': 'left center'},
        '50%': {'background-size':'200% 200%',
                'background-position': 'right center'}
      },
      zoomIn: {
        '0%': { transform: 'scale(1)'},
        '50%': { transform: 'scale(1.05)'},
        '100%': { transform: 'scale(1)'}
      }
    },
    boxShadow: {
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      'inner-bottom': 'inset 0 -6px 12px 10px rgba(0, 0, 0, 0.16)',
      'inner-lg': 'inset 0 4px 8px 0 rgba(0, 0, 0, 0.12)',
      'inner-xl': 'inset 20px 20px 20px 20px rgba(0, 0, 0, 0.16)',
    },
  },
  
  flyonui: {
    themes: [
      {
        light: {
          ...require("flyonui/src/theming/themes")['light'],
          primary: 'black',
          secondary: 'teal'
        }
      }
    ]
  }
}

