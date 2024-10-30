<template>
  <section class="p-10 bg-gray-50 w-4/5 mx-auto">
    <Breadcrumb />
    <p class="text-3xl font-bold pb-2 mb-6 text-center border-b-2 font-mono text-blue-600">
      Ground Transport Services
    </p>
    <div class="bg-white border shadow-md rounded-lg p-6">
      <div v-if="loading" class="text-center">
        <svg
          class="w-8 h-8 animate-spin text-blue-500 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
        </svg>
        <p class="text-lg text-gray-500">Loading transport services...</p>
      </div>
      <div v-else-if="error" class="text-center">
        <p class="text-lg text-red-500">Error loading transport services.</p>
      </div>
      <div v-else>
        <div v-if="isEditing">
          <p class="text-3xl font-bold pb-2 mb-6 text-center border-b-2 font-mono text-blue-600">
            Edit Ground Transport
           </p>
          <!-- Edit Form -->
          <form @submit.prevent="updateService">
           <div class="flex items-center gap-4 w-full">
            <div class="w-1/2">
              <label for="name">Service Name:</label>
            <input type="text" v-model="editForm.name" class="w-full mb-3 p-2 border-2 rounded" />
            </div>

            <div class="w-1/2">
              <label for="code">Code:</label>
            <input type="text" v-model="editForm.code" class="w-full mb-3 p-2 border-2 rounded" />
            </div>
           </div>

           <div class="flex gap-4 w-full">
            <div class="w-1/2">
              <label for="short_name">Short Name:</label>
              <input type="text" v-model="editForm.short_name" class="w-full mb-3 p-2 border-2 rounded" />
             </div>
             <div class="w-1/2">
              <label for="type">Vehicle Type:</label>
              <select
                v-model="editForm.type"
                id="vehicleType"
                class="w-full border-2  px-4 py-2 rounded focus:ring focus:border-blue-300"
              >
                <option disabled value="">Select vehicle type</option>
                <option value="bus">Bus</option>
                <option value="van">Van</option>
                <option value="car">Car</option>
                <option value="limousine">Limousine</option>
              </select>
             </div>
           </div>

           <div class="flex gap-4 w-full">
            <div class="w-1/2">
              <label for="number_of_seats">Seats:</label>
              <input type="number" v-model="editForm.number_of_seats" class="w-full mb-3 p-2 border-2 rounded" />
             </div>
             <div class="w-1/2">
              <label for="price_per_day">Price/Day:</label>
            <input type="number" v-model="editForm.price_per_day" class="w-full mb-3 p-2 border-2 rounded" />
             </div>
           </div>


            <div>
              <label for="details">Description:</label>
            <textarea v-model="editForm.details" class="w-full mb-3 p-2 border-2 rounded"></textarea>
            </div>

           <div class="flex">
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
            <button type="button" @click="cancelEdit" class="px-4 py-2 bg-gray-400 text-white rounded ml-2">Cancel</button>
           </div>
          </form>
        </div>

        <div v-else>
          <!-- Table Display -->
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
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase border-e">Description</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase ">Actions</th>
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
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-e">{{ service.details }}</td>
                <td class="px-6 py-4 flex">
                  <button @click="editService(service)" class="px-4 py-2 bg-blue-500 text-white rounded mr-2 flex gap-1 hover:bg-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5 18.89H6.41421L15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L9.24264 18.89H21V20.89ZM15.7279 6.74785L17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785Z"></path></svg>
                    Edit</button>
                  <button @click="deleteService(service.id)" class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded flex gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z"></path></svg>
                    Delete</button>
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
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
const isEditing = ref(false)
const loginload = ref(false)
const editForm = ref({
  id: null,
  name: '',
  code: '',
  short_name: '',
  type: '',
  number_of_seats: '',
  price_per_day: '',
  details: ''
})

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

const editService = (service) => {
  isEditing.value = true
  editForm.value = { ...service }
}

const updateService = async () => {
  loginload.value = true
  try {
    await api().post(`package-transport-vendors/${editForm.value.id}`, {
      ...editForm.value,
      _method: 'PUT'
    })
    toast({ title: 'Success', description: 'Service updated successfully', variant: 'success' })
    fetchTransportServices()
    isEditing.value = false
  } catch (error) {
    toast({ title: 'Error', description: 'Failed to update service', variant: 'destructive' })
  }
  loginload.value = false
}

const deleteService = async (id) => {
  try {
    await api().post(`package-transport-vendors/${id}`, { _method: 'DELETE' })
    toast({ title: 'Success', description: 'Service deleted successfully', variant: 'success' })
    fetchTransportServices()
  } catch (error) {
    toast({ title: 'Error', description: 'Failed to delete service', variant: 'destructive' })
  }
}

const cancelEdit = () => {
  isEditing.value = false
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
