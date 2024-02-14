<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import Swal from 'sweetalert2'
import axios from 'axios'
//PrimveVue code
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

//loading effect code
import { useCommonStore } from '@/stores/common'

const commonStorage = useCommonStore()

//api end part
const areaListApi = 'area-list'
const programListApi = 'program-list/'
const courseListApi = 'course-list/'
const sectionListApi = 'get-group-course-detail/'
const teacherListApi = 'get-teacher-list-by-section/'

//area selection
let areas = ref([])
let selectedArea = ref([])

//program selection
let programs = ref([])
let selectedPrograms = ref([])

//course selection
let courses = ref([])
let selectedCourses = ref([])

//sectin selection
let sections = ref([])
let selectedSections = ref([])

//teacher selection
let teachers = ref([])
let selectedTeachers = ref([])

//batch election
let batches = ref([])

//all activities
let isProgramActive = false
let isCourseActive = false
let isSelectionActive = false
let isTeacherActive = false
let isTableActive = ref(false)

//select area
watch(selectedArea, async (newValue) => {
  if (newValue) {
    console.log('Selected area changed:', newValue)
    isProgramActive = true
    getPrograms(newValue)
  }
})

//select program
watch(selectedPrograms, async (newValue) => {
  if (newValue) {
    console.log('Selected program changed:', newValue)
    getCourses(newValue)
    isCourseActive = true
  }
})

//select course
watch(selectedCourses, async (newValue) => {
  if (newValue) {
    console.log('Selected section changed:', newValue)
    isSelectionActive = true
    getSection(newValue)
    teachers.value = []
  }
})

//select section
watch(selectedSections, async (newValue) => {
  if (newValue) {
    console.log('Selected course changed:', newValue)
    isTeacherActive = true
    getTeachers(newValue)
  }
})

//select teacher
watch(selectedTeachers, async (newValue) => {
  if (newValue) {
    console.log('Selected teacher changed:', newValue)
    getBatch(newValue)
  }
})

//get Area
async function getAreas() {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + areaListApi)
  areas.value = resp.data

  console.log('area list ', resp.data)
}

//get Program
async function getPrograms(id) {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + programListApi + id)
  programs.value = resp.data

  console.log('program list ', resp.data)
}

//get Course
async function getCourses(id) {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + courseListApi + id)
  courses.value = resp.data

  console.log('course list ', resp.data)
}

//get section
async function getSection(id) {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + sectionListApi + id)
  sections.value = resp.data.data

  console.log('course list ', resp.data.data)
}

//get Teacher
// async function getTeachers(id) {
//   const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + teacherListApi + id)
//   teachers.value = resp.data[0].teacher_details

//   console.log('Teacher list ', resp.data[0])
// }

async function getTeachers(id) {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + teacherListApi + id)

  if (resp.data && resp.data.length > 0 && resp.data[0].teacher_details) {
    teachers.value = resp.data[0].teacher_details
    console.log('Teacher list ', resp.data[0])
  } else {
    teachers.value = []
    console.log('Teacher details not available')
  }
}

//get batch
async function getBatch(id) {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + 'get-batch/' + id)
  batches.value = resp.data
  isTableActive.value = true

  console.log('Batch list ', resp.data)
}

//status change
const changeStatus = async (id, index, currentStatus, udateStatus) => {
  if (currentStatus != 'active')
    try {
      const response = await axios.post(
        import.meta.env.VITE_ELEARNING_BASE_API + `update-batch-status/${id}`,
        { status: udateStatus }
      )

      console.log('Status change successful:', response)
      batches.value[index] = response.data.data

      // Show sweet alert for success
      Swal.fire({
        icon: 'success',
        title: 'Status Change Successful!',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      // Show sweet alert for failure
      Swal.fire({
        icon: 'error',
        title: 'Status Change Failed!',
        text: 'Please try again.'
      })

      console.error('Error changing status:', error.message)
    }
}

onMounted(() => {
  getAreas()
  //loding mounted
  commonStorage.loading = false
})

onUnmounted(() => {
  //loding unmounted
  commonStorage.loading = true
})
</script>

<template>
  <div class="dashboard-content">
    <!-- <img src="@/assets/images/dashboard/student-management/banner-10.png" alt=""> -->
    <div class="dashboard-wrapper">
      <!--select a area-->
      <div class="md:flex md:items-center mb-6 mt-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Select a Area
          </label>
        </div>
        <div class="w-full">
          <select
            v-model="selectedArea"
            class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
            id="grid-state"
          >
            <option>Select an Option</option>
            <option v-for="area in areas" :key="area" :value="area.id">
              {{ area.title }}
            </option>
          </select>
        </div>
      </div>

      <!--select a program-->
      <div v-if="isProgramActive" class="md:flex md:items-center mb-6 mt-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Select a Program
          </label>
        </div>
        <div class="w-full">
          <select
            v-model="selectedPrograms"
            class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
            id="grid-state"
          >
            <option>Select an Option</option>
            <option v-for="program in programs" :key="program" :value="program.id">
              {{ program.name }}
            </option>
          </select>
        </div>
      </div>

      <!--select a course-->
      <div v-if="isCourseActive" class="md:flex md:items-center mb-6 mt-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Select a Course
          </label>
        </div>
        <div class="w-full">
          <select
            v-model="selectedCourses"
            class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
            id="grid-state"
          >
            <option>Select an Option</option>
            <option v-for="course in courses" :key="course" :value="course.id">
              {{ course.title }}
            </option>
          </select>
        </div>
      </div>

      <!--select a section-->
      <div v-if="isSelectionActive" class="md:flex md:items-center mb-6 mt-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Select a Section
          </label>
        </div>
        <div class="w-full">
          <select
            v-model="selectedSections"
            class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
            id="grid-state"
          >
            <option>Select an Option</option>
            <option v-for="section in sections" :key="section" :value="section.id">
              {{ section.teacher_grade }}
            </option>
          </select>
        </div>
      </div>

      <!--select a teacher-->

      <div v-if="teachers && teachers.length > 0">
        <div v-if="isTeacherActive" class="md:flex md:items-center mb-6 mt-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Select a Teacher
            </label>
          </div>
          <div class="w-full">
            <select
              v-model="selectedTeachers"
              class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
              id="grid-state"
            >
              <option>Select an Option</option>
              <option v-for="teacher in teachers" :key="teacher" :value="teacher.id">
                {{ teacher.name }}
              </option>
              <!-- <option  v-for="teacher in teachers" :key="teacher.teacher_details[0]" :value="teacher.teacher_details[0].id">{{ teacher.teacher_details[0].name }}</option> -->
            </select>
          </div>
        </div>
        <div v-else>
          <p>Data is not abailavle</p>
        </div>
      </div>

      <!--Show batch data-->

      <div class="card bg-gray-400">
        <DataTable
          :value="batches"
          paginator
          :rows="5"
          :rowsPerPageOptions="[5, 10, 20, 50]"
          showGridlines
          tableStyle="min-width: 50rem"
        >
          <template #header>
            <div class="display-center">
              <div class="dashboard-title text-cyan-700">
                <font-awesome-icon :icon="['fas', 'list-ul']" />
                Group Course List Information
              </div>
            </div>
          </template>

          <!--Indexing the table column-->
          <Column header="#">
            <template #body="slotProps">
              {{ slotProps.index + 1 }}
            </template>
          </Column>

          <!--Batch name of the column-->
          <Column field="batch" header="Batch Name" style="min-width: 10rem"></Column>

          <!--Days of the week of  the group batch-->
          <Column field="day" header="Day">
            <template #body="slotProps">
              <span v-for="(day, index) in slotProps.data.day" :key="index">{{
                day.name.length > 0 ? day.name : 'N/A'
              }}</span>
            </template>
          </Column>

          <!--apply an action-->
          <Column header="Advisor">
            <template #body="slotProps">
              <!-- <button @click="console.log('SlotProps:', slotProps.data.data.id); openAdviserDialog(slotProps.data.data.id)" class="flex items-center shadow-md ml-4 border-2 bg-gray-400 p-2 text-white rounded-full text-lg hover:shadow-lg">
            <font-awesome-icon :icon="['fas', 'user-tie']" />
            </button> -->

              <button
                @click="() => changeStatus(slotProps.batch, index, slotProps.status, 'active')"
                :class="{
                  'bg-green-500 disabled': slotProps.status === 'active',
                  'bg-red-300': slotProps.status !== 'inctive'
                }"
                class="text-sm text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                {{ slotProps.branch === 'active' ? 'Active' : 'Inactive' }}
              </button>
            </template>
          </Column>
        </DataTable>
      </div>
      <div class="card flex items-center justify-center-center"></div>

      <!-- {{ isTableActive }} -->
      <!-- <div class="overflow-x-auto" v-if="isTableActive">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-200">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-md text-gray-500 font-bold capitalize">
                Batch Name
              </th>
              <th scope="col" class="px-6 py-3 text-left text-md text-gray-500 font-bold capitalize ">
                Day Name
              </th>
              <th scope="col" class="px-6 py-3 text-left text-md text-gray-500 font-bold capitalize">
                Status
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(item, index) in batches" :key="index">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ item.batch }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div v-for="day in item.day" :key="day.name" class="text-sm text-gray-900">{{ day.name }}</div>
              </td> -->

      <!-- <td class="px-6 py-4 whitespace-nowrap"> -->
      <!-- {{ item }} -->
      <!-- <button 
                @click="() => changeStatus(item.batch,index , item.status,'active')"                
                :class="{ 'bg-green-500 disabled': item.status === 'active' , 'bg-red-300': item.status !== 'inctive' }"
                class="text-sm text-white px-4 py-2 rounded-md hover:bg-green-600">
                {{ item.branch === 'active' ? 'Active' : 'Inactive' }}
                </button> -->
      <!-- <button 
  @click="() => changeStatus(item.batch, index, item.status, 'active')"                
  :class="{ 'bg-green-500 disabled': item.status === 'active', 'bg-red-300': item.status === 'inactive' }"
  class="text-sm text-white px-4 py-2 rounded-md hover:bg-green-600">
  {{ item.status === 'active' ? 'Active' : 'Inactive' }}
</button> -->
      <!-- </td> -->
      <!-- </tr> -->
      <!-- </tbody> -->
      <!-- </table> -->
      <!-- </div> -->
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

.display-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-filter {
  padding: 10px 20px;
  border: 2px solid gray;
}

.card {
  border-top: 4px solid #0fa3b1;
}
</style>
