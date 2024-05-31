<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-emerald-700 font-bold pb-2">Project List</p>
    </div>
    <hr />
    <div
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-xl">
            <th class="p-2 text-left">SL.</th>
            <th class="p-2 text-left">Project Name(s)</th>
            <th class="text-left">Location</th>
            <th class="p-2 text-left">Starting Date</th>
            <th class="p-2 text-left">Ending Date</th>
            <th class="p-2 text-left">Time</th>
            <!-- <th class="p-2 text-left">Status</th> -->
            <th class="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="" v-for="(project, index) in store.projectList" :key="index">
            <!-- <tr class="" v-for="(project, index) in store.projectList" :key="index"> -->
            <td class="py-4 p-2 gap-2">
              <h3 class="font-bold">{{ project.id }}</h3>
            </td>
            <td class="py-4 p-2 flex items-center gap-2">
              <img :src="project.img" alt="" class="h-10" />
              <h3 class="font-bold">{{ project.name }}</h3>
            </td>
            <td>
              <p class="text-lg">{{ project.address }}</p>
            </td>
            <td class="py-4 p-2">{{ project.start_date }}</td>
            <td class="py-4 p-2">{{ project.end_date }}</td>
            <td class="py-4 p-2 font-semibold">
              {{ project.start_time }} - {{ project.end_time }}
            </td>
            <td class="py-4 p-2">
              <button
                class="px-3 py-2 rounded-md shadow-md bg-emerald-600 text-white hover:bg-black text-sm"
              >
                <Dialog>
                  <DialogTrigger> Details </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        <div class="font-bold text-xl mb-2">{{ project.projectName }}</div>
                      </DialogTitle>
                      <DialogDescription>
                        <img :src="project.img" alt="" />
                        <div>
                          <h1 class="font-semibold mt-2 text-lg text-black">Description</h1>
                          {{ project.description }}
                        </div>
                        <div class="flex gap-5 items-center justify-between mt-2">
                          <div>
                            <span class="text-black font-semibold">Starting Date:</span>
                            {{ project.startingDate }}
                          </div>
                          <div>
                            <span class="text-black font-semibold">Ending Date:</span>
                            {{ project.endingDate }}
                          </div>
                        </div>
                        <div class="flex gap-5 items-center justify-between">
                          <div class="flex gap-2">
                            <h1 class="text-black font-semibold">Location:</h1>
                            {{ project.location }}
                          </div>
                          <div class="flex gap-2">
                            <h1 class="text-black font-semibold">Time:</h1>
                            {{ project.time }}
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
import { ref, onMounted } from 'vue'
import { useSocialStore } from '@/stores/SocialDashboard'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '/components/ui/dialog'

const store = useSocialStore()

const getProjectList = async () => {
  try {
    const { data } = await api().get('project-list')
    store.projectList = data.data
    // console.log(store.serviceList[0])
  } catch (error) {
    console.log(error)
  }
}


onMounted(async () => {
  getProjectList()
})
</script>
