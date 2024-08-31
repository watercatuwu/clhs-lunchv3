<template>
<div class="flex-1">
    <div class="container mx-auto flex flex-col justify-center">
        <div class="flex-1 flex flex-col mx-auto justify-center">
            <h1 class="text-4xl font-bold text-zinc-100 text-center">CLHS Lunch <span class="text-violet-400">v3</span></h1>
            <p class="text-zinc-400 text-center">歡迎使用CLHS午餐訂餐系統 v3.0</p>
            <div class="flex my-4 mx-auto">
                <MazBtn class="max-w-xs mx-2">
                    <template #left-icon>
                        <Icon name="material-symbols:login" />
                    </template>
                    登入
                </MazBtn>
                <MazBtn color="info" class="max-w-xs mx-2">
                    <template #left-icon>
                        <Icon name="material-symbols:book-2" />
                    </template>
                    使用教學
                </MazBtn>
            </div>
        </div>
    </div>
</div>
</template>