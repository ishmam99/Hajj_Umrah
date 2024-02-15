<template>
  <div class="bg-slate-50 w-[calc(100vw-255px)]">
    <div class="px-4 bg-white py-5">
        <div class="flex justify-between items-center pt-4 pb-2">
          <p class="text-2xl text-yellow-600 font-bold">Operation Expense Create</p>
          <!-- <button class="px-5 py-2 rounded-md shadow-md bg-yellow-600 text-white text-sm">Add</button> -->
        </div>
        <hr />
        <div class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center">
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-white">
                <!-- <th class="p-2 text-center w-[12%]">ID</th> -->
                <th class="p-2 text-center w-1/5">Date</th>
                <th class="p-2 text-center w-1/5">Opeation Name</th>
                <th class="p-2 text-center w-1/5">Expense Type / Name</th>
                <th class="p-2 text-center w-1/5">Amount</th>
                <!-- <th class="p-2 text-center w-[12%]">Balance</th> -->
                <th class="p-2 text-center w-1/5">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <!-- <td class="py-4 px-2 text-center w-[12%]"><input type="text" class="w-full p-2"></td> -->
                <td class="py-4 px-2 text-center text-sm w-1/5"><input type="date" class="w-full p-2"></td>
                <td class="py-4 px-2 text-center w-1/5"><input type="text" class="w-full p-2"></td>
                <td class="py-4 px-2 text-center w-1/5"><input type="text" class="w-full p-2"></td>
                <td class="py-4 px-2 text-center w-1/5"><input type="text" class="w-full p-2"></td>
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
          <p class="text-2xl text-yellow-600 font-bold">Operation Expense List</p>
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
                <th class="p-2 text-center w-1/6">ID</th>
                <th class=" w-1/6">Date</th>
                <th class="p-2 text-center  w-1/6">Operation Name</th>
                <th class="p-2 text-center  w-1/6">Expense Type / Name</th>
                <th class="p-2 text-center  w-1/6">Amount</th>
                <th class="p-2 text-center  w-1/6">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td class="py-4 p-2 text-center  w-1/6">01</td>
                <td class="py-4 p-2 text-center text-sm  w-1/6">12/12/2023</td>
                <td class="py-4 p-2 text-center  w-1/6">Masjid Maintain</td>
                <td class="py-4 p-2 text-center  w-1/6">Buy Cleaning Materials</td>
                <td class="py-4 p-2 text-center  w-1/6">$ 500</td>
                <td class="py-4 p-2 flex justify-center">
                  <div class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2">
                    <DropdownMenu class="w-full">
                      <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem class="text-yellow-600">Edit</DropdownMenuItem>
                          <DropdownMenuItem class="text-blue-600">Details</DropdownMenuItem>
                          <DropdownMenuItem class="text-red-600">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 16L6 10H18L12 16Z"></path></svg>
                  </div>
                </td>
              </tr>
              <tr class="bg-white">
                <td class="py-4 p-2 text-center  w-1/6">02</td>
                <td class="py-4 p-2 text-center text-sm  w-1/6">12/12/2023</td>
                <td class="py-4 p-2 text-center  w-1/6">Masjid Maintain</td>
                <td class="py-4 p-2 text-center  w-1/6">Ac Fix</td>
                <td class="py-4 p-2 text-center  w-1/6">$ 200</td>
                <td class="py-4 p-2 flex justify-center">
                  <div class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2">
                    <DropdownMenu class="w-full">
                      <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem class="text-yellow-600">Edit</DropdownMenuItem>
                          <DropdownMenuItem class="text-blue-600">Details</DropdownMenuItem>
                          <DropdownMenuItem class="text-red-600">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 16L6 10H18L12 16Z"></path></svg>
                  </div>
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '/components/ui/dropdown-menu'
</script>
