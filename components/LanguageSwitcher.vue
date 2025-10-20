<template>
  <div class="language-switcher">
    <select
      v-model="selectedLocale"
      class="px-4 py-2 bg-white border border-gray-300 rounded-xl text-sm font-medium text-black
             transition-all duration-150 hover:border-gold-dark focus:outline-none focus:ring-2
             focus:ring-gold-dark focus:border-transparent cursor-pointer"
      :aria-label="t('common.selectLanguage')"
      @change="switchLocale"
    >
      <option
        v-for="locale in availableLocales"
        :key="locale.code"
        :value="locale.code"
      >
        {{ getFlag(locale.code) }} {{ locale.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const selectedLocale = ref(locale.value)

const availableLocales = computed(() => {
  return (locales.value as Array<{ code: string; name: string }>).filter(
    (l) => l.code !== locale.value
  ).concat([
    (locales.value as Array<{ code: string; name: string }>).find(
      (l) => l.code === locale.value
    )!
  ]).reverse()
})

// Função para retornar a bandeira do país baseado no código do idioma
const getFlag = (localeCode: string): string => {
  const flags: Record<string, string> = {
    'en': '🇺🇸',
    'pt-BR': '🇧🇷'
  }
  return flags[localeCode] || ''
}

const switchLocale = async () => {
  const path = switchLocalePath(selectedLocale.value)
  await router.push(path)
  await setLocale(selectedLocale.value)
}
</script>
