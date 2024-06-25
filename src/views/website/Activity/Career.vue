<template>
  <DefaultLayout>
    <div
      class="px-20 pt-20 mt-5 py-5 bg-emerald-800 bg-[url('/src/assets/image/home/bg123.png')] bg-repeat shadow-xl"
    >
      <div class="pt-3 mx-36 pb rounded-xl bg-[#ffffff] border-blue-50 shadow-xl border-[3px]">
        <div class="flex items-center justify-center gap-2 font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path
              d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z"
            ></path>
          </svg>
          <p>Home</p>
          <p>/ Activities</p>
          <p class="text-emerald-800">/ Career</p>
        </div>
        <div class="rounded-lg flex items-center justify-center relative py-3">
          <h1 class="text-emerald-800 text-4xl font-bold">Career</h1>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-100 h-full py-5 flex items-center justify-center gap-5 px-20 w-full">
      <div class="space-y-8 w-3/4">
        <!-- Default job list view -->
        <div v-if="!selectedJob" class="grid lg:grid-cols-3 gap-5 py-10 px-[10%]">
          <div
            v-for="job in jobList"
            :key="job"
            class="p-5 rounded-md bg-white shadow-md flex flex-col gap-5 justify-center items-center"
          >
            <img
              src="@/assets/image/gallery/e1.jpg"
              alt=""
              class="rounded-full h-[100px] shadow-md"
            />
            <h1 class="font-bold text-lg text-blue-600 text-center">
              Job Title :
              <span class="text-black font-[400] text-base">
                {{ job.manage_organogram.job_title }}
              </span>
            </h1>
            <p class="font-bold text-lg text-blue-600 text-center">
              Application Deadline :
              <span class="text-black font-[400] text-base">{{ job.end_date }}</span>
            </p>
            <button
              @click="showJobDetails(job)"
              class="px-5 py-2 text-sm bg-[#1c2650] text-white w-full"
            >
              Details
            </button>
          </div>
        </div>

        <!-- Job details view -->
        <div v-else class="p-5 rounded-md bg-white shadow-md w-full">
          <button
            @click="selectedJob = null"
            class="flex gap-1 bg-green-500 text-white rounded-md px-3 py-1.5 font-semibold hover:drop-shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="flex"
              height="24"
              width="24"
              fill="rgba(255,255,255,1)"
            >
              <path
                d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 11H16V13H12V16L8 12L12 8V11Z"
              ></path>
            </svg>

            Back
          </button>
          <div class="flex flex-col items-center gap-5">
            <img
              src="@/assets/image/gallery/e1.jpg"
              alt=""
              class="rounded-md h-[200px] shadow-md"
            />
            <h1 class="font-bold text-2xl text-emerald-800">
              Job Title: {{ selectedJob.manage_organogram.job_title }}
            </h1>
            <p class="font-bold text-lg text-blue-600">
              Application Start Date :
              <span class="text-black font-[400] text-base"
                >Start Date: {{ selectedJob.start_date }}</span
              >
            </p>
            <p class="font-bold text-lg text-blue-600">
              Application End Date :
              <span class="text-black font-[400] text-base"
                >Start Date: {{ selectedJob.end_date }}</span
              >
            </p>
            <p class="text-lg">{{ selectedJob.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
import api from '@/config/api'
import { ref, onMounted } from 'vue'

// variable to store data from get api
const jobList = ref()

const selectedJob = ref(null)

// Get active job list Function
const activeJobList = async () => {
  try {
    const { data } = await api().get('active-job-list')
    jobList.value = data.data
    console.log(data.data, 'Here is the data')
  } catch (error) {
    console.error(error.message, 'Here is the issue')
  }
}

const showJobDetails = (job) => {
  selectedJob.value = job
}

onMounted(() => {
  activeJobList()
})
</script>

<style lang="scss" scoped></style>
