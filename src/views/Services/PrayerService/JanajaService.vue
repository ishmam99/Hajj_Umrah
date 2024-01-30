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
              <p class="text-yellow-500">/ Janaja Prayer Announcement</p>
            </div>
            <div class="bg-white rounded-lg relative py-3">
              <h1 class="text-yellow-500 text-4xl font-semibold">Janaja Prayer Announcement</h1>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 h-full px-20 pl-28 py-5 mt-10 flex justify-between gap-5">
          <div class="space-y-8 w-3/4">
            <div class="bg-white rounded-xl p-5 relative">
              <img src="/src/assets/image/common/pngwing.com.png" alt="" class="absolute top-2 h-20 right-0">
              <h1 class="text-3xl underline font-bold text-gray-700 py-3 text-center pb-10"> Funeral Announcement for Jamil Islam</h1>
              <div class="flex gap-5">
                <div class="w-2/3">
                  <p>Dear Brothers and Sisters,</p>
                  <p>Assalamu Alaikum,</p>
                  <p>It is with a heavy heart that we inform you of the passing of our dear Brother Jamil Islam. After bravely facing  illness , he left this world on 26 jan 2024.</p>
                  <p>The Janaza (funeral prayer) will be conducted at [Masjid Name] on [Date]. Your attendance and support during this difficult time are greatly appreciated. The schedule for the Janaza prayer is as follows:</p>
                  <p>In lieu of flowers, the family suggests making donations to Idl , in accordance with the wishes of the deceased.
                    Your presence and prayers are a source of comfort for the grieving family. We extend our sincere gratitude for your support.
                    May Allah (SWT) grant Zamil Islam peace and mercy and provide strength and patience to the family during this trying time.</p>
                    <p>May Allah bless us all and accept our prayers.</p>
                    <p>JazakAllah Khair,</p>
                </div>
                <div class="w-1/3 flex flex-col gap-3 items-center">
                  <img src="" alt="" class="bg-blue-200 h-[250px] w-[250px] rounded-full">
                  <!-- <p class="font-semibold">Janaja Prayer Details:</p> -->
                  <p class="font-semibold">Janaza Prayer: <span class="font-md">After Dhuhr Prayer</span></p>
                  <p class="font-semibold">Location: <span class="font-md">Mashjid Premises</span></p>
                </div>
              </div> 
            </div>
            <div class="bg-white rounded-xl p-5 relative">
              <img src="/src/assets/image/common/pngwing.com.png" alt="" class="absolute top-2 h-20 right-0">
              <h1 class="text-3xl underline font-bold text-gray-700 py-3 text-center pb-10"> Funeral Announcement for Md. Abdul Karim </h1>
              <div class="flex gap-5">
                <div class="w-2/3">
                  <p>Dear Brothers and Sisters,</p>
                  <p>Assalamu Alaikum,</p>
                  <p>It is with a heavy heart that we inform you of the passing of our dear Brother Md. Abdul Karim. After bravely facing  illness , he left this world on 26 jan 2024.</p>
                  <p>The Janaza (funeral prayer) will be conducted at [Masjid Name] on [Date]. Your attendance and support during this difficult time are greatly appreciated. The schedule for the Janaza prayer is as follows:</p>
                  <p>In lieu of flowers, the family suggests making donations to Idl , in accordance with the wishes of the deceased.
                    Your presence and prayers are a source of comfort for the grieving family. We extend our sincere gratitude for your support.
                    May Allah (SWT) grant Md. Abdul Karim peace and mercy and provide strength and patience to the family during this trying time.</p>
                    <p>May Allah bless us all and accept our prayers.</p>
                    <p>JazakAllah Khair,</p>
                </div>
                <div class="w-1/3 flex flex-col gap-3 items-center">
                  <img src="" alt="" class="bg-blue-200 h-[250px] w-[250px] rounded-full">
                  <!-- <p class="font-semibold">Janaja Prayer Details:</p> -->
                  <p class="font-semibold">Janaza Prayer: <span class="font-md">After Asr Prayer</span></p>
                  <p class="font-semibold">Location: <span class="font-md">Mashjid Premises</span></p>
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