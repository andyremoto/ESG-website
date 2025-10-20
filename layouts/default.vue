<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Token Interlude Video -->
    <TokenInterlude />

    <!-- Navigation -->
    <nav class="sticky top-0 z-50 glass backdrop-blur-md border-b border-gray-200/50 transition-all duration-300">
      <div class="container-custom">
        <div class="flex items-center justify-between h-16 md:h-20">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Estruturart Golden Logo"
              class="h-8 md:h-10 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
            />
            <span class="text-xl md:text-2xl font-bold bg-gradient-to-r from-black to-black/80 bg-clip-text">
              Estruturart Golden
            </span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-6 lg:gap-8">
            <NuxtLink
              :to="localePath('/')"
              class="nav-link"
            >
              {{ t('nav.home') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/token')"
              class="nav-link"
            >
              {{ t('nav.token') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/como-funciona')"
              class="nav-link"
            >
              {{ t('nav.howItWorks') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/documentacao/whitepaper')"
              class="nav-link"
            >
              {{ t('nav.documentation') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/contato')"
              class="px-6 py-2 bg-gradient-to-r from-orange to-orange-light text-white text-sm font-semibold rounded-xl
                     transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,90,0,0.4)] hover:scale-105"
            >
              {{ t('nav.contact') }}
            </NuxtLink>

            <LanguageSwitcher />
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 text-gray-700 hover:text-orange transition-all duration-300 hover:scale-110"
            :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4"
        >
          <div v-if="mobileMenuOpen" class="md:hidden py-6 border-t border-gray-200/50 glass-dark">
            <div class="flex flex-col gap-4">
              <NuxtLink
                :to="localePath('/')"
                @click="closeMobileMenu"
                class="mobile-nav-link"
              >
                {{ t('nav.home') }}
              </NuxtLink>
              <NuxtLink
                :to="localePath('/token')"
                @click="closeMobileMenu"
                class="mobile-nav-link"
              >
                {{ t('nav.token') }}
              </NuxtLink>
              <NuxtLink
                :to="localePath('/como-funciona')"
                @click="closeMobileMenu"
                class="mobile-nav-link"
              >
                {{ t('nav.howItWorks') }}
              </NuxtLink>
              <NuxtLink
                :to="localePath('/documentacao/whitepaper')"
                @click="closeMobileMenu"
                class="mobile-nav-link"
              >
                {{ t('nav.documentation') }}
              </NuxtLink>
              <NuxtLink
                :to="localePath('/contato')"
                @click="closeMobileMenu"
                class="px-6 py-3 bg-gradient-to-r from-orange to-orange-light text-white font-semibold rounded-xl
                       transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,90,0,0.4)] text-center"
              >
                {{ t('nav.contact') }}
              </NuxtLink>
              <div class="pt-4 border-t border-gray-200/30">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </transition>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gradient-premium text-white mt-auto relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 bg-gradient-radial opacity-20"></div>
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl"></div>

      <div class="container-custom py-20 relative z-10">
        <!-- Top Section: Branding & Company Info -->
        <div class="mb-16 pb-12 border-b border-white/10">
          <div class="grid lg:grid-cols-2 gap-12 items-start">
            <!-- Left: Brand -->
            <div>
              <div class="flex items-center gap-4 mb-8">
                <img src="/logo.png" alt="Estruturart Golden Logo" class="h-12 w-auto" />
                <span class="text-3xl font-bold text-gradient-premium">Estruturart Golden</span>
              </div>
              <p class="text-white/70 text-lg mb-8 leading-relaxed max-w-xl">
                {{ t('hero.subtitle') }}
              </p>

              <!-- Contract Badge -->
              <div class="inline-flex items-center gap-3 px-6 py-3 glass-dark rounded-xl border border-gold/20 shadow-glow">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
                  <span class="text-xs text-gold uppercase tracking-wider font-bold">{{ t('footer.contract') }}</span>
                </div>
                <code class="text-sm font-mono text-white font-semibold">
                  {{ contract.slice(0, 6) }}...{{ contract.slice(-4) }}
                </code>
              </div>
            </div>

            <!-- Right: Company Info Card -->
            <div class="glass-gold p-8 rounded-2xl border border-gold/30">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shadow-glow">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div class="flex-grow">
                  <h3 class="text-xl font-bold text-white mb-2">{{ t('footer.company') }}</h3>
                  <p class="text-white/80 font-medium">{{ t('footer.cnpj') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Section: Links Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <!-- Documentation -->
          <div>
            <h3 class="text-xl font-bold text-gradient-gold mb-6 uppercase tracking-wider">{{ t('footer.documentation') }}</h3>
            <ul class="space-y-4">
              <li>
                <NuxtLink
                  :to="localePath('/documentacao/whitepaper')"
                  class="text-white/80 hover:text-gold transition-all duration-300 inline-flex items-center gap-3 group text-base"
                >
                  <svg class="w-5 h-5 text-gold/50 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="group-hover:translate-x-1 transition-transform">{{ t('documentation.sections.whitepaper') }}</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :to="localePath('/documentacao/whitepaper#anexos')"
                  class="text-white/80 hover:text-gold transition-all duration-300 inline-flex items-center gap-3 group text-base"
                >
                  <svg class="w-5 h-5 text-gold/50 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                  <span class="group-hover:translate-x-1 transition-transform">{{ locale === 'pt-BR' ? 'Anexos' : 'Attachments' }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Group Companies -->
          <div>
            <h3 class="text-xl font-bold text-gradient-gold mb-6 uppercase tracking-wider">{{ t('footer.groupCompanies') }}</h3>
            <ul class="space-y-4">
              <li>
                <a
                  href="https://estruturart.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-white/80 hover:text-gold transition-all duration-300 inline-flex items-center gap-3 group text-base"
                >
                  <svg class="w-5 h-5 text-gold/50 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span class="group-hover:translate-x-1 transition-transform">{{ t('footer.estruturartCapital') }}</span>
                  <svg class="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://estruturartbank.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-white/80 hover:text-gold transition-all duration-300 inline-flex items-center gap-3 group text-base"
                >
                  <svg class="w-5 h-5 text-gold/50 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                  <span class="group-hover:translate-x-1 transition-transform">{{ t('footer.estruturartBank') }}</span>
                  <svg class="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="text-xl font-bold text-gradient-gold mb-6 uppercase tracking-wider">{{ t('nav.contact') }}</h3>
            <ul class="space-y-4">
              <li>
                <a
                  href="tel:+553133097422"
                  class="text-white/80 hover:text-gold transition-all duration-300 inline-flex items-center gap-3 group text-base"
                >
                  <svg class="w-5 h-5 text-gold/50 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span class="group-hover:translate-x-1 transition-transform">(31) 3309-7422</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:estruturart@estruturart.com.br"
                  class="text-white/80 hover:text-gold transition-all duration-300 inline-flex items-center gap-3 group text-base"
                >
                  <svg class="w-5 h-5 text-gold/50 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span class="group-hover:translate-x-1 transition-transform break-all">estruturart@estruturart.com.br</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p class="text-white/60 text-base">
            {{ t('footer.copyright', { year: new Date().getFullYear() }) }}
          </p>
          <a
            :href="`${polygonScanUrl}/token/${contract}`"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2 px-5 py-2.5 glass-dark rounded-lg border border-white/10 hover:border-gold/30 transition-all duration-300"
          >
            <span class="text-white/80 group-hover:text-gold transition-colors font-medium">PolygonScan</span>
            <svg class="w-4 h-4 text-gold/50 group-hover:text-gold transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()

const contract = config.public.polygonContract
const polygonScanUrl = config.public.polygonScanUrl

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
/* Desktop Navigation Links */
.nav-link {
  @apply relative text-sm font-medium text-gray-700 transition-all duration-300;
  @apply hover:text-orange;
}

.nav-link::after {
  content: '';
  @apply absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-orange to-orange-light;
  @apply transform scale-x-0 transition-transform duration-300 origin-left;
}

.nav-link:hover::after {
  @apply scale-x-100;
}

.nav-link.router-link-active {
  @apply text-orange font-semibold;
}

.nav-link.router-link-active::after {
  @apply scale-x-100;
}

/* Mobile Navigation Links */
.mobile-nav-link {
  @apply text-base font-medium text-gray-700 transition-all duration-300;
  @apply hover:text-orange hover:translate-x-2;
  @apply pl-4 border-l-2 border-transparent hover:border-orange;
}

.mobile-nav-link.router-link-active {
  @apply text-orange font-semibold border-orange;
}
</style>
