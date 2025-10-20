<template>
  <div class="overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
    <!-- Hero Section - Premium -->
    <section class="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-black via-black-soft to-black">
      <!-- Background effects -->
      <div class="absolute inset-0 bg-gradient-radial opacity-50"></div>
      <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 rounded-full filter blur-3xl"></div>

      <div class="container-custom relative z-10 text-center py-16">
        <!-- Badge -->
        <div class="inline-block animate-fade-in mb-6">
          <div class="glass-gold px-6 py-3 rounded-full shadow-glow">
            <span class="text-sm font-bold text-gradient-premium tracking-wider uppercase">
              {{ doc?.title || 'Whitepaper' }}
            </span>
          </div>
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up mb-4" style="animation-delay: 0.2s">
          <span class="text-gradient-premium">Estruturart Golden</span>
        </h1>
        <p class="text-xl text-white/70 max-w-2xl mx-auto animate-fade-in-up" style="animation-delay: 0.4s">
          {{ doc?.description || 'Documentação Técnica Completa' }}
        </p>

        <!-- Quick Actions -->
        <div class="flex flex-wrap gap-4 justify-center mt-8 animate-fade-in-up" style="animation-delay: 0.6s">
          <PrintButton class="px-8 py-3 bg-gradient-to-r from-orange to-orange-light text-white font-semibold rounded-xl border border-white/20 hover:shadow-[0_0_30px_rgba(255,90,0,0.6)] hover:scale-105 transition-all" />
        </div>
      </div>
    </section>

    <!-- Main Content Section -->
    <section class="section relative">
      <div class="container-custom">
        <div class="flex flex-col lg:flex-row gap-12 relative">
          <!-- Table of Contents - Sticky Sidebar -->
          <aside v-if="headings.length > 0" class="lg:w-80 flex-shrink-0">
            <div class="lg:sticky lg:top-24 space-y-4">
              <div class="glass p-6 rounded-3xl border border-gray-200">
                <h3 class="text-lg font-bold text-black mb-4 flex items-center gap-2">
                  <svg class="w-5 h-5 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  {{ t('documentation.tableOfContents') }}
                </h3>
                <nav class="space-y-2">
                  <a
                    v-for="heading in headings"
                    :key="heading.id"
                    :href="`#${heading.id}`"
                    @click.prevent="scrollToHeading(heading.id)"
                    :class="[
                      'block py-2 px-3 rounded-lg text-sm transition-all',
                      activeHeading === heading.id
                        ? 'bg-gradient-to-r from-gold-dark to-gold text-white font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    ]"
                    :style="{ paddingLeft: `${(heading.level - 1) * 12 + 12}px` }"
                  >
                    {{ heading.text }}
                  </a>
                </nav>
              </div>

              <!-- Quick Stats -->
              <div class="glass p-6 rounded-3xl border border-gray-200">
                <h4 class="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">{{ locale === 'pt-BR' ? 'Informações' : 'Information' }}</h4>
                <div class="space-y-3 text-sm">
                  <div class="flex items-center gap-2 text-gray-600">
                    <svg class="w-4 h-4 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{{ locale === 'pt-BR' ? 'Versão 1.1' : 'Version 1.1' }}</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-600">
                    <svg class="w-4 h-4 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>{{ readingTime }} {{ locale === 'pt-BR' ? 'min de leitura' : 'min read' }}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <!-- Main Content -->
          <article class="flex-grow min-w-0">
            <div v-if="doc" class="prose-premium max-w-none">
              <ContentRenderer :value="doc" />
            </div>

            <div v-else class="text-center py-12">
              <div class="inline-flex items-center gap-3 px-6 py-4 glass rounded-2xl">
                <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-gold"></div>
                <p class="text-gray-600 font-medium">{{ t('common.loading') }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-gradient-premium text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="text-gradient-premium">{{ locale === 'pt-BR' ? 'Ficou com dúvidas?' : 'Have questions?' }}</span>
        </h2>
        <p class="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          {{ locale === 'pt-BR' ? 'Entre em contato conosco para mais informações' : 'Contact us for more information' }}
        </p>
        <NuxtLink
          :to="localePath('/contato')"
          class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange to-orange-light text-white font-bold rounded-2xl
                 hover:shadow-[0_0_40px_rgba(255,90,0,0.6)] hover:scale-105 transition-all"
        >
          {{ t('ctas.contact') }}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const config = useRuntimeConfig()

// Determine the content file based on locale
const slug = computed(() => route.params.slug as string)
const contentPath = computed(() => {
  // Nuxt Content converts paths to lowercase, so we need to lowercase the locale
  return `/${locale.value.toLowerCase()}/${slug.value}`
})

// Fetch the document using Content v2 API
const { data: doc } = await useAsyncData(
  `doc-${slug.value}-${locale.value}`,
  () => queryContent(contentPath.value).findOne(),
  {
    watch: [locale, slug]
  }
)

// Extract headings for TOC
const headings = ref<Array<{ id: string; text: string; level: number }>>([])
const activeHeading = ref('')

// Calculate reading time (average 200 words per minute)
const readingTime = computed(() => {
  return 5 // Default fallback
})

// Extract headings from rendered content
const extractHeadings = () => {
  setTimeout(() => {
    const elements = document.querySelectorAll('.prose-premium h1, .prose-premium h2, .prose-premium h3')
    headings.value = Array.from(elements).map((el) => {
      const id = el.id || el.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || ''
      if (!el.id) el.id = id
      return {
        id,
        text: el.textContent || '',
        level: parseInt(el.tagName.substring(1))
      }
    })
    if (headings.value.length > 0) {
      setupScrollSpy()
    }
  }, 500)
}

// Scroll spy for active heading
const setupScrollSpy = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeHeading.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '-100px 0px -80% 0px'
    }
  )

  headings.value.forEach((heading) => {
    const el = document.getElementById(heading.id)
    if (el) observer.observe(el)
  })
}

