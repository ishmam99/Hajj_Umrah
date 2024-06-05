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

import { useAdminStore } from '/src/stores/adminStore.ts'

const store = useAdminStore()
</script>
