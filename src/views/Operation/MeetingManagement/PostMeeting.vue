<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-cyan-600 font-bold pb-2">Meeting List</p>
    </div>
    <hr />
    <div class="grid grid-cols-1 gap-5 my-5">
      <div
        class="rounded-md px-2 py-3 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-white text-xl">
              <th class="p-2 text-left">Meeting Topic</th>
              <th class="p-2 text-left">Meeting Time</th>
              <th class="p-2 text-left">Issue Date</th>
              <th class="p-2 text-left">Meeting Date</th>
              <th class="p-2 text-left">Meeting Place</th>
              <th class="p-2 text-left">Action</th>
              <th class="p-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td class="py-4 p-2 gap-2">
                <h3 class="font-bold">Meeting on Mosjid</h3>
              </td>
              <td>
                <p class="text-lg">12:00 AM</p>
              </td>
              <td class="py-4 p-2">1 Jan 2024</td>
              <td class="py-4 p-2">1 Feb 2024</td>
              <td class="py-4 p-2 font-semibold">New York</td>
              <td class="py-4 p-2">
                <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                  Details
                </button>
              </td>
            </tr>
            <tr class="bg-white">
              <td class="py-4 p-2 gap-2">
                <h3 class="font-bold">Meeting on Mosjid</h3>
              </td>
              <td>
                <p class="text-lg">12:00 AM</p>
              </td>
              <td class="py-4 p-2">1 Jan 2024</td>
              <td class="py-4 p-2">10 Feb 2024</td>
              <td class="py-4 p-2 font-semibold">New York</td>
              <td class="py-4 p-2">
                <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                  Details
                </button>
              </td>
            </tr>
            <tr class="">
              <td class="py-4 p-2">
                <h3 class="font-bold">Meeting on Mosjid</h3>
              </td>
              <td>
                <p class="text-lg">12:00 AM</p>
              </td>
              <td class="py-4 p-2">1 Jan 2024</td>
              <td class="py-4 p-2">1 Feb 2024</td>
              <td class="py-4 p-2 font-semibold">New York</td>
              <td class="py-4 p-2">
                <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                  Details
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
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import OperationSidebar from '/src/views/Operation/OperationSidevar.vue'
</script>
