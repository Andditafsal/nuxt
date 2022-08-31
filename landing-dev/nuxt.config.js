export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 4000, // default: 3000
    host: '0.0.0.0', // default: localhost  
  },

  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },

  env: {
    baseAuthURL: process.env.BASE_AUTH_URL,
    baseURL: process.env.BASE_URL,
    storageURL: process.env.STORAGE_URL,
    editorURL: process.env.EDITOR_URL,
    vueAppMode: process.env.VUE_APP_MODE,
    alkademiAuth: process.env.ALKADEMI_AUTH,
    formURL: process.env.FORM_URL,
    cdnHost: process.env.CDN_HOST,
    sassURL: process.env.SASS_URL,
    appSecret: process.env.APP_SECRET,
    webAwsURL: process.env.WEB_AWS_URL,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/chart.js', mode: 'client',},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://www.npmjs.com/package/cookie-universal-nuxt
    'cookie-universal-nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  loading: {
    color: '#2F80ED',
  }
}
