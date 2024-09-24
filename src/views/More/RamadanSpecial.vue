<template>
  <div>
    <DefaultLayout>
      <div
        class="px-20 pt-20 mt-5 py-5 bg-emerald-800 bg-[url('../assets/image/home/bg123.png')] bg-repeat shadow-xl"
      >
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
            <p>/ More</p>
            <!-- <p>/ Volunteers</p> -->
            <p class="text-emerald-800">/ Ramadan Special</p>
          </div>
          <div class="rounded-lg flex items-center justify-center relative py-3">
            <h1 class="text-emerald-800 text-4xl font-bold">Ramadan Special</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full bg-[url('../assets/image/home/dua_banner.png')] bg-emerald-800">
        <h1 class="py-10 text-center bg-[#2d292938] text-4xl text-white font-bold">
          To Inquire or Register in RAMADAN Programs
        </h1>
        <!-- <p>{{ surahOfTheDay}}</p> -->
      </div>
      <div
        class="bg-gray-100 bg-repeat h-full py-5 flex items-center justify-center gap-5 px-20 w-full"
      >
        <div class="space-y-8 w-3/4">
          <form @submit.prevent="ramadanProgramSubmission()">
            <div class="bg-white rounded-xl p-5 w-full mb-4">
              <p class="pt-5 text-lg font-semibold">Choose the program/s that you interested in:</p>
              <div class="pt-5 ml-10">
                <div class="grid grid-cols-2 gap-4">
                  <div class="flex items-center gap-2 font-semibold">
                    <input
                      type="checkbox"
                      id="Asr"
                      name="Event_Time"
                      value="Khatma"
                      class="h-3 w-3 px-2"
                    />
                    <label for="Asr" class="text-lg">RAMADAN KHATMA</label>
                  </div>
                  <div class="flex items-center gap-2 font-semibold">
                    <input
                      type="checkbox"
                      id="Asr"
                      name="Event_Time"
                      value="Kahf"
                      class="h-3 w-3 px-2"
                    />
                    <label for="Asr" class="text-lg">Surat Al-Kahf</label>
                  </div>
                  <div class="flex items-center gap-2 font-semibold">
                    <input
                      type="checkbox"
                      id="Asr"
                      name="Event_Time"
                      value="Hafiz"
                      class="h-3 w-3 px-2"
                    />
                    <label for="Asr" class="text-lg">Imam and Hafiz Program</label>
                  </div>
                  <div class="flex items-center gap-2 font-semibold">
                    <input
                      type="checkbox"
                      id="Asr"
                      name="Event_Time"
                      value="Stories"
                      class="h-3 w-3 px-2"
                    />
                    <label for="Asr" class="text-lg">Best Stories</label>
                  </div>
                  <div class="flex items-center gap-2 font-semibold">
                    <input
                      type="checkbox"
                      id="Asr"
                      name="Event_Time"
                      value="Fiqh"
                      class="h-3 w-3 px-2"
                    />
                    <label for="Asr" class="text-lg">Fiqh of Fasting</label>
                  </div>
                  <div class="flex items-center gap-2 font-semibold">
                    <input
                      type="checkbox"
                      id="Asr"
                      name="Event_Time"
                      value="Azkar"
                      class="h-3 w-3 px-2"
                    />
                    <label for="Asr" class="text-lg">Azkar Program</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl p-5 w-full mb-4">
              <p class="text-xl font-bold pt-2 pb-2">
                Membership Type<span class="text-red-600">*</span>
              </p>
              <div class="grid grid-cols-1 gap-2">
                <div class="flex items-center gap-2 font-semibold">
                  <input
                    id="Asr"
                    type="radio"
                    name="Event_Time"
                    value="Individual"
                    class="h-3 w-3"
                    v-model="ramadanProgram.membership_type"
                  />
                  <label for="Dhur">Individual (Masjid Membership)</label>
                </div>
                <div class="flex items-center gap-2 font-semibold">
                  <input
                    type="radio"
                    id="Asr"
                    name="Event_Time"
                    value="Family"
                    class="h-3 w-3"
                    v-model="ramadanProgram.membership_type"
                  />
                  <label for="Asr">Family (Masjid Membership)</label>
                </div>
              </div>
              <div class="pt-10">
                <h1 class="text-2xl font-semibold">Member # 1 Information</h1>
              </div>
              <div class="py-5 space-y-7 mt-5">
                <div class="flex w-full gap-5">
                  <div class="relative mb-3 w-full">
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                      v-model="ramadanProgram.first_name"
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
                      v-model="ramadanProgram.last_name"
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
                      v-model="ramadanProgram.email"
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
                      v-model="ramadanProgram.phone_number"
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
                      v-model="ramadanProgram.address"
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
                        v-model="ramadanProgram.city"
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
                        v-model="ramadanProgram.state"
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
                        v-model="ramadanProgram.dob"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 w-full mb-4">
              <div class="w-1/2">
                <p class="text-sm font-semibold">
                  I have donated excess $100 (Family) or $50 (Individual) this year to Masjid
                  Operations
                </p>
                <div class="flex items-center gap-2 py-2 px-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    class="h-3 w-3"
                    v-model="ramadanProgram.donation"
                  />
                  <label for="" class="text-xs"
                    >Donated ($100 for family or $50 for individual or more)</label
                  >
                </div>
              </div>
              <p class="text-sm font-semibold pt-5 pb-2">
                By my signature I/We indicate that I/We have read and understand IDL-Masjid
                Constitution. I am Muslim above 18 years of age that agrees to abide by the policies
                of IDL-Masjid and its Constitution.<span class="text-red-600">*</span>
              </p>
              <div class="grid grid-cols-2 gap-2 px-2">
                <div class="flex items-center gap-2">
                  <input
                    id="Asr"
                    type="radio"
                    name="policy"
                    value="Individual"
                    class="h-3 w-3"
                    v-model="ramadanProgram.policy_type"
                  />
                  <label for="Dhur" class="text-xs">Individual (Masjid Membership)</label>
                </div>
                <div class="flex items-center gap-2">
                  <input
                    type="radio"
                    id="Asr"
                    name="policy"
                    value="Family"
                    class="h-3 w-3"
                    v-model="ramadanProgram.policy_type"
                  />
                  <label for="Asr" class="text-xs">Family (Masjid Membership)</label>
                </div>
              </div>
              <div class="pt-10">
                <h2 class="font-semibold">
                  Masjid Membership Dues <span class="text-red-500">*</span>
                </h2>
                <div class="pt-5">
                  <input
                    type="text"
                    placeholder="100 USD"
                    class="py-2 px-4 rounded-2xl w-50 shadow-lg border border-black"
                    v-model="ramadanProgram.due"
                  />
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
                    v-model="ramadanProgram.card_first_name"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    class="py-2 px-4 rounded-2xl w-1/2 shadow-lg border border-black"
                    v-model="ramadanProgram.card_last_name"
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
                      v-model="ramadanProgram.card_number"
                    />
                    <img src="/src/assets/image/common/ft5.png" alt="" class="h-5" />
                  </div>
                  <div class="flex gap-5 w-1/2">
                    <input
                      type="date"
                      class="py-2 px-4 rounded-2xl w-1/2 shadow-lg border border-black"
                      v-model="ramadanProgram.card_date"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      class="py-2 px-4 rounded-2xl w-1/2 shadow-lg border border-black"
                      v-model="ramadanProgram.cvc"
                    />
                  </div>
                </div>
                <Select class="" v-model="ramadanProgram.country">
                  <SelectTrigger class="w-full rounded-2xl py-2 px-4 border border-black">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Country</SelectLabel>
                      <SelectItem value="Bangladesh"> Bangladesh </SelectItem>
                      <SelectItem value="USA"> USA </SelectItem>
                      <SelectItem value="Canada"> Canada </SelectItem>
                      <SelectItem value="Australia"> Australia </SelectItem>
                      <SelectItem value="UK"> UK </SelectItem>
                      <SelectItem value="Turkey"> Turkey </SelectItem>
                      <SelectItem value="Russia"> Russia </SelectItem>
                      <SelectItem value="Pakistan"> Pakistan </SelectItem>
                      <SelectItem value="Syria"> Syria </SelectItem>
                      <SelectItem value="Sudan"> Sudan </SelectItem>
                      <SelectItem value="Morocco"> Morocco </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <button
                  :disabled="loading"
                  class="w-[350px] h-[45px] rounded-2xl bg-emerald-800 text-white font-bold mx-auto"
                  type="submit"
                >
                  <p v-if="loading" class="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      class="animate-spin w-5 h-5"
                    >
                      <path
                        d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"
                      ></path>
                    </svg>
                    Creating...
                  </p>
                  <p v-else>Apply</p>
                </button>

                <!-- <button
                  :disabled="loading"
                  class="text-white font-semibold text-sm px-3 py-3 rounded-lg bg-green-600 mt-2"
                  type="submit"
                >
                  <p v-if="loading" class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      class="animate-spin w-5 h-5"
                    >
                      <path
                        d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"
                      ></path>
                    </svg>
                    Creating...
                  </p>
                  <p v-else>Create Your Fundraising</p>
                </button> -->
              </div>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
// import Card from '/src/components/cardSection.vue'
// import RegistrationMore from '/src/components/RgistrationMore.vue'
import { ref } from 'vue'
import { useToast } from '/components/ui/toast/use-toast'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'

const loading = ref(false)
const { toast } = useToast()

const ramadanProgram = ref({
  membership_type: {},
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  address: '',
  city: '',
  state: '',
  dob: '',
  due: '',
  donation: '',
  policy_type: '',
  card_first_name: '',
  card_last_name: '',
  card_number: '',
  card_date: '',
  cvc: '',
  country: ''
})

const ramadanProgramSubmission = async () => {
  loading.value = true
  try {
    const data = await api().post('ramadan-program-request', {
      method: 'post',
      body: ramadanProgram
    })
    toast({
      title: 'Success',
      description: data.data.message
    })
    console.log(data)
  } catch (error) {
    console.log(error)
    toast({
      title: 'Error',
      description: 'Please Try Again'
    })
  }
  loading.value = false
}
</script>

<style lang="scss" scoped></style>
