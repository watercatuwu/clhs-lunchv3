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
                :items="dropdowns"
                trigger="click"
                position="bottom right"
                >
                <template #element>
                    <MazAvatar
                    clickable
                    no-clickable-icon
                    src="https://api.dicebear.com/7.x/big-smile/svg?backgroundColor=1d90ff&scale=80"
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
      label: 'Action',
      action: () => toast.success('CLICKED'),
      additionnalData: 'https://loremflickr.com/240/200',
    },
    {
      label: 'Link (href)',
      href: 'https://www.google.com',
      target: '_blank',
      additionnalData: 'https://loremflickr.com/340/300',
    },
    {
      label: 'Router Link',
      to: { name: 'index' },
      additionnalData: 'https://loremflickr.com/440/400',
    },
]
</script>