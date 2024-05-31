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
          <!-- <p>/ Volunteers</p> -->
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
        <div class="grid lg:grid-cols-3 gap-5 py-10 px-[10%]">
          <div
            class="p-5 rounded-md bg-white shadow-md flex flex-col gap-5 justify-center items-center"
          >
            <img
              src="@/assets/image/gallery/e1.jpg"
              alt=""
              class="rounded-full h-[100px] shadow-md"
            />
            <h1 class="font-bold text-lg text-blue-600 text-center">
              Job Title :
              <span class="text-black font-[400] text-base">Imam</span>
            </h1>
            <p class="font-bold text-lg text-blue-600 text-center">
              Application Deadline :
              <span class="text-black font-[400] text-base">15 September, 2023</span>
            </p>
            <button class="px-5 py-2 text-sm bg-[#1c2650] text-white w-full">Details</button>
          </div>
          <div
            class="p-5 rounded-md bg-white shadow-md flex flex-col gap-5 justify-center items-center"
          >
            <img
              src="@/assets/image/gallery/e3.webp"
              alt=""
              class="rounded-full h-[100px] shadow-md"
            />
            <h1 class="font-bold text-lg text-blue-600 text-center">
              Job Title :
              <span class="text-black font-[400] text-base">Teacher</span>
            </h1>
            <p class="font-bold text-lg text-blue-600 text-center">
              Application Deadline :
              <span class="text-black font-[400] text-base">15 September, 2023</span>
            </p>
            <button class="px-5 py-2 text-sm bg-[#1c2650] text-white w-full">Details</button>
          </div>
          <div
            class="p-5 rounded-md bg-white shadow-md flex flex-col gap-5 justify-center items-center"
          >
            <img
              src="@/assets/image/gallery/e5.jpg"
              alt=""
              class="rounded-full h-[100px] shadow-md"
            />
            <h1 class="font-bold text-lg text-blue-600 text-center">
              Job Title :
              <span class="text-black font-[400] text-base">Cleaner</span>
            </h1>
            <p class="font-bold text-lg text-blue-600 text-center">
              Application Deadline :
              <span class="text-black font-[400] text-base">15 September, 2023</span>
            </p>
            <button class="px-5 py-2 text-sm bg-[#1c2650] text-white w-full">Details</button>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '/src/layouts/DefaultLayout.vue'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'
</script>

<style lang="scss" scoped></style>
