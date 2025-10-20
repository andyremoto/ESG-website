# Estruturart Golden (ESG) - Institutional Website

Production-grade, minimalist institutional website for Estruturart Golden (ESG), a gold-backed token on Polygon.

## 🌟 Features

- **Multilingual (i18n)**: Full support for Portuguese (pt-BR, default) and English (en)
- **SSR (Server-Side Rendering)**: Powered by Nuxt 3 for optimal SEO and performance
- **Real-time Price Data**: Live ESG prices in USD and BRL
- **Localized Documentation**: Markdown-based docs with @nuxt/content
- **Print-friendly**: Optimized print layouts for documentation pages
- **Responsive Design**: Mobile-first, accessible design
- **SEO Optimized**: Meta tags, Open Graph, sitemaps, and robots.txt

## 🛠️ Tech Stack

- **Framework**: Nuxt 3
- **Styling**: Tailwind CSS with custom gold/orange/black theme
- **Language**: TypeScript (strict mode)
- **Content**: @nuxt/content for markdown documentation
- **i18n**: @nuxtjs/i18n with locale-based routing
- **SEO**: @nuxtjs/sitemap, @nuxtjs/robots

## 📋 Prerequisites

- Node.js 18+ or 20+
- npm, yarn, or pnpm

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Environment Configuration

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and configure:

```env
# Gold API (optional - uses demo data if not set)
GOLD_API_URL=https://api.example.com/gold/spot
GOLD_API_KEY=your_api_key

# FX API (optional - uses demo data if not set)
FX_API_URL=https://api.example.com/fx/usdbrl
FX_API_KEY=your_api_key

# Required: Contract address
POLYGON_CONTRACT=0xYourContractAddressHere

# Required for production
SITE_URL=https://yourdomain.com
```

### 3. Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` (Portuguese, default) or `http://localhost:3000/en` (English).

### 4. Build for Production

```bash
npm run build
npm run preview
```

## 🌐 Internationalization (i18n)

### Supported Locales

- **pt-BR** (default): No prefix in URL
- **en**: `/en` prefix

### Adding/Editing Translations

1. Edit locale files in `locales/`:
   - `locales/pt-BR.json`
   - `locales/en.json`

2. Use translations in components:

```vue
<template>
  <p>{{ t('hero.title') }}</p>
</template>

<script setup>
const { t } = useI18n()
</script>
```

### Adding New Localized Pages

1. Add route mapping in `nuxt.config.ts`:

```ts
pages: {
  'your-page': {
    'pt-BR': '/sua-pagina',
    'en': '/your-page'
  }
}
```

2. Create the page in `pages/your-page.vue`

3. Add navigation link using `localePath()`:

```vue
<NuxtLink :to="localePath('/your-page')">
  {{ t('nav.yourPage') }}
</NuxtLink>
```

## 📝 Documentation (Content Management)

### Adding New Documentation

Documentation files use markdown with @nuxt/content.

#### 1. Create Localized Content Files

```bash
# Portuguese version
content/your-doc.pt-BR.md

# English version
content/your-doc.en.md
```

#### 2. Add Frontmatter

```markdown
---
title: 'Your Document Title'
description: 'Document description for SEO'
---

# Your Document Title

Content here...
```

#### 3. Access the Document

Navigate to:
- Portuguese: `/documentacao/your-doc`
- English: `/en/documentation/your-doc`

### Editing Existing Documentation

Simply edit the markdown files in the `content/` directory. Changes are hot-reloaded in development.

## 🎨 Customizing Theme

### Colors

Edit `tailwind.config.ts`:

```ts
colors: {
  gold: {
    dark: '#8A6B2D',
    DEFAULT: '#C9A959',
    light: '#E9D7A8'
  },
  orange: {
    DEFAULT: '#FF5A00'
  },
  black: {
    DEFAULT: '#111111'
  }
}
```

### Fonts

Add custom fonts in `nuxt.config.ts`:

```ts
app: {
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/...' }
    ]
  }
}
```

Update Tailwind config:

```ts
fontFamily: {
  sans: ['YourFont', 'sans-serif']
}
```

## 🔌 API Integration

### Gold Price API

The site fetches live gold prices from `server/api/prices.get.ts`.

