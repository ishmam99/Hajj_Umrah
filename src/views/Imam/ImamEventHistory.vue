<template>
  <div class="px-[5%] bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pb-4 border-b">
      <p class="text-2xl text-yellow-600 font-semibold pb-2">See All Event</p>
      <router-link to="" class="px-5 py-2 rounded-md bg-yellow-600 text-white"
        >View All</router-link
      >
    </div>
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-yellow-600 font-semibold pb-2">Registered Events</p>
    </div>
    <div class="grid grid-cols-1 gap-5 my-5">
      <div class="rounded-md p-2 flex gap-5 bg-gray-100 shadow-md">
        <img src="/src/assets/image/gallery/e1.jpg" alt="" class="w-1/3" />
        <div class="flex flex-col gap-2">
          <h3 class="text-2xl font-bold">Educate Children</h3>
          <p class="font-semibold text-yellow-600">25 Jan 2024</p>
          <p class="font-semibold text-yellow-600">
            Location : <span class="text-black">Mashjib Premises </span>
          </p>
        </div>
      </div>
      <div class="rounded-md p-2 flex gap-5 bg-gray-100 shadow-md">
        <img src="/src/assets/image/gallery/e3.webp" alt="" class="w-1/3" />
        <div class="flex flex-col gap-2">
          <h3 class="text-2xl font-bold">Feed The Hungry</h3>
          <p class="font-semibold text-yellow-600">20 JAN 2024</p>
          <p class="font-semibold text-yellow-600">
            Location : <span class="text-black">Mashjib Premises </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import MembarSidebar from '/src/views/Member/MembarSidevar.vue'
</script>
