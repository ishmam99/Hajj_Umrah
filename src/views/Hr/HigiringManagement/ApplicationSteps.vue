<script setup lang="ts"></script>

<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl font-bold pb-2">Application Status</p>
    </div>
    <hr />
    <div
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-xm">
            <th class="p-4 text-center">Applicant ID</th>
            <th class="p-4 text-center">Position Title</th>
            <th class="p-4 text-center">Name</th>
            <th class="p-4 text-center">Contact</th>
            <th class="p-4 text-center">Application Submited Date</th>
            <th class="p-4 text-center">Status</th>
            <th class="p-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody class="mt-4">
          <tr class="">
            <td class="px-4 py-2 font-bold text-center">01</td>
            <td class="px-4 py-2">Imam hiring</td>
            <td class="px-4 py-2">
              <h3 class="font-semibold">Ibnul Hossain</h3>
            </td>
            <td class="px-4 py-2 text-center">+8801823455640</td>
            <td class="px-4 py-2 text-center">02/14/2024</td>

            <td class="px-4 py-2 cursor-pointer">
              <div class="flex gap-1 items-center">
                <p class="text-sm font-semibold text-white mx-3 bg-green-600 p-2 rounded-md">
                  <span>Application Submitted</span>
                </p>
              </div>
            </td>
            <td class="px-4 py-2 text-center">
              <router-link to="/HR_Dashboard/HR_Change_Application_Steps/1">
                <span class="text-gray-500">
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
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </span>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
