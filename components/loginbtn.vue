<template>
    <MazBtn @click="handleLogin" class="max-w-xs mx-2">
        <template #left-icon>
            <Icon name="material-symbols:login" />
        </template>
        登入
    </MazBtn>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

async function handleLogin() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google'
    })

    if (error) {
        console.log(error)
    }

    console.log(data)
}

</script>