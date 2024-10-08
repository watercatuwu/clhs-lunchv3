<template>
    <div class="flex flex-col gap-2">
        <MazLoadingBar v-if="loading" color="primary" />
        <div v-else>
            <h1 v-if="orders.data.length === 0" class="text-2xl font-bold text-zinc-400 flex items-center gap-2">最近沒有訂單:(</h1>
            <transition-group v-else name="fade" mode="out-in">
                <MazCard v-for="i in orders.data" class="w-full space-y-2 my-1">
                    <div class="flex items-center justify-between">
                        <h3 class="text-xl text-zinc-100">{{ DateTime.fromISO(i.date).setLocale('zh-TW').toFormat('MM-dd cccc') }}</h3>
                        <MazBadge size="1rem" :color="i.checked?'success':'danger'">
                            {{ i.checked ? "已付款" : "未付款" }}
                        </MazBadge>
                    </div>
                    <h3 class="text-lg text-zinc-400">送出時間:{{ DateTime.fromISO(i.created_at).setLocale('zh-TW').toFormat('MM-dd cccc HH:mm:ss ') }}</h3>
                    <p class="text-md text-zinc-100">品項</p>
                    <p v-for="j in i.items" class="text-md text-zinc-400">{{j.title}}x{{j.quantity}}</p>
                    <template #footer>
                        <div class="flex justify-between">
                            <h3 class="text-2xl text-zinc-100">${{ totalPrice(i.items)-discount(i.items) }}</h3>
                            <MazBtn size="sm" color="danger" :disabled="i.checked" @click="cancelOrder(i.id, i.checked)">取消訂單</MazBtn>
                        </div>
                    </template>
                </MazCard>
            </transition-group>
        </div>
    </div>
</template>
<script setup>
import { DateTime } from 'luxon'
import { useToast } from 'maz-ui'

const loading = ref(true)
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const toast = useToast()
const { data: orders } = await useFetch(`/api/user/order/${user.value.id}`)
loading.value = false
toast.success('訂單載入成功')


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

async function cancelOrder(id, checked) {
    if(!checked){
        loading.value = true
        const { error } = await supabase.from('orders').delete().eq('id', id)
        if (error){
            toast.error(error.message)
            loading.value = false
        } else {
            toast.success('訂單已取消')
        }
        orders.value = await $fetch(`/api/user/order/${user.value.id}`)
        loading.value = false
        toast.success('訂單重新載入成功')
    } else {
        toast.error('訂單已經確認')
    }
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