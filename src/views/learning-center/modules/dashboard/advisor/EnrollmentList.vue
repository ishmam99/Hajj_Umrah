<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
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
let user = ref({})

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
})

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
  console.log(products.value, 'schedule')
}

// function dateFormatter(data) {
//   const date = new Date(data)
//   return date.toLocaleDateString("en-US")
// }

// const getStatusLabel = (status) => {
//   switch (status) {
//     case 1:
//       return 'success';

//     case 0:
//       return 'danger';

//     case 22:
//       return 'warning';

//     case 23:
//       return 'success';

//     case 24:
//       return 'success';

//     case 25:
//       return 'warning';

//     case 26:
//       return 'warning';

//     case 27:
//       return 'success';

//     default:
//       return null;
//   }
// };

// const getStatusValue = (status) => {
//   switch (status) {
//     case 1:
//       return 'Active';

//     case 0:
//       return 'Inactive';

//     case 22:
//       return 'Registration Started';

//     case 23:
//       return 'Advisor Assigned';

//     case 24:
//       return 'Scheduled Confirmed';

//     case 25:
//       return 'Orientation';

//     case 26:
//       return 'Onboarding';

//     case 27:
//       return 'Payment Completed';

//     default:
//       return null;
//   }
// };

onMounted(() => {
  userInfo().then((userId) => {
    console.log('user_idddd', userId)

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
    <img src="@/assets/images/dashboard/Enrollment.png" alt="" />
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
              Enrollment List
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
          </template>
        </Column>
      </DataTable>
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
