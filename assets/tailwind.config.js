module.exports = {
  theme: {
    extend: {
      colors: {
        white: {
          default: '#fff',
          '20': 'rgba(255, 255, 255, .2)'
        },

        black: {
          default: '#2b303a',
          '90': 'rgba(0, 0, 0, 0.9)'
        },

        gray: '#566075',
        blue: '#4c33fb'
      },

      spacing: {
        '150': '150%'
      },

      borderWidth: {
        '5': '5px'
      },

      boxShadow: {
        default: '0 8px 45px rgba(0, 0, 0, 0.3)',
        lighter: '0 8px 45px rgba(0, 0, 0, 0.15)'
      },

      fontFamily: {
        sans: ['Nunito', 'sans-serif']
      },

      height: {
        '24px': '24px',
        '300px': '300px'
      },

      inset: {
        '50': '50%',
        '100': '100%'
      },

      margin: {
        '-2px': '-2px'
      },

      width: {
        '30px': '30px',
        '120px': '120px',
        '185px': '185px',
        '280px': '280px',
        '490px': '490px'
      },

      maxWidth: {
        '3/5': '60%'
      }
    }
  },
  variants: {},
  plugins: []
}
