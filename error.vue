<template>
<NuxtLayout name="error">
    <div class="flex-1 flex flex-col items-center justify-center">
        <div class="container mx-auto">
            <div class="grid md:grid-cols-2 grid-cols-1 mx-4">
                <div class="flex justify-center items-center relative mb-12">
                    <img class="md:h-72 h-60 relative" src="~/assets/img/error.webp" alt="hero image">
                </div>
                <div class="flex flex-col justify-center gap-2">
                    <h1 class="text-5xl text-zinc-100 md:text-left text-center">{{ error.statusCode }}</h1>
                    <p class="title md:text-xl text-lg text-zinc-400 md:text-left text-center">Oops, something went wrong.</p>
                    <p class="font-bold md:text-3xl text-2xl text-violet-400 md:text-left text-center">{{ error.message }}</p>
                    <div class="flex my-4 md:justify-start justify-center">
                        <NuxtLink to="/">
                            <MazBtn size="lg" color="primary" outline class="max-w-xs mx-2">
                                回主頁
                            </MazBtn>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</NuxtLayout>
</template>
<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
});
</script>