<template>
  <div class="px-[20px] bg-white py-5 rounded-md shadow-md">
          <p class="text-2xl font-bold py-3 border-b">View Previous Packages</p>
          <div class="bg-slate-50 rounded-lg gap-y-2 w-full px-4 py-2 border-b-gray-100 mb-2 mt-3">
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
                    <td class="border-r border-slate-700 px-4 py-2">{{ pkg.package.package_title }}</td>
                    <td class="border-r border-slate-700  px-4 py-2">{{ pkg.package.package_id }}</td>
                    <td class="border-r border-slate-700  px-4 py-2">{{ pkg.package.country.name }}</td>
                    <td class="border-r border-slate-700  px-4 py-2">{{ pkg.package.city.name }}</td>
                    <td class="border-r border-slate-700  px-4 py-2">{{ pkg.package.agent.name }}</td>
                    <td class="border-r border-slate-700  px-4 py-2">{{ pkg.package.imam.name }}</td>
                    <td class="border-r border-slate-700  px-4 py-2">{{ pkg.package.support_manager.name }}</td>
                    <td class="border-r border-slate-700  px-4 py-2">{{ pkg.package.start_at }} - {{ pkg.package.end_at }}</td>
                    <!-- <td class=" px-4 py-2"></td> -->
                    <td class="border-r border-slate-700  px-4 py-2">{{ pkg.status == 0 ? 'Paid' : 'Completed' }} </td>
                    <td class=" px-4 py-2">
                      <div class="flex space-x-2">
                        <router-link :to="'customer_package_details/'+pkg.package.id">
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
// import { packages } from '@/stores/itinenary.ts'

import { onMounted, ref } from 'vue'
const packages = ref([])
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
const getPackages = async () => {
  const { data } = await api().get('customer-packages')
  packages.value = data.data
 }
onMounted(() => {
  getPackages()
})
</script>

<style scoped>
tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
