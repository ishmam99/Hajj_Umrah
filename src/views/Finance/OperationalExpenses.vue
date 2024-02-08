<template>
  <DefaultLayout>
    <div class="bg-slate-50">
      <div class="pt-[80px] flex justify-between">
        <FinanceSidebar />
        <div class="px-5 bg-slate-50 py-5 w-3/4">
          <p class="text-2xl font-bold py-3 border-b">Operational Expenses</p>
          <div class="container mx-auto p-8">
            <!-- <h1 class="text-3xl font-bold mb-8">Operational Expenses</h1> -->

            <form @submit.prevent="addExpense" class="mb-8">
              <input
                v-model="newExpense.operationName"
                type="text"
                placeholder="Operation Name"
                class="border rounded px-2 py-1 mr-2"
              />
              <input
                v-model="newExpense.description"
                type="text"
                placeholder="Description"
                class="border rounded px-2 py-1 mr-2"
              />
              <input
                v-model="newExpense.amount"
                type="number"
                placeholder="Amount"
                class="border rounded px-2 py-1 mr-2"
              />
              <button
                type="submit"
                class="bg-blue-500 text-white px-4 py-1 rounded hover:bg-emerald-600"
              >
                Add Expense
              </button>
            </form>

            <div v-if="expenses.length === 0" class="text-gray-500">No expenses yet.</div>
            <ul v-else>
              <li
                v-for="(expense, index) in expenses"
                :key="index"
                class="bg-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-center"
              >
                <div class="py-1">
                  <h2 class="text-xl font-bold py-1">{{ expense.operationName }}</h2>
                  <h3 class="text-base font-semibold">{{ expense.description }}</h3>
                  <p class="text-gray-600">Amount: ${{ expense.amount }}</p>
                  <p class="text-gray-600">Date: {{ formatDate(expense.date) }}</p>
                </div>
                <div class="flex items-center">
                  <button
                    @click="editExpense(index)"
                    class="bg-blue-500 text-white px-4 py-1 rounded hover:bg-emerald-600"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteExpense(index)"
                    class="bg-gray-300 text-gray-600 px-4 py-1 rounded ml-2 hover:bg-red-400 hover:text-white ml-2"
                  >
                    Delete
                  </button>
                </div>
              </li>
            </ul>

            <div v-if="editingIndex !== null" class="mt-8 border-t pt-4">
              <h2 class="text-2xl font-semibold mb-4">Edit Expense</h2>
              <form @submit.prevent="saveEditedExpense">
                <input
                  v-model="editedExpense.operationName"
                  type="text"
                  placeholder="Operation Name"
                  class="border rounded px-2 py-1 mr-2"
                />
                <input
                  v-model="editedExpense.description"
                  type="text"
                  placeholder="Description"
                  class="border rounded px-2 py-1 mr-2"
                />
                <input
                  v-model="editedExpense.amount"
                  type="number"
                  placeholder="Amount"
                  class="border rounded px-2 py-1 mr-2"
                />
                <button
                  type="submit"
                  class="bg-blue-500 text-white px-4 py-1 rounded hover:bg-emerald-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  @click="cancelEdit"
                  class="bg-gray-300 text-gray-600 px-4 py-1 rounded ml-2 hover:bg-red-400 hover:text-white"
                >
                  Cancel
                </button>
              </form>
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

const expenses = ref([
  {
    id: 1,
    operationName: 'Masjid Expenses',
    description: 'Budgeting, expenditures, and financial management for Masjid operations.',
    amount: 100,
    date: new Date()
  },
  {
    id: 2,
    operationName: 'Maintenance',
    description: 'Ensure upkeep, repair, and cleanliness for Masjid facilities and grounds',
    amount: 200,
    date: new Date()
  }
])

const newExpense = ref({ operationName: '', description: '', amount: 0, date: new Date() })

const editedExpense = ref({ operationName: '', description: '', amount: 0 })

const editingIndex = ref(null)

function addExpense() {
  if (
    newExpense.value.operationName &&
    newExpense.value.description &&
    newExpense.value.amount > 0
  ) {
    const id = expenses.value.length + 1
    expenses.value.push({ id, ...newExpense.value })
    newExpense.value = { operationName: '', description: '', amount: 0, date: new Date() }
  }
}

function deleteExpense(index) {
  expenses.value.splice(index, 1)
}

function editExpense(index) {
  editingIndex.value = index
  const expense = expenses.value[index]
  editedExpense.value = { ...expense }
}

function saveEditedExpense() {
  if (
    editedExpense.value.operationName &&
    editedExpense.value.description &&
    editedExpense.value.amount > 0
  ) {
    expenses.value[editingIndex.value] = { ...editedExpense.value }
    cancelEdit()
  }
}

function cancelEdit() {
  editingIndex.value = null
  editedExpense.value = { operationName: '', description: '', amount: 0 }
}

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString(undefined, options)
}
</script>
