<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { FilterMatchMode } from 'primevue/api'
import InputText from 'primevue/inputtext'
import 'primevue/resources/themes/lara-light-teal/theme.css'
import axios from 'axios'
import { useCommonStore } from '@/stores/common'
import { useCourseStore } from '@/stores/learning-center/course'
import Dialog from 'primevue/dialog'

const swal = inject('$swal')
const commonStore = useCommonStore()
const courseStore = useCourseStore()

const dt = ref()
const products = ref()
const selectedProducts = ref()
let user = ref({})
let getSlots = ref([])
let enrollmentInfo = ref()
let numOfClass = ref()
const courseDates = []
let formateDaySlot = ref({})
const courseStartDate = ref()

const getSlotsByEnrollmentApi = 'get-slots-by-enrollment/'
// const generateClassApi = '/store-enrollment-schedules/'

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
})

const visible = ref(false)

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
      timer: 1500,
    })
  } else {
    swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Something went wrong',
      showConfirmButton: false,
      timer: 1500,
    })
  }
  visible.value = false
}

async function getSlotsByEnrollment(course) {
  enrollmentInfo.value = course
  visible.value = true
  const resp = await axios.get(
    import.meta.env.VITE_ELEARNING_BASE_API +
      getSlotsByEnrollmentApi +
      course.id
  )
  getSlots.value = resp.data[0].time_slot
  numOfClass.value =
    Number(resp.data[0].course_duration) * Number(getSlots.value.length) * 4
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
          weekday: 'long',
        })
        if (prefDayName === currentDayName) {
          const year = startDate.toLocaleString('default', { year: 'numeric' })
          const month = startDate.toLocaleString('default', {
            month: '2-digit',
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
            Course_id: enrollmentInfo.value.course_id,
          }

          courseDates.push(formateDaySlot.value)
        }
      }
      startDate = new Date(addMinutes(startDate, 24 * 60)) // Add 24 hours.
    }
  }
}

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
        :paginator="true"
        :rows="10"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} students"
      >
        <template #header>
          <div class="display-center">
            <div class="dashboard-title">
              <font-awesome-icon :icon="['fas', 'fa-money-check']" />
              Schedule List
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
        <!--        {{ products }}-->
        <!--                <Column field="id" header="id" sortable style="min-width:12rem"></Column>-->

        <Column
          field="data.enrollment_id"
          header="Id"
          sortable
          style="min-width: 16rem"
        >
          <template #body="slotProps">
            {{ slotProps.data.data.id }}
          </template>
        </Column>

        <Column field="teacher" header="Teacher" style="min-width: 10rem">
          <template #body="slotProps">
            {{
              slotProps.data.teacher.length > 0
                ? slotProps.data.teacher[0].name
                : 'N/A'
            }}
          </template>
        </Column>
        <Column field="course" header="Course " style="min-width: 10rem">
          <template #body="slotProps">
            {{
              slotProps.data.course.length > 0
                ? slotProps.data.course[0].title
                : 'N/A'
            }}
          </template>
        </Column>
        <Column field="student" header="Student" style="min-width: 10rem">
          <template #body="slotProps">
            {{
              slotProps.data.student.length > 0
                ? slotProps.data.student[0].name
                : 'N/A'
            }}
          </template>
        </Column>
        <Column
          field="data.meeting_date"
          header="Meeting Date"
          sortable
          style="min-width: 10rem"
        >
          <template #body="slotProps">
            {{
              slotProps.data.data.meeting_date
                ? slotProps.data.data.meeting_date
                : 'N/A'
            }}
          </template>
        </Column>

        <Column
          field="data.meeting_note"
          header="Meeting Note"
          sortable
          style="min-width: 10rem"
        >
          <template #body="slotProps">
            {{
              slotProps.data.data.meeting_note
                ? slotProps.data.data.meeting_note
                : 'N/A'
            }}
          </template>
        </Column>

        <!--        <Column field="created_at" header="Registration Started" sortable style="min-width:10rem">-->
        <!--          <template #body="slotProps">-->
        <!--            {{ slotProps.data.created_at }}-->
        <!--          </template>-->
        <!--        </Column>-->

        <!--        <Column field="status" header="Status" sortable style="min-width:12rem">-->
        <!--          <template #body="slotProps">-->
        <!--            <Tag :value="getStatusValue(slotProps.data.status)" :severity="getStatusLabel(slotProps.data.status)"/>-->
        <!--          </template>-->
        <!--        </Column>-->
        <!--      -->
        <!--      -->
        <Column header="Action" :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <!--            <router-link :to="'/dashboard/student-details/'+slotProps.data.id"><i class="fa fa-pencil"></i>-->
            <!--            </router-link>-->

            <router-link
              :to="{
                name: 'createScheduleFromEnrollment',
                params: { id: slotProps.data.data.id },
                query: {
                  teacher:
                    slotProps.data.teacher.length > 0
                      ? slotProps.data.teacher[0].name
                      : '',
                  student:
                    slotProps.data.student.length > 0
                      ? slotProps.data.student[0].name
                      : '',
                  // course:  slotProps.data.data.course_id,
                  course:
                    slotProps.data.course.length > 0
                      ? slotProps.data.course[0].title
                      : '', // Replace with your course ID field
                },
              }"
            >
              <i class="fa fa-calendar"></i>
            </router-link>
            <button @click="getSlotsByEnrollment(slotProps.data.data)">
              <i class="fa fa-user-plus ml-4"></i>
            </button>
          </template>
        </Column>
      </DataTable>
    </div>
    <div class="card flex justify-content-center">
      <Dialog
        v-model:visible="visible"
        modal
        header="Class Starting Date"
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
            Generate Classes
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
  justify-content: start;
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
