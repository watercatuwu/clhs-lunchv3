<template>
    <MazBtn v-if="!user" @click="handleLogin" :loading="loading" class="max-w-xs mx-2">
        <template #left-icon>
            <Icon name="material-symbols:login" size="1.5rem" />
        </template>
        登入
    </MazBtn>
    <NuxtLink v-else to="/me">
        <MazBtn color="secondary">
            <template #left-icon>
                <Icon name="material-symbols:arrow-circle-right-outline-rounded" size="1.5rem" />
            </template>
            繼續使用
        </MazBtn>
    </NuxtLink>
</template>

<script setup>
const loading = ref(false)
const supabase = useSupabaseClient()
const user = useSupabaseUser()
async function handleLogin() {
    loading.value = true
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            queryParams:{
                prompt: 'select_account',
                hd: 'student.clhs.tyc.edu.tw',
            },
            redirectTo: `${window.location.href}me`,
        }
    })

    if (error) {
        console.log(error)
    }
}
</script>