// Smooth scroll to heading
const scrollToHeading = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 100
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
    activeHeading.value = id
  }
}

// Extract headings on mount and when doc changes
onMounted(() => {
  if (doc.value) {
    extractHeadings()
  }
})

watch(doc, (newDoc) => {
  if (newDoc) {
    nextTick(() => {
      extractHeadings()
    })
  }
})

// SEO
useHead({
  title: doc.value?.title || t('meta.documentation.title'),
  meta: [
    { name: 'description', content: doc.value?.description || t('meta.documentation.description') },
    { property: 'og:title', content: doc.value?.title || t('meta.documentation.title') },
    { property: 'og:description', content: doc.value?.description || t('meta.documentation.description') }
  ]
})
</script>

<style scoped>
/* Premium Content Styling */
.prose-premium {
  @apply text-gray-800 leading-relaxed;
}

/* Headings - Premium Typography */
.prose-premium :deep(h1) {
  @apply text-4xl md:text-5xl font-bold mb-8 mt-12 pb-6 relative;
  background: linear-gradient(135deg, #111111 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  border-bottom: 2px solid #8A6B2D;
}

.prose-premium :deep(h1)::after {
  content: '';
  @apply absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold-dark via-gold to-transparent;
  width: 120px;
}

.prose-premium :deep(h2) {
  @apply text-3xl md:text-4xl font-bold text-black mb-6 mt-12 flex items-center gap-3;
}

.prose-premium :deep(h2)::before {
  content: '';
  @apply w-1.5 h-8 bg-gradient-to-b from-gold-dark to-gold rounded-full;
}

.prose-premium :deep(h3) {
  @apply text-2xl md:text-3xl font-bold text-black mb-4 mt-8;
}

.prose-premium :deep(h4) {
  @apply text-xl font-bold text-gray-900 mb-3 mt-6;
}

/* Paragraphs */
.prose-premium :deep(p) {
  @apply text-lg text-gray-700 leading-relaxed mb-6;
}

/* Links */
.prose-premium :deep(a) {
  @apply text-gold-dark hover:text-orange font-medium transition-all duration-300 underline-offset-4 decoration-gold-dark/30 hover:decoration-orange;
  text-underline-offset: 4px;
}

/* Lists */
.prose-premium :deep(ul),
.prose-premium :deep(ol) {
  @apply my-6 ml-8 space-y-3;
}

.prose-premium :deep(li) {
  @apply text-lg text-gray-700 leading-relaxed pl-2;
}

.prose-premium :deep(ul li) {
  @apply relative;
}

.prose-premium :deep(ul li)::before {
  content: '';
  @apply absolute -left-6 top-3 w-2 h-2 bg-gradient-to-br from-gold-dark to-gold rounded-full;
}

.prose-premium :deep(ol) {
  counter-reset: item;
}

.prose-premium :deep(ol li) {
  @apply relative;
  counter-increment: item;
}

.prose-premium :deep(ol li)::before {
  content: counter(item);
  @apply absolute -left-8 top-0 w-6 h-6 bg-gradient-to-br from-gold-dark to-gold text-white text-sm font-bold rounded-full flex items-center justify-center;
}

/* Code */
.prose-premium :deep(code) {
  @apply bg-gradient-to-r from-gray-100 to-gray-50 px-3 py-1 rounded-lg text-sm font-mono text-orange border border-gray-200;
  font-weight: 600;
}

.prose-premium :deep(pre) {
  @apply bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl overflow-x-auto my-8 border border-gold/20 shadow-xl;
}

.prose-premium :deep(pre code) {
  @apply bg-transparent p-0 text-gray-100 border-0;
}

/* Blockquotes */
.prose-premium :deep(blockquote) {
  @apply relative border-l-4 border-gold-dark bg-gradient-to-r from-gold/5 to-transparent pl-6 pr-6 py-4 italic text-gray-700 my-8 rounded-r-xl;
}

.prose-premium :deep(blockquote)::before {
  content: '"';
  @apply absolute -top-2 left-2 text-6xl text-gold-dark/20 font-serif;
}

/* Tables */
.prose-premium :deep(table) {
  @apply w-full my-8 border-collapse rounded-xl overflow-hidden shadow-lg;
}

.prose-premium :deep(thead) {
  @apply bg-gradient-to-r from-gold-dark to-gold text-white;
}

.prose-premium :deep(th) {
  @apply font-bold text-left p-4 text-sm uppercase tracking-wider;
}

.prose-premium :deep(tbody tr) {
  @apply border-b border-gray-200 transition-colors hover:bg-gray-50;
}

.prose-premium :deep(td) {
  @apply p-4 text-gray-700;
}

.prose-premium :deep(tbody tr:last-child) {
  @apply border-b-0;
}

/* Images */
.prose-premium :deep(img) {
  @apply rounded-2xl my-8 shadow-xl border-2 border-gray-200;
}

/* Horizontal Rule */
.prose-premium :deep(hr) {
  @apply my-12 border-0 h-px bg-gradient-to-r from-transparent via-gold-dark to-transparent;
}

/* Strong/Bold */
.prose-premium :deep(strong) {
  @apply font-bold text-black;
}

/* Emphasis/Italic */
.prose-premium :deep(em) {
  @apply italic text-gray-800;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}
</style>
