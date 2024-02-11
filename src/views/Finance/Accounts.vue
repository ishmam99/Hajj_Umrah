<template>
  <DefaultLayout>
    <div class="bg-slate-50">
      <div class="pt-[80px] flex justify-between">
        <FinanceSidebar />
        <div class="px-5 bg-slate-50 py-5 w-3/4">
          <p class="text-2xl font-bold py-3 border-b">Accounts</p>
          <div class="container mx-auto p-8">
            <!-- <h1 class="text-3xl font-bold mb-8">Accounts</h1> -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div
                v-for="(account, index) in accounts"
                :key="index"
                class="bg-white rounded-lg shadow-md p-6"
              >
                <h2 class="text-xl font-semibold">{{ account.name }}</h2>
                <p class="text-gray-600">{{ account.email }}</p>
                <div class="mt-4 flex justify-between items-center">
                  <router-link :to="'/accounts/' + account.id" class="text-blue-600 hover:underline"
                    >View Details</router-link
                  >
                  <button @click="deleteAccount(index)" class="text-red-600 hover:underline">
                    Delete
                  </button>
                </div>
                <div v-if="selectedAccount === index" class="mt-4">
                  <p><span class="font-semibold">Username:</span> {{ account.username }}</p>
                  <p><span class="font-semibold">Phone:</span> {{ account.phone }}</p>
                  <p><span class="font-semibold">Address:</span> {{ account.address }}</p>
                </div>
              </div>
            </div>
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
import { useRouter } from 'vue-router'

const accounts = ref([
  {
    id: 1,
    name: 'Muhammad Ali',
    username: 'm.ali',
    email: 'muhammad@example.com',
    phone: '+1234567890',
    address: '123 Main St, City'
  },
  {
    id: 2,
    name: 'Fatima Khan',
    username: 'f.khan',
    email: 'fatima@example.com',
    phone: '+1234567891',
    address: '456 Oak St, Town'
  },
  {
    id: 3,
    name: 'Ahmed Hassan',
    username: 'a.hassan',
    email: 'ahmed@example.com',
    phone: '+1234567892',
    address: '789 Elm St, Village'
  },
  {
    id: 4,
    name: 'Aisha Rahman',
    username: 'a.rahman',
    email: 'aisha@example.com',
    phone: '+1234567893',
    address: '101 Pine St, County'
  },
  {
    id: 5,
    name: 'Yusuf Ahmed',
    username: 'y.ahmed',
    email: 'yusuf@example.com',
    phone: '+1234567894',
    address: '222 Cedar St, State'
  },
  {
    id: 6,
    name: 'Zainab Ali',
    username: 'z.ali',
    email: 'zainab@example.com',
    phone: '+1234567895',
    address: '333 Maple St, Country'
  }
  // Add more accounts as needed
])

const router = useRouter()
const selectedAccount = ref(null)

function deleteAccount(index) {
  accounts.value.splice(index, 1)
}
</script>
