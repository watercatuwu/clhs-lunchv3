// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'maz-ui/nuxt',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
    '@nuxtjs/google-fonts',
    '@vite-pwa/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-link-checker',
  ],
  plugins: [
    '~/plugins/mazToaster.js'
  ],
  routeRules: {
    '/': { prerender: true }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'CLHS午餐訂餐系統v3',
      meta: [
        { name: 'description', content: '為學生提供方便快速的午餐訂餐服務' },
        { name: 'google-site-verification', content: 'X9eP00pJfv2y0GzKFMaVhbDvg7s8WL8yC1w2bxRb07M' }
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
  sitemap: {
    exclude:['/app/*']
  },
  css: [
    '@/assets/css/maz-ui-variables.css'
  ],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false
  },
  googleFonts: {
    families: {
      Outfit: true,
      'Noto Sans Traditional Chinese': true
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'CLHS午餐訂餐系統',
      short_name: 'CLHS Lunch',
      description: '為學生提供方便快速的午餐訂餐服務',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/icon-192-192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: '/icon-512-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  },
})