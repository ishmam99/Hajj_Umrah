<template>
    <section class="w-full p-10">
      <p class="text-3xl font-bold pb-10 font-mono text-indigo-600">Customer Package List</p>
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
              <tr v-for="(packageData, index) in customerPackages" :key="packageData.id" :class="index % 2 === 0 ? 'bg-gray-200' : 'bg-white'">
                <th>{{ index + 1 }}.</th>
                <td>{{ packageData.customerName }}</td>
                <td>{{ packageData.packageName }}</td>
                <td>{{ packageData.city }}</td>
                <td>{{ packageData.country }}</td>
                <td>${{ packageData.price }}</td>
                <td>{{ packageData.startDate }}</td>
                <td>{{ packageData.endDate }}</td>
                <td>{{ packageData.days }}</td>
                <td>
                  <span :class="{
                    'badge badge-success': packageData.status === 'Completed',
                    'badge badge-warning': packageData.status === 'In Progress',
                    'badge badge-error': packageData.status === 'Cancelled'
                  }">
                    {{ packageData.status }}
                  </span>
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
  import { ref } from 'vue';
  
  const customerPackages = ref([
    {
      id: 1,
      customerName: 'Jayed Ahmed',
      packageName: 'Hajj Economy Package',
      city: 'Mecca',
      country: 'Saudi Arabia',
      price: 2500,
      startDate: '2025-06-01',
      endDate: '2025-06-15',
      days: 15,
      status: 'Completed',
    },
    {
      id: 2,
      customerName: 'Fatima Zahir',
      packageName: 'Umrah Deluxe Package',
      city: 'Medina',
      country: 'Saudi Arabia',
      price: 3500,
      startDate: '2025-03-10',
      endDate: '2025-03-20',
      days: 11,
      status: 'In Progress',
    },
    {
      id: 3,
      customerName: 'Mohammad Ali',
      packageName: 'VIP Hajj Package',
      city: 'Mecca',
      country: 'Saudi Arabia',
      price: 5000,
      startDate: '2025-07-05',
      endDate: '2025-07-20',
      days: 16,
      status: 'Cancelled',
    },
    {
      id: 4,
      customerName: 'Aisha Bint Malik',
      packageName: 'Ramadan Umrah Package',
      city: 'Mecca',
      country: 'Saudi Arabia',
      price: 3000,
      startDate: '2025-04-15',
      endDate: '2025-04-25',
      days: 10,
      status: 'Completed',
    },
    {
      id: 5,
      customerName: 'Muhammad Salim',
      packageName: 'Economy Hajj Package',
      city: 'Jeddah',
      country: 'Saudi Arabia',
      price: 2000,
      startDate: '2025-08-01',
      endDate: '2025-08-15',
      days: 14,
      status: 'In Progress',
    }
  ]);
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
  