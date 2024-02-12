
<template>
    <div>
        <div class="card">
            <DataTable ref="dt" :value="products" v-model:selection="selectedProducts" dataKey="id" 
                :paginator="true" :rows="10" :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
                <template #header>
                    <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                        <h4 class="m-0">New Teachers</h4>
						<span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters['global'].value" placeholder="Search..." />
                        </span>
					</div>
                </template>

                <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                <Column field="id" header="id" sortable style="min-width:12rem"></Column>
                <Column field="name" header="Name" sortable style="min-width:16rem"></Column>
                <Column field="contact" header="Contact" sortable style="min-width:10rem"></Column>
                <Column field="gender" header="Gender" sortable style="min-width:10rem"></Column>
                <Column field="created_at" header="Application Date" sortable style="min-width:10rem"></Column>
                <Column field="created_at" header="Application End Date" sortable style="min-width:10rem"></Column>
                <Column field="status" header="Status" sortable style="min-width:12rem">
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.status" :severity="getStatusLabel(slotProps.data.status)" />
                    </template>
                </Column>
                <Column :exportable="false" style="min-width:8rem">
                    <template #body="slotProps">
                       <router-link :to="'/'+slotProps.data.id"><i class="fa fa-pencil"></i></router-link>
                    </template>
                </Column>
            </DataTable>
        </div>
	</div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';   
import { FilterMatchMode } from 'primevue/api';
import Tag from 'primevue/tag';
// import Button from 'primevue/button';
// import Dialog from 'primevue/dialog';
import 'primevue/resources/themes/lara-light-teal/theme.css'
// import { useToast } from 'primevue/usetoast';

onMounted(() => {
    test()
})

const props = defineProps({
    tableData: Array
})
// const toast = useToast();
const dt = ref();
const products = ref(props.tableData)
const selectedProducts = ref();
const filters = ref({
    'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
});

function test() {
    console.log(props.tableData)
}

const getStatusLabel = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

</script>
