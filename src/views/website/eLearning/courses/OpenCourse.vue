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
        <p class="text-green-800">/ Learning Center / Course</p>
      </div>
      <div class="rounded-lg flex items-center justify-center relative py-3">
        <h1 class="text-green-800 text-4xl font-bold">Open Courses</h1>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto p-4 py-10">
    <h1 class="text-3xl font-bold mb-4 text-center border-b pb-4">Open Courses</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <div v-for="seminar in seminars" :key="seminar.id" class="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between pb-2">
        <div>
          <img :src="seminar.image" alt="Seminar Image" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-2xl font-bold">{{ seminar.name }}</h2>
          <p class="text-gray-600 text-lg">{{ seminar.details }}</p>
          <p class="text-gray-600 pt-1 font-semibold">Date: <span class="text-emerald-500">{{ seminar.date }} </span></p>
        </div>
        </div>
        <button class="text-center flex items-center justify-center bg-teal-600 hover:bg-cyan-600 font-semibold text-white py-1 w-1/3 mx-auto rounded-lg px-2 my-2">Apply</button>
      </div>
    </div>
  </div>
  </DefaultLayout>
</template>

<script setup>
 import DefaultLayout from '/src/layouts/DefaultLayout.vue'
import { ref } from 'vue';

const seminars = ref([
  {
    id: 1,
    image: '/src/assets/course/2.jpg',
    name: 'Introduction to IDL',
    date: '18th July, 2024',
    details: 'Beginner-level course covering the basics of IDL programming and environment setup.'
  },
  {
    id: 2,
    image: '/src/assets/course/1.jpg',
    name: 'IDL Programming Essentials',
    date: '22th July, 2024',
    details: 'Learn essential programming concepts in IDL, including variables, loops, and functions.'
  },
  {
    id: 3,
    image: '/src/assets/course/3.jpg',
    name: 'Data Analysis with IDL',
    date: '14th September, 2024',
    details: 'Explore techniques for data analysis and visualization using IDL.'
  },
  {
    id: 4,
    image: '/src/assets/course/4.jpg',
    name: 'Scientific Computing with IDL',
    date: '18th August, 2024',
    details: 'Learn how to apply IDL in scientific computing and research scenarios.'
  },
  {
    id: 5,
    image: '/src/assets/course/5.jpg',
    name: 'Advanced IDL Techniques',
    date: '05th June, 2024',
    details: 'Delve into advanced programming techniques and optimization strategies in IDL.'
  },
  {
    id: 6,
    image: '/src/assets/course/6.jpg',
    name: 'Building Interactive Applications with IDL',
    date: '18th November, 2024',
    details: 'Create interactive applications and user interfaces using IDL.'
  },
  {
    id: 7,
    image: '/src/assets/course/1.jpg',
    name: 'IDL for Data Visualization',
    date: '19th July, 2024',
    details: 'Master the creation of complex data visualizations and graphical representations in IDL.'
  },
  {
    id: 8,
    image: '/src/assets/course/2.jpg',
    name: 'Optimizing IDL Code',
    date: '20th August, 2024',
    details: 'Learn best practices for writing efficient and optimized code in IDL.'
  }
]);
</script>

<style>
/* Add any additional styling here */
</style>
