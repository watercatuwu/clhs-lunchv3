<template>
    <nav class="p-4 sticky top-0 z-50 bg-zinc-900">
        <div class="container mx-auto flex justify-between items-center">
            <!-- 左側區域 -->
            <div class="flex items-center space-x-4">
                <a id="logo" href="/" class="text-xl font-bold text-zinc-100">CLHS Lunch v3</a>
            </div>
            <!-- 右側區域 -->
            <div>
                <MazDropdown
                v-if="!logged"
                class="text-red-500"
                :items="dropdowns"
                trigger="click"
                position="bottom right"
                >
                <template #element>
                    <MazAvatar
                    no-clickable-icon
                    :src="avatar"
                    tabindex="-1"
                    />
                </template>
                </MazDropdown>
            </div>
        </div>
    </nav>
</template>

<script setup>
const dropdowns = [
    {
      label: '登出',
      action: () => signOut(),
    }
]

const supabase = useSupabaseClient()
const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) console.log(error)
  navigateTo('/')
}

const avatar = ref("")
const logged = ref(false)
const user = useSupabaseUser()
if (user.value === null) {
    logged.value = true
    avatar.value = "https://i.meee.com.tw/DSwzgKz.png"
} else {
    logged.value = false
    avatar.value = `https://api.dicebear.com/9.x/identicon/svg?&backgroundColor=000000&scale=50&seed=${user.value.user_metadata.email.split('@')[0]}`
}
</script>

<style scoped>
#logo{
    font-family: 'Outfit', sans-serif;
}
</style>