<template>
  <DefaultLayout>
    <div class="bg-slate-50">
      <div class="pt-[80px] flex justify-between">
        <FinanceSidebar />
        <div class="px-5 bg-slate-50 py-5 w-3/4">
          <p class="text-2xl font-bold py-3 border-b">Donations</p>
          <div class="container mx-auto p-8">
            <!-- <h1 class="text-3xl font-bold mb-8">Donation Management</h1> -->

            <!-- List of donations -->
            <div v-if="donations.length === 0" class="text-gray-500">No donations yet.</div>
            <ul v-else>
              <li
                v-for="(donation, index) in donations"
                :key="index"
                class="bg-white rounded-lg shadow-md p-4 mb-4"
              >
                <h2 class="text-xl font-semibold">{{ donation.name }}</h2>
                <p class="text-gray-600">Amount: ${{ donation.amount }}</p>
                <p class="text-gray-600">Date: {{ formatDate(donation.date) }}</p>
                <p v-if="donation.method" class="text-gray-600">Method: {{ donation.method }}</p>
                <p v-if="donation.notes" class="text-gray-600">Notes: {{ donation.notes }}</p>
                <div class="flex items-center mt-2">
                  <button
                    @click="approveDonation(index)"
                    v-if="donation.approved"
                    class="bg-blue-500 text-white px-4 py-1 rounded mr-2 hover:bg-green-600"
                  >
                    Approved
                  </button>
                  <button
                    @click="approveDonation(index)"
                    v-if="!donation.approved"
                    class="bg-green-500 text-white px-4 py-1 rounded mr-2 hover:bg-green-600"
                  >
                    Approve
                  </button>
                  <button
                    @click="deleteDonation(index)"
                    class="bg-red-500 text-white px-4 py-1 rounded hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FinanceSidebar from '/src/views/Finance/FinanceSidevar.vue'

import { ref } from 'vue'

// Array to store donations
const donations = ref([
  {
    id: 1,
    name: 'Yusuf Ahmed',
    amount: 100,
    date: new Date(),
    approved: false,
    method: 'Sadaqah',
    notes: 'For orphans'
  },
  {
    id: 2,
    name: 'Ayesha Khan',
    amount: 200,
    date: new Date(),
    approved: true,
    method: 'Zakat',
    notes: 'For the needy'
  },
  {
    id: 3,
    name: 'Ibrahim Ali',
    amount: 150,
    date: new Date(),
    approved: false,
    method: 'Fidyah',
    notes: 'Ramadan'
  }
  // Add more donations as needed
])

// Function to approve a donation
function approveDonation(index) {
  donations.value[index].approved = true
}

// Function to delete a donation
function deleteDonation(index) {
  donations.value.splice(index, 1)
}

// Function to format date
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString(undefined, options)
}
</script>
