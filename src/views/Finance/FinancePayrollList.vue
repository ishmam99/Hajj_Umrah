<template>
  <div class="bg-slate-50 w-[calc(100vw-255px)]">
    <div class="px-4 bg-white py-5">
       
        <div class="flex justify-between items-center pt-4 pb-2">
          <p class="text-2xl text-yellow-600 font-bold">Payroll List</p>
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
                <th class="p-2 text-center w-1/10">Date</th>
                <th class="p-2 text-center w-1/10">ID</th>
                <th class="p-2 text-center w-1/10">Image</th>
                
                <th class="p-2 text-center w-1/10">Employee Name</th>
                <th class="p-2 text-center w-1/10">Employee Type</th>
                <th class="p-2 text-center w-1/10">Leave</th>
                <th class="p-2 text-center w-1/10">Salary</th>
                <th class="p-2 text-center w-1/10">Tax</th>
                <th class="p-2 text-center w-1/10">Payble</th>
                <th class="p-2 text-center w-1/10">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="tableRowColor" v-for="item in store.payroll">
                <td class="py-4 p-2 text-center text-sm w-1/10">12/12/2023</td>
                <td class="py-4 p-2 text-center w-1/10">01</td>
                
                <td class="py-4 p-2 w-1/10"><img src="" alt="" class="w-8 h-8 rounded-full bg-slate-400 m-auto"></td>
                
                <td class="py-4 p-2 text-center w-1/10">Mr. Rahim</td>
                <td class="py-4 p-2 text-center w-1/10">Imam</td>
                <td class="py-4 p-2 text-center w-1/10">3 Days</td>
                <td class="py-4 p-2 text-center w-1/10">$ 500</td>
                <td class="py-4 p-2 text-center w-1/10">12%</td>
                <td class="py-4 p-2 text-center w-1/10">$ 440</td>
                <td class="py-4 p-2 flex justify-center w-1/10">
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
                <td class="py-4 p-2 text-center text-sm w-1/10">12/12/2023</td>
                <td class="py-4 p-2 text-center w-1/10">02</td>
                <td class="py-4 p-2 w-1/10"><img src="" alt="" class="w-8 h-8 rounded-full bg-slate-400 m-auto"></td>
                <td class="py-4 p-2 text-center w-1/10">Mr. Hahim</td>
                <td class="py-4 p-2 text-center w-1/10">Teacher</td>
                <td class="py-4 p-2 text-center w-1/10">7 Days</td>
                <td class="py-4 p-2 text-center w-1/10">$ 500</td>
                <td class="py-4 p-2 text-center w-1/10">12%</td>
                <td class="py-4 p-2 text-center w-1/10">$ 450</td>
                <td class="py-4 p-2 flex justify-center w-1/10">
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
import { useToast } from '/components/ui/toast/use-toast'
import { useAccountStore } from '/src/stores/accountStore.ts'
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

const store =useAccountStore()

const currentDate = new Date()
console.log(currentDate)
const currentDateWithFormat = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
console.log(currentDateWithFormat)



</script>

<style>

.tableRowColor:nth-child(even){
  background: white;
}
</style>