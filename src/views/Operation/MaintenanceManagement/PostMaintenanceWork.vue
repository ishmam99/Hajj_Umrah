<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "/components/ui/dropdown-menu";
</script>

<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-cyan-800 font-bold pb-2">Post Maintenance Work</p>
    </div>
    <hr />
    <div
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-xl">
            <th class="p-2 text-left">ID</th>
            <th class="p-2 text-left">Maintenance Subject</th>
            <th class="p-2 text-left">Maintenance Category</th>
            <th class="text-left">Location</th>
            <th class="p-2 text-left">Time</th>
            <th class="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="">
            <td class="py-4 p-2 gap-2">
              <h3 class="font-bold">01</h3>
            </td>
            <td>
              <p class="text-lg">Planning Ramadan Fundraising</p>
            </td>
            <td>
              <p class="text-lg">Fundraising</p>
            </td>
            <td class="py-4 p-2">California</td>
            <td>
              <p class="text-lg">12:00 AM</p>
            </td>

            <td class="py-4 p-2">
              <button class="btn btn-success btn-sm text-white font-bold">
                Post
              </button>
            </td>
          </tr>
          <tr class="bg-white">
            <td class="py-4 p-2 gap-2">
              <h3 class="font-bold">02</h3>
            </td>
            <td>
              <p class="text-lg">Donor Relationship Building</p>
            </td>
            <td>
              <p class="text-lg">Donor</p>
            </td>
            <td class="py-4 p-2">Texas</td>
            <td>
              <p class="text-lg">12:00 AM</p>
            </td>

            <td class="py-4 p-2">
              <button class="btn btn-success btn-sm text-white font-bold">
                Post
              </button>
            </td>
          </tr>
          <tr class="">
            <td class="py-4 p-2 gap-2">
              <h3 class="font-bold">03</h3>
            </td>
            <td>
              <p class="text-lg">Zakat Distribution</p>
            </td>
            <td>
              <p class="text-lg">Zakat Allocation</p>
            </td>
            <td class="py-4 p-2">California</td>
            <td>
              <p class="text-lg">12:00 AM</p>
            </td>

            <td class="py-4 p-2">
              <button class="btn btn-success btn-sm text-white font-bold">
                Post
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
