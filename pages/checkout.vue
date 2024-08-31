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
                        { label:'#', key: 'id', align: 'center' },
                        { label:'商品', key: 'title' },
                        { label: '價格', key: 'price', align: 'center'  },
                        { label: '數量', key: 'quantity', align: 'center' },
                        ]"
                        :rows="competitions"
                     >
                    </MazTable>
                </template>
            </MazCard>
            <div class="flex gap-2 justify-end">
                <h1 class="text-2xl text-zinc-100">
                    {{ cartStore.totalItems }} <span class="text-xl text-zinc-400">個商品</span>
                </h1>
                <h1 class="text-2xl font-bold text-zinc-100">
                    總價: ${{ cartStore.totalPrice }}
                </h1>
            </div>
            <div class="flex flex-col gap-2 md:flex-row md:justify-end">
                <NuxtLink to="/store" class="w-full md:w-auto">
                    <MazBtn color="danger" size="lg" class="w-full">
                        取消
                    </MazBtn>
                </NuxtLink>
                <MazBtn color="success" size="lg">
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
  layout: 'mobile'
});
const cartStore = useCartStore()
const competitions = cartStore.items
</script>