<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <p class="text-2xl font-bold py-3 border-b">Create Project</p>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <form @submit.prevent="ProjectFormApply()">
        <div class="py-5 space-y-7 mt-5">
          <div class="flex gap-5 items-center">
            <div class="w-1/3 mb-3">
              <Select v-model="ProjectForm.event_type">
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="Select From Event" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select</SelectLabel>
                    <SelectItem value="Comfort The Sick"> Save The Children </SelectItem>
                    <SelectItem value="Educate The Children"> Enhance Social Justice </SelectItem>
                    <SelectItem value="Shelter The Homeless"> Help the weak </SelectItem>
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
              v-model="ProjectForm.human_resource"
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
                v-model="ProjectForm.material_resource"
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
            <div class="flex w-full gap-5">
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
                  id="exampleFormControlInput50"
                  value=""
                  v-model="ProjectForm.state"
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
              <!-- <div
                class="flex justify-center items-center h-[45px] rounded-2xl bg-white px-4 py-2 text-sm text-gray-500 text-center relative border-2 mt-2"
              >
                <Input
                  type="file"
                  @change="onFileChange"
                  class="h-full w-full opacity-0 absolute top-0"
                />
                Choose File
              </div> -->
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
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SocialSidebar from '/src/views/Social/SocialSidevar.vue'
import { Input } from '/components/ui/input'
import { ref } from 'vue'
import { useStore } from '/src/stores/store'
import api from '@/config/api'
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

const store = useStore()
const loading = ref(false)
const { toast } = useToast()

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

const ProjectFormApply = async () => {
  console.log(ProjectForm)
  loading.value = true
  try {
    const data = await api().post('project-store', {
      method: 'post',
      body: ProjectForm
    })
    toast({
      title: 'Success',
      description: data.data.message
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

// const ProjectFormApply = () => {
//   console.log(ProjectForm);
// }
</script>
