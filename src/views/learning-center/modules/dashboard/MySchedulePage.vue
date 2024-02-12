<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useCommonStore } from '@/stores/common'

const commonStore = useCommonStore()
const user = JSON.parse(localStorage.getItem('user'))

onMounted(() => {
    commonStore.loading = false
})

onUnmounted(() => {
    commonStore.loading = true 
})
</script>

<template>
    <div class="dashboard-content">
        <img v-if="user.role_id == 3" src="@/assets/images/dashboard/teacher-schedule.png" alt="">
        <img v-if="user.role_id == 4" src="@/assets/images/dashboard/student-schedule.png" alt="">
        <div class="dashboard-wrapper">
            
        </div>
    </div>
</template>

<style scoped>
.dashboard-wrapper {
    padding: 20px;
}
</style>