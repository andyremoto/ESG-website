interface PriceData {
  esgUSD: number
  esgUSD_bid: number  // Price you GET when selling/redeeming ESG
  esgUSD_ask: number  // Price you PAY when buying ESG
  esgBRL: number
  esgBRL_bid: number
  esgBRL_ask: number
  goldPerGramUSD: number
  goldPerGramUSD_bid: number
  goldPerGramUSD_ask: number
  goldPerOunceUSD: number
  goldPerOunceUSD_bid: number
  goldPerOunceUSD_ask: number
  usdbrl: number
  lastUpdatedISO: string
  demo: boolean
  change24hPct?: number
}

export const usePrices = () => {
  const data = useState<PriceData | null>('prices', () => null)
  const loading = useState<boolean>('prices-loading', () => false)
  const error = useState<Error | null>('prices-error', () => null)

  const fetch = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await $fetch<PriceData>('/api/prices')
      data.value = response
    } catch (e) {
      error.value = e as Error
      console.error('Failed to fetch prices:', e)
    } finally {
      loading.value = false
    }
  }

  const refresh = () => {
    return fetch()
  }

  // Auto-fetch on first use if data is null
  if (import.meta.client && data.value === null && !loading.value) {
    fetch()
  }

  return {
    data: readonly(data),
    loading: readonly(loading),
    error: readonly(error),
    refresh
  }
}
