<script setup lang="ts">

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

import { ref } from 'vue'
import api from '@/config/api'

const { toast } = useToast()

const jobCreate = ref({
  title: '',
  employ_type: '',
  general_job_descriptio: '',
  duties_and_responsibilities: '',
  job_qualifications_and_requirements: '',
  Key_Competencies: '',
  position_of_reports: '',
  number_of_positions: 10,
  number_of_occupied: 2,
  number_of_vacancy: 8,
  about_us: '',
  benefits: '',
  salary: ''
})

const jobceateSubmission = async () => {
  try {
    const data = await api().post('create-job', {
      method: 'post',
      body: jobCreate.value
    })
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
    <p class="text-2xl font-bold py-3 border-b">Change Applicantion Status</p>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <form @submit.prevent="jobceateSubmission()">
        <div class="py-5 space-y-7 mt-5">
          <div class="flex gap-4">
            <div class="relative mb-3 w-1/2">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="title_name"
                disabled
                v-model="jobCreate.title"
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
                disabled
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 font-semibold top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Job Id <span class="text-red-500">*</span>
              </label>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="relative mb-3 w-1/2">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="title_name"
                placeholder="https://harunrkhan-020.my.webex.com/harunrkhan-020.my-en/j.php?MTID=m2a034f7a276a5831bf782201c6a85e13"
                v-model="jobCreate.title"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 font-semibold z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Meeting Link<span class="text-red-500">*</span>
              </label>
            </div>
            <div class="relative mb-3 w-1/2">
              <div class="flex">
                <p class="pr-3">Download Resume :</p>
                <span>
                  <button
                    class="text-sm px-4 py-2 text-white bg-blue-500 cursor-pointer rounded-sm"
                  >
                    <div class="flex">
                      <span>Download</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                          />
                        </svg>
                      </span>
                    </div>
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-1/2">
              <label for="exampleFormControlInput50 mb-2"
                >Status Update<span class="text-red-500">*</span>
              </label>
              <Select v-model="jobCreate.employ_type">
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="Application Submitted" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Salaried">Application in Review</SelectItem>
                    <SelectItem value="Hourly">Interview Scheduled</SelectItem>
                    <SelectItem value="Hourly">Job Offered</SelectItem>
                    <SelectItem value="Hourly">Hired</SelectItem>
                    <SelectItem value="Hourly">Onboarding</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div class="w-1/2"></div>
          </div>
          <button
            type="submit"
            class="w-full h-[45px] rounded-2xl bg-teal-800 text-white font-bold mx-auto flex items-center text-center justify-center"
          >
            Update Status
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
