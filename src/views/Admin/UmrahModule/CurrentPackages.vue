<template>
  <div class="bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50 py-5 w-3/4 mx-auto">
    <div class="px-2 my-8">
      <!-- Umrah Packages Header -->
      <div class="text-center flex items-center justify-center gap-24 pb-6 border-b-4 border-gray-300 mb-12">
        <img src="/src/assets/image/makkah.jpg" alt="" class="w-24 rounded-full h-24">
        <div>
          <p class="text-5xl font-bold text-[#286d71] tracking-tight">Approve Umrah Packages</p>
        <p class="text-xl text-gray-600 mt-3">Update Package Status</p>
        </div>
        <img src="/src/assets/image/madinah.jpg" alt="" class="w-24 rounded-full h-24">
      </div>

      <!-- Sorting Dropdowns -->
      <div class="flex space-x-4 mb-6 px-10">
        <!-- Sort by Country -->
        <div class="flex flex-col w-1/3 gap-1">
          <label for="">Sort by Country</label>
          <select v-model="selectedCountry" @change="filterPackages" class="select select-bordered px-4 py-2 rounded border shadow ">
            <option disabled value="">Select Country</option>
            <option v-for="country in uniqueCountries" :key="country" :value="country">{{ country }}</option>
          </select>
        </div>

        <!-- Sort by City -->
        <div class="flex flex-col w-1/3 gap-1">
          <label for="">Sort by City</label>
          <select v-model="selectedCity" @change="filterPackages" class="select select-bordered px-4 py-2 rounded border shadow">
            <option disabled value="">Select City</option>
            <option v-for="city in uniqueCities" :key="city" :value="city">{{ city }}</option>
          </select>
        </div>

        <!-- Sort by Airport -->
        <div class="flex flex-col w-1/3 gap-1">
          <label for="">Sort by Airport</label>
          <select v-model="selectedAirport" @change="filterPackages" class="select select-bordered px-4 py-2 rounded border shadow">
            <option disabled value="">Select Airport</option>
            <option v-for="airport in uniqueAirports" :key="airport" :value="airport">{{ airport }}</option>
          </select>
        </div>
      </div>

      <!-- Packages Table -->
      <div class="overflow-x-auto w-full bg-slate-100 shadow">
        <table class="table-auto w-full text-left border-collapse">
          <thead>
            <tr class="bg-[#286d71] text-white">
              <th class="border px-6 py-3">Title</th>
              <th class="border px-3 py-3">Package Approval Status</th>
              <th class="border px-3 py-3">Package Lifecycle Status</th>
              <th class="border px-6 py-3">Origin City</th>
              <th class="border px-6 py-3">Origin Airport</th>
              <th class="border px-6 py-3">Origin Country</th>
              <th class="border px-6 py-3">Start Date</th>
              <th class="border px-6 py-3">Package ID</th>
              <th class="border px-6 py-3">Agent Name</th>
              <th class="border px-6 py-3">Imam Name</th>
              <th class="border px-6 py-3">Local Support Name</th>
              <th class="border px-6 py-3">End Date</th>
              <th class="border px-3 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pkg, index) in filteredPackages" :key="index" class="hover:bg-gray-50">
              <td class="px-4 py-2 border-e-2 text-nowrap">{{ pkg.package_title }}</td>
              <td class="px-4 py-2 border-e-2">
                <div class="flex space-x-2">
                  <router-link :to="'package_update_status_approve/'+pkg.id">
                    <button class="bg-green-500 hover:bg-green-600 w-[100px] text-white py-1 px-1 rounded-lg shadow-md">Package Update for Approval</button>
                  </router-link>
                  <router-link :to="'package_status/'+pkg.id">
                    <button class="bg-blue-500 hover:bg-blue-600 w-[100px] text-white py-1 px-3 rounded-lg shadow-md">Package Approval Status</button>
                  </router-link>
                </div>
              </td>
              <td class="px-4 py-2">
                <router-link :to="'package_lifecycle_status/'+pkg.id">
                  <button class="bg-[#286d71] hover:bg-[#1f565b] text-white py-1 px-3 rounded-lg shadow-md">Package Lifecycle Status</button>
                </router-link>
              </td>
              <td class="px-4 py-2 border-e-2 text-nowrap">{{ pkg.city?.name }}</td>
              <td class="px-4 py-2 border-e-2">{{ pkg.airport.short_name }}</td>
              <td class="px-4 py-2 border-e-2 ">{{ pkg.country?.name }}</td>
              <td class="px-4 py-2 border-e-2">{{ pkg.start_at }}</td>
              <td class="px-4 py-2 border-e-2">{{ pkg.package_id }}</td>
              <td class="px-4 py-2 border-e-2 text-nowrap">{{ pkg.agent?.user?.name }}</td>
              <td class="px-4 py-2 border-e-2 text-nowrap">{{ pkg.imam?.user?.name }}</td>
              <td class="px-4 py-2 border-e-2">{{ pkg.support_manager?.user?.name }}</td>
              <td class="px-4 py-2 border-e-2">{{ pkg.end_at }}</td>
              <td class="px-4 py-2">
                <select @change="updateStatus(pkg)" v-model="pkg.status_of_package" class="select select-bordered w-full">
                  <option disabled value="">Select an option</option>
                  <option v-for="status in statuses" :value="status.id">{{ status.name }}</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

// Package Data
const packages = ref([]);
const filteredPackages = ref([]);
const selectedCountry = ref('');
const selectedCity = ref('');
const selectedAirport = ref('');

// Fetch Packages
const getPackages = async () => {
  const { data } = await api().get('package');
  packages.value = data.data;
  filteredPackages.value = packages.value;
};

// Filter Packages based on selected criteria
const filterPackages = () => {
  filteredPackages.value = packages.value.filter(pkg => {
    const matchesCountry = !selectedCountry.value || pkg.country?.name === selectedCountry.value;
    const matchesCity = !selectedCity.value || pkg.city?.name === selectedCity.value;
    const matchesAirport = !selectedAirport.value || pkg.airport?.short_name === selectedAirport.value;
    return matchesCountry && matchesCity && matchesAirport;
  });
};

// Get unique countries, cities, and airports from the package data
const uniqueCountries = computed(() => [...new Set(packages.value.map(pkg => pkg.country?.name))]);
const uniqueCities = computed(() => [...new Set(packages.value.map(pkg => pkg.city?.name))]);
const uniqueAirports = computed(() => [...new Set(packages.value.map(pkg => pkg.airport?.short_name))]);

// Status Options
const statuses = [
  { id: 1, name: 'Not In Plan' },
  { id: 2, name: 'In Plan' },
  { id: 3, name: 'In Preparation' },
  { id: 4, name: 'Fully Booked' },
  { id: 5, name: 'In Approval Process' },
  { id: 6, name: 'Approved' },
  { id: 7, name: 'Published' },
  { id: 8, name: 'Discontinued' },
];

// Update status for a package
const updateStatus = async (pkg) => {
  pkg._method = 'PUT';
  const { data } = await api().post('package/' + pkg.id, pkg);
  console.log('Status updated:', data);
};

onMounted(() => {
  getPackages();
});
</script>

<style scoped>
table th, table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}
tr:nth-child(even) {
  background-color: #f9f9f9;
}

select.select-bordered {
  width: auto;
  border: 1px solid #ccc;
  padding: 5px;
  font-size: 14px;
}
button {
  cursor: pointer;
}
</style>
