<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <p class="text-2xl font-bold py-3 border-b">Umrah Package Lifecycle Status</p>
    <div class="flex justify-start items-center py-3">
      <button @click="$router.go(-1)" class="btn btn-primary text-white">Back</button>
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
      <div class="grid grid-cols-8 mt-10" v-if="packageDetails">
        <div v-for="(status, index) in statuses" :key="index" class="flex flex-wrap items-center relative">
          <div class="flex items-center">
    <div :class="{'w-16 h-16 bg-green-500 rounded-full flex items-center justify-center': status.id <= packageDetails.status_of_package, 'w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center': status.id > packageDetails.status_of_package}"> 
     
            <p class="text-white">{{ index + 1 }}</p>
          </div>
            <div v-if="index < statuses.length - 1" :class="{' top-9  w-24 h-1 bg-green-500': status.id <= packageDetails.status_of_package, ' top-9 w-24 h-1 bg-gray-500': status.id > packageDetails.status_of_package}" class="-z-0"></div>
          </div>
      
          <p class="mt-2 text-lg font-semibold">{{ status.name }}</p>
          <!-- Line connecting steps -->
    
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
