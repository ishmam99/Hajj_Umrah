<template>
    <div>
      <DefaultLayout>
        <div class="px-20 pt-20 py-5 bg-blue-50 bg-repeat shadow-xl">
          <div class="pt-3 pb rounded-xl bg-white border-blue-50 shadow-xl border-[3px]">
            <div class="flex items-center justify-center gap-2">
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
              <p>/ Gallery</p>
              <!-- <p>/ Kabah</p> -->
              <p class="text-[#1a5047]">/ Kabah</p>
            </div>
            <div class="rounded-lg flex items-center justify-center relative py-3">
              <h1 class="text-[#1a5047] text-4xl font-semibold">Kabah</h1>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-[#d1d1d185] h-full py-5 pt-10 flex gap-5 px-20 w-full">
          <div class="space-y-8 w-3/4">
            <div class=" grid grid-cols-3 gap-5 justify-center items-center">
              <img src="/src/assets/image/gallery/k1.jpg" alt="">
              <img src="/src/assets/image/gallery/k2.jpg" alt="">
              <img src="/src/assets/image/gallery/k3.jpg" alt="">
              <img src="/src/assets/image/gallery/k4.jpg" alt="">
              <img src="/src/assets/image/gallery/k5.jpg" alt="">
              <!-- <img src="/src/assets/image/gallery/k6.jpg" alt=""> -->
            </div>
          </div>
          <GalleyMore />
        </div>
      </DefaultLayout>
    </div>
  </template>
  <script setup>
import GalleyMore from './GalleyMore.vue';
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
</script>