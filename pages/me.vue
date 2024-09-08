<template>
  <div class="pb-24">
    <div class="container mx-auto px-2 lg:px-0 flex flex-col lg:flex-row gap-4 overflow-y-auto">
      <div class="flex flex-col gap-4 w-full lg:w-1/3">
        <MazAvatar
          :src="`https://api.dicebear.com/9.x/identicon/svg?&backgroundColor=000000&scale=50&seed=${user.user_metadata.email.split('@')[0]}`"
          size="3rem"
        />
        <div class="mb-4">
            <h1 class="text-4xl font-bold text-zinc-100 text-center">{{user.user_metadata.full_name}}</h1>
            <p class="text-xl text-zinc-400 text-center">{{user.user_metadata.email}}</p>
            <p class="text-xl text-zinc-400 text-center">{{ user.user_metadata.email.split('@')[0] }}</p>
        </div>
      </div>
      <div class="flex-1">
        <div class="flex flex-col gap-2">
          <MazCard>
            <template #title>
              <h3 style="margin: 0; margin-bottom: 20px">
                最近訂單
              </h3>
            </template>
            <template #content>
              <OrderList />
            </template>
          </MazCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: '我',
  meta: [
    { name: 'description', content: 'Me' }
  ]
})
definePageMeta({
  layout: 'mobile'
});

const user = useSupabaseUser()
</script>