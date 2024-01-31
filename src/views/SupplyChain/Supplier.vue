<template>
  <div>
    <DefaultLayout>
      <div
        class="px-20 pt-20 mt-5 py-5 bg-emerald-800 bg-[url('../assets/image/home/bg123.png')] bg-repeat shadow-xl"
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
            <p class="text-emerald-800">/ Supplier</p>
          </div>
          <div class="rounded-lg flex items-center justify-center relative py-3">
            <h1 class="text-emerald-800 text-4xl font-bold">Supplier</h1>
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
                <h1 class="text-4xl font-bold mb-4">Islamic Digital Lane Masjid (IDL Masjid)</h1>
            
                <!-- Display information for each supplier -->
                <div v-for="supplier in suppliers" :key="supplier.name" class="mb-8">
                  <section>
                    <h2 class="text-2xl font-semibold mb-2">{{ supplier.name }}</h2>
                    <div class="mb-2">
                      <label class="font-bold">Contact Person:</label>
                      <span>{{ supplier.contactPerson }}</span>
                    </div>
                    <div class="mb-2">
                      <label class="font-bold">Email:</label>
                      <span>{{ supplier.email }}</span>
                    </div>
                    <div class="mb-2">
                      <label class="font-bold">Phone:</label>
                      <span>{{ supplier.phone }}</span>
                    </div>
                    <div class="mb-2">
                      <label class="font-bold">Address:</label>
                      <span>
                        {{ supplier.address.street }},
                        {{ supplier.address.city }},
                        {{ supplier.address.state }},
                        {{ supplier.address.zip }},
                        {{ supplier.address.country }}
                      </span>
                    </div>
                  </section>
            
                  <!-- Display products from the supplier -->
                  <section>
                    <h3 class="text-xl font-semibold mt-4">Products from {{ supplier.name }}</h3>
                    <ul class="list-disc pl-4">
                      <li v-for="product in supplier.products" :key="product.id">
                        {{ product.name }} - ${{ product.price }}
                      </li>
                    </ul>
                  </section>
            
                  <!-- Display order history with the supplier -->
                  <section>
                    <h3 class="text-xl font-semibold mt-4">Order History with {{ supplier.name }}</h3>
                    <table class="min-w-full border border-gray-300 mt-2">
                      <thead>
                        <tr class="bg-gray-100">
                          <th class="border p-2">Order ID</th>
                          <th class="border p-2">Order Date</th>
                          <th class="border p-2">Total Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="order in supplier.orders" :key="order.id" class="bg-white">
                          <td class="border p-2">{{ order.id }}</td>
                          <td class="border p-2">{{ order.date }}</td>
                          <td class="border p-2">${{ order.totalAmount }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </section>
            
                  <!-- Additional sections or information as needed -->
            
                  <hr class="my-8 border-t" /> <!-- Add a horizontal line between suppliers -->
                </div>
              </div>
          </div>

        </div>

      </div>

    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from '../../layouts/DefaultLayout.vue'
const suppliers = [
  {
    name: "Al-Falah Islamic Mart",
    contactPerson: "Mohammed Ahmed",
    email: "mohammed.ahmed@alfalahmart.com",
    phone: "+123 456 7890",
    address: {
      street: "123 Halal Street",
      city: "Islamic City",
      state: "Islamic State",
      zip: "54321",
      country: "Muslimland",
    },
    products: [
      { id: 1, name: "Islamic Books", category: "Literature", price: 20 },
      { id: 2, name: "Prayer Rugs", category: "Spiritual", price: 30 },
    ],
    orders: [
      { id: 101, date: "2024-01-15", totalAmount: 50 },
      { id: 102, date: "2024-01-20", totalAmount: 40 },
    ],
  },
  {
    name: "Nur al-Hidayah Bookstore",
    contactPerson: "Fatima Ali",
    email: "fatima.ali@nuralhidayah.com",
    phone: "+987 654 3210",
    address: {
      street: "789 Quran Avenue",
      city: "Madina Town",
      state: "Blessed Region",
      zip: "98765",
      country: "Sacred Land",
    },
    products: [
      { id: 3, name: "Islamic Art Prints", category: "Art", price: 25 },
      { id: 4, name: "Halal Cosmetics", category: "Beauty", price: 40 },
    ],
    orders: [
      { id: 103, date: "2024-02-01", totalAmount: 60 },
      { id: 104, date: "2024-02-05", totalAmount: 75 },
    ],
  },
  {
    name: "Sakinah Islamic Attire",
    contactPerson: "Aisha Rahman",
    email: "aisha.rahman@sakinahattire.com",
    phone: "+456 789 0123",
    address: {
      street: "456 Modesty Lane",
      city: "Hijabville",
      state: "Covered State",
      zip: "67890",
      country: "Modestland",
    },
    products: [
      { id: 5, name: "Abayas", category: "Clothing", price: 50 },
      { id: 6, name: "Kufi Caps", category: "Accessories", price: 15 },
    ],
    orders: [
      { id: 105, date: "2024-03-10", totalAmount: 90 },
      { id: 106, date: "2024-03-15", totalAmount: 120 },
    ],
  },
  {
    name: "Noor Islamic Grocery",
    contactPerson: "Ahmed Malik",
    email: "ahmed.malik@noorgrocery.com",
    phone: "+789 012 3456",
    address: {
      street: "789 Sunnah Street",
      city: "Halal City",
      state: "Blessed State",
      zip: "12345",
      country: "Pureland",
    },
    products: [
      { id: 7, name: "Dates", category: "Food", price: 10 },
      { id: 8, name: "Zamzam Water", category: "Beverages", price: 5 },
    ],
    orders: [
      { id: 107, date: "2024-04-05", totalAmount: 15 },
      { id: 108, date: "2024-04-10", totalAmount: 20 },
    ],
  },
  // Add more Islamic-named suppliers as needed
];
</script>

<style scoped>
/* Add component-specific styles if needed */
</style>
