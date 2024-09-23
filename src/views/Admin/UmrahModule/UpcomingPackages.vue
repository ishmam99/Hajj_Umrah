<template>
  <div class="px-5 bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50 py-5 w-3/4">
    <div class="container mx-auto my-8">
      <!-- Umrah Packages Header -->
      <div class="text-center pb-6 border-b-4 border-gray-300 mb-12">
        <p class="text-5xl font-bold text-[#286d71] tracking-tight">Upcoming Umrah Packages</p>
        <p class="text-xl text-gray-600 mt-3">Upcoming all Packages List</p>
      </div>

      <!-- Packages Table -->
      <div class="overflow-x-auto bg-slate-100 shadow">
        <table class="table-auto w-full text-left border-collapse">
          <thead>
            <tr class="bg-[#286d71] text-white">
              <th class="border px-3 py-3">Title</th>
              <th class="border px-3 py-3">Package ID</th>
              <th class="border px-3 py-3">Country</th>
              <th class="border px-3 py-3">City</th>
              <th class="border px-3 py-3">Agent Name</th>
              <th class="border px-3 py-3">Imam Name</th>
              <th class="border px-3 py-3">Support Manager Name</th>

              <th class="border px-3 py-3">Start-End Date</th>
              <!-- <th class="border px-6 py-3">End Date</th> -->
              <th class="border px-3 py-3">Status</th>
              <th class="border px-3 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pkg, index) in packages" :key="index" class="hover:bg-gray-50 shadow">
              <td class=" px-4 py-2">{{ pkg.title }}</td>
              <td class=" px-4 py-2">{{ pkg.pkgId }}</td>
              <td class=" px-4 py-2">{{ pkg.country }}</td>
              <td class=" px-4 py-2">{{ pkg.city }}</td>
              <td class=" px-4 py-2">{{ pkg.agent }}</td>
              <td class=" px-4 py-2">{{ pkg.imam }}</td>
              <td class=" px-4 py-2">{{ pkg.support_manager }}</td>
              <td class=" px-4 py-2">{{ pkg.startDate }} - {{ pkg.startDate }}</td>
              <!-- <td class=" px-4 py-2"></td> -->
            <td class=" px-4 py-2"> 
                {{ pkg.status }}</td>
              <td class=" px-4 py-2">
                <div class="flex space-x-2">
                  <router-link :to="{ path: 'package_details/' }">
                    <button class="bg-[#286d71] hover:bg-[#1f565b] text-white py-1 px-3 rounded-lg shadow-md transition-all duration-300">
                      View Details
                    </button>
                  </router-link>
                
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
import { packages } from '@/stores/itinenary.ts'

const deletePackage = (packageId) => {
  alert(`Package ${packageId} deleted!`)
}
 const statuses = [
  { id: 1, name: 'Not In Plan' },
  { id: 2, name: 'In Plan' },
  { id: 3, name: 'In Preparation' },
  { id: 4, name: 'In Review' },
  { id: 5, name: 'In Approval Process' },
  { id: 6, name: 'Approved' },
  { id: 7, name: 'Published' },
  { id: 8, name: 'Discontinued' }
]
</script>

<style scoped>
tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
