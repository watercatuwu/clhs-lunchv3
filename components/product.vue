<template>
    <MazCard
      :images="[props.image]"
      :gallery-height="200"
      zoom
    >
      <template #title>
        <h3 style="margin: 0">
            {{ props.title }}
        </h3>
      </template>
      <template #subtitle>
        <span>
            NT ${{ props.price }}
        </span>
      </template>
      <template #content>
        <p class="maz-text-muted" style="margin: 0; margin-top: 20px">
           {{ props.description }}
        </p>
      </template>
      <template #footer>
        <p class="text-zinc-400 text-left">數量</p>
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
const props = defineProps({
    title: String,
    id: String,
    price: Number,
    description: String,
    image: String
})


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