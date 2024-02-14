<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'

//PrimeVue necessity import from here
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import 'primevue/resources/themes/lara-light-teal/theme.css'

import axios from 'axios'
import { useCommonStore } from '@/stores/common'

const commonStore = useCommonStore()

const dt = ref()
const products = ref()
const selectedProducts = ref()

//This variable is for localStorage(web storage)
let user = ref({})

async function userInfo() {
  user.value = JSON.parse(localStorage.getItem('user'))
  commonStore.loading = false
  return user.value.id // Return the user ID from userInfo function
}

async function getData(id) {
  const resp = await axios.get(
    import.meta.env.VITE_ELEARNING_BASE_API + `get-advisor-schedule/${id}`
  )
  products.value = resp.data
  console.log(resp.data)
}

//for modal testing
const getSlotsByEnrollmentApi = 'get-slots-by-enrollment/'
let enrollmentInfo = ref()
const visible = ref(false)
const swal = inject('$swal')
const courseStartDate = ref()
import { useCourseStore } from '@/stores/learning-center/course'
import Dialog from 'primevue/dialog'
const courseStore = useCourseStore()
const courseDates = []
let getSlots = ref([])
let numOfClass = ref()
let formateDaySlot = ref({})

async function getSlotsByEnrollment(course) {
  enrollmentInfo.value = course
  visible.value = true
  const resp = await axios.get(
    import.meta.env.VITE_ELEARNING_BASE_API + getSlotsByEnrollmentApi + course.id
  )
  getSlots.value = resp.data[0].time_slot
  numOfClass.value = Number(resp.data[0].course_duration) * Number(getSlots.value.length) * 4
}

async function generateClasses() {
  let startDate = new Date(courseStartDate.value)
  scheduleDateTimeList(startDate)
  const resp = await courseStore.postCheckoutDataProcessing(courseDates)
  console.log(resp)
  if (resp == true) {
    swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Class Generated Successfully !',
      showConfirmButton: false,
      timer: 1500
    })
  } else {
    swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Something went wrong',
      showConfirmButton: false,
      timer: 1500
    })
  }
  visible.value = false
}

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000)
}

function scheduleDateTimeList(startDate) {
  if (getSlots.value != '') {
    while (courseDates.length < numOfClass.value) {
      for (const x of getSlots.value) {
        const prefDayName = x.day_name
        const courseTimeSlotsId = x.course_time_slots_id
        const currentDayName = startDate.toLocaleDateString('en-US', {
          weekday: 'long'
        })
        if (prefDayName === currentDayName) {
          const year = startDate.toLocaleString('default', { year: 'numeric' })
          const month = startDate.toLocaleString('default', {
            month: '2-digit'
          })
          const day = startDate.toLocaleString('default', { day: '2-digit' })

          const formattedDate = [year, month, day].join('-')

          formateDaySlot.value = {
            class_date: formattedDate,
            course_starting_date: courseStartDate.value,
            course_time_slots_id: courseTimeSlotsId,
            enrollment_id: enrollmentInfo.value.id,
            student_id: enrollmentInfo.value.student_id,
            teacher_id: enrollmentInfo.value.teacher_id,
            Course_id: enrollmentInfo.value.course_id
          }

          courseDates.push(formateDaySlot.value)
        }
      }
      startDate = new Date(addMinutes(startDate, 24 * 60)) // Add 24 hours.
    }
  }
}

//end modal testing

onMounted(() => {
  userInfo().then((userId) => {
    getData(userId)
  })
  commonStore.loading = false
})

onUnmounted(() => {
  commonStore.loading = true
})
</script>

<template>
  <div class="dashboard-content">
    <img src="@/assets/images/dashboard/student-schedule.png" alt="" />
    <div class="dashboard-wrapper">
      <DataTable
        ref="dt"
        :value="products"
        showGridlines
        v-model:selection="selectedProducts"
        dataKey="id"
      >
        <template #header>
          <div class="display-center">
            <div class="dashboard-title text-cyan-700">
              <font-awesome-icon :icon="['fas', 'list-ul']" />
              Group Course List Information
            </div>
          </div>
        </template>
        <!-- {{ products }} -->

        <!--For Index id showing -->
        <Column header="#" headerStyle="width:3rem">
          <template #body="slotProps">
            {{ slotProps.index + 1 }}
          </template>
        </Column>

        <Column field="teacher" header="Teacher" style="min-width: 10rem">
          <template #body="slotProps">
            {{ slotProps.data.teacher.length > 0 ? slotProps.data.teacher[0].name : 'N/A ' }}
          </template>
        </Column>

        <Column field="course" header="Course " style="min-width: 10rem">
          <template #body="slotProps">
            {{ slotProps.data.course.length > 0 ? slotProps.data.course[0].title : 'N/A' }}
          </template>
        </Column>

        <Column field="student" header="Student" style="min-width: 10rem">
          <template #body="slotProps">
            {{ slotProps.data.student.length > 0 ? slotProps.data.student[0].name : 'N/A' }}
          </template>
        </Column>

        <!--Adviser Assign button-->
        <Column header="Adviser" :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <button
              @click="getSlotsByEnrollment(slotProps.data.data)"
              class="flex items-center shadow-md ml-4 border-2 bg-gray-400 p-2 text-white rounded-full text-lg hover:shadow-lg"
            >
              <font-awesome-icon :icon="['fas', 'user-tie']" />
            </button>
          </template>
        </Column>
      </DataTable>
    </div>
    <div class="card flex justify-content-center">
      <Dialog
        v-model:visible="visible"
        modal
        header="Select an Advisor"
        :style="{ width: '30rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
      >
        <form class="w-full">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-full px-3">
              <input
                v-model="courseStartDate"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="date"
                placeholder=""
              />
            </div>
          </div>

          <button
            @click="generateClasses"
            type="button"
            class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 ml-2"
          >
            Adviser Assign
          </button>
        </form>
      </Dialog>
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
