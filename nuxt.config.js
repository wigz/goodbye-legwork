module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Hey guys, Big Gulps™ eh?',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We used to be a cool design studio. Hey, it was a good run!' },

      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Legwork' },
      { property: 'og:title', content: 'Legwork Studio' },
      { property: 'og:description', content: 'We used to be a cool design studio. Hey, it was a good run!' },
      { property: 'og:url', content: 'http://www.legworkstudio.com/' },
      { property: 'og:image', content: 'http://www.legworkstudio.com/facebot.jpg' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@Legwork' },
      { name: 'twitter:title', content: 'Legwork Studio' },
      { name: 'twitter:description', content: 'We used to be a cool design studio. Hey, it was a good run!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/ydt7mrm.css'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#000000' },
  /*
  ** Plugins
  */
  plugins: [
    { src: `~plugins/vimeo-player`, ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vue-vimeo-player'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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
