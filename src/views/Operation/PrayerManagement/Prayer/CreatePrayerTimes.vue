<template>
    <div class="px-5 bg-slate-50 py-5 w-3/4">
            <p class="font-semibold">Prayer Management > Prayer > Create Prayer Times</p>
            <div class="flex items-center justify-between border-b pb-2 gap-5">
                  <p class="text-2xl font-bold py-3">Create Prayer Times</p>
                <button class="px-4 py-2 rounded-md shadow-md bg-cyan-600 text-white hover:font-bold hover:bg-cyan-900">Save</button>
            </div>
            <div class="bg-white p-5 rounded-2xl drop-shadow-md mt-3">
                <div class="flex justify-center items-center gap-3 w-full relative">
                  <Button class="bg-gray-200 hover:bg-gray-300 h-14 text-gray-800" @click="subDays"> prev </Button>
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
                        <span>{{ date ? date.format('MMMM Do YYYY') : "Pick a date" }}</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent class="w-auto p-0">
                      <Calendar v-model="date" />
                    </PopoverContent>
                  </Popover>
                  <Button class="bg-gray-200 hover:bg-gray-300 h-14 text-gray-800" @click="addDays"> next </Button>
                </div>
                
                <div class="w-2/5 m-auto">
                    <div class="pt-3 pb-1 flex gap-2 text-center font-semibold border-b">
                        <p class="w-1/3 text-sm">Prayer</p>
                        <p class="w-1/3 text-sm">Adhaan</p>
                        <p class="w-1/3 text-sm">Iqamah</p>
                    </div>
                    <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                        <p class="w-1/3 text-sm">fajr</p>
                        <div class="w-1/3 flex justify-center border rounded-md">
                            <input type="time" placeholder="enter time" class="text-sm py-1.5 px-2">
                        </div>
                        <div class="w-1/3 flex justify-center border rounded-md">
                            <input type="time" placeholder="enter time" class="text-sm py-1.5 px-2">
                        </div>
                    </div>
                    <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                        <p class="w-1/3 text-sm">Sunrise</p>
                        <div class="w-1/3 flex justify-center border rounded-md">
                            <input type="time" placeholder="enter time" class="text-sm py-1.5 px-2">
                        </div>
                        <div class="w-1/3 flex justify-center border rounded-md">
                            <input type="time" placeholder="enter time" class="text-sm py-1.5 px-2">
                        </div>
                    </div>
                    <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                        <p class="w-1/3 text-sm">Dhuhr</p>
                       <div class="w-1/3 flex justify-center border rounded-md">
                            <input type="time" placeholder="enter time" class="text-sm py-1.5 px-2">
                        </div>
                        <div class="w-1/3 flex justify-center border rounded-md">
                            <input type="time" placeholder="enter time" class="text-sm py-1.5 px-2">
                        </div>
                    </div>
                    <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                        <p class="w-1/3 text-sm">Asr</p>
                        <div class="w-1/3 flex justify-center border rounded-md">
                            <input type="time" placeholder="enter time" class="text-sm py-1.5 px-2">
                        </div>
                        <div class="w-1/3 flex justify-center border rounded-md">
                            <input type="time" placeholder="enter time" class="text-sm py-1.5 px-2">
                        </div>
                    </div>
                    <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                        <p class="w-1/3 text-sm">Maghrib</p>
                        <div class="w-1/3 flex justify-center border rounded-md">
                            <input type="time" placeholder="enter time" class="text-sm py-1.5 px-2">
                        </div>
                        <div class="w-1/3 flex justify-center border rounded-md">
                            <input type="time" placeholder="enter time" class="text-sm py-1.5 px-2">
                        </div>
                    </div>
                    <div class="pt-3 pb-1 flex gap-2 text-center border-b">
                        <p class="w-1/3 text-sm">Isha</p>
                        <div class="w-1/3 flex justify-center border rounded-md">
                            <input type="time" placeholder="enter time" class="text-sm py-1.5 px-2">
                        </div>
                        <div class="w-1/3 flex justify-center border rounded-md">
                            <input type="time" placeholder="enter time" class="text-sm py-1.5 px-2">
                        </div>
                    </div>
                    <div class="pt-3 pb-1 flex gap-2 text-center">
                        <p class="w-1/3 text-sm">Jumu’ah</p>
                        <div class="w-1/3 flex justify-center border rounded-md">
                            <input type="time" placeholder="enter time" class="text-sm py-1.5 px-2">
                        </div>
                        <div class="w-1/3 flex justify-center border rounded-md">
                            <input type="time" placeholder="enter time" class="text-sm py-1.5 px-2">
                        </div>
                    </div>
                </div>
                <div class="text-center my-10">
                    <div class="flex justify-center items-center gap-5">
                      <Select class="bg-yellow-300">
                        <SelectTrigger class="w-1/5">
                          <SelectValue placeholder="Select Imam" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <!-- <SelectLabel>Select</SelectLabel> -->
                            <SelectItem value="Educate The Children"> Abdullah </SelectItem>
                            <SelectItem value="Shelter The Homeless"> Nur Mohammad </SelectItem>
                            <SelectItem value="Comfort The Sick"> Habibullah </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                     
                      <input type="text" name="" placeholder="Enter Imam name" class="p-2 border-2 justify-center" id="">
                      <p>or</p>
                      <Select class="bg-yellow-300">
                        <SelectTrigger class="w-1/5">
                          <SelectValue placeholder="Select Prayer Time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <!-- <SelectLabel>Select</SelectLabel> -->
                            <SelectItem value="Educate The Children"> All </SelectItem>
                            <SelectItem value="Shelter The Homeless"> Fajr </SelectItem>
                            <SelectItem value="Comfort The Sick"> Asr </SelectItem>
                            <SelectItem value="Comfort The Sick"> Magrib </SelectItem>
                            <SelectItem value="Comfort The Sick"> Isha </SelectItem>
                            <SelectItem value="Comfort The Sick"> Jumu'ah </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <button type="submit" class="px-4 py-2 rounded-md shadow-md bg-cyan-600 text-white mt-8 hover:font-bold hover:bg-cyan-900">Submit</button>
                </div>
            </div>
            <!-- <hr /> -->
            
            
          </div>
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
  