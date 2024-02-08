<script setup>
import { defineProps } from "vue";
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import "datatables.net-responsive";

DataTable.use(DataTablesCore);

defineProps({
  tableData: Array,
  columns: Array,
  actions: Array,
});
const options = {
  // responsive: true,
  scrollX: true,
  autoWidth: false, // Disable auto-width to make it more responsive
};
</script>

<template>
  <div class="table-background mt-4">
    <DataTable
      :columns="columns"
      :data="tableData"
      :options="options"
      class="cell-border stripe"
    >
    </DataTable>
  </div>
</template>

<style scoped>
@import "datatables.net-dt";

.table-background {
  background: #f5f5f5 !important;
  box-shadow: 4px 4px 7px -2px rgba(0, 0, 0, 0.25) !important;
  border-radius: 10px !important;
  padding: 25px;
}

.info {
  background-color: #145579;
  text-decoration: none;
  color: inherit;
  padding: 5px 10px;
  color: white;
  border-radius: 5px;
}
</style>
