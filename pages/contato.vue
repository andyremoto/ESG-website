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
              {{ locale === 'pt-BR' ? 'Fale Conosco' : 'Get in Touch' }}
            </span>
          </div>
        </div>

        <!-- Title -->
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up mb-6" style="animation-delay: 0.2s">
          <span class="text-gradient-premium">{{ t('contact.title') }}</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style="animation-delay: 0.4s">
          {{ t('contact.subtitle') }}
        </p>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Contact Cards Section -->
    <section class="section bg-white relative">
      <div class="container-custom">
        <div class="animate-on-scroll max-w-5xl mx-auto" ref="cardsSection">
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Institutional Contact -->
            <div class="hover-lift">
              <div class="h-full glass p-10 rounded-3xl border border-gray-200 hover:border-orange/30 transition-all">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange to-orange-light flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,90,0,0.3)]">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 class="text-3xl font-bold text-black mb-8">
                  {{ t('contact.institutional.title') }}
                </h3>
                <div class="space-y-6">
                  <!-- Phone -->
                  <div>
                    <p class="text-sm text-gray-600 uppercase tracking-wider font-semibold mb-2">{{ t('contact.institutional.phone') }}</p>
                    <a
                      href="tel:+553133097422"
                      class="text-lg font-semibold text-orange hover:text-orange-light transition-colors inline-flex items-center gap-2 group"
                    >
                      {{ t('contact.institutional.phoneValue') }}
                      <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </a>
                  </div>

                  <!-- Email -->
                  <div>
                    <p class="text-sm text-gray-600 uppercase tracking-wider font-semibold mb-2">{{ t('contact.institutional.email') }}</p>
                    <a
                      href="mailto:estruturart@estruturart.com.br"
                      class="text-lg font-semibold text-orange hover:text-orange-light transition-colors inline-flex items-center gap-2 group"
                    >
                      {{ t('contact.institutional.emailValue') }}
                      <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>

                  <!-- Address -->
                  <div>
                    <p class="text-sm text-gray-600 uppercase tracking-wider font-semibold mb-2">{{ t('contact.institutional.address') }}</p>
                    <div class="text-base text-black leading-relaxed">
                      <p class="font-semibold">{{ t('contact.institutional.addressValue') }}</p>
                      <p>{{ t('contact.institutional.addressCity') }}</p>
                      <p class="text-gray-600">{{ t('contact.institutional.addressZip') }}</p>
                    </div>
                  </div>

                  <!-- Website -->
                  <div>
                    <p class="text-sm text-gray-600 uppercase tracking-wider font-semibold mb-2">{{ t('contact.institutional.website') }}</p>
                    <a
                      href="https://estruturart.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-lg font-semibold text-orange hover:text-orange-light transition-colors inline-flex items-center gap-2 group"
                    >
                      {{ t('contact.institutional.websiteValue') }}
                      <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Technical Information -->
            <div class="hover-lift">
              <div class="h-full glass p-10 rounded-3xl border border-gray-200 hover:border-gold/30 transition-all">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center mb-8 shadow-glow">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 class="text-3xl font-bold text-black mb-8">
                  {{ t('contact.technical.title') }}
                </h3>
                <div class="space-y-6">
                  <div>
                    <p class="text-sm text-gray-600 uppercase tracking-wider font-semibold mb-2">{{ t('contact.technical.network') }}</p>
                    <p class="text-lg font-semibold text-black">{{ t('contact.technical.networkValue') }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600 uppercase tracking-wider font-semibold mb-2">{{ t('contact.technical.contract') }}</p>
                    <div class="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <code class="text-xs font-mono text-gold-dark flex-grow overflow-x-auto">
                        {{ config.public.polygonContract }}
                      </code>
                    </div>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600 uppercase tracking-wider font-semibold mb-2">{{ t('contact.technical.explorer') }}</p>
                    <a
                      :href="`${config.public.polygonScanUrl}/token/${config.public.polygonContract}`"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-base font-semibold text-gold-dark hover:text-gold transition-colors inline-flex items-center gap-2 group"
                    >
                      PolygonScan
                      <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Support Info -->
          <div class="mt-8">
            <div class="glass-dark p-10 rounded-3xl border border-gold/10 backdrop-blur-sm">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0">
                  <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shadow-glow">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div class="flex-grow">
                  <h3 class="text-2xl font-bold text-white mb-4">
                    {{ t('contact.support.title') }}
                  </h3>
                  <p class="text-white/70 text-lg leading-relaxed">
                    {{ t('contact.support.description') }}
                  </p>
                </div>
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
              {{ locale === 'pt-BR' ? 'Precisa de mais informações?' : 'Need more information?' }}
            </span>
          </h2>
          <p class="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            {{
              locale === 'pt-BR'
                ? 'Consulte nossa documentação completa para respostas detalhadas sobre o ESG.'
                : 'Check our complete documentation for detailed answers about ESG.'
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
              {{ t('ctas.learnMore') }}
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
const config = useRuntimeConfig()

// Refs for scroll animations
const cardsSection = ref<HTMLElement | null>(null)
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

  const sections = [cardsSection.value, ctaSection.value]
  sections.forEach((section) => {
    if (section) observer.observe(section)
  })
})

// SEO
useHead({
  title: t('meta.contact.title'),
  meta: [
    { name: 'description', content: t('meta.contact.description') },
    { property: 'og:title', content: t('meta.contact.title') },
    { property: 'og:description', content: t('meta.contact.description') }
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
