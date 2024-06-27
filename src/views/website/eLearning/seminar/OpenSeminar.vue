<template>
  <DefaultLayout>
    <div class="px-20 pt-20 mt-5 py-5 bg-green-800 bg-[url('/src/assets/image/home/bg123.png')] bg-repeat shadow-xl">
      <div class="pt-3 mx-36 pb rounded-xl bg-[#ffffff] border-blue-50 shadow-xl border-[3px]">
        <div class="flex items-center justify-center gap-2 font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path
              d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z"
            ></path>
          </svg>
          <p>Home</p>
          <p class="text-green-800">/ Learning Center / Seminar</p>
        </div>
        <div class="rounded-lg flex items-center justify-center relative py-3">
          <h1 class="text-green-800 text-4xl font-bold">Open Seminars</h1>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto p-4 py-10">
      <h1 class="text-3xl font-bold mb-4 text-center border-b pb-4">Open Seminars</h1>
      <div v-if="!showDetails" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div v-for="seminar in seminars" :key="seminar.id" class="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between pb-2">
          <div>
            <img :src="seminar.image" alt="Seminar Image" class="w-full h-48 object-cover">
            <div class="p-4">
              <h2 class="text-2xl font-bold">{{ seminar.name }}</h2>
              <p class="text-gray-600 text-lg">{{ seminar.details }}</p>
              <p class="text-gray-600 pt-1 font-semibold">Date: <span class="text-emerald-500">{{ seminar.date }} </span></p>
            </div>
          </div>
          <button @click="details(seminar)" class="text-center flex items-center justify-center bg-teal-600 hover:bg-cyan-600 font-semibold text-white py-1 w-1/3 mx-auto rounded-lg px-2 my-2">Details</button>
        </div>
      </div>
      <div v-else>
        <div class="flex justify-between items-center pt-4 pb-2">
          <p class="text-2xl text-green-800 font-bold">Seminar Details</p>
          <button @click="showDetails = false" class="bg-green-600 hover:bg-cyan-600 text-white rounded-md px-3 py-1.5 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 11H16V13H12V16L8 12L12 8V11Z"></path></svg>
            <span>Back</span>
          </button>
        </div>
        <div class="p-5 rounded-md shadow-lg">
          <div>
            <img :src="seminarDetails.image" alt="Seminar Image" class="h-60 w-full">
            <h3 class="text-xl font-bold py-3">{{ seminarDetails.name }}</h3>
          </div>
          <div>
            <p class="text-2xl my-3">Seminar Information</p>
            <p class="text-xl font-bold">Details: {{ seminarDetails.details }}</p>
            <p class="text-xl font-bold">Date: {{ seminarDetails.date }}</p>
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
const seminarDetails = ref(null)

const seminars = ref([
  {
    id: 1,
    image: '/src/assets/seminar/1.jpg',
    name: 'Understanding the Quran',
    date: '18th June, 2024',
    details: 'A comprehensive guide to the teachings and interpretation of the Quran.'
  },
  {
    id: 2,
    image: '/src/assets/seminar/2.jpg',
    name: 'The Life of Prophet Muhammad (PBUH)',
    date: '16th June, 2024',
    details: 'An in-depth look into the life and legacy of Prophet Muhammad (PBUH).'
  },
  {
    id: 3,
    image: '/src/assets/seminar/3.jpg',
    name: 'Fiqh and Islamic Jurisprudence',
    date: '28th June, 2024',
    details: 'Understanding the principles of Islamic law and its application in daily life.'
  },
  {
    id: 4,
    image: '/src/assets/seminar/4.jpg',
    name: 'Islamic History and Civilization',
    date: '12th September, 2024',
    details: 'Exploring the rich history and contributions of Islamic civilization.'
  },
  {
    id: 5,
    image: '/src/assets/seminar/5.jpg',
    name: 'Tafsir: Exegesis of the Quran',
    date: '22nd June, 2024',
    details: 'Studying the detailed exegesis and commentary of the Quran.'
  },
  {
    id: 6,
    image: '/src/assets/seminar/6.jpg',
    name: 'Hadith Studies',
    date: '18th August, 2024',
    details: 'An introduction to the study of Hadith literature and its significance in Islam.'
  },
  {
    id: 7,
    image: '/src/assets/seminar/1.jpg',
    name: 'Islamic Ethics and Morality',
    date: '21st July, 2024',
    details: 'Discussing the ethical and moral teachings of Islam.'
  },
  {
    id: 8,
    image: '/src/assets/seminar/3.jpg',
    name: 'Youth and Islam',
    date: '28th June, 2024',
    details: 'Engaging the youth with the principles and practices of Islam.'
  }
]);
const details = (seminar) => {
  showDetails.value = true
  seminarDetails.value = seminar
}
</script>

<style>
/* Add any additional styling here */
</style>
