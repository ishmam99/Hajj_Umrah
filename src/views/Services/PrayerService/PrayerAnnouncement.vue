<template>
    <div>
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
              <p>Home</p>
              <p>/ Services</p>
              <p>/ Prayer Service</p>
              <p class="text-yellow-500">/ Prayer Announcement</p>
            </div>
            <div class="bg-white rounded-lg relative py-3">
              <h1 class="text-yellow-500 text-4xl font-semibold">Prayer Announcement</h1>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 h-full px-20 pl-28 py-5 mt-10 flex justify-between gap-5">
          <div class="space-y-8 w-3/4">
            <div class="bg-white rounded-xl p-5 text-center">
              <h1 class="text-3xl underline font-bold text-gray-700 py-3">Latest Announcement</h1>
              <p>Dear Community/Mosque Members</p>
              <p>Assalamu Alaikum,</p>
              <p>We hope this message finds you in good health and high spirits. As part of our commitment to keeping the community informed and connected, we would like to announce the prayer times for the upcoming week:</p>
              <div class="text-center">
                <p class="font-semibold">1. Fajr (Dawn) Prayer:</p>
                <p class="pl-2">Adhaan: 06:18 AM</p>
                <p class="pl-2">Jamat: 06:30 AM</p>
                <p class="font-semibold">Dhuhr (Noon) Prayer:</p>
                <p class="pl-2">Adhaan: 12:35 PM</p>
                <p class="pl-2">Jamat: 1:35 PM</p>
                <p class="font-semibold">Asr (Afternoon) Prayer:</p>
                <p class="pl-2">Adhaan: 03:20 PM</p>
                <p class="pl-2">Jamat: 03:50 PM</p>
                <p class="font-semibold">Maghrib (Evening) Prayer:</p>
                <p class="pl-2">Adhaan: 05:39 PM</p>
                <p class="pl-2">Jamat: 05:45 PM</p>
                <p class="font-semibold">Isha (Night) Prayer</p>
                <p class="pl-2">Adhaan: 06:52 PM</p>
                <p class="pl-2">Jamat: 08:00 PM</p>
                <p>We kindly remind everyone to be punctual for prayers and to adhere to the guidelines and etiquettes of the mosque.</p>
                <p>May Allah bless us all and accept our prayers.</p>
                <p>JazakAllah Khair,</p>
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