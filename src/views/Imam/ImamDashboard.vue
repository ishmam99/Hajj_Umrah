<template>
  <DefaultLayout>
    <div class="">
      <div class="pt-[80px] flex justify-between">
        <MembarSidebar />
        <router-view />
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import MembarSidebar from '/src/views/Member/MembarSidevar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import MembarProfile from '@/views/Member/Profile/MembarProfile.vue'
</script>
