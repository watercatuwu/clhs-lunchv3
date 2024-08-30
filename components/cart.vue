<template>
    <Transition name="slide-up">
        <div v-show="cartStore.items.length > 0" class="fixed bottom-0 left-0 right-0 mb-16 z-50 md:w-1/3 w-full px-4 mx-auto">
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
</template>

<script setup>
const cartStore = useCartStore()
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