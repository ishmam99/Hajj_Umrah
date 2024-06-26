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
              <th class="p-2 text-left w-1/8">Action</th>
            </tr>
          </thead>
          <tbody>
            <template
              v-for="(volunteerApplicant , index) in  store.registerVolunteerAppliedList"
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

                <td class="py-4 p-2 text-left">
                  <div
                  class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2"
                >
                  <DropdownMenu class="w-full">
                    <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        class="text-yellow-600"
                        @click="volunteerConfirm(volunteerApplicant.id)"
                        >Confirm</DropdownMenuItem
                      >
                      <DropdownMenuItem 
                        class="text-blue-600"
                       @click="volunteerReject(volunteerApplicant.id)"
                        >Reject</DropdownMenuItem
                        >
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M12 16L6 10H18L12 16Z"></path>
                  </svg>
                </div>
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
      <!-- {{  volunteerDetails }} -->
      
      <div class="p-5 rounded-md shadow-lg">
        <div>
          <img :src="volunteerDetails.volunteer_jobs.image" alt="" class="h-60 w-full">
          <h3 class="text-xl font-bold py-3">{{ volunteerDetails.volunteer_jobs.title }}</h3>
        </div>
        <div>
          <p class="text-2xl my-3">Applicant Information</p>
          <p class="text-xl font-bold">Name: {{ volunteerDetails.user.name }}</p>
        </div>
      </div>
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
  return store.registerVolunteerAppliedList.filter((item)=>item.status == 0)
})

const volunteerConfirm = async (id) => {
  try {
    const { data } = await api().post(`volunteer-job-apply-update-status/${id}`, {
      status:1
    })
    console.log(data)
    registerVolunteerAppliedList()
  } catch (error) {
    console.log(error)
  }
}

const volunteerReject = async (id) => {
  try {
    const { data } = await api().post(`volunteer-job-apply-update-status/${id}`, {
      status:2
    })
    console.log(data)
    registerVolunteerAppliedList()
  } catch (error) {
    console.log(error)
  }
}



onMounted(() => {
  registerVolunteerAppliedList()
})
</script>

<style>
.table-row:nth-child(even){
  background: white;
}
</style>
