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
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS }
})

// let userId = ref(JSON.parse(localStorage.getItem('user')).id)

async function getData() {
  const resp = await axios.get(
    import.meta.env.VITE_ELEARNING_BASE_API + 'get-student-by-teacher/' + userId.value
  )
  products.value = resp.data.data
  console.log(products.value)
}


</script>

<template>
  <div class="dashboard-content">
    <img src="@/assets/images/dashboard/my-student.png" alt="" />
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
              <font-awesome-icon :icon="['fas', 'fa-money-check']" /> Student List
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
        <Column field="student_info.id" header="id" sortable style="min-width: 12rem"></Column>
        <Column field="student_info.name" header="Name" sortable style="min-width: 16rem"></Column>
        <Column
          field="student_info.phone_no"
          header="Contact"
          sortable
          style="min-width: 10rem"
        ></Column>
        <Column
          field="student_info.gender"
          header="Gender"
          sortable
          style="min-width: 10rem"
        ></Column>
        <!-- <Column field="created_at" header="Registration Started" sortable style="min-width:10rem">
                   <template #body="slotProps">
                    {{ dateFormatter(slotProps.data.created_at) }}
                   </template>
                </Column> -->
        <!-- <Column field="status" header="Status" sortable style="min-width:12rem">
                    <template #body="slotProps">
                        <Tag :value="getStatusValue(slotProps.data.status)" :severity="getStatusLabel(slotProps.data.status)" />
                    </template>
                </Column> -->
        <!-- <Column :exportable="false" style="min-width:8rem">
                    <template #body="slotProps">
                       <router-link :to="'/dashboard/student-details/'+slotProps.data.id"><i class="fa fa-pencil"></i></router-link>
                    </template>
                </Column> -->
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
