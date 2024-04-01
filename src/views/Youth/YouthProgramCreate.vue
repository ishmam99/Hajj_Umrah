<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <p class="text-2xl font-bold py-3 border-b">Program Create Form</p>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <form @submit.prevent="ProgramFormApply()">
        <div class="py-5 space-y-7 mt-5">
          <div class="flex justify-between items-center gap-5">
            <div class="relative w-full">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
                v-model="ProgramForm.name"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Program Name <span class="text-red-500">*</span>
              </label>
            </div>
            <div class="w-[250px]">
              <Select class="">
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="Sort By order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Comfort The Sick">Education tour</SelectItem>
                    <SelectItem value="Educate The Children"> Masjid visit </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
              Program Description
            </p>
            <textarea
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="Ex:23"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
              v-model="ProgramForm.description"
            ></textarea>
          </div>

          <div class="flex w-full gap-5">
            <div class="relative mb-3 w-full">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
                v-model="ProgramForm.address"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Address <span class="text-red-500">*</span>
              </label>
            </div>
            <div class="flex w-full gap-5">
              <div class="relative mb-3 w-full">
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                  id="exampleFormControlInput50"
                  value=""
                  v-model="ProgramForm.city"
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
                  v-model="ProgramForm.state"
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
                    <input
                      type="date"
                      class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                      v-model="ProgramForm.start_date"
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
                      class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                      v-model="ProgramForm.state_time"
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
                      class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                      v-model="ProgramForm.end_date"
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
                      class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                      v-model="ProgramForm.end_time"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="relative mb-3 w-1/3">
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
import { useAuthStore } from '@/stores/AuthStore.ts'
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
const authStore = useAuthStore()
const loading = ref(false)
const { toast } = useToast()

const ProgramForm = ref({
  name: '',
  description: '',
  address: '',
  city: '',
  state: '',
  start_date: '',
  end_date: '',
  state_time: '',
  end_time: '',
  image: ''
})

const selectedFile = ref(null)

function onFileChange(event) {
  selectedFile.value = event.target.files[0]
  ProgramForm.value.image = event.target.files[0]
  console.log('selected image', selectedFile.value)
}

const ProgramFormApply = async () => {
  console.log(ProgramForm)
  loading.value = true
  try {
    const data = await api().post('program-store',ProgramForm.value, {
      headers: {
          Authorization: `Bearer ${authStore.token}`
        }
    })
    toast({
      title: 'Success',
      description: 'Program created '
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
</script>
