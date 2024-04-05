<template>
    <div class="px-4 bg-white py-5 w-3/4">
            <div class="flex justify-between items-center pt-4">
              <p class="text-2xl text-yellow-600 font-bold pb-2">Promotion List</p>
            </div>
            <hr />
            <div
              class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
            >
              <table class="table-auto w-full">
                <thead>
                  <tr class="bg-white text-xl">
                    <th class="p-2 text-left w-1/6">Title</th>
                    <th class="p-2 text-left w-1/6">Image</th>
                    <th class="p-2 text-left w-1/6">Description</th>
                    <th class="p-2 text-left w-1/6">Date</th>
                    <th class="p-2 text-left w-1/6">Time</th>
                    <th class="p-2 text-left w-1/6">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="tableRowColor" v-for="promotion in store.promotionList" :key="promotion.id" :class="tableRowColor">
                    <!-- {{ promotion }} -->
                    <td class="py-4 p-2 gap-2 w-1/6">
                      <h3 class="font-bold">{{ promotion.title }}</h3>
                    </td>
                    <td class="py-4 p-2 gap-2 w-1/6">
                      <img :src="promotion.image" alt="" class="h-full" />
                    </td>
                    <td class="w-1/6">
                      <p class="text-lg">{{ promotion.description }}</p>
                    </td>
                    <td class="w-1/6">
                      <p class="text-lg">{{ promotion.date }}</p>
                    </td>
                    <td class="w-1/6">
                      <p class="text-lg">{{ promotion.time }}</p>
                    </td>
                    <td class="py-4 p-2 w-1/6">
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


  import { useMediaStore } from '@/stores/mediaDashboard'
  import { ref , onMounted } from 'vue'
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

  const store = useMediaStore()

  const route = useRoute()
  const router = useRouter()
  
  const loading = ref(false)
  const { toast } = useToast()
  
  const promotionList = async () => {
    // console.log(promotionList);
    loading.value = true
    try {
      const {data} = await api().get('promotion-list')
      
      store.promotionList = data.data
      console.log(store.promotionList)
    } catch (error) {
      console.log(error)
    }
    loading.value = false
  }

  onMounted(async () => {
    promotionList()

})

  </script>
  
  <style>
  .tableRowColor:nth-child(even){
    background: white;
  }
</style>