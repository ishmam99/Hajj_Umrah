<template>
    <div class="bg-white rounded-xl p-5 w-full">
            <h1 class="text-3xl underline font-bold text-gray-700 py-3">Nikah Service Request</h1>
            <p>
              Please fill out this form to request for Nikah Service at IDL. Please select a date
              when you would like to have the Nikah Service Performed. The date is not final until
              approved by IDL administration.
            </p>
            <form @submit.prevent="NikahFormApply()">
              <div class="py-5 space-y-7 mt-5">
              
                <div class="flex w-full gap-5">
                  <div class="relative mb-3 w-full">
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                      v-model="NikahForm.first_name"
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
                      v-model="NikahForm.last_name"
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
                    type="email"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                    v-model="NikahForm.email"
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >Email <span class="text-red-500">*</span>
                  </label>
                </div>
                <div class="relative mb-3 w-full">
                  <input
                    type="tel"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                    v-model="NikahForm.phone_number"
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
                  <Calendar v-model="NikahForm.nikah_service_request_date" class="rounded-md border" />
                </div>
                <div class="w-1/2">
                  <div>
                    <p class="text-xl font-bold py-5">
                      Event Time<span class="text-red-600">*</span>
                    </p>
                    <div class="flex items-center gap-2 font-semibold py-2">
                      <input 
                      v-model="NikahForm.event_time"
                      type="radio" id="Dhur" name="Event_Time" value="Dhur" 
                      class="h-4 w-4" />
                      <label for="Dhur">Dhur</label>
                    </div>
                    <div class="flex items-center gap-2 font-semibold py-2">
                      <input 
                      v-model="NikahForm.event_time"
                      type="radio" id="Asr" name="Event_Time" value="Asr" 
                      class="h-4 w-4" />
                      <label for="Asr">Asr</label>
                    </div>
                    <div class="flex items-center gap-2 font-semibold py-2">
                      <input
                      v-model="NikahForm.event_time"
                        type="radio" id="Maghreb" name="Event_Time" value="Maghreb"
                        class="h-4 w-4"
                      />
                      <label for="Maghreb">Maghreb</label>
                    </div>
                    <div class="flex items-center gap-2 font-semibold py-2">
                      <input
                      v-model="NikahForm.event_time"
                        type="radio" id="Ishaa" name="Event_Time" value="Ishaa"
                        class="h-4 w-4"
                      />
                      <label for="Ishaa">Ishaa</label>
                    </div>
                  </div>
                  <div>
                    <p class="text-xl font-bold py-5">Question or Comments</p>
                    <textarea name="" id="" cols="" rows="4" placeholder="Ex:23"
                    v-model="NikahForm.Question"
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
                  <input type="text" placeholder="Ex:50"
                  v-model="NikahForm.number_of_guests"
                    class="py-2 px-4 rounded-2xl w-full shadow-lg border border-black"
                  />
                  <div class="flex items-center gap-2 py-2 px-2">
                    <input type="checkbox" name="" id="" 
                    v-model="NikahForm.Terms"
                    />
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
                    <input 
                   
                    type="file"
                    class="h-full w-full opacity-0 absolute top-0" />
                    Choose File
                  </div>
                  <!-- <div class="grid w-full max-w-sm items-center gap-1.5">
                    <Label for="file">Picture</Label>
                    <Input id="file" type="file" 
                    @change="uploadFile()"/>
                  </div> -->
                </div>
              </div>
              <div class="w-1/2">
                <p class="text-xl font-bold py-5">
                  Nikah Service <span class="text-red-600">*</span>
                </p>
                <div class="flex items-center gap-2 pb-2">
                  <input type="checkbox" name="" id=""
                  v-model="NikahForm.service_fee" />
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
                      v-model="NikahForm.card_first_name"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      class="py-2 px-4 rounded-2xl w-1/2 shadow-lg border border-black"
                      v-model="NikahForm.card_last_name"
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
                        v-model="NikahForm.card_number"
                      />
                      <img src="/src/assets/image/common/ft5.png" alt="" class="h-5" />
                    </div>
                    <div class="flex gap-5 w-1/2">
                      <input
                        type="date"
                        class="py-2 px-4 rounded-2xl w-1/2 shadow-lg border border-black"
                        v-model="NikahForm.card_date"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        class="py-2 px-4 rounded-2xl w-1/2 shadow-lg border border-black"
                        v-model="NikahForm.cvc"
                      />
                    </div>
                  </div>
                  {{ NikahForm.country }}
                  <Select class=""
                  v-model="NikahForm.country">
                    <SelectTrigger class="w-full rounded-2xl py-2 px-4 border border-black">
                      <SelectValue placeholder="Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Country</SelectLabel>
                        <SelectItem value="USA"> UsA </SelectItem>
                        <SelectItem value="Canada"> Canada </SelectItem>
                        <SelectItem value="Aus"> Australia </SelectItem>
                        <SelectItem value="russia"> Russia </SelectItem>
                        <SelectItem value="Turkey"> Turkiye </SelectItem>
                        <SelectItem value="Uk"> UK </SelectItem>
                        <SelectItem value="Pakistan"> Pakistan </SelectItem>
                        <SelectItem value="Iran"> Iran </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <button
                  type="submit"
                    class="w-[350px] h-[45px] rounded-2xl bg-pink-900 text-white font-bold mx-auto"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </form>
            
        </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { Calendar } from '/components/ui/calendar'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'
import { Input } from '/components/ui/input'
import { Label } from '/components/ui/label'
import { useStore } from '/src/stores/store'
import api from '@/config/api'
const store = useStore()

const NikahForm = ref({
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  event_time: '',
  nikah_service_request_date: '',
  number_of_guests: '',
  comments: '',
  service_fee: '',
  card_first_name: '',
  card_last_name: '',
  card_date: '',
  cvc: '',
  country: '',
  file: '',
  card_number: '',
})
const NikahFormApply = () => {
  console.log(NikahForm.value)
 api().post('nikah-service-request',NikahForm)

}
// const uploadFile = (event) => {
//   const selectedFile = event.target.files[0];
//   console.log(event)
// }
</script>