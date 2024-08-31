<template>
<div>
  <div class="pb-48">
    <div class="container mx-auto md:px-0 px-2 flex flex-col gap-4 overflow-y-auto">
      <h1 class="text-3xl font-bold text-zinc-100 flex items-center gap-2">
        <Icon name="mdi:food-drumstick" />
        簡餐部
      </h1>
      <div class="grid md:grid-cols-4 grid-cols-1 gap-2">
        <Product v-for="(p, index) in data.data.bento"
        :key="index"
        :id="p.id"
        :title="p.title"
        :price="p.price"
        :description="p.description"
        :image="p.image"
        />
      </div>
      <h1 class="text-3xl font-bold text-zinc-100 flex items-center gap-2">
        <Icon name="mdi:noodles" />
        麵食部
      </h1>
      <div class="grid md:grid-cols-4 grid-cols-1 gap-2">
        <Product v-for="(p, index) in data.data.noodle"
        :key="index"
        :id="p.id"
        :title="p.title"
        :price="p.price"
        :description="p.description"
        :image="p.image"
        />
      </div>
      <h1 class="text-3xl font-bold text-zinc-100 flex items-center gap-2">
        <Icon name="mdi:hamburger" />
        早餐部
      </h1>
      <div class="grid md:grid-cols-4 grid-cols-1 gap-2">
        <Product v-for="(p, index) in data.data.breakfast"
        :key="index"
        :id="p.id"
        :title="p.title"
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
        :id="d.id"
        :title="d.title"
        :price="d.price"
        :description="d.description"
        :image="d.image"
        />
      </div>
    </div>
  </div>
  <Cart />
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