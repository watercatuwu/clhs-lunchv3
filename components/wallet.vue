<template>
    <div class="flex flex-col gap-4">
        <h1 class="text-2xl font-bold text-white flex items-center gap-2">
            <Icon name="material-symbols:account-balance-wallet" size="1.5rem" />
            我的錢包
        </h1>
        <MazCard>
            <div class="flex justify-between items-center">
                <p class="text-xl text-zinc-100">餘額</p>
                <p class="text-xl text-white">${{ balenceValue }}</p>
            </div>
            <template #footer>
                <div class="flex gap-2 justify-end mb-4">
                    <MazInputPrice
                        v-model="priceValue"
                        label="輸入金額"
                        currency="NTD"
                        locale="zh-TW"
                        :min="100"
                        :max="1000"
                        @formatted="formattedPrice = $event"
                    />
                    <MazBtn @click="deposit">
                        儲值
                    </MazBtn>
                </div>
                <p class="text-zinc-400">*最低儲值 NT$100，最高儲值 NT$1000。</p>
                <p class="text-zinc-400">*請找事務股長付款並確認金額無誤。</p>
            </template>
        </MazCard>
    </div>
</template>

<script setup>
import { useToast } from 'maz-ui'
const toast = useToast()

const priceValue = ref(0)
const balenceValue = ref(0)
</script>