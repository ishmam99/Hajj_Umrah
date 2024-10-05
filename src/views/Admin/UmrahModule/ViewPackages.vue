<template>
  <div class="bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50 py-5 w-3/4">
    <div class="px-2 mb-8">
      <!-- Umrah Packages Header -->
      <div class="text-center flex items-center justify-center gap-24 pb-6 border-b-4 border-gray-300 mb-12">
        <img src="/src/assets/image/makkah.jpg" alt="" class="w-24 rounded-full h-24">
        <div>
          <p class="text-5xl font-bold text-[#286d71] tracking-tight">Umrah Packages</p>
        <p class="text-xl text-gray-600 mt-3">Create your perfect Umrah experience</p>
        </div>
        <img src="/src/assets/image/madinah.jpg" alt="" class="w-24 rounded-full h-24">
      </div>

      <!-- Dropdowns for Sorting -->
      <div class="container flex justify-between mb-6 gap-4">
        <div class="flex flex-col gap-1 w-1/3">
          <label for="countrySort" class="mr-2">Sort by Country:</label>
          <select id="countrySort" v-model="selectedCountry" @change="sortPackagesByCountry" class="border py-2 px-4 rounded">
            <option value="">All Countries</option>
            <option v-for="(country, index) in countries" :key="index" :value="country">{{ country }}</option>
          </select>
        </div>
        <div class="flex flex-col gap-1 w-1/3">
          <label for="citySort" class="mr-2">Sort by City:</label>
          <select id="citySort" v-model="selectedCity" @change="sortPackagesByCity" class="border py-2 px-4 rounded">
            <option value="">All Cities</option>
            <option v-for="(city, index) in cities" :key="index" :value="city">{{ city }}</option>
          </select>
        </div>
        <div class="flex flex-col gap-1 w-1/3">
          <label for="airportSort" class="mr-2">Sort by Airport:</label>
          <select id="airportSort" v-model="selectedAirport" @change="sortPackagesByAirport" class="border py-2 px-4 rounded">
            <option value="">All Airports</option>
            <option v-for="(airport, index) in airports" :key="index" :value="airport">{{ airport }}</option>
          </select>
        </div>
      </div>

      <!-- Packages Table -->
      <div class="overflow-x-auto bg-slate-100 shadow">
        <table class="table-auto w-full text-left border-collapse">
          <thead>
            <tr class="bg-[#286d71] text-white">
              <th class="border px-6 py-3">Title</th>
              <th class="border px-6 py-3">Package Update</th>
              <th class="border py-3 text-center">Itinerary</th>
              <th class="border px-6 py-3">Origin City</th>
              <th class="border px-6 py-3">Origin Airport</th>
              <th class="border px-6 py-3">Origin Country</th>
              <th class="border px-6 py-3">Start Date</th>
              <th class="border px-6 py-3">End Date</th>
              <th class="border px-6 py-3">Package ID</th>
              <th class="border px-6 py-3">Agent Name</th>
              <th class="border px-6 py-3">Imam Name</th>
              <th class="border px-6 py-3">Local Support Name</th>
              <th class="border px-6 py-3">Status</th>
              <th class="border px-6 py-3">Package Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pkg, index) in filteredPackages" :key="index" class="hover:bg-gray-50 shadow">
              <td class="px-4 py-2 border-e-2 text-nowrap">{{ pkg.package_title }}</td>
              <td class="py-2 border-e-2">
                <div class="flex space-x-2">
                  <router-link :to="'package_update_status/'+pkg.id">
                    <button class="bg-blue-500 hover:bg-bg-blue-600 text-white py-1 px-3 rounded-lg shadow-md transition-all duration-300">
                      Update Package
                    </button>
                  </router-link> 
                </div>
              </td>
              <td class="text-center py-8 border-e-2 flex items-center gap-1">
                <router-link :to="'package_details/'+pkg.id">
                  <button class="bg-[#286d71] hover:bg-[#1f565b] text-white py-1 px-3 rounded-lg shadow-md transition-all duration-300">
                    View Itinerary
                  </button>
                </router-link> 
                <router-link :to="'package_details/package_edit/'+pkg.id">
                  <button class="bg-[#286d71] hover:bg-[#1f565b] text-white py-1 px-3 rounded-lg shadow-md transition-all duration-300">
                    Update Itinerary
                  </button>
                </router-link> 
              </td>
              <td class="px-4 py-2 border-e-2">{{ pkg.city?.name }}</td>
              <td class="px-4 py-2 border-e-2">{{ pkg.airport.short_name }}</td>
              <td class="px-4 py-2 border-e-2">{{ pkg.country?.name }}</td>
              <td class="px-4 py-2 border-e-2">{{ pkg.start_at }}</td>
              <td class="px-4 py-2 border-e-2">{{ pkg.end_at }}</td>
              <td class="px-4 py-2 border-e-2">{{ pkg.package_id }}</td>
              <td class="px-4 py-2 border-e-2">{{ pkg.agent?.user?.name }}</td>
              <td class="px-4 py-2 border-e-2">{{ pkg.imam?.user?.name }}</td>
              <td class="px-4 py-2 border-e-2">{{ pkg.support_manager?.user?.name }}</td>
              <td class="px-4 py-2 border-e-2">{{ getStatus(pkg.status_of_package) }}</td>
              <td class="text-center px-4 py-2 border-e-2">
                <button class="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-lg shadow-md transition-all duration-300" @click="deletePackage(pkg.packageId)">
                  Delete
                </button>
              </td>
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
const filteredPackages = ref([]) // To hold sorted/filtered packages
const selectedCountry = ref('')
const selectedCity = ref('')
const selectedAirport = ref('')
const countries = ref([])
const cities = ref([])
const airports = ref([])

const getPackages = async () => {
  const { data } = await api().get('package')
  packages.value = data.data
  filteredPackages.value = data.data
  countries.value = [...new Set(data.data.map(pkg => pkg.country?.name))]
  cities.value = [...new Set(data.data.map(pkg => pkg.city?.name))]
  airports.value = [...new Set(data.data.map(pkg => pkg.airport?.short_name))]
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

const sortPackagesByCountry = () => {
  filteredPackages.value = selectedCountry.value
    ? packages.value.filter(pkg => pkg.country?.name === selectedCountry.value)
    : packages.value
}

const sortPackagesByCity = () => {
  filteredPackages.value = selectedCity.value
    ? packages.value.filter(pkg => pkg.city?.name === selectedCity.value)
    : packages.value
}

const sortPackagesByAirport = () => {
  filteredPackages.value = selectedAirport.value
    ? packages.value.filter(pkg => pkg.airport?.short_name === selectedAirport.value)
    : packages.value
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
