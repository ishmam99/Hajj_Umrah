<script setup lang="ts">
import { useToast } from '/components/ui/toast/use-toast'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'

import { ref } from 'vue'
import api from '@/config/api'
const { toast } = useToast()

const positionCreate = ref({
  job_title: '',
  repost_to: '',
  responsible_for: '',
  number_of_position: '',
  position_occupied: '',
  vacancies_available: '',
  salary_amount: '',
  salary_type: ''
})

const jobceateSubmission = async () => {
  try {
    const data = await api().post('create-define-position', positionCreate.value)
    console.log('Create job check:', data)
    toast({
      title: 'Success',
      description: 'Job Create Succesfully!'
    })
  } catch (error) {
    console.log(error)
    toast({
      title: 'Error',
      description: 'Fail to create Job!!'
    })
  }
}
</script>

<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <p class="text-2xl font-bold py-3 border-b">Define Postion</p>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <form @submit.prevent="jobceateSubmission()">
        <div class="py-5 space-y-7 mt-5">
          <div class="flex gap-4">
            <div class="relative mb-3 w-1/2">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.50rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="title_name"
                v-model="positionCreate.job_title"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 font-semibold z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Job Title <span class="text-red-500">*</span>
              </label>
            </div>
            <div class="relative mb-3 w-1/2">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.50rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                v-model="positionCreate.repost_to"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 font-semibold top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Reports to <span class="text-red-500">*</span>
              </label>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="relative mb-3 w-1/2">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.50rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="title_name"
                v-model="positionCreate.responsible_for"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 font-semibold z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Responsible for <span class="text-red-500">*</span>
              </label>
            </div>
            <div class="relative mb-3 w-1/2">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.50rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                v-model="positionCreate.number_of_position"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 font-semibold top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Number of Positions <span class="text-red-500">*</span>
              </label>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="relative mb-3 w-1/2">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.50rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="title_name"
                v-model="positionCreate.position_occupied"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 font-semibold z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Positions Occupied <span class="text-red-500">*</span>
              </label>
            </div>
            <div class="relative mb-3 w-1/2">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.50rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                v-model="positionCreate.vacancies_available"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 font-semibold top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Vacancies available <span class="text-red-500">*</span>
              </label>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="relative w-1/2">
              <Select v-model="positionCreate.salary_type">
                <SelectTrigger class="w-full py-4">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Salaried">Salaried </SelectItem>
                    <SelectItem value="Hourly">Hourly </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <label
                for="exampleFormControlInput50 mb-2"
                class="absolute left-3 font-semibold top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Salary type <span class="text-red-500">*</span>
              </label>
            </div>
            <div class="w-1/2">
              <div class="relative mb-3">
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.50rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                  id="exampleFormControlInput50"
                  v-model="positionCreate.salary_amount"
                />
                <label
                  for="exampleFormControlInput50"
                  class="absolute left-3 font-semibold top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                  >Salary Amount <span class="text-red-500">*</span>
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="w-full h-[45px] rounded-2xl bg-teal-800 text-white font-bold mx-auto flex items-center text-center justify-center"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
