<template>
  <div>
    <DefaultLayout>
   <div class="px-20 pt-20 py-5 bg-blue-50 bg-repeat shadow-xl">
        <div class="pt-3 pb rounded-xl bg-white border-blue-50 shadow-xl border-[3px]">
          <div class="flex items-center justify-center gap-2">
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
            <p>/ Get Involved</p>
            <!-- <p>/ Volunteers</p> -->
            <p class="text-[#1a5047]">/ Apply For Imam</p>
          </div>
          <div class="rounded-lg flex items-center justify-center relative py-3">
            <h1 class="text-[#1a5047] text-4xl font-semibold">Apply For Imam</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#1a504785] h-full py-5 pt-10 flex items-center justify-center gap-5 px-20 w-full">
        <div class="space-y-8 w-3/4">
          <div class="bg-white rounded-xl p-5 w-full">
            <!-- <p class="text-xl font-bold pt-2 pb-2">Student Admission Form</p> -->

            <div class="pt-10">
              <h1 class="text-2xl font-bold">Guest Imam Application</h1>
            </div>
            <div class="py-5 space-y-7 mt-5">
              <div class="flex w-full gap-5">
                <div class="relative mb-3 w-full">
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >First Name <span class="text-red-500">*</span>
                  </label>
                </div>
                <div class="relative mb-3 w-full">
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >Last Name <span class="text-red-500">*</span>
                  </label>
                </div>
              </div>

              <div class="flex w-full gap-5">
                <div class="relative mb-3 w-full">
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >Email <span class="text-red-500">*</span>
                  </label>
                </div>
                <div class="relative mb-3 w-full">
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >Phone Number <span class="text-red-500">*</span>
                  </label>
                </div>
              </div>

              <div class="flex w-full gap-5">
                <div class="relative mb-3 w-full">
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >Address <span class="text-red-500">*</span>
                  </label>
                </div>
                <div class="flex w-full gap-5">
                  <div class="relative mb-3 w-full">
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                    />
                    <label
                      for="exampleFormControlInput50"
                      class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >City <span class="text-red-500">*</span>
                    </label>
                  </div>
                  <div class="relative mb-3 w-full">
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                    />
                    <label
                      for="exampleFormControlInput50"
                      class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >State <span class="text-red-500">*</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-5">
                <div class="relative mb-3 w-full">
                  <div class="gap-5">
                    <label for="">Preferred Date <span class="text-red-500">*</span> </label>
                    <div class="pt-2">
                      <input
                        type="date"
                        class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                      />
                    </div>
                  </div>
                </div>
                <!-- <div class="relative mb-3 w-full">
                  <div class="gap-5">
                    <label for="">Preferred Time <span class="text-red-500">*</span> </label>
                    <div class="pt-2">
                      <input
                        type="time"
                        class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                      />
                    </div>
                  </div>
                </div> -->
              </div>
              <div>
                <p for="" class="mb-3">Preferred Prayer <span class="text-red-500">*</span> </p>
                <Select>
                  <SelectTrigger class="w-full">
                    <SelectValue placeholder="Select a prayer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Prayer</SelectLabel>
                      <SelectItem value="fajr"> Fajr </SelectItem>
                      <SelectItem value="dhuhr"> Dhuhr </SelectItem>
                      <SelectItem value="asr"> Asr </SelectItem>
                      <SelectItem value="maghrib"> Maghrib </SelectItem>
                      <SelectItem value="isha"> Isha </SelectItem>
                      <SelectItem value="jumuah"> Jumu'ah </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <button class="w-[350px] h-[45px] rounded-2xl bg-yellow-600 text-white font-bold mx-auto flex items-center text-center justify-center">
                Apply
              </button>
            </div>
          </div>
        </div>
        <!-- <RegistrationMore /> -->
      </div>
    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
import Card from '/src/components/cardSection.vue'
import RegistrationMore from '/src/components/RgistrationMore.vue'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'
</script>

<style lang="scss" scoped></style>