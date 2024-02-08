<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import axios from 'axios'
import { useCommonStore } from '@/stores/common'
import { useRouter } from 'vue-router'

const router = useRouter()
const commonStore = useCommonStore()
const userEditDataApi = 'user/edit-profile/'

let data = ref([])
// let studentData = ref([]);
const swal = inject('$swal')
let user = ref({})
let theUser = JSON.parse(localStorage.getItem('user'))
// const selectedStudentId = ref(null)
// const selectedTeacherId = ref(null)
// const selectedCourseId = ref(null)
// let teacherData = ref([]);
// let courseData = ref([]);
let note = ref('')

let teacherName = ref('')
let studentName = ref('')
let courseName = ref('')

async function userInfo() {
  user.value = JSON.parse(localStorage.getItem('user'))
  commonStore.loading = false
  return user.value.id // Return the user ID from userInfo function
}

// const filteredStudents = computed(() => {
//   return studentData.value.filter(student => student.student_info !== null);
// });
// const filteredTeachers = computed(() => {
//   return teacherData.value.filter(teacher => teacher.teacher_info !== null);
// });
//
// const filteredCourses = computed(() => {
//   return courseData.value.filter(course => course.course !== null);
// });

async function getData() {
  console.log(theUser.value)
  const resp = await axios.get(
    import.meta.env.VITE_ELEARNING_BASE_API + userEditDataApi + 85
  )
  data.value = resp.data.data
}

// async function getStudentsByAdvisor(advisorId) {
//   const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + `get-student-by-advisor/${advisorId}`)
//   // Assuming the response format is an array of student objects, modify this according to your API response structure
//   studentData.value = resp.data.data // Update studentData with the fetched student list
//   console.log('student data', studentData.value)
// }
// async function getTeachersByAdvisor(advisorId) {
//   const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + `get-teacher-by-advisor/${advisorId}`)
//   teacherData.value = resp.data.data
// }
//
// async function getCoursesByAdvisor(advisorId) {
//   const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + `get-course-by-advisor/${advisorId}`)
//   courseData.value = resp.data.data;
//   console.log('course data', courseData.value)
//
// }

async function createAdvisorSchedule() {
  const postData = {
    meeting_date: data.value.name, // Assuming data.value.name holds the meeting date
    enrollment_id: router.currentRoute.value.params.id, // Extracting enrollment ID from route parameter
    meeting_note: note.value, // Using the note value directly from the reactive property
  }

  try {
    await axios.post(
      import.meta.env.VITE_ELEARNING_BASE_API + 'create-advisor-schedule',
      postData
    )
    swal
      .fire({
        position: 'top-end',
        icon: 'success',
        title: 'Schedule created successfully',
        showConfirmButton: false,
        timer: 1500,
      })
      .then(() => {
        // Redirect to the specified route after the success message is closed
        router.push('/advisor/dashboard/schedule/list')
      })
  } catch (e) {
    swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Something went wrong',
      showConfirmButton: false,
      timer: 1500,
    })
  }
}

onMounted(() => {
  getData()
  commonStore.loading = false
  userInfo().then((userId) => {
    console.log('user_idddd', userId)
    teacherName.value = router.currentRoute.value.query.teacher || ''
    studentName.value = router.currentRoute.value.query.student || ''
    courseName.value = router.currentRoute.value.query.course || ''
  })
})

onUnmounted(() => {
  commonStore.loading = true
})
</script>

<template>
  <div class="dashboard-content">
    <!-- <img src="@/assets/images/dashboard/teacher-management/old-teacher.png" alt=""> -->
    <div class="dashboard-wrapper">
      <div class="dashboard-title">
        <font-awesome-icon :icon="['fas', 'fa-money-check']" />
        Advisor Create Schedule
      </div>

      <div class="teacher-details mt-4">
        <form class="w-full">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Date
              </label>
              <input
                v-model="data.name"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="date"
                placeholder="Jane"
              />
              <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Course
              </label>
              <div class="relative">
                <input
                  v-model="courseName"
                  id="course-name"
                  type="text"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Jane"
                  disabled
                />
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Teacher
              </label>
              <div class="relative">
                <input
                  v-model="teacherName"
                  id="teacher-name"
                  type="text"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Jane"
                  disabled
                />
              </div>
            </div>

            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Student
              </label>
              <div class="relative">
                <input
                  v-model="studentName"
                  id="student-name"
                  type="text"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Jane"
                  disabled
                />
              </div>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <label
              class="px-3 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Note
            </label>
            <textarea
              id="message"
              v-model="note"
              rows="4"
              class="mx-3 block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>

          <button
            @click="$router.go(-1)"
            type="button"
            class="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800"
          >
            Back
          </button>

          <!--          <button @click="updateUser" type="button"-->
          <!--                  class="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 ml-2">-->
          <!--            Update Student-->
          <!--          </button>-->
          <button
            @click="createAdvisorSchedule"
            type="button"
            class="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 ml-2"
          >
            Create Schedule
          </button>
        </form>
      </div>
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

.teacher-details > * {
  width: 100%;
}

@import 'datatables.net-dt';

.table-background {
  background: #f5f5f5 !important;
  box-shadow: 4px 4px 7px -2px rgba(0, 0, 0, 0.25) !important;
  border-radius: 10px !important;
  padding: 25px;
}

.editor-edit {
  cursor: pointer !important;
}

.dashboard-content {
  height: 90vh;
  overflow: auto;
}

.dashboard-title {
  display: flex;
  justify-content: start;
  gap: 10px;
  font-size: 20px;
  font-weight: bold;
}

input,
select {
  border: 1px solid #e5e7eb !important;
}
</style>
