<template>
    <MazCard
      :images="[image]"
      :gallery-height="200"
      :orientation="isMd ? 'row' : 'column'"
      zoom
    >
      <template #title>
        <h3>
            {{ props.title }}
        </h3>
      </template>
      <template #subtitle>
        <span>
            NT ${{ props.price }}
        </span>
      </template>
      <template #content>
        <p class="maz-text-muted">
           {{ props.description }}
        </p>
      </template>
      <template #footer>
        <MazInputNumber
            class="w-full"
            v-model="quantity"
            placeholder="Enter number"
            :min="0"
            :step="1"
            :max="100"
            color="secondary"
        />
      </template>
    </MazCard>
</template>

<script setup>
import emitter from '~/composables/bus';
const cartStore = useCartStore()
const quantity = ref(0)
const isMd = useMediaQuery('(max-width: 960px)')
const props = defineProps({
    title: String,
    id: String,
    type: String,
    price: Number,
    description: String,
    image: String
})

const image = ref(props.image)

if (!props.image) {
  image.value = 'https://drive.miyago9267.com/d/file/img/mygo/%E5%8F%AF%E4%BB%A5%E5%90%83%E4%BA%86%E5%97%8E.jpg'
}

onMounted(() => {
  const storeQuantity = cartStore.getQuantity(props.id)
  quantity.value = storeQuantity; // 初始化 quantity
});


watch(
  () => quantity.value,  // 作為 source 的數據源
  (newValue) => {
    cartStore.updateQuantity(props, newValue)
  }
)

emitter.on('event',(data)=>{
  if(data === 'clearCart'){
    quantity.value = 0
  }
})
</script>