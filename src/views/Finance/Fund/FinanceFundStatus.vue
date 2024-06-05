<template>
  <div class="px-4 bg-white py-5">
    <div  v-if="showDetails == false">
      <div class="flex justify-between items-center py-4">
        <p class="text-2xl text-yellow-600 font-bold pb-2">Fund Event Status</p>
        <input
          type="date"
          placeholder="Search by date or name"
          class="py-1.5 px-2 rounded-md border text-sm"
        />
        <input
          type="text"
          placeholder="Search by name"
          class="py-1.5 px-2 rounded-md border text-sm"
        />
      </div>
      <hr />
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-white">
              <th class="p-2 text-start w-1/8">ID</th>
              <th class="p-2 text-start w-2/8">Event Name(s)</th>
              <th class="p-2 text-center w-1/8">Starting Date</th>
              <th class="p-2 text-center w-1/8">Ending Date</th>
              <th class="p-2 text-center w-1/8">Amount(Need)</th>
              <th class="p-2 text-center w-1/8">Amount(Recieved)</th>
              <th class="p-2 text-center w-1/8">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td class="py-4 p-2 w-1/8 text-start">01</td>
              <td class="py-4 p-2 w-2/8">
                <h3 class="font-bold">Save The Children</h3>
              </td>
              <td class="py-4 p-2 text-center w-1/8">1 Jan 2024</td>
              <td class="py-4 p-2 text-center w-1/8">1 Feb 2024</td>
              <td class="py-4 p-2 text-center w-1/8">$ 1000000</td>
              <td class="py-4 p-2 text-center w-1/8">$ 20000</td>
              <td class="py-4 p-2 text-center w-1/8">
                <button @click="openShowDetails()" class="px-6 py-2 bg-teal-600 rounded-md shadow-md text-white text-xs font-semibold">
                  View
                </button>
              </td>
            </tr>

            <tr class="bg-white">
              <td class="py-4 p-2 w-1/8 text-start">02</td>
              <td class="py-4 p-2 w-2/8 relative group">
                <h3 class="font-bold">Comfort The Sick</h3>
              </td>
              <td class="py-4 p-2 text-center w-1/8">1 Jan 2024</td>
              <td class="py-4 p-2 text-center w-1/8">1 Feb 2024</td>
              <td class="py-4 p-2 text-center w-1/8">$ 500000</td>
              <td class="py-4 p-2 text-center w-1/8">$ 1000</td>
              <td class="py-4 p-2 text-center w-1/8">
                <button @click="openShowDetails()" class="px-6 py-2 bg-teal-600 rounded-md shadow-md text-white text-xs font-semibold">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="showDetails == true">
      <div class="flex items-center justify-between gap-5">
        <p class="text-2xl text-yellow-600 font-bold pb-2">Fund Event : Save the children</p>
        <button
          @click="showDetails = false"
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
<script setup>
import { ref, onMounted } from 'vue'
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


const showDetails = ref(false)
const openShowDetails = () => {
  showDetails.value = true
}
</script>
