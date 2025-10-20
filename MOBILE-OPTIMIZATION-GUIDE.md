# Guia de Otimização Mobile Premium - Estruturart Golden (ESG)

## ✅ Implementado

### 1. Utilitários CSS Responsivos (`assets/css/tailwind.css`)
- ✅ Touch targets mínimos (44-48px) para todos os botões
- ✅ Container com padding otimizado (`px-5 sm:px-6 lg:px-8`)
- ✅ Section spacing reduzido para mobile (`py-12 md:py-16 lg:py-24`)
- ✅ Classes de tipografia mobile-first:
  - `.heading-xl`: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
  - `.heading-lg`: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`
  - `.heading-md`: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
  - `.heading-sm`: `text-xl sm:text-2xl md:text-3xl`
  - `.body-lg`: `text-lg sm:text-xl md:text-2xl`
  - `.body-base`: `text-base sm:text-lg`
- ✅ Vídeo mobile otimizado (`.video-mobile-optimized`)
- ✅ Card padding responsivo (`.card-mobile-optimized`)
- ✅ Botão mobile grande (`.btn-mobile-lg`)
- ✅ Grid mobile stack (`.grid-mobile-stack`)

### 2. Vídeo de Transição (`components/TokenInterlude.vue`)
- ✅ Detecção de orientação (portrait/landscape)
- ✅ Object-fit dinâmico baseado na orientação
- ✅ Atributos mobile: `playsinline`, `webkit-playsinline`, `x5-playsinline`
- ✅ Fallbacks de timeout para loading

### 3. Página Home (`pages/index.vue`)
- ✅ Hero section com tipografia mobile-first
- ✅ Vídeo hero otimizado para mobile
- ✅ CTAs com `btn-mobile-lg`
- ✅ Espaçamentos responsivos
- ✅ Features cards com padding mobile
- ✅ Grid responsivo (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`)

## 📋 Padrões para Aplicar nas Outras Páginas

### Tipografia
```vue
<!-- Títulos principais -->
<h1 class="heading-xl">Título Principal</h1>

<!-- Títulos de seção -->
<h2 class="heading-lg">Título de Seção</h2>

<!-- Títulos de card -->
<h3 class="heading-sm">Título de Card</h3>

<!-- Corpo de texto -->
<p class="body-lg">Texto grande</p>
<p class="body-base">Texto normal</p>
```

### Espaçamentos
```vue
<!-- Seção -->
<section class="section">...</section>

<!-- Container -->
<div class="container-custom">...</div>

<!-- Gaps entre elementos -->
<div class="space-y-6 sm:space-y-8">...</div>
<div class="gap-4 sm:gap-6 lg:gap-8">...</div>
```

### Botões
```vue
<!-- Botão principal mobile-optimized -->
<button class="btn-mobile-lg bg-gradient-to-r from-orange to-orange-light text-white rounded-2xl">
  Texto do Botão
</button>

<!-- Botões em grupo -->
<div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
  <button class="btn-mobile-lg">Botão 1</button>
  <button class="btn-mobile-lg">Botão 2</button>
</div>
```

### Cards
```vue
<!-- Card responsivo -->
<div class="card-mobile-optimized glass rounded-2xl sm:rounded-3xl border border-gray-200">
  <!-- Ícone -->
  <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gold-dark to-gold mb-4 sm:mb-6">
    🎯
  </div>

  <!-- Título -->
  <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Título</h3>

  <!-- Descrição -->
  <p class="text-sm sm:text-base text-gray-700">Descrição</p>
</div>
```

### Grids
```vue
<!-- Grid que empilha no mobile -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
  <!-- Items -->
</div>

<!-- Ou use a classe helper -->
<div class="grid-mobile-stack lg:grid-cols-4">
  <!-- Items -->
</div>
```

### Vídeos
```vue
<!-- Vídeo responsivo -->
<video
  class="video-mobile-optimized"
  autoplay
  loop
  muted
  playsinline
  webkit-playsinline
>
  <source src="/video.mp4" type="video/mp4">
</video>
```

### Imagens
```vue
<!-- Imagem responsiva -->
<img
  src="/image.png"
  alt="Descrição"
  class="w-full h-auto object-cover rounded-2xl sm:rounded-3xl"
/>
```

## 🎯 Pendente para Aplicar

### Páginas para Otimizar
- [ ] `/pages/token.vue` - Página do token
- [ ] `/pages/como-funciona.vue` - Como funciona
- [ ] `/pages/contato.vue` - Contato
- [ ] `/pages/documentacao/[slug].vue` - Documentação
- [ ] `/layouts/default.vue` - Layout, navegação e footer

### Checklist por Página
- [ ] Substituir títulos por classes mobile-first (`.heading-xl`, `.heading-lg`, etc.)
- [ ] Atualizar parágrafos para `.body-lg` ou `.body-base`
- [ ] Aplicar `btn-mobile-lg` em botões
- [ ] Usar `card-mobile-optimized` em cards
- [ ] Ajustar grids para `grid-cols-1 sm:grid-cols-2 lg:grid-cols-X`
- [ ] Otimizar espaçamentos (`space-y-6 sm:space-y-8`)
- [ ] Ajustar paddings (`p-5 sm:p-6 md:p-8`)
- [ ] Testar em mobile portrait e landscape

## 📱 Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🎨 Princípios de Design Mobile
1. **Mobile-First**: Comece com o design mobile e adicione complexidade para telas maiores
2. **Touch Targets**: Mínimo 44-48px para elementos clicáveis
3. **Espaçamento**: Mais generoso no mobile para evitar elementos muito próximos
4. **Tipografia**: Legível sem zoom (mínimo 16px para corpo de texto)
5. **Imagens/Vídeos**: Otimizados para carregar rápido e exibir corretamente
6. **Navegação**: Simples e acessível com menu hambúrguer
7. **Forms**: Labels visíveis, inputs grandes, fácil de preencher

## 🚀 Performance Mobile
- Vídeos com `playsinline` para evitar fullscreen automático
- Lazy loading de imagens quando possível
- Animações respeitam `prefers-reduced-motion`
- Fontes otimizadas para web

## ✨ Recursos Adicionais
- Safe area insets para dispositivos com notch (`.safe-mobile`)
- Orientação adaptativa para vídeos
- Hover effects que funcionam bem em touch
- Transições suaves mas rápidas
