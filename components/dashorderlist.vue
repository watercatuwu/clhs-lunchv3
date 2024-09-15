<template>
<div class="overflow-x-auto overflow-y-auto">
    <MazTable
      class="text-zinc-100"
      size="md"
      color="secondary"
      background-even
      :headers="[
        { label:'#', key: 'number', align: 'center', width: '2rem' },
        { label:'Items', key: 'items' },
        { label: 'Total', key: 'total' },
        { label: 'Checked', key: 'checked', align: 'center' },
        { label: 'Action', key: 'action', align: 'center' },
      ]"
    >
    <MazTableRow v-for="i in orders.data">
        <MazTableCell>
          {{ i.number }}
        </MazTableCell>
        <MazTableCell>
          {{ itemsToText(i.items) }}
        </MazTableCell>
        <MazTableCell>
          {{ totalPrice(i.items) - discount(i.items) }}
        </MazTableCell>
        <MazTableCell class="w-8">
            <div class="flex justify-center">
                <MazCheckbox v-model="i.checked" />
            </div>
        </MazTableCell>
        <MazTableCell class="w-8">
            <div class="flex justify-center">
                <MazBtn size="xs" color="danger">
                <Icon name="material-symbols:delete-outline" size="1.25rem" />
                </MazBtn>
            </div>
        </MazTableCell>
      </MazTableRow>
    </MazTable>
</div>
</template>

<script setup>
  const user = useSupabaseUser()
  const supabase = useSupabaseClient()
  const { data: pubUser } = await supabase.from('users').select('*').eq('id', user.value.id).single()
  const { data: orders } = await useFetch(`/api/class/order/${pubUser.class}`)
  console.log(orders.value)


  function totalPrice(items) {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }
  function discount(items) {
    let breakfastQty = 0;
    let drinkQty = 0;
    // 計算早餐及飲料數量
    items.forEach(item => {
        if (item.type === 'breakfast') {
            breakfastQty += item.quantity;
        }
        if (item.type === 'drink') {
            drinkQty += item.quantity;
        }
    });

    // 計算折扣
    const bundleDiscount = 5; // 折扣金額
    if (breakfastQty>0 && drinkQty>0) {
        if (breakfastQty < drinkQty){
            return bundleDiscount * breakfastQty;
        } else {
            return bundleDiscount * drinkQty;
        }
    }
    return 0;
}

function itemsToText(items) {
    return items.map(item => `${item.title} x ${item.quantity}`).join(',');
}
</script>