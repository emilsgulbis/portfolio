import pkg from './package'
const path = require('path')

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Emīls Gulbis | Front-end developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favico.png' }],
    bodyAttrs: {
      class: 'bg-blue'
    },
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#4c33fb' },

  generate: {
    routes: ['/resume', '/portfolio', '/contact']
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/custom.scss'],

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
    'nuxt-svg'
  ],

  devModules: [
    '@nuxtjs/tailwindcss'
  ],

  tailwindcss: {
    configPath: '~/assets/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css'
  },

  webfontloader: {
    google: {
      families: ['Nunito+Sans:300,400,700,800'] // Loads Lato font with weights 400 and 700
    }
  },

  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader'
      })
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
