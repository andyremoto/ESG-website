<template>
  <div class="overflow-hidden">
    <!-- Gradient Transition between Header and Hero -->
    <div class="h-24 bg-gradient-to-b from-white via-gray-100/50 to-black"></div>

    <!-- Hero Section - Premium with Video - Mobile Optimized -->
    <section class="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-black via-black-soft to-black -mt-24">
      <!-- Background gradient effects -->
      <div class="absolute inset-0 bg-gradient-radial opacity-50"></div>
      <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange/5 rounded-full filter blur-3xl"></div>

      <div class="container-custom relative z-10 pt-12 sm:pt-16">
        <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <!-- Left: Content with animations -->
          <div class="space-y-6 sm:space-y-8 animate-fade-in-up">
            <!-- Badge with glow -->
            <div class="inline-block animate-fade-in">
              <div class="glass-gold px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-glow">
                <span class="text-xs sm:text-sm font-bold text-gradient-premium tracking-wider uppercase">
                  Estruturart Golden
                </span>
              </div>
            </div>

            <!-- Title with gradient - Mobile optimized -->
            <h1 class="heading-xl text-white animate-fade-in-up" style="animation-delay: 0.2s">
              <span class="text-gradient-premium">{{ t('hero.title').split('.')[0] }}</span>
              <br />
              <span class="text-white/90">{{ t('hero.title').split('.').slice(1).join('.') }}</span>
            </h1>

            <!-- Subtitle - Mobile optimized -->
            <p class="body-lg text-white/70 max-w-xl animate-fade-in-up" style="animation-delay: 0.4s">
              {{ t('hero.subtitle') }}
            </p>

            <!-- CTAs with hover effects - Mobile optimized -->
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up" style="animation-delay: 0.6s">
              <NuxtLink
                :to="localePath('/documentacao/whitepaper')"
                class="btn-mobile-lg group relative bg-gradient-to-r from-orange to-orange-light text-white font-semibold rounded-2xl
                       transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,90,0,0.6)] hover:scale-105 overflow-hidden text-center"
              >
                <span class="relative z-10 flex items-center justify-center gap-2">
                  {{ t('ctas.readDocs') }}
                  <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-orange-dark to-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </NuxtLink>

              <a
                :href="`${config.public.polygonScanUrl}/token/${config.public.polygonContract}`"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-mobile-lg glass-dark text-white font-semibold rounded-2xl
                       transition-all duration-300 hover:bg-white/10 hover:scale-105 flex items-center gap-2 justify-center"
              >
                {{ t('ctas.viewOnScan') }}
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <!-- Pegging info with glow effect - Mobile optimized -->
            <div class="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 glass-gold rounded-full shadow-inner-glow animate-fade-in-up" style="animation-delay: 0.8s">
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shadow-glow animate-glow-pulse">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-sm sm:text-base font-bold text-gradient-premium">
                {{ t('hero.pegging') }}
              </span>
            </div>
          </div>

          <!-- Right: Premium Video - Mobile optimized -->
          <div class="relative animate-fade-in-right lg:block" style="animation-delay: 0.4s">
            <div
              @click="openVideoModal"
              class="video-container relative overflow-hidden shadow-glow-lg cursor-pointer group"
            >
              <!-- Decorative frame -->
              <div class="absolute inset-0 border-2 border-gold/20 pointer-events-none z-10 group-hover:border-gold/40 transition-colors rounded-2xl sm:rounded-3xl"></div>

              <!-- Video - Mobile optimized -->
              <video
                autoplay
                loop
                muted
                playsinline
                webkit-playsinline
                class="video-mobile-optimized transition-transform duration-300 group-hover:scale-105"
              >
                <source :src="heroVideoSource" type="video/mp4">
                Your browser does not support the video tag.
              </video>

              <!-- Play overlay -->
              <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div class="w-20 h-20 rounded-full bg-gradient-to-br from-orange to-orange-light flex items-center justify-center shadow-[0_0_40px_rgba(255,90,0,0.6)] transform group-hover:scale-110 transition-transform">
                  <svg class="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>

              <!-- Glow overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
            </div>

            <!-- Floating decorative elements -->
            <div class="absolute -top-6 -right-6 w-32 h-32 bg-gold/20 rounded-full filter blur-2xl animate-float"></div>
            <div class="absolute -bottom-6 -left-6 w-40 h-40 bg-orange/20 rounded-full filter blur-2xl animate-float-delayed"></div>
          </div>
        </div>

        <!-- Price Ticker with glassmorphism -->
        <div class="mt-20 animate-fade-in-up" style="animation-delay: 1s">
          <div class="glass-dark p-8 rounded-3xl border border-white/10">
            <PriceTicker />
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Features Section with scroll animations - Mobile Optimized -->
    <section class="section bg-white relative">
      <div class="container-custom">
        <div class="animate-on-scroll" ref="featuresSection">
          <!-- Section Header - Mobile Optimized -->
          <div class="text-center mb-10 sm:mb-16">
            <h2 class="heading-lg mb-4 sm:mb-6">
              <span class="text-gradient-gold">{{ t('token.title') }}</span>
            </h2>
            <p class="body-base text-gray-600 max-w-3xl mx-auto">
              {{ t('token.subtitle') }}
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div class="hover-lift">
              <div class="h-full card-mobile-optimized glass rounded-2xl sm:rounded-3xl border border-gray-200 hover:border-gold/30 transition-colors">
                <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 shadow-glow">
                  🏆
                </div>
                <h3 class="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">{{ t('token.backing.title') }}</h3>
                <p class="text-sm sm:text-base text-gray-700 leading-relaxed">{{ t('token.backing.description') }}</p>
              </div>
            </div>
            <div class="hover-lift" style="animation-delay: 0.1s">
              <div class="h-full p-8 glass rounded-3xl border border-gray-200 hover:border-gold/30 transition-colors">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-3xl mb-6 shadow-glow">
                  🔐
                </div>
                <h3 class="text-xl font-bold text-black mb-3">{{ t('token.governance.title') }}</h3>
                <p class="text-gray-700 leading-relaxed">{{ t('token.governance.description') }}</p>
              </div>
            </div>
            <div class="hover-lift" style="animation-delay: 0.2s">
              <div class="h-full p-8 glass rounded-3xl border border-gray-200 hover:border-gold/30 transition-colors">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-3xl mb-6 shadow-glow">
                  ⚖️
                </div>
                <h3 class="text-xl font-bold text-black mb-3">{{ t('token.policy.title') }}</h3>
                <p class="text-gray-700 leading-relaxed">{{ t('token.policy.description') }}</p>
              </div>
            </div>
            <div class="hover-lift" style="animation-delay: 0.3s">
              <div class="h-full p-8 glass rounded-3xl border border-gray-200 hover:border-gold/30 transition-colors">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-3xl mb-6 shadow-glow">
                  🛡️
                </div>
                <h3 class="text-xl font-bold text-black mb-3">{{ t('token.emergency.title') }}</h3>
                <p class="text-gray-700 leading-relaxed">{{ t('token.emergency.description') }}</p>
              </div>
            </div>
          </div>

          <div class="mt-16 text-center">
            <NuxtLink
              :to="localePath('/token')"
              class="group inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-orange to-orange-light text-white font-bold text-lg rounded-2xl
                     transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,90,0,0.6)] hover:scale-105"
            >
              {{ t('ctas.learnMore') }}
              <svg class="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Gold Section - Educational -->
    <section class="section bg-gradient-to-br from-black via-black-soft to-black text-white relative overflow-hidden">
      <!-- Background effects -->
      <div class="absolute inset-0 bg-gradient-radial opacity-20"></div>
      <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl animate-float"></div>

      <div class="container-custom relative z-10">
        <div class="animate-on-scroll" ref="whyGoldSection">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span class="text-gradient-premium">
                {{ locale === 'pt-BR' ? 'Por que Investir em Ouro?' : 'Why Invest in Gold?' }}
              </span>
            </h2>
            <p class="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {{
                locale === 'pt-BR'
                  ? 'O ouro é o ativo mais confiável da humanidade há mais de 5.000 anos'
                  : 'Gold has been humanity\'s most trusted asset for over 5,000 years'
              }}
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 mb-16">
            <!-- Reason 1 -->
            <div class="hover-lift">
              <div class="glass-dark p-8 rounded-3xl border border-gold/10 h-full">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center mb-6 shadow-glow">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">
                  {{ locale === 'pt-BR' ? 'Proteção contra Inflação' : 'Inflation Protection' }}
                </h3>
                <p class="text-white/70 leading-relaxed">
                  {{
                    locale === 'pt-BR'
                      ? 'O ouro historicamente mantém seu valor ao longo do tempo, protegendo seu patrimônio contra a desvalorização da moeda.'
                      : 'Gold historically maintains its value over time, protecting your wealth against currency devaluation.'
                  }}
                </p>
              </div>
            </div>

            <!-- Reason 2 -->
            <div class="hover-lift" style="animation-delay: 0.2s">
              <div class="glass-dark p-8 rounded-3xl border border-gold/10 h-full">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center mb-6 shadow-glow">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">
                  {{ locale === 'pt-BR' ? 'Diversificação' : 'Diversification' }}
                </h3>
                <p class="text-white/70 leading-relaxed">
                  {{
                    locale === 'pt-BR'
                      ? 'O ouro tem baixa correlação com ações e títulos, sendo ideal para diversificação de carteira e redução de risco.'
                      : 'Gold has low correlation with stocks and bonds, making it ideal for portfolio diversification and risk reduction.'
                  }}
                </p>
              </div>
            </div>

            <!-- Reason 3 -->
            <div class="hover-lift" style="animation-delay: 0.4s">
              <div class="glass-dark p-8 rounded-3xl border border-gold/10 h-full">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center mb-6 shadow-glow">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">
                  {{ locale === 'pt-BR' ? 'Liquidez Global' : 'Global Liquidity' }}
                </h3>
                <p class="text-white/70 leading-relaxed">
                  {{
                    locale === 'pt-BR'
                      ? 'O ouro é reconhecido e negociado em todo o mundo, oferecendo liquidez imediata em qualquer mercado.'
                      : 'Gold is recognized and traded worldwide, offering immediate liquidity in any market.'
                  }}
                </p>
              </div>
            </div>
          </div>

          <!-- Gold Stats -->
          <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center glass-gold p-6 rounded-2xl border border-gold/20">
              <p class="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">5,000+</p>
              <p class="text-sm text-white/70 font-medium">
                {{ locale === 'pt-BR' ? 'Anos de História' : 'Years of History' }}
              </p>
            </div>
            <div class="text-center glass-gold p-6 rounded-2xl border border-gold/20">
              <p class="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">190K+</p>
              <p class="text-sm text-white/70 font-medium">
                {{ locale === 'pt-BR' ? 'Toneladas Extraídas' : 'Tonnes Mined' }}
              </p>
            </div>
            <div class="text-center glass-gold p-6 rounded-2xl border border-gold/20">
              <p class="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">$13T+</p>
              <p class="text-sm text-white/70 font-medium">
                {{ locale === 'pt-BR' ? 'Mercado Global' : 'Global Market' }}
              </p>
            </div>
            <div class="text-center glass-gold p-6 rounded-2xl border border-gold/20">
              <p class="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">+450%</p>
              <p class="text-sm text-white/70 font-medium">
                {{ locale === 'pt-BR' ? 'Valorização 20 anos' : '20yr Appreciation' }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Section -->
    <section class="section bg-white relative">
      <div class="container-custom">
        <div class="animate-on-scroll" ref="comparisonSection">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span class="text-gradient-gold">
                {{ locale === 'pt-BR' ? 'Estruturart Golden (ESG) vs Ouro Tradicional' : 'Estruturart Golden (ESG) vs Traditional Gold' }}
              </span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {{
                locale === 'pt-BR'
                  ? 'Compare as vantagens do token digital lastreado em ouro com investimentos tradicionais'
                  : 'Compare the advantages of the gold-backed digital token with traditional investments'
              }}
            </p>
          </div>

          <div class="max-w-5xl mx-auto">
            <!-- Desktop Table View -->
            <div class="hidden md:block glass rounded-3xl border border-gray-200 overflow-hidden">
              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead>
                    <tr class="bg-gradient-to-r from-gold-dark/10 to-gold/10 border-b border-gray-200">
                      <th class="text-left p-6 font-bold text-gray-900">{{ locale === 'pt-BR' ? 'Característica' : 'Feature' }}</th>
                      <th class="text-center p-6">
                        <div class="flex flex-col items-center gap-2">
                          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange to-orange-light flex items-center justify-center shadow-[0_0_20px_rgba(255,90,0,0.3)]">
                            <span class="text-2xl">🪙</span>
                          </div>
                          <span class="font-bold text-orange">ESG Token</span>
                        </div>
                      </th>
                      <th class="text-center p-6">
                        <div class="flex flex-col items-center gap-2">
                          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shadow-glow">
                            <span class="text-2xl">🏦</span>
                          </div>
                          <span class="font-bold text-gray-700">{{ locale === 'pt-BR' ? 'Ouro Físico' : 'Physical Gold' }}</span>
                        </div>
                      </th>
                      <th class="text-center p-6">
                        <div class="flex flex-col items-center gap-2">
                          <div class="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center">
                            <span class="text-2xl">📈</span>
                          </div>
                          <span class="font-bold text-gray-700">ETF</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr class="hover:bg-gray-50 transition-colors">
                      <td class="p-6 font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Liquidez 24/7' : '24/7 Liquidity' }}</td>
                      <td class="p-6 text-center"><span class="text-2xl text-green-600">✓</span></td>
                      <td class="p-6 text-center"><span class="text-2xl text-red-600">✗</span></td>
                      <td class="p-6 text-center"><span class="text-2xl text-yellow-600">~</span></td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors">
                      <td class="p-6 font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Investimento Mínimo' : 'Minimum Investment' }}</td>
                      <td class="p-6 text-center text-sm font-semibold text-green-600">{{ locale === 'pt-BR' ? 'Baixo' : 'Low' }}</td>
                      <td class="p-6 text-center text-sm font-semibold text-red-600">{{ locale === 'pt-BR' ? 'Alto' : 'High' }}</td>
                      <td class="p-6 text-center text-sm font-semibold text-yellow-600">{{ locale === 'pt-BR' ? 'Médio' : 'Medium' }}</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors">
                      <td class="p-6 font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Custódia' : 'Custody' }}</td>
                      <td class="p-6 text-center text-sm font-semibold text-green-600">{{ locale === 'pt-BR' ? 'Institucional' : 'Institutional' }}</td>
                      <td class="p-6 text-center text-sm font-semibold text-yellow-600">{{ locale === 'pt-BR' ? 'Própria' : 'Self' }}</td>
                      <td class="p-6 text-center text-sm font-semibold text-yellow-600">{{ locale === 'pt-BR' ? 'Fundo' : 'Fund' }}</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors">
                      <td class="p-6 font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Transparência' : 'Transparency' }}</td>
                      <td class="p-6 text-center"><span class="text-2xl text-green-600">✓</span></td>
                      <td class="p-6 text-center"><span class="text-2xl text-green-600">✓</span></td>
                      <td class="p-6 text-center"><span class="text-2xl text-yellow-600">~</span></td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors">
                      <td class="p-6 font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Resgate Físico' : 'Physical Redemption' }}</td>
                      <td class="p-6 text-center"><span class="text-2xl text-green-600">✓</span></td>
                      <td class="p-6 text-center"><span class="text-2xl text-green-600">✓</span></td>
                      <td class="p-6 text-center"><span class="text-2xl text-red-600">✗</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Mobile Card View -->
            <div class="md:hidden space-y-4">
              <!-- ESG Token Card -->
              <div class="glass rounded-2xl border-2 border-orange/30 overflow-hidden">
                <!-- Card Header -->
                <div class="bg-gradient-to-r from-orange/10 to-orange-light/10 p-4 border-b border-orange/20">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-orange to-orange-light flex items-center justify-center shadow-[0_0_20px_rgba(255,90,0,0.3)]">
                      <span class="text-2xl">🪙</span>
                    </div>
                    <span class="text-lg font-bold text-orange">ESG Token</span>
                  </div>
                </div>
                <!-- Card Body -->
                <div class="divide-y divide-gray-200">
                  <div class="p-4 flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Liquidez 24/7' : '24/7 Liquidity' }}</span>
                    <span class="text-2xl text-green-600">✓</span>
                  </div>
                  <div class="p-4 flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Investimento Mínimo' : 'Minimum Investment' }}</span>
                    <span class="text-sm font-semibold text-green-600">{{ locale === 'pt-BR' ? 'Baixo' : 'Low' }}</span>
                  </div>
                  <div class="p-4 flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Custódia' : 'Custody' }}</span>
                    <span class="text-sm font-semibold text-green-600">{{ locale === 'pt-BR' ? 'Institucional' : 'Institutional' }}</span>
                  </div>
                  <div class="p-4 flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Transparência' : 'Transparency' }}</span>
                    <span class="text-2xl text-green-600">✓</span>
                  </div>
                  <div class="p-4 flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Resgate Físico' : 'Physical Redemption' }}</span>
                    <span class="text-2xl text-green-600">✓</span>
                  </div>
                </div>
              </div>

              <!-- Ouro Físico Card -->
              <div class="glass rounded-2xl border-2 border-gold/30 overflow-hidden">
                <!-- Card Header -->
                <div class="bg-gradient-to-r from-gold-dark/10 to-gold/10 p-4 border-b border-gold/20">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shadow-glow">
                      <span class="text-2xl">🏦</span>
                    </div>
                    <span class="text-lg font-bold text-gray-700">{{ locale === 'pt-BR' ? 'Ouro Físico' : 'Physical Gold' }}</span>
                  </div>
                </div>
                <!-- Card Body -->
                <div class="divide-y divide-gray-200">
                  <div class="p-4 flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Liquidez 24/7' : '24/7 Liquidity' }}</span>
                    <span class="text-2xl text-red-600">✗</span>
                  </div>
                  <div class="p-4 flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Investimento Mínimo' : 'Minimum Investment' }}</span>
                    <span class="text-sm font-semibold text-red-600">{{ locale === 'pt-BR' ? 'Alto' : 'High' }}</span>
                  </div>
                  <div class="p-4 flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Custódia' : 'Custody' }}</span>
                    <span class="text-sm font-semibold text-yellow-600">{{ locale === 'pt-BR' ? 'Própria' : 'Self' }}</span>
                  </div>
                  <div class="p-4 flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Transparência' : 'Transparency' }}</span>
                    <span class="text-2xl text-green-600">✓</span>
                  </div>
                  <div class="p-4 flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Resgate Físico' : 'Physical Redemption' }}</span>
                    <span class="text-2xl text-green-600">✓</span>
                  </div>
                </div>
              </div>

              <!-- ETF Card -->
              <div class="glass rounded-2xl border-2 border-gray-300 overflow-hidden">
                <!-- Card Header -->
                <div class="bg-gray-100 p-4 border-b border-gray-200">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 flex-shrink-0 rounded-xl bg-gray-200 flex items-center justify-center">
                      <span class="text-2xl">📈</span>
                    </div>
                    <span class="text-lg font-bold text-gray-700">ETF</span>
                  </div>
                </div>
                <!-- Card Body -->
                <div class="divide-y divide-gray-200">
                  <div class="p-4 flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Liquidez 24/7' : '24/7 Liquidity' }}</span>
                    <span class="text-2xl text-yellow-600">~</span>
                  </div>
                  <div class="p-4 flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Investimento Mínimo' : 'Minimum Investment' }}</span>
                    <span class="text-sm font-semibold text-yellow-600">{{ locale === 'pt-BR' ? 'Médio' : 'Medium' }}</span>
                  </div>
                  <div class="p-4 flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Custódia' : 'Custody' }}</span>
                    <span class="text-sm font-semibold text-yellow-600">{{ locale === 'pt-BR' ? 'Fundo' : 'Fund' }}</span>
                  </div>
                  <div class="p-4 flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Transparência' : 'Transparency' }}</span>
                    <span class="text-2xl text-yellow-600">~</span>
                  </div>
                  <div class="p-4 flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-900">{{ locale === 'pt-BR' ? 'Resgate Físico' : 'Physical Redemption' }}</span>
                    <span class="text-2xl text-red-600">✗</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gold Price Chart - Premium Section -->
    <section class="section bg-gradient-to-b from-black via-black-soft to-black relative overflow-hidden">
      <!-- Decorative background effects -->
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange/10 rounded-full filter blur-3xl animate-float-delayed"></div>

      <div class="container-custom relative z-10">
        <div class="animate-on-scroll" ref="chartSection">
          <!-- Section Header -->
          <div class="text-center mb-12">
            <div class="inline-block mb-6">
              <div class="glass-gold px-6 py-3 rounded-full shadow-glow">
                <span class="text-sm font-bold text-gradient-premium tracking-wider uppercase">
                  {{ locale === 'pt-BR' ? 'Histórico de Valorização' : 'Historical Performance' }}
                </span>
              </div>
            </div>

            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              <span class="text-gradient-premium">
                {{ locale === 'pt-BR' ? 'Evolução do Preço do Ouro' : 'Gold Price Evolution' }}
              </span>
            </h2>

            <p class="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {{
                locale === 'pt-BR'
                  ? 'Acompanhe o histórico completo do preço do ouro em tempo real. Como cada ESG representa 1 grama de ouro, a valorização do metal se reflete diretamente no token.'
                  : 'Track the complete gold price history in real-time. Since each ESG represents 1 gram of gold, the metal\'s appreciation is directly reflected in the token.'
              }}
            </p>
          </div>

          <!-- TradingView Chart Component -->
          <div class="relative">
            <!-- Decorative frame -->
            <div class="absolute -inset-4 bg-gradient-to-r from-gold/20 via-orange/20 to-gold/20 rounded-3xl blur-xl opacity-50"></div>

            <!-- Chart Container -->
            <div class="relative glass-dark p-4 md:p-8 rounded-3xl border border-gold/20 shadow-glow-lg">
              <GoldChart />

              <!-- Chart Legend/Info -->
              <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="p-4 glass-gold rounded-xl border border-gold/20">
                  <div class="flex items-center gap-3">
                    <div class="w-3 h-3 rounded-full bg-gold shadow-glow"></div>
                    <div>
                      <p class="text-xs text-white/60 uppercase tracking-wider">
                        {{ locale === 'pt-BR' ? 'Ativo' : 'Asset' }}
                      </p>
                      <p class="text-sm font-bold text-white">XAU/USD</p>
                    </div>
                  </div>
                </div>

                <div class="p-4 glass-gold rounded-xl border border-gold/20">
                  <div class="flex items-center gap-3">
                    <div class="w-3 h-3 rounded-full bg-orange shadow-[0_0_10px_rgba(255,90,0,0.5)]"></div>
                    <div>
                      <p class="text-xs text-white/60 uppercase tracking-wider">
                        {{ locale === 'pt-BR' ? 'Fonte' : 'Source' }}
                      </p>
                      <p class="text-sm font-bold text-white">TradingView</p>
                    </div>
                  </div>
                </div>

                <div class="p-4 glass-gold rounded-xl border border-gold/20">
                  <div class="flex items-center gap-3">
                    <div class="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                    <div>
                      <p class="text-xs text-white/60 uppercase tracking-wider">
                        {{ locale === 'pt-BR' ? 'Atualização' : 'Update' }}
                      </p>
                      <p class="text-sm font-bold text-white">
                        {{ locale === 'pt-BR' ? 'Tempo Real' : 'Real-time' }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional info -->
          <div class="mt-8 text-center">
            <p class="text-sm text-white/50">
              {{
                locale === 'pt-BR'
                  ? 'Dados fornecidos pelo TradingView. Use os controles do gráfico para explorar diferentes períodos e indicadores técnicos.'
                  : 'Data provided by TradingView. Use the chart controls to explore different timeframes and technical indicators.'
              }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works with Premium Design -->
    <section class="section bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl"></div>

      <div class="container-custom relative z-10">
        <div class="animate-on-scroll" ref="howItWorksSection">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span class="text-gradient-gold">{{ t('howItWorks.title') }}</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {{ t('howItWorks.subtitle') }}
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="group text-center hover-lift">
              <div class="glass p-8 rounded-3xl border border-gray-200 hover:border-gold/30 transition-all h-full">
                <div class="relative mx-auto mb-6 w-24 h-24 rounded-3xl bg-gradient-to-br from-gold-dark to-gold
                            flex items-center justify-center shadow-glow transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(201,169,89,0.6)]">
                  <span class="relative z-10 text-6xl font-bold text-white drop-shadow-lg">1</span>
                  <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold to-gold-light opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <!-- Decorative ring -->
                  <div class="absolute inset-0 rounded-3xl border-2 border-white/20"></div>
                </div>
                <h3 class="text-2xl font-bold text-black mb-4">
                  {{ t('howItWorks.step1.title') }}
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  {{ t('howItWorks.step1.description') }}
                </p>
              </div>
            </div>

            <div class="group text-center hover-lift" style="animation-delay: 0.2s">
              <div class="glass p-8 rounded-3xl border border-gray-200 hover:border-gold/30 transition-all h-full">
                <div class="relative mx-auto mb-6 w-24 h-24 rounded-3xl bg-gradient-to-br from-gold-dark to-gold
                            flex items-center justify-center shadow-glow transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(201,169,89,0.6)]">
                  <span class="relative z-10 text-6xl font-bold text-white drop-shadow-lg">2</span>
                  <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold to-gold-light opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <!-- Decorative ring -->
                  <div class="absolute inset-0 rounded-3xl border-2 border-white/20"></div>
                </div>
                <h3 class="text-2xl font-bold text-black mb-4">
                  {{ t('howItWorks.step2.title') }}
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  {{ t('howItWorks.step2.description') }}
                </p>
              </div>
            </div>

            <div class="group text-center hover-lift" style="animation-delay: 0.4s">
              <div class="glass p-8 rounded-3xl border border-gray-200 hover:border-gold/30 transition-all h-full">
                <div class="relative mx-auto mb-6 w-24 h-24 rounded-3xl bg-gradient-to-br from-gold-dark to-gold
                            flex items-center justify-center shadow-glow transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(201,169,89,0.6)]">
                  <span class="relative z-10 text-6xl font-bold text-white drop-shadow-lg">3</span>
                  <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold to-gold-light opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <!-- Decorative ring -->
                  <div class="absolute inset-0 rounded-3xl border-2 border-white/20"></div>
                </div>
                <h3 class="text-2xl font-bold text-black mb-4">
                  {{ t('howItWorks.step3.title') }}
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  {{ t('howItWorks.step3.description') }}
                </p>
              </div>
            </div>
          </div>

          <div class="mt-16 text-center">
            <NuxtLink
              :to="localePath('/como-funciona')"
              class="group inline-flex items-center gap-2 px-10 py-4 bg-white text-black border-2 border-black/20 font-bold text-lg rounded-2xl
                     transition-all duration-300 hover:bg-black hover:text-white hover:border-black hover:shadow-lg hover:scale-105"
            >
              {{ t('ctas.viewDetails') }}
              <svg class="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
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
              {{ locale === 'pt-BR' ? 'Pronto para começar?' : 'Ready to get started?' }}
            </span>
          </h2>
          <p class="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            {{
              locale === 'pt-BR'
                ? 'Explore nossa documentação completa e descubra como o Estruturart Golden (ESG) pode fazer parte da sua estratégia de investimento.'
                : 'Explore our complete documentation and discover how Estruturart Golden (ESG) can be part of your investment strategy.'
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
      </div>
    </section>

    <!-- Video Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="videoModalOpen"
          @click="closeVideoModal"
          class="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
        >
          <!-- Modal Content -->
          <div
            @click.stop
            class="relative w-full max-w-6xl animate-fade-in-up"
          >
            <!-- Close Button -->
            <button
              @click="closeVideoModal"
              class="absolute -top-12 right-0 md:-top-16 md:-right-16 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
              aria-label="Close video"
            >
              <svg class="w-6 h-6 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Video Container -->
            <div class="relative rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(201,169,89,0.4)] border-2 border-gold/30" style="aspect-ratio: 16/9">
              <video
                ref="modalVideo"
                controls
                autoplay
                class="w-full h-full object-cover"
              >
                <source :src="heroVideoSource" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()

