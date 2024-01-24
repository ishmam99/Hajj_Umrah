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
            <p>Home /Explore /</p>

            <p class="text-yellow-500">Dua</p>
          </div>
          <div class="bg-white rounded-lg relative py-3">
            <h1 class="text-yellow-500 text-4xl font-semibold">Dua</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <Separator />
   <div class="w-full bg-[url('../assets/image/home/dua_banner.png')] bg-amber-400">
    <h1 class="py-10 text-center bg-[#2d292938] text-4xl text-white font-bold">Dua of the Day</h1>
   </div>
    <div class="p-20 flex bg-gray-100 gap-5 ">
    
</div>
     </DefaultLayout>
  </div>
</template>

<script setup lang="ts">
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
import FacilitiesMore from '../../components/FacilitiesMore.vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '/components/ui/card'
import ContactMore from '/src/components/ContactMore.vue'
import { Separator } from '/components/ui/separator'
</script>

<style lang="scss" scoped></style>
