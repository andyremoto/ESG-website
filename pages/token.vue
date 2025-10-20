<template>
  <div class="overflow-hidden">
    <!-- Hero Section - Premium with Coin Image -->
    <section class="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-black via-black-soft to-black py-12 sm:py-16 lg:py-20">
      <!-- Background gradient effects -->
      <div class="absolute inset-0 bg-gradient-radial opacity-50"></div>
      <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange/5 rounded-full filter blur-3xl"></div>

      <div class="container-custom relative z-10">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <!-- Left: Content with animations -->
          <div class="space-y-5 sm:space-y-6 lg:space-y-8 animate-fade-in-up">
            <!-- Badge -->
            <div class="inline-block animate-fade-in">
              <div class="glass-gold px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-full shadow-glow">
                <span class="text-xs sm:text-sm font-bold text-gradient-premium tracking-wider uppercase">
                  {{ t('token.details.standardValue') }} • {{ t('token.details.chainValue') }}
                </span>
              </div>
            </div>

            <!-- Title with gradient -->
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up" style="animation-delay: 0.2s">
              <span class="text-gradient-premium">{{ t('token.title') }}</span>
            </h1>

            <!-- Subtitle -->
            <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-xl animate-fade-in-up" style="animation-delay: 0.4s">
              {{ t('token.subtitle') }}
            </p>

            <!-- CTA -->
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up" style="animation-delay: 0.6s">
              <a
                :href="`${config.public.polygonScanUrl}/token/${config.public.polygonContract}`"
                target="_blank"
                rel="noopener noreferrer"
                class="group relative px-6 py-3 sm:px-7 sm:py-3.5 lg:px-8 lg:py-4 bg-gradient-to-r from-orange to-orange-light text-white text-sm sm:text-base font-semibold rounded-xl sm:rounded-2xl
                       transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,90,0,0.6)] hover:scale-105 overflow-hidden inline-flex items-center justify-center gap-2"
              >
                <span class="relative z-10 flex items-center gap-2">
                  {{ t('ctas.viewOnScan') }}
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-orange-dark to-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <NuxtLink
                :to="localePath('/documentacao/whitepaper')"
                class="px-6 py-3 sm:px-7 sm:py-3.5 lg:px-8 lg:py-4 glass-dark text-white text-sm sm:text-base font-semibold rounded-xl sm:rounded-2xl
                       transition-all duration-300 hover:bg-white/10 hover:scale-105 flex items-center gap-2 justify-center"
              >
                {{ t('ctas.readDocs') }}
              </NuxtLink>
            </div>

            <!-- Add to Wallet Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up" style="animation-delay: 0.8s">
              <button
                @click="addToMetaMask"
                class="group px-5 py-2.5 sm:px-6 sm:py-3 bg-white/90 backdrop-blur-sm text-black text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl border-2 border-gold/50
                       transition-all duration-300 hover:bg-white hover:border-gold hover:scale-105 inline-flex items-center justify-center gap-2 sm:gap-3 shadow-lg"
              >
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                <span>{{ locale === 'pt-BR' ? 'Adicionar na MetaMask' : 'Add to MetaMask' }}</span>
              </button>

              <button
                @click="addToTrustWallet"
                class="group px-5 py-2.5 sm:px-6 sm:py-3 bg-white/90 backdrop-blur-sm text-black text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl border-2 border-gold/50
                       transition-all duration-300 hover:bg-white hover:border-gold hover:scale-105 inline-flex items-center justify-center gap-2 sm:gap-3 shadow-lg"
              >
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                <span>{{ locale === 'pt-BR' ? 'Adicionar na Trust Wallet' : 'Add to Trust Wallet' }}</span>
              </button>
            </div>
          </div>

          <!-- Right: Premium Coin Image -->
          <div class="relative animate-fade-in-right" style="animation-delay: 0.4s">
            <div class="relative rounded-2xl sm:rounded-3xl overflow-hidden">
              <!-- Decorative frame with glow -->
              <div class="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-gold/20 pointer-events-none z-10"></div>

              <!-- Coin Image with premium container -->
              <div class="relative p-6 sm:p-8 lg:p-12 glass-dark rounded-2xl sm:rounded-3xl shadow-glow-lg">
                <img
                  src="/coin.png"
                  alt="Estruturart Golden Token"
                  class="w-full h-auto object-contain animate-float"
                  style="filter: drop-shadow(0 20px 40px rgba(201, 169, 89, 0.4))"
                />
              </div>
            </div>

            <!-- Floating decorative elements -->
            <div class="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-gold/20 rounded-full filter blur-2xl animate-float"></div>
            <div class="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-32 h-32 sm:w-40 sm:h-40 bg-orange/20 rounded-full filter blur-2xl animate-float-delayed"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid with scroll animations -->
    <section class="section bg-white relative">
      <div class="container-custom">
        <div class="animate-on-scroll" ref="featuresSection">
          <h2 class="text-4xl md:text-5xl font-bold text-center mb-4">
            <span class="text-gradient-gold">Características</span>
          </h2>
          <p class="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            {{ locale === 'pt-BR' ? 'Governança institucional e transparência on-chain' : 'Institutional governance and on-chain transparency' }}
          </p>

          <div class="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div class="hover-lift">
              <div class="h-full p-5 sm:p-6 md:p-8 glass rounded-2xl sm:rounded-3xl border border-gray-200 hover:border-gold/30 transition-colors">
                <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-5 md:mb-6 shadow-glow">
                  🏆
                </div>
                <h3 class="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">{{ t('token.backing.title') }}</h3>
                <p class="text-sm sm:text-base text-gray-700 leading-relaxed">{{ t('token.backing.description') }}</p>
              </div>
            </div>

            <div class="hover-lift" style="animation-delay: 0.1s">
              <div class="h-full p-5 sm:p-6 md:p-8 glass rounded-2xl sm:rounded-3xl border border-gray-200 hover:border-gold/30 transition-colors">
                <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-5 md:mb-6 shadow-glow">
                  🔐
                </div>
                <h3 class="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">{{ t('token.governance.title') }}</h3>
                <p class="text-sm sm:text-base text-gray-700 leading-relaxed">{{ t('token.governance.description') }}</p>
              </div>
            </div>

            <div class="hover-lift" style="animation-delay: 0.2s">
              <div class="h-full p-5 sm:p-6 md:p-8 glass rounded-2xl sm:rounded-3xl border border-gray-200 hover:border-gold/30 transition-colors">
                <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-5 md:mb-6 shadow-glow">
                  ⚖️
                </div>
                <h3 class="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">{{ t('token.policy.title') }}</h3>
                <p class="text-sm sm:text-base text-gray-700 leading-relaxed">{{ t('token.policy.description') }}</p>
              </div>
            </div>

            <div class="hover-lift" style="animation-delay: 0.3s">
              <div class="h-full p-5 sm:p-6 md:p-8 glass rounded-2xl sm:rounded-3xl border border-gray-200 hover:border-gold/30 transition-colors">
                <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-5 md:mb-6 shadow-glow">
                  🛡️
                </div>
                <h3 class="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">{{ t('token.emergency.title') }}</h3>
                <p class="text-sm sm:text-base text-gray-700 leading-relaxed">{{ t('token.emergency.description') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Details -->
    <section class="section bg-gradient-to-br from-black via-black-soft to-black relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl animate-float"></div>
      <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-orange/10 rounded-full filter blur-3xl animate-float-delayed"></div>

      <div class="container-custom relative z-10">
        <div class="animate-on-scroll" ref="detailsSection">
          <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
            <span class="text-gradient-premium">{{ t('token.details.title') }}</span>
          </h2>

          <div class="max-w-6xl mx-auto">
            <!-- Grid de cards premium -->
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <!-- Blockchain -->
              <div class="hover-lift">
                <div class="h-full glass-gold p-6 rounded-2xl border border-gold/30 hover:border-gold/50 transition-all">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shadow-glow">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p class="text-xs text-gold/80 uppercase tracking-wider font-bold">{{ t('token.details.chain') }}</p>
                  </div>
                  <p class="text-xl font-bold text-white">{{ t('token.details.chainValue') }}</p>
                </div>
              </div>

              <!-- Standard -->
              <div class="hover-lift">
                <div class="h-full glass-gold p-6 rounded-2xl border border-gold/30 hover:border-gold/50 transition-all">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shadow-glow">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p class="text-xs text-gold/80 uppercase tracking-wider font-bold">{{ t('token.details.standard') }}</p>
                  </div>
                  <p class="text-xl font-bold text-white">{{ t('token.details.standardValue') }}</p>
                </div>
              </div>

              <!-- Decimals -->
              <div class="hover-lift">
                <div class="h-full glass-gold p-6 rounded-2xl border border-gold/30 hover:border-gold/50 transition-all">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shadow-glow">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                      </svg>
                    </div>
                    <p class="text-xs text-gold/80 uppercase tracking-wider font-bold">{{ t('token.details.decimals') }}</p>
                  </div>
                  <p class="text-xl font-bold text-white">18</p>
                </div>
              </div>

              <!-- Supply -->
              <div class="hover-lift">
                <div class="h-full glass-gold p-6 rounded-2xl border border-gold/30 hover:border-gold/50 transition-all">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shadow-glow">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p class="text-xs text-gold/80 uppercase tracking-wider font-bold">{{ t('token.details.supply') }}</p>
                  </div>
                  <p class="text-xl font-bold text-white">
                    <span v-if="supplyLoading" class="flex items-center gap-2">
                      <svg class="animate-spin h-4 w-4 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span class="text-sm">{{ t('token.details.supplyLoading') }}</span>
                    </span>
                    <span v-else-if="supplyError" class="text-red-400 text-sm">{{ t('token.details.supplyError') }}</span>
                    <span v-else-if="supplyData" class="text-xl">{{ n(supplyData.totalSupply, 'decimal') }}</span>
                    <span v-else>—</span>
                  </p>
                </div>
              </div>
            </div>

            <!-- Contract Card - Destaque especial -->
            <div class="relative group">
              <!-- Glow effect -->
              <div class="absolute -inset-2 bg-gradient-to-r from-gold/20 via-orange/20 to-gold/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>

              <!-- Card content -->
              <div class="relative glass-gold p-8 rounded-3xl border-2 border-gold/40 hover:border-gold/60 transition-all">
                <div class="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  <!-- Icon + Label -->
                  <div class="flex items-center gap-4 flex-shrink-0">
                    <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shadow-glow">
                      <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-xs text-gold/80 uppercase tracking-wider font-bold mb-1">{{ t('token.details.contract') }}</p>
                      <p class="text-sm text-white/90 font-medium">Smart Contract Address</p>
                    </div>
                  </div>

                  <!-- Contract Address -->
                  <div class="flex-grow w-full lg:w-auto">
                    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <code class="flex-grow text-xs sm:text-sm font-mono bg-black/20 text-white px-4 py-3 rounded-xl border border-gold/30 break-all overflow-x-auto font-semibold">
                        {{ config.public.polygonContract }}
                      </code>
                      <a
                        :href="`${config.public.polygonScanUrl}/token/${config.public.polygonContract}`"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex-shrink-0 group/btn px-6 py-3 bg-gradient-to-r from-orange to-orange-light text-white text-sm font-bold rounded-xl
                               transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,90,0,0.6)] hover:scale-105 whitespace-nowrap text-center
                               inline-flex items-center justify-center gap-2"
                      >
                        <span>View on Scan</span>
                        <svg class="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="animate-on-scroll" ref="faqSection">
          <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
            <span class="text-gradient-gold">{{ t('token.faq.title') }}</span>
          </h2>

          <div class="max-w-3xl mx-auto space-y-4">
            <details class="group p-6 glass rounded-2xl border border-gray-200 hover:border-gold/30 cursor-pointer hover-lift transition-all">
              <summary class="font-semibold text-lg text-black list-none flex justify-between items-center">
                {{ t('token.faq.q1') }}
                <svg class="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="mt-4 text-gray-700 leading-relaxed">{{ t('token.faq.a1') }}</p>
            </details>

            <details class="group p-6 glass rounded-2xl border border-gray-200 hover:border-gold/30 cursor-pointer hover-lift transition-all">
              <summary class="font-semibold text-lg text-black list-none flex justify-between items-center">
                {{ t('token.faq.q2') }}
                <svg class="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="mt-4 text-gray-700 leading-relaxed">{{ t('token.faq.a2') }}</p>
            </details>

            <details class="group p-6 glass rounded-2xl border border-gray-200 hover:border-gold/30 cursor-pointer hover-lift transition-all">
              <summary class="font-semibold text-lg text-black list-none flex justify-between items-center">
                {{ t('token.faq.q3') }}
                <svg class="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="mt-4 text-gray-700 leading-relaxed">{{ t('token.faq.a3') }}</p>
            </details>

            <details class="group p-6 glass rounded-2xl border border-gray-200 hover:border-gold/30 cursor-pointer hover-lift transition-all">
              <summary class="font-semibold text-lg text-black list-none flex justify-between items-center">
                {{ t('token.faq.q4') }}
                <svg class="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="mt-4 text-gray-700 leading-relaxed">{{ t('token.faq.a4') }}</p>
            </details>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-gradient-premium text-white relative overflow-hidden">
      <!-- Background effects -->
      <div class="absolute inset-0 bg-gradient-radial opacity-30"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div class="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl animate-float"></div>
      </div>

      <div class="container-custom text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="text-gradient-premium">
            {{ locale === 'pt-BR' ? 'Quer saber mais?' : 'Want to know more?' }}
          </span>
        </h2>
        <p class="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
          {{
            locale === 'pt-BR'
              ? 'Acesse nossa documentação completa ou entre em contato para mais informações.'
              : 'Access our complete documentation or contact us for more information.'
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
            :to="localePath('/contato')"
            class="px-10 py-5 glass-dark border-2 border-white/20 text-white font-bold text-lg rounded-2xl
                   transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            {{ t('ctas.contact') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const { t, locale, n } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()

// Token supply data
const { data: supplyData, loading: supplyLoading, error: supplyError } = useTokenSupply()

// Refs for scroll animations
const featuresSection = ref<HTMLElement | null>(null)
const detailsSection = ref<HTMLElement | null>(null)
const faqSection = ref<HTMLElement | null>(null)

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

  const sections = [featuresSection.value, detailsSection.value, faqSection.value]
  sections.forEach((section) => {
    if (section) observer.observe(section)
  })
})

// Add token to MetaMask
const addToMetaMask = async () => {
  try {
    // Check if we're on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      // Check if we're on Polygon network (chainId 137 = 0x89)
      const chainId = await window.ethereum.request({ method: 'eth_chainId' })

      if (chainId !== '0x89') {
        // Switch to Polygon network first
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x89' }],
          })
        } catch (switchError: any) {
          // Network not added, add it
          if (switchError.code === 4902) {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: '0x89',
                chainName: 'Polygon Mainnet',
                nativeCurrency: {
                  name: 'MATIC',
                  symbol: 'MATIC',
                  decimals: 18
                },
                rpcUrls: ['https://polygon-rpc.com/'],
                blockExplorerUrls: ['https://polygonscan.com/']
              }]
            })
          } else {
            throw switchError
          }
        }
      }

      // Add token on Polygon network
      await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: config.public.polygonContract,
            symbol: 'ESG',
            decimals: 18,
            image: `${config.public.siteUrl}/logo-256.png`
          }
        }
      })
    } else if (isMobile) {
      // On mobile, open MetaMask deep link
      const currentUrl = window.location.href
      const metamaskUrl = `https://metamask.app.link/dapp/${currentUrl.replace('https://', '').replace('http://', '')}`

      if (confirm(locale.value === 'pt-BR'
        ? 'Você será redirecionado para a MetaMask. Depois de abrir, use o botão "Adicionar na MetaMask" novamente.'
        : 'You will be redirected to MetaMask. After opening, use the "Add to MetaMask" button again.')) {
        window.location.href = metamaskUrl
      }
    } else {
      alert(locale.value === 'pt-BR'
        ? 'MetaMask não detectada. Por favor, instale a extensão MetaMask.'
        : 'MetaMask not detected. Please install the MetaMask extension.')
    }
  } catch (error) {
    console.error('Error adding token to MetaMask:', error)
    alert(locale.value === 'pt-BR'
      ? 'Erro ao adicionar token na MetaMask'
      : 'Error adding token to MetaMask')
  }
}

