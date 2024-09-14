<template>
    <div class="flex flex-col gap-2">
        <h1 v-if="orders.data.length === 0" class="text-2xl font-bold text-zinc-400 flex items-center gap-2">最近沒有訂單:(</h1>
        <transition-group v-else name="fade" mode="out-in" class="flex flex-col gap-2">
            <MazCard v-for="i in orders.data" class="w-full space-y-2">
                <h3 class="text-xl text-zinc-100">{{ DateTime.fromISO(i.date).setLocale('zh-TW').toFormat('MM-dd cccc') }}</h3>
                <h3 class="text-lg text-zinc-400">送出時間:{{ DateTime.fromISO(i.created_at).setLocale('zh-TW').toFormat('MM-dd cccc HH:mm:ss ') }}</h3>
                <p class="text-md text-zinc-100">品項</p>
                <p v-for="j in i.items" class="text-md text-zinc-400">{{j.title}}x{{j.quantity}}</p>
                <template #footer>
                    <div class="flex justify-between">
                        <h3 class="text-2xl text-zinc-100">${{ totalPrice(i.items)-discount(i.items) }}</h3>
                        <MazBtn size="sm" color="danger" @click="cancelOrder(i.id)">取消訂單</MazBtn>
                    </div>
                </template>
            </MazCard>
        </transition-group>
    </div>
</template>
<script setup>
import { DateTime } from 'luxon'
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const { data: orders } = await useFetch(`/api/order/${user.value.id}`)
console.log(orders.value)

function totalPrice(items) {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
}

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

async function cancelOrder(id) {
    const { error } = await supabase.from('orders').delete().eq('id', id)
    if (error) console.log(error)
    orders.value = await $fetch(`/api/order/${user.value.id}`)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: grayscale(1);
}
</style>