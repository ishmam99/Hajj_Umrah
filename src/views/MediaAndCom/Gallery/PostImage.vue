<template>
  <div class="px-5 py-5 w-3/4">
    <p class="text-2xl text-yellow-600 font-bold py-3 border-b">Post Image</p>
    <hr />
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <form @submit.prevent="galleryImagePost()">
        <div class="py-5 space-y-7 mt-5">
          <div class="flex items-center justify-center gap-5">
            <div class="relative mb-3 w-3/4">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
                v-model="galleryPost.title"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Title <span class="text-red-500">*</span>
              </label>
            </div>
            <div class="w-1/4">
              <div class="relative mb-3">
                <Select v-model="galleryPost.category_id">
                  <SelectTrigger class="w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Category</SelectLabel>
                      <SelectItem :value="item.id" v-for="item in store.categoryLit" :key="item.id">{{
                        item.category_title
                      }}</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
              Description <span class="text-red-500">*</span>
            </p>
            <textarea
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="Ex:23"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
              v-model="galleryPost.description"
            ></textarea>
          </div>

          <div class="flex justify-between gap-5">
            <div class="w-1/3 flex flex-col gap-5">
              <div class="">
                <label for="" class="text-gray-600"
                  >Select Thumbnail <span class="text-red-500">*</span></label
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
</template>
<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from '/components/ui/toast/use-toast'
import { useAuthStore } from '@/stores/AuthStore.ts'
import { useMediaStore } from '/src/stores/mediaDashboard.ts'
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
const store = useMediaStore()
const authStore = useAuthStore()
const galleryPost = ref({
  title: '',
  description: '',
  category_id: '',
  image: ''
})

const selectedFile = ref(null)

function onFileChange(event) {
  selectedFile.value = event.target.files[0]
  galleryPost.value.image = event.target.files[0]
  console.log('selected image', selectedFile.value)
}

const loading = ref(false)
const { toast } = useToast()

const galleryImagePost = async () => {
  loading.value = true
  try {
    const data = await api().post('post-image-store', galleryPost.value, {
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    })
    toast({
      title: 'Success',
      description: 'Image Posted'
    })
    console.log(data)
    router.push({ name: 'media_and_com_pons_category_list' })
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
