<template>
<div class="flex-grow flex">
  <div class="flex-grow pb-48">
    <MazLoadingBar v-if="isLoading" class="fixed w-full top-0 right-0 left-0 mb-4" height="0.25rem" color="secondary" />
    <!--預留高度-->
    <div v-else class="h-1 mb-4" />
    <div class="container mx-auto mt-4 h-full md:px-0 px-2 flex flex-col gap-4 overflow-y-auto">
      <VueDatePicker
        v-model="dateValue"
        :format="DateTime.fromJSDate(dateValue).toFormat('DDDD')"
        :enable-time-picker="false"
        :min-date="now.toJSDate()"
        :max-date="now.plus({day:1}).endOf('week').toJSDate()"
        :disabled-week-days="[6, 0]"
        auto-apply
        dark
      />
      <h1 v-if="isError" class="mt-6 text-2xl font-bold text-red-500">{{ errorMsg }}</h1>
      <Transition name="fade">
      <div v-if="!isLoading&&!isError" class="mt-6 space-y-8">
        <h1 class="text-3xl font-bold text-zinc-100 flex items-center gap-2">
          <Icon name="mdi:food-drumstick" />
          簡餐部<span class="text-zinc-400">Bento</span>
        </h1>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
          <Product v-for="(p, index) in data.data.bento"
          :key="index"
          :id="p.id"
          :type="p.type"
          :title="p.title"
          :price="p.price"
          :description="p.description"
          :image="p.image"
          />
        </div>
        <h1 class="text-3xl font-bold text-zinc-100 flex items-center gap-2">
          <Icon name="mdi:noodles" />
          麵食部<span class="text-zinc-400">Noodles</span>
        </h1>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
          <Product v-for="(p, index) in data.data.noodles"
          :key="index"
          :id="p.id"
          :type="p.type"
          :title="p.title"
          :price="p.price"
          :description="p.description"
          :image="p.image"
          />
        </div>
        <h1 class="text-3xl font-bold text-zinc-100 flex items-center gap-2">
          <Icon name="mdi:hamburger" />
          早餐部<span class="text-zinc-400">Breakfast</span>
        </h1>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
          <Product v-for="(p, index) in data.data.breakfast"
          :key="index"
          :id="p.id"
          :type="p.type"
          :title="p.title"
          :price="p.price"
          :description="p.description"
          :image="p.image"
          />
        </div>
        <h1 class="text-3xl font-bold text-zinc-100 flex items-center gap-2">
          <Icon name="mdi:food-fork-drink" />
          飲料<span class="text-zinc-400">Drink</span>
        </h1>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
          <Product v-for="(d, index) in data.data.drink"
          :key="index"
          :id="d.id"
          :type="d.type"
          :title="d.title"
          :price="d.price"
          :description="d.description"
          :image="d.image"
          />
        </div>
      </div>
      </Transition>
    </div>
  </div>
  <Cart />
</div>
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { DateTime } from 'luxon';
import { useToast } from 'maz-ui';

useHead({
  title: '商店',
  meta: [
    { name: 'description', content: 'A Store' }
  ]
})
definePageMeta({
  layout: 'mobile',
  middleware: 'auth'
});

const toast = useToast()
const isLoading = ref(true)
const isError = ref(false)
const cartStore = useCartStore()
const dateStore = useDateStore()
const now = DateTime.now().setLocale('zh-TW').setZone('Asia/Taipei');
const dateValue = ref(DateTime.fromISO(dateStore.value).toJSDate())
const data = ref(null)
const errorMsg = ref("")

onMounted(async() => {
  const { data:product } = await useFetch(`/api/product/${now.toISODate()}`)
  if (product.value.code){
      if (product.value.code === 'PGRST116'){
        isError.value = true
        isLoading.value = false
        errorMsg.value = "查無本日菜單資料:("
        return
      }
    }
  data.value = product.value
  isError.value = false
  isLoading.value = false
})

watch(
  () => dateValue.value,
  async(newValue) => {
    dateStore.value = newValue.toISOString() //儲存當前選擇的日期
    cartStore.clearCart()
    isLoading.value = true
    const product = await $fetch('/api/product/' + DateTime.fromJSDate(newValue).toFormat('yyyy-MM-dd'))
    if (product.code){
      if (product.code === 'PGRST116'){
        isError.value = true
        isLoading.value = false
        errorMsg.value = "查無本日菜單資料:("
        toast.error(errorMsg.value)
        return
      }
    }
    data.value = product
    isError.value = false
    isLoading.value = false
    toast.success('已載入菜單')
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