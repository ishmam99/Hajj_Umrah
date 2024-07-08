<template>
  <div class="px-5 bg-slate-50 py-5">
    <p class="text-2xl text-cyan-700 font-bold pb-2">Create Program</p>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <h4 @click="showCourseTypeEntry = !showCourseTypeEntry"
        class="flex justify-end gap-2 items-center cursor-pointer font-bold text-xl">Entry Program Type <svg
          v-if="showCourseTypeEntry" class="bg-green-300 p-1 rounded" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" width="28" height="28" fill="rgba(255,255,255,1)">
          <path
            d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z">
          </path>
        </svg>
        <svg v-else class="bg-red-300 p-1 rounded" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28"
          height="28" fill="rgba(255,255,255,1)">
          <path d="M5 11V13H19V11H5Z"></path>
        </svg>
      </h4>

      <form v-if="!showCourseTypeEntry" @submit.prevent="submitCourseType()">
        <div class="py-5 space-y-7 mt-5">
          <div class="flex gap-3">
            <div class="relative w-full mb-3">
              <input type="text" v-model="courseTypeInput.course_type"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50" value="" required />
              <label for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.2] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary">Enter
                Program Type<span class="text-red-500">*</span>
              </label>
            </div>
          </div>

          <button type="submit"
            class="w-1/2 h-[45px] rounded-2xl bg-teal-800 text-white font-bold mx-auto flex items-center text-center justify-center"><svg
              v-if="loading" xmlns="http://www.w3.org/2000/svg" class="animate-spin !m-0 w-5 h-5" viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)">
              <path
                d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z">
              </path>
            </svg>
            Create
          </button>
        </div>
      </form>

      <hr>

      <form @submit.prevent="submitProgram()">
        <div class="py-5 space-y-7 mt-5">
          <div class="flex gap-5">
            <div class="relative mb-3 w-1/2">
              <input type="text" v-model="createProgram.course_name"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50" value="" />
              <label for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.2] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary">Program
                Name <span class="text-red-500">*</span>
              </label>
            </div>
            <div class="w-1/2">
              <div class="relative mb-3">
                <Select v-model="createProgram.course_type">
                  <SelectTrigger class="w-full">
                    <SelectValue placeholder="Program Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup v-for="courseType in store.courseTypeInfo" :key="courseType.id">
                      <!-- {{ courseType }} -->
                      <!-- <SelectLabel>Select Course Type</SelectLabel> -->
                      <SelectItem :value="courseType.id">{{ courseType.title }}</SelectItem>
                      <!-- <SelectItem value="Full Time">Full Time</SelectItem>
                      <SelectItem value="Part Time">Part Time</SelectItem> -->
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div class="relative mb-3">
            <Select v-model="createProgram.course_status">
              <SelectTrigger class="w-full">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Status</SelectLabel>
                  <SelectItem value="1">Active</SelectItem>
                  <SelectItem value="0">Inactive</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
              Program Description <span class="text-red-500">*</span>
            </p>
            <textarea name="" id="" cols="" rows="4" placeholder="Ex:23"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
              v-model="createProgram.course_description"></textarea>
          </div>

          <button type="submit"
            class="w-full h-[45px] rounded-2xl bg-teal-800 text-white font-bold mx-auto flex items-center text-center justify-center">
            <svg v-if="loading" xmlns="http://www.w3.org/2000/svg" class="animate-spin !m-0 w-5 h-5" viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)">
              <path
                d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z">
              </path>
            </svg>
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SocialSidebar from '/src/views/Operation/OperationSidevar.vue'
import { useSocialStore } from '@/stores/SocialDashboard.ts'
import { onMounted, ref } from 'vue'
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
import { useLMSStore } from '@/stores/LMSdashboard';
const store = useLMSStore()

const showCourseTypeEntry = ref(true);

const courseTypeInput = ref({
  course_type: '',
})

const createProgram = ref({
  course_name: '',
  course_description: '',
  course_type: '',
  course_status: '',
})

const loading = ref(false)
const { toast } = useToast()

const programData = async () => {
  loading.value = true;
  try {
    const { data } = await api().get('course-type')
    store.courseTypeInfo = data.data
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

const submitCourseType = async () => {
  loading.value = true
  try {
    const data = await api().post('course-type', courseTypeInput.value)
    toast({
      title: 'Success',
      description: 'Course Type Created'
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

const submitProgram = async () => {
  loading.value = true
  try {
    const data = await api().post('program', createProgram.value)
    toast({
      title: 'Success',
      description: 'Program Created'
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

onMounted(async () => {
  programData()
})
</script>
