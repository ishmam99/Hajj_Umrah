<template>
  <DefaultLayout>
    <div class="">
      <div class="pt-[80px] flex">
        <ImamSidebar />
        <router-view />
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import ImamSidebar from '@/views/Imam/ImamSidebar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import MembarProfile from '@/views/Member/Profile/MembarProfile.vue'
</script>
