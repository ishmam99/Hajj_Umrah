<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-yellow-600 font-bold pb-2">Publications List</p>
    </div>
    <hr />
    <div
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-xl">
            <th class="p-2 text-start w-1/5">Number</th>
            <th class="p-2 text-start w-1/5">Title</th>
            <th class="p-2 text-start w-1/5">Writers name</th>
            <th class="p-2 text-start w-1/5">Action</th>
            <th class="p-2 text-start w-1/5">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr class="tableRowColor" v-for="(publication, index) in store.publicationList" :key="publication.id">
            <td class="py-4 p-2 flex items-center gap-2 w-1/5">
              <h3 class="font-bold">{{ index + 1 }}</h3>
              <img :src="publication.image" alt="image" class="h-10" />
            </td>
            <td class="py-4 p-2 w-1/5">
              <h3 class="">{{ publication.title }}</h3>
            </td>
            <td class="w-1/5">
              <p class="">{{ publication.author }}</p>
            </td>
            <td class="py-4 p-2 w-1/5">
              <p class="text-sm font-bold text-blue-600">Pending</p>
            </td>
            <td class="py-4 p-2 w-1/5">
              <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                <Dialog>
                  <DialogTrigger> Details </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        <div class="text-xl mb-2">
                          <span class="font-bold">Book Name:</span> {{ publication.authors_name }}
                        </div>
                      </DialogTitle>
                      <DialogDescription>
                        <img :src="publication.image" alt="" />
                        <div>
                          <h1 class="font-semibold mt-2 text text-black">Book Description:</h1>
                          {{ publication.description }}
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '/components/ui/dialog'

import { useMediaStore } from '@/stores/mediaDashboard'
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

const store = useMediaStore()
const authStore = useAuthStore()

const route = useRoute()
const router = useRouter()

const loading = ref(false)
const { toast } = useToast()

const publicationList = async () => {
  loading.value = true
  try {
    const { data } = await api().get('post-publication-list', {
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    })

    store.publicationList = data.data
    console.log(store.publicationList)
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

onMounted(async () => {
  publicationList()
})
</script>

<style>
.tableRowColor:nth-child(even) {
  background: white;
}
</style>
