<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { Separator } from '/components/ui/separator'
</script>

<template>
 <DefaultLayout>
    <div class="px-20 ml-10">
      <div class="bg-white">
        <div class="flex items-center gap-2">
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
          <p>Home / Learning Center /</p>
          
          <p class="text-yellow-500">Onsite Learning Center</p>
        </div>
        <div class="bg-white rounded-lg relative py-3">
          <h1 class="text-yellow-500 text-4xl font-semibold">Onsite Learning Center</h1>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <Separator />
    <div class="flex item-center justify-center py-3 bg-gray-100/50">
        <div class="grid grid-cols-3 gap-3 my-5 py-5 px-4">
          <router-link class="view-all" to="/learing-center/education-form">
            <div class=" bg-[url('../assets/image/home/l2.jpg')] h-[400px] w-full bg-top bg-cover rounded-xl bg-origin-content transition-transform transform group-hover:scale-105 opacity-100 duration-300 cursor-pointer">
                <div class="flex flex-col items-center justify-center h-full bg-opacity-25 rounded-xl bg-slate-500 text-white">
                    <p class="text-4xl px-10 font-semibold mb-2">Full Time Hifz</p>
                </div>
            </div>
          </router-link>
          
          <router-link class="view-all" to="/learing-center/education-form">
            <div class=" bg-[url('../assets/image/home/l3.jpeg')] h-[400px] w-full bg-top bg-cover rounded-xl bg-origin-content transition-transform transform group-hover:scale-105 opacity-100 duration-300 cursor-pointer">
                <div class="flex flex-col items-center justify-center h-full bg-opacity-25 rounded-xl bg-slate-500 text-white">
                    <p class="text-4xl px-10 font-semibold mb-2">Part Time Hifz</p>
                </div>
            </div>
          </router-link>

          <router-link class="view-all" to="/learing-center/education-form">
            <div class=" bg-[url('../assets/image/home/l4.jpg')] h-[400px] w-full bg-top bg-cover rounded-xl bg-origin-content transition-transform transform group-hover:scale-105 opacity-100 duration-300 cursor-pointer">
                <div class="flex flex-col items-center justify-center h-full bg-opacity-25 rounded-xl bg-slate-500 text-white">
                    <p class="text-4xl px-10 font-semibold mb-2">Summer School</p>
                </div>
            </div>
          </router-link>

          <router-link class="view-all" to="/learing-center/education-form">
            <div class=" bg-[url('../assets/image/home/l5.png')] h-[400px] w-full bg-top bg-cover rounded-xl bg-origin-content transition-transform transform group-hover:scale-105 opacity-100 duration-300 cursor-pointer">
                <div class="flex flex-col items-center justify-center h-full bg-opacity-25 rounded-xl bg-slate-500 text-white">
                    <p class="text-4xl px-10 font-semibold mb-2">Sunday School</p>
                </div>
            </div>
          </router-link>

          <router-link class="view-all" to="/learing-center/education-form">
            <div class=" bg-[url('../assets/image/home/l6.jpg')] h-[400px] w-full bg-top bg-cover rounded-xl bg-origin-content transition-transform transform group-hover:scale-105 opacity-100 duration-300 cursor-pointer">
                <div class="flex flex-col items-center justify-center h-full bg-opacity-25 rounded-xl bg-slate-500 text-white">
                    <p class="text-3xl px-10 font-semibold mb-2">Special Needs School</p>
                </div>
            </div>
          </router-link>

          <router-link class="view-all" to="/learing-center/education-form">
            <div class=" bg-[url('../assets/image/home/l7.jpg')] h-[400px] w-full bg-top bg-cover rounded-xl bg-origin-content transition-transform transform group-hover:scale-105 opacity-100 duration-300 cursor-pointer">
                <div class="flex flex-col items-center justify-center h-full bg-opacity-25 rounded-xl bg-slate-500 text-white">
                    <p class="text-4xl px-10 font-semibold mb-2">Fityah Program</p>
                </div>
            </div>
          </router-link>
        </div>
    </div>
  </DefaultLayout>
</template>
