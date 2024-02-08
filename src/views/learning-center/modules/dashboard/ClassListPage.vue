<script setup>
import { ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'
import { useCommonStore } from '@/stores/common';
import Table from '@/components/TableComponent.vue'

const commonStore = useCommonStore()
let user = ref(JSON.parse(localStorage.getItem('user')))

const tableData = ref([
    {
        Student:"01", 
        Date: '01 Sep, 2023',
        Slot: 'success'
    },
    {
        Student:"01", 
        Date: '01 Sep, 2023',
        Slot: 'success'
    },
    {
        Student:"01", 
        Date: '01 Sep, 2023',
        Slot: 'success'
    },
    {
        Student:"01", 
        Date: '01 Sep, 2023',
        Slot: 'success'
    }, 
])

const actions = [
    {
        title: 'details',
        type: 'info'
    }
]

const sFields = ref([
    'Student','Date','Slot'
])

const tFields = ref([
    'Teacher','Date','Slot'
])

onMounted(() => {
    commonStore.loading = false
})

onUnmounted(() => {
    commonStore.loading = true
})
</script>

<template>
    <div class="dashboard-content">
        <div class="dashboard-title">
            <font-awesome-icon :icon="['fas', 'fa-list']" /> My Classes
        </div>

        <Table v-if="user.role_id == 4" :fields="sFields" :tableData="tableData" :actions="actions" />
        <Table v-else :fields="tFields" :tableData="tableData" :actions="actions" />
    </div>
</template>

<style scoped>

.dashboard-content {
    padding: 20px;
    height: 70vh;
    overflow: auto;
}
.dashboard-title {
    display: flex;
    justify-content: start;
    gap: 10px;
    font-size: 20px;
    font-weight: bold;
}

</style>