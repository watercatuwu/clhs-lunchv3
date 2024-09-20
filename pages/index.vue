<template>
<div class="flex-1 flex flex-col items-center justify-center">
    <div class="container mx-auto">
        <div class="grid md:grid-cols-2 grid-cols-1 mx-4">
            <div class="flex justify-center items-center relative mb-12">
                <div id="imgbg" class="absolute rounded-full md:w-80 md:h-80 w-56 h-56"></div>
                <img class="md:h-72 h-60 relative" src="~/assets/img/logo.webp" alt="hero image">
            </div>
            <div class="flex flex-col justify-center">
                <h1 class="md:text-6xl text-5xl text-zinc-100 md:text-left text-center">CLHS <span>Lunch</span> <span class="text-violet-400 text-shadow">v3</span></h1>
                <p class="md:text-xl text-lg text-zinc-400 md:text-left text-center">歡迎使用<span class="text-violet-400">CLHS午餐訂餐系統</span> v3.0</p>
                <div class="flex my-4 md:justify-start justify-center">
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
#imgbg {
    background: #a78bfa;
    filter: blur(5rem);
}
.text-shadow {
    text-shadow: 0px 0px 2rem rgba(167, 139, 250, 1);
  }
</style>
