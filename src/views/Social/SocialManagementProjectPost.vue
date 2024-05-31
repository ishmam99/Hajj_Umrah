<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-cyan-700 font-bold pb-2">Project Post</p>
    </div>
    <hr />
    <div v-if="isEdit == false"
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-lg">
            <th class="p-2 text-left">SL</th>
            <th class="p-2 text-left">Project Name(s)</th>
            <th class="text-left">Address</th>
            <th class="p-2 text-left">Starting Date</th>
            <th class="p-2 text-left">Ending Date</th>
            <th class="p-2 text-left">Time</th>
            <!-- <th class="p-2 text-left">Status</th> -->
            <th class="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(project,index) in store.projectList" :key="project.id" class="tableRowBg">
            <td class="py-4 p-2">
              <h3 class="font-bold">{{ index+1 }}</h3>
            </td>
            <td class="py-4 p-2 flex items-center gap-2">
              <h3 class="font-bold">{{ project.name }}</h3>
            </td>
            <td>
            <p class="font-semibold">{{ project.address }}</p>
            </td>
            <td class="py-4 p-2 font-semibold">
              {{ project.start_time }}
            </td>
            <td class="py-4 p-2 font-semibold">
              {{ project.end_date }}
            </td>
            <td class="py-4 p-2 font-semibold">
              {{ project.start_time }} - {{ project.end_time }}
            </td>
            <td class="py-4 p-2">
              <div class="flex items-center gap-4">
                <div @click="edit(project)" class="relative group">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="rgb(135, 206, 235)"
                      height="20"
                      width="20"
                    >
                      <path
                        d="M5 18.89H6.41421L15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L9.24264 18.89H21V20.89ZM15.7279 6.74785L17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785Z"
                      ></path>
                    </svg>
                  </div>
                  <p
                    class="absolute bottom-[-130%] z-50 hidden group-hover:block px-3 py-1.5 rounded-md shadow-md bg-slate-600 text-white text-xs"
                  >
                    Edit
                  </p>
                </div>
                <div class="relative group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="red"
                    height="20"
                      width="20"
                  >
                    <path
                      d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"
                    ></path>
                  </svg>
                  <p
                    class="absolute bottom-[-130%] z-50 hidden group-hover:block px-3 py-1.5 rounded-md shadow-md bg-slate-600 text-white text-xs"
                  >
                    Delete
                  </p>
                </div>
                <div class="relative group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="green"
                    height="20"
                      width="20"
                  >
                    <path
                      d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11 11V7H13V11H17V13H13V17H11V13H7V11H11Z"
                    ></path>
                  </svg>
                  <p
                    class="absolute bottom-[-130%] z-50 hidden group-hover:block px-3 py-1.5 rounded-md shadow-md bg-slate-600 text-white text-xs"
                  >
                    Post
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <form @submit.prevent="ProjectFormApply()">
        <div class="py-5 space-y-5 mt-5">
          <div class="flex gap-5 items-center">
            <div class="w-1/3 mb-3">
              <Select v-model="ProjectForm.event_type">
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="Select From Event" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select</SelectLabel>
                    <SelectItem :value="event.name" v-for="event in store.eventList" :key="event">{{ event.name }}</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div class="relative mb-3 w-2/3">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
                v-model="ProjectForm.name"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.15rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Project Name <span class="text-red-500">*</span>
              </label>
            </div>
          </div>
          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
              Project Description
            </p>
            <textarea
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="Ex:23"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
              v-model="ProjectForm.description"
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
                v-model="ProjectForm.human_resource"
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
                v-model="ProjectForm.material_resource"
              ></textarea>
            </div>
          </div>
          <div class="flex gap-5">
            <div class="relative w-1/2">
              <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
                Human Resource Planning <span class="text-red-500">*</span>
              </p>
              <textarea
                name=""
                id=""
                cols=""
                rows="4"
                placeholder="Ex:23"
                class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
                v-model="ProjectForm.human_resource_planning"
              ></textarea>
            </div>
            <div class="relative w-1/2">
              <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
                Material Resource Planning <span class="text-red-500">*</span>
              </p>
              <textarea
                name=""
                id=""
                cols=""
                rows="4"
                placeholder="Ex:23"
                class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
                v-model="ProjectForm.material_resource_planning"
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
                v-model="ProjectForm.address"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Project Location <span class="text-red-500">*</span>
              </label>
            </div>
            <div class="relative mb-3 w-full">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
                v-model="ProjectForm.city"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >City <span class="text-red-500">*</span>
              </label>
            </div>
            <div class="relative mb-3 w-full">
              <Input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                v-model="ProjectForm.state"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >State <span class="text-red-500">*</span>
              </label>
            </div>
          </div>
          <div class="flex justify-between gap-5">
            <div class="w-1/3 flex flex-col gap-5">
              <div class="relative">
                <div class="gap-5">
                  <label for="">Starting Date <span class="text-red-500">*</span> </label>
                  <div class="pt-2">
                    <Input
                      type="date"
                      class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                      v-model="ProjectForm.start_date"
                    />
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="gap-5">
                  <label for="">Starting Time <span class="text-red-500">*</span> </label>
                  <div class="pt-2">
                    <Input
                      type="time"
                      class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                      v-model="ProjectForm.start_time"
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
                    <Input
                      type="date"
                      class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                      v-model="ProjectForm.end_date"
                    />
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="gap-5">
                  <label for="">Ending Time <span class="text-red-500">*</span> </label>
                  <div class="pt-2">
                    <Input
                      type="time"
                      class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                      v-model="ProjectForm.end_time"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="w-1/3">
              <div class="relative mb-3">
                <div class="gap-5">
                  <label for="">Project Thumbnail <span class="text-red-500">*</span> </label>
                  <div class="pt-2">
                    <Input
                      type="file"
                      class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                      @change="onFileChange"
                    />
                  </div>
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
</template>
<script setup>
import { ref ,onMounted } from 'vue'
import api from '@/config/api'
import { useToast } from '/components/ui/toast/use-toast'
import { useSocialStore } from '@/stores/SocialDashboard'
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
const store = useSocialStore()

