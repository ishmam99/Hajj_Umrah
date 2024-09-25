<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <p class="text-2xl font-bold py-3 border-b">Umrah Package Details</p>
    <div class="bg-slate-50 py-10">
      <!-- {{ packageDetails }} -->
      <!-- Cover Image Section -->
      <div class="relative h-80 w-full bg-gray-300 rounded-b-lg shadow-xl overflow-hidden">
        <img src="https://via.placeholder.com/150" alt="Package Cover" class="h-full w-full object-cover" />
        <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent py-6 px-8">
          <p class="text-white text-5xl font-extrabold tracking-wide drop-shadow-md">{{ packageDetails?.package_title }}</p>
          <p class="text-white text-2xl font-semibold mt-1">{{ packageDetails?.code }}</p>
          <p class="text-white text-lg mt-2">{{ packageDetails?.startDate }} - {{ packageDetails?.endDate }}</p>
        </div>
      </div>
  
      <!-- Package Details Container -->
      <div class="px-6 py-10 max-w-7xl mx-auto bg-white shadow-2xl rounded-2xl mt-10">
        <!-- Title Section -->
        <p class="text-4xl font-extrabold text-blue-600 pb-8 border-b-2 border-gray-200 tracking-tight">Itinerary Details</p>
    
        <!-- Tabs for Days -->
        <div class="my-8">
          <nav class="flex space-x-4 overflow-x-auto pb-4 border-b-2 border-gray-200">
            <button
              v-for="(day, index) in itinerary"
              :key="index"
              @click="selectedDay = index"
              :class="{
                'shadow-xl bg-blue-600 text-white rounded-full mx-2 px-6 py-2 text-lg font-semibold transition-transform duration-200 scale-105': selectedDay === index,
                'text-gray-500 hover:bg-blue-100 hover:text-blue-600 transition-transform duration-200 rounded-full px-6 py-2 text-lg font-semibold': selectedDay !== index,
              }"
              class="whitespace-nowrap"
            >
              {{ day.day }}
            </button>
          </nav>
        </div>
    
        <!-- Itinerary Details for Selected Day -->
        <div v-if="itinerary[selectedDay]" class="mt-8">
          <h3 class="text-3xl font-semibold text-gray-800 tracking-wide">{{ itinerary[selectedDay].day }}: {{ itinerary[selectedDay].date }}</h3>
          <ul class="space-y-6 mt-6">
            <li v-for="(event, idx) in itinerary[selectedDay].events" :key="idx" class="flex items-start space-x-6">
              <!-- Time Section -->
              <div class="text-blue-700 text-xl font-bold w-2/12">{{ event.time }}</div>
              <!-- Timeline and Activity Section -->
              <div class="relative w-10/12">
                <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 bg-blue-400 h-full"></div>
                <div class="ml-8 p-6 bg-gray-100 rounded-xl shadow-lg hover:bg-gray-50 transition duration-200">
                  <p class="text-gray-800 font-medium">{{ event.activity }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref ,watch,onMounted} from 'vue';
import { useRoute} from 'vue-router'
import { itinerary } from '@/stores/itinenary.ts'
import { packages } from '@/stores/itinenary.ts'
const route = useRoute()
const packageID = route.params.id

const packageDetails = ref();
watch(()=>route,() => {
  getPackage()
})
const selectedDay = ref(0); // Default to Day 1
const getPackage = async() => {
  const { data } = await api().get('package/' + packageID)
  packageDetails.value = data.data
}
onMounted(() => {
  // packageDetails.value = packages.find(data => data.id == packageID)
    getPackage()
})
</script>
