<template>
    <div class="px-5 bg-white py-5 rounded-md shadow-md">
      <p class="text-2xl font-bold py-3 border-b">My Volunteer List</p>
      <hr />
      <table v-if="approverdVolunteerList.length >0 " class="table-auto w-full">
        <thead>
          <tr class="bg-white">
            <th class="p-2 text-center">No.</th>
            <th class="">Volunteer Job</th>
            <th class="p-2 text-center">Start Time</th>
            <th class="p-2 text-center">Start date</th>
            <th class="p-2 text-center">Total Hours</th>
            <!-- <th class="p-2 text-center">Additional Interest Area</th> -->
            <th class="p-2 text-center">Details</th>
          </tr>
        </thead>
        <tbody>
          <template
            v-for="(volunteerApplicant, index) in approverdVolunteerList"
            :key="volunteerApplicant.id"
          >
            <tr class="table-row">
              <td class="py-4 p-2 text-center">{{ index + 1 }}</td>
              <td class="py-4 p-2 text-center">{{ volunteerApplicant.volunteer_jobs.title }}</td>
              <td class="py-4 p-2 text-center">{{ volunteerApplicant.volunteer_jobs.time }}</td>
              <td class="py-4 p-2 text-center">{{ volunteerApplicant.volunteer_jobs.date }}</td>
              <td class="py-4 p-2 text-center">{{ volunteerApplicant.volunteer_jobs.total_working_time }}</td>
              <button>Details</button>
            </tr>
          </template>
        </tbody>
      </table>
      <div v-else class="text-3xl text-center font-semibold pt-2">
        You have not been confirmed
      </div>
    </div>
  </template>
  <script setup>
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import MembarSidebar from '/src/views/Member/MembarSidevar.vue'
  import { ref, watch, onMounted, computed } from 'vue'
  import { useMemberStore } from '@/stores/memberStore.ts'
  
  const store = useMemberStore()
  
  const VolunteerAppliedList = async () => {
    try {
      const { data } = await api().get('volunteer-job-apply-list')
      console.log(data)
      store.volunteerList = data.data
    } catch (error) {
      console.log(error)
    }
}

const approverdVolunteerList = computed(()=> {
    return store?.volunteerList.filter((item)=>item.volunteer_jobs.status == 2)
})
  
  onMounted(() => {
    VolunteerAppliedList()
  })
  </script>
  