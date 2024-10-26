<template>
  <div class="mx-auto min-h-screen">
    <div class="flex flex-col justify-start">
      <div class="flex flex-row justify-between items-center w-full px-4 py-5">
        <!-- <Sidebar /> -->
        <!-- <router-view v-if="$route.name == 'Umrah_Management_System'" /> -->
        <div class="w-full">
          <div class="w-full px-4 py-5 h-auto flex justify-center items-center shadow-lg">
            <h1 class="text-2xl font-bold">Imam Management System Dashboard</h1>
          </div>
          <div class="w-full gap-3 h-auto flex flex-wrap justify-center items-center py-10">
            <div class="w-fit rounded-[25px] bg-blue-500 text-white p-8 aspect">
              <div class="h-auto w-auto gap-5 flex">
                <svg class="h-14 w-14 fill-white stroke-teal-800" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path d="M21.0082 3C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM20 5H4V19H20V5ZM18 15V17H6V15H18ZM12 7V13H6V7H12ZM18 11V13H14V11H18ZM10 9H8V11H10V9ZM18 7V9H14V7H18Z"></path>
                </svg>
                <div class="my-2">
                  <h2 class="text-4xl font-bold">{{ packages.length }} +</h2>
                </div>
              </div>
              <div class="my-2 w-full">
                <h2 class="text-2xl font-bold">Total Packages</h2>
              </div>
            </div>
            <div class="w-fit rounded-[25px] bg-teal-600 text-white p-8 aspect">
              <div class="h-auto w-auto gap-5 flex">
                <svg class="h-14 w-14 fill-white stroke-teal-800" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path d="M9 17C9 17 16 18 19 21H20C20.5523 21 21 20.5523 21 20V13.937C21.8626 13.715 22.5 12.9319 22.5 12C22.5 11.0681 21.8626 10.285 21 10.063V4C21 3.44772 20.5523 3 20 3H19C16 6 9 7 9 7H5C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H6L7 22H9V17ZM11 8.6612C11.6833 8.5146 12.5275 8.31193 13.4393 8.04373C15.1175 7.55014 17.25 6.77262 19 5.57458V18.4254C17.25 17.2274 15.1175 16.4499 13.4393 15.9563C12.5275 15.6881 11.6833 15.4854 11 15.3388V8.6612ZM5 9H9V15H5V9Z"></path>
                </svg>
                <div class="my-2">
                  <h2 class="text-4xl font-bold">{{ packages.length }} +</h2>
                </div>
              </div>
              <div class="my-2 w-full">
                <h2 class="text-2xl font-bold">Completed Packages</h2>
              </div>
            </div>
            <div class="w-fit rounded-[25px] bg-green-600 text-white p-8 aspect">
              <div class="h-auto w-auto gap-5 flex">
                <svg class="h-14 w-14 fill-white stroke-green-800" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                <div class="my-2">
                  <h2 class="text-4xl font-bold">{{ packages.length }} +</h2>
                </div>
              </div>
              <div class="my-2 w-full">
                <h2 class="text-2xl font-bold">Active Packages</h2>
              </div>
            </div>
            <div class="w-fit rounded-[25px] bg-sky-600 text-white p-8 aspect">
              <div class="h-auto w-auto gap-5 flex">
                <svg class="h-14 w-14 fill-white stroke-sky-800" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                <div class="my-2">
                  <h2 class="text-4xl font-bold">{{ packages.length }} +</h2>
                </div>
              </div>
              <div class="my-2 w-full">
                <h2 class="text-2xl font-bold">Upcoming Packages</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>


import { ref, onMounted } from 'vue'
import { useSocialStore } from '/src/stores/SocialDashboard.ts'
const packages = ref([])
const store = useSocialStore()
const getPackages = async () => {
  const { data } = await api().get('package')
  packages.value = data.data
}

onMounted(async () => {
   getPackages()
})
</script>
