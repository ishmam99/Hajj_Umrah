<template>
  <DefaultLayout>
    <div class="">
      <div class="pt-[80px] flex flex-row justify-between">
        <Sidebar />
         <router-view v-if="$route.name != 'Umrah_Management_System'" />
       <Dashboard v-else/>
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import Sidebar from './Sidebar.vue'
import Dashboard from './Dashboard.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import { ref, onMounted } from 'vue'
import { useSocialStore } from '/src/stores/SocialDashboard.ts'

const store = useSocialStore()

const getProjectList = async () => {
  try {
    const { data } = await api().get('project-list')
    store.projectList = data
  // console.log(store.serviceList[0])
  } catch (error) {
    console.log(error)
  }
}

const getEventList = async () => {
  try {
    const { data } = await api().get('event-list')
    store.eventList = data
  // console.log(store.serviceList[0])
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
    // getProjectList()
    // getEventList()
})
</script>
