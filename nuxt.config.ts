// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  pages: true,
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Hyper Imaginary',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'description', content: 'Hyper Imaginary' }
      ]
    }
  }
})
