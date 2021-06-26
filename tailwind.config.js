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
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};