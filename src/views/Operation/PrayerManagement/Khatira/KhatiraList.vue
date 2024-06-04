<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <p class="font-semibold">Prayer Management > Khatira > Khatira List</p>
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-yellow-600 font-bold pb-2">Khatira List</p>
    </div>
    <hr />
    <div
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-xl">
            <th class="p-2 text-left">Number</th>
            <th class="p-2 text-left">Khatira Topic</th>
            <th class="p-2 text-left">Time</th>
            <th class="p-2 text-left">Speaker</th>
            <th class="p-2 text-left">Date</th>
            <th class="p-2 text-left">Status</th>
            <th class="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="">
            <td class="py-4 p-2">
              <h3 class="font-bold">01</h3>
            </td>
            <td class="py-4 p-2 flex items-center gap-2">
              <h3 class="font-bold">Help the weak</h3>
            </td>
            <td>
              <p class="text-lg">12:00 AM</p>
            </td>
            <td class="py-4 p-2">Abdullah</td>
            <td class="py-4 p-2">1 Feb 2024</td>
            <td class="py-4 p-2">
              <p class="text-sm font-bold text-blue-600">Pending</p>
            </td>
            <td class="py-4 p-2 flex justify-center">
              <div
                class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2"
              >
                <DropdownMenu class="w-full">
                  <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                  <DropdownMenuContent class="w-40">
                    <DropdownMenuItem class="text-yellow-600" @click="goToEditPage(1)"
                      >Post</DropdownMenuItem
                    >

                    <DropdownMenuItem class="text-blue-600" @click="goToDetailPage(1)"
                      >Edit</DropdownMenuItem
                    >
                    <DropdownMenuItem class="text-red-600" @click="goToDetailPage(1)"
                      >Delete</DropdownMenuItem
                    >
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
</template>
<script setup>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '/components/ui/dropdown-menu'

</script>
