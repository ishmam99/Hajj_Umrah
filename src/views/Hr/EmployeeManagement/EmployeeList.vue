<script setup lang="ts"></script>

<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl font-bold pb-2">Employee List</p>
    </div>
    <hr />
    <div
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-xm">
            <th class="p-4 text-left">Employee ID</th>
            <th class="p-4 text-left">Employee Name(s)</th>
            <th class="p-4 text-left">Address</th>
            <th class="p-4 text-left">Contact</th>
            <th class="p-4 text-left">Email</th>
            <th class="p-4 text-left">Details</th>
          </tr>
        </thead>
        <tbody class="mt-4">
          <tr class="">
            <td class="px-4 py-2">
              <h3 class="font-bold">01</h3>
            </td>
            <td class="px-4 py-2">
              <h3 class="px-3 font-bold">Dr. Imran</h3>
            </td>
            <td class="px-4 py-2">
              <p class="text-lg">
                Street: 3716 Andrews Hwy <br />
                City/Town: Odessa <br />
                State/Province/Region:Texas
              </p>
            </td>
            <td class="px-4 py-2">+8801784366219</td>

            <td class="px-4 py-2">
              <p class="text-sm font-bold text-blue-600">exampe@gmail.com</p>
            </td>
            <td class="px-4 py-2">
              <span class="text-gray-500 px-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                  />
                </svg>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
