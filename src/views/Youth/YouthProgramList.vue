<template>
  <DefaultLayout>
    <div class="bg-slate-50">
      <div class="pt-20 flex justify-between">
        <YouthSidebar />
        <div class="px-[5%] bg-white py-5 w-3/4">
          <div class="flex justify-between items-center pt-4">
            <p class="text-2xl text-emerald-600 font-bold pb-2">Program List</p>
          </div>
          <hr />
          <div class="grid grid-cols-1 gap-5 my-5">
            <div
              class="rounded-md px-2 py-3 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
            >
              <div class="flex gap-5 items-center">
                <img src="/src/assets/image/home/l4.png" alt="" class="h-10" />
                <h3 class="font-bold">Leadership Development Program</h3>
                <p class="font-semibold text-emerald-600">
                  25 Jan 2024 <span class="text-black font thin px-2">to</span> 20 Feb 2024
                </p>
                <p class="font-semibold text-emerald-600">
                  Location : <span class="text-black">Masjid Premises</span>
                </p>
                <p class="text-sm font-bold text-emerald-600">Ongoing</p>
              </div>
              <button class="px-3 py-2 rounded-md shadow-md bg-emerald-600 text-white text-sm">
                Details
              </button>
            </div>
            <div
              class="rounded-md px-2 py-3 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
            >
              <div class="flex gap-5 items-center">
                <img src="/src/assets/image/home/social.jpg" alt="" class="h-10" />
                <h3 class="font-bold">Social Events and Activities Program</h3>
                <p class="font-semibold text-emerald-600">
                  1 Jan 2024<span class="text-black font thin px-2">to</span>20 Jan 2024
                </p>
                <p class="font-semibold text-emerald-600">
                  Location : <span class="text-black">Masjid Premises</span>
                </p>
                <p class="text-sm font-bold text-green-600">Complete</p>
              </div>
              <button class="px-3 py-2 rounded-md shadow-md bg-emerald-600 text-white text-sm">
                Details
              </button>
            </div>
            <div
              class="rounded-md px-2 py-3 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
            >
              <div class="flex gap-5 items-center">
                <img src="/src/assets/image/home/g5.jpg" alt="" class="h-10" />
                <h3 class="font-bold">Community Service Program</h3>
                <p class="font-semibold text-emerald-600">
                  1 Jan 2024<span class="text-black font thin px-2">to</span>20 Jan 2024
                </p>
                <p class="font-semibold text-emerald-600">
                  Location : <span class="text-black">Masjid Premises</span>
                </p>
                <p class="text-sm font-bold text-green-600">Complete</p>
              </div>
              <button class="px-3 py-2 rounded-md shadow-md bg-emerald-600 text-white text-sm">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import YouthSidebar from '/src/views/Youth/youthSidebar.vue'
</script>
