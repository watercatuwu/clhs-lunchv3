<template>
<div class="bg-zinc-900 min-h-screen flex flex-col">
    <Alert v-if="alert.code!=='PGRST116'" :msg="content" icon="material-symbols:warning" />
    <Navbar />
    <slot />
</div>
</template>

<script setup>
const { data: alert } = await useFetch('/api/alert')
const content = ref(alert.value.content)
</script>