<template>
  <div class="px-4 bg-white py-5 w-3/4">
          <div class="flex justify-between items-center pt-4">
            <p class="text-2xl text-teal-600 font-bold pb-2">Supplier List</p>
          </div>
          <hr />
          <div class="grid grid-cols-1 gap-5 my-5">
            <div
              class="rounded-md px-2 py-3 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
            >
              <table class="table-auto w-full">
                <thead>
                  <tr class="bg-white text-xl">
                    <th class="p-2 text-left">Supplier ID</th>
                    <th class="p-2 text-left">Supplier Name</th>
                    <th class="p-2 text-left">Address</th>
                    <th class="p-2 text-left">Product Type</th>
                    <th class="p-2 text-left">Status</th>
                    <th class="p-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <td>
                      <p>01</p>
                    </td>
                    <td class="py-4 p-2 flex items-center gap-2">
                      <img src="/src/assets/image/home/l4.jpg" alt="" class="h-10" />
                      <h3 class="font-bold">Dallas Sounds</h3>
                    </td>
                    <td class="py-4 p-2">Dallas</td>
                    <td class="py-4 p-2 font-semibold">Sounds</td>
                    <td class="py-4 p-2">
                      <p class="text-sm font-bold text-green-600">Completed</p>
                    </td>
                    <td class="py-4 p-2">
                      <button class="px-3 py-2 rounded-md shadow-md bg-teal-600 text-white text-sm">
                        Details
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td>
                      <p>02</p>
                    </td>
                    <td class="py-4 p-2 flex items-center gap-2">
                      <img src="/src/assets/image/home/l4.jpg" alt="" class="h-10" />
                      <h3 class="font-bold">Unique Furnitures</h3>
                    </td>
                    <td class="py-4 p-2">New York</td>
                    <td class="py-4 p-2 font-semibold">Furniture</td>
                    <td class="py-4 p-2">
                      <p class="text-sm font-bold text-blue-600">Pending</p>
                    </td>
                    <td class="py-4 p-2">
                      <button class="px-3 py-2 rounded-md shadow-md bg-teal-600 text-white text-sm">
                        Details
                      </button>
                    </td>
                  </tr>
                  <tr class="">
                    <td>
                      <p>03</p>
                    </td>
                    <td class="py-4 p-2 flex items-center gap-2">
                      <img src="/src/assets/image/home/l4.jpg" alt="" class="h-10" />
                      <h3 class="font-bold">Water Solutions inc.</h3>
                    </td>
                    <td class="py-4 p-2">California</td>
                    <td class="py-4 p-2 font-semibold">Food Items</td>
                    <td class="py-4 p-2">
                      <p class="text-sm font-bold text-green-600">Completed</p>
                    </td>
                    <td class="py-4 p-2">
                      <button class="px-3 py-2 rounded-md shadow-md bg-teal-600 text-white text-sm">
                        Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- <div
                class="rounded-md px-2 py-3 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
              >
                <div class="flex gap-5 items-center">
                  <img src="/src/assets/image/home/l4.jpg" alt="" class="h-10" />
                  <h3 class="font-bold">Technology and Media Outreach</h3>
                  <p class="font-semibold text-teal-600">
                    1 Jan 2024<span class="text-black font thin px-2">to</span>20 Jan 2024
                  </p>
                  <p class="font-semibold text-teal-600">
                    Location : <span class="text-black">Masjid Premises</span>
                  </p>
                  <p class="text-sm font-bold text-green-600">Complete</p>
                </div>
                <button class="px-3 py-2 rounded-md shadow-md bg-teal-600 text-white text-sm">
                  Details
                </button>
              </div> -->
          </div>
        </div>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SupplySidebar from '/src/views/Supply/SupplySidevar.vue'
</script>
