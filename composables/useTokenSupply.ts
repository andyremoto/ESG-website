interface TokenSupplyData {
  totalSupply: number
  totalSupplyRaw: string
  lastUpdated: Date
}

export const useTokenSupply = () => {
  const data = useState<TokenSupplyData | null>('token-supply', () => null)
  const loading = useState<boolean>('token-supply-loading', () => false)
  const error = useState<Error | null>('token-supply-error', () => null)
  const config = useRuntimeConfig()

  const fetch = async () => {
    loading.value = true
    error.value = null

    try {
      // Polygon RPC endpoint (público)
      const rpcUrl = 'https://polygon-rpc.com/'

      // Method signature for totalSupply() é 0x18160ddd
      const methodSignature = '0x18160ddd'

      // Fazer chamada JSON-RPC para obter o totalSupply
      const response = await $fetch<any>(rpcUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          jsonrpc: '2.0',
          method: 'eth_call',
          params: [
            {
              to: config.public.polygonContract,
              data: methodSignature
            },
            'latest'
          ],
          id: 1
        }
      })

      if (response.error) {
        throw new Error(response.error.message || 'Failed to fetch token supply')
      }

      // Resultado vem em hexadecimal
      const totalSupplyHex = response.result

      // Converter de hex para BigInt e depois para número
      // Token tem 18 decimais, então dividimos por 10^18
      const totalSupplyBigInt = BigInt(totalSupplyHex)
      const totalSupplyNumber = Number(totalSupplyBigInt) / Math.pow(10, 18)

      data.value = {
        totalSupply: totalSupplyNumber,
        totalSupplyRaw: totalSupplyBigInt.toString(),
        lastUpdated: new Date()
      }
    } catch (e) {
      error.value = e as Error
      console.error('Failed to fetch token supply:', e)
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
