<template>
  <div class="pb-24">
    <div class="container mx-auto px-2 md:px-0 flex flex-col md:flex-row gap-4 overflow-y-auto">
      <div class="flex flex-col gap-4 w-full md:w-1/3">
        <MazAvatar
          src="https://api.dicebear.com/7.x/big-smile/svg?backgroundColor=1d90ff&scale=80" 
          size="3rem"
        />
        <div class="mb-4">
          <h1 class="text-4xl font-bold text-zinc-100 text-center">UserName</h1>
          <p class="text-xl text-zinc-400 text-center">101 01</p>
        </div>
      </div>
      <div class="flex-1">
        <MazCard>
          <template #title>
            <h3 style="margin: 0; margin-bottom: 20px">
              Lorem Ipsum
            </h3>
          </template>
          <template #content>
            <p class="maz-text-muted" style="margin: 0">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </template>
        </MazCard>
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
</script>