// Refs for scroll animations
const featuresSection = ref<HTMLElement | null>(null)
const whyGoldSection = ref<HTMLElement | null>(null)
const comparisonSection = ref<HTMLElement | null>(null)
const chartSection = ref<HTMLElement | null>(null)
const howItWorksSection = ref<HTMLElement | null>(null)
const ctaSection = ref<HTMLElement | null>(null)

// Video modal state
const videoModalOpen = ref(false)
const modalVideo = ref<HTMLVideoElement | null>(null)

// Hero video source based on language
const heroVideoSource = computed(() => {
  // Português: hero-video.mp4
  // Inglês: hero-video-en.mp4
  return locale.value === 'en' ? '/hero-video-en.mp4' : '/hero-video.mp4'
})

// Open video modal
const openVideoModal = () => {
  videoModalOpen.value = true
  // Prevent body scroll
  document.body.style.overflow = 'hidden'
}

// Close video modal
const closeVideoModal = () => {
  videoModalOpen.value = false
  // Restore body scroll
  document.body.style.overflow = ''
  // Pause video when modal closes
  if (modalVideo.value) {
    modalVideo.value.pause()
  }
}

// Handle ESC key to close modal
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && videoModalOpen.value) {
    closeVideoModal()
  }
}

// Setup scroll animations and event listeners
onMounted(() => {
  // Add escape key listener
  window.addEventListener('keydown', handleEscape)

  // Setup scroll animations
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

  const sections = [featuresSection.value, whyGoldSection.value, comparisonSection.value, chartSection.value, howItWorksSection.value, ctaSection.value]
  sections.forEach((section) => {
    if (section) observer.observe(section)
  })
})

