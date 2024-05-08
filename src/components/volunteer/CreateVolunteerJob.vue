<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <p class="text-2xl font-bold py-3 border-b">Create Volunteer Job</p>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <form @submit.prevent="volunteerAdmissionSubmit()">
        <div class="py-5 space-y-7 mt-5">
          <div class="flex gap-4">
            <div class="relative mb-3 w-1/2">
              <input
              v-model="volunteerPostForm.title"
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 font-semibold z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Job Title <span class="text-red-500">*</span>
              </label>
            </div>

            <div class="relative mb-3 w-1/2">
              <label
                for="exampleFormControlInput50"
                class="mb-2 left-3 -top-3 absolute bg-white font-semibold z-10 px-2"
                >Volunteering Type <span class="text-red-500">*</span>
              </label>
              <Select
              v-model="volunteerPostForm.volunteer_type">
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <!-- <SelectLabel>Product</SelectLabel> -->
                    <SelectItem value="On Site"> On Site </SelectItem>
                    <SelectItem value="Remote"> Remote </SelectItem>
                    <SelectItem value="Hybrid"> Hybrid </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">Job Description</p>
            <textarea
            v-model="volunteerPostForm.description"
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="Ex:23"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
            ></textarea>
          </div>

          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
              Duties and Responsibilities
            </p>
            <textarea
            v-model="volunteerPostForm.responsibilities"
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="Ex:23"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
            ></textarea>
          </div>
          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">Benefits</p>
            <input
            v-model="volunteerPostForm.benefits"
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="If he apply what a volunteer get"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
            />
          </div>

          <div class="flex gap-5">
            <div class="relative w-1/2">
              <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">Age Group</p>
              <input
              v-model="volunteerPostForm.age_rnge"
                name=""
                id=""
                cols=""
                rows="4"
                placeholder="Set requried age group"
                class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
              />
            </div>
            <div class="relative mb-3 w-1/2">
              <label
                for="exampleFormControlInput50"
                class="mb-2 left-3 -top-3 absolute bg-white text-gray-600 z-10 px-2"
                >Gender <span class="text-red-500">*</span>
              </label>
              <Select
              v-model="volunteerPostForm.gender">
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <!-- <SelectLabel>Product</SelectLabel> -->
                    <SelectItem value="male"> Male </SelectItem>
                    <SelectItem value="female"> Female </SelectItem>
                    <SelectItem value="Male Or Female"> Male or Female </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
              Required Qualifications
            </p>
            <input
            v-model="volunteerPostForm.qualification"
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="Need any qualification for applying as volunteer?"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
            />
          </div>

          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">Volunteer Venue</p>
            <input
            v-model="volunteerPostForm.venue"
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="Set the volunteer location"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
            />
          </div>

          <div class="flex gap-5">
            <div class="relative w-1/2">
              <div class="gap-5">
                <label for="">Volunteer Event Date <span class="text-red-500">*</span> </label>
                <div class="pt-2">
                  <input
                  v-model="volunteerPostForm.date"
                    type="date"
                    class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                  />
                </div>
              </div>
            </div>
            <div class="relative w-1/2">
              <div class="gap-5">
                <label for="">Volunteer Event Time <span class="text-red-500">*</span> </label>
                <div class="pt-2">
                  <input
                  v-model="volunteerPostForm.time"
                    type="time"
                    class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">Total Working Time</p>
            <input
            v-model="volunteerPostForm.total_working_time"
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="Set the total working time"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
            />
          </div>
          <div class="w-full flex flex-col gap-5">
            <div class="">
              <label for="" class="text-gray-600"
                >Select Thumbnail <span class="text-red-500">*</span></label
              >
              <div
                class="flex justify-center items-center h-[45px] rounded-2xl bg-white px-4 py-2 text-sm text-gray-500 text-center relative border-2 mt-2"
              >
                <input @change="onFileChange"
                type="file" class="h-full w-full opacity-0 absolute top-0" />
                Choose File
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

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useVolunteerDashboardStore } from '/src/stores/volunteerStore2'
import { ref } from 'vue'
import { useToast } from '/components/ui/toast/use-toast'
import { useAuthStore } from '@/stores/AuthStore.ts'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'

const { toast } = useToast()
const route = useRoute()
const router = useRouter()
const authStore = useAuthStore();
const volunteerPostForm = ref({
  title: '',
  volunteer_type: '',
  description: '',
  age_rnge:'',
  venue:'',
  date:'',
  time:'',
  total_working_time:'',
  responsibilities:'',
  gender:'',
  benefits:'',
  qualification:'',
  image:''
})

const selectedFile = ref(null)

  function onFileChange(event) {
  selectedFile.value = event.target.files[0]
  volunteerPostForm.value.image = event.target.files[0]
  console.log('selected image', selectedFile.value)
}
const volunteerAdmissionSubmit = async () => {

  try {
    const data = await api().post('volunteer-job-store',volunteerPostForm.value, {
      headers: {
      Authorization: `Bearer ${authStore.token}`
    }
    })
    toast({
      title: 'Success',
      description: 'Category Posted'
    })
    console.log(data)
    // router.push({ name: 'Volunteer job posted' })
  } catch (error) {
    console.log(error)
    toast({
      title: 'Error',
      description: 'Please Try Again'
    })
  }

}
</script>
