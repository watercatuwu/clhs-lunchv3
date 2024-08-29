<template>
    <div class="bg-zinc-800 fixed bottom-0 w-full z-50">
        <div class="w-full py-2">
            <div class="flex justify-around items-center space-x-4">
                <NuxtLink
                    v-for="tab in tabs"
                    :to="tab.to"
                    class="flex-1 flex flex-col items-center text-zinc-400 hover:text-zinc-100">
                    <Icon :name="route.path === tab.to ? tab.active : tab.inactive" size="1.5rem" />
                    <span class="text-xs mt-1">{{ tab.name }}</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const tabs = [
    {
        name: "主頁",
        inactive: "material-symbols:home-outline-rounded",
        active: "material-symbols:home-rounded",
        to: "/home"
    },
    {
        name: "商店",
        inactive: "material-symbols:storefront-outline-rounded",
        active: "material-symbols:storefront-rounded",
        to: "/store"
    },
    {
        name: "我",
        inactive: "material-symbols:person-outline-rounded",
        active: "material-symbols:person-rounded",
        to: "/me"
    }
]
</script>

<style scoped>
.router-link-active {
    @apply text-violet-400 font-bold;
}

.router-link-exact-active {
    @apply text-violet-400 font-bold;
}
</style>