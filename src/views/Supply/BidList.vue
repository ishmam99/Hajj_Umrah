<script setup>
import { ref, onMounted } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SupplySidebar from '/src/views/Supply/SupplySidevar.vue'
import { useAdminStore } from '/src/stores/adminStore.ts'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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

onMounted( () => {
  bidList()
})
</script>

<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div>
      <div class="flex justify-between items-center pt-4">
        <p class="text-2xl text-cyan-600 font-bold pb-2">Bid List</p>
      </div>
      <hr />
      <div class="grid grid-cols-1 gap-5 my-5">
        <div
          class="rounded-md px-2 py-3 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
        >
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-white text-xl">
                <th class="p-2 text-left">SL No</th>
                <th class="p-2 text-left">Bid Id</th>
                <th class="p-2 text-left">Project Name</th>
                <!-- <th class="p-2 text-left">Project Completion Time Frame</th> -->
                <th class="p-2 text-left">Budget</th>
                <th class="p-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <!-- {{ store.bidList }} -->
              <tr class="" v-for="(item, index) in store.bidList" :key="item">
                <td class="py-4 p-2 gap-2">
                  <h3 class="font-bold">{{index+1}}</h3>
                </td>
                <td class="py-4 p-2 gap-2">
                  <h3 class="font-bold">{{item?.bid_id}}</h3>
                </td>
                <td class="py-4 p-2 flex items-center gap-2">
                  <!-- <img src="/src/assets/image/home/l4.jpg" alt="" class="h-10" /> -->
                  <h3 class="font-semibold">{{item?.job_name}}</h3>
                </td>
                <!-- <td>
                  <p class="text-lg">Karim Sounds</p>
                </td> -->
                <!-- <td class="py-4 p-2">6 months</td> -->
                <td class="py-4 p-2 font-semibold">${{item?.job_budget.toFixed(2)}}</td>
                <!-- <td class="py-4 p-2">
                  <p class="text-sm font-bold text-blue-600">Pending</p>
                </td> -->
                <td class="py-4 p-2">
                  <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                    <Dialog>
                      <DialogTrigger> Details </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            <div class="text-xl mb-2">
                              <span class="font-bold">Project Name:</span> {{item?.job_name}}
                            </div>
                          </DialogTitle>
                          <DialogDescription>
                            <div>
                              <h1 class="font-semibold mt-2 text-l text-black">
                                Project Description:
                              </h1>
                              {{item?.summary}}
                            </div>
                            <div class="flex mt-2 gap-5 items-center justify-between">
                              <div class="flex gap-2">
                                <h1 class="text-black font-semibold">Project Budget:</h1>
                                ${{item?.job_budget.toFixed(2)}}
                              </div>
                            </div>
                            <div>
                              <h1 class="font-semibold mt-2 text-l text-black">
                                Terms &amp; Conditions:
                              </h1>
                              {{item?.term_and_condition}}
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </button>
                </td>
                <!-- <td class="py-4 p-2">
                  <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                    <Dialog>
                      <DialogTrigger> Details </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            <div class="text-xl mb-2">
                              <span class="font-bold">Project Name:</span> {{item?.job_name}}
                            </div>
                          </DialogTitle>
                          <DialogDescription>
                            <div>
                              <h1 class="font-semibold mt-2 text-l text-black">
                                Project Description:
                              </h1>
                              {{item?.summary}}
                            </div>
                            <div class="flex mt-2 gap-5 items-center justify-between">
                              <div class="flex gap-2">
                                <h1 class="text-black font-semibold">Project Budget:</h1>
                                ${{item?.job_budget.toFixed(2)}}
                              </div>
                            </div>
                            <div>
                              <h1 class="font-semibold mt-2 text-l text-black">
                                Terms &amp; Conditions:
                              </h1>
                              {{item?.term_and_condition}}
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </button>
                </td> -->
              </tr>
            </tbody>
          </table>
        </div>
        <!-- <div
          class="rounded-md px-2 py-3 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
        >
          <div class="flex gap-5 items-center">
            <img src="/src/assets/image/home/l4.jpg" alt="" class="h-10" />
            <h3 class="font-bold">Technology and Media Outreach</h3>
            <p class="font-semibold text-cyan-600">
              1 Jan 2024<span class="text-black font thin px-2">to</span>20 Jan 2024
            </p>
            <p class="font-semibold text-cyan-600">
              Location : <span class="text-black">Masjid Premises</span>
            </p>
            <p class="text-sm font-bold text-green-600">Complete</p>
          </div>
          <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
            Details
          </button>
        </div> -->
      </div>
    </div>

    <div v-if="showDetails == true">
      <div class="flex items-center justify-between gap-5">
        <p class="text-2xl text-yellow-600 font-bold pb-2">Donation Event : {{ detailsItem.name }}</p>
        <button
          @click="closeDetails()"
          class="w-[150px] py-2 rounded-md bg-red-600 text-white"
        >
          Close
        </button>
      </div>
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-white">
              <th class="p-2 text-center w-1/8">SL.</th>
              <th class="p-2 text-left line-clamp-1 w-2/8">Donator's Name</th>
              <th class="p-2 text-center w-1/8">Donated Date</th>
              <th class="p-2 text-center w-1/8">Donated Time</th>
              <th class="p-2 text-center w-1/8">Donated Amount</th>
              <th class="p-2 text-center w-1/8">Account Number</th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td class="py-4 p-2 w-1/8 text-center">01</td>
              <td class="py-4 p-2 w-2/8 relative group">
                <h3 class="font-bold">Mr.Salam</h3>
              </td>
              <td class="py-4 p-2 text-center w-1/8">1 Jan 2024</td>
              <td class="py-4 p-2 text-center w-1/8">1.00 PM</td>
              <td class="py-4 p-2 text-center w-1/8">$ 1000000</td>
              <td class="py-4 p-2 text-center w-1/8">1111 2222 3333 4444</td>
            </tr>
            <tr class="bg-white">
              <td class="py-4 p-2 w-1/8 text-center">02</td>
              <td class="py-4 p-2 w-2/8 relative group">
                <h3 class="font-bold">Mr.Karim</h3>
              </td>
              <td class="py-4 p-2 text-center w-1/8">1 Jan 2024</td>
              <td class="py-4 p-2 text-center w-1/8">10.00 AM</td>
              <td class="py-4 p-2 text-center w-1/8">$ 500000</td>
              <td class="py-4 p-2 text-center w-1/8">1111 2222 3333 4444</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   </div>
</template>
