<template>
  <div class="section-header text-center mb-12">
    <div v-if="badge" class="mb-4">
      <span class="inline-block px-4 py-1 bg-orange/10 text-orange text-sm font-semibold rounded-full">
        {{ badge }}
      </span>
    </div>

    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
      {{ title }}
    </h2>

    <p v-if="subtitle" class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
      {{ subtitle }}
    </p>

    <div v-if="divider" class="mt-8 flex justify-center">
      <div class="w-24 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  badge?: string
  divider?: boolean
}

withDefaults(defineProps<Props>(), {
  divider: true
})
</script>
