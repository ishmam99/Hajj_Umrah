<template>
  <div class="px-5 bg-slate-50 py-5">
    <div
      v-if="showDetails == false && showJobDetails == false"
      class="bg-white rounded-xl p-5 w-full shadow-md mt-5"
    >
      <div class="flex justify-between items-center pb-2">
        <p class="text-2xl text-yellow-600 font-bold">Active Volunteer Job List</p>
      </div>

      <hr />
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
      >
        <table class="w-full">
          <thead>
            <tr class="bg-white">
              <th class="p-2 text-left w-1/8">No</th>
              <th class="p-2 text-left w-1/8">Title</th>
              <th class="p-2 text-left w-1/8">Gender</th>
              <th class="p-2 text-left w-1/8">venue</th>
              <th class="p-2 text-left w-1/8">Date</th>
              <th class="p-2 text-left w-1/8">Time</th>
              <th class="p-2 text-left w-1/8">Show Volunteer</th>
              <th class="p-2 text-left w-1/8">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-row" v-for="(volunteerPost, index) in allVolunteerList" :key="index">
              <td class="py-4 p-2 w-1/8">{{ index + 1 }}</td>
              <td class="py-4 p-2 gap-2 w-1/8">
                <h3 class="font-bold">{{ volunteerPost.title }}</h3>
              </td>
              <td class="py-4 p-2 text-left w-1/8">{{ volunteerPost.gender }}</td>
              <td class="py-4 p-2 text-left w-1/8">{{ volunteerPost.venue }}</td>
              <td class="py-4 p-2 text-left w-1/8">{{ volunteerPost.date }}</td>
              <td class="py-4 p-2 text-left w-1/8">{{ volunteerPost.time }}</td>
              <td class="py-4 p-2 text-left w-1/8">
                <button
                  @click="details(volunteerPost)"
                  class="px-5 py-1.5 rounded-md bg-blue-600 text-sm text-white"
                >
                  View
                </button>
              </td>
              <td class="py-4 p-2 text-left w-1/8">
                <div
                  class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2"
                >
                  <DropdownMenu class="w-full">
                    <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>

                    <DropdownMenuContent>
                      <DropdownMenuItem @click="jobDetails(volunteerPost)" class="text-blue-600"
                        >Details</DropdownMenuItem
                      >
                      <DropdownMenuItem class="text-yellow-600">Edit</DropdownMenuItem>
                      <DropdownMenuItem
                        class="text-green-600"
                        @click="volunteerJobPost(volunteerPost.id)"
                        >Complete</DropdownMenuItem
                      >
                      <DropdownMenuItem class="text-red-600" @click="submitDelete()"
                        >Delete</DropdownMenuItem
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
