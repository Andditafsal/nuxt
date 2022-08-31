export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sekolah-kopi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content:'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      
    ],
    script: [
      {type:"text/javascript", src:"/assets/js/jquery.min.js", body: true },
      {type:"text/javascript", src:"/assets/js/bootsnav.js", body: true },
      {type:"text/javascript", src:"/assets/js/jquery.nav.js", body: true },
      {type:"text/javascript", src:"/assets/js/hamburger-menu.js", body: true },
      {type:"text/javascript", src:"/assets/js/theme-vendors.min.js", body: true },
      {type:"text/javascript", src:"/assets/js/main.js", body: true },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/assets/css/style.css',
    '~/static/assets/css/bootsnav.css',
    //'~/static/assets/css/font-icons.min.css',
    '~/static/assets/css/responsive.css',
    //'~/static/assets/css/theme-vendor.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
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
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

