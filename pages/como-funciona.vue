<template>
  <div class="overflow-hidden">
    <!-- Hero Section - Premium -->
    <section class="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-black via-black-soft to-black">
      <!-- Background gradient effects -->
      <div class="absolute inset-0 bg-gradient-radial opacity-50"></div>
      <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange/5 rounded-full filter blur-3xl"></div>

      <div class="container-custom relative z-10 text-center">
        <!-- Badge -->
        <div class="inline-block animate-fade-in mb-8">
          <div class="glass-gold px-6 py-3 rounded-full shadow-glow">
            <span class="text-sm font-bold text-gradient-premium tracking-wider uppercase">
              {{ locale === 'pt-BR' ? 'Processo Simples' : 'Simple Process' }}
            </span>
          </div>
        </div>

        <!-- Title -->
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up mb-6" style="animation-delay: 0.2s">
          <span class="text-gradient-premium">{{ t('howItWorks.title') }}</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style="animation-delay: 0.4s">
          {{ t('howItWorks.subtitle') }}
        </p>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Steps Section -->
    <section class="section bg-white relative">
      <div class="container-custom">
        <div class="animate-on-scroll max-w-5xl mx-auto" ref="stepsSection">
          <div class="space-y-16">
            <!-- Step 1 -->
            <div class="flex flex-col md:flex-row gap-8 items-start hover-lift group">
              <div class="flex-shrink-0">
                <div class="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shadow-glow transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(201,169,89,0.6)]">
                  <span class="relative z-10 text-6xl font-bold text-white drop-shadow-lg">1</span>
                  <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold to-gold-light opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <!-- Decorative ring -->
                  <div class="absolute inset-0 rounded-3xl border-2 border-white/20"></div>
                </div>
              </div>
              <div class="flex-grow glass p-8 rounded-3xl border border-gray-200 hover:border-gold/30 transition-all">
                <h3 class="text-3xl font-bold text-black mb-4">
                  {{ t('howItWorks.step1.title') }}
                </h3>
                <p class="text-lg text-gray-700 leading-relaxed">
                  {{ t('howItWorks.step1.description') }}
                </p>
              </div>
            </div>

            <!-- Connector Arrow -->
            <div class="flex justify-center my-8">
              <div class="flex flex-col items-center gap-2">
                <div class="w-1 h-12 bg-gradient-to-b from-gold-dark to-gold"></div>
                <svg class="w-8 h-8 text-gold animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="flex flex-col md:flex-row gap-8 items-start hover-lift group">
              <div class="flex-shrink-0">
                <div class="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shadow-glow transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(201,169,89,0.6)]">
                  <span class="relative z-10 text-6xl font-bold text-white drop-shadow-lg">2</span>
                  <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold to-gold-light opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <!-- Decorative ring -->
                  <div class="absolute inset-0 rounded-3xl border-2 border-white/20"></div>
                </div>
              </div>
              <div class="flex-grow glass p-8 rounded-3xl border border-gray-200 hover:border-gold/30 transition-all">
                <h3 class="text-3xl font-bold text-black mb-4">
                  {{ t('howItWorks.step2.title') }}
                </h3>
                <p class="text-lg text-gray-700 leading-relaxed">
                  {{ t('howItWorks.step2.description') }}
                </p>
              </div>
            </div>

            <!-- Connector Arrow -->
            <div class="flex justify-center my-8">
              <div class="flex flex-col items-center gap-2">
                <div class="w-1 h-12 bg-gradient-to-b from-gold-dark to-gold"></div>
                <svg class="w-8 h-8 text-gold animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="animation-delay: 0.2s">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="flex flex-col md:flex-row gap-8 items-start hover-lift group">
              <div class="flex-shrink-0">
                <div class="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shadow-glow transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(201,169,89,0.6)]">
                  <span class="relative z-10 text-6xl font-bold text-white drop-shadow-lg">3</span>
                  <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold to-gold-light opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <!-- Decorative ring -->
                  <div class="absolute inset-0 rounded-3xl border-2 border-white/20"></div>
                </div>
              </div>
              <div class="flex-grow glass p-8 rounded-3xl border border-gray-200 hover:border-gold/30 transition-all">
                <h3 class="text-3xl font-bold text-black mb-4">
                  {{ t('howItWorks.step3.title') }}
                </h3>
                <p class="text-lg text-gray-700 leading-relaxed">
                  {{ t('howItWorks.step3.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="section bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl"></div>

      <div class="container-custom relative z-10">
        <div class="animate-on-scroll" ref="benefitsSection">
          <h2 class="text-4xl md:text-5xl font-bold text-center mb-6">
            <span class="text-gradient-gold">{{ t('howItWorks.benefits.title') }}</span>
          </h2>
          <p class="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            {{ locale === 'pt-BR' ? 'Vantagens únicas da tokenização de ouro' : 'Unique advantages of gold tokenization' }}
          </p>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="hover-lift">
              <div class="h-full p-8 glass rounded-3xl border border-gray-200 hover:border-gold/30 transition-colors">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange to-orange-light flex items-center justify-center text-3xl mb-6 shadow-[0_0_20px_rgba(255,90,0,0.3)]">
                  ⚡
                </div>
                <h3 class="text-xl font-bold text-black mb-3">{{ t('howItWorks.benefits.liquidity.title') }}</h3>
                <p class="text-gray-700 leading-relaxed">{{ t('howItWorks.benefits.liquidity.description') }}</p>
              </div>
            </div>

            <div class="hover-lift" style="animation-delay: 0.1s">
              <div class="h-full p-8 glass rounded-3xl border border-gray-200 hover:border-gold/30 transition-colors">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-3xl mb-6 shadow-glow">
                  🧩
                </div>
                <h3 class="text-xl font-bold text-black mb-3">{{ t('howItWorks.benefits.fractional.title') }}</h3>
                <p class="text-gray-700 leading-relaxed">{{ t('howItWorks.benefits.fractional.description') }}</p>
              </div>
            </div>

            <div class="hover-lift" style="animation-delay: 0.2s">
              <div class="h-full p-8 glass rounded-3xl border border-gray-200 hover:border-gold/30 transition-colors">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-3xl mb-6 shadow-glow">
                  👁️
                </div>
                <h3 class="text-xl font-bold text-black mb-3">{{ t('howItWorks.benefits.transparency.title') }}</h3>
                <p class="text-gray-700 leading-relaxed">{{ t('howItWorks.benefits.transparency.description') }}</p>
              </div>
            </div>

            <div class="hover-lift" style="animation-delay: 0.3s">
              <div class="h-full p-8 glass rounded-3xl border border-gray-200 hover:border-gold/30 transition-colors">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-3xl mb-6 shadow-glow">
                  🔒
                </div>
                <h3 class="text-xl font-bold text-black mb-3">{{ t('howItWorks.benefits.security.title') }}</h3>
                <p class="text-gray-700 leading-relaxed">{{ t('howItWorks.benefits.security.description') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section - Premium Black -->
    <section class="section bg-gradient-premium text-white relative overflow-hidden">
      <!-- Background effects -->
      <div class="absolute inset-0 bg-gradient-radial opacity-30"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div class="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl animate-float"></div>
        <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-orange/10 rounded-full filter blur-3xl animate-float-delayed"></div>
      </div>

      <div class="container-custom text-center relative z-10">
        <div class="animate-on-scroll" ref="ctaSection">
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span class="text-gradient-premium">
              {{ locale === 'pt-BR' ? 'Quer saber mais?' : 'Want to learn more?' }}
            </span>
          </h2>
          <p class="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            {{
              locale === 'pt-BR'
                ? 'Explore nossa documentação completa para entender todos os detalhes técnicos e operacionais.'
                : 'Explore our complete documentation to understand all technical and operational details.'
            }}
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <NuxtLink
              :to="localePath('/documentacao/whitepaper')"
              class="group px-10 py-5 bg-gradient-to-r from-orange to-orange-light text-white font-bold text-lg rounded-2xl
                     transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,90,0,0.6)] hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              {{ t('ctas.readDocs') }}
              <svg class="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
            <NuxtLink
              :to="localePath('/token')"
              class="px-10 py-5 glass-dark border-2 border-white/20 text-white font-bold text-lg rounded-2xl
                     transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              {{ t('ctas.viewDetails') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const { t, locale } = useI18n()
const localePath = useLocalePath()

// Refs for scroll animations
const stepsSection = ref<HTMLElement | null>(null)
const benefitsSection = ref<HTMLElement | null>(null)
const ctaSection = ref<HTMLElement | null>(null)

// Setup scroll animations
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }
  )

  const sections = [stepsSection.value, benefitsSection.value, ctaSection.value]
  sections.forEach((section) => {
    if (section) observer.observe(section)
  })
})

// SEO
useHead({
  title: t('meta.howItWorks.title'),
  meta: [
    { name: 'description', content: t('meta.howItWorks.description') },
    { property: 'og:title', content: t('meta.howItWorks.title') },
    { property: 'og:description', content: t('meta.howItWorks.description') }
  ]
})
</script>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .animate-float,
  .animate-float-delayed,
  .animate-bounce {
    animation: none !important;
  }
}
</style>
