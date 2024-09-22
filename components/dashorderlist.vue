<template>
<div class="flex flex-col gap-4">
  <MazCard class="w-full">
    <div class="flex justify-between">
      <p class="text-zinc-100 text-lg">已選取 {{ selectedIds ? selectedIds.length : 0 }} 個</p>
    </div>
    <p class="text-zinc-100 text-lg">餐點數 {{ computedSelected ? computedSelected.itemQty : 0 }} 個</p>
    <p class="text-zinc-100 text-lg">總金額 {{ computedSelected ? computedSelected.orderTotal : 0 }} 元</p>
  </MazCard>
  <div class="flex lg:flex-row lg:w-48 flex-col w-full gap-2">
    <MazBtn color="success" @click="onCheckout">確認選取的訂單</MazBtn>
    <MazBtn color="danger" @click="onCheckout">刪除選取的訂單</MazBtn>
  </div>
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
        { label:'#', key: 'number', align: 'center', width: '2rem' },
        { label:'狀態', key: 'checked', align: 'left', width: '2rem' },
        { label: '付款方式', key: 'payment_method', align: 'left', width: '2rem' },
        { label: '總數', key: 'quantity', align: 'right', width: '2rem'  },
        { label: '價格', key: 'price', width: '2rem', align: 'right', width: '2rem' },
        { label:'商品', key: 'text' },
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
      <template #cell-checked="{ value }">
        <MazBadge :color="value ? 'success' : 'danger'">{{ value ? '已付款' : '未付款' }}</MazBadge>
      </template>
      <template #cell-payment_method="{ value }">
        <MazBadge :color="value === 'cash' ? 'primary' : 'secondary'">{{ value === 'cash' ? '現金' : '線上錢包' }}</MazBadge>
      </template>
      <template #select="{ row, selected }">
        <MazCheckbox
          size="xs"
          :disabled="row.checked"
          :checked="selected"
          @change="handlechange(selected, row.id)"
          @click="selected = !selected"
        />
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
  const computedSelected = computed(() => {
    if (selectedIds.value){
      let selectedList = []
      selectedIds.value.forEach(element => {
        const selected = props.data.find(order => order.id === element)
        selectedList.push(selected)
      });
      const selectedInfo = {
        itemQty: selectedList.reduce((total, order) => total + order.quantity, 0),
        orderTotal : selectedList.reduce((total, order) => total + order.price, 0)
      }
      return selectedInfo
    } else {
      return null
    }
  })

  watch(()=> selectedIds.value, () => {
    console.log(computedSelected.value)
  })

  const handlechange = (selected, id) => {
    if (selected){
      selectedIds.value.push(id)
    } else {
      const index = selectedIds.value.indexOf(id)
      selectedIds.value.splice(index, 1)
    }
  }
</script>