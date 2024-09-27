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
              <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:divide-x lg:divide-y-0 divide-y divide-zinc-700">
                <div class="p-4">
                  <div class="flex items-center gap-2 text-2xl text-zinc-100">
                    <Icon name="material-symbols:orders-rounded" />
                    <h3>訂單數</h3>
                  </div>
                  <p class="text-5xl text-zinc-100">{{ orderQuantity }}</p>
                </div>
                <div class="p-4">
                  <div class="flex items-center gap-2 text-2xl text-zinc-100">
                    <Icon name="material-symbols:fastfood-rounded" />
                    <h3>餐點數</h3>
                  </div>
                  <p class="text-5xl text-zinc-100">{{ itemQuantity }}</p>
                </div>
                <div class="p-4">
                  <div class="flex items-center gap-2 text-2xl text-zinc-100">
                    <Icon name="material-symbols:attach-money-rounded" />
                    <h3>總金額</h3>
                  </div>
                  <p class="text-5xl text-zinc-100">{{ orderTotal }}</p>
                </div>
              </div>
            </MazCard>
          <Dashorderlist :data="computedData" />
        </div>
    </div>
</template>

<script setup>
useHead({
  title: '訂單管理',
  meta: [
    { name: 'description', content: 'Orders Management' }
  ]
})
definePageMeta({
  layout: 'default',
  middleware: ['auth', 'admin']
});

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const { data: pubUser } = await supabase.from('users').select('*').eq('id', user.value.id).single()
const { data: orders } = await useFetch(`/api/class/order/${pubUser.class}`)

const computedData = computed(()=>{
  orders.value.data.forEach((order, i)=>{
    //將陣列轉為文字
    order.text = order.items.map(item => `${item.title} x ${item.quantity}`).join(',');
    //計算價格
    order.price = order.items.reduce((total, item) => total + item.price * item.quantity, 0) - discount(order.items)
    //計算數量
    order.quantity = order.items.reduce((total, item) => total + item.quantity, 0)
  })

  return orders.value.data
})

const orderQuantity = computedData.value.length
const itemQuantity = computedData.value.reduce((total, order) => total + order.quantity, 0)
const orderTotal = computedData.value.reduce((total, order) => total + order.price, 0)

function discount(items) {
    let breakfastQty = 0;
    let drinkQty = 0;
    // 計算早餐及飲料數量
    items.forEach(item => {
        if (item.type === 'breakfast') {
            breakfastQty += item.quantity;
        }
        if (item.type === 'drink') {
            drinkQty += item.quantity;
        }
    });

    // 計算折扣
    const bundleDiscount = 5; // 折扣金額
    if (breakfastQty>0 && drinkQty>0) {
        if (breakfastQty < drinkQty){
            return bundleDiscount * breakfastQty;
        } else {
            return bundleDiscount * drinkQty;
        }
    }
    return 0;
}
</script>