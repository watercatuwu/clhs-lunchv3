<template>
  <div class="dark">
    <NuxtLayout>
      <NuxtLoadingIndicator :height="6" :throttle="0" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: '首頁',
  meta: [
    { name: 'description', content: '這裡是首頁' }
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