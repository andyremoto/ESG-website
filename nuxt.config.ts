import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-10-01',

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/i18n',
    // '@nuxtjs/sitemap', // Disabled - incompatible with Nuxt Content v3
    // '@nuxtjs/robots'   // Disabled - incompatible with Nuxt Content v3
  ],

  devtools: { enabled: true },

  typescript: {
    strict: true,
    typeCheck: false
  },

  // i18n Configuration
  i18n: {
    locales: [
      {
        code: 'pt-BR',
        language: 'pt-BR',
        name: 'Português',
        file: 'pt-BR.json'
      },
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en.json'
      }
    ],
    defaultLocale: 'pt-BR',
    strategy: 'prefix_except_default',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'pt-BR'
    },
    customRoutes: 'config',
    pages: {
      'token': {
        'pt-BR': '/token',
        'en': '/token'
      },
      'como-funciona': {
        'pt-BR': '/como-funciona',
        'en': '/how-it-works'
      },
      'contato': {
        'pt-BR': '/contato',
        'en': '/contact'
      },
      'documentacao/[slug]': {
        'pt-BR': '/documentacao/[slug]',
        'en': '/documentation/[slug]'
      },
      'legal/termos': {
        'pt-BR': '/legal/termos',
        'en': '/legal/terms'
      },
      'legal/privacidade': {
        'pt-BR': '/legal/privacidade',
        'en': '/legal/privacy'
      }
    }
  },

  // Tailwind configuration
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config'
  },

  // Runtime configuration
  runtimeConfig: {
    // Server-side only
    metalsApiKey: process.env.METALS_API_KEY || '',
    metalsApiUrl: process.env.METALS_API_URL || 'https://api.metals.dev/v1/latest',

    // Public (client-side)
    public: {
      polygonContract: process.env.POLYGON_CONTRACT || '0xF5b5AefFFFbf838A1Da1f97d2Ab9dFb7330B924A',
      polygonScanUrl: 'https://polygonscan.com',
      siteUrl: process.env.SITE_URL || 'http://localhost:3000'
    }
  },

  // App configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ],
      meta: [
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Estruturart Golden (ESG)' },
        { property: 'og:image', content: 'https://main.d1ilbw9lpr1mql.amplifyapp.com/logo.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Estruturart Golden - Token Lastreado em Ouro' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:locale:alternate', content: 'en_US' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://main.d1ilbw9lpr1mql.amplifyapp.com/logo.png' },
        { name: 'twitter:image:alt', content: 'Estruturart Golden - Token Lastreado em Ouro' },

        // Additional SEO
        { name: 'theme-color', content: '#8A6B2D' },
        { name: 'msapplication-TileColor', content: '#8A6B2D' },
      ]
    }
  },

  // Nitro configuration for better SSR
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: false,
      routes: []
    }
  },

  // CSS
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/print.css'
  ]
})
