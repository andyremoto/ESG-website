export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()

  router.beforeEach((to, from) => {
    // Verifica se está navegando para a página /token ou suas variações de locale
    const isGoingToToken = to.path === '/token' || to.path === '/en/token'
    const isComingFromToken = from.path === '/token' || from.path === '/en/token'

    // Só mostra o vídeo se estiver navegando PARA a página token e não estiver vindo dela
    if (isGoingToToken && !isComingFromToken && from.path !== '') {
      const showInterlude = useState('tokenInterlude')
      showInterlude.value = true
    }
  })
})
