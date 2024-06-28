<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Table from '@/components/TableComponent.vue'
import { useAuthStore } from '@/stores/AuthStore'

const authstre = useAuthStore()
const id = authstre?.user?.id
let purchaseInfo = ref([])
const tableData = ref([])

// async function getPurchaseInfo() {
//   const resp = await axios.get(
//     import.meta.env.VITE_ELEARNING_BASE_API + 'payment-history/' + user_id.value
//   )
//   purchaseInfo.value = resp.data.data
//   console.log(purchaseInfo.value)
//   if (purchaseInfo.value != 'List Empty') {
//     purchaseInfo.value.map((object) => {
//       tableData.value.push({
//         Id: object.id,
//         Transaction_date: object.transaction_date,
//         Amount: object.amount
//       })
//     })
//   }

//   commonStore.loading = false
// }

const getPurchaseInfo = async () => {
  try {
    const { data } = await api().get(`payment-history/${id}`)
    purchaseInfo.value = data.data
  console.log(purchaseInfo.value)
  if (purchaseInfo.value != 'List Empty') {
    purchaseInfo.value.map((object) => {
      tableData.value.push({
        Id: object.id,
        Transaction_date: object.transaction_date,
        Amount: object.amount
      })
    })
  }
  } catch (error) {
    console.log(error)
  }
}

const fields = ref(['Id', 'Transaction_date', 'Amount'])

onMounted(() => {
  getPurchaseInfo()
})
</script>

<template>
  <div class="w-full px-5 pt-2">
    <div class="w-full flex justify-center items-center text-2xl font-semibold gap-5 bg-blue-600 text-white py-3 rounded-md">
      <font-awesome-icon :icon="['fas', 'fa-money-check']" /> My Purchases
    </div>

    <Table v-if="tableData.length>0" :fields="fields" :tableData="tableData" />
    <p v-else class="text-3xl font-semibold text-center pt-5">No Pruchase yet</p>
  </div>
</template>

<style scoped>

</style>
