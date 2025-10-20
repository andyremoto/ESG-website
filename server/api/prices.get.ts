/**
 * Server API route to fetch gold prices and convert to ESG prices
 * Uses Metals.dev API for real-time gold prices and currency conversion
 * 1 ESG = 1 gram of gold
 * 1 troy ounce = 31.1034768 grams
 */

const TROY_OUNCE_TO_GRAMS = 31.1034768

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

interface MetalsApiResponse {
  status: string
  currency: string
  unit: string
  metals: {
    gold: number
    goldBid?: number  // Price you GET when selling ESG
    goldAsk?: number  // Price you PAY when buying ESG
    silver: number
  }
  currencies: {
    [key: string]: number
  }
  timestamp: string
  cached?: boolean
  demo?: boolean
  error?: string
}

export default defineEventHandler(async (event): Promise<PriceData> => {
  try {
    // Fetch data from our Metals.dev proxy endpoint
    const goldData = await $fetch<MetalsApiResponse>('/api/gold-price')

    // Extract values from Metals.dev response
    const goldPricePerOunce = goldData.metals.gold // Spot price (mid)
    const goldBidPerOunce = goldData.metals.goldBid || goldPricePerOunce // Bid (sell)
    const goldAskPerOunce = goldData.metals.goldAsk || goldPricePerOunce // Ask (buy)
    const brlRate = goldData.currencies.BRL || 5.75 // USD to BRL exchange rate
    const isDemo = goldData.demo || false

    // Calculate price per gram (1 ESG = 1 gram of gold)
    const goldPerGramUSD = goldPricePerOunce / TROY_OUNCE_TO_GRAMS
    const goldPerGramUSD_bid = goldBidPerOunce / TROY_OUNCE_TO_GRAMS // You GET this when selling ESG
    const goldPerGramUSD_ask = goldAskPerOunce / TROY_OUNCE_TO_GRAMS // You PAY this when buying ESG

    // Calculate ESG prices (1 ESG = 1 gram of gold)
    const esgUSD = goldPerGramUSD  // Mid price
    const esgUSD_bid = goldPerGramUSD_bid  // SELL/REDEEM ESG price
    const esgUSD_ask = goldPerGramUSD_ask  // BUY ESG price

    const esgBRL = goldPerGramUSD * brlRate  // Mid price in BRL
    const esgBRL_bid = goldPerGramUSD_bid * brlRate  // SELL/REDEEM in BRL
    const esgBRL_ask = goldPerGramUSD_ask * brlRate  // BUY in BRL

    // Calculate 24h change if available (placeholder for now)
    const change24hPct = isDemo ? 1.2 : undefined

    const priceData: PriceData = {
      esgUSD,
      esgUSD_bid,
      esgUSD_ask,
      esgBRL,
      esgBRL_bid,
      esgBRL_ask,
      goldPerGramUSD,
      goldPerGramUSD_bid,
      goldPerGramUSD_ask,
      goldPerOunceUSD: goldPricePerOunce,
      goldPerOunceUSD_bid: goldBidPerOunce,
      goldPerOunceUSD_ask: goldAskPerOunce,
      usdbrl: brlRate,
      lastUpdatedISO: goldData.timestamp,
      demo: isDemo,
      change24hPct
    }

    return priceData
  } catch (error) {
    console.error('[Prices API] Error fetching prices:', error)

    // Return demo data on error
    const goldPriceUSD = 2650.00
    const goldBidUSD = 2648.00
    const goldAskUSD = 2652.00
    const usdbrl = 5.75

    const goldPerGram = goldPriceUSD / TROY_OUNCE_TO_GRAMS
    const goldPerGramBid = goldBidUSD / TROY_OUNCE_TO_GRAMS
    const goldPerGramAsk = goldAskUSD / TROY_OUNCE_TO_GRAMS

    const demoData: PriceData = {
      esgUSD: goldPerGram,
      esgUSD_bid: goldPerGramBid,
      esgUSD_ask: goldPerGramAsk,
      esgBRL: goldPerGram * usdbrl,
      esgBRL_bid: goldPerGramBid * usdbrl,
      esgBRL_ask: goldPerGramAsk * usdbrl,
      goldPerGramUSD: goldPerGram,
      goldPerGramUSD_bid: goldPerGramBid,
      goldPerGramUSD_ask: goldPerGramAsk,
      goldPerOunceUSD: goldPriceUSD,
      goldPerOunceUSD_bid: goldBidUSD,
      goldPerOunceUSD_ask: goldAskUSD,
      usdbrl,
      lastUpdatedISO: new Date().toISOString(),
      demo: true,
      change24hPct: 1.2
    }

    return demoData
  }
})
