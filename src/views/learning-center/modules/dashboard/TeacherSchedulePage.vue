<template>
  <div class="p-4" v-if="courseDetails != []">
    <h2 class="text-2xl font-semibold mb-4">
      Teacher Schedule for Course
      <strong class="text-cyan-500"> {{ courseDetails.title }}</strong>
    </h2>
    <p v-html="courseDetails.description"></p>
    <div class="bg-white p-4 rounded-lg shadow-md">
      <div
        v-for="(course, index) in courses"
        :key="index"
        class="mb-4 sm:mb-2 md:mb-4 lg:mb-8"
      >
        <CourseInfoComponent :course="course"></CourseInfoComponent>
      </div>
    </div>
  </div>
  <div v-else class="p-4"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import CourseInfoComponent from '@/components/card/CourseInfoComponent.vue'
import { useCommonStore } from '@/stores/common'

const commonStore = useCommonStore()
const router = useRouter()
let courseId = ref(null) // Initialize courseId to null
let teacherId = ref(null)
let courses = ref([])
let courseDetails = ref([])
let baseURL = ref(import.meta.env.VITE_ELEARNING_BASE_API)

async function fetchdata() {
  try {
    const response = await axios.get(
      `${baseURL.value}all-ongoing-course-students/${courseId.value}/${teacherId.value}`
    )

    // Make an API request using axios

    // You don't need to check response.ok when using axios

    // Instead of response.json(), axios automatically parses JSON responses
    courses.value = response.data // Update the courses array with the fetched data
  } catch (error) {
    console.error('API request error: ', error)
  }

  commonStore.loading = false
}

async function fetchCourseData() {
  try {
    const response = await axios.get(
      `${baseURL.value}get-course/${courseId.value}`
    )

    // Make an API request using axios
    console.log('response  course details api  ', response.data[0])

    // You don't need to check response.ok when using axios

    // Instead of response.json(), axios automatically parses JSON responses
    courseDetails.value = response.data[0] // Update the courses array with the fetched data
  } catch (error) {
    console.error('API request error course list: ', error)
  }
}
watch(
  () => router.currentRoute.value.params.id,
  (newId, oldId) => {
    if (newId !== oldId) {
      courseId.value = newId
      teacherId.value = newId
      fetchdata()
      fetchCourseData()
    }
  }
)
onMounted(() => {
  console.log(router.currentRoute.value.params.courseId, 'ooooooooooo')
  courseId.value = router.currentRoute.value.params.courseId
  teacherId.value = router.currentRoute.value.params.teacherId

  fetchdata()
  fetchCourseData()
})

onUnmounted(() => {
  commonStore.loading = true
})
</script>
