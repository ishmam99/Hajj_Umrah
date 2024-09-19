<template>
  <DefaultLayout>
    <div class="">
      <div class="pt-[80px] flex justify-between">
        <AgentSidebar/>
        <router-view />
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import AgentSidebar from '../ImamManagement/ImamSidebar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import MembarProfile from '@/views/Member/Profile/MembarProfile.vue'
</script>
