<template>
  <div class="bg-slate-50 w-3/4">
    <div class="px-4 bg-white py-5">
        <div class="flex justify-between items-center pt-4 pb-2">
          <p class="text-2xl text-yellow-600 font-bold">Payroll Create</p>
          <!-- <button class="px-5 py-2 rounded-md shadow-md bg-yellow-600 text-white text-sm">Add</button> -->
        </div>
        <hr />
        <div class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center">
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-white">
                <th class="p-2 text-center w-1/6">Employee ID</th>
                <!-- <th class="p-2 text-center w-1/7">Image</th> -->
                <th class="p-2 text-center w-1/6">Date</th>
                <th class="p-2 text-center w-1/6">Employee Name</th>
                <th class="p-2 text-center w-1/6">Employee Type</th>
                <th class="p-2 text-center w-1/6">Salary</th>
                
                <th class="p-2 text-center w-1/6">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td class="py-4 px-2 text-center w-1/6"><input type="text" class="w-full p-2"></td>
               
                <td class="py-4 px-2 text-center text-sm w-1/6"><input type="date" class="w-full p-2"></td>
                <td class="py-4 px-2 text-center w-1/6"><input type="text" class="w-full p-2"></td>
                <td class="py-4 px-2 text-center w-1/6"><input type="text" class="w-full p-2"></td>
                <td class="py-4 px-2 text-center w-1/6"><input type="text" class="w-full p-2"></td>
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
          <p class="text-2xl text-yellow-600 font-bold">Payroll List</p>
          <!-- <button class="px-5 py-2 rounded-md shadow-md bg-yellow-600 text-white text-sm">Add</button> -->
        </div>
        <hr />
        <div class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center">
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-white">
                <th class="p-2 text-center w-1/7">Date</th>
                <th class="p-2 text-center w-1/7">ID</th>
                <th class="p-2 text-center w-1/7">Image</th>
                
                <th class="p-2 text-center w-1/7">Employee Name</th>
                <th class="p-2 text-center w-1/7">Employee Type</th>
                <th class="p-2 text-center w-1/7">Salary</th>
                <th class="p-2 text-center w-1/7">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td class="py-4 p-2 text-center text-sm w-1/7">12/12/2023</td>
                <td class="py-4 p-2 text-center w-1/7">01</td>
                
                <td class="py-4 p-2 w-1/7"><img src="" alt="" class="w-8 h-8 rounded-full bg-slate-400 m-auto"></td>
                
                <td class="py-4 p-2 text-center w-1/7">Mr. Rahim</td>
                <td class="py-4 p-2 text-center w-1/7">Imam</td>
                <td class="py-4 p-2 text-center w-1/7">$ 500</td>
                <td class="py-4 p-2 flex justify-center w-1/7">
                  <button class="px-3 py-2 w-full rounded-md shadow-md bg-cyan-600 text-white text-sm">
                    Edit
                  </button>
                </td>
              </tr>
              <tr class="">
                <td class="py-4 p-2 text-center text-sm w-1/7">12/12/2023</td>
                <td class="py-4 p-2 text-center w-1/7">02</td>
                <td class="py-4 p-2 w-1/7"><img src="" alt="" class="w-8 h-8 rounded-full bg-slate-400 m-auto"></td>
                
                <td class="py-4 p-2 text-center w-1/7">Mr. Hahim</td>
                <td class="py-4 p-2 text-center w-1/7">Teacher</td>
                <td class="py-4 p-2 text-center w-1/7">$ 500</td>
                <td class="py-4 p-2 flex justify-center w-1/7">
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
</script>
