import { onMounted, onUnmounted, ref } from 'vue'

export const useScrollAnimation = () => {
  const isVisible = ref(false)

  const observeElement = (el: HTMLElement) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            entry.target.classList.add('animate-in')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px
 0px -100px 0px'
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }

  return {
    isVisible,
    observeElement
  }
}
