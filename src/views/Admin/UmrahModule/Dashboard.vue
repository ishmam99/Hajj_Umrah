<template>
  <DefaultLayout>
    <div class="">
      <div class="pt-[80px] flex flex-row justify-between">
        <Sidebar />
       
         <router-view v-if="$route.name != 'Umrah_Management_System'" />
         <div v-else class="w-full">
          <div class="w-full px-4 py-5 h-auto flex justify-center items-center shadow-lg">
            <h1 class="my-5 mx-1 text-2xl font-bold">Umrah Package Management System Dashbaord</h1>
         
          </div>
           <div class="w-full gap-3 h-auto flex justify-center items-center py-10">
            <div class="bg-blue-600 text-white p-5 rounded-lg shadow-lg">
              <h1 class="text-2xl font-bold">Total Packages : 10</h1>
            </div>
            <div class="bg-pink-600 text-white p-5 rounded-lg shadow-lg">
              <h1 class="text-2xl font-bold">Active Packages : 6</h1>
            </div>
            <div class="bg-green-600 text-white p-5 rounded-lg shadow-lg">
              <h1 class="text-2xl font-bold">Completed Packages : 4</h1>
            </div>
            <div class="bg-orange-600 text-white p-5 rounded-lg shadow-lg">
              <h1 class="text-2xl font-bold">Upcoming Packages : 4</h1>
            </div>
          </div>
         </div>
          
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import Sidebar from './Sidebar.vue'
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
    getProjectList()
    getEventList()
})
</script>
