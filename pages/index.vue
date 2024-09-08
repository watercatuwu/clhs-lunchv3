<template>
<div class="flex-1 flex items-center justify-center">
    <div class="container mx-auto">
        <div class="grid lg:grid-cols-2 grid-cols-1  mx-4">
            <div class="flex flex-col justify-center">
                <h1 id="title" class="text-6xl text-zinc-100 text-left">CLHS <span>Lunch</span> <span class="text-violet-400">v3</span></h1>
                <p class="text-xl text-zinc-400 text-left">歡迎使用<span class="text-violet-400">CLHS午餐訂餐系統</span> v3.0</p>
                <div class="flex my-4">
                    <Loginbtn />
                    <NuxtLink to="/tutorial">
                        <MazBtn color="info" class="max-w-xs mx-2">
                            <template #left-icon>
                                <Icon name="material-symbols:book-2" size="1.5rem" />
                            </template>
                            使用教學
                        </MazBtn>
                    </NuxtLink>
                </div>
            </div>
            <div class="hidden lg:block">
                <div class="flex items-center justify-center">
                    <img class="h-72" src="~/assets/img/logo.png" alt="hero image">
                </div>
            </div>
        </div>
    </div>
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

<style scoped>
#title {
    font-family: 'Outfit', sans-serif;
}
</style>
