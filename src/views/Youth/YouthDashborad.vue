<template>
    <DefaultLayout>
        <div class="">
            <div class="pt-[80px] flex flex-row-reverse justify-between">
                <router-view/>
                <YouthSidebar/>
            </div>
        </div>
    </DefaultLayout>

</template>
<script setup>
import YouthSidebar from '/src/views/Youth/youthSidebar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import YouthProfile from '/src/views/Youth/Profile/YouthProfile.vue'
import { ref, onMounted } from 'vue'
import { useYouthStore } from '/src/stores/YouthDashboard.ts'
import api from '@/config/api'

const store = useYouthStore();

const getYearPlannerList = async () => {
  try {
    const { data } = await api().get('year-planner-list')
    store.yearPlannerList = data
  // console.log(store.serviceList[0])
  } catch (error) {
    console.log(error)
  }
}

const getProgramList = async () => {
  try {
    const { data } = await api().get('program-list')
    store.programList = data
  // console.log(store.serviceList[0])
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
    getYearPlannerList()
    getProgramList()
})
</script>
