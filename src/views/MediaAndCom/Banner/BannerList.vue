<template>
    <div class="px-4 bg-white py-5 w-[calc(100%-300px)]">
            <div class="flex justify-between items-center pt-4">
              <p class="text-2xl text-yellow-600 font-bold pb-2">Banner List</p>
            </div>
            <hr />
            <div
              class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
            >
              <table class="table-auto w-full">
                <thead>
                  <tr class="bg-white text-xl">
                    <th class="p-2 text-left">Image</th>
                    <th class="p-2 text-left">Title</th>
                    <th class="p-2 text-left">Status</th>
                    <th class="p-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="tableRowColor" v-for="banner in store.bannerList">
                    <td class="py-4 p-2 flex items-center gap-2">
                      <img :src="banner.image" alt="" class="h-14" />
                    </td>
                    <td>
                      <p class="text-lg">{{ banner.title }}</p>
                    </td>
                    <td v-if="banner.status=='1'" class="py-4 p-2">
                      <p class="text-sm font-bold text-green-600">Uploaded</p>
                    </td>
                    <td v-else class="py-4 p-2">
                      <p class="text-sm font-bold text-blue-600">Pending</p>
                    </td>
                    <td class="py-4 p-2">
                      <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                        Post
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
  </template>
  <script setup>


  import { useMediaStore } from '/src/stores/mediaDashboard.ts'
  import { ref , onMounted } from 'vue'
  import { useToast } from '/components/ui/toast/use-toast'
  import { useRoute, useRouter } from 'vue-router'
  import {useAuthStore} from '@/stores/AuthStore.ts'
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
  } from '/components/ui/select'

  const store = useMediaStore()
  const authStore = useAuthStore()

  const route = useRoute()
  const router = useRouter()
  
  const loading = ref(false)
  const { toast } = useToast()
  
  const bannerList = async () => {
  
    loading.value = true
    try {
      const { data } = await api().get('web-banner-lists', {
        headers: {
          Authorization: `Bearer ${authStore.token}`
        }
      })
      
      store.bannerList = data.data
      console.log(store.bannerList)
    } catch (error) {
      console.log(error)
    }
    loading.value = false
  }

  onMounted(async () => {
    bannerList()

})

  </script>
  