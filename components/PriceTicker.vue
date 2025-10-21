<template>
  <div class="price-ticker">
    <div v-if="loading" class="flex justify-center items-center h-32">
      <div class="animate-spin rounded-full h-12 w-12 border-b-3 border-gold"></div>
    </div>

    <div v-else-if="error" class="text-center py-12 px-6">
      <div class="max-w-2xl mx-auto">
        <!-- Icon -->
        <div class="mb-6">
          <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-orange/20 to-gold/20 flex items-center justify-center">
            <svg class="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <!-- Message -->
        <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">
          {{ locale === 'pt-BR' ? 'Preços Indisponíveis' : 'Prices Unavailable' }}
        </h3>
        <p class="text-white/70 text-lg mb-8">
          {{ locale === 'pt-BR'
            ? 'Não foi possível carregar os preços no momento. Entre em contato conosco via WhatsApp para negociar.'
            : 'Unable to load prices at the moment. Contact us via WhatsApp to trade.'
          }}
        </p>

        <!-- WhatsApp Button -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            :href="whatsappLinkError"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-lg hover:shadow-green-500/50"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>{{ locale === 'pt-BR' ? 'Negociar via WhatsApp' : 'Trade via WhatsApp' }}</span>
          </a>

          <button
            @click="refresh"
            class="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl transition-all hover:scale-105 border border-white/20 hover:border-white/40"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {{ locale === 'pt-BR' ? 'Tentar Novamente' : 'Try Again' }}
          </button>
        </div>
      </div>
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
            <!-- Future: Add 24h change when available -->
            <span v-if="false" class="text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl whitespace-nowrap flex-shrink-0 text-green-700 bg-green-100">
              +0.00%
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
// OTC margins (+1% buy, -5% sell) are applied server-side
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

  // Use api.whatsapp.com instead of wa.me for better desktop compatibility
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`
})

// WhatsApp link for error state (generic trade inquiry)
const whatsappLinkError = computed(() => {
  const phone = '5531975630000'
  const message = locale.value === 'pt-BR'
    ? `Olá! Gostaria de obter informações sobre os preços atuais do ESG (Estruturart Golden) e realizar uma negociação OTC.`
    : `Hello! I would like to get information about current ESG (Estruturart Golden) prices and make an OTC trade.`

  // Use api.whatsapp.com instead of wa.me for better desktop compatibility
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`
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
