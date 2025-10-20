<template>
  <div class="coin-badge inline-flex items-center gap-2 px-4 py-2 bg-gold-light/20 rounded-full border border-gold-light">
    <div class="w-6 h-6 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center">
      <span class="text-white text-xs font-bold">G</span>
    </div>
    <span class="text-sm font-semibold text-gold-dark">
      {{ text || 'ESG' }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  text?: string
}

defineProps<Props>()
</script>
