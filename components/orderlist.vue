<template>
    <div class="flex flex-col gap-2">
        <MazCard v-for="i in orders.data" class="w-full space-y-2">
            <h3 class="text-xl text-zinc-100">{{ DateTime.fromISO(i.date).setLocale('zh-TW').toFormat('MM-dd cccc') }}</h3>
            <h3 class="text-lg text-zinc-400">送出時間:{{ DateTime.fromISO(i.created_at).setLocale('zh-TW').toFormat('MM-dd cccc HH:mm:ss ') }}</h3>
            <p class="text-md text-zinc-400">品項</p>
            <p v-for="j in i.items" class="text-md text-zinc-400">{{j.title}}x{{j.quantity}}</p>
        </MazCard>
    </div>
</template>
<script setup>
import { DateTime } from 'luxon'
const user = useSupabaseUser()
const { data: orders } = await useFetch(`/api/order/${user.value.id}`)
console.log(orders.value)
</script>