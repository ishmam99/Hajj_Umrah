<template>
  <div class="px-5 bg-white py-5 rounded-md shadow-md">
    <p class="text-2xl font-bold py-3 border-b">Volunteer Application List</p>
    <hr />
    <table class="table-auto w-full">
      <thead>
        <tr class="bg-white">
          <th class="p-2 text-center">No.</th>
          <th class="">Volunteer Job</th>
          <th class="p-2 text-center">Start Time</th>
          <th class="p-2 text-center">Start date</th>
          <th class="p-2 text-center">Total Hours</th>
          <!-- <th class="p-2 text-center">Additional Interest Area</th> -->
          <th class="p-2 text-center">Status</th>
        </tr>
      </thead>
      <tbody>
        <template
          v-for="(volunteerApplicant, index) in store.volunteerList"
          :key="volunteerApplicant.id"
        >
          <tr class="table-row">
            <td class="py-4 p-2 text-center">{{ index + 1 }}</td>
            <td class="py-4 p-2 text-center">{{ volunteerApplicant.volunteer_jobs.title }}</td>
            <td class="py-4 p-2 text-center">{{ volunteerApplicant.volunteer_jobs.time }}</td>
            <td class="py-4 p-2 text-center">{{ volunteerApplicant.volunteer_jobs.date }}</td>
            <td class="py-4 p-2 text-center">{{ volunteerApplicant.volunteer_jobs.total_working_time }}</td>
            <td class="py-4 p-2 text-center">
              <p v-if="volunteerApplicant.status == 1" class="text-green-600 font-semibold">Approved</p>
              <p v-if="volunteerApplicant.status == 2" class="text-green-600 font-semibold">Rejected</p>
              <p v-if="volunteerApplicant.status == 0" class="text-yellow-600 font-semibold">Pending</p>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
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

onMounted(() => {
  VolunteerAppliedList()
})
</script>
