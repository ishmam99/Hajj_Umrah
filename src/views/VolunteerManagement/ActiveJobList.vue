<template>
  <div class="px-5 bg-slate-50 py-5">
    <div
      v-if="showDetails == false && showJobDetails == false"
      class="bg-white rounded-xl p-5 w-full shadow-md mt-5"
    >
      <div class="flex justify-between items-center pb-2">
        <p class="text-2xl text-yellow-600 font-bold">Registered Customers Package List</p>
      </div>

      <hr />
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
      >
        <table class="w-full">
          <thead>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/8">No.</th>
                <th class="p-2 text-left w-1/8">Country</th>
                <th class="p-2 text-left w-1/8">City</th>
                <th class="p-2 text-left w-1/8">Package Code</th>
                <th class="p-2 text-left w-1/8">Package Id</th>
                <th class="p-2 text-left w-1/8">Registered Customer</th>
                <th class="p-2 text-left w-1/8">More Info</th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-row">
                <td class="p-2 text-left w-1/8">01</td>
                <td class="p-2 text-left w-1/8">USA</td>
                <td class="p-2 text-left w-1/8">LA(LAX)</td>
                <td class="p-2 text-left w-1/8">01000</td>
                <td class="p-2 text-left w-1/8">U-2027-01000</td>
                <td class="p-2 text-left w-1/8">10 </td>
                <td class="py-4 p-2 text-left">
                  <button
                    @click="details(volunteerApplicant)"
                    class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm"
                  >
                    Details
                  </button>
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>

    <div v-if="showDetails == true">
      <div class="flex justify-between items-center pt-4">
        <p class="text-2xl text-yellow-600 font-bold">Volunteer Applicant Details</p>
        <button @click="showDetails = false" class="bg-green-600 text-white rounded-md px-3 py-1.5">
          Back
        </button>
      </div>
      <div v-if="volunteerDetails?.applications.length > 0">
        <div
          v-for="(item, index) in volunteerDetails.applications"
          :key="item"
          class="p-5 rounded-md shadow-lg bg-white mt-2"
        >
          <p class="text-2xl mb-3 border-b font-semibold">
            Applicant No. {{ index + 1 }} Information
          </p>
          <table class="table-auto w-full bg-slate-200 border">
            <!-- {{ volunteerDetails.applications }}/ -->
            <tbody>
              <tr>
                <th class="p-2 text-left w-1/3">Name:</th>
                <td class="p-2 text-left w-2/3">{{ item?.user?.name }}</td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Email:</th>
                <td class="p-2 text-left w-2/3">{{ item?.user?.email }}</td>
              </tr>
              <tr>
                <th class="p-2 text-left w-1/3">Phone:</th>
                <td class="p-2 text-left w-2/3">
                  {{ item?.user?.phone_no ? item?.user?.phone_no : '---' }}
                </td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Gender:</th>
                <td class="p-2 text-left w-2/3">
                  {{ item?.user?.gender ? item?.user?.gender : '---' }}
                </td>
              </tr>
              <tr>
                <th class="p-2 text-left w-1/3">Country:</th>
                <td class="p-2 text-left w-2/3">
                  {{ item?.user?.country ? item?.user?.country : '---' }}
                </td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Address:</th>
                <td class="p-2 text-left w-2/3">
                  {{ item?.user?.address ? item?.user?.address : '---' }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p v-else class="text-2xl font-semibold text-center">No Application Submitted</p>
    </div>

    <div v-if="showJobDetails == true">
      <div class="flex justify-between items-center pt-4 pb-2">
        <p class="text-2xl text-yellow-600 font-bold">Volunteer Job Details</p>
        <button
          @click="showJobDetails = false"
          class="bg-green-600 text-white rounded-md px-3 py-1.5"
        >
          Back
        </button>
      </div>
      <table class="table-auto w-full bg-slate-200 border">
        <tbody>
          <tr>
            <th class="p-2 text-left w-1/3">TiTle:</th>
            <td class="p-2 text-left w-2/3">{{ JobData?.title }}</td>
          </tr>
          <tr class="bg-white">
            <th class="p-2 text-left w-1/3">Job Description:</th>
            <td class="p-2 text-left w-2/3">{{ JobData?.description }}</td>
          </tr>
          <tr>
            <th class="p-2 text-left w-1/3">venue:</th>
            <td class="p-2 text-left w-2/3">
              {{ JobData?.venue ? JobData?.venue : '---' }}
            </td>
          </tr>
          <tr class="bg-white">
            <th class="p-2 text-left w-1/3">Starting Date:</th>
            <td class="p-2 text-left w-2/3">
              {{ JobData?.date ? JobData?.date : '---' }}
            </td>
          </tr>
          <tr>
            <th class="p-2 text-left w-1/3">Starting Time:</th>
            <td class="p-2 text-left w-2/3">
              {{ JobData?.time ? JobData?.time : '---' }}
            </td>
          </tr>
          <tr class="bg-white">
            <th class="p-2 text-left w-1/3">Total working Time:</th>
            <td class="p-2 text-left w-2/3">
              {{ JobData?.total_working_time ? JobData?.total_working_time : '---' }}
            </td>
          </tr>
          <tr class="bg-white">
            <th class="p-2 text-left w-1/3">Responsibilities:</th>
            <td class="p-2 text-left w-2/3">
              {{ JobData?.responsibilities ? JobData?.responsibilities : '---' }}
            </td>
          </tr>
          <tr class="bg-white">
            <th class="p-2 text-left w-1/3">Gender:</th>
            <td class="p-2 text-left w-2/3">
              {{ JobData?.gender ? JobData?.gender : '---' }}
            </td>
          </tr>
          <tr class="bg-white">
            <th class="p-2 text-left w-1/3">Benefits:</th>
            <td class="p-2 text-left w-2/3">
              {{ JobData?.benefits ? JobData?.benefits : '---' }}
            </td>
          </tr>
          <tr class="bg-white">
            <th class="p-2 text-left w-1/3">Qualification:</th>
            <td class="p-2 text-left w-2/3">
              {{ JobData?.qualification ? JobData?.qualification : '---' }}
            </td>
          </tr>
        </tbody>
      </table>
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
import { useAdminStore } from '/src/stores/adminStore.ts'

const store = useAdminStore()
const showDetails = ref(false)
const volunteerDetails = ref()
const showJobDetails = ref(false)
const JobData = ref()

const jobDetails = (volunteerPost) => {
  showJobDetails.value = true
  JobData.value = volunteerPost
}

const details = (volunteerPost) => {
  showDetails.value = true
  volunteerDetails.value = volunteerPost
}

const volunteerJobList = async () => {
  try {
    const { data } = await api().get('volunteer-job-applicant')
    store.volunteerWithUser = data.data
    console.log(store.volunteerWithUser)
  } catch (error) {
    console.log(error)
  }
}

const allVolunteerList = computed(() => {
  return store.volunteerWithUser.filter((item) => item.job_status == 'Approved')
})

const volunteerJobPost = async (id) => {
  console.log(store.volunteerJobList, 'yo')
  try {
    const { data } = await api().post(`volunteer-update-job-status/${id}`, {
      job_status: 'Complete'
    })
    toast({
      title: 'Success',
      description: 'Volunteer posted successfully!'
    })
  } catch (error) {
    console.log(error)
  }
}

const volunteerConfirm = async (id) => {
  try {
    const { data } = await api().post(`volunteer-job-apply-update-status/${id}`, {
      status: 1
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
      status: 2
    })
    console.log(data)
    registerVolunteerAppliedList()
  } catch (error) {
    console.log(error)
  }
}

const volunteerComplete = async (id) => {
  try {
    const { data } = await api().post(`volunteer-job-apply-update-status/${id}`, {
      status: 3
    })
    console.log(data)
    registerVolunteerAppliedList()
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  volunteerJobList()
})
</script>

<style>
.table-row:nth-child(even) {
  background: white;
}
</style>
