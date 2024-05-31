<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-cyan-700 font-bold pb-2">Event List</p>
    </div>
    <hr />
    <div
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-lg">
            <th class="p-2 text-left">Event ID</th>
            <th class="p-2 text-left">Event Thumbnail</th>
            <th class="p-2 text-left">Event Name(s)</th>
            <th class="p-2 text-left">Occurrence Type</th>
            <th class="p-2 text-left">Location</th>
            <th class="p-2 text-left">Starting Date</th>
            <th class="p-2 text-left">Ending Date</th>
            <th class="p-2 text-left">Time</th>
            <!-- <th class="p-2 text-left">Status</th> -->
            <th class="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(event, index) in store.eventList" :key="index">
            <!-- {{ event }} -->
            <td class="py-4 p-2 gap-2">
              <h3 class="font-bold">{{ index+1 }}</h3>
            </td>
            <td class="py-4 p-2 flex items-center gap-2">
              <img :src="event.image" alt="" class="h-10" />
            </td>
            <td class="py-4 p-2 items-center gap-2">
              <h3 class="font-semibold">{{ event.name }}</h3>
            </td>
            <td class="py-4 p-2 items-center gap-2">
              <h3 v-if="event.occurrenceType == 'Single'" class="font-semibold text-cyan-600">
                {{ event.occurrence_type }}
              </h3>
              <h3 v-else class="font-semibold text-green-600">
                {{ event.occurrence_type }}
              </h3>
            </td>
            <td>
              <p class="font-semibold text-sm">{{ event.address }}</p>
            </td>
            <td class="py-4 p-2 font-semibold">{{ event.start_date }}</td>
            <td class="py-4 p-2 font-semibold">{{ event.end_date }}</td>
            <td class="py-4 p-2 font-semibold">{{ event.state_time }} - {{ event.end_time }}</td>
            <td class="py-4 p-2">
              <button
                class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white hover:bg-black text-sm"
              >
                <Dialog>
                  <DialogTrigger> Details </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        <div class="font-bold text-xl mb-2">{{ event.eventName }}</div>
                      </DialogTitle>
                      <DialogDescription>
                        <img :src="event.image" alt="" />
                        <div>
                          <h1 class="font-semibold mt-2 text-lg text-black">Description</h1>
                          {{ event.description }}
                        </div>
                        <div class="flex gap-5 items-center justify-between mt-2">
                          <div>
                            <span class="text-black font-semibold">Starting Date:</span>
                            {{ event.start_date }}
                          </div>
                          <div>
                            <span class="text-black font-semibold">Ending Date:</span>
                            {{ event.end_date }}
                          </div>
                        </div>
                        <div class="flex gap-5 items-center justify-between">
                          <div class="flex gap-2">
                            <h1 class="text-black font-semibold">Location:</h1>
                            {{ event.address }}
                          </div>
                          <div class="flex gap-2">
                            <h1 class="text-black font-semibold">Time:</h1>
                            {{ event.state_time }} - {{ event.end_time }}
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
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SocialSidebar from '/src/views/Operation/OperationSidevar.vue'
import { ref, onMounted } from 'vue'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '/components/ui/dialog'

import { useSocialStore } from '/src/stores/SocialDashboard.ts'

const store = useSocialStore()


const getEventList = async () => {
  try {
    const { data } = await api().get('event-list')
    store.eventList = data.data
    console.log(store.eventList)
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  getEventList()
})
</script>
