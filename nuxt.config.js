require('dotenv').config()
const pkg = require('./package')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: `FuriganaHub`,
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        vmid: 'keywords',
        name: 'keywords',
        content: `web,furigana,japanese,일본뉴스,일본어,일본,jpop,J-POP, 일본뉴스`
      },
      {
        vmid: 'description',
        name: 'description',
        content: pkg.description
      },
      { vmid: 'og:type', property: 'og:type', content: 'article' },
      {
        vmid: 'og:title',
        property: 'og:title',
        content: `FuriganaHub`
      },
      {
        vmid: 'og:url',
        property: 'og:url',
        content: `www.furiganahub.com`
      },
      {
        vmid: 'og:description',
        property: 'og:description',
        content: pkg.description
      },
      {
        vmid: 'og:image',
        property: 'og:image',
        content: 'http://www.furiganahub.com/logoBlue.jpg'
      },
      {
        vmid: 'og:site_name',
        property: 'og:site_name',
        content: 'FuriganaHub'
      },
      { vmid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      {
        vmid: 'twitter:title',
        name: 'twitter:title',
        content: `www.furiganahub.com`
      },
      {
        vmid: 'twitter:description',
        name: 'twitter:description',
        content: pkg.description
      },
      {
        vmid: 'twitter:image',
        name: 'twitter:image',
        content: 'http://www.furiganahub.com/logoBlue.jpg'
      },
      {
        vmid: 'twitter:creator',
        name: 'twitter:creator',
        content: `@_FURIGANA`
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ],
    script: [
      {
        src:
          'https://cdn.polyfill.io/v2/polyfill.min.js?features=default,fetch,Object.entries'
      },
      {
        src: 'https://t1.daumcdn.net/adfit/static/ad.min.js'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/style/app.styl'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/axios',
    { src: '@/plugins/infiniteload.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  build: {
    vendor: ['axios', '@/plugins/infiniteload.js', 'babel-polyfill']
  },
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
  ** Axios module proxy configuration
  */
  proxy: {
    // '/api/': { target: process.env.API_URL || 'http://www.furiganahub.com:8080', pathRewrite: {'^/api/': ''} }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
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
