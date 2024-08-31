<template>
<div>
  <div class="pb-48">
    <div class="container mx-auto md:px-0 px-2 flex flex-col gap-4 overflow-y-auto">
      <VueDatePicker
        v-model="dateValue"
        :format="dateFormat(dateValue)"
        :enable-time-picker="false"
        :min-date="DateTime.now().toJSDate()"
        :max-date="DateTime.local(2024, 9, 8).endOf('week').toJSDate()"
        :disabled-week-days="[6, 0]"
        auto-apply
        dark
      />
      <h1 class="text-3xl font-bold text-zinc-100 flex items-center gap-2">
        <Icon name="mdi:food-drumstick" />
        簡餐部
      </h1>
      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
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
      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
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
      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
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
      <div  class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
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
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { DateTime } from 'luxon';
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
const dateValue = ref(new Date())
const { data, error } = await useFetch('/api/product/2024-09-02');

function dateFormat(date){
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}

watch(
  () => dateValue.value,
  async(newValue) => {
    data.value = await $fetch('/api/product/' + dateFormat(newValue))
    cartStore.clearCart()
  }
)
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