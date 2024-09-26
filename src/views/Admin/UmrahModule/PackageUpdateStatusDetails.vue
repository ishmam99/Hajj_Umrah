<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <p class="text-2xl font-bold py-3 border-b">Umrah Package Status</p>
    <div class="bg-slate-50 py-10">
      <!-- {{ packageDetails }} -->
      <!-- Stepper Section -->
      <div class="relative h-72 w-full bg-gray-300 rounded-b-lg shadow-xl overflow-hidden">
        <img src="/src/assets/image/hajj/hajj-3.webp" alt="Package Cover" class="h-full w-full object-cover" />
        <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent py-6 px-8">
          <p class="text-white text-5xl font-extrabold tracking-wide drop-shadow-md">{{ packageDetails?.package_title }}
          </p>
          <p class="text-white text-2xl font-semibold mt-1">{{ packageDetails?.code }}</p>
          <p class="text-white text-lg mt-2">{{ moment(packageDetails?.start_at).format("MMM Do YY") }} -
            {{ moment(packageDetails?.end_at).format("MMM Do YY") }}</p>
        </div>
      </div>
      <!-- <div class="grid grid-cols-7 mt-10 px-5" v-if="packageDetails">
        <div v-for="(status, index) in statuses" :key="index" class="flex flex-wrap items-center w-full relative">
          <div class="flex items-center">
            <div
              :class="{ 'w-16 h-16 bg-green-500 rounded-full flex items-center justify-center': status.id <= packageDetails.status_of_package, 'w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center': status.id > packageDetails.status_of_package }">

              <p class="text-white">{{ index + 1 }}</p>
            </div>
            <div v-if="index < statuses.length - 1"
              :class="{ ' top-9  w-24 h-1 bg-green-500': status.id <= packageDetails.status_of_package, ' top-9 w-24 h-1 bg-gray-500': status.id > packageDetails.status_of_package }"
              class="-z-0"></div>
          </div>

          <p class="mt-2 text-lg font-semibold">{{ status.name }}</p>

        </div>
      </div> -->
      <!-- {{ packageDetails }} -->


  <div v-if="packageDetails" class="pt-10">
    <ul class="steps w-full steps-vertical lg:steps-horizontal lg:w-full mb-10">
      <li 
        v-for="(status, index) in statuses" 
        :key="index" 
        class="flex-1 text-center"
        :class="{ 'step step-success': status.id <= packageDetails.status_of_package, 'step': status.id > packageDetails.status_of_package }">
        
        <!-- Display status name -->
        <div class="text-xl font-semibold">{{ status.name }}</div>

        <!-- Conditionally show relevant details based on status -->
        <div class="text-sm text-gray-500 mt-1">
          <p v-if="status.name === 'Date'">{{ packageDetails.start_at }}</p>
          <p v-if="status.name === 'Imam'">{{ packageDetails.imam.name }}</p>
          <p v-if="status.name === 'Agent'">{{ packageDetails.agent.name }}</p>
          <p v-if="status.name === 'Flight'">Turkish Airlines</p>
          <p v-if="status.name === 'Bus'">Green Line Bus</p>
          <p v-if="status.name === 'Hotel'">Mövenpick Hotel</p>

          <!-- Shared Input Fields -->
          <div class="mt-2 space-y-3">
            <!-- Text input (Note) -->
            <div class="form-control">
              <label class="label">
                <span class="label-text text-sm ps-1">Note</span>
              </label>
              <input type="text" placeholder="Add a note" class="input input-bordered w-32 lg:w-48 input-sm" />
            </div>

            <!-- File input (Attachment) -->
            <div class="form-control">
              <label class="label">
                <span class="label-text text-sm ps-1">Attachment</span>
              </label>
              <input type="file" class="file-input file-input-bordered w-32 lg:w-48 file-input-sm" />
            </div>

            <!-- Checkbox (isApproved) -->
            <div class="form-control">
              <label class="cursor-pointer flex justify-start gap-4 label">
                <input type="checkbox" class="checkbox checkbox-primary checkbox-sm" />
                <span class="label-text text-sm">Is Approved</span>
              </label>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>






    </div>
  </div>
</template>

<script setup>

import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router'
// import { packages } from '@/stores/itinenary.ts'
import moment from 'moment'
const route = useRoute()
const packageID = route.params.id
const packageDetails = ref();
watch(() => route, () => {
  getPackage()
})
const getPackage = async () => {
  const { data } = await api().get('package/' + packageID)
  packageDetails.value = data.data
}
onMounted(() => {
  getPackage()
})
const statuses = [
  { id: 1, name: 'Date' },
  { id: 2, name: 'Imam' },
  { id: 3, name: 'Agent' },
  { id: 4, name: 'Flight' },
  { id: 5, name: 'Bus' },
  { id: 6, name: 'Hotel' },
  { id: 7, name: 'Final Review' },
  // { id: 8, name: 'Discontinued' }
];
</script>
