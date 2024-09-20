<template>
    <div class="pb-24">
        <div class="container mx-auto md:px-0 px-2 flex flex-col gap-4 overflow-y-auto">
            <MazCard>
              <div class="grid grid-cols-1 gap-4">
                <div class="p-4">
                  <div class="flex items-center gap-2 text-2xl text-zinc-100">
                    <Icon name="material-symbols:group-rounded" />
                    <h3>儲值人數</h3>
                  </div>
                  <p class="text-5xl text-zinc-100">777</p>
                </div>
                <div class="p-4">
                  <div class="flex items-center gap-2 text-2xl text-zinc-100">
                    <Icon name="material-symbols:account-balance-rounded" />
                    <h3>在庫金額</h3>
                  </div>
                  <p class="text-5xl text-zinc-100">$777</p>
                </div>
              </div>
            </MazCard>
        </div>
    </div>
</template>

<script setup>
</script>