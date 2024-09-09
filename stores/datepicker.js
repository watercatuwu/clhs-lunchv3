export const useDateStore = defineStore('datepicker', {
    state: () => ({
      value: new Date().toISOString(),
    }),
    persist: {
        storage: persistedState.sessionStorage,
    }
})