<template>
  <section class="p-10 bg-gray-50 w-4/5 mx-auto">
    <Breadcrumb />
    <p class="text-3xl font-bold pb-2 mb-6 text-center border-b-2 font-mono text-blue-600">
      Transport Services
    </p>
    <div class="bg-white border shadow-md rounded-lg p-6">
      <div v-if="loading" class="text-center">
        <p class="text-lg text-gray-500">Loading transport services...</p>
      </div>
      <div v-else-if="error" class="text-center">
        <p class="text-lg text-red-500">Error loading transport services.</p>
      </div>
      <div v-else>
        <div v-if="transportServices.length === 0" class="text-center text-lg text-gray-500">
          No transport services available.
        </div>
        <table class="">
          <thead class="">
            <tr class="bg-sky-400">
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase border-e border-gray-300">Service Name</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase border-e border-gray-300">Code</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase border-e border-gray-300">Short Name</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase border-e border-gray-300">Vehicle Type</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase border-e border-gray-300">Seats</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase border-e border-gray-300">Price/Day</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase ">Description</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="service in transportServices" :key="service.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-e border-gray-300">{{ service.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-e border-gray-300">{{ service.code }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-e border-gray-300">{{ service.short_name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-e border-gray-300">{{ service.type }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-e border-gray-300">{{ service.number_of_seats }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-e border-gray-300">${{ service.price_per_day }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ service.details }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Breadcrumb from '/src/components/Breadcrumb.vue'
import { useToast } from '/components/ui/toast/use-toast'

const { toast } = useToast()
const loading = ref(false)
const error = ref(false)
const transportServices = ref([])

const fetchTransportServices = async () => {
  loading.value = true
  try {
    const {data} = await api().get('package-transport-vendors')
    transportServices.value = data.data
  } catch (err) {
    console.error(err)
    error.value = true
    toast({ title: 'Error', description: 'Failed to load transport services', variant: 'destructive' })
  } finally {
    loading.value = false
  }
}
onMounted(() => {
  fetchTransportServices()
})
</script>

<style scoped>
/* Optional styling for the table */
table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

thead th {
  padding: 20px;
  background-color: lightseagreen;
  color: white;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 600;
}

tbody td {
  padding: 10px;
}

tr:nth-child(even) {
  background-color: #f9fafb;
}
</style>
