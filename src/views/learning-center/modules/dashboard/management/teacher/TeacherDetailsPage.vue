<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import axios from 'axios'
import { useCommonStore } from '@/stores/common'
import { useRouter } from 'vue-router'
import Modal from '@/components/modal/ModalComponent.vue'
// import Button from 'primevue/button';
// import Table from '@/components/tables/RowTable'

const router = useRouter()
const commonStore = useCommonStore()
const userEditDataApi = 'user/edit-profile/'
const userUpdateApi = 'update-teacher/'
const getAllCourseApi = 'get-all-course'
const getCourseDetailsApi = 'course-detail/'
const assignCourseApi = 'assign-teacher'
const getCourseByTeacherApi = 'get-course-by-teacher/'
// const gerTeacherCoursesApi = 'available-teacher-slots/'

let modal = ref(false)
let data = ref([])
const swal = inject('$swal')
let allCourse = ref([])
let teacherGrade = ref(['Select a Course First'])
let courseId = ref()
let selectedGrade = ref()
let courseByTeacher = ref([])
// let getTeacherCourses = ref([])

async function getData(id) {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + userEditDataApi + id)
  // const response = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API+'get-teacher-schedule/'+id)
  data.value = resp.data.data
}

async function getTeacherGrade() {
  const resp = await axios.get(
    import.meta.env.VITE_ELEARNING_BASE_API + getCourseDetailsApi + courseId.value
  )
  teacherGrade.value = resp.data
  console.log(teacherGrade.value)
}

async function getAllCourse() {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + getAllCourseApi)
  allCourse.value = resp.data
}

async function assignCourse() {
  const resp = await axios.post(import.meta.env.VITE_ELEARNING_BASE_API + assignCourseApi, {
    teacher_id: router.currentRoute.value.params.id,
    course_id: courseId.value,
    course_details_id: selectedGrade.value.id
  })

  modal.value = false
  if (resp.data.success == true) {
    swal.fire({
      position: 'top-end',
      icon: 'success',
      title: resp.data.message,
      showConfirmButton: false,
      timer: 1500
    })
    getCourseByTeacher()
  } else {
    swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Something went wrong',
      showConfirmButton: false,
      timer: 1500
    })
  }
}

async function getCourseByTeacher() {
  const resp = await axios.get(
    import.meta.env.VITE_ELEARNING_BASE_API +
      getCourseByTeacherApi +
      router.currentRoute.value.params.id
  )
  courseByTeacher.value = resp.data
}

// async function getCourseByTeacher() {
//   const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API+gerTeacherCoursesApi+"/"+router.currentRoute.value.params.id)
//   getTeacherCourses.value = resp.data
// }

async function updateUser() {
  try {
    await axios.post(
      import.meta.env.VITE_ELEARNING_BASE_API + userUpdateApi + router.currentRoute.value.params.id,
      data.value
    )
    swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Teacher updated successfully',
      showConfirmButton: false,
      timer: 1500
    })
  } catch (e) {
    swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Something went wrong',
      showConfirmButton: false,
      timer: 1500
    })
  }
}

function openModal() {
  modal.value = true
}

function closeModal(response) {
  modal.value = response
}

onMounted(() => {
  getData(router.currentRoute.value.params.id)
  getAllCourse()
  getCourseByTeacher()
  commonStore.loading = false
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
        <font-awesome-icon :icon="['fas', 'fa-money-check']" /> Teacher Details
      </div>

      <div class="teacher-details mt-4">
        <form class="w-full">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Name
              </label>
              <input
                disabled
                v-model="data.name"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
            </div>
            <div class="w-full md:w-1/3 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Email
              </label>
              <input
                disabled
                v-model="data.email"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
            <div class="w-full md:w-1/3 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Phone Number
              </label>
              <input
                disabled
                v-model="data.phone_no"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Address
              </label>
              <input
                v-model="data.address"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Address"
                disabled
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Country
              </label>
              <input
                v-model="data.country"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Country"
                disabled
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Meeting Link
              </label>
              <input
                v-model="data.meeting_link"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder=""
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Download Resume
              </label>
              <a
                :href="
                  'https://learningcenter.islamicdigitallane.com/documents/resume/' + data.resume
                "
                :download="data.name"
                class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 ml-2"
                >Download</a
              >
              <!-- <Button type="button" label="Resume" icon="pi pi-users" outlined download /> -->
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Status Update
              </label>
              <div class="relative">
                <select
                  v-model="data.user_status_id"
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option value="1">Application Submitted</option>
                  <option value="2">Application in Review</option>
                  <option value="3">Interview Scheduled</option>
                  <option value="4">Job Offered</option>
                  <option value="8">Hired</option>
                  <option value="9">Onboarding</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Teacher Status
              </label>
              <div class="relative">
                <select
                  v-model="data.status"
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option value="1">Active</option>
                  <option value="2">Inactive</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <h3 class="font-bold">
            Assign Course
            <button
              type="button"
              @click="openModal"
              class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 ml-2"
            >
              Add
            </button>
          </h3>

          <table class="mt-4">
            <tr>
              <th>Course Name</th>
              <th>Course section</th>
              <th>Teacher Grade</th>
            </tr>
            <tr v-for="course in courseByTeacher" :key="course">
              <td>{{ course.title }}</td>
              <td>{{ course.section_id }}</td>
              <td>{{ course.teacher_grade }}</td>
            </tr>
          </table>

          <button
            @click="$router.go(-1)"
            type="button"
            class="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800"
          >
            Back
          </button>

          <button
            @click="updateUser"
            type="button"
            class="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 ml-2"
          >
            Update Teacher
          </button>
        </form>

        <Modal v-if="modal" :width="'width: 550px'" @modal-close="closeModal">
          <div class="text-1xl font-bold text-center">Asign Course</div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-full px-3 mb-6 md:mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Course List
              </label>
              <div class="relative">
                <select
                  @change="getTeacherGrade"
                  v-model="courseId"
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option v-for="course in allCourse" :key="course" :value="course.id">
                    {{ course.title }}
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-full px-3 mb-6 md:mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Course Section
              </label>
              <div class="relative">
                <select
                  v-model="selectedGrade"
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option v-for="grade in teacherGrade" :key="grade" :value="grade">
                    {{ grade.section_id }}
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-full px-3 mb-6 md:mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Teacher Grade
              </label>
              <div class="relative">
                <select
                  v-model="selectedGrade"
                  disabled
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option v-for="grade in teacherGrade" :key="grade" :value="grade">
                    {{ grade.teacher_grade }}
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-full px-3 mb-6 md:mb-6">
              <button
                type="button"
                @click="assignCourse()"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Table */
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

/* Table ends */
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
  justify-content: flex-start;
  gap: 10px;
  font-size: 20px;
  font-weight: bold;
}

input,
select {
  border: 1px solid #e5e7eb !important;
}
</style>
