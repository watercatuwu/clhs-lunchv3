<template>
  <div class="dark">
    <NuxtLayout>
      <NuxtLoadingIndicator :height="6" color="#a78bfa" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  meta: [
    { name: 'google-site-verification', content: 'X9eP00pJfv2y0GzKFMaVhbDvg7s8WL8yC1w2bxRb07M' }
  ]
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: grayscale(1);
}
</style>