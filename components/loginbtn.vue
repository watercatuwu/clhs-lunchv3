<template>
    <MazBtn v-if="!user" @click="handleLogin" :loading="loading" class="max-w-xs mx-2">
        <template #left-icon>
            <Icon name="material-symbols:login" size="1.5rem" />
        </template>
        登入
    </MazBtn>
    <NuxtLink v-else to="/app/me">
        <MazBtn @click="loading=true" :loading="loading" color="secondary">
            <template #left-icon>
                <Icon name="material-symbols:arrow-circle-right-outline-rounded" size="1.5rem" />
            </template>
            繼續使用
        </MazBtn>
    </NuxtLink>
</template>

<script setup>
import { useToast } from 'maz-ui'
const toast = useToast()
const loading = ref(false)
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const redirectUrl = `${window.location.origin}/app/me`
async function handleLogin() {
    loading.value = true
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            queryParams:{
                prompt: 'select_account',
                hd: 'student.clhs.tyc.edu.tw',
            },
            redirectTo: redirectUrl,
        }
    })

    if (error) {
        console.log(error)
        toast.error(error.message)
        loading.value = false
        return
    }
}
</script>