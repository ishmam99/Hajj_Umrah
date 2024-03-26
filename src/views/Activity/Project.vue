<template>
  <div>
    <DefaultLayout>
      <div
        class="px-20 pt-20 mt-5 py-5 bg-cyan-800 bg-[url('/src/assets/image/home/bg123.png')] bg-repeat shadow-xl"
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
            <!-- <p>/ Volunteers</p> -->
            <p class="text-cyan-800">/ Projects</p>
          </div>
          <div class="rounded-lg flex items-center justify-center relative py-3">
            <h1 class="text-cyan-800 text-4xl font-bold">Projects</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 h-full py-5 flex gap-5 px-20 w-full">
        <div class="space-y-8 w-3/4">
          <div class="bg-white rounded-xl p-5 w-full">
            <h1 class="text-3xl underline py-3 mb-4">On Going Project</h1>
            <div class="min-w-[350px] min-h-[450px] overflow-hidden relative rounded-3xl">
              <img src="/src/assets/image/home/l4.png" alt="" class="w-full absolute top-0" />
              <div class="absolute z-10 bottom-0 p-5 text-white flex flex-col gap-2">
                <p class="text-xl text-white">20 JAN 2024</p>
                <h3 class="text-2xl font-extrabold">Youth Development Project</h3>
                <p class="font-semibold">Youth Development project of IDL Masjid</p>
                <router-link to="/activity/projects" class="w-full hover:pl-5 duration-300">
                  <button class="h-[50px] w-[250px] bg-cyan-800 rounded-xl">Go To Project</button>
                </router-link>
              </div>
            </div>
          </div>
          <div class="flex gap-6">
            <div class="bg-white rounded-xl p-5 w-[50%]">
              <h1 class="text-3xl underline py-3">Up Coming Projects</h1>
              <div class="class grid grid-cols-1 gap-5">
                <div
                  v-for="item in project"
                  class="border border-gray-699 p-5 flex flex-col gap-2 text-center rounded-md"
                >
                  <p
                    class="absolute text-white text-2xl font-bold p-6 bg-[#0000005d] m-2 rounded-xl"
                  >
                    Upcoming Projects
                  </p>
                  <img :src="item.image" alt="" class="w-full h-[50%] rounded-2xl" />
                  <h3 class="text-2xl font-bold">{{ item.title }}</h3>
                  <p class="text-sm font-semibold text-cyan-600">{{ item.date }}</p>
                  <p>{{ item.des }}</p>
                  <button class="h-[50px] w-full border bg-cyan-800 text-white rounded-md">
                    Register
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 w-[50%]">
              <h1 class="text-3xl underline py-3">Project History</h1>
              <div class="class grid grid-cols-1 gap-5">
                <div
                  v-for="item in history"
                  class="border border-gray-699 p-5 flex flex-col gap-2 text-center rounded-md"
                >
                  <p
                    class="absolute text-white text-2xl font-bold p-6 bg-[#0000005d] m-2 rounded-xl"
                  >
                    Project History
                  </p>
                  <img :src="item.image" alt="" class="w-full h-[50%] rounded-2xl" />
                  <h3 class="text-2xl font-bold">{{ item.title }}</h3>
                  <p class="text-sm font-semibold text-cyan-600">{{ item.date }}</p>
                  <p>{{ item.des }}</p>
                  <button class="h-[50px] w-full border bg-cyan-800 text-white rounded-md">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ActivityMore />
      </div>
    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from '/src/layouts/DefaultLayout.vue'

import ActivityMore from '/src/components/ActivityMore.vue'

import { ref } from 'vue'

const project = ref([
  {
    id: 1,
    title: 'Eco-Friendly and Sustainability Projects',
    date: '20 Jan 2024',
    image: '/src/assets/image/home/l3.jpeg',
    des: 'Elevating Communities through Eco-Friendly and Sustainability Projects.'
  },
  {
    id: 2,
    title: 'Interfaith Dialogues',
    date: '24 Jan 2024',
    image: '/src/assets/image/home/l2.jpg',
    des: 'Fostering Understanding through Interfaith Dialogues.'
  },
  {
    id: 3,
    title: 'Technology and Media Outreach',
    date: '28 Jan 2024',
    image: '/src/assets/image/home/l4.jpg',
    des: 'Empowering Communities through Innovative Media Outreach.'
  },
  {
    id: 4,
    title: 'Infrastructure Development',
    date: '20 Jan 2024',
    image: '/src/assets/image/home/l2.jpg',
    des: 'Transforming Communities through Infrastructure Development.'
  }
])
const history = ref([
  {
    id: 1,
    title: 'Health and Wellness Initiatives Project',
    date: '10 Jan 2024',
    image: '/src/assets/image/commitees/0.png',
    des: 'Nurturing Communities through Health and Wellness Initiatives.'
  },
  {
    id: 2,
    title: 'Humanitarian Projects',
    date: '14 Jan 2024',
    image: '/src/assets/image/commitees/1.png',
    des: 'Driving Change through Humanitarian Projects.'
  },
  {
    id: 3,
    title: 'Islamic Education Initiatives',
    date: '08 Jan 2024',
    image: '/src/assets/image/commitees/2.png',
    des: 'Empowering Minds through Islamic Education Initiatives.'
  },
  {
    id: 4,
    title: 'Community Outreach Project',
    date: '05 Jan 2024',
    image: '/src/assets/image/commitees/3.png',
    des: 'ConnectCatalyst: Bridging Communities through Outreach Initiatives.'
  }
])
</script>

<style lang="scss" scoped></style>
