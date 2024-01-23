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
            <p>Home /About /</p>

            <p class="text-yellow-500">About Us</p>
          </div>
          <div class="bg-white rounded-lg relative py-3">
            <h1 class="text-yellow-500 text-4xl font-semibold">About Us</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <Separator />
   
    <div class="p-20 flex bg-gray-100 gap-5 ">
    <div class="space-y-8 w-3/4">
      <Card class="rounded-2xl">
        <CardHeader>
           <CardTitle class="underline underline-offset-4 text-3xl text-slate-700">About IDL</CardTitle>
          
        </CardHeader>
        <CardContent class="text-gray-600"> IDL is a non-profit tax-exempt organization (with Tax-ID: 20-0629612) that has been formed exclusively for educational, religious, and social purposes. It is registered with the Internal Revenue Service under revenue code 501(c)(3).

All of its activities are in accordance with the teachings of the Quran and following the teachings and traditions of Prophet Mohammed (Peace Be upon Him).

EPIC is a multi-ethnic, multi-racial, multi-lingual, non-sectarian, diverse, and open community committed to full and equal participation and involvement of men and women who are community members of EPIC and subscribe to accept its rules, regulations, and procedures. EPIC is committed to civic and civil engagement with communities of other faiths and society at large. </CardContent>
      </Card>
       <Card class="rounded-2xl">
        <CardHeader>
           <CardTitle class="underline underline-offset-4 text-3xl text-slate-700">IDL Policies</CardTitle>
          
        </CardHeader>
        <CardContent class="text-gray-600">IDL’s Policy and Process Documents are listed here:
            <ul  class="list-disc ">
                <li class="flex items-center gap-3"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(240,187,64,1)"><path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9Z"></path></svg>IDL Constitution (Original)</li>
                <li class="flex items-center gap-3"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(240,187,64,1)"><path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9Z"></path></svg>Start of Ramadan</li>
                <li class="flex items-center gap-3"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(240,187,64,1)"><path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9Z"></path></svg>IDL Constitution with Amendments </li>
                <li class="flex items-center gap-3"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(240,187,64,1)"><path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9Z"></path></svg>IDL Committee By-Laws </li>
                <li class="flex items-center gap-3"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(240,187,64,1)"><path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9Z"></path></svg>IDL Communication Policies (General and Electronic) </li>
            </ul>


</CardContent>
      </Card>
    </div>
     <FacilitiesMore />
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
