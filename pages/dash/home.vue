<template>
    <div class="flex-1 flex flex-col items-center justify-center">
        <div class="container mx-auto">
            <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div v-for="(link, index) in links" :key="index">
                    <NuxtLink :to="link.url">
                        <MazCardSpotlight class="w-full h-36">
                            <div class="flex justify-center items-center text-center gap-2 text-3xl font-bold text-zinc-100">
                                <Icon :name="link.icon" size="1.5rem" />
                                <h3>{{ link.title }}</h3>
                              </div>
                        </MazCardSpotlight>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    useHead({
      title: '管理面板',
      meta: [
        { name: 'description', content: '這裡是管理面板' }
      ]
    })

    const links = [
        { title: '訂單管理', url: '/dash/order', icon: 'material-symbols:orders-rounded' },
        { title: '儲值管理', url: '/dash/bank', icon: 'material-symbols:account-balance-rounded' },
    ]
</script>