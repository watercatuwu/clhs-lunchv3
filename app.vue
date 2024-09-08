<template>
  <div class="dark">
    <NuxtLayout>
      <NuxtLoadingIndicator :height="6" color="#a78bfa" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
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