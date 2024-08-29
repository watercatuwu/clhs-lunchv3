<template>
  <div class="pb-24">
    <div class="container mx-auto md:px-0 px-2 flex flex-col gap-4 overflow-y-auto">
      <h1 class="text-3xl font-bold text-zinc-100 flex items-center gap-2">
        <Icon name="mdi:hamburger" />
        主餐
      </h1>
      <div id="main" class="grid md:grid-cols-4 grid-cols-1 gap-2">
        <Product v-for="(p, index) in products.main"
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
        <Product v-for="(d, index) in products.drink"
        :key="index"
        :id="d.id"
        :title="d.title"
        :price="d.price"
        :description="d.description"
        :image="d.image"
        />
      </div>
      <h1 class="text-3xl font-bold text-zinc-100 flex items-center gap-2">
        <Icon name="mdi:cash" />
        結帳
      </h1>
      <div>
        <p class="text-zinc-100 text-2xl">{{cartStore.totalItems}}個商品</p>
        <p class="text-zinc-100 text-2xl">$<MazAnimatedCounter :count="cartStore.totalPrice" /></p>
      </div>
      <div class="flex flex-col gap-2">
        <MazBtn color="danger" @click="cartStore.clearCart()">清除購物車</MazBtn>
        <MazBtn color="success" @click="cartStore.checkout()">結帳</MazBtn>
      </div>
    </div>
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
const products = {
  "main": [
    {
      "id": "1",
      "title": "漢堡",
      "price": 60,
      "description": "很好吃",
      "image": "https://picsum.photos/500"
    },
    {
      "id": "2",
      "title": "炸雞",
      "price": 80,
      "description": "外酥內嫩",
      "image": "https://picsum.photos/500"
    },
    {
      "id": "3",
      "title": "義大利麵",
      "price": 70,
      "description": "美味可口",
      "image": "https://picsum.photos/500"
    },
    {
      "id": "4",
      "title": "牛排",
      "price": 150,
      "description": "多汁美味",
      "image": "https://picsum.photos/500"
    },
    {
      "id": "5",
      "title": "豬排",
      "price": 120,
      "description": "香脆可口",
      "image": "https://picsum.photos/500"
    },
    {
      "id": "6",
      "title": "海鮮炒飯",
      "price": 90,
      "description": "鮮美可口",
      "image": "https://picsum.photos/500"
    },
    {
      "id": "7",
      "title": "牛肉麵",
      "price": 85,
      "description": "湯頭鮮美",
      "image": "https://picsum.photos/500"
    },
    {
      "id": "8",
      "title": "燒烤",
      "price": 100,
      "description": "美味可口",
      "image": "https://picsum.photos/500"
    },
    {
      "id": "9",
      "title": "沙拉",
      "price": 50,
      "description": "清爽健康",
      "image": "https://picsum.photos/500"
    }
  ],
  "drink": [
    {
      "id": "A",
      "title": "紅茶",
      "price": 20,
      "description": "很好喝",
      "image": "https://picsum.photos/500"
    },
    {
      "id": "B",
      "title": "綠茶",
      "price": 20,
      "description": "清新自然",
      "image": "https://picsum.photos/500"
    },
    {
      "id": "C",
      "title": "可樂",
      "price": 25,
      "description": "冰涼可口",
      "image": "https://picsum.photos/500"
    }
  ]
}

</script>