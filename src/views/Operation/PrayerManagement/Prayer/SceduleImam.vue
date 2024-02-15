<template>
    <DefaultLayout>
      <div class="bg-slate-50">
        <div class="pt-[80px] flex justify-between">
          <operationSidebar />
          <div class="px-5 bg-slate-50 py-5 w-3/4">
            <p class="font-semibold">Prayer Management > Prayer > Schedule Imam</p>
            <div class="flex items-center justify-between border-b pb-2 gap-5">
                <p class="text-2xl font-bold py-3">Schedule Imam</p>
            </div>
            
            <!-- <hr /> -->
            <div class="bg-white p-5 rounded-2xl drop-shadow-md mt-3">
               
                
                <div>
                    <div class="pt-3 pb-1 flex gap-2 text-center font-semibold border-b">
                        <p class="w-1/5 text-sm">Date</p>
                        <p class="w-1/5 text-sm">Prayer</p>
                        <p class="w-1/5 text-sm">Adhaan</p>
                        <p class="w-1/5 text-sm">Iqamah</p>
                        <p class="w-1/5 text-sm">Imam Name</p>
                    </div>
                    <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                        <p class="w-1/5 text-sm">20-02-2024</p>
                        <p class="w-1/5 text-sm">fajr</p>
                        <p class="w-1/5 text-sm">06:00 AM</p>
                        <p class="w-1/5 text-sm">06:30 AM</p>
                        <p class="w-1/5 text-sm"> Abudullah</p>
                    </div>
                    <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                        <p class="w-1/5 text-sm">20-02-2024</p>
                        <p class="w-1/5 text-sm">Dhuhr</p>
                        <p class="w-1/5 text-sm">12:35 PM</p>
                        <p class="w-1/5 text-sm">02:00 PM</p>
                        <p class="w-1/5 text-sm">Abudullah</p>
                    </div>
                    <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                        <p class="w-1/5 text-sm">20-02-2024</p>
                        <p class="w-1/5 text-sm">Asr</p>
                        <p class="w-1/5 text-sm">03:20 PM</p>
                        <p class="w-1/5 text-sm">04:00 PM</p>
                        <p class="w-1/5 text-sm">Abudullah</p>
                    </div>
                    <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                        <p class="w-1/5 text-sm">20-02-2024</p>
                        <p class="w-1/5 text-sm">Maghrib</p>
                        <p class="w-1/5 text-sm">05:39 PM</p>
                        <p class="w-1/5 text-sm">05:44 PM</p>
                        <p class="w-1/5 text-sm">Abudullah</p>
                    </div>
                    <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                        <p class="w-1/5 text-sm">20-02-2024</p>
                        <p class="w-1/5 text-sm">Isha</p>
                        <p class="w-1/5 text-sm">06:52 PM</p>
                        <p class="w-1/5 text-sm">08:00 PM</p>
                        <p class="w-1/5 text-sm">Abudullah</p>
                    </div>
                    <div class="pt-3 pb-1 flex gap-2 text-center">
                        <p class="w-1/5 text-sm">20-02-2024</p>
                        <p class="w-1/5 text-sm">Jumu’ah</p>
                        <p class="w-1/5 text-sm">06:52 PM</p>
                        <p class="w-1/5 text-sm">08:00 PM</p>
                        <p class="w-1/5 text-sm">Abudullah</p>
                    </div>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </DefaultLayout>
  </template>
  <script setup>
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import operationSidebar from '/src/views/Operation/OperationSidevar.vue'
  
  import { format } from 'date-fns'
  import { Calendar as CalendarIcon } from 'lucide-vue-next'
  import moment from 'moment'
  import { ref } from 'vue'
  import { cn } from '/src/lib/utils'
  import { Button } from '/components/ui/button'
  import { Calendar } from '/components/ui/calendar'
  import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  } from '/components/ui/popover'
  import {
      Select,
      SelectContent,
      SelectGroup,
      SelectItem,
      SelectLabel,
      SelectTrigger,
      SelectValue
    } from '/components/ui/select'
  
  const date = ref(moment())
  const subDays = () => {
  date.value = moment(date.value).subtract(1,'d')
  }
  
  const addDays = () => {
  date.value = moment(date.value).add(1,'d')
  }
  </script>
  