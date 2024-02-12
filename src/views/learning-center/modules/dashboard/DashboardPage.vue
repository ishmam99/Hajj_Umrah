<template>
    <div class="dashboard-content">
        <!-- <img v-if="user.role_id == 7" src="@/assets/images/dashboard/student-management/banner-08.png" alt=""> -->
        <div v-if="user.role_id == 2" class="teacher-management">
            <!-- <img src="@/assets/images/dashboard/dashboard.png" alt="">
            <p class="text-center font-bold text-lg mt-4">Welcome to Advisor Dashboard</p> -->
            <img src="@/assets/images/dashboard/teacher-welcome.jpg" alt="">
        </div>
        <div v-if="user.role_id == 3" class="teacher">
            <img src="@/assets/images/dashboard/teacher-welcome.jpg" alt="">
        </div>
        <div v-if="user.role_id == 4" class="student">
            <img src="@/assets/images/dashboard/student-welcome.png" alt="">
        </div>
        <div v-if="user.role_id == 7" class="student-management">
            <!-- <img src="@/assets/images/dashboard/dashboard.png" alt="">
            <p class="text-center font-bold text-lg mt-4">Welcome to Student Management Dashboard</p> -->
            <img src="@/assets/images/dashboard/teacher-welcome.jpg" alt="">
        </div>
        <div v-if="user.role_id == 6" class="teacher-management">
            <!-- <img src="@/assets/images/dashboard/dashboard.png" alt="">
            <p class="text-center font-bold text-lg mt-4">Welcome to Teacher Management Dashboard</p> -->
            <img src="@/assets/images/dashboard/teacher-welcome.jpg" alt="">
        </div>
        <div class="dashboard-wrapper">
        </div>
    </div>
</template>

<style scoped>

.dashboard-content img {
    width: 100%;
}
.dashboard-wrapper {
    padding: 20px;
}
</style>
<script setup>
import { onMounted } from 'vue'
import { useCommonStore } from '@/stores/common'

const commonStore = useCommonStore()
const user = JSON.parse(localStorage.getItem('user'))

onMounted(() => {
   commonStore.loading = false
})
</script>
