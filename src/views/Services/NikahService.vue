<template>
  <div>
    <DefaultLayout>
      <div class="px-20 pt-20 mt-5 py-5 bg-pink-900 bg-[url('../assets/image/home/bg123.png')] bg-repeat shadow-xl">
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
            <p class="text-pink-900">/ Nikah Service</p>
          </div>
          <div class="rounded-lg flex items-center justify-center relative py-3">
            <h1 class="text-pink-900 text-4xl font-bold"> {{ nikahServices.service_name }} </h1>
            <div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 h-full py-5 flex gap-5 px-20 w-full">
    
        <div class="space-y-8 w-3/4">
          <div v-for="object in nikahServices.object">
            <Card :object="object"/>
          </div>
          
          
          <div class="bg-white rounded-xl p-5 w-full">
            <h1 class="text-3xl underline font-bold text-gray-700 py-3">Nikah Service Request</h1>
            <p>
              Please fill out this form to request for Nikah Service at IDL. Please select a date
              when you would like to have the Nikah Service Performed. The date is not final until
              approved by IDL administration.
            </p>
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
            <div class="flex gap-10">
              <div class="w-1/2">
                <p class="text-xl font-bold py-5">
                  Nikah Service Request Date <span class="text-red-600">*</span>
                </p>
                <Calendar v-model="date" class="rounded-md border" />
              </div>
              <div class="w-1/2">
                <div>
                  <p class="text-xl font-bold py-5">
                    Event Time<span class="text-red-600">*</span>
                  </p>
                  <div class="flex items-center gap-2 font-semibold py-2">
                    <input type="radio" id="Dhur" name="Event_Time" value="Dhur" class="h-4 w-4" />
                    <label for="Dhur">Dhur</label>
                  </div>
                  <div class="flex items-center gap-2 font-semibold py-2">
                    <input type="radio" id="Asr" name="Event_Time" value="Asr" class="h-4 w-4" />
                    <label for="Asr">Asr</label>
                  </div>
                  <div class="flex items-center gap-2 font-semibold py-2">
                    <input
                      type="radio"
                      id="Maghreb"
                      name="Event_Time"
                      value="Maghreb"
                      class="h-4 w-4"
                    />
                    <label for="Maghreb">Maghreb</label>
                  </div>
                  <div class="flex items-center gap-2 font-semibold py-2">
                    <input
                      type="radio"
                      id="Ishaa"
                      name="Event_Time"
                      value="Ishaa"
                      class="h-4 w-4"
                    />
                    <label for="Ishaa">Ishaa</label>
                  </div>
                </div>
                <div>
                  <p class="text-xl font-bold py-5">Question or Comments</p>
                  <textarea
                    name=""
                    id=""
                    cols=""
                    rows="4"
                    placeholder="Ex:23"
                    class="w-full p-3 rounded-md shadow-lg border border-black"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="flex gap-10">
              <div class="w-1/2">
                <p class="text-xl font-bold py-5">
                  Number of Guests Expecteds <span class="text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Ex:50"
                  class="py-2 px-4 rounded-2xl w-full shadow-lg border border-black"
                />
                <div class="flex items-center gap-2 py-2 px-2">
                  <input type="checkbox" name="" id="" />
                  <label for="" class="text-xs"
                    >I agree to <span class="text-blue-600">terms & conditions.</span
                    ><span class="text-red-600">*</span></label
                  >
                </div>
              </div>
              <div class="w-1/2">
                <p class="text-xl font-bold py-5">Attach a File</p>
                <div
                  class="w-full h-[40px] rounded-2xl bg-white px-4 py-2 shadow-lg text-sm text-gray-500 text-center relative border border-black"
                >
                  <input type="file" name="" id="" class="h-full w-full opacity-0 absolute top-0" />
                  Choose File
                </div>
              </div>
            </div>
            <div class="w-1/2">
              <p class="text-xl font-bold py-5">
                Nikah Service <span class="text-red-600">*</span>
              </p>
              <div class="flex items-center gap-2 pb-2">
                <input type="checkbox" name="" id="" />
                <label for="" class="font-semibold"
                  >Nikah Service Fee <span class="text-blue-600">$500</span></label
                >
              </div>
              <p class="text-xs text-gray-600">This is a one time fee for Nikah Services.</p>
            </div>
            <div>
              <div
                class="flex items-center justify-between text-xl font-bold py-3 border-b border-b-black"
              >
                <p>Total :</p>
                <p>$500</p>
              </div>
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
                  class="w-[350px] h-[45px] rounded-2xl bg-pink-900 text-white font-bold mx-auto"
                >
                  Apply
                </button>
              </div>
            </div>
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

import { ref } from 'vue'
import { Calendar } from '/components/ui/calendar'
import {useStore} from '/src/stores/store'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'

const date = ref()
const store = useStore()
const nikahServices = store.serviceList.find((e)=>e.service_name == 'Nikah Services')

</script>

<style lang="scss" scoped></style>
