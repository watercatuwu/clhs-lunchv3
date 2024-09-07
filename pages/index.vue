<template>
<div class="flex-1 flex items-center justify-center">
    <div class="container mx-auto">
        <div class="flex flex-col lg:mx-0 mx-4">
            <h1 class="text-6xl text-zinc-100 text-left break-words">CLHS <span>Lunch</span> <span class="text-violet-400">v3</span></h1>
            <p class="text-xl text-zinc-400 text-left">歡迎使用CLHS午餐訂餐系統 v3.0</p>
            <div class="flex my-4">
                <Loginbtn />
                <NuxtLink to="/tutorial">
                    <MazBtn color="info" class="max-w-xs mx-2">
                        <template #left-icon>
                            <Icon name="material-symbols:book-2" />
                        </template>
                        使用教學
                    </MazBtn>
                </NuxtLink>
            </div>
        </div>
    </div>
</div>
</template>
