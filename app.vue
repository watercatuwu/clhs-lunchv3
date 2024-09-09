<template>
  <div class="dark">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
</script>

<style>
body{
  font-family: 'Outfit', sans-serif;
}
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