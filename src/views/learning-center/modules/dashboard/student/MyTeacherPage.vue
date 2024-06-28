<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { FilterMatchMode } from 'primevue/api'
import InputText from 'primevue/inputtext'
import 'primevue/resources/themes/lara-light-teal/theme.css'

import { useAuthStore } from '@/stores/AuthStore'

const authstre = useAuthStore()

const id = authstre?.user?.id
const dt = ref()
const products = ref()
const selectedProducts = ref()
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS }
})

const getData = async () => {
  try {
    const { data } = await api().get(`get-teacher-by-student/${id}`)
    products.value = data.data
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getData()
})
</script>

<template>
  <div class="w-full">
    <img src="@/assets/images/dashboard/my-teacher.png" alt="" class="w-full"/>
    <div class="">
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
              <font-awesome-icon :icon="['fas', 'fa-money-check']" /> Teacher List
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
        <Column field="teacher_info.id" header="id" sortable style="min-width: 12rem"></Column>
        <Column field="teacher_info.name" header="Name" sortable style="min-width: 16rem"></Column>
        <Column
          field="teacher_info.phone_no"
          header="Contact"
          sortable
          style="min-width: 10rem"
        ></Column>
        <Column
          field="teacher_info.gender"
          header="Gender"
          sortable
          style="min-width: 10rem"
        ></Column>
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
