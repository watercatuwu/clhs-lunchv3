<template>
<div>
  <div class="pb-48">
    <div class="container mx-auto md:px-0 px-2 flex flex-col gap-4 overflow-y-auto">
      <h1 class="text-3xl font-bold text-zinc-100 flex items-center gap-2">
        <Icon name="mdi:hamburger" />
        主餐
      </h1>
      <div id="main" class="grid md:grid-cols-4 grid-cols-1 gap-2">
        <Product v-for="(p, index) in data.data.main"
        :key="index"
        :id="p.code"
        :title="p.name"
        :price="p.price"
        :description="p.description"
        :image="p.image"
        />
      </div>
      <h1 class="text-3xl font-bold text-zinc-100 flex items-center gap-2">
        <Icon name="mdi:food-fork-drink" />
        飲料
      </h1>
      <div id="drink" class="grid md:grid-cols-4 grid-cols-1 gap-2">
        <Product v-for="(d, index) in data.data.drink"
        :key="index"
        :id="d.code"
        :title="d.name"
        :price="d.price"
        :description="d.description"
        :image="d.image"
        />
      </div>
    </div>
  </div>
  <Transition name="slide-up">
    <div v-if="cartStore.items.length > 0" class="fixed bottom-0 left-0 right-0 mb-16 z-50 md:w-1/3 w-full px-4 mx-auto">
      <MazCard class="w-full">
        <template #content>
          <div class="flex flex-row justify-between items-center">
            <div class="flex flex-row items-center gap-2">
              <MazBadge size="1.25rem" rounded-size="xl">{{ cartStore.totalItems }}</MazBadge>
              <p class="text-zinc-400 text-lg">總計: {{ cartStore.totalPrice }} 元</p>
            </div>
            <div class="flex items-center gap-2">
              <MazBtn color="danger" fab @click="cartStore.clearCart">
                <template #left-icon>
                  <Icon name="material-symbols:shopping-cart-off-rounded" size="1.25rem" />
                </template>
              </MazBtn>
              <MazBtn color="success" fab @click="cartStore.clearCart">
                <template #left-icon>
                  <Icon name="material-symbols:shopping-cart-checkout-rounded" size="1.25rem" />
                </template>
              </MazBtn>
            </div>
          </div>
        </template>
      </MazCard>
    </div>
  </Transition>
</div>
</template>

<script setup>
useHead({
  title: '商店',
  meta: [
    { name: 'description', content: 'A Store' }
  ]
})
definePageMeta({
  layout: 'mobile'
});
const cartStore = useCartStore()


const { data, error } = await useFetch('/api/product/2024-09-02');
console.log(data.value)

</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.5s ease;
}

.slide-up-enter-from {
  transform: translateY(100%);
}

.slide-up-enter-to {
  transform: translateY(0);
}

.slide-up-leave-from {
  transform: translateY(0);
}

.slide-up-leave-to {
  transform: translateY(100%);
}
</style>