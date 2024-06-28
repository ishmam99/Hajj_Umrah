<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Table from '@/components/TableComponent.vue'
import axios from 'axios'
import { useCommonStore } from '@/stores/common'

const commonStore = useCommonStore()

let user_id = ref(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).id : null)
let purchaseInfo = ref([])
const tableData = ref([])

async function getPurchaseInfo() {
  const resp = await axios.get(
    import.meta.env.VITE_ELEARNING_BASE_API + 'payment-history/' + user_id.value
  )
  purchaseInfo.value = resp.data.data
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

  commonStore.loading = false
}


const fields = ref(['Id', 'Transaction_date', 'Amount'])
</script>

<template>
  <div class="w-full pt-5">
    <div class="w-full flex justify-center items-center text-2xl font-semibold gap-5">
      <font-awesome-icon :icon="['fas', 'fa-money-check']" /> My Purchases
    </div>

    <!-- <Table :fields="fields" :tableData="tableData" /> -->
  </div>
</template>

<style scoped>

</style>
