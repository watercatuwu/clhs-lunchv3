<template>
    <div class="pb-24">
        <div class="container mx-auto px-2 md:px-0 flex flex-col gap-4">
            <h1 class="text-3xl font-bold text-white flex items-center gap-2">
                <Icon name="material-symbols:shopping-cart-checkout-rounded" size="1.5rem" />
                結帳
            </h1>
            <MazCard class="w-full">
                <template #content>
                    <MazTable
                        class="text-zinc-100 overflow-x-auto"
                        size="md"
                        sortable
                        hoverable
                        :headers="[
                        { label:'#', key: 'id', align: 'center', width: '2rem' },
                        { label:'商品', key: 'title' },
                        { label: '價格', key: 'price', align: 'center'  },
                        { label: '數量', key: 'quantity', align: 'center' },
                        ]"
                        :rows="cartStore.items"
                     >
                    </MazTable>
                </template>
            </MazCard>
            <h1 class="text-2xl font-bold text-zinc-100">付款方式</h1>
            <MazRadioButtons
                v-slot="{ option, selected }"
                v-model="selectedMethod"
                :options="paymentMethod"
                selector
                equal-size
                block
            >
                <div class="flex flex-col items-start p-2">
                    <h3 class="mb-2 text-xl font-semibold" :class="{ 'text-zinc-400': !selected }">
                        {{ option.label }}
                    </h3>
                    <span :class="{ 'text-zinc-400': !selected }">
                        {{ option.description }}
                    </span>
                </div>
            </MazRadioButtons>
            <div class="flex gap-2 justify-end">
                <h1 class="text-2xl text-zinc-100">
                    {{ cartStore.totalItems }} <span class="text-xl text-zinc-400">個商品</span>
                </h1>
                <h1 class="text-2xl text-zinc-100">
                    <span class="text-xl text-zinc-400">小計</span> ${{ cartStore.totalPrice }}
                </h1>
                <h1 class="text-2xl text-zinc-100">
                    <span class="text-xl text-zinc-400">折扣</span> -${{ cartStore.discount }}
                </h1>
            </div>
            <h1 class="text-3xl font-bold text-zinc-100 text-right">
                <span class="text-xl text-zinc-400">總計</span> ${{ cartStore.totalPrice - cartStore.discount }}
            </h1>
            <div class="flex flex-col gap-2 md:flex-row md:justify-end">
                <NuxtLink to="/app/store" class="w-full md:w-auto">
                    <MazBtn color="danger" size="lg" class="w-full">
                        取消
                    </MazBtn>
                </NuxtLink>
                <MazBtn :disabled="cartStore.items.length===0" :loading="loading" @click="checkout" color="success" size="lg">
                    結帳
                </MazBtn>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
  title: '結帳',
})
definePageMeta({
  layout: 'mobile',
  middleware: 'auth'
});

import { useToast } from 'maz-ui'
import { DateTime } from 'luxon'

const toast = useToast()
const cartStore = useCartStore()
const dateStore = useDateStore()
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const loading = ref(false)

const { data: pubUser, error: pubError } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.value.id)
    .single()

const paymentMethod = [
    { label: '現金', description: '你要出多少>:(', value: 'cash' },
    { label: '線上錢包', description: `錢包餘額:$${pubUser.balance}($${pubUser.balance-(cartStore.totalPrice-cartStore.discount)})`, value: 'wallet' },
]

const selectedMethod = ref('cash')

async function checkout() {
    loading.value = true
    const discountPrice = cartStore.totalPrice - cartStore.discount

    const data = {
        date: dateStore.value,
        items: cartStore.items,
        class: pubUser.class,
        number: pubUser.number,
        payment_method: selectedMethod.value,
        price: discountPrice
    }

    if (selectedMethod.value === 'wallet') {
        if (pubUser.balance < (discountPrice)) {
            toast.error('錢包餘額不足!還敢送出啊冰鳥')
            return
        }
        else {
            data.checked = true
        }
    }

    const { error } = await supabase.from('orders').insert(data)

    if (error) {
        toast.error(error.message)
        loading.value = false
        return
    }
    toast.success('訂單已送出')
    cartStore.clearCart()
    return navigateTo('/app/store')
}
</script>