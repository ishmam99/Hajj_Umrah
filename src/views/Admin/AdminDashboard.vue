<template>
  <DefaultLayout>
    <div class="">
      <div class="pt-[80px] flex flex-row-reverse justify-between">
        <AdminProfile />
        <AdminSidebar />
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import AdminSidebar from '/src/views/Admin/AdminSidevar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AdminProfile from '/src/views/Admin/Profile/AdminProfile.vue'
</script>
