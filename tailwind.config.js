module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'oswald': ['Oswald'],
      'prompt': ['Prompt'],
    },
    extend: {
      spacing: {
        '97': '60rem'
      },
      colors: {
        grn: {
          DEFAULT: '#04D9B2'
        },
        gry: {
          DEFAULT: '#212121'
        }
      },
      backgroundSize: {
        '50': '100% 20vh',
      },
      fill: ['hover'],
    },
    
  },
  variants: {
    extend: {
      display: ['hover', 'group-hover'],
      fill: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};