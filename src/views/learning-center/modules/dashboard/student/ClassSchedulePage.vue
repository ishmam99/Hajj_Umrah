<script setup>
  import { onMounted, onUnmounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { useCourseStore } from '@/stores/learning-center/course'
  import { useCommonStore } from '@/stores/common'
  import JoinClassComponent from "@/components/card/JoinClassStdComp.vue"
  
  const router = useRouter()
  const courseStore = useCourseStore()
  const commonStore = useCommonStore()
  
  // Make an API request to fetch data based on user ID and date

  async function fetchData() {
    await courseStore.getScheduleByEnrollment(router.currentRoute.value.params.id)
    commonStore.loading = false
  }
  
  // Fetch data when the component is mounted
  onMounted(() => {
    fetchData()
  })

  onUnmounted(() => {
    commonStore.loading = true
  })
</script>

<template>
<div class="dashboard-content p-5 h-auto md:h-3/4">
    <JoinClassComponent
        :courseName="courseStore.courseDetails"
        :data="courseStore.scheduleList"
    />
</div>
</template>

<style scoped>
.dashboard-content {
  height: 90vh;
  overflow-x: auto;
}
</style>

