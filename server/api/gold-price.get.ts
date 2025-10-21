/**
 * Server API endpoint to fetch live gold prices from Metals.dev
 * Includes caching to optimize API usage (100 requests/month free tier)
 */

interface MetalsApiResponse {
  status: string
  currency: string
  unit: string
  metals: {
    gold: number
    goldBid?: number  // Price you GET when selling/redeeming ESG
    goldAsk?: number  // Price you PAY when buying ESG
    silver: number
    platinum?: number
  }
  currencies: {
    [key: string]: number
  }
  timestamp: string
}

interface CachedData {
  data: MetalsApiResponse
  cachedAt: number
}

// In-memory cache (survives for the duration of the server process)
let cache: CachedData | null = null
const CACHE_DURATION = 30 * 60 * 1000 // 30 minutes in milliseconds (respects API rate limits)

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  // Check if we have valid cached data
  const now = Date.now()
  if (cache && (now - cache.cachedAt) < CACHE_DURATION) {
    console.log('[Gold API] Returning cached data')
    return {
      ...cache.data,
      cached: true,
      cacheAge: Math.floor((now - cache.cachedAt) / 1000) // seconds
    }
  }

  // If no API key is configured, throw error - never show fake prices to clients
  if (!config.metalsApiKey) {
    console.error('[Gold API] CRITICAL: No API key configured. Set METALS_API_KEY in .env')
    throw createError({
      statusCode: 503,
      statusMessage: 'Gold price API is not configured. Please contact support.',
      message: 'METALS_API_KEY environment variable is required'
    })
  }

  try {
    // Fetch from Metals.dev Spot endpoint (includes bid/ask spread)
    console.log('[Gold API] Fetching live data from Metals.dev Spot endpoint')
    const spotUrl = 'https://api.metals.dev/v1/metal/spot'
    const spotParams = new URLSearchParams({
      api_key: config.metalsApiKey,
      metal: 'gold',
      currency: 'USD'
    })

    const spotResponse = await $fetch<any>(`${spotUrl}?${spotParams}`, {
      timeout: 10000
    })

    // Fetch USD/BRL rate from AwesomeAPI (Brazilian API, more accurate)
    let brlRate = 5.75 // Fallback
    try {
      const awesomeApiUrl = 'https://economia.awesomeapi.com.br/json/last/USD-BRL'
      const brlResponse = await $fetch<any>(awesomeApiUrl, { timeout: 5000 })

      // AwesomeAPI returns: { "USDBRL": { "bid": "5.7276", "ask": "5.7282", ... } }
      // Use 'bid' for buying BRL with USD
      brlRate = parseFloat(brlResponse.USDBRL?.bid || brlResponse.USDBRL?.ask || '5.75')
      console.log('[Gold API] USD/BRL rate from AwesomeAPI:', brlRate)
    } catch (brlError: any) {
      console.warn('[Gold API] Failed to fetch BRL rate from AwesomeAPI, using fallback:', brlError.message)
    }

    // Extract bid/ask from Metals.dev spot response
    const goldBid = spotResponse.rate?.bid || 0  // Price you GET when selling ESG
    const goldAsk = spotResponse.rate?.ask || 0  // Price you PAY when buying ESG
    const goldPrice = spotResponse.rate?.price || 0 // Mid price
    const goldHigh = spotResponse.rate?.high || 0
    const goldLow = spotResponse.rate?.low || 0

    console.log('[Gold API] Gold spot prices (per troy ounce):')
    console.log('  - Bid (sell ESG):', goldBid)
    console.log('  - Ask (buy ESG):', goldAsk)
    console.log('  - Spot (mid):', goldPrice)
    console.log('  - High:', goldHigh)
    console.log('  - Low:', goldLow)
    console.log('[Gold API] USD/BRL rate:', brlRate)

    // Build response compatible with our interface
    const response: MetalsApiResponse = {
      status: spotResponse.status || 'success',
      currency: 'USD',
      unit: 'toz',
      metals: {
        gold: goldPrice,
        goldBid: goldBid,
        goldAsk: goldAsk,
        silver: 0 // Not fetching silver for now
      },
      currencies: {
        BRL: brlRate
      },
      timestamp: spotResponse.timestamp || new Date().toISOString()
    }

    // Cache the response
    cache = {
      data: response,
      cachedAt: now
    }

    console.log('[Gold API] Successfully fetched and cached professional bid/ask data')
    return {
      ...response,
      cached: false
    }
  } catch (error: any) {
    console.error('[Gold API] Error fetching from Metals.dev:', error.message)

    // If we have stale cache, return it with a warning
    if (cache) {
      console.log('[Gold API] Returning stale cache due to API error')
      return {
        ...cache.data,
        cached: true,
        stale: true,
        cacheAge: Math.floor((now - cache.cachedAt) / 1000)
      }
    }

    // NO DEMO DATA - throw error so clients see that prices are unavailable
    console.error('[Gold API] CRITICAL: API failed and no cache available')
    throw createError({
      statusCode: 503,
      statusMessage: 'Unable to fetch gold prices. Please try again later.',
      message: `Metals.dev API error: ${error.message}`
    })
  }
})
