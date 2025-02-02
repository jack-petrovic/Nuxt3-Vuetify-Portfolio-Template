// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css'],
  build: {
    transpile: ['vuetify']
  },
  modules: [
    '@vueuse/nuxt',
  ],
  app: {
    head: {
      title: 'Customer Centric Tech',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Customer Centric Tech - Innovative Solutions for Modern Businesses' }
      ]
    }
  }
})