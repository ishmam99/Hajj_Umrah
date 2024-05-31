<template>
  <DefaultLayout>
    <div class="">
      <div class="pt-[80px] flex flex-row-reverse justify-between">
        <!-- <FinanceProfile/> -->
        <router-view class="w-[calc(100%-350px)]" />
        <FinanceSidebar />
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
</script>
