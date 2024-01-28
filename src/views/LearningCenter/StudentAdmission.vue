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
            <p>/ Learning Center</p>
            <!-- <p>/ Student Admission</p> -->
            <p class="text-yellow-500">/ Student Admission</p>
          </div>
          <div class="bg-white rounded-lg relative py-3">
            <h1 class="text-yellow-500 text-4xl font-semibold">Student Admission</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <Separator/>
      <div class="w-full bg-[url('../assets/image/home/dua_banner.png')] bg-amber-400">
        <h1 class="py-10 text-center bg-[#2d292938] text-4xl text-white font-bold"></h1>
       </div>
      <div>
        <div
          class="bg-gray-100 h-full py-5 mt-10 flex items-center justify-center gap-5 px-20 w-full"
        >
          <div class="space-y-8 w-3/4">
            <div class="bg-white rounded-xl p-5 w-full">
              <!-- <p class="text-xl font-bold pt-2 pb-2">Student Admission Form</p> -->

              <div class="pt-2">
                <h1 class="text-2xl font-bold">Student Application</h1>
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
                      >Parents First Name <span class="text-red-500">*</span>
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
                      >Parents Last Name <span class="text-red-500">*</span>
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
                      >Parents Email <span class="text-red-500">*</span>
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
                      >Parents Phone Number <span class="text-red-500">*</span>
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
                <div class="relative mb-3 w-full">
                  <div class="gap-5">
                    <label for="">Date of Birth <span class="text-red-500">*</span> </label>
                    <div class="pt-2">
                      <input
                        type="date"
                        class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p for="" class="mb-3">Preferred Program <span class="text-red-500">*</span></p>
                  <Select>
                    <SelectTrigger class="w-full">
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Program</SelectLabel>
                        <SelectItem value="apple"> Full Time Hifz </SelectItem>
                        <SelectItem value="apple"> Part Time Hifz </SelectItem>
                        <SelectItem value="banana"> Summer School </SelectItem>
                        <SelectItem value="blueberry"> Sunday School </SelectItem>
                        <SelectItem value="grapes"> Special Needs School </SelectItem>
                        <SelectItem value="grapes"> Fityah Program </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <p for="" class="mb-4">Class Time <span class="text-red-500">*</span></p>
                  <div class="relative mb-3 w-full">
                    <div class="grid grid-cols-1 lg:grid-cols-9 gap-2">
                      <div class="flex items-center gap-2 font-semibold">
                        <input
                          id="Asr"
                          type="radio"
                          name="Event_Time"
                          value="Dhur"
                          class="h-3 w-3"
                        />
                        <label for="Dhur">9 - 12</label>
                      </div>
                      <div class="flex items-center gap-2 font-semibold">
                        <input
                          type="radio"
                          id="Asr"
                          name="Event_Time"
                          value="Asr"
                          class="h-3 w-3"
                        />
                        <label for="Asr">12 - 3</label>
                      </div>
                      <div class="flex items-center gap-2 font-semibold">
                        <input
                          type="radio"
                          id="Asr"
                          name="Event_Time"
                          value="Asr"
                          class="h-3 w-3"
                        />
                        <label for="Asr">3 - 6</label>
                      </div>
                      <div class="flex items-center gap-2 font-semibold">
                        <input
                          type="radio"
                          id="Asr"
                          name="Event_Time"
                          value="Asr"
                          class="h-3 w-3"
                        />
                        <label for="Asr">6 - 9</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p class="mb-4">Parental Permission <span class="text-red-500">*</span></p>
                  <div class="grid grid-cols-9">
                    <div class="flex gap-3"><Input type="checkbox"></Input><Label>Yes</Label></div>
                    <div class="flex gap-3"><Input type="checkbox"></Input><Label>No</Label></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 w-full">
              <div class="py-3 flex flex-col gap-5 items-c">
                <p class="text-lg font-bold">Credit Card Details</p>
                <div class="flex gap-10">
                  <input
                    type="text"
                    placeholder="First Name"
                    class="py-2 px-4 rounded-2xl w-1/2 shadow-lg border border-black"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    class="py-2 px-4 rounded-2xl w-1/2 shadow-lg border border-black"
                  />
                </div>
                <div class="flex gap-10">
                  <div
                    class="rounded-2xl w-1/2 shadow-lg border border-black flex items-center justify-between px-4"
                  >
                    <input
                      type="text"
                      placeholder="1111 2222 3333 4444 5555"
                      class="py-2 w-1/2 rounded-2xl"
                    />
                    <img src="/src/assets/image/common/ft5.png" alt="" class="h-5" />
                  </div>
                  <div class="flex gap-5 w-1/2">
                    <input
                      type="date"
                      class="py-2 px-4 rounded-2xl w-1/2 shadow-lg border border-black"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      class="py-2 px-4 rounded-2xl w-1/2 shadow-lg border border-black"
                    />
                  </div>
                </div>
                <Select class="">
                  <SelectTrigger class="w-full rounded-2xl py-2 px-4 border border-black">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Country</SelectLabel>
                      <SelectItem value="apple"> BanglaDesh </SelectItem>
                      <SelectItem value="banana"> UsA </SelectItem>
                      <SelectItem value="blueberry"> Canada </SelectItem>
                      <SelectItem value="grapes"> Australia </SelectItem>
                      <SelectItem value="pineapple"> Rasia </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <button
                  class="w-[350px] h-[45px] rounded-2xl bg-yellow-600 text-white font-bold mx-auto"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          <!-- <RegistrationMore /> -->
        </div>
      </div>
    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
import Card from '/src/components/cardSection.vue'
import RegistrationMore from '/src/components/RgistrationMore.vue'
import { Separator } from '/components/ui/separator'
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
