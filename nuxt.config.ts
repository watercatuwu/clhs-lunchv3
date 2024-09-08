import { useThemeHandler } from "maz-ui";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
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
    '@nuxtjs/supabase',
    '@nuxtjs/google-fonts',
    '@vite-pwa/nuxt',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'CLHS午餐訂餐系統v3',
      meta: [
        { name: 'description', content: '為學生提供方便快速的午餐訂餐服務' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  site: {
    url: 'https://clhs-lunch.vercel.app/',
    name: 'CLHS午餐訂餐系統v3',
    description: '為學生提供方便快速的午餐訂餐服務',
    defaultLocale: 'zh-TW',
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false
  },
  googleFonts: {
    families: {
      Outfit: true,
    }
  },
})