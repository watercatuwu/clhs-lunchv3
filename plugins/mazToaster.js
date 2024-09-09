import { installToaster } from 'maz-ui'

export default defineNuxtPlugin((nuxtApp) => {
  const toasterOptions = {
    position: 'top',
    timeout: 1500,
    persistent: false,
  }

  nuxtApp.vueApp.use(installToaster, toasterOptions)
})