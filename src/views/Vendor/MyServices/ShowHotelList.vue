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
        <div v-if="!isEditing">
          
          <table class="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <thead class="bg-blue-600 text-white">
              <tr>
                <th class="px-6 py-4 border-e text-left font-semibold">Hotel Name</th>
                <th class="px-6 py-4 border-e text-left font-semibold">Code</th>
                <th class="px-6 py-4 border-e text-left font-semibold">Location</th>
                <th class="px-6 py-4 border-e text-left font-semibold">Amenities</th>
                <th class="px-6 py-4 text-left font-semibold">Actions</th>
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
                <td class="px-6 py-4 flex">
                  <button @click="startEdit(hotel)" class="px-4 py-2 bg-blue-500 text-white rounded mr-2 flex gap-1 hover:bg-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5 18.89H6.41421L15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L9.24264 18.89H21V20.89ZM15.7279 6.74785L17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785Z"></path></svg>
                    Edit</button>
                  <button @click="deleteHotel(hotel.id)" class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded flex gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z"></path></svg>
                    Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <p v-if="!hotels.length" class="text-center text-gray-500 py-6">No hotels available</p>
        </div>

        <!-- Edit Form -->
        <div v-else>
          <p class="text-3xl font-bold pb-2 mb-6 text-center border-b-2 font-mono text-blue-600">
            Edit Hotel
           </p>
          <form @submit.prevent="updateHotel">
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2">Hotel Name</label>
              <input v-model="editHotelData.name" class="w-full p-2 border rounded" type="text" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2">Code</label>
              <input v-model="editHotelData.code" class="w-full p-2 border rounded" type="text" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2">Amenities</label>
              <input v-model="editHotelData.details" class="w-full p-2 border rounded" type="text" />
            </div>
            <div class="flex justify-start gap-4 w-1/2">
              <button
            type="submit"
            :disabled="loginload"
            class="bg-blue-500 flex items-center gap-2 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded"
          >
            <span v-if="loginload" class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 animate-spin" fill="currentColor" width="12" height="12">
                <path d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"></path>
              </svg>
              Saving Changes...
            </span>
            <span v-else>Save Changes</span>
          </button>
              <button @click="cancelEdit" type="button" class="px-4 py-2 rounded bg-orange-600 w-1/5 text-white">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Breadcrumb from '/src/components/Breadcrumb.vue'
import { useToast } from '/components/ui/toast/use-toast'
const loginload = ref(false)
const hotels = ref([])
const loading = ref(true)
const { toast } = useToast()
const isEditing = ref(false)
const editHotelData = ref({
  id: null,
  name: '',
  code: '',
  details: ''
})

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

const startEdit = (hotel) => {
  isEditing.value = true
  editHotelData.value = { ...hotel }
}

const cancelEdit = () => {
  isEditing.value = false
  editHotelData.value = { id: null, name: '', code: '', details: '' }
}

const updateHotel = async () => {
  loginload.value = true
  try {
    await api().post(`package-hotel-vendors/${editHotelData.value.id}`, {
      ...editHotelData.value,
      _method: 'PUT'
    })
    toast({ title: 'Success', description: 'Hotel updated successfully' })
    isEditing.value = false
    await fetchHotels()
  } catch (error) {
    console.error(error)
    toast({ title: 'Error', description: 'Failed to update hotel', variant: 'destructive' })
  }
  loginload.value = false
}

const deleteHotel = async (id) => {
  try {
    await api().post(`package-hotel-vendors/${id}`, { _method: 'DELETE' })
    toast({ title: 'Deleted', description: 'Hotel deleted successfully' })
    hotels.value = hotels.value.filter(hotel => hotel.id !== id)
  } catch (error) {
    console.error(error)
    toast({ title: 'Error', description: 'Failed to delete hotel', variant: 'destructive' })
  }
}

onMounted(fetchHotels)
</script>
