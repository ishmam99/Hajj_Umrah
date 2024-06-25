<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-teal-700 font-bold pb-2">Post Bid List</p>
    </div>
    <hr />
    <div
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-sm">
            <th class="p-2 text-left">SL No.</th>
            <th class="p-2 text-left">Bid Id</th>
            <th class="p-2 text-left">Bid Title</th>
            <th class="p-2 text-left">Bid Submission Deadline</th>
            <th class="p-2 text-left">Details</th>
            <th class="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in store.bidList" :key="item.bid_id">
            <td class="py-4 p-2 gap-2">
              <h3 class="font-bold">{{index+1}}</h3>
            </td>
            <td class="py-4 p-2 gap-2">
              <h3 class="font-bold">{{item.bid_id}}</h3>
            </td>
            <td class="py-6 p-2 flex items-center gap-2">
              <h3 class="font-bold">{{item.job_name}}</h3>
            </td>
            <td class="py-4 p-2">
              <input
                type="date"
                class="peer block min-h-[auto] rounded-lg border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                v-model="item.deadline"
              />
            </td>
            <td class="py-4 p-2">
              <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                <Dialog>
                  <DialogTrigger> Details </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        <div class="text-xl mb-2">
                          <span class="font-bold">Project Name: </span>{{item.job_name}}
                        </div>
                      </DialogTitle>
                      <DialogDescription>
                        <div>
                          <h1 class="font-semibold mt-2 text-lg text-black">
                            Project Description:
                          </h1>
                          {{item.summary}}
                        </div>
                        <div class="flex mt-2 gap-5 items-center justify-between">
                          <div class="flex gap-2">
                            <h1 class="text-black font-semibold">Project Budget:</h1>
                            ${{item.job_budget.toFixed(2)}}
                          </div>
                        </div>
                        <div class="flex gap-5 items-center justify-between mt-2">
                          <div>
                            <span class="text-black font-semibold">Post Date From:</span> {{item.created_at}}
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </button>
            </td>
            <td class="py-4 p-2">
              <button
                @click="postBid(item.id, item.deadline)"
                class="px-3 py-2 rounded-md shadow-md bg-green-600 text-white text-sm"
              >
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
import { ref, onMounted } from 'vue'
import { useAdminStore } from '/src/stores/adminStore.ts'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '/components/ui/dialog'

const store = useAdminStore()
const loading = ref(false)

const bidList = async () => {
  loading.value = true
  try {
    const { data } = await api().get('get-bid-form')
    store.bidList = data.data
    console.log(store.bidList)
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

const postBid = async (id, deadline) => {
  try {
    const data = await api().post(`post-bid-form/${id}`, { deadline, bid_status: 'Approved' })
    console.log(data)
    toast({
      title: 'Event Posted'
    })
    bidList()
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  bidList()
})
</script>
