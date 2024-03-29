<template>
    <div class="px-4 bg-white py-5 w-3/4">
            <div class="flex justify-between items-center pt-4">
              <p class="text-2xl text-cyan-700 font-bold pb-2">Announcement List</p>
            </div>
            <hr />
            <div
              class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
            >
              <table class="table-auto w-full">
                <thead>
                  <tr class="bg-white text-lg">
                    <th class="p-2 text-center w-1/3">Announcement Name(s)</th>
                    <th class="p-2 text-center w-1/3">Announcement Description</th>
                    <th class="p-2 text-center w-1/3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(Announcement, index) in store.announcementList" :key="index" class="tableRowColor">
                    <td class="py-4 p-2 flex items-center gap-2">
                      <img :src="Announcement.image" alt="" class="h-10" />
                      <h3 class="font-semibold">{{ Announcement.title }}</h3>
                    </td>
                    <td class="py-4 p-2 items-center gap-2">
                      <h3 class="font-semibold text-center">{{ Announcement.description }}</h3>
                    </td>
                    <td class="py-4 p-2 flex justify-center">
                      <button
                        class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white hover:bg-black text-sm"
                      >
                        <Dialog>
                          <DialogTrigger> Details </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                <div class="font-bold text-xl mb-2">{{ Announcement.AnnouncementName }}</div>
                              </DialogTitle>
                              <DialogDescription>
                                <img :src="Announcement.img" alt="" />
                                <div>
                                  <h1 class="font-semibold mt-2 text-lg text-black">Description</h1>
                                  {{ Announcement.description }}
                                </div>
                                <div class="flex gap-5 items-center justify-between mt-2">
                                  <div>
                                    <span class="text-black font-semibold">Starting Date:</span>
                                    {{ Announcement.startingDate }}
                                  </div>
                                  <div>
                                    <span class="text-black font-semibold">Ending Date:</span>
                                    {{ Announcement.endingDate }}
                                  </div>
                                </div>
                                <div class="flex gap-5 items-center justify-between">
                                  <div class="flex gap-2">
                                    <h1 class="text-black font-semibold">Location:</h1>
                                    {{ Announcement.location }}
                                  </div>
                                  <div class="flex gap-2">
                                    <h1 class="text-black font-semibold">Time:</h1>
                                    {{ Announcement.time }}
                                  </div>
                                </div>
                              </DialogDescription>
                            </DialogHeader>
  
                            <!-- <DialogFooter> Save changes </DialogFooter> -->
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
    import { ref,onMounted } from 'vue'
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
  } from '/components/ui/dialog'

import { useOperationStore } from '@/stores/operationDashboard.ts';
import { useAuthStore } from '@/stores/AuthStore'

const store = useOperationStore()
const authStore = useAuthStore()

const getProjectList = async () => {
  try {
    const { data } = await api().get('announcement-list')
    store.announcementList = data.data
  // console.log(store.serviceList[0])
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
    getProjectList()

})
  
  </script>
  
  <style>
  .tableRowColor:nth-child(even){
    background: white;
  }
</style>