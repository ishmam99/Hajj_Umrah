<template>
  <div class="px-4 bg-white py-5">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-cyan-700 font-bold pb-2">Course List</p>
    </div>
    <hr />

    <div class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center">
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-lg">
            <th class="p-2 text-start w-1/8">Course ID</th>
            <th class="p-2 text-start w-1/8">Course Name</th>
            <th class="p-2 text-start w-1/8">Teacher's Name</th>
            <th class="p-2 text-start w-1/8">Number of Students</th>
            <th class="p-2 text-start w-2/8">Number of Classes</th>
            <th class="p-2 text-start w-2/8">Class Duration</th>
            <th class="p-2 text-start w-2/8">Cost Per Class</th>
            <th class="p-2 text-start w-2/8">Cost Per Month</th>
            <th class="p-2 text-start w-2/8">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="tableRowColor">
            <td class="py-4 px-2 w-1/8">101</td>
            <td class="py-4 px-2 w-1/8">
              <h3 class="font-semibold">Quran Learning</h3>
            </td>
            <td class="py-4 px-2 w-1/8">Mr. Ahmad</td>
            <td class="py-4 px-2 w-1/8">25</td>
            <td class="py-4 px-2 w-2/8">8</td>
            <td class="py-4 px-2 w-2/8">1 hour</td>
            <td class="py-4 px-2 w-2/8">$10</td>
            <td class="py-4 px-2 w-2/8">$80</td>
            <td class="py-4 px-2 flex justify-center">
              <div class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2">
                <DropdownMenu class="w-full">
                  <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                  <DropdownMenuContent class="w-40">
                    <DropdownMenuItem class="text-cyan-800">Edit</DropdownMenuItem>
                    <DropdownMenuItem class="text-red-600">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
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
import { ref } from 'vue';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '/components/ui/dialog'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '/components/ui/dropdown-menu'

</script>

<style>
.tableRowColor:nth-child(even) {
  background: white;
}
</style>
