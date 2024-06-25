<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '@/config/api'

// variable to store data from get api (getPositionList function)
const positionList = ref()

// Get position list Function
const getPositionList = async () => {
  try {
    const { data } = await api().get('get-position-list')
    positionList.value = data.data
    console.log(data.data, 'Here is the data')
  } catch (error) {
    console.error(error.message, 'Here is the issue')
  }
}

onMounted(() => {
  getPositionList()
})
</script>

<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl font-bold pb-2">Position List</p>
    </div>

    <hr />
    <div
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-sm">
            <th class="p-4 text-left">Job ID</th>
            <th class="p-4 text-left">Job Title</th>
            <th class="p-4 text-left">Reports to</th>
            <th class="p-4 text-left">Number of Positions</th>
            <th class="p-4 text-left">Positions Occupied</th>
            <th class="p-4 text-left">Vacancies available</th>
            <th class="p-4 text-left">Salary type</th>
            <th class="p-4 text-left">Salary Amount</th>
          </tr>
        </thead>
        <tbody class="mt-4">
          <tr v-for="position in positionList" :key="position">
            <td class="px-4 py-2">
              <h3 class="font-bold">{{ position.id }}</h3>
            </td>
            <td class="px-4 py-2">
              <h4 class="font-semibold">{{ position.job_title }}</h4>
            </td>
            <td class="px-4 py-2">
              <p class="font-semibold">{{ position.repost_to }}</p>
            </td>
            <td class="px-4 py-2">
              {{ position.number_of_position ? position.number_of_position : '-' }}
            </td>
            <td class="px-4 py-2">{{ position.position_occupied }}</td>
            <td class="px-4 py-2">{{ position.vacancies_available }}</td>
            <td class="px-4 py-2">
              <p class="text-sm font-bold text-blue-600">{{ position.salary_type }}</p>
            </td>
            <td class="px-4 py-2">
              <div class="flex gap-1">
                <p class="text-sm font-bold text-blue-600 mx-3 mt-1">
                  {{ position.salary_amount }}
                </p>
                <router-link to="/HR_Dashboard/HR_Position_List/1">
                  <span class="text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </span>
                </router-link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
