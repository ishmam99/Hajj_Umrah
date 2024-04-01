<template>
    <div class="px-4 bg-white py-5 w-3/4">
            <div class="flex justify-between items-center pt-4">
              <p class="text-2xl text-yellow-600 font-bold pb-2">Create Khutbah</p>
            </div>
            <hr />
            <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
              <form @submit.prevent="khutbahListStore()">
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
                        type="number"
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
                    <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">Khutbah Description</p>
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
                    <div class="relative w-1/2">
                      <div class="gap-5">
                        <label for="">Date <span class="text-red-500">*</span> </label>
                        <div class="pt-2">
                          <input
                            type="date"
                            class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="relative w-1/2">
                      <div class="gap-5">
                        <label for="">Time <span class="text-red-500">*</span> </label>
                        <div class="pt-2">
                          <input
                            type="time"
                            class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
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
import { useSocialStore } from '@/stores/mediaDashboard'
import { ref } from 'vue'
import { useToast } from '/components/ui/toast/use-toast'
import { useRoute, useRouter } from 'vue-router'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'
const route = useRoute()
const router = useRouter()

const khutbahList = ref({
  topic: '',
  speaker:'1',
  description: '',
  image: '',
})
const selectedFile = ref(null)

function onFileChange(event) {
selectedFile.value = event.target.files[0]
khutbahList.value.image = event.target.files[0]
console.log('selected image', selectedFile.value)
}

const loading = ref(false)
const { toast } = useToast()

const khutbahListStore = async () => {
  console.log(khutbahListStore);
  loading.value = true
  try {
    const data = await api().post('web-banner-store', khutbahList.value, {
      headers: {
      Authorization: `Bearer ${authStore.token}`
    
    }
      })
    toast({
      title: 'Success',
      description: 'Khutbah Added'
    })
    console.log(data)
    router.push({ name: 'Media_And_Com_Khudba_Khudba_List' })
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
  