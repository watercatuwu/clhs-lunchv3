<template>
    <MazBtn @click="handleLogin" :loading="loading" class="max-w-xs mx-2">
        <template #left-icon>
            <Icon name="material-symbols:login" />
        </template>
        登入
    </MazBtn>
</template>

<script setup>
const loading = ref(false)
const supabase = useSupabaseClient()
async function handleLogin() {
    loading.value = true
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'http://localhost:3000/me',
        }
    })

    if (error) {
        console.log(error)
    }
}
</script>