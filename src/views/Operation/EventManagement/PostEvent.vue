<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-cyan-700 font-bold pb-2">Event Post</p>
    </div>
    <hr />
    <div
      v-if="isEdit == false"
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-lg">
            <th class="p-2 text-left">Event ID</th>
            <th class="p-2 text-left">Event Name(s)</th>
            <th class="p-2 text-left">Occurrence Type</th>
            <th class="p-2 text-left">Location</th>
            <th class="p-2 text-left">Start Date</th>
            <th class="p-2 text-left">End Date</th>
            <th class="p-2 text-left">Time</th>
            <!-- <th class="p-2 text-left">Status</th> -->
            <th class="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(event, index) in store.eventList" :key="event.id">
            <td class="py-4 p-2">
              <h3 class="font-bold">{{ index + 1 }}</h3>
            </td>
            <td class="py-4 p-2 flex items-center gap-2">
              <h3 class="font-bold">{{ event.name }}</h3>
            </td>
            <td class="py-4 p-2 items-center gap-2">
              <div>
                <h3 v-if="event.occurrenceType == 'Single'" class="font-semibold text-cyan-600">
                  {{ event.occurrence_type }}
                </h3>
                <h3 v-else class="font-semibold text-green-600">
                  {{ event.occurrence_type }}
                </h3>
              </div>
            </td>
            <td>
              <p class="font-semibold">{{ event.location }}</p>
            </td>
            <td class="py-4 p-2 font-semibold">
              <p>
                {{ event.start_date }}
              </p>
            </td>
            <td class="py-4 p-2 font-semibold">
              <p>
                {{ event.end_date }}
              </p>
            </td>
            <td class="py-4 p-2 font-semibold">
              <p>
                {{ event.state_time }}
              </p>
            </td>
       
            <td class="py-4 p-2 flex justify-center">
              <div
                class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2"
              >
                <DropdownMenu class="w-full">
                  <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                  <DropdownMenuContent class="w-40">
                    <DropdownMenuItem class="text-yellow-600" 
                      >Post</DropdownMenuItem
                    >

                    <DropdownMenuItem class="text-blue-600" @click="edit(event)"
                      >Edit</DropdownMenuItem
                    >
                    <DropdownMenuItem class="text-red-600" 
                      >Delete</DropdownMenuItem
                    >
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
      <div class="bg-white rounded-xl px-5 w-full shadow-md mt-5">
        <form @submit.prevent="editSubmit">
          <div class="py-5 space-y-5">
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
                        <SelectItem value="Shelter The Homeless">
                          Social Outreach Event
                        </SelectItem>
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
                  class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
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
                    <label for="" class=""
                      >Starting Date <span class="text-red-500">*</span>
                    </label>
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
            <div class="flex justify-center items-center gap-5">
              <button
              @click="editSubmit"
                type="submit"
                class="w-[200px] h-[40px] rounded-2xl bg-teal-800 text-white font-bold flex items-center text-center justify-center"
              >
                Submit
              </button>
              <button
              @click="isEdit = false"
                class="w-[200px] h-[40px] rounded-2xl bg-red-600 text-white font-bold flex items-center text-center justify-center"
              >
                Cancle
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
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

import { useSocialStore } from '/src/stores/SocialDashboard.ts'
const store = useSocialStore()

const getEventList = async () => {
  try {
    const { data } = await api().get('event-list')
    store.eventList = data.data
    console.log(store.eventList)
  } catch (error) {
    console.log(error)
  }
}

const isEdit = ref(false)
const eventId = ref()

const edit = (event) => {
  isEdit.value = true
  eventId.value = event.id
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
  getEventList()
})
</script>
