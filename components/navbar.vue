<template>
    <nav class="p-4 mb-4 sticky top-0 z-50 bg-zinc-900">
        <div class="container mx-auto flex justify-between items-center">
            <!-- 左側區域 -->
            <div class="flex items-center space-x-4">
                <a href="#" class="text-xl font-bold text-zinc-100">CLHS Lunch v3</a>
            </div>
            <!-- 右側區域 -->
            <div>
                <MazDropdown
                class="text-red-500"
                :items="dropdowns"
                trigger="click"
                position="bottom right"
                >
                <template #element>
                    <MazAvatar
                    clickable
                    no-clickable-icon
                    src="https://api.dicebear.com/9.x/identicon/svg"
                    tabindex="-1"
                    />
                </template>
                </MazDropdown>
            </div>
        </div>
    </nav>
</template>

<script setup>
const dropdowns = [
    {
      label: '登出',
      action: () => toast.success('CLICKED'),
    }
]
</script>