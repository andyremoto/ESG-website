<template>
  <Transition
    enter-active-class="transition-opacity duration-500"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-500"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="showInterlude"
      class="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
    >
      <!-- Loading Indicator -->
      <div
        v-if="isBuffering || !videoLoaded"
        class="absolute inset-0 flex items-center justify-center z-10 bg-black/80"
      >
        <div class="flex flex-col items-center gap-4">
          <div class="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
          <p class="text-white text-sm">Carregando...</p>
        </div>
      </div>

      <!-- Video -->
      <video
        ref="videoRef"
        :src="videoSource"
        autoplay
        playsinline
        webkit-playsinline
        x5-playsinline
        preload="auto"
        class="w-full h-full"
        :class="videoClass"
        @ended="onVideoEnd"
        @error="onVideoEnd"
        @loadeddata="onVideoLoaded"
        @canplay="onVideoCanPlay"
        @waiting="onVideoWaiting"
        @playing="onVideoPlaying"
      />
    </div>
  </Transition>
</template>

<script setup lang="ts">
const showInterlude = useState('tokenInterlude', () => false)
const videoRef = ref<HTMLVideoElement | null>(null)
const videoLoaded = ref(false)
const isPortrait = ref(false)
const isPlaying = ref(false)
const isBuffering = ref(false)
const isMobile = ref(false)

// Detecta se é mobile ou desktop
const checkDevice = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  }
}

// Detecta orientação do dispositivo para otimizar o vídeo
const checkOrientation = () => {
  if (typeof window !== 'undefined') {
    isPortrait.value = window.innerHeight > window.innerWidth
  }
}

// Escolhe o vídeo correto baseado no dispositivo
const videoSource = computed(() => {
  // Mobile: usa vídeo original (vertical/quadrado)
  // Desktop/Web: usa vídeo wide (tela toda)
  return isMobile.value ? '/token-interlude.mp4' : '/token-interlude-web.mp4'
})

// Classe dinâmica para o vídeo baseada no dispositivo
const videoClass = computed(() => {
  // Mobile: object-contain (mostra vídeo completo sem cortar)
  // Desktop: object-cover (preenche tela toda)
  return isMobile.value ? 'object-contain' : 'object-cover'
})

const onVideoLoaded = () => {
  videoLoaded.value = true
  // Tenta tocar o vídeo com som
  if (videoRef.value) {
    videoRef.value.play().catch((error) => {
      console.warn('Autoplay com som foi bloqueado:', error)
      // Se autoplay com som falhar, tenta sem som
      if (videoRef.value) {
        videoRef.value.muted = true
        videoRef.value.play()
      }
    })
  }
}

const onVideoCanPlay = () => {
  isBuffering.value = false
}

const onVideoWaiting = () => {
  isBuffering.value = true
}

const onVideoPlaying = () => {
  isPlaying.value = true
  isBuffering.value = false
}

const onVideoEnd = () => {
  // Aguarda um pouco antes de fechar para dar uma transição suave
  setTimeout(() => {
    showInterlude.value = false
  }, 300)
}

// Se o vídeo não carregar em 5 segundos ou não terminar em 30 segundos, fecha automaticamente
watch(showInterlude, (newValue) => {
  if (newValue) {
    checkDevice()
    checkOrientation()

    // Timeout para caso o vídeo não carregue (aumentado para 5s devido ao tamanho do arquivo)
    const loadTimeout = setTimeout(() => {
      if (!videoLoaded.value) {
        console.warn('Video failed to load, skipping interlude')
        showInterlude.value = false
      }
    }, 5000)

    // Timeout máximo para o vídeo (aumentado para 30s para vídeos maiores)
    const maxTimeout = setTimeout(() => {
      if (showInterlude.value) {
        showInterlude.value = false
      }
    }, 30000)

    // Limpa os timeouts quando o componente for desmontado
    onUnmounted(() => {
      clearTimeout(loadTimeout)
      clearTimeout(maxTimeout)
    })
  }
})

// Atualiza orientação quando a tela rotaciona
onMounted(() => {
  if (typeof window !== 'undefined') {
    checkDevice()
    checkOrientation()
    window.addEventListener('resize', checkOrientation)
    window.addEventListener('orientationchange', checkOrientation)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', checkOrientation)
    window.removeEventListener('orientationchange', checkOrientation)
  }
})
</script>
