<template>
    <div>
        <div class="container mx-auto md:px-0 px-2 flex flex-col gap-4 overflow-y-auto">
          <div class="grid lg:grid-cols-3 grid-cols-1 gap-2">
            <MazCard>
              <div class="flex items-center gap-2 text-2xl text-zinc-100">
                <Icon name="material-symbols:orders-rounded" />
                <h3>訂單總數</h3>
              </div>
              <p class="text-5xl text-zinc-100">0</p>
            </MazCard>
            <MazCard>
              <div class="flex items-center gap-2 text-2xl text-zinc-100">
                <Icon name="material-symbols:group" />
                <h3>訂餐人數</h3>
              </div>
              <p class="text-5xl text-zinc-100">0</p>
            </MazCard>
            <MazCard>
              <div class="flex items-center gap-2 text-2xl text-zinc-100">
                <Icon name="material-symbols:attach-money-rounded" />
                <h3>總金額</h3>
              </div>
              <p class="text-5xl text-zinc-100">0</p>
            </MazCard>
          </div>
          <Dashorderlist />
        </div>
    </div>
</template>

<script setup>
useHead({
  title: '主頁',
  meta: [
    { name: 'description', content: 'Home' }
  ]
})
definePageMeta({
  layout: 'default',
  middleware: ['auth', 'admin']
});
</script>