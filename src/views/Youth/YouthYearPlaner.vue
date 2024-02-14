<template>
  <div class="bg-slate-50 w-3/4">
    <div class="px-4 bg-white py-5">
        <div class="flex justify-between items-center pt-4 pb-2">
          <p class="text-2xl text-yellow-600 font-bold">Year Planner Create</p>
          <!-- <button class="px-5 py-2 rounded-md shadow-md bg-yellow-600 text-white text-sm">Add</button> -->
        </div>
        <hr />
        <div class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center">
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-white">
                <th class="p-2 text-center w-1/4">Date</th>
                <th class="p-2 text-center w-1/4">Time</th>
                <th class="p-2 text-center w-1/4">Plan Name</th>
                <!-- <th class="p-2 text-center w-1/5">Description</th> -->
                <th class="p-2 text-center w-1/4">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <!-- <td class="py-4 px-2 text-center w-[12%]"><input type="text" class="w-full p-2"></td> -->
                <td class="py-4 px-2 text-center text-sm w-1/4"><input type="date" class="w-full p-2"></td>
                <td class="py-4 px-2 text-center text-sm w-1/4"><input type="time" class="w-full p-2"></td>
                <td class="py-4 px-2 text-center w-1/4"><input type="text" class="w-full p-2"></td>
                <!-- <td class="py-4 px-2 text-center w-1/5"><input type="text" class="w-full p-2"></td> -->
                <!-- <td class="py-4 px-2 text-center w-1/5"><input type="text" class="w-full p-2"></td> -->
                <!-- <td class="py-4 px-2 text-center w-[12%]">$ 2500</td> -->
                <td class="py-4 px-2 flex justify-center">
                  <button class="px-3 py-2 w-full rounded-md shadow-md bg-cyan-600 text-white text-sm">
                    Save
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex justify-between items-center pt-4 pb-2">
          <p class="text-2xl text-yellow-600 font-bold">Year Planer List</p>
          <input type="date" placeholder="Search by date or name" class="py-1.5 px-2 rounded-md border text-sm">
          <input type="text" placeholder="Search by name" class="py-1.5 px-2 rounded-md border text-sm">
          <div class="w-[200px]">
            <Select class="">
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="Sort By order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Comfort The Sick"> new to old </SelectItem>
                    <SelectItem value="Educate The Children"> old to new </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
          </div>
        </div>
        <hr />
        <div class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center">
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-white">
                <th class="p-2 text-center w-1/8">No.</th>
                <th class=" w-1/8">Date</th>
                <th class=" w-1/8">Time</th>
                <th class="p-2 text-center w-3/8">Plan Name</th>
                <!-- <th class="p-2 text-center w-2/8">Description</th> -->
                <th class="p-2 text-center w-1/8">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td class="py-4 p-2 text-center w-1/8">01</td>
                <td class="py-4 p-2 text-center text-sm w-1/8">12/12/2023</td>
                <td class="py-4 p-2 text-center text-sm w-1/8">11.30 AM</td>
                <td class="py-4 p-2 text-center w-3/8">Education Tour</td>
                <!-- <td class="py-4 p-2 text-center w-1/8">Nearest Islamic Site</td> -->
                <td class="py-4 p-2 flex justify-center">
                  <button class="px-3 py-2 w-full rounded-md shadow-md bg-cyan-600 text-white text-sm">
                    Edit
                  </button>
                </td>
              </tr>
              <tr class="bg-white">
                <td class="py-4 p-2 text-center w-1/8">02</td>
                <td class="py-4 p-2 text-center text-sm w-1/8">12/12/2023</td>
                <td class="py-4 p-2 text-center text-sm w-1/8">11.30 AM</td>
                <td class="py-4 p-2 text-center w-3/8">Islamic Event</td>
                <!-- <td class="py-4 p-2 text-center w-1/8">Nearest Islamic Site</td> -->
                <td class="py-4 p-2 flex justify-center">
                  <button class="px-3 py-2 w-full rounded-md shadow-md bg-cyan-600 text-white text-sm">
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
  </div>
</template>
<script setup>

import { ref } from 'vue'
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
</script>
