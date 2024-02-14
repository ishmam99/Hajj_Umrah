<script setup>
import { ref, onMounted, defineProps, defineEmits } from 'vue'
import { storeToRefs } from 'pinia'
import { useVolunteerDataStore } from '@/stores/volunteerStore.ts'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'

// pinia
const { volunteerInterestExpertise } = storeToRefs(useVolunteerDataStore())
const { setVolunteerInterestExpertise } = useVolunteerDataStore()

const props = defineProps({
  selectedVolunteerPost: {}
})
const emits = defineEmits(['allVolunteerPost'])

// Function to call the parent function
const goToAllVolunteerPost = () => {
  emits('allVolunteerPost')
}

const volunteerAdmissionSubmit = () => {
  setVolunteerInterestExpertise(volunteerInterestExpertise.value)
}

const volunteerDetails = ref({
  name: '',
  email: ''
})

onMounted(() => {
  // console.log(props.selectedVolunteerPost, props.selectedVolunteerPost.postTitle, 'here the props')
})
const participants_yob = ref(2010)
</script>

<template>
  <div class="px-5 bg-slate-50 py-5">
    <div class="text-2xl font-bold py-3 border-b flex items-center space-x-3">
      <div class="w-5 h-5 cursor-pointer" @click="goToAllVolunteerPost">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
          />
        </svg>
      </div>
      <p>Apply Volunteer Job For: {{ props.selectedVolunteerPost.postTitle }}</p>
    </div>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <form @submit.prevent="volunteerAdmissionSubmit()">
        <div class="py-5 space-y-7 mt-5">
          <div class="flex gap-4">
            <div class="relative mb-3 w-1/2">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                :value="volunteerDetails.name"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 font-semibold z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Name <span class="text-red-500">*</span>
              </label>
            </div>

            <div class="relative mb-3 w-1/2">
              <input
                type="email"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 font-semibold z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Email <span class="text-red-500">*</span>
              </label>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="relative mb-3 w-1/2">
              <input
                type="number"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Phone <span class="text-red-500">*</span>
              </label>
            </div>

            <div class="relative mb-3 w-1/2">
              <input
                v-model="participants_yob"
                type="number"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Year of Birth <span class="text-red-500">*</span>
              </label>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="relative mb-3 w-1/2">
              <label
                for="exampleFormControlInput50"
                class="mb-2 left-3 -top-3 absolute bg-white text-gray-600 z-10 px-2"
                >Gender <span class="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <!-- <SelectLabel>Product</SelectLabel> -->
                    <SelectItem value="male"> Male </SelectItem>
                    <SelectItem value="female"> Female </SelectItem>
                    <SelectItem value="maleOrFemale"> Other </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div class="relative mb-3 w-1/2">
              <input
                type="email"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Hobbies and Interest <span class="text-red-500">*</span>
              </label>
            </div>
          </div>

          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
              Educational Qualification
            </p>
            <input
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="H.S.C"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
            />
          </div>

          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">Expertise</p>
            <input
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="Software Developer"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
            />
          </div>

          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
              Professional Experience (If any)
            </p>
            <textarea
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="Professional Experience"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
            ></textarea>
          </div>

          <div class="relative" v-if="new Date().getFullYear() - participants_yob > 18">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">Address</p>
            <input
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="Address"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
            />
          </div>

          <div
            v-if="new Date().getFullYear() - participants_yob < 18"
            class="border border-gray-600 p-2 rounded-md"
          >
            <div>
              <p class="p-3 left-2 bg-white text-gray-600">Parent Information</p>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex gap-4">
                <div class="relative mb-3 w-1/2">
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 font-semibold z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >Name <span class="text-red-500">*</span>
                  </label>
                </div>

                <div class="relative mb-3 w-1/2">
                  <input
                    type="email"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 font-semibold z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >Email <span class="text-red-500">*</span>
                  </label>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="relative mb-3 w-1/2">
                  <input
                    type="number"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >Phone <span class="text-red-500">*</span>
                  </label>
                </div>

                <div class="relative mb-3 w-1/2">
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >Relationship <span class="text-red-500">*</span>
                  </label>
                </div>
              </div>

              <div class="relative">
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                  id="exampleFormControlInput50"
                  value=""
                />
                <label
                  for="exampleFormControlInput50"
                  class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                  >Address <span class="text-red-500">*</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <fieldset class="p-4">
              <legend class="font-bold text-white">Interest in other volunteer jobs</legend>
              <div class="flex flex-wrap gap-x-8">
                <div
                  v-for="volunteerInterestExpert in volunteerInterestExpertise"
                  :key="volunteerInterestExpert.id"
                  class="flex space-x-2 my-2"
                >
                  <label class="flex space-x-2">
                    <input
                      v-model="volunteerInterestExpert.isChecked"
                      :id="volunteerInterestExpert.id"
                      type="checkbox"
                      :value="volunteerInterestExpert.isChecked"
                      name="interest"
                    />
                    <div class="w-[200px]">
                      {{ volunteerInterestExpert.interestField }}
                    </div>
                  </label>
                  <select v-model="volunteerInterestExpert.expertise">
                    <option>Expert</option>
                    <option>Intermediate</option>
                    <option>Beginner</option>
                  </select>
                </div>
              </div>
            </fieldset>
          </div>

          <button
            type="submit"
            class="w-full h-[45px] rounded-2xl bg-teal-800 text-white font-bold mx-auto flex items-center text-center justify-center"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}

fieldset {
  background: cyan;
  border: 5px solid rgb(136, 136, 241);
}

legend {
  padding: 10px;
  background: white;
  border: 2px solid black;
  color: black;
}
</style>
