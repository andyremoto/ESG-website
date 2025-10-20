<template>
  <div class="card p-6 h-full flex flex-col">
    <div v-if="icon" class="mb-4">
      <div class="w-12 h-12 rounded-2xl bg-gold-light/20 flex items-center justify-center">
        <span class="text-2xl">{{ icon }}</span>
      </div>
    </div>

    <h3 class="text-xl font-bold text-black mb-3">
      {{ title }}
    </h3>

    <p class="text-gray-700 leading-relaxed flex-grow">
      {{ description }}
    </p>

    <div v-if="link" class="mt-4">
      <NuxtLink
        :to="link"
        class="link text-sm font-semibold"
      >
        {{ linkText || t('common.readMore') }} →
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

interface Props {
  title: string
  description: string
  icon?: string
  link?: string
  linkText?: string
}

defineProps<Props>()
</script>
