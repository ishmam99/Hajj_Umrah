<template>
  <section class="w-4/5 p-10 bg-gray-100">
    <Breadcrumb />
    <p class="text-3xl font-bold pb-2 mb-6 text-center border-b-2 font-mono text-green-600">
      Pending Bids
    </p>

    <!-- Loading Spinner -->
    <div v-if="loading" class="text-center py-4">
      <svg
        class="w-8 h-8 animate-spin text-green-500 mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
      </svg>
      <p class="text-gray-600 mt-2">Loading accepted bids...</p>
    </div>

    <!-- Display Bids -->
    <div v-else>
      <!-- Hotel Bids Section -->
      <div class="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 class="text-xl font-semibold text-blue-600 mb-4">Hotels</h2>
        <table class="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <thead class="bg-blue-600 text-white">
            <tr>
              <th class="px-6 py-4 border-e text-left font-semibold">Hotel Name</th>
              <th class="px-6 py-4 border-e text-left font-semibold">Code</th>
              <th class="px-6 py-4 border-e text-left font-semibold">Location</th>
              <th class="px-6 py-4 border-e text-left font-semibold">Amenities</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="hotel in hotels"
              :key="hotel.id"
              class="bg-white border-b border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <td class="px-6 py-4 border-e whitespace-nowrap font-medium text-gray-700">{{ hotel.name }}</td>
              <td class="px-6 py-4 border-e text-gray-600">{{ hotel.code }}</td>
              <td class="px-6 py-4 border-e text-gray-600">{{ hotel.country.name }}, {{ hotel.city.name }}</td>
              <td class="px-6 py-4 border-e text-gray-600">{{ hotel.details }}</td>
            </tr>
          </tbody>
        </table>
        <p v-if="!hotels.length" class="text-center text-gray-500 py-6">No hotels available</p>
      </div>

      <!-- Ground Services Section -->
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-xl font-semibold text-green-600 mb-4">Ground Transport Services</h2>
        <table class="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <thead class="bg-green-600 text-white">
            <tr>
              <th class="px-6 py-4 border-e text-left font-semibold">Service Name</th>
              <th class="px-6 py-4 border-e text-left font-semibold">Code</th>
              <th class="px-6 py-4 border-e text-left font-semibold">Short Name</th>
              <th class="px-6 py-4 border-e text-left font-semibold">Vehicle Type</th>
              <th class="px-6 py-4 border-e text-left font-semibold">Seats</th>
              <th class="px-6 py-4 border-e text-left font-semibold">Price/Day</th>
              <th class="px-6 py-4 border-e text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="service in transportServices"
              :key="service.id"
              class="bg-white border-b border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <td class="px-6 py-4 border-e whitespace-nowrap font-medium text-gray-700">{{ service.name }}</td>
              <td class="px-6 py-4 border-e text-gray-600">{{ service.code }}</td>
              <td class="px-6 py-4 border-e text-gray-600">{{ service.short_name }}</td>
              <td class="px-6 py-4 border-e text-gray-600">{{ service.type }}</td>
              <td class="px-6 py-4 border-e text-gray-600">{{ service.number_of_seats }}</td>
              <td class="px-6 py-4 border-e text-gray-600">${{ service.price_per_day }}</td>
              <td class="px-6 py-4 border-e text-gray-600">{{ service.details }}</td>
            </tr>
          </tbody>
        </table>
        <p v-if="!transportServices.length" class="text-center text-gray-500 py-6">No ground services available</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Breadcrumb from '/src/components/Breadcrumb.vue'
import { useToast } from '/components/ui/toast/use-toast'

const hotels = ref([])
const transportServices = ref([])
const loading = ref(true)
const { toast } = useToast()

const fetchAcceptedBids = async () => {
  loading.value = true
  try {
    const [hotelData, transportData] = await Promise.all([
      api().get('package-hotel-vendors'),
      api().get('package-transport-vendors')
    ])
    hotels.value = hotelData.data.data
    transportServices.value = transportData.data.data
  } catch (error) {
    console.error(error)
    toast({ title: 'Error', description: 'Failed to load accepted bids', variant: 'destructive' })
  } finally {
    loading.value = false
  }
}

onMounted(fetchAcceptedBids)
</script>

<style scoped>
/* Add any specific styling here if needed */
</style>
