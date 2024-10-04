<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    
    <div class="flex justify-between items-center py-3"><p class="text-2xl font-bold py-3 border-b">Umrah Package Approval Status</p>
      <button @click="$router.go(-1)" class="btn btn-primary flex items-center gap-2 text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg> Back</button>
    </div>
    <div class="bg-slate-50 py-10">
      <!-- {{ packageDetails }} -->
      <!-- Stepper Section -->
        <div class="relative h-80 w-full bg-gray-300 rounded-b-lg shadow-xl overflow-hidden">
        <img src="/src/assets/image/hajj/hajj-3.webp" alt="Package Cover" class="h-full w-full object-cover" />
        <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent py-6 px-8">
          <p class="text-white text-5xl font-extrabold tracking-wide drop-shadow-md">{{ packageDetails?.package_title }}</p>
          <p class="text-white text-2xl font-semibold mt-1">{{ packageDetails?.code }}</p>
          <p class="text-white text-lg mt-2">{{ moment(packageDetails?.start_at).format("MMM Do YY") }} - {{moment(packageDetails?.end_at).format("MMM Do YY") }}</p>
        </div>
      </div>
      <div class="grid grid-cols-7 px-5 mt-10" v-if="packageDetails">

        <!-- Date Status -->
        <div  class="flex flex-wrap items-center relative">
          <div class="flex items-center">
            
    <div :class="{'w-16 h-16 bg-green-500 rounded-full flex items-center justify-center':packageDetails.package_status.date_approve == 1, 'w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center':packageDetails.package_status.date_approve ==0}"> 
     
            <p class="text-white">1</p>
          </div>
            <div  :class="{' top-9  w-24 h-1 bg-green-500': packageDetails.package_status.date_approve ==1, ' top-9 w-24 h-1 bg-gray-500':packageDetails.package_status.date_approve == 0}" class="-z-0"></div>
          </div>
      
          <p class="mt-2 px-2 text-lg text-center font-semibold">Date</p>
          <!-- Line connecting steps -->
    
        </div>
        <!-- Imam Status -->
        <div  class="flex flex-wrap items-center relative">
          <div class="flex items-center">
    <div :class="{'w-16 h-16 bg-green-500 rounded-full flex items-center justify-center': packageDetails.package_status.imam_approve == 1, 'w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center': packageDetails.package_status.imam_approve == 0}"> 
     
            <p class="text-white">2</p>
          </div>
            <div :class="{' top-9  w-24 h-1 bg-green-500': packageDetails.package_status.imam_approve == 1, ' top-9 w-24 h-1 bg-gray-500': packageDetails.package_status.imam_approve == 0}" class="-z-0"></div>
          </div>
      
          <p class="mt-2 px-2 text-lg font-semibold">Imam</p>
          <!-- Line connecting steps -->
    
        <!-- Agent Status -->
         </div>
        <div  class="flex flex-wrap items-center relative">
          <div class="flex items-center">
            <div :class="{'w-16 h-16 bg-green-500 rounded-full flex items-center justify-center': packageDetails.package_status.agent_approve == 1, 'w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center': packageDetails.package_status.agent_approve == 0}"> 
              <p class="text-white">3</p>
            </div>
            <div :class="{' top-9  w-24 h-1 bg-green-500': packageDetails.package_status.agent_approve == 1, ' top-9 w-24 h-1 bg-gray-500': packageDetails.package_status.agent_approve == 0}" class="-z-0"></div>
          </div>
          <p class="mt-2 px-2 text-lg text-center font-semibold">Agent</p>
        </div>
        <!-- Flight Status -->
        <div  class="flex flex-wrap items-center relative">
          <div class="flex items-center">
            <div :class="{'w-16 h-16 bg-green-500 rounded-full flex items-center justify-center': packageDetails.package_status.flight_approve == 1, 'w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center': packageDetails.package_status.flight_approve == 0}"> 
              <p class="text-white">4</p>
            </div>
            <div :class="{' top-9  w-24 h-1 bg-green-500': packageDetails.package_status.flight_approve == 1, ' top-9 w-24 h-1 bg-gray-500': packageDetails.package_status.flight_approve == 0}" class="-z-0"></div>
          </div>
          <p class="mt-2 px-2 text-lg text-center font-semibold">Flight</p>
        </div>
        <!-- Bus Status -->
        <div  class="flex flex-wrap items-center relative">
          <div class="flex items-center">
            <div :class="{'w-16 h-16 bg-green-500 rounded-full flex items-center justify-center': packageDetails.package_status.bus_approve == 1, 'w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center': packageDetails.package_status.bus_approve == 0}"> 
              <p class="text-white">5</p>
            </div>
            <div :class="{' top-9  w-24 h-1 bg-green-500': packageDetails.package_status.bus_approve == 1, ' top-9 w-24 h-1 bg-gray-500': packageDetails.package_status.bus_approve == 0}" class="-z-0"></div>
          </div>
          <p class="mt-2 px-3 text-lg text-center font-semibold">Bus</p>
        </div>
        <!-- Hotel Status -->
        <div  class="flex flex-wrap items-center relative">
          <div class="flex items-center">
            <div :class="{'w-16 h-16 bg-green-500 rounded-full flex items-center justify-center': packageDetails.package_status.hotel_approve == 1, 'w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center': packageDetails.package_status.hotel_approve == 0}"> 
              <p class="text-white">6</p>
            </div>
            <div :class="{' top-9  w-24 h-1 bg-green-500': packageDetails.package_status.hotel_approve == 1, ' top-9 w-24 h-1 bg-gray-500': packageDetails.package_status.hotel_approve == 0}" class="-z-0"></div>
          </div>
          <p class="mt-2 px-3 text-lg text-center font-semibold">Hotel</p>
        </div>
        <!-- Final Review Status -->
        <div  class="flex flex-wrap items-center relative">
          <div class="flex items-center">
            <div :class="{'w-16 h-16 bg-green-500 rounded-full flex items-center justify-center': packageDetails.package_status.finalreview == 1, 'w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center': packageDetails.package_status.finalreview == 0}"> 
              <p class="text-white">7</p>
            </div>
            <!-- <div :class="{' top-9  w-24 h-1 bg-green-500': packageDetails.package_status.finalreview == 1, ' top-9 w-24 h-1 bg-gray-500': packageDetails.package_status.finalreview == 0}" class="-z-0"></div> -->
          </div>
          <p class="mt-2 text-center  text-lg font-semibold">Final Review</p>
        </div>
      
      
       

      </div>
    </div>
  </div>
</template>

<script setup>

import { ref ,watch,onMounted} from 'vue';
import { useRoute} from 'vue-router'
// import { packages } from '@/stores/itinenary.ts'
import moment from 'moment'
const route = useRoute()
const packageID = route.params.id
const packageDetails = ref();
watch(()=>route,() => {
  getPackage()
})
const getPackage = async() => {
  const { data } = await api().get('package/' + packageID)
  packageDetails.value = data.data
}
onMounted(() => {
  getPackage()
})
const statuses = [
    { id: 1, name: 'Not In Plan' },
    { id: 2, name: 'In Plan' },
    { id: 3, name: 'In Preparation' },
    { id: 4, name: 'Fully Booked' },
    { id: 5, name: 'In Approval Process' },
    { id: 6, name: 'Approved' },
    { id: 7, name: 'Published' },
    { id: 8, name: 'Discontinued' }
  ];
</script>