**Expected API Response Format**:

```json
{
  "price": 2650.00  // USD per troy ounce
}
```

**Conversion**:
- 1 troy ounce = 31.1034768 grams
- 1 ESG = 1 gram of gold

### FX Rate API

**Expected API Response Format**:

```json
{
  "rate": 5.75  // USD to BRL exchange rate
}
```

### Demo Mode

If API credentials are not configured, the app automatically uses demo data:
- Gold: $2,650/oz
- USD/BRL: 5.75
- Displays "Demo data" badge

## 📱 Components

### Reusable Components

- **LanguageSwitcher**: Dropdown for locale switching
- **PriceTicker**: Live ESG prices (USD and BRL)
- **ValueCard**: Feature card with icon, title, description
- **PrintButton**: Print current documentation page
- **SectionHeader**: Styled section header with optional badge
- **CoinBadge**: ESG branding badge

### Usage Example

```vue
<ValueCard
  title="Your Title"
  description="Your description"
  icon="🏆"
  link="/your-link"
  linkText="Learn More"
/>
```

## 🧪 Testing

### Unit Tests

```bash
npm run test
```

Tests are located in `__tests__/` and use Vitest.

### Test Example (Price Conversion)

```ts
// Test troy ounce to gram conversion
expect(2650 / 31.1034768).toBeCloseTo(85.19, 2)
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

**Build Settings**:
- Build Command: `npm run build`
- Output Directory: `.output/public`
- Install Command: `npm install`

### Netlify

1. Push to GitHub
2. Import project in Netlify
3. Configure environment variables
4. Deploy

**Build Settings**:
- Build Command: `npm run build`
- Publish Directory: `.output/public`

### Environment Variables (Production)

Set these in your hosting platform:

```
GOLD_API_URL
GOLD_API_KEY
FX_API_URL
FX_API_KEY
POLYGON_CONTRACT
SITE_URL
```

## 📊 SEO Configuration

### Meta Tags

Configured per-page using `useHead()`:

```ts
useHead({
  title: t('meta.page.title'),
  meta: [
    { name: 'description', content: t('meta.page.description') },
    { property: 'og:title', content: t('meta.page.title') },
    { property: 'og:image', content: '/opengraph.jpg' }
  ]
})
```

### Sitemap

Auto-generated at `/sitemap.xml`

### Robots.txt

Auto-generated at `/robots.txt`

## 🖼️ Assets

### Required Images

Place in `public/` directory:

- `logo.png`: ESG logo (transparent PNG)
- `coin.png`: ESG coin artwork for hero section
- `favicon.png`: Site favicon
- `opengraph.jpg`: Social media preview (1200x630px)

## 📁 Project Structure

```
estruturart-golden-esg/
├── assets/
│   └── css/
│       ├── tailwind.css      # Tailwind directives & custom classes
│       └── print.css          # Print styles for docs
├── components/                # Reusable Vue components
├── composables/               # Vue composables (usePrices, etc.)
├── content/                   # Markdown documentation
│   ├── whitepaper.pt-BR.md
│   ├── whitepaper.en.md
│   └── ...
├── layouts/
│   └── default.vue            # Main layout (nav + footer)
├── locales/                   # i18n translations
│   ├── pt-BR.json
│   └── en.json
├── pages/                     # Route pages
│   ├── index.vue              # Home
│   ├── token.vue
│   ├── como-funciona.vue
│   ├── contato.vue
│   ├── documentacao/
│   │   └── [slug].vue         # Dynamic doc pages
│   └── legal/
│       ├── termos.vue
│       └── privacidade.vue
├── public/                    # Static assets
├── server/
│   └── api/
│       └── prices.get.ts      # Gold price API route
├── .env.example               # Environment template
├── i18n.config.ts             # i18n configuration
├── nuxt.config.ts             # Nuxt configuration
├── package.json
├── tailwind.config.ts         # Tailwind theme
└── tsconfig.json              # TypeScript config
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

Copyright © 2024 Estruturart. All rights reserved.

## 🆘 Support

For technical support or questions:
- **Email**: contato@estruturart.com.br
- **Documentation**: [Website]/documentacao/whitepaper

---

Built with ❤️ by the Estruturart team