// SEO
const ogImageUrl = computed(() => {
  const baseUrl = config.public.siteUrl.replace(/\/$/, '') // Remove trailing slash
  return `${baseUrl}/og-image.jpg`
})

useHead({
  title: t('meta.home.title'),
  meta: [
    { name: 'description', content: t('meta.home.description') },
    { name: 'keywords', content: 'token lastreado em ouro, gold backed token, ESG, Estruturart Golden, blockchain, polygon, criptomoeda, investimento em ouro' },
    { name: 'author', content: 'Estruturart Securitizadora S/A' },
    { name: 'robots', content: 'index, follow' },

    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: config.public.siteUrl },
    { property: 'og:title', content: t('meta.home.title') },
    { property: 'og:description', content: t('meta.home.description') },
    { property: 'og:image', content: ogImageUrl },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:alt', content: 'Estruturart Golden - Token Lastreado em Ouro' },
    { property: 'og:locale', content: locale.value === 'pt-BR' ? 'pt_BR' : 'en_US' },
    { property: 'og:site_name', content: 'Estruturart Golden (ESG)' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: config.public.siteUrl },
    { name: 'twitter:title', content: t('meta.home.title') },
    { name: 'twitter:description', content: t('meta.home.description') },
    { name: 'twitter:image', content: ogImageUrl },
    { name: 'twitter:image:alt', content: 'Estruturart Golden - Token Lastreado em Ouro' }
  ]
})
</script>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .animate-float,
  .animate-float-delayed,
  .animate-bounce,
  .animate-glow-pulse {
    animation: none !important;
  }
}
</style>
