<template>
  <div>
    <DefaultLayout>
      <div class="px-20 pt-20 mt-5 py-5 bg-pink-800 bg-[url('../assets/image/home/bg123.png')] bg-repeat shadow-xl">
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
            <!-- <p>/ Volunteers</p> -->
            <p class="text-pink-800">/ Special Needs Service</p>
          </div>
          <div class="rounded-lg flex items-center justify-center relative py-3">
            <h1 class="text-pink-800 text-4xl font-bold"> Special Needs Service </h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 h-full py-5 flex gap-5 px-20 w-full">
        <div class="space-y-8 w-3/4">
          <!-- <Card
            :headline="'Call for details'"
            :text="'For special needs services you can call any our contact given below or visit our physical office for more details'"
          /> -->
           <div class="flex flex-col items-center gap-3 text-center w-full">
            <img src="/src/assets/image/hero/h1.jpg" alt="" class="rounded-xl">
            <p class="text-blue-600"><span class="font-semibold text-black">E-Mail: </span>specialneeds.services@epicmasjid.org</p>
            <p class="text-blue-600">Website: https://idl-masjid.org/specialneeds-services/</p>
            <p class="text-blue-600"><span class="font-semibold text-black">Address: </span>4700 14th Street Plano TX 75074</p>
          </div>
        </div>
         <FacilitesMore />
      </div>
    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from '../../layouts/DefaultLayout.vue'
import Card from '../../components/CardSection.vue'
import FacilitesMore from '../../components/FacilitiesMore.vue'

</script>

<style lang="scss" scoped></style>
