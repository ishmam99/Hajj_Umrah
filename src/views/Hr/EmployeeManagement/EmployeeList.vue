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
            <p class="text-2xl text-yellow-600 font-bold pb-2">Employee List</p>
          </div>
          <hr />
          <div
            class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
          >
            <table class="table-auto w-full">
              <thead>
                <tr class="bg-white text-xl">
                  <th class="p-2 text-left">Employee ID</th>
                  <th class="p-2 text-left">Employee Name(s)</th>
                  <th class="text-left">Address</th>
                  <th class="p-2 text-left">Starting Date</th>
                  <th class="p-2 text-left">Ending Date</th>
                  <th class="p-2 text-left">Time</th>
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
                    <img src="/src/assets/image/home/l4.jpg" alt="" class="h-10" />
                    <h3 class="font-bold">Save The Children</h3>
                  </td>
                  <td>
                    <p class="text-lg">Masjid Premises</p>
                  </td>
                  <td class="py-4 p-2">1 Jan 2024</td>
                  <td class="py-4 p-2">1 Feb 2024</td>
                  <td class="py-4 p-2 font-semibold">4 PM</td>
                  <td class="py-4 p-2">
                    <p class="text-sm font-bold text-blue-600">Pending</p>
                  </td>
                  <td class="py-4 p-2">
                    <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                      Details
                    </button>
                  </td>
                </tr>
                <tr class="bg-white">
                  <td class="py-4 p-2 gap-2">
                    <h3 class="font-bold">02</h3>
                  </td>
                  <td class="py-4 p-2 flex items-center gap-2">
                    <img src="/src/assets/image/home/l4.png" alt="" class="h-10" />
                    <h3 class="font-bold">Enhance Social Justice</h3>
                  </td>
                  <td>
                    <p class="text-lg">Masjid Premises</p>
                  </td>
                  <td class="py-4 p-2">1 Jan 2024</td>
                  <td class="py-4 p-2">10 Feb 2024</td>
                  <td class="py-4 p-2 font-semibold">9 AM</td>
                  <td class="py-4 p-2">
                    <p class="text-sm font-bold text-green-600">Completed</p>
                  </td>
                  <td class="py-4 p-2">
                    <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                      Details
                    </button>
                  </td>
                </tr>
                <tr class="">
                  <td class="py-4 p-2">
                    <h3 class="font-bold">03</h3>
                  </td>
                  <td class="py-4 p-2 flex items-center gap-2">
                    <img src="/src/assets/image/home/l4.jpg" alt="" class="h-10" />
                    <h3 class="font-bold">Help the weak</h3>
                  </td>
                  <td>
                    <p class="text-lg">Masjid Premises</p>
                  </td>
                  <td class="py-4 p-2">1 Jan 2024</td>
                  <td class="py-4 p-2">1 Feb 2024</td>
                  <td class="py-4 p-2 font-semibold">2 PM</td>
                  <td class="py-4 p-2">
                    <p class="text-sm font-bold text-blue-600">Pending</p>
                  </td>
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
    </div>
    </DefaultLayout>
</template>