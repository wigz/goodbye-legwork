module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Hey guys, Big Gulps™ eh?',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hey, it was a good run!' }
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
