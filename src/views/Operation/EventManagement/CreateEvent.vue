<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <p class="text-2xl font-bold py-3 border-b">Create Event</p>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <form @submit.prevent="upcomingEvent()">
        <div class="py-5 space-y-7 mt-5">
          <div class="flex items-center justify-center gap-5">
            <div class="relative mb-3 w-3/4">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
                v-model="EventList.name"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Event Name <span class="text-red-500">*</span>
              </label>
            </div>
            <div class="w-1/4">
              <div class="relative mb-3">
                <Select v-model="EventList.event_type">
                  <SelectTrigger class="w-full">
                    <SelectValue placeholder="Event Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Event Type</SelectLabel>
                      <SelectItem value="Comfort The Sick"> Sports Event </SelectItem>
                      <SelectItem value="Educate The Children"> Religious Event </SelectItem>
                      <SelectItem value="Shelter The Homeless"> Social Outreach Event </SelectItem>
                      <SelectItem value="Shelter"> Humanitarian Assistance Event </SelectItem>
                      <SelectItem value="Homeless"> Donation Collection Event </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
              Event Description <span class="text-red-500">*</span>
            </p>
            <textarea
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="Ex:23"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
              v-model="EventList.description"
            ></textarea>
          </div>

          <div class="flex gap-5">
            <div class="relative w-1/2">
              <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
                Human Resource <span class="text-red-500">*</span>
              </p>
              <textarea
                name=""
                id=""
                cols=""
                rows="4"
                placeholder="Ex:23"
                class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
                v-model="EventList.human_resource"
              ></textarea>
            </div>
            <div class="relative w-1/2">
              <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
                Material Resource <span class="text-red-500">*</span>
              </p>
              <textarea
                name=""
                id=""
                cols=""
                rows="4"
                placeholder="Ex:23"
                class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
                v-model="EventList.material_resource"
              ></textarea>
            </div>
          </div>

          <div class="flex w-full gap-5">
            <div class="relative mb-3 w-full">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[2] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
                v-model="EventList.address"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Event Location <span class="text-red-500">*</span>
              </label>
            </div>
            <div class="flex w-full gap-5">
              <div class="relative mb-3 w-full">
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                  id="exampleFormControlInput50"
                  value=""
                  v-model="EventList.city"
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
                  v-model="EventList.state"
                />
                <label
                  for="exampleFormControlInput50"
                  class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                  >State <span class="text-red-500">*</span>
                </label>
              </div>
            </div>
          </div>

          <div class="flex justify-between gap-5">
            <div class="w-1/3 flex flex-col gap-5">
              <div class="relative">
                <div class="gap-5">
                  <label for="" class="">Starting Date <span class="text-red-500">*</span> </label>
                  <div class="pt-2">
                    <input
                      type="date"
                      class="py-2 px-6 rounded-2xl w-full border-2"
                      v-model="EventList.start_date"
                    />
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="gap-5">
                  <label for="">Starting Time <span class="text-red-500">*</span> </label>
                  <div class="pt-2">
                    <input
                      type="time"
                      class="py-2 px-6 rounded-2xl w-full border-2"
                      v-model="EventList.state_time"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="w-1/3 flex flex-col gap-5">
              <div class="relative">
                <div class="gap-5">
                  <label for="">Ending Date <span class="text-red-500">*</span> </label>
                  <div class="pt-2">
                    <input
                      type="date"
                      class="py-2 px-6 rounded-2xl w-full border-2"
                      v-model="EventList.end_date"
                    />
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="gap-5">
                  <label for="">Ending Time <span class="text-red-500">*</span> </label>
                  <div class="pt-2">
                    <input
                      type="time"
                      class="py-2 px-6 rounded-2xl w-full border-2"
                      v-model="EventList.end_time"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="w-1/3 flex flex-col gap-5">
              <div class="">
                <label for="" class="text-gray-600"
                  >Event Thumbnail <span class="text-red-500">*</span></label
                >
                <div
                  class="flex justify-center items-center h-[45px] rounded-2xl bg-white px-4 py-2 text-sm text-gray-500 text-center relative border-2 mt-2"
                >
                  <input
                    @change="onFileChange"
                    type="file"
                    class="h-full w-full opacity-0 absolute top-0"
                  />
                  Choose File
                </div>
              </div>
              <div>
                <label for="">Occurrence Type <span class="text-red-500">*</span> </label>
                <div class="pt-2">
                  <Select class="" v-model="EventList.occurrence_type">
                    <SelectTrigger class="w-full">
                      <SelectValue placeholder="Occurrence Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select Occurrence Type</SelectLabel>
                        <SelectItem value="Single"> Single Event </SelectItem>
                        <SelectItem value="Recurring"> Recurring Event </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <button type="submit" class="w-full h-[45px] rounded-2xl bg-teal-800 text-white font-bold mx-auto flex items-center text-center justify-center">
            <svg
                v-if="loading"
                xmlns="http://www.w3.org/2000/svg"
                class="animate-spin !m-0 w-5 h-5"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,1)"
              >
                <path
                  d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"
                ></path></svg>Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SocialSidebar from '/src/views/Operation/OperationSidevar.vue'

import { useOperationStore } from '@/stores/operationDashboard'
import { useAuthStore } from '/src/stores/AuthStore.ts'
import { ref } from 'vue'
import { useToast } from '/components/ui/toast/use-toast'
import { useRoute, useRouter } from 'vue-router'

const store = useOperationStore()
const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()

const selectedFile = ref(null)

const EventList = ref({
  name: '',
  event_type: '',
  occurrence_type: '',
  human_resource: '',
  material_resource: '',
  description: '',
  address: '',
  city: '',
  state: '',
  start_date: '',
  state_time: '',
  end_date: '',
  end_time: '',
  image: ''
})

function onFileChange(event) {
  selectedFile.value = event.target.files[0]
  EventList.value.image = event.target.files[0]
  console.log('Selected File:', selectedFile.value)
}

const loading = ref(false)
const { toast } = useToast()

const upcomingEvent = async () => {
  loading.value = true;
  try {
    const data = await api().post('event-store', EventList.value,)
    console.log(data)
    toast({
      title: 'Event Created '
    })
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

</script>
