<template>
    <nav class="p-4 sticky top-0 z-50 bg-zinc-900">
        <div class="container mx-auto flex justify-between items-center">
            <div class="flex items-center space-x-4">
                <a href="/" class="text-xl font-bold text-zinc-100">CLHS Lunch v3</a>
            </div>
            <div v-if="logged" class="flex items-center space-x-4">
                <h3 class="text-zinc-400 text-lg">${{ balance.balance }}</h3>
                <Avatar :size="50" variant="beam" :colors="colors" :name="avatar" />
            </div>
        </div>
    </nav>
</template>

<script setup>
import Avatar from "vue-boring-avatars"
const colors = ['#1c04d1', '#f4f4f5']

const avatar = ref("")
const logged = ref(false)
const session = useSupabaseSession()
const balance = ref(0)
if (session.value) {
    logged.value = true
    const user = useSupabaseUser()
    balance.value = await $fetch('/api/user/balance/'+user.value.id)
    avatar.value = user.value.user_metadata.full_name
}
</script>

<style scoped>
</style>