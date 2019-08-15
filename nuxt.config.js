import pkg from './package'
import { links } from './utils/lists'
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
      class: 'bg-blue antialiased'
    },
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#4c33fb' },

  generate: {
    routes: links.map(link => link.to)
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
  modules: ['@nuxtjs/pwa', 'nuxt-webfontloader', '@nuxtjs/svg'],

  devModules: ['@nuxtjs/tailwindcss', 'nuxt-purgecss', '@nuxtjs/eslint-module'],

  tailwindcss: {
    configPath: '~/assets/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css'
  },

  webfontloader: {
    google: {
      families: ['Nunito+Sans:300,400,700,800'] // Loads Lato font with weights 400 and 700
    }
  },

  eslint: {
    fix: true
  }
}
