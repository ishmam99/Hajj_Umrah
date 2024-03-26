<template>
    <DefaultLayout>
        <div class="">
            <div class="pt-[80px] flex flex-row-reverse justify-between">
                <!-- <FinanceProfile/> -->
                <router-view/>
                <FinanceSidebar/>
            </div>
        </div>
    </DefaultLayout>

</template>
<script setup>
import FinanceSidebar from '/src/views/Finance/FinanceSidevar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FinanceProfile from '/src/views/Finance/Profile/FinanceProfile.vue'

import { useAccountStore } from '/src/stores/accountStore.ts'
import { onMounted } from 'vue'

const store = useAccountStore()

// Account ledger list

// const getAccountLedger = async () => {
//   try {
//     const { data } = await api().get('account-ledger-list')
//     console.log(data , 'acoount ledger get')
//     store.accountLedger = data
//   }catch (error) {
//     console.log(error , 'acoount ledger get')
//   }
// }

// // Payroll list

// const getPayroll = async () => {
//   try {
//     const { data } = await api().get('payroll-list')
//     console.log(data , 'payroll get')
//     store.payroll = data
//   }catch (error) {
//     console.log(error , 'payroll get')
//   }
// }

// // project expense list
// const getProjectExpenseList = async () => {
//   try {
//     const { data } = await api().get('project-expense-list')
//     console.log(data , 'preject expense get')
//     store.projectExpenseList = data
//   }catch (error) {
//     console.log(error , 'preject expense get')
//   }
// }



// // operation expense list
// const getOpeationExpenseList = async () => {
//   try {
//     const { data } = await api().get('operation-expense-list')
//     console.log(data , 'operation expense get')
//     store.opeationExpenseList = data
//   }catch (error) {
//     console.log(error , 'operation expense get')
//   }
// }

// const getDonationList = async () => {
//   try {
//     const { data } = await api().get('donation-method-list')
//     console.log(data , 'donation list get')
//     store.donationList = data
//   }catch (error) {
//     console.log(error , 'donation list get')
//   }
// }


// onMounted(async () => {
//     getAccountLedger()
//     getPayroll()
//     getProjectExpenseList()
//     getOpeationExpenseList()
//     getDonationList()
// })
</script>
