<template>
    <section class="w-full p-10">
      <p class="text-3xl font-bold pb-10 font-mono text-indigo-600">Customer Package List</p>
       <div class="flex flex-col w-1/3 gap-1">
          <label for="">Sort by Year</label>
          <select v-model="selectedYear" @change="filterPackages" class="select select-bordered px-4 py-2 rounded border shadow">
            <option disabled value="">Select Year</option>
            <option v-for="year in uniqueYears" :key="year" :value="year">{{ year }}</option>
          </select>
        </div>
      <div class="px-5">
        <div class="overflow-x-auto">
          <table class="table w-full border-collapse border border-gray-300">
            <!-- head -->
            <thead>
              <tr class="bg-indigo-500 text-white items-center text-xl">
                <th>No.</th>
                <th>Customer Name</th>
                <th>Package Name</th>
                <th>City</th>
                <th>Country</th>
                <th>Price</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Days</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="customerPackages.length > 0" v-for="(packageData, index) in customerPackages" :key="packageData.id" :class="index % 2 === 0 ? 'bg-gray-200' : 'bg-white'">
                <th>{{ index + 1 }}.</th>
                <td>{{ packageData.customer.user.name }}</td>
                <td>{{ packageData.package.package_title}}</td>
                <td>{{ packageData.package.city.name }}</td>
                <td>{{ packageData.package.country.name }}</td>
                <td>${{ packageData.package.price }}</td>
                <td>{{ packageData.package.start_at }}</td>
                <td>{{ packageData.package.end_at }}</td>
                <td>{{ packageData.package.itineraries.length }}</td>
                <td>
                  <select v-model="packageData.package.status_of_package" class="select select-bordered w-[200px]">
                <option disabled selected>Select an option</option>
                <option v-for="status in statuses" :value="status.id" >{{ status.name }}</option>
              </select>
                </td>
                <td>
                  <button class="btn btn-outline btn-xs">Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
import { onMounted, ref } from 'vue'
  
  const customerPackages = ref([]);
   const uniqueYears = ref(Array.from({length: 10}, (v, k) => 2022 + k))
  
const selectedYear = ref(new Date().getFullYear())
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
  const filterPackages = () => {
    console.log('dss',selectedYear.value)
    customerPackages.value = customerPackages.value.filter(pkg => {
      console.log(pkg.package.package_year ,selectedYear.value)
      return pkg.package.package_year == selectedYear.value
    });
  console.log(customerPackages.value)
};
   const getPackages = async () => {
  const { data } = await api().get('customer-packages')
  customerPackages.value = data.data
  }
  onMounted(() => {
   
    getPackages()
 })
  </script>
  
  <style scoped>
  thead {
    background-color: #5a67d8; 
  }
  
  tbody tr:nth-child(even) {
    background-color: rgba(198, 201, 246, 0.4);
  }
  tbody tr:nth-child(odd) {
    background-color: white; 
  }
  </style>
  