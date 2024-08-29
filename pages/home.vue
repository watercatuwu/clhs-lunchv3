<template>
    <div>
        <div class="container mx-auto md:px-0 px-2 flex flex-col overflow-y-auto">
            <Wallet />
        </div>
    </div>
</template>

<script setup>
useHead({
  title: '主頁',
  meta: [
    { name: 'description', content: 'Home' }
  ]
})
definePageMeta({
  layout: 'mobile'
});
</script>