<template>
    <div>
      <DefaultLayout>
        <div class="px-20 pt-20 mt-5 py-5 bg-indigo-800 bg-[url('../assets/image/home/bg123.png')] bg-repeat shadow-xl">
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
              <p>/ Services</p>
              <p>/ Prayer Service</p>
              <p class="text-indigo-800">/ Ramadan Prayer Service</p>
            </div>
            <div class="rounded-lg flex items-center justify-center relative py-3">
              <h1 class="text-indigo-800 text-4xl font-bold"> Ramadan Prayer Service </h1>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 h-full px-20 pl-28 py-5 flex justify-between gap-5">
          <div class="space-y-8 w-3/4">
            <div class="bg-white rounded-xl p-5 text-center">
              <h1 class="text-3xl underline font-bold text-gray-700 py-3">Ramadan Prayer Time form March 2024</h1>
              <div class="w-full px-10">
                <h1 class="text-3xl font-bold uppercase pb-3">Prayer time</h1>
                <div class="bg-white p-10 rounded-2xl drop-shadow-md">
                    <p class="mx-3 text-sm font-semibold text-gray-500 text-center">10 th March,2024</p>
                    <div class="grid grid-cols-2">
                        <div>
                            <!-- <h4 class="text-blue-600 text-4xl font-semibold uppercase">Next</h4>
                            <p class="text-gray-500 text-xl font-semibold">Prayer</p> -->
                        </div>
                        <!-- <div class="text-right text-sm font-semibold">
                            <p class="text-gray-600">Fajr</p>
                            <p class="text-yellow-600">05:00</p>
                            <p class="text-green-600">8h 16m left</p>
                        </div> -->
                    </div>
                    <div>
                        <div class="pt-3 pb-1 flex gap-2 text-center font-semibold border-b">
                            <p class="w-1/3 text-sm">Prayer</p>
                            <p class="w-1/3 text-sm">Adhaan</p>
                            <p class="w-1/3 text-sm">Iqamah</p>
                        </div>
                        <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                            <p class="w-1/3 text-sm">Sehri</p>
                            <p class="w-1/3 text-sm">Before 04:52 AM</p>
                            <p class="w-1/3 text-sm"></p>
                        </div>
                        <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                            <p class="w-1/3 text-sm">Fajr</p>
                            <p class="w-1/3 text-sm">04:52 AM</p>
                            <p class="w-1/3 text-sm">05:00 AM</p>
                        </div>
                        <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                            <p class="w-1/3 text-sm">Sunrise</p>
                            <p class="w-1/3 text-sm">06:54 AM</p>
                            <p class="w-1/3 text-sm"></p>
                        </div>
                        <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                            <p class="w-1/3 text-sm">Dhuhr</p>
                            <p class="w-1/3 text-sm">12:35 PM</p>
                            <p class="w-1/3 text-sm">02:00 PM</p>
                        </div>
                        <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                            <p class="w-1/3 text-sm">Asr</p>
                            <p class="w-1/3 text-sm">03:20 PM</p>
                            <p class="w-1/3 text-sm">04:00 PM</p>
                        </div>
                        <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                            <p class="w-1/3 text-sm">Iftar</p>
                            <p class="w-1/3 text-sm">05:39 PM</p>
                            <p class="w-1/3 text-sm"></p>
                        </div>
                        <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                            <p class="w-1/3 text-sm">Maghrib</p>
                            <p class="w-1/3 text-sm">05:39 PM</p>
                            <p class="w-1/3 text-sm">05:44 PM</p>
                        </div>
                        <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                            <p class="w-1/3 text-sm">Isha</p>
                            <p class="w-1/3 text-sm">06:52 PM</p>
                            <p class="w-1/3 text-sm">08:00 PM</p>
                        </div>
                        <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                            <p class="w-1/3 text-sm">Tarawih</p>
                            <p class="w-1/3 text-sm">06:52 PM</p>
                            <p class="w-1/3 text-sm"></p>
                        </div>
                        <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                            <p class="w-1/3 text-sm">Qiyyam Al-Lail</p>
                            <p class="w-1/3 text-sm">After 12:00 PM</p>
                            <p class="w-1/3 text-sm"></p>
                        </div>
                        <div class="pt-3 pb-1 flex gap-2 text-center">
                            <p class="w-1/3 text-sm">Jumu’ah</p>
                            <p class="w-1/3 text-sm">12:00 PM</p>
                            <p class="w-1/3 text-sm">01:30 PM</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
          </div>
          <PrayerServiceMore />
        </div>
      </DefaultLayout>
    </div>
  </template>

<script setup>
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
import PrayerServiceMore from '/src/components/PrayerServiceMore.vue'
</script>

<style lang="scss" scoped></style>