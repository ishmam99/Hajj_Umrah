<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { FilterMatchMode } from 'primevue/api'
import Tag from 'primevue/tag'
import InputText from 'primevue/inputtext'
import 'primevue/resources/themes/lara-light-teal/theme.css'
import axios from 'axios'
import { useCommonStore } from '@/stores/common'

const commonStore = useCommonStore()
const dt = ref()
const products = ref()
const selectedProducts = ref()
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS }
})

async function getData() {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + 'get-current-teacher')
  products.value = resp.data
}

function dateFormatter(data) {
  const date = new Date(data)
  return date.toLocaleDateString('en-US')
}

const getStatusLabel = (status) => {
  switch (status) {
    case 1:
      return 'success'

    case 2:
      return 'warning'

    case 3:
      return 'success'

    case 4:
      return 'success'

    case 8:
      return 'success'

    case 9:
      return 'warning'

    case 20:
      return 'warning'

    default:
      return null
  }
}

const getStatusValue = (status) => {
  switch (status) {
    case 1:
      return 'Application Submitted'

    case 2:
      return 'Application in Review'

    case 3:
      return 'Interview Scheduled'

    case 4:
      return 'Job Offer'

    case 8:
      return 'Hired'

    case 9:
      return 'Onboarding'

    case 20:
      return 'Job Acceptance'

    default:
      return null
  }
}

onMounted(() => {
  getData()
  commonStore.loading = false
})

onUnmounted(() => {
  commonStore.loading = true
})
</script>

<template>
  <div class="dashboard-content">
    <img src="@/assets/images/dashboard/teacher-management/current-teacher.png" alt="" />
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
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} teachers"
      >
        <template #header>
          <div class="display-center">
            <div class="dashboard-title">
              <font-awesome-icon :icon="['fas', 'fa-money-check']" /> Current Teacher List
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
        <Column field="created_at" header="Application Date" sortable style="min-width: 10rem">
          <template #body="slotProps">
            {{ dateFormatter(slotProps.data.created_at) }}
          </template>
        </Column>
        <Column field="created_at" header="Application End Date" sortable style="min-width: 10rem">
          <template #body="slotProps">
            {{ dateFormatter(slotProps.data.created_at) }}
          </template>
        </Column>
        <Column field="user_status_id" header="Status" sortable style="min-width: 12rem">
          <template #body="slotProps">
            <Tag
              :value="getStatusValue(slotProps.data.user_status_id)"
              :severity="getStatusLabel(slotProps.data.user_status_id)"
            />
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <router-link :to="'/dashboard/teacher-details/' + slotProps.data.id"
              ><i class="fa fa-pencil"></i
            ></router-link>
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
