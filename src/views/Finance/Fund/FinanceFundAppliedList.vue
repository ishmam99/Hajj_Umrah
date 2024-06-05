<template>
  <div class="px-4 bg-white py-5">
    <!-- fund application list  -->
    <div>
      <div class="flex justify-between items-center py-4">
        <p class="text-2xl text-yellow-600 font-bold pb-2">Fund Application List</p>
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
              <th class="p-2 text-left w-1/8">Donation ID</th>
              <th class="p-2 text-left w-3/8">Donation Event Name(s)</th>
              <th class="p-2 text-center w-1/8">Starting Date</th>
              <th class="p-2 text-center w-1/8">Ending Date</th>
              <th class="p-2 text-center w-1/8">Amount</th>
              <th class="p-2 text-center w-1/8">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="" v-for="item in store.donationList" :key="item.id">
              <td class="py-4 p-2 w-1/8 text-left">{{ item.event_id }}</td>
              <td class="py-4 p-2 text-startw-3/8">
                <h3 class="font-bold">{{ item.name }}</h3>
              </td>
              <td class="py-4 p-2 text-center w-1/8">{{ item.start_date }}</td>
              <td class="py-4 p-2 text-center w-1/8">{{ item.end_date }}</td>
              <td class="py-4 p-2 text-center w-1/8">$ {{ item.amount }}</td>
              <td class="py-4 p-2 text-center w-1/8">
                <div
                  class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2"
                >
                  <DropdownMenu class="w-full">
                    <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem class="text-blue-600" @click="goToDetailPage(1)"
                        >Details</DropdownMenuItem
                      >
                      <DropdownMenuItem class="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M12 16L6 10H18L12 16Z"></path>
                  </svg>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- fund application list  -->
  </div>
</template>
<script setup>
import { useAdminStore } from '/src/stores/adminStore.ts'
import { useRouter } from 'vue-router'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '/components/ui/dropdown-menu'

const store = useAdminStore()

const router = useRouter()
const goToEditPage = (id) => {
  router.push({ name: 'Edit', params: { id } })
}

const goToDetailPage = (id) => {
  router.push({ name: 'Details', params: { id } })
}
</script>