const getProjectList = async () => {
  try {
    const { data } = await api().get('project-list')
    store.projectList = data.data
    // console.log(store.serviceList[0])
  } catch (error) {
    console.log(error)
  }
}

const ProjectForm = ref({
  name: '',
  event_type: '',
  description: '',
  human_resource: '',
  material_resource: '',
  human_resource_planning: '',
  material_resource_planning: '',
  address: '',
  city: '',
  state: '',
  start_date: '',
  end_date: '',
  start_time: '',
  end_time: '',
  image: ''
})

const selectedFile = ref(null)

function onFileChange(event) {
  selectedFile.value = event.target.files[0]
  ProjectForm.value.image = event.target.files[0]
  console.log('selected image', selectedFile.value)
}

const isEdit = ref(false)
const projectId = ref()

const edit = (project) => {
  isEdit.value = true
  projectId.value = project.id
  ProjectForm.value.name = project.name
  ProjectForm.value.event_type = project.event_type
  ProjectForm.value.description = project.description
  ProjectForm.value.human_resource = project.human_resource
  ProjectForm.value.material_resource = project.material_resource
  ProjectForm.value.human_resource_planning = project.human_resource_planning
  ProjectForm.value.material_resource_planning = project.material_resource_planning
  ProjectForm.value.address = project.address
  ProjectForm.value.city = project.city
  ProjectForm.value.state = project.state
  ProjectForm.value.start_date = project.start_date
  ProjectForm.value.end_date = project.end_date
  ProjectForm.value.start_time = project.start_time
  ProjectForm.value.end_time = project.end_time
  ProjectForm.value.image = project.image
}

const getEventList = async () => {
  try {
    const { data } = await api().get('event-list')
    store.eventList = data.data
    console.log(store.eventList)
  } catch (error) {
    console.log(error)
  }
}

const editSubmit = async (projectId) => {
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
  getProjectList()
  getEventList()
})
</script>

<style scoped>
.tableRowBg:nth-child(even){
  background: white;
}
</style>
