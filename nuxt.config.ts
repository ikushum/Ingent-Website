import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,
  build: {
    transpile: ['vuetify'],
  },
  compatibilityDate: '2025-05-15',
  css: ['@/styles/global.scss'],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Ingent Technology - Empowering Innovation',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Ingent Technology - Empowering Innovation through custom Software Development. We specialize in web development, mobile apps, UI/UX design, and cloud solutions.' },
        { name: 'keywords', content: 'ingent, ingent technology, software development, web development, mobile apps, UI/UX design, cloud solutions, DevOps, custom software' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Ingent Technology' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ingent.technology/' },
        { property: 'og:title', content: 'Ingent Technology - Empowering Innovation' },
        { property: 'og:description', content: 'Empowering Innovation through custom Software Development. We specialize in web development, mobile apps, UI/UX design, and cloud solutions.' },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' },
        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://ingent.technology/' },
        { property: 'twitter:title', content: 'Ingent Technology - Empowering Innovation' },
        { property: 'twitter:description', content: 'Empowering Innovation through custom Software Development. We specialize in web development, mobile apps, UI/UX design, and cloud solutions.' },
        { property: 'twitter:image', content: '/og-image.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-JWHRQ8F7D7', async: true }
      ]
    }
  },
  modules: [
    '@nuxt/content',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  runtimeConfig: {
    public: {
      gtagId: process.env.NUXT_APP_GOOGLE_ANALYTICS_KEY,
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  }
})