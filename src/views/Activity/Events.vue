<template>
    <div>
      <DefaultLayout>
        <!-- <div class="px-20 pt-20 mt-5 py-5 bg-emerald-800 bg-[url('../assets/image/home/bg123.png')] bg-repeat shadow-xl">
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
              <p class="text-emerald-800">/ Events</p>
            </div>
            <div class="rounded-lg flex items-center justify-center relative py-3">
              <h1 class="text-emerald-800 text-4xl font-bold">Add Events</h1>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div> -->
        <div class="bg-gray-100 pt-20 mt-5 h-full py-5 flex gap-5 px-20 w-full">
          <div class="space-y-8 w-3/4">
            <div class="bg-white rounded-xl p-5 w-full">
              <!-- <h1 class="text-3xl underline font-semibold py-3">Active Events</h1> -->
              <div class="min-w-[350px] min-h-[500px] overflow-hidden relative rounded-3xl">
                <img src="/src/assets/image/home/e1.png" alt="" class="w-full h-full absolute top-0">
                <div class="absolute z-10 bottom-0 mb-4 p-5 text-white flex flex-col gap-2">
                    <p class="text-xl text-yellow-600">20 JAN 2024</p>
                    <h3 class="text-2xl font-bold">Feed The Hungry</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.</p>
                    <!-- <button class="h-[50px] w-[250px] border border-white rounded-xl">Go To Event</button> -->
                </div>
              </div>
            </div>
            <!-- <div class="bg-white rounded-xl p-5 w-full">
              <h1 class="text-3xl font-semibold underline py-3">Up Coming Events</h1>
              <div class="class grid grid-cols-3 gap-5">
                <div v-for="item in event" class="border border-gray-600 p-5 flex flex-col gap-2 text-center rounded-md">
                    <img :src="item.image" alt="" class="w-full">
                    <h3 class="text-2xl font-bold">{{ item.title }}</h3>
                    <p class="text-sm font-semibold text-yellow-600">{{ item.date }}</p>
                    <p>{{ item.des }}</p>
                    <button class="h-[50px] w-full border border-gray-600 rounded-md">Register</button>
                </div>
              </div>
            </div> -->
            <!-- <div class="bg-white rounded-xl p-5 w-full">
              <h1 class="text-3xl font-semibold underline py-3">Event History</h1>
              <div class="class grid grid-cols-3 gap-5">
                <div v-for="item in event" class="border border-gray-600 p-5 flex flex-col gap-2 text-center rounded-md">
                    <img :src="item.image" alt="" class="w-full">
                    <h3 class="text-2xl font-bold">{{ item.title }}</h3>
                    <p class="text-sm font-semibold text-yellow-600">{{ item.date }}</p>
                    <p>{{ item.des }}</p>
                </div>
              </div>
            </div> -->

          </div>
         <ActivityMore />
        </div>
      </DefaultLayout>
    </div>
  </template>
  
  <script setup>
  import DefaultLayout from '../../layouts/DefaultLayout.vue'
  import ActivityMore from '../../components/ActivityMore.vue'
  import { ref } from 'vue'

const event =ref([
    {
        id: 1,
        title: 'Feed the hungry',
        date: '20 jan 2024',
      image: '/src/assets/image/home/h1.png',
      des : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.'
    },
    {
        id: 2,
        title: 'Help the weak',
        date: '24 jan 2024',
        image: '/src/assets/image/home/h2.png',
        des : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.'
    },
    {
        id: 3,
        title: 'Comfort the sick',
        date: '28 jan 2024',
        image: '/src/assets/image/home/h3.png',
        des : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.'
    },
    {
        id: 4,
        title: 'Comfort the sick',
        date: '28 jan 2024',
        image: '/src/assets/image/home/h3.png',
        des : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.'
    },
    {
      id: 5,
      title: 'Educate children',
      date: '20 jan 2024',
      image: '/src/assets/image/home/h1.png',
      des : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.'
    },
    {
        id: 5,
        title: 'Help the weak',
        date: '24 jan 2024',
        image: '/src/assets/image/home/h2.png',
        des : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.'
    },
  ])
  </script>
  
  <style lang="scss" scoped></style>