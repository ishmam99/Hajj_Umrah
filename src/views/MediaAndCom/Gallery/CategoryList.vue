<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-yellow-600 font-bold pb-2">Category List</p>
    </div>
    <hr />
    <div
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-xl">
            <th class="p-2 text-left">Number</th>
            <th class="p-2 text-left">Category Title</th>
            <th class="p-2 text-left">Description</th>
            <th class="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in store.categoryLit" class="tableRowColor">
            <td class="py-4 p-2 gap-2">
              <h3 class="font-bold">{{ index + 1 }}</h3>
            </td>
            <td class="py-4 p-2 flex items-center gap-2">
              <img :src="item.image" alt="" class="h-10" />
              <h3 class="font-bold">{{ item.title }}</h3>
            </td>
            <td>
              <p class="text-lg">{{ item.description }}</p>
            </td>
            <td class="py-4 p-2">
              <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                <Dialog>
                  <DialogTrigger> Details </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        <div class="text-xl mb-2">
                          <span class="font-bold">Project Name:</span> Save The Children
                        </div>
                      </DialogTitle>
                      <DialogDescription>
                        <img src="/src/assets/image/home/l4.png" alt="" />
                        <div>
                          <h1 class="font-semibold mt-2 text text-black">Project Description:</h1>
                          Printers are programmed using a programming language. The printer
                          interprets the program, and the outputs the result. There are two big
                          classes of such languages: Page description languages, and Printer Control
                          languages.
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

const categoryList = async () => {
  loading.value = true
  try {
    const { data } = await api().get('post-category-list', {
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    })

    store.categoryLit = data.data
    console.log(store.categoryLit)
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

onMounted(async () => {
  categoryList()
})
</script>
<style>
.tableRowColor:nth-child(even) {
  background: white;
}
</style>
