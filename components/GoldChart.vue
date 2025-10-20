<template>
  <div class="gold-chart-wrapper">
    <!-- TradingView Embed Widget (Free) -->
    <div class="tradingview-widget-container" ref="widgetContainer">
      <div class="tradingview-widget-container__widget"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const { locale } = useI18n()
const widgetContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!widgetContainer.value) return

  const currentLocale = locale.value === 'pt-BR' ? 'pt_BR' : 'en'

  // Create TradingView widget script
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
  script.async = true

  // Widget configuration
  script.innerHTML = JSON.stringify({
    autosize: true,
    symbol: 'OANDA:XAUUSD',
    interval: 'D',
    timezone: 'America/Sao_Paulo',
    theme: 'dark',
    style: '1',
    locale: currentLocale,
    enable_publishing: false,
    backgroundColor: 'rgba(10, 10, 10, 1)',
    gridColor: 'rgba(26, 26, 26, 1)',
    hide_top_toolbar: false,
    hide_legend: false,
    save_image: true,
    calendar: false,
    support_host: 'https://www.tradingview.com'
  })

  // Append to container
  const widgetDiv = widgetContainer.value.querySelector('.tradingview-widget-container__widget')
  if (widgetDiv) {
    widgetDiv.appendChild(script)
  }
})
</script>

<style scoped>
.gold-chart-wrapper {
  @apply w-full rounded-3xl overflow-hidden;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.tradingview-widget-container {
  height: 600px;
  width: 100%;
}

.tradingview-widget-container__widget {
  height: 100%;
  width: 100%;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .tradingview-widget-container {
    height: 400px;
  }
}
</style>
