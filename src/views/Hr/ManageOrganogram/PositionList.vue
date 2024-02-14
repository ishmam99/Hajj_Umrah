<script setup lang="ts">
import DefaultLayout from '../../../layouts/DefaultLayout.vue';
import HrSidebar from '../HrSidevar.vue';


</script>

<template>
    <DefaultLayout>
        <div class="bg-slate-50">
      <div class="pt-[80px] flex justify-between">
         <HrSidebar />
         
         <div class="px-4 bg-white py-5 w-3/4">
          <div class="flex justify-between items-center pt-4">
            <p class="text-2xl text-yellow-600 font-bold pb-2">Position List</p>
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
                  <th class="p-2 text-left">Reports to</th>
                  <th class="p-2 text-left">Number of Positions</th>
                  <th class="p-2 text-left">Positions Occupied</th>
                  <th class="p-2 text-left">Vacancies available</th>
                  <th class="p-2 text-left">Salary type</th>
                  <th class="p-2 text-left">Salary Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr class="">
                  <td class="py-4 p-2 gap-2">
                    <h3 class="font-bold">01</h3>
                  </td>
                  <td class="py-4 p-2 flex items-center gap-2">
                    <h4 class="mt-[30px]">Imam Higiring</h4>
                  </td>
                  <td>
                    <p class="text-lg"></p>
                  </td>
                  <td class="py-4 p-2">8</td>
                  <td class="py-4 p-2">2</td>
                  <td class="py-4 p-2 font-semibold">6</td>
                  <td class="py-4 p-2">
                    <p class="text-sm font-bold text-blue-600">Salaried</p>
                  </td>
                  <td class="py-4 p-2">
                    <div class="flex">
                      <p class="text-sm font-bold text-blue-600 mt-[30px] mx-3">
                      $2000 
                    </p>
                    <router-link to="/HR_Position_List/1">
                      <span class="text-gray-500 px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>
                      </span>
                    </router-link>
                    
                    </div>
                    
                  </td>
                </tr>
              
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
    </DefaultLayout>
</template>