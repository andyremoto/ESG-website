<template>
  <div class="price-ticker">
    <div v-if="loading" class="flex justify-center items-center h-32">
      <div class="animate-spin rounded-full h-12 w-12 border-b-3 border-gold"></div>
    </div>

    <div v-else-if="error" class="text-center py-8">
      <p class="text-red-400 mb-4 text-lg">{{ t('common.error') }}</p>
      <button @click="refresh" class="px-6 py-3 bg-gradient-to-r from-orange to-orange-light text-white font-semibold rounded-xl hover:scale-105 transition-all">
        {{ t('common.retry') }}
      </button>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      <!-- ESG/USD Price -->
      <div class="group relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative glass-gold p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gold/20 hover:border-gold/40 transition-all hover-lift">
          <div class="flex items-center justify-between mb-3 sm:mb-4 gap-2">
            <div class="flex items-center gap-2 sm:gap-3 min-w-0">
              <div class="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shadow-glow">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-xs sm:text-sm font-bold text-gold uppercase tracking-wider">
                ESG/USD
              </span>
            </div>
            <span
              v-if="data?.change24hPct"
              :class="[
                'text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl whitespace-nowrap flex-shrink-0',
                data.change24hPct >= 0 ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
              ]"
            >
              {{ data.change24hPct >= 0 ? '+' : '' }}{{ n(data.change24hPct / 100, 'percent') }}
            </span>
          </div>
          <div class="flex items-baseline gap-2 mb-2">
            <p class="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient-gold break-all">
              ${{ n(displayPriceUSD, 'decimal') }}
            </p>
            <span
              :class="[
                'text-xs sm:text-sm font-bold px-2 py-1 rounded-lg',
                showBuyPrice ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
              ]"
            >
              {{ priceLabel }}
            </span>
          </div>
          <p class="text-xs sm:text-sm text-white/70 font-medium">
            {{ t('hero.pegging') }}
          </p>
        </div>
      </div>

      <!-- ESG/BRL Price -->
      <div class="group relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative glass-gold p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gold/20 hover:border-orange/40 transition-all hover-lift">
          <div class="flex items-center mb-3 sm:mb-4 gap-2">
            <div class="flex items-center gap-2 sm:gap-3">
              <div class="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange to-orange-light flex items-center justify-center shadow-[0_0_20px_rgba(255,90,0,0.3)]">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-xs sm:text-sm font-bold text-gold uppercase tracking-wider">
                ESG/BRL
              </span>
            </div>
          </div>
          <div class="flex items-baseline gap-2 mb-2">
            <p class="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient-gold break-all">
              R$ {{ n(displayPriceBRL, 'decimal') }}
            </p>
            <span
              :class="[
                'text-xs sm:text-sm font-bold px-2 py-1 rounded-lg',
                showBuyPrice ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
              ]"
            >
              {{ priceLabel }}
            </span>
          </div>
          <p class="text-xs sm:text-sm text-white/70 font-medium">
            {{ t('hero.pegging') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Toggle Button and Last Updated -->
    <div class="text-center mt-6 space-y-4">
      <button
        v-if="!loading && !error"
        @click="togglePriceMode"
        class="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl
               transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/40"
      >
        {{ toggleButtonLabel }}
      </button>

      <p v-if="data?.lastUpdatedISO" class="text-sm text-white/60 font-medium">
        {{ t('hero.lastUpdated') }}: {{ d(new Date(data.lastUpdatedISO), 'long') }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t, locale, n, d } = useI18n()
const { data, loading, error, refresh } = usePrices()

// Toggle between buy (ask) and sell (bid) prices
const showBuyPrice = ref(true) // Default: show buy price (ask)

const togglePriceMode = () => {
  showBuyPrice.value = !showBuyPrice.value
}

// Computed prices based on mode
const displayPriceUSD = computed(() => {
  if (!data.value) return 0
  return showBuyPrice.value ? data.value.esgUSD_ask : data.value.esgUSD_bid
})

const displayPriceBRL = computed(() => {
  if (!data.value) return 0
  return showBuyPrice.value ? data.value.esgBRL_ask : data.value.esgBRL_bid
})

const priceLabel = computed(() => {
  return showBuyPrice.value
    ? (locale.value === 'pt-BR' ? 'Comprar' : 'Buy')
    : (locale.value === 'pt-BR' ? 'Vender' : 'Sell')
})

const toggleButtonLabel = computed(() => {
  return showBuyPrice.value
    ? (locale.value === 'pt-BR' ? 'Ver preço de venda' : 'View sell price')
    : (locale.value === 'pt-BR' ? 'Ver preço de compra' : 'View buy price')
})
</script>

<style scoped>
.price-ticker {
  @apply w-full;
}

/* Smooth price transition animation */
.text-gradient-gold {
  transition: all 0.3s ease-in-out;
}

.text-gradient-gold:hover {
  transform: scale(1.02);
}
</style>
