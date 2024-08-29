<template>
    <header class="bg-red-500 w-full py-2 text-center">
        <div class="container mx-auto">
            <p class="flex justify-center items-center text-black gap-2">
                <Icon name="material-symbols:warning-rounded" size="1.5rem" />
                {{ msg }}
            </p>
        </div>
    </header>
</template>

<script setup>
const msg = "測試公告訊息"
</script>