<template>
  <div class="language-switcher relative" ref="dropdownRef">
    <!-- Botão principal -->
    <button
      @click="isOpen = !isOpen"
      class="group flex items-center gap-3 px-5 py-2.5 glass-gold border-2 border-gold/30 rounded-xl
             transition-all duration-300 hover:border-gold/60 hover:shadow-glow hover:scale-105
             focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
      :aria-label="t('common.selectLanguage')"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <!-- Bandeira e nome do idioma atual -->
      <span class="text-2xl leading-none">{{ getFlag(locale) }}</span>
      <span class="text-sm font-bold text-black whitespace-nowrap">{{ getCurrentLocaleName() }}</span>

      <!-- Ícone de seta -->
      <svg
        class="w-4 h-4 text-gold-dark transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown menu -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-show="isOpen"
        class="absolute right-0 mt-2 w-56 glass-gold rounded-xl border-2 border-gold/40 shadow-glow-lg overflow-hidden z-50"
      >
        <div class="py-2">
          <button
            v-for="loc in availableLocales"
            :key="loc.code"
            @click="switchToLocale(loc.code)"
            class="w-full flex items-center gap-4 px-5 py-3 transition-all duration-200
                   hover:bg-gold/20 border-l-4 border-transparent hover:border-gold"
            :class="{
              'bg-gold/10 border-l-4 border-gold': loc.code === locale
            }"
          >
            <!-- Bandeira -->
            <span class="text-3xl leading-none">{{ getFlag(loc.code) }}</span>

            <!-- Nome do idioma -->
            <div class="flex-grow text-left">
              <p class="text-sm font-bold text-black">{{ loc.name }}</p>
              <p class="text-xs text-black/60">{{ getLocaleNativeName(loc.code) }}</p>
            </div>

            <!-- Check icon se selecionado -->
            <svg
              v-if="loc.code === locale"
              class="w-5 h-5 text-gold-dark flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const availableLocales = computed(() => {
  return locales.value as Array<{ code: string; name: string }>
})

// Função para retornar a bandeira do país baseado no código do idioma
const getFlag = (localeCode: string): string => {
  const flags: Record<string, string> = {
    'en': '🇺🇸',
    'pt-BR': '🇧🇷'
  }
  return flags[localeCode] || ''
}

// Função para retornar o nome do idioma atual
const getCurrentLocaleName = (): string => {
  const current = availableLocales.value.find(l => l.code === locale.value)
  return current?.name || ''
}

// Função para retornar o nome nativo do idioma
const getLocaleNativeName = (localeCode: string): string => {
  const nativeNames: Record<string, string> = {
    'en': 'English',
    'pt-BR': 'Português'
  }
  return nativeNames[localeCode] || ''
}

const switchToLocale = async (newLocale: string) => {
  isOpen.value = false
  if (newLocale !== locale.value) {
    const path = switchLocalePath(newLocale)
    await router.push(path)
    await setLocale(newLocale)
  }
}

// Fechar dropdown ao clicar fora
onMounted(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
      isOpen.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>
