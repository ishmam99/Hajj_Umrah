<template>
  <div class="container mx-auto p-4">
    <div class="bg-white rounded-lg shadow-lg p-4 mb-4">
      <h2 class="text-2xl font-semibold text-center">
        List of All Courses
        <p class="text-green-700 font-bold">{{ user_name }}</p>
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Example course cards -->
      <CourseCardTeacherComponent
        v-for="course in courses"
        :key="course.course_id"
        :id="course.course_id"
        :course-name="course.course_name"
        :program-name="course.program_name"
        :cover-image="course.cover_image"
      ></CourseCardTeacherComponent>
    </div>
  </div>
</template>

<script setup>
import CourseCardTeacherComponent from '@/components/card/CourseCardTeacherComponent.vue'
import axios from 'axios'
import { ref, onMounted, onUnmounted } from 'vue'
import { useCommonStore } from '@/stores/common'

const commonStore = useCommonStore()
let user_id = ref(
  localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).id
    : null
)
let user_name = ref(
  localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).name
    : null
)
let courses = ref([])
let baseURL = ref(import.meta.env.VITE_ELEARNING_BASE_API)

async function fetchdata() {
  try {
    const response = await axios.get(
      `${baseURL.value}all-ongoing-course/${user_id.value}`
    )

    // Make an API request using axios
    console.log(user_id)
    console.log(user_id.value)

    console.log('response ongoing course', response)

    // You don't need to check response.ok when using axios

    // Instead of response.json(), axios automatically parses JSON responses
    courses.value = response.data // Update the courses array with the fetched data
  } catch (error) {
    console.error('API request error: ', error)
  }

  commonStore.loading = false
}

onMounted(() => {
  fetchdata()
})

onUnmounted(() => {
  commonStore.loading = true
})
</script>
