import pkg from './package'
const path = require('path')

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favico.png' },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  generate: {
    routes: [
      '/resume',
      '/portfolio',
      '/contact'
    ]
  },

  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/transitions.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    'nuxt-purgecss',
    'nuxt-webfontloader',
    'nuxt-fontawesome'
  ],
  
  webfontloader: {
    google: {
      families: ['Nunito+Sans:300,400,700,800'] //Loads Lato font with weights 400 and 700
    }
  },

  fontawesome: {
    component: 'fa',
    imports: [
      {
        set:'@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true, // if you use purgeCSS

    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './assets/tailwind.config.js'),
        cssnano: {
          preset: 'default',
          discardComments: { removeAll: true },
          zIndex: false
        }
      },
      // Change the postcss-preset-env settings
      preset: {
        stage: 0, // enable all (experimental) polyfills
        autoprefixer: {
          cascade: false,
          grid: true
        }
      }
    },

    extend(config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      })
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
