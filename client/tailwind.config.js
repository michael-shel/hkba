module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '75': '75-vh',
        '60': '60-vh'
      },
      zIndex: {
        '1': 1,
        '2': 2,
        '3': 3,
      }
    },
    colors: {
      transparent: 'transparent',
      primary: {
        light: '#e4d69b',
        DEFAULT: '#9b8e57',
        dark: '#5c563c',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
