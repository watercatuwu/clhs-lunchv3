<template>
<div class="flex flex-col gap-4">
  <div class="overflow-x-auto overflow-y-auto text-zinc-100">
    <MazTable
      size="lg"
      v-model="selectedIds"
      v-model:page-size="pageSize"
      search
      pagination
      color="secondary"
      sortable
      selectable
      background-even
      selected-key="id"
      :headers="[
        { label:'#', key: 'number' },
        { label:'餘額', key: 'balance' },
      ]"
      :rows="data"
    >
      <template #cell-index="{ value }">
        <span>{{value}}</span>
      </template>
      <template #cell-name="{ value }">
        <div>
          <span class="break-normal">{{value}}</span>
        </div>
      </template>
    </MazTable>
  </div>
</div>
</template>

<script setup>
  const props = defineProps({
    data: Object
  })

  const selectedIds = ref([])
  const pageSize = ref(10)
</script>