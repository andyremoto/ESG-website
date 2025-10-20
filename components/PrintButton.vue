<template>
  <button
    class="print-button btn-outline no-print"
    @click="handlePrint"
    :aria-label="t('ctas.print')"
  >
    <svg
      class="w-5 h-5 mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
      />
    </svg>
    {{ t('ctas.print') }}
  </button>
</template>

<script setup lang="ts">
const { t } = useI18n()

const handlePrint = () => {
  if (typeof window !== 'undefined') {
    window.print()
  }
}
</script>
