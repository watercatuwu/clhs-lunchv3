<template>
  <div class="pb-24">
    <div class="container mx-auto px-2 lg:px-0 flex flex-col lg:flex-row gap-4 overflow-y-auto">
      <div class="flex flex-col gap-4 w-full lg:w-1/3">
        <div class="flex justify-center">
          <Avatar :size="150" variant="beam" :colors="colors" :name="user.user_metadata.full_name" />
        </div>
        <div class="mb-4 space-y-2">
            <h1 class="text-4xl font-bold text-zinc-100 text-center">{{ user.user_metadata.full_name }}</h1>
            <p class="text-xl text-zinc-400 text-center">{{ user.user_metadata.email.split('@')[0] }}</p>
            <div class="flex justify-center gap-2">
              <MazBadge color="primary" size="1rem">
                {{ pubUser.role }}
              </MazBadge>
              <MazBadge color="success" size="1rem">
                創建日期: {{ DateTime.fromISO(pubUser.created_at).toFormat('yyyy-MM-dd') }}
              </MazBadge>
          </div>
        </div>
        <div class="flex flex-col gap-2 justify-center items-center">
          <NuxtLink v-if="pubUser.role === 'admin'" to="/dash/home">
            <MazBtn class="w-72" color="primary">前往管理面板</MazBtn>
          </NuxtLink>
          <MazBtn class="w-72" color="danger" @click="signOut">登出</MazBtn>
        </div>
      </div>
      <div class="flex-1 space-y-4">
        <h1 class="text-3xl font-bold text-zinc-100 flex items-center gap-2">最近訂單</h1>
        <div class="max-h-96 overflow-y-auto">
            <Orderlist />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { DateTime } from 'luxon'
import Avatar from "vue-boring-avatars"

useHead({
  title: '我',
  meta: [
    { name: 'description', content: 'Me' }
  ]
})
definePageMeta({
  layout: 'mobile',
  middleware: 'auth'
});

const colors = ['#09090b', '#f4f4f5']
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const { data: pubUser, error: pubError } = await supabase
  .from('users')
  .select('*')
  .eq('id', user.value.id)
  .single()

function signOut() {
  const { error } = supabase.auth.signOut()
  if (error) {
    console.log(error)
  }
  navigateTo('/')
}
</script>