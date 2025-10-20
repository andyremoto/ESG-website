import { describe, it, expect } from 'vitest'

// Constants from server/api/prices.get.ts
const TROY_OUNCE_TO_GRAMS = 31.1034768

describe('Price Conversion', () => {
  describe('Troy Ounce to Grams Conversion', () => {
    it('should correctly convert 1 troy ounce to grams', () => {
      const grams = 1 * TROY_OUNCE_TO_GRAMS
      expect(grams).toBeCloseTo(31.1034768, 7)
    })

    it('should correctly convert gold price from USD/oz to USD/gram', () => {
      const goldPricePerOunce = 2650 // USD
      const goldPricePerGram = goldPricePerOunce / TROY_OUNCE_TO_GRAMS

      // 2650 / 31.1034768 ≈ 85.19
      expect(goldPricePerGram).toBeCloseTo(85.19, 2)
    })

    it('should correctly convert multiple ounces to grams', () => {
      const ounces = 10
      const grams = ounces * TROY_OUNCE_TO_GRAMS
      expect(grams).toBeCloseTo(311.034768, 6)
    })

    it('should handle fractional ounces', () => {
      const ounces = 0.5
      const grams = ounces * TROY_OUNCE_TO_GRAMS
      expect(grams).toBeCloseTo(15.5517384, 7)
    })
  })

  describe('ESG Token Price Calculation', () => {
    it('should calculate ESG/USD correctly (1 ESG = 1 gram)', () => {
      const goldPricePerOunce = 2650
      const esgPrice = goldPricePerOunce / TROY_OUNCE_TO_GRAMS

      // 1 ESG = 1 gram of gold
      expect(esgPrice).toBeCloseTo(85.19, 2)
    })

    it('should calculate ESG/BRL correctly', () => {
      const goldPricePerOunce = 2650 // USD
      const usdbrl = 5.75 // Exchange rate

      const esgUSD = goldPricePerOunce / TROY_OUNCE_TO_GRAMS
      const esgBRL = esgUSD * usdbrl

      // 85.19 * 5.75 ≈ 489.84
      expect(esgBRL).toBeCloseTo(489.84, 2)
    })

    it('should maintain 1:1 ratio between ESG and grams', () => {
      const goldPricePerOunce = 2000
      const esgPrice = goldPricePerOunce / TROY_OUNCE_TO_GRAMS
      const gramsPerOunce = TROY_OUNCE_TO_GRAMS

      // 1 ESG should always equal 1 gram of gold value
      expect(esgPrice * gramsPerOunce).toBeCloseTo(goldPricePerOunce, 5)
    })
  })

  describe('Currency Conversion', () => {
    it('should correctly convert USD to BRL', () => {
      const usdAmount = 100
      const usdbrlRate = 5.75
      const brlAmount = usdAmount * usdbrlRate

      expect(brlAmount).toBe(575)
    })

    it('should handle decimal exchange rates', () => {
      const usdAmount = 85.19
      const usdbrlRate = 5.748
      const brlAmount = usdAmount * usdbrlRate

      expect(brlAmount).toBeCloseTo(489.71, 2)
    })
  })

  describe('Edge Cases', () => {
    it('should handle zero gold price', () => {
      const goldPricePerOunce = 0
      const esgPrice = goldPricePerOunce / TROY_OUNCE_TO_GRAMS

      expect(esgPrice).toBe(0)
    })

    it('should handle very high gold prices', () => {
      const goldPricePerOunce = 10000
      const esgPrice = goldPricePerOunce / TROY_OUNCE_TO_GRAMS

      expect(esgPrice).toBeCloseTo(321.51, 2)
    })

    it('should handle very low gold prices', () => {
      const goldPricePerOunce = 100
      const esgPrice = goldPricePerOunce / TROY_OUNCE_TO_GRAMS

      expect(esgPrice).toBeCloseTo(3.22, 2)
    })
  })

  describe('Precision Tests', () => {
    it('should maintain precision for small amounts', () => {
      const goldPricePerOunce = 2650.12345
      const esgPrice = goldPricePerOunce / TROY_OUNCE_TO_GRAMS

      expect(esgPrice).toBeCloseTo(85.1940, 4)
    })

    it('should round correctly to 2 decimal places for display', () => {
      const goldPricePerOunce = 2650
      const esgPrice = goldPricePerOunce / TROY_OUNCE_TO_GRAMS
      const displayPrice = Math.round(esgPrice * 100) / 100

      expect(displayPrice).toBe(85.19)
    })
  })
})
