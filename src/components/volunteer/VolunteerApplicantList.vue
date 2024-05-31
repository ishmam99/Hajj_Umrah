<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <p class="text-2xl font-bold py-3 border-b">Volunteer Applicant List</p>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <div class="flex justify-between items-center pt-4 pb-2">
        <p class="text-2xl text-yellow-600 font-bold">All Volunteer Application</p>
      </div>

      <hr />
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-white">
              <th class="p-2 text-center">No.</th>
              <th class="p-2 text-center">Name</th>
              <th class="">Volunteer Job</th>
              <th class="">Expertise Area</th>
              <!-- <th class="p-2 text-center">Additional Interest Area</th> -->
              <th class="p-2 text-center">More Info</th>
              <th class="p-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <template
              v-for="(volunteerApplicant , index) in allVolunteerList"
              :key="volunteerApplicant.id"
            >
              <tr class="table-row">
        
                <td class="py-4 p-2 text-center">{{ index+1 }}</td>
                <td class="py-4 p-2 text-center">{{ volunteerApplicant.user.name }}</td>
                <td class="py-4 p-2 text-center">{{ volunteerApplicant.volunteer_jobs.title }}</td>
                <td class="py-4 p-2 text-center">N/A</td>
                <!-- <td class="py-4 p-2 text-center">
                  {{ volunteerApplicant.additionalInterestArea }}
                </td> -->

                <td class="py-4 p-2 text-center">
                  <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                    <Dialog>
                      <DialogTrigger> Details </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            <div class="font-bold text-xl mb-2">Applicant Details</div>
                          </DialogTitle>
                          <DialogDescription>
                            <!-- <img src="/src/assets/image/home/l4.jpg" alt="" /> -->
                            <div>
                              <h1 class="font-semibold mt-2 text-lg text-black">Description</h1>
                              <!-- {{ volunteerApplicant.user }} -->
                              <p>Name: {{ volunteerApplicant.user.name }}</p>
                              <p>Email: {{ volunteerApplicant.user.email }}</p>
                              <p>Phone No: {{ volunteerApplicant.user.phone_no }}</p>
                              <P>Expertise :</P>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </button>
                </td>

                <td class="py-4 p-2 text-center">
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
  </div>
</template>

<script setup>

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '/components/ui/dialog'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '/components/ui/dropdown-menu'

import { ref, watch, onMounted, computed } from 'vue'
import { useVolunteerDashboardStore } from '@/stores/volunteerStore2.ts'

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



onMounted(() => {
  registerVolunteerAppliedList()
})
</script>

<style>
.table-row:nth-child(even){
  background: white;
}
</style>
