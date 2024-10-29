<template>
  <section class="w-4/5 p-10 bg-gray-100">
    <Breadcrumb />
    <p class="text-3xl font-bold pb-2 mb-6 text-center border-b-2 font-mono text-blue-600">
      Hotel List
    </p>
    <div class="bg-white shadow-md rounded-lg p-6">
      <div v-if="loading" class="text-center py-4">
        <svg
          class="w-8 h-8 animate-spin text-blue-500 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
        </svg>
        <p class="text-gray-600 mt-2">Loading hotels...</p>
      </div>

      <div v-else>
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
              <td class="px-6 py-4 border-e text-gray-600">
                 {{ hotel.country.name }}, {{ hotel.city.name }}
              </td>
              <td class="px-6 py-4 border-e text-gray-600">{{ hotel.details }}</td>
            </tr>
          </tbody>
        </table>
        <p v-if="!hotels.length" class="text-center text-gray-500 py-6">No hotels available</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Breadcrumb from '/src/components/Breadcrumb.vue'
import { useToast } from '/components/ui/toast/use-toast'

const hotels = ref([])
const loading = ref(true)
const { toast } = useToast()

const fetchHotels = async () => {
  loading.value = true
  try {
    const { data } = await api().get('package-hotel-vendors')
    hotels.value = data.data
  } catch (error) {
    console.error(error)
    toast({ title: 'Error', description: 'Failed to load hotels', variant: 'destructive' })
  } finally {
    loading.value = false
  }
}

onMounted(fetchHotels)
</script>

<style scoped>

</style>
