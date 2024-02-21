<script setup lang="ts">
import DefaultLayout from '../../../layouts/DefaultLayout.vue';
import HrSidebar from '../HrSidevar.vue'


</script>

<template>
     <div class="px-4 bg-white py-5 w-3/4">
          <div class="flex justify-between items-center pt-4">
            <p class="text-2xl text-yellow-600 font-bold pb-2">Job List</p>
          </div>
          <hr />
          <div
            class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
          >
            <table class="table-auto w-full">
              <thead>
                <tr class="bg-white text-sm">
                  <th class="p-2 text-left">Job ID</th>
                  <th class="p-2 text-left">Job Title</th>
                  <th class="p-2 text-left">Employee Type</th>
                  <th class="p-2 text-left">Salary</th>
                  <th class="p-2 text-left">Number of Positions</th>
                  <th class="p-2 text-left">Occupied Positions</th>
                  <th class="p-2 text-left">Vacancy</th>
                  <th class="p-2 text-left">Status</th>
                  <th class="p-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="">
                  <td class="py-4 p-2 gap-2">
                    <h3 class="font-bold">01</h3>
                  </td>
                  <td class="py-4 p-2 flex items-center gap-2">
                    
                    <h3 class="font-bold mt-5">Imam Hiring for Idle Masjid</h3>
                  </td>
                  <td>
                    <p class="text-lg">Salaried</p>
                  </td>
                  <td class="py-4 p-2">$2000</td>
                  <td class="py-4 p-2">5</td>
                  <td class="py-4 p-2 font-semibold">2</td>
                  <td class="py-4 p-2 font-semibold">2</td>
                  <td class="py-4 p-2">
                    <p class="text-sm font-bold text-blue-600">Inactive</p>
                  </td>
                  <td class="py-4 p-2">
                    <router-link to="/HR_Dashboard/HR_Edit_Job_Description/1">
                      <span class="text-gray-500 px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
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