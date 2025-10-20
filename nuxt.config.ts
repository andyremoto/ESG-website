import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-10-01',

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
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
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'pt-BR'
    },
    vueI18n: './i18n.config.ts',
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
      ]
    }
  },

  // SEO & Sitemap
  site: {
    url: process.env.SITE_URL || 'http://localhost:3000',
    name: 'Estruturart Golden (ESG)',
    trailingSlash: false
  },

  robots: {
    groups: [
      {
        userAgent: '*',
        allow: '/',
        disallow: []
      }
    ],
    sitemap: `${process.env.SITE_URL || 'http://localhost:3000'}/sitemap.xml`
  },

  // Nitro configuration for better SSR
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  // CSS
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/print.css'
  ]
})
