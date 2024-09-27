<template>
    <div class="pb-24">
        <div class="container mx-auto md:px-0 px-2 flex flex-col gap-4 overflow-y-auto">
          <NuxtLink to="/dash/home">
            <MazBtn>
              <template #left-icon>
                <Icon name="material-symbols:arrow-left-alt-rounded" size="1.5rem" />
              </template>
              返回總面板
            </MazBtn>
          </NuxtLink>
          <MazCard>
              <div class="grid grid-cols-1 gap-4">
                <div class="p-4">
                  <div class="flex items-center gap-2 text-2xl text-zinc-100">
                    <Icon name="material-symbols:group-rounded" />
                    <h3>會員人數</h3>
                  </div>
                  <p class="text-5xl text-zinc-100">{{ bank.data.length }}</p>
                </div>
                <div class="p-4">
                  <div class="flex items-center gap-2 text-2xl text-zinc-100">
                    <Icon name="material-symbols:account-balance-rounded" />
                    <h3>在庫金額</h3>
                  </div>
                  <p class="text-5xl text-zinc-100">${{ totalBalance }}</p>
                </div>
              </div>
            </MazCard>
            <Dashbank :data="bank.data" />
        </div>
    </div>
</template>

<script setup>
useHead({
  title: '儲值管理',
  meta: [
    { name: 'description', content: 'Bank Management' }
  ]
})
definePageMeta({
  layout: 'default',
  middleware: ['auth', 'admin']
});

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const { data: pubUser } = await supabase.from('users').select('*').eq('id', user.value.id).single()
const { data: bank } = await useFetch(`/api/class/bank/${pubUser.class}`)

const totalBalance = bank.value.data.reduce((sum, i)=>sum+i.balance,0)
console.log(bank.value.data)
</script>