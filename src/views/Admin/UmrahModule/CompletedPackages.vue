<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-cyan-700 font-bold pb-2">Upcoming Package List</p>
    </div>
    <hr />
    
    <div
    v-if="store.createNewPackage.length > 0"
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-lg">
            <th class="p-2 text-left">Package Code</th>
            <th class="p-2 text-left">Package ID</th>
            <th class="p-2 text-left">Package Title</th>
            <th class="p-2 text-left">Package Year</th>
            <th class="p-2 text-left">Origin Country</th>
            <th class="p-2 text-left">Origin City</th>
            <th class="p-2 text-left">Starting Date</th>
            <th class="p-2 text-left">Ending Date</th>
            <th class="p-2 text-left">Pax</th>
            <th class="p-2 text-left">Status</th>
            <!-- <th class="p-2 text-left">Action</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(event, index) in store.createNewPackage" :key="index" class="tableRowColor">
          
            <td class="py-4 p-2 gap-2">
              <h3 class="font-bold">{{ event.packageCode }}</h3>
            </td>
            <td class="py-4 p-2 flex items-center gap-2">
              <!-- <img :src="event.image" alt="" class="h-10" /> -->
              <p class="font-semibold">{{ event.packageId }}</p>
            </td>
            <td class="py-4 p-2 items-center gap-2">
              <p class="font-semibold">{{ event.packageTitle }}</p>
            </td>
            <td class="py-4 p-2 items-center gap-2">
              <p class="font-semibold">{{ event.packageYear }}</p>
            </td>
            <td>
              <p class="font-semibold text-sm">{{ event.country.name }}</p>
            </td>
            <td class="py-4 p-2 font-semibold">{{ event.city.name }}</td>
            <td class="py-4 p-2 font-semibold">{{ event.startDate }}</td>
            <td class="py-4 p-2 font-semibold">{{ event.endDate }}</td>
            <td class="py-4 p-2 font-semibold">{{ event.pax }}</td>
            <td class="py-4 p-2 font-semibold">{{ event.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
   
 

  </div>
</template>
<script setup>
import { useSocialStore } from '@/stores/SocialDashboard.ts'

const store = useSocialStore()
const packages = store.createNewPackage
</script>