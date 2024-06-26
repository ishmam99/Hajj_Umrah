<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <div v-if="showDetails == false" class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <div class="flex justify-between items-center pt-4 pb-2">
        <p class="text-2xl text-yellow-600 font-bold">Volunteer Applicant List</p>
      </div>

      <hr />
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-white">
              <th class="p-2 text-left w-1/8">No.</th>
              <th class="p-2 text-left w-1/8">Name</th>
              <th class="p-2 text-left w-1/8">Email</th>
              <th class="p-2 text-left w-1/8">phone_number</th>
              <th class="p-2 text-left w-1/8">gender</th>
              <th class="p-2 text-left w-1/8">Job Title</th>
              <th class="p-2 text-left w-1/8">More Info</th>
            </tr>
          </thead>
          <tbody>
            <template
              v-for="(volunteerApplicant , index) in allVolunteerList"
              :key="volunteerApplicant.id"
            >
            
              <tr class="table-row">
                <td class="p-2 text-left w-1/8">{{ index+1 }}</td>
                <td class="p-2 text-left w-1/8">{{ volunteerApplicant.user.name }}</td>
                <td class="p-2 text-left w-1/8">{{ volunteerApplicant.user.email }}</td>
                <td class="p-2 text-left w-1/8">{{ volunteerApplicant.user.phone_no }}</td>
                <td class="p-2 text-left w-1/8">{{ volunteerApplicant.volunteer_jobs.gender }}</td>
                <td class="p-2 text-left w-1/8">{{ volunteerApplicant.volunteer_jobs.title }}</td>
                <td class="py-4 p-2 text-left">
                  <button @click="details(volunteerApplicant)" class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                    Details
                  </button>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="showDetails == true">
      <div class="flex justify-between items-center pt-4 pb-2">
        <p class="text-2xl text-yellow-600 font-bold">Volunteer Applicant List</p>
        <button @click="showDetails = false" class="bg-green-600 text-white rounded-md px-3 py-1.5">Back</button>
      </div>
      {{ volunteerDetails }}
    </div>
  </div>
</template>

<script setup>

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '/components/ui/dropdown-menu'

import { ref, onMounted, computed } from 'vue'
import { useVolunteerDashboardStore } from '@/stores/volunteerStore2.ts'

const showDetails = ref(false)
const volunteerDetails = ref()

const details = (volunteerApplicant) => {
  showDetails.value = true
  volunteerDetails.value = volunteerApplicant
}

const store = useVolunteerDashboardStore()
const registerVolunteerAppliedList = async () => {
  try {
    const { data } = await api().get('volunteer-job-apply-list')
    console.log(data)
    store.registerVolunteerAppliedList = data.data
    
  } catch (error) {
    console.log(error)
  }
}

const allVolunteerList = computed(() => {
  return store.registerVolunteerAppliedList.filter((item)=>item.status == 1)
})

onMounted(() => {
  registerVolunteerAppliedList()
})
</script>

<style>
.table-row:nth-child(even){
  background: white;
}
</style>
