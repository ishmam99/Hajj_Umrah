<template>
  <div class="w-full">
    <img src="@/assets/images/dashboard/teacher-class.png" alt="" class="w-full"/>
    <div class="p-3">
      <h2 style="font-size: 25px; font-weight: bold">Today's Classes</h2>
      <template v-if="studentData">
        <div v-for="(classData, index) in studentData" :key="index">
          <JoinClassComponent
            :courseName="classData.course[0].title"
            :studentName="classData.student_name"
            :date="classData.date"
            :startTime="classData.time_slot[0]['start_time']"
            :endTime="classData.time_slot[0]['end_time']"
            :joinLink="classData.meet_link"
          />
        </div>
      </template>
      <template v-else> No Data available, please contact with an admin for instruction. </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCommonStore } from '@/stores/common'
// import { useRouter } from 'vue-router'
import JoinClassComponent from '@/components/card/JoinClassComponent.vue'
import axios from 'axios'

const commonStore = useCommonStore()
const baseUrl = import.meta.env.VITE_ELEARNING_BASE_API
// const router = useRouter()
const user_id = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).id : null

const studentData = ref(null)
// Get the current date in the 'YYYY-MM-DD' format

const currentDate = new Date()
const year = currentDate.toLocaleString('default', { year: 'numeric' })
const month = currentDate.toLocaleString('default', {
  month: '2-digit'
})
const day = currentDate.toLocaleString('default', { day: '2-digit' })
const date = ref([year, month, day].join('-'))
console.log(date)

const fetchData = async () => {
  try {
    console.log(user_id, date.value)
    const response = await axios.get(`${baseUrl}get-todays-class/${user_id}/${date.value}`)
    studentData.value = response.data
    commonStore.loading = false
    console.log(' join class data teacher', response.data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

</script>




