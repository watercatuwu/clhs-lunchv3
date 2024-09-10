<template>
  <Transition name="slide-up">
    <div v-if="cartStore.items.length > 0" class="fixed bottom-0 left-0 right-0 mb-16 z-40 md:w-1/3 w-full px-4 mx-auto">
      <MazCard class="w-full">
        <template #content>
          <div class="flex flex-row justify-between items-center">
            <div class="flex flex-row items-center gap-2">
              <MazBadge class="w-10 h-10" size="1.25rem" rounded-size="full">{{ cartStore.totalItems }}</MazBadge>
              <p class="text-zinc-400 text-lg">總價: {{ cartStore.totalPrice }} 元</p>
            </div>
            <div class="flex items-center gap-2">
              <MazBtn color="danger" fab @click="cleanCart">
                <template #left-icon>
                  <Icon name="material-symbols:shopping-cart-off-rounded" size="1.25rem" />
                </template>
              </MazBtn>
              <NuxtLink to="/app/checkout">
                <MazBtn color="success" fab>
                  <template #left-icon>
                    <Icon name="material-symbols:shopping-cart-checkout-rounded" size="1.25rem" />
                  </template>
                </MazBtn>
              </NuxtLink>
            </div>
          </div>
        </template>
      </MazCard>
    </div>
  </Transition>
</template>

<script setup>
import { useToast } from 'maz-ui'

const toast = useToast()
const cartStore = useCartStore()
function cleanCart(){
  toast.success('已清空購物車')
  cartStore.clearCart()
}
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.75s ease-in-out;
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