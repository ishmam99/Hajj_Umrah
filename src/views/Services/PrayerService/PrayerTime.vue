<template>
    <div>
      <DefaultLayout>
        <div class="px-20 pt-20 mt-5 py-5 bg-cyan-800 bg-[url('../assets/image/home/bg123.png')] bg-repeat shadow-xl">
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
              <p class="text-cyan-800">/ Prayer Time</p>
            </div>
            <div class="rounded-lg flex items-center justify-center relative py-3">
              <h1 class="text-cyan-800 text-4xl font-bold"> Prayer Time </h1>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 h-full px-20 pl-28 py-5  flex justify-between gap-5">
          <div class="w-3/4 px-5">
            <!-- <h1 class="text-3xl font-bold uppercase pb-3">Prayer time</h1> -->
            <div class="bg-white p-5 rounded-2xl drop-shadow-md">
                <!-- <p class="mx-3 text-sm font-semibold text-gray-500 text-center">11 th January,2024</p> -->
                <div class="flex justify-center items-center gap-3 w-full relative">
                  <Button class="bg-gray-200 hover:bg-gray-300 h-14 text-gray-800" @click="date.addDays(-1)"> prev </Button>
                  <Popover>
                    <PopoverTrigger as-child class="hover:bg-slate-100">
                      <Button
                        :variant="'outline'"
                        :class="cn(
                          'w-[280px] justify-start text-left font-normal',
                          !date && 'text-muted-foreground',
                        )"
                      >
                        <CalendarIcon class="mr-2 h-4 w-4" />
                        <span>{{ date ? format(date, "PPP") : "Pick a date" }}</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent class="w-auto p-0">
                      <Calendar v-model="date" />
                    </PopoverContent>
                  </Popover>
                  <Button class="bg-gray-200 hover:bg-gray-300 h-14 text-gray-800"> next </Button>
                </div>
                
                <div class="grid grid-cols-2">
                    <div>
                        <h4 class="text-blue-600 text-4xl font-semibold uppercase">Next</h4>
                        <p class="text-gray-500 text-xl font-semibold">Prayer</p>
                    </div>
                    <div class="text-right text-sm font-semibold">
                        <p class="text-gray-600">Dhuhr</p>
                        <p class="text-yellow-600">1:00 PM</p>
                        <p class="text-green-600">4h 16m left</p>
                    </div>
                </div>
                <div>
                    <div class="pt-3 pb-1 flex gap-2 text-center font-semibold border-b">
                        <p class="w-1/3 text-sm">Prayer</p>
                        <p class="w-1/3 text-sm">Adhaan</p>
                        <p class="w-1/3 text-sm">Iqamah</p>
                    </div>
                    <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                        <p class="w-1/3 text-sm">fajr</p>
                        <p class="w-1/3 text-sm">06:18 AM</p>
                        <p class="w-1/3 text-sm">06:30 AM</p>
                    </div>
                    <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                        <p class="w-1/3 text-sm">Sunrise</p>
                        <p class="w-1/3 text-sm">07:31 AM</p>
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
                        <p class="w-1/3 text-sm">Maghrib</p>
                        <p class="w-1/3 text-sm">05:39 PM</p>
                        <p class="w-1/3 text-sm">05:44 PM</p>
                    </div>
                    <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                        <p class="w-1/3 text-sm">Isha</p>
                        <p class="w-1/3 text-sm">06:52 PM</p>
                        <p class="w-1/3 text-sm">08:00 PM</p>
                    </div>
                    <div class="pt-3 pb-1 flex gap-2 text-center">
                        <p class="w-1/3 text-sm">Jumu’ah</p>
                        <p class="w-1/3 text-sm">06:52 PM</p>
                        <p class="w-1/3 text-sm">08:00 PM</p>
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
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-vue-next'

import { ref } from 'vue'
import { cn } from '/src/lib/utils'
import { Button } from '/components/ui/button'
import { Calendar } from '/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '/components/ui/popover'

const date = ref(new Date())
</script>

<style lang="scss" scoped></style>