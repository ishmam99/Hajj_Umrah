<template>
  <div class=" bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50 py-5 w-3/4">
    <div class="container my-8">
      <!-- Umrah Packages Header -->
      <div class="text-center pb-6 border-b-4 border-gray-300 mb-12">
        <p class="text-5xl font-bold text-[#286d71] tracking-tight">Approve Umrah Packages</p>
        <p class="text-xl text-gray-600 mt-3">Update Package Status</p>
      </div>

      <!-- Packages Table -->
      <div class="overflow-x-auto w-full bg-slate-100 shadow">
        <table class="table-auto  w-full text-left border-collapse">
          <thead>
            <tr class="bg-[#286d71] text-white">
                <th class="border px-6 py-3">Title</th>
              <th class="border px-6 py-3">Package ID</th>
              <th class="border px-6 py-3">Agent Name</th>
              <th class="border px-6 py-3">Imam Name</th>
              <th class="border px-6 py-3">Local Support Name</th>
              <th class="border px-6 py-3">Origin Country</th>
              <th class="border px-6 py-3">Origin City</th>
              <th class="border px-6 py-3">Origin Airport</th>
              <th class="border px-6 py-3">Start Date</th>
              <th class="border px-6 py-3">End Date</th>
              <th class="border px-3 py-3">Status</th>
              <th class="border px-3 py-3">Package Approval Status</th>
              <th class="border px-3 py-3">Package Lifecycle Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pkg, index) in packages" v-if="packages.length > 0" :key="index" class="hover:bg-gray-50 shadow">
               <td class="px-4 py-2 border-e-2">{{ pkg.package_title }}</td>
              <td class=" px-4 py-2 border-e-2">{{ pkg.package_id }}</td>
              <td class=" px-4 py-2 border-e-2">{{ pkg.agent?.user?.name }}</td>
              <td class=" px-4 py-2 border-e-2">{{ pkg.imam?.user?.name }}</td>
              <td class=" px-4 py-2 border-e-2">{{ pkg.support_manager?.user?.name }}</td>
              <td class=" px-4 py-2 border-e-2">{{ pkg.country?.name }}</td>
              <td class=" px-4 py-2 border-e-2">{{ pkg.city?.name }}</td>
              <td class=" px-4 py-2 border-e-2">{{ pkg.airport.short_name }}</td>
              <td class=" px-4 py-2 border-e-2">{{ pkg.start_at }}</td>
              <td class=" px-4 py-2 border-e-2">{{ pkg.end_at }}</td>
              <td class=" px-4 py-2"> <select @change="updateStatus(pkg)" v-model="pkg.status_of_package" class="select select-bordered w-full">
                <option disabled selected>Select an option</option>
                <option v-for="status in statuses" :value="status.id" >{{ status.name }}</option>
              </select></td>
              <td class=" px-4 py-2">
                <div class="flex space-x-2">
                 <router-link :to="'package_update_status/'+pkg.id">
                    <button class="bg-green-500 hover:bg-bg-blue-600 text-white py-1 px-3 rounded-lg shadow-md transition-all duration-300">
                   Package Update for Approval
                    </button>
                  </router-link> 
                 <router-link :to="'package_status/'+pkg.id">
                    <button class="bg-blue-500 hover:bg-bg-blue-600 text-white py-1 px-3 rounded-lg shadow-md transition-all duration-300">
                   Package Aprroval Status
                    </button>
                  </router-link> 
                  
                </div>
              </td>
              <td class=" px-4 py-2">
                <div class="flex space-x-2">
                 <router-link :to="{ path: 'package_lifecycle_status/'+pkg.id }">
                    <button class="bg-[#286d71] hover:bg-[#1f565b] text-white py-1 px-3 rounded-lg shadow-md transition-all duration-300">
                       Package Lifecycle Status
                    </button>
                  </router-link>
                  
                </div>
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
import {ref , onMounted} from 'vue'
// import { packages } from '@/stores/itinenary.ts'
const packages = ref([])
const getPackages = async () => {
  const { data } = await api().get('package')
  packages.value = data.data
}
const statuses = [
    { id: 1, name: 'Not In Plan' },
    { id: 2, name: 'In Plan' },
    { id: 3, name: 'In Preparation' },
    { id: 4, name: 'Fully Booked' },
    { id: 5, name: 'In Approval Process' },
    { id: 6, name: 'Approved' },
    { id: 7, name: 'Published' },
    { id: 8, name: 'Discontinued' }
  ];
const getStatus = (status) => {
  
 
  return statuses.find(s => s.id == status)?.name || 'Unknown Status';
}
const updateStatus = async (pkg) => {
  pkg._method = 'PUT'
  pkg.country_id = pkg.country.id
  pkg.city_id = pkg.city.id
  pkg.airport_id = pkg.airport.id
  pkg.agent_id = pkg.agent.id
  pkg.imam_id = pkg.imam.id
  pkg.support_manager_id = pkg.support_manager.id
  console.log(pkg)
  const {data} = await api().post('package/'+pkg.id,pkg)
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
