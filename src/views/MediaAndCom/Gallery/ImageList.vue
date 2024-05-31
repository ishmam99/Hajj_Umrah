<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-yellow-600 font-bold pb-2">Image List</p>
    </div>
    <hr />
    <div
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-xl">
            <th class="p-2 text-left">Number</th>
            <th class="p-2 text-left">Category</th>
            <th class="p-2 text-left">Image</th>
            <th class="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in store.imageList" class="tableRowColor" :key="item.id">
            <td class="py-4 p-2 gap-2">
              <h3 class="font-bold">{{ index+1 }}</h3>
            </td>
            <td class="py-4 p-2 flex items-center gap-2">
              <h3 class="font-bold">{{ item.post_title }}</h3>
            </td>
            <td>
              <img :src="item.image" alt="" class="h-10" />
            </td>
            <td class="py-4 p-2">
              <p class="text-sm font-bold text-blue-600">Pending</p>
            </td>
          </tr>
        </tbody>
      </table>
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '/components/ui/dialog'

const store = useMediaStore()
const authStore = useAuthStore()

const route = useRoute()
const router = useRouter()

const loading = ref(false)
const { toast } = useToast()

const imageList = async () => {
  loading.value = true
  try {
    const { data } = await api().get('/post-image-list', {
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    })

    store.imageList = data.data
    console.log(store.imageList)
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

onMounted(async () => {
  imageList()
})
</script>
<style>
.tableRowColor:nth-child(even) {
  background: white;
}
</style>
