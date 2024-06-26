<template>
  <DefaultLayout>
    <div
      class="px-20 pt-20 mt-5 py-5 bg-green-800 bg-[url('/src/assets/image/home/bg123.png')] bg-repeat shadow-xl"
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
          <p class="text-green-800">/ Learning Center / Program</p>
        </div>
        <div class="rounded-lg flex items-center justify-center relative py-3">
          <h1 class="text-green-800 text-4xl font-bold">Programs</h1>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto p-4 py-10">
      <h1 class="text-3xl font-bold mb-4 text-center border-b pb-4">Programs</h1>
      <div v-if="!showDetails" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="program in programs" :key="program.id" class="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between pb-2">
          <div>
            <img :src="program.image" alt="Program Image" class="w-full h-48 object-cover">
            <div class="p-4">
              <h2 class="text-2xl font-bold">{{ program.name }}</h2>
              <p class="text-gray-600 text-lg">{{ program.details }}</p>
              <p class="text-gray-600 pt-1 font-semibold">Start Date: <span class="text-emerald-500">{{ program.startDate }}</span></p>
              <p class="text-gray-600 pt-1 font-semibold">End Date: <span class="text-emerald-500">{{ program.endDate }}</span></p>
            </div>
          </div>
          <button @click="details(program)" class="text-center flex items-center justify-center bg-teal-600 hover:bg-cyan-600 font-semibold text-white py-1 w-1/3 mx-auto rounded-lg px-2 my-2">Details</button>
        </div>
      </div>
      <div v-else>
        <div class="flex justify-between items-center pt-4 pb-2">
          <p class="text-2xl text-green-800 font-bold">Program Details</p>
          <button @click="showDetails = false" class="bg-green-600 text-white rounded-md px-3 py-1.5">Back</button>
        </div>
        <div class="p-5 rounded-md shadow-lg">
          <div>
            <img :src="programDetails.image" alt="Program Image" class="h-60 w-full">
            <h3 class="text-xl font-bold py-3">{{ programDetails.name }}</h3>
          </div>
          <div>
            <p class="text-2xl my-3">Program Information</p>
            <p class="text-xl font-bold">Details: {{ programDetails.details }}</p>
            <p class="text-xl font-bold">Start Date: {{ programDetails.startDate }}</p>
            <p class="text-xl font-bold">End Date: {{ programDetails.endDate }}</p>
          </div>
          <div class="mt-6">
            <button class="text-center flex items-center justify-center bg-teal-600 hover:bg-cyan-600 font-semibold text-white py-2 w-1/3 mx-auto rounded-lg px-2 " >Register</button>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
import { ref } from 'vue';

const showDetails = ref(false)
const programDetails = ref(null)

const programs = ref([
  {
    id: 1,
    image: '/src/assets/program/1.jpg',
    name: 'Quranic Studies',
    startDate: '1st July, 2024',
    endDate: '31st December, 2024',
    details: 'In-depth study of the Quran, its interpretation, and application in daily life.'
  },
  {
    id: 2,
    image: '/src/assets/program/2.jpg',
    name: 'Hadith Studies',
    startDate: '15th August, 2024',
    endDate: '15th February, 2025',
    details: 'Comprehensive study of Hadith, understanding the sayings and actions of the Prophet Muhammad (PBUH).'
  },
  {
    id: 3,
    image: '/src/assets/program/3.jpg',
    name: 'Fiqh and Islamic Jurisprudence',
    startDate: '10th September, 2024',
    endDate: '10th March, 2025',
    details: 'Study of Islamic law and jurisprudence, including various schools of thought.'
  },
  {
    id: 4,
    image: '/src/assets/program/3.jpg',
    name: 'Islamic History',
    startDate: '5th October, 2024',
    endDate: '5th April, 2025',
    details: 'Exploring the rich history of Islam from its inception to modern times.'
  },
  {
    id: 5,
    image: '/src/assets/program/1.jpg',
    name: 'Arabic Language and Grammar',
    startDate: '20th November, 2024',
    endDate: '20th May, 2025',
    details: 'Learning the Arabic language, its grammar, and its use in Islamic texts.'
  },
  {
    id: 6,
    image: '/src/assets/program/2.jpg',
    name: 'Islamic Theology',
    startDate: '12th December, 2024',
    endDate: '12th June, 2025',
    details: 'Study of Islamic beliefs, theology, and philosophy.'
  }
]);

const details = (program) => {
  showDetails.value = true
  programDetails.value = program
}
</script>

<style>
/* Add any additional styling here */
</style>
