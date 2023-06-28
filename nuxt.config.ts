// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'vuetify/styles',
    '~/assets/scss/main.scss',
    '@mdi/font/css/materialdesignicons.css',
  ],

  modules: ['@nuxt/image-edge'],

  build: {
    transpile: ['vuetify', 'chart.js'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
});
