<template>
<div class="overflow-x-auto overflow-y-auto text-zinc-100">
  <MazTable
    size="sm"
    v-model="selectedIds"
    v-model:search-query="searchQuery"
    v-model:page="page"
    v-model:page-size="pageSize"
    search
    pagination
    color="secondary"
    sortable
    selectable
    hoverable
    background-even
    selected-key="id"
    :headers="[
      { label:'#', key: 'number', align: 'center', width: '2rem' },
      { label:'商品', key: 'text' },
      { label: '總數', key: 'quantity', align: 'center', width: '2rem'  },
      { label: '價格', key: 'price', width: '2rem' },
    ]"
    :rows="data"
  >
    <template #cell-index="{ value }">
      <span>{{value}}</span>
    </template>
    <template #cell-name="{ value }">
      <div>
        <span>{{value}}</span>
      </div>
    </template>

    <template #actions>
      <MazBtn fab size="xs" color="danger" icon="trash" />
    </template>
  </MazTable>
</div>
</template>

<script setup>
  const props = defineProps({
    data: Object
  })
</script>