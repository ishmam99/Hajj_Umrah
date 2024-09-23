<template>
  <DefaultLayout>
    <div class="">
      <div class="flex flex-row justify-between">
        <!-- <Sidebar /> -->
       
         <!-- <router-view v-if="$route.name == 'Umrah_Management_System'" /> -->
         <div class="w-full">
          <div class="w-full px-4 py-5 h-auto flex justify-center items-center shadow-lg">
            <h1 class="my-5 mx-1 text-2xl font-bold">Umrah Package Management System Dashbaord</h1>
         
          </div>
           <div class="w-full gap-3 h-auto flex justify-center items-center py-10">
               <div class="w-fit rounded-[25px] bg-blue-600 text-white p-8 aspect">
        <div class="h-auto w-auto gap-5 flex">
            <svg class="h-20 w-20 fill-white stroke-blue-800" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
             <div class="my-2">
            <h2 class="text-4xl font-bold">10 +</h2>
        </div>
        </div>
        <div class="my-2 w-full">
            <h2 class="text-2xl w-full font-bold"> Total Packages</h2>
        </div>

    </div>
       <div class="w-fit rounded-[25px] bg-pink-600 text-white p-8 aspect">
        <div class="h-auto w-auto gap-5 flex">
            <svg class="h-20 w-20 fill-white stroke-pink-800" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
             <div class="my-2">
            <h2 class="text-4xl font-bold">10 +</h2>
        </div>
        </div>
        <div class="my-2 w-full">
            <h2 class="text-2xl w-full font-bold"> Completed Packages</h2>
        </div>

    </div>
       <div class="w-fit rounded-[25px] bg-green-600 text-white p-8 aspect">
        <div class="h-auto w-auto gap-5 flex">
            <svg class="h-20 w-20 fill-white stroke-green-800" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
             <div class="my-2">
            <h2 class="text-4xl font-bold">10 +</h2>
        </div>
        </div>
        <div class="my-2 w-full">
            <h2 class="text-2xl w-full font-bold"> Active Packages</h2>
        </div>

    </div>
       <div class="w-fit rounded-[25px] bg-orange-600 text-white p-8 aspect">
        <div class="h-auto w-auto gap-5 flex">
            <svg class="h-20 w-20 fill-white stroke-orange-800" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
             <div class="my-2">
            <h2 class="text-4xl font-bold">10 +</h2>
        </div>
        </div>
        <div class="my-2 w-full">
            <h2 class="text-2xl w-full font-bold"> Upcoming Packages</h2>
        </div>

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
