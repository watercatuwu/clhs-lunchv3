<template>
    <div class="w-64 h-[50dvh] bg-zinc-800 text-white flex flex-col rounded-lg m-6">
        <ul class="flex flex-col flex-grow p-4">
            <li v-for="tab in tabs">
                <NuxtLink :to="tab.to" class="flex items-center p-2 my-2 text-zinc-400 hover:text-zinc-100">
                    <Icon :name="route.path === tab.to ? tab.active : tab.inactive" size="1.5rem" />
                    {{tab.name}}
                </NuxtLink>
            </li>
        </ul>
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
    @apply text-zinc-100 font-bold;
}

.router-link-exact-active {
    @apply text-zinc-100 font-bold;
}
</style>