// Add token to Trust Wallet
const addToTrustWallet = async () => {
  try {
    // Check if we're on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    // Trust Wallet uses the same Web3 provider standard
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      // Check if we're on Polygon network (chainId 137 = 0x89)
      const chainId = await window.ethereum.request({ method: 'eth_chainId' })

      if (chainId !== '0x89') {
        // Switch to Polygon network first
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x89' }],
          })
        } catch (switchError: any) {
          // Network not added, add it
          if (switchError.code === 4902) {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: '0x89',
                chainName: 'Polygon Mainnet',
                nativeCurrency: {
                  name: 'MATIC',
                  symbol: 'MATIC',
                  decimals: 18
                },
                rpcUrls: ['https://polygon-rpc.com/'],
                blockExplorerUrls: ['https://polygonscan.com/']
              }]
            })
          } else {
            throw switchError
          }
        }
      }

      // Add token on Polygon network
      await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: config.public.polygonContract,
            symbol: 'ESG',
            decimals: 18,
            image: `${config.public.siteUrl}/logo-256.png`
          }
        }
      })
    } else if (isMobile) {
      // On mobile, open Trust Wallet deep link
      const currentUrl = window.location.href
      const trustWalletUrl = `https://link.trustwallet.com/open_url?url=${encodeURIComponent(currentUrl)}`

      if (confirm(locale.value === 'pt-BR'
        ? 'Você será redirecionado para a Trust Wallet. Depois de abrir, use o botão "Adicionar na Trust Wallet" novamente.'
        : 'You will be redirected to Trust Wallet. After opening, use the "Add to Trust Wallet" button again.')) {
        window.location.href = trustWalletUrl
      }
    } else {
      alert(locale.value === 'pt-BR'
        ? 'Trust Wallet não detectada. Por favor, use o navegador da Trust Wallet.'
        : 'Trust Wallet not detected. Please use the Trust Wallet browser.')
    }
  } catch (error) {
    console.error('Error adding token to Trust Wallet:', error)
    alert(locale.value === 'pt-BR'
      ? 'Erro ao adicionar token na Trust Wallet'
      : 'Error adding token to Trust Wallet')
  }
}

// SEO
useHead({
  title: t('meta.token.title'),
  meta: [
    { name: 'description', content: t('meta.token.description') },
    { property: 'og:title', content: t('meta.token.title') },
    { property: 'og:description', content: t('meta.token.description') }
  ]
})
</script>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .animate-float,
  .animate-float-delayed {
    animation: none !important;
  }
}
</style>
