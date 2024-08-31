import emitter from "~/composables/bus"

export const useCartStore = defineStore('cart', {
    state: () => ({
      items: [], // 購物車中的商品列表
    }),
    getters: {
      // 計算購物車中商品的總數
      totalItems(state) {
        return state.items.reduce((total, item) => total + item.quantity, 0)
      },
      // 計算購物車中所有商品的總價
      totalPrice(state) {
        return state.items.reduce((total, item) => total + item.price * item.quantity, 0)
      },
      // 取得單個商品的數量
      getQuantity(state) {
        return (id) => {
          const item = state.items.find(item => item.id === id)
          return item ? item.quantity : 0
        }
      },
    },
    actions: {
      // 更新購物車中的商品
      updateQuantity(product, quantity) {
        const item = this.items.find(item => item.id === product.id)
        if (item) {
            if (quantity > 0) {
              // 更新商品數量
              item.quantity = quantity
            } else {
              // 如果數量為 0 或更低，則從購物車中移除商品
              this.items = this.items.filter(item => item.id !== product.id)
            }
          } else if (quantity > 0) {
            // 如果商品不在購物車中，且數量大於 0，則新增商品
            this.items.push({ ...product, quantity })
          }
      },
      // 清空購物車
      clearCart() {
        emitter.emit('event', 'clearCart')
        this.items = []
      },
    },
  persist: {
    storage: persistedState.sessionStorage,
  }
})