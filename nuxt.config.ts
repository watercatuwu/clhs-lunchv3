// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'maz-ui',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/seo',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  site: {
    url: 'https://clhs-lunch.vercel.app/',
    name: 'CLHS午餐訂餐系統v3',
    description: '為學生提供方便快速的午餐訂餐服務',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
})