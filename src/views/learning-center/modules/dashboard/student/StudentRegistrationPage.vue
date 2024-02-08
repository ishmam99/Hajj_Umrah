<template>
    <div class="dashboard-content">
      <img src="@/assets/images/dashboard/my-reg.png" alt="">
        <div class="dashboard-wrapper">
          <p class="text-3xl text-center font-bold">Congratulations!</p>
          <h1 class="text-1xl text-center font-bold mt-2">Your registration is successful. You can now enroll for a course.</h1>
        </div>     
    </div>
  </template>
  
  <style scoped>
  .dashboard-wrapper {
    padding: 20px;
  }
  </style>
  <script setup>
  import { onMounted, onUnmounted } from "vue";
  import { useCommonStore } from "@/stores/common";
  
  const commonStore = useCommonStore()
  
  onMounted(() => {
    commonStore.loading = false;
  })
  
  onUnmounted(() => {
    commonStore.loading = true;
  })
  </script>
  