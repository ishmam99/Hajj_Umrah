<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { FilterMatchMode } from 'primevue/api'
import InputText from 'primevue/inputtext'
import 'primevue/resources/themes/lara-light-teal/theme.css'
import axios from 'axios'
import { useCommonStore } from '@/stores/common'

const commonStore = useCommonStore()
const dt = ref()
const products = ref()
const selectedProducts = ref()

const areaListApi = 'area-list'
const programListApi = 'program-list/'
const courseListApi = 'course-list/'
const teacherListApi = 'teachers-list/'

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS }
})

let areas = ref([])
let selectedArea = ref([])

let programs = ref([])
let selectedPrograms = ref([])

let courses = ref([])
let selectedCourses = ref([])

let teachers = ref([])
let selectedTeachers = ref([])

let batch = ref([])

let isProgramActive = false
let isCourseActive = false
let isTeacherActive = false
let isTableActive = false

watch(selectedArea, async (newValue) => {
  if (newValue) {
    console.log('Selected area changed:', newValue)
    isProgramActive = true
    getPrograms(newValue)
  }
})

watch(selectedPrograms, async (newValue) => {
  if (newValue) {
    console.log('Selected program changed:', newValue)
    getCourses(newValue)
    isCourseActive = true
  }
})
watch(selectedCourses, async (newValue) => {
  if (newValue) {
    console.log('Selected course changed:', newValue)
    isTeacherActive = true
    geTeachers(newValue)
  }
})
watch(selectedTeachers, async (newValue) => {
  if (newValue) {
    console.log('Selected teacher changed:', newValue)
    getBatch(newValue)
  }
})

async function getData() {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + 'get-advisor')
  products.value = resp.data
}

async function getAreas() {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + areaListApi)
  areas.value = resp.data

  console.log('area list ', resp.data)
}

async function getPrograms(id) {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + programListApi + id)
  programs.value = resp.data

  console.log('program list ', resp.data)
}

async function getCourses(id) {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + courseListApi + id)
  courses.value = resp.data

  console.log('course list ', resp.data)
}

async function geTeachers(id) {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + teacherListApi + id)
  teachers.value = resp.data.data

  console.log('Teacher list ', resp.data)
}

async function getBatch(id) {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + 'get-batch/' + id)
  batch.value = resp.data
  isTableActive = true

  console.log('Batch list ', resp.data)
}

onMounted(() => {
  getData()
  getAreas()
  commonStore.loading = false
})

onUnmounted(() => {
  commonStore.loading = true
})
</script>

<template>
  <div class="dashboard-content">
    <img src="@/assets/images/dashboard/student-management/banner-10.png" alt="" />
    <div class="dashboard-wrapper">
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
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
            id="grid-state"
          >
            <option>Select an Option</option>
            <option v-for="area in areas" :key="area" :value="area.id">
              {{ area.title }}
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
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
            id="grid-state"
          >
            <option>Select an Option</option>
            <option v-for="program in programs" :key="program" :value="program.id">
              {{ program.name }}
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
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
            id="grid-state"
          >
            <option>Select an Option</option>
            <option v-for="course in courses" :key="course" :value="course.id">
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
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
            id="grid-state"
          >
            <option>Select an Option</option>
            <option v-for="teacher in teachers" :key="teacher" :value="teacher.id">
              {{ teacher.name }}
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

      <DataTable
        v-if="isTableActive"
        ref="dt"
        :value="products"
        showGridlines
        v-model:selection="selectedProducts"
        dataKey="id"
        :paginator="true"
        :rows="10"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
      >
        <template #header>
          <div class="display-center">
            <div class="dashboard-title">
              <font-awesome-icon :icon="['fas', 'fa-money-check']" />
              Group Courses List
            </div>
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                class="header-filter"
                v-model="filters['global'].value"
                placeholder="Search..."
              />
            </span>
          </div>
        </template>
        <Column field="id" header="id" sortable style="min-width: 12rem"></Column>
        <Column field="name" header="Name" sortable style="min-width: 16rem"></Column>
        <Column field="phone_no" header="Contact" sortable style="min-width: 10rem"></Column>
        <Column field="gender" header="Gender" sortable style="min-width: 10rem"></Column>
      </DataTable>
      <div v-else>
        <h2>Loading ...</h2>
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
</style>
