<template>
    <div>
      <DefaultLayout>
        <div class="px-20 pt-20 mt-5 py-5 bg-sky-800 bg-[url('../assets/image/home/bg123.png')] bg-repeat shadow-xl">
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
              <p class="text-sky-800">/ Next Prayer Service</p>
            </div>
            <div class="rounded-lg flex items-center justify-center relative py-3">
              <h1 class="text-sky-800 text-4xl font-bold"> Next Prayer Service </h1>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 h-full px-20 pl-28 py-5 flex justify-between gap-5">
          <div class="space-y-8 w-3/4">
            <div class="bg-white rounded-xl p-5">
              <h1 class="text-3xl underline font-bold text-gray-700 py-3 text-center">Next Prayer Service Announcement</h1>
              <p>Dear Brothers and Sisters,</p>
              <p>Assalamu Alaikum,</p>
              <p>We hope this message reaches you in good health and imaan. We are pleased to inform you of the upcoming prayer service at IDL Mashjid on Friday, 26 jan. Please join us in congregational prayers to seek the blessings of Allah.</p>
              <p class="text-xl underline font-bold text-gray-700 py-3">Next Prayer Service Details:</p>
              <div class="grid grid-cols-3 px-5">
                <div class="p-3 rounded-md shadow-md">
                  <p class="font-semibold">Prayer: <span class="font-md">Dhuhr</span></p>
                  <p class="font-semibold">Date: <span class="font-md">26 Jan</span></p>
                  <p class="font-semibold">Time: <span class="font-md">1.30 PM</span></p>
                  <p class="font-semibold">Imam: <span class="font-md">Md. Saiful Islam</span></p>
                  <p class="font-semibold">Location: <span class="font-md">Mashjid Premises</span></p>
                </div>
              </div>
                <p class="pt-3">We kindly remind everyone to be punctual for prayers and to adhere to the guidelines and etiquettes of the mosque.</p>
                <p>May Allah bless us all and accept our prayers.</p>
                <p>JazakAllah Khair,</p>
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