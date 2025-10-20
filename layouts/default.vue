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

      <div class="container-custom py-16 relative z-10">
        <div class="grid md:grid-cols-3 gap-12">
          <!-- Branding -->
          <div>
            <div class="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Estruturart Golden Logo" class="h-10 w-auto" />
              <span class="text-2xl font-bold text-gradient-premium">Estruturart Golden</span>
            </div>
            <p class="text-white/70 text-base mb-6 leading-relaxed max-w-md">
              {{ t('hero.subtitle') }}
            </p>
            <div class="inline-flex items-center gap-2 px-4 py-2 glass-dark rounded-lg border border-gold/20">
              <span class="text-xs text-gold uppercase tracking-wider font-semibold">{{ t('footer.contract') }}</span>
              <code class="text-xs font-mono text-white">
                {{ contract.slice(0, 6) }}...{{ contract.slice(-4) }}
              </code>
            </div>
          </div>

          <!-- Links -->
          <div>
            <h3 class="font-bold text-lg mb-6 text-gradient-gold">{{ t('footer.documentation') }}</h3>
            <ul class="space-y-3 text-sm">
              <li>
                <NuxtLink
                  :to="localePath('/documentacao/whitepaper')"
                  class="text-white/70 hover:text-gold transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  <span class="w-1 h-1 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {{ t('documentation.sections.whitepaper') }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-lg mb-6 text-gradient-gold">{{ t('nav.contact') }}</h3>
            <ul class="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+553133097422"
                  class="text-white/70 hover:text-gold transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  <span class="w-1 h-1 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  (31) 3309-7422
                </a>
              </li>
              <li>
                <a
                  href="mailto:estruturart@estruturart.com.br"
                  class="text-white/70 hover:text-gold transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  <span class="w-1 h-1 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  estruturart@estruturart.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-white/50">
            {{ t('footer.copyright', { year: new Date().getFullYear() }) }}
          </p>
          <div class="flex gap-6">
            <a
              :href="`${polygonScanUrl}/token/${contract}`"
              target="_blank"
              rel="noopener noreferrer"
              class="group text-sm text-white/70 hover:text-gold transition-all duration-300 inline-flex items-center gap-2"
            >
              PolygonScan
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
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
