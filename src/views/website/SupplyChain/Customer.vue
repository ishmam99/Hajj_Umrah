<template>
   <div>
    <DefaultLayout>
      <div
        class="px-20 pt-20 mt-5 py-5 bg-cyan-800 bg-[url('/src/assets/image/home/bg123.png')] bg-repeat shadow-xl"
      >
        <div class="pt-3 mx-36 pb rounded-xl bg-[#ffffff] border-blue-50 shadow-xl border-[3px]">
          <div class="flex items-center justify-center gap-2 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path
                d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z"
              ></path>
            </svg>
            <p>Home</p>
            <p>/ Supply Chain</p>
            <!-- <p>/ Volunteers</p> -->
            <p class="text-cyan-800">/ Customer</p>
          </div>
          <div class="rounded-lg flex items-center justify-center relative py-3">
            <h1 class="text-cyan-800 text-4xl font-bold">Customer</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <!-- Supplier Information -->
      <div class="bg-gray-100 h-full py-5 flex items-center justify-center gap-5 px-20 w-full">
        <div class="space-y-8 w-3/4">
          <div class="bg-white rounded-xl p-5 w-full">
            <div class="container mx-auto p-4">
              <h1 class="text-4xl font-bold mb-4">Customer Information</h1>

              <!-- Display information for each customer -->
              <div v-for="customer in customers" :key="customer.id" class="mb-8">
                <section>
                  <h2 class="text-2xl font-semibold mb-2">{{ customer.name }}</h2>
                  <div class="mb-2">
                    <label class="font-bold">Contact Person: </label>
                    <span>{{ customer.contactPerson }}</span>
                  </div>
                  <div class="mb-2">
                    <label class="font-bold">Email: </label>
                    <span>{{ customer.email }}</span>
                  </div>
                  <div class="mb-2">
                    <label class="font-bold">Phone: </label>
                    <span>{{ customer.phone }}</span>
                  </div>
                  <div class="mb-2">
                    <label class="font-bold">Address: </label>
                    <span>
                      {{ customer.address.street }}, {{ customer.address.city }},
                      {{ customer.address.state }}, {{ customer.address.zip }},
                      {{ customer.address.country }}
                    </span>
                  </div>
                </section>

                <!-- Display recent orders for the customer -->
                <section>
                  <h3 class="text-xl font-semibold mt-4">Recent Orders</h3>
                  <table class="min-w-full border border-gray-300 mt-2">
                    <thead>
                      <tr class="bg-gray-100">
                        <th class="border p-2">Order ID</th>
                        <th class="border p-2">Order Date</th>
                        <th class="border p-2">Total Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="order in customer.orders" :key="order.id" class="bg-white">
                        <td class="border p-2">{{ order.id }}</td>
                        <td class="border p-2">{{ order.date }}</td>
                        <td class="border p-2">${{ order.totalAmount }}</td>
                      </tr>
                    </tbody>
                  </table>
                </section>

                <!-- Additional sections or information as needed -->

                <hr class="my-8 border-t" />
                <!-- Add a horizontal line between customers -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const customers = [
  {
    id: 1,
    name: 'Fatima Enterprises',
    contactPerson: 'Fatima Ahmed',
    email: 'fatima.ahmed@example.com',
    phone: '+123 456 7890',
    address: {
      street: '456 Islamic Street',
      city: 'Halalville',
      state: 'Blessed State',
      zip: '54321',
      country: 'Muslimland'
    },
    orders: [
      { id: 101, date: '2024-01-15', totalAmount: 150 },
      { id: 102, date: '2024-01-20', totalAmount: 200 }
    ]
  },
  {
    id: 2,
    name: 'Ahmed Trading Co.',
    contactPerson: 'Mohammed Ahmed',
    email: 'mohammed.ahmed@example.com',
    phone: '+987 654 3210',
    address: {
      street: '789 Medina Street',
      city: 'Blessed Town',
      state: 'Sacred Region',
      zip: '98765',
      country: 'Holyland'
    },
    orders: [
      { id: 103, date: '2024-02-01', totalAmount: 120 },
      { id: 104, date: '2024-02-05', totalAmount: 180 }
    ]
  }
  // Add more customer data with Islamic names as needed
]
</script>

<style scoped>
/* Add component-specific styles if needed */
</style>
