<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-yellow-600 font-bold pb-2">Khutbah List</p>
    </div>
    <hr />
    <div
      v-if="isEdit == false"
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-xl">
            <th class="p-2 text-left">Number</th>
            <th class="p-2 text-left">Khutbah Topic</th>
            <th class="p-2 text-left">Speaker</th>
            <th class="p-2 text-left">Date</th>
            <th class="p-2 text-left">Time</th>
            <th class="p-2 text-left">Status</th>
            <th class="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="tableRowColor" v-for="(khutbah, index) in store.khutbahList" :key="index">
            <td class="py-4 p-2 gap-2">
              <h3 class="font-bold">{{ index + 1 }}</h3>
            </td>
            <td class="py-4 p-2 flex items-center gap-2">
              <h3 class="font-bold">{{ khutbah.topic }}</h3>
            </td>
            <td>
              <p class="text-lg">{{ khutbah.speaker }}</p>
            </td>
            <td class="py-4 p-2">{{ khutbah.date }}</td>
            <td class="py-4 p-2">{{ khutbah.time }}</td>
            <td class="py-4 p-2">
              <p class="text-sm font-bold text-blue-600">Pending</p>
            </td>

            <td class="py-4 p-2 flex justify-center">
              <div class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2">
                <DropdownMenu class="w-full">
                  <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                  <DropdownMenuContent class="w-40">
                    <DropdownMenuItem class="text-blue-600">Details</DropdownMenuItem>

                    <DropdownMenuItem class="text-cyan-800" @click="edit(event)"
                      >Edit</DropdownMenuItem
                    >
                    <DropdownMenuItem class="text-red-600">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M12 16L6 10H18L12 16Z"></path>
                </svg>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else>
      <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-yellow-600 font-bold pb-2">Update Khutbah</p>
    </div>
    <hr />
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <form @submit.prevent="editSubmit">
        <div class="py-5 space-y-7 mt-5">
          <div class="flex gap-4">
            <div class="relative mb-3 w-1/2">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
                v-model="khutbahList.topic"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 font-semibold z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Topic <span class="text-red-500">*</span>
              </label>
            </div>
            <div class="relative mb-3 w-1/2">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
                v-model="khutbahList.speaker"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 font-semibold top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Speaker <span class="text-red-500">*</span>
              </label>
            </div>
          </div>

          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
              Khutbah Description
            </p>
            <textarea
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="This meeting about "
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
              v-model="khutbahList.description"
            ></textarea>
          </div>

          <div class="flex gap-5">
            <div class="w-full flex flex-col gap-5">
              <div class="">
                <label for="" class="text-gray-600"
                  >Select Video <span class="text-red-500">*</span></label
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

  </div>
</template>
<script setup>
import { useMediaStore } from '/src/stores/mediaDashboard.ts'
import { ref, onMounted } from 'vue'
import { useToast } from '/components/ui/toast/use-toast'
import { useRoute, useRouter } from 'vue-router'
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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '/components/ui/dropdown-menu'

const store = useMediaStore()
const authStore = useAuthStore()

const route = useRoute()
const router = useRouter()

const loading = ref(false)
const { toast } = useToast()


const isEdit = ref(false)
const eventId = ref()

const khutbahList = async () => {
  loading.value = true
  try {
    const { data } = await api().get('khutba-list', {
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    })

    store.khutbahList = data.data
    console.log(store.khutbahList)
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

const edit = (event) => {
  isEdit.value = true
  EventList.value = event.id
  EventList.value.name = event.name
  EventList.value.event_type = event.event_type
  EventList.value.occurrence_type = event.occurrence_type
  EventList.value.human_resource = event.human_resource
  EventList.value.material_resource = event.material_resource
  EventList.value.description = event.description
  EventList.value.address = event.address
  EventList.value.state = event.state
  EventList.value.start_date = event.start_date
  EventList.value.state_time = event.state_time
  EventList.value.end_date = event.end_date
  EventList.value.end_time = event.end_time
  EventList.value.image = event.image
  console.log(event, 'event chk')
}

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

const editSubmit = async (eventId) => {
  // try {
  //   const data = await api().post('event-store', EventList.value,)
  //   console.log(data)
  //   toast({
  //     title: 'Fund Raise Event Created '
  //   })
  // } catch (error) {
  //   console.log(error)
  // }

  isEdit.value = false
}


onMounted(async () => {
  khutbahList()
})
</script>

<style>
.tableRowColor:nth-child(even) {
  background: white;
}
</style>
