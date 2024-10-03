<template>
  <div class="bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50 py-5 w-3/4">
    <div class="px-2 my-8">
      <!-- Umrah Packages Header -->
      <div class="text-center pb-6 border-b-4 border-gray-300 mb-12">
        <p class="text-5xl font-bold text-[#286d71] tracking-tight">Umrah Packages</p>
        <p class="text-xl text-gray-600 mt-3">Create your perfect Umrah experience</p>
      </div>
      <!-- Packages Table -->
      <div class="overflow-x-auto bg-slate-100 shadow">
        <table class="table-auto w-full text-left border-collapse" style="table-layout: fixed;">
          <thead>
            <tr class="bg-[#286d71] text-white">
              <th class="border px-6 py-3 w-[200px]">Title</th>
              <th class="border px-6 py-3 w-[100px]">Package Update</th>
              <th class="border px-6 py-3 w-[100px]">Package Itinerary</th>
              <th class="border px-6 py-3 w-[100px]">Origin City</th>
              <th class="border px-6 py-3 w-[100px]">Origin Airport</th>
              <th class="border px-6 py-3 w-[100px]">Origin Country</th>
              <th class="border px-6 py-3 w-[100px]">Start Date</th>
              <th class="border px-6 py-3 w-[100px]">End Date</th>
              <th class="border px-6 py-3 w-[100px]">Package ID</th>
              <th class="border px-6 py-3 w-[100px]">Agent Name</th>
              <th class="border px-6 py-3 w-[100px]">Imam Name</th>
              <th class="border px-6 py-3 w-[100px]">Local Support Name</th>
              <th class="border px-6 py-3 w-[100px]">Status</th>
              <th class="border px-6 py-3 w-[100px]">Package Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pkg, index) in packages" v-if="packages.length > 0" :key="index" class="hover:bg-gray-50 shadow">
              <td class=" px-4 py-2 border-e-2 w-[200px]">{{ pkg.package_title }}</td>
              <td class="  py-2 border-e-2 ">
                <div class="flex space-x-2">
                  <router-link :to="'package_update_status/'+pkg.id">
                    <button class="bg-blue-500 hover:bg-bg-blue-600 text-white py-1 px-3 rounded-lg shadow-md transition-all duration-300">Update Package
                    </button>
                  </router-link> 
                </div>
              </td>
              <td class="mx-auto py-2 border-e-2 text-center">
                <router-link :to="'package_details/'+pkg.id">
                  <button class="bg-[#286d71] hover:bg-[#1f565b] text-white py-1 px-3 rounded-lg shadow-md transition-all duration-300">
                    Update Itinerary
                  </button>
                </router-link> 
              </td>
              <td class=" text-center py-2 border-e-2">{{ pkg.city?.name }}</td>
              <td class=" px-4 py-2 border-e-2">{{ pkg.airport.short_name }}</td>
              <td class=" px-4 py-2 border-e-2">{{ pkg.country?.name }}</td>
              <td class=" px-4 py-2 border-e-2">{{ pkg.start_at }}</td>
              <td class=" px-4 py-2 border-e-2">{{ pkg.end_at }}</td>
              <td class=" px-4 py-2 border-e-2">{{ pkg.package_id }}</td>
              <td class=" px-4 py-2 border-e-2">{{ pkg.agent?.user?.name }}</td>
              <td class=" px-4 py-2 border-e-2">{{ pkg.imam?.user?.name }}</td>
              <td class=" px-4 py-2 border-e-2">{{ pkg.support_manager?.user?.name }}</td>
              <td class=" px-4 py-2 border-e-2">{{ getStatus(pkg.status_of_package) }}</td>
              <td class="text-center px-4 py-2 border-e-2">
                <button
                    class="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-lg shadow-md transition-all duration-300"
                    @click="deletePackage(pkg.packageId)"
                  >
                    Delete 
                </button>
              </td>
            </tr>
            <tr v-else v-for="i in 3" >
              <th class="border px-6 py-3 h-20 bg-gray-300"></th>
              <th class="border px-6 py-3 h-20 bg-gray-300"></th>
              <th class="border px-6 py-3 h-20 bg-gray-300"></th>
              <th class="border px-6 py-3 h-20 bg-gray-300"></th>
              <th class="border px-6 py-3 h-20 bg-gray-300"></th>
              <th class="border px-6 py-3 h-20 bg-gray-300"></th>
              <th class="border px-6 py-3 h-20 bg-gray-300"></th>
              <th class="border px-6 py-3 h-20 bg-gray-300"></th>
              <th class="border px-6 py-3 h-20 bg-gray-300"></th>
              <th class="border px-6 py-3 h-20 bg-gray-300"></th>
              <th class="border px-6 py-3 h-20 bg-gray-300"></th>
              <th class="border px-6 py-3 h-20 bg-gray-300"></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const packages = ref([])

const getPackages = async () => {
  const { data } = await api().get('package')
  packages.value = data.data
}

const getStatus = (status) => {
  const statuses = [
    { id: 1, name: 'Not In Plan' },
    { id: 2, name: 'In Plan' },
    { id: 3, name: 'In Preparation' },
    { id: 4, name: 'Fully Booked' },
    { id: 5, name: 'In Approval Process' },
    { id: 6, name: 'Approved' },
    { id: 7, name: 'Published' },
    { id: 8, name: 'Discontinued' }
  ]
  return statuses.find(s => s.id == status)?.name || 'Unknown Status'
}

const deletePackage = (packageId) => {
  alert(`Package ${packageId} deleted!`)
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
