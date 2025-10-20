<template>
  <div>
    <section class="section">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold text-black mb-4">
            {{ t('legal.privacy.title') }}
          </h1>
          <p class="text-sm text-gray-600 mb-8">
            {{ t('legal.privacy.lastUpdated') }}: {{ new Date().toLocaleDateString(locale) }}
          </p>

          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 leading-relaxed mb-6">
              {{
                locale === 'pt-BR'
                  ? 'A política de privacidade será disponibilizada em breve. Para mais informações, entre em contato através do email institucional.'
                  : 'Privacy policy will be available soon. For more information, contact us via institutional email.'
              }}
            </p>

            <div class="mt-8">
              <NuxtLink :to="localePath('/contato')" class="btn-primary">
                {{ t('ctas.contact') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

useHead({
  title: t('legal.privacy.title'),
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>
