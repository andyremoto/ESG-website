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
      <a
        :href="whatsappLink"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative overflow-hidden block cursor-pointer"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative glass-gold p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gold/20 hover:border-gold/40 transition-all hover-lift hover:scale-[1.02]">
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

          <!-- WhatsApp CTA Overlay -->
          <div class="mt-4 pt-4 border-t border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity">
            <div class="flex items-center gap-2 text-xs sm:text-sm text-gold font-semibold">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>{{ locale === 'pt-BR' ? 'Clique para negociar via WhatsApp' : 'Click to trade via WhatsApp' }}</span>
            </div>
          </div>
        </div>
      </a>

      <!-- ESG/BRL Price -->
      <a
        :href="whatsappLink"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative overflow-hidden block cursor-pointer"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="relative glass-gold p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gold/20 hover:border-orange/40 transition-all hover-lift hover:scale-[1.02]">
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

          <!-- WhatsApp CTA Overlay -->
          <div class="mt-4 pt-4 border-t border-orange/20 opacity-0 group-hover:opacity-100 transition-opacity">
            <div class="flex items-center gap-2 text-xs sm:text-sm text-orange font-semibold">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>{{ locale === 'pt-BR' ? 'Clique para negociar via WhatsApp' : 'Click to trade via WhatsApp' }}</span>
            </div>
          </div>
        </div>
      </a>
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

// WhatsApp link with pre-filled message
const whatsappLink = computed(() => {
  const phone = '5531975630000'
  const action = showBuyPrice.value
    ? (locale.value === 'pt-BR' ? 'comprar' : 'buy')
    : (locale.value === 'pt-BR' ? 'vender' : 'sell')

  const message = locale.value === 'pt-BR'
    ? `Olá! Tenho interesse em ${action} ESG (Estruturart Golden). Poderia me fornecer mais informações sobre a negociação OTC?`
    : `Hello! I am interested in ${action === 'buy' ? 'buying' : 'selling'} ESG (Estruturart Golden). Could you provide more information about OTC trading?`

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
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
