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
            <p class="text-yellow-500">/ Funeral Services</p>
          </div>
          <div class="bg-white rounded-lg relative py-3">
            <h1 class="text-yellow-500 text-4xl font-semibold">Funeral Services</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 h-full py-5 mt-10 flex gap-5 px-20 w-full">
        <div class="space-y-8 w-3/4">
          <div class="bg-white rounded-xl p-5 w-full">
            <h1 class="text-3xl underline py-3">Funeral Services</h1>
            <p>
              Funeral Services at Islamin Digital Lane (Islamic Digital Lane) were started to cater
              the needs of DFW Muslim community. It is a not-for-profit community service that
              provides a range of end-to-end offerings.
            </p>
            <p class="py-3">
              Islamic Digital Lane Funeral Services at Islamic Digital Lane include:
            </p>
            <ul class="px-10">
              <li class="list-disc">
                Body transportation in collaboration with Hughes funeral home
              </li>
              <li class="list-disc">Ghusl (body wash) at masjid premise</li>
              <li class="list-disc">Private viewing at masjid</li>
              <li class="list-disc">Salat-ul-Janazah (Funeral prayer) at masjid</li>
              <li class="list-disc">Burial in Farmersville</li>
              <li class="list-disc">Counselling with religious leadership</li>
              <li class="list-disc">Community announcements</li>
              <li class="list-disc">Azza and dua facilitation after general congregations</li>
            </ul>
            <p class="py-3">
              <span class="font-semibold text-yellow-600">Please Note: </span>Islamic Digital Lane
              Funeral Service utilizes one of the nearest cemeteries in the area.
            </p>
            <ul class="pl-10 text-blue-600">
              <li class="list-disc">Farmersville Cemetery</li>
            </ul>
          </div>
          <div class="flex flex-col items-center gap-3 text-center w-full">
            <img src="/src/assets/image/hero/h1.png" alt="" class="rounded-xl" />
            <p class="text-blue-600">
              <span class="font-semibold text-black">E-Mail: </span>funeral.services@epicmasjid.org
            </p>
            <p class="text-blue-600">Website: https://epicmasjid.org/funeral-services/</p>
            <p class="text-blue-600">
              <span class="font-semibold text-black">Address: </span>4700 14th Street Plano TX 75074
            </p>
          </div>
        </div>
        <FacilitiesMore />
      </div>
    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from '../../layouts/DefaultLayout.vue'
import Card from '../../components/CardSection.vue'
import FacilitiesMore from '../../components/FacilitiesMore.vue'
</script>

<style lang="scss" scoped></style>
