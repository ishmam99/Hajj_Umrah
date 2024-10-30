<template>
    <section class="p-10 bg-gray-50 w-4/5 mx-auto">
      <Breadcrumb />
      <p class="text-3xl font-bold pb-2 mb-6 text-center border-b-2 font-mono text-blue-600">
        Add Transport Service
      </p>
      <div class=" w-full">
        <form @submit.prevent="vendorForm" class="bg-white border shadow-md rounded-lg p-6 space-y-4">
          <!-- Service Name and Code -->
          <div class="flex gap-4">
            <div class="mb-4 w-2/4">
              <label for="serviceName" class="block text-lg font-semibold text-gray-700">Transport Service Name</label>
              <input
                v-model="transportCreateForm.name"
                type="text"
                id="serviceName"
                class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300"
                placeholder="Enter transport service name"
              />
            </div>
            <div class="mb-4 w-1/4">
              <label for="code" class="block text-lg font-semibold text-gray-700">Code</label>
              <input
                v-model="transportCreateForm.code"
                type="text"
                id="code"
                class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300"
                placeholder="Enter code name"
              />
            </div>
            <!-- Short Name -->
          <div class="mb-4 w-1/4">
            <label for="shortName" class="block text-lg font-semibold text-gray-700">Short Name</label>
            <input
              v-model="transportCreateForm.short_name"
              type="text"
              id="shortName"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300"
              placeholder="Enter short name"
            />
          </div>
          </div>
  
          
  
          <!-- Vehicle Type -->
          <div class="mb-4">
            <label for="vehicleType" class="block text-lg font-semibold text-gray-700">Vehicle Type</label>
            <select
              v-model="transportCreateForm.type"
              id="vehicleType"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300"
            >
              <option disabled value="">Select vehicle type</option>
              <option value="bus">Bus</option>
              <option value="van">Van</option>
              <option value="car">Car</option>
              <option value="limousine">Limousine</option>
            </select>
          </div>
  
          <!-- Number of Seats -->
          <div class="mb-4">
            <label for="seats" class="block text-lg font-semibold text-gray-700">Number of Seats</label>
            <input
              v-model="transportCreateForm.number_of_seats"
              type="number"
              id="seats"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300"
              placeholder="Enter total number of seats"
            />
          </div>
  
          <!-- Price per Day -->
          <div class="mb-4">
            <label for="pricePerDay" class="block text-lg font-semibold text-gray-700">Price per Day</label>
            <input
              v-model="transportCreateForm.price_per_day"
              type="text"
              id="pricePerDay"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300"
              placeholder="Enter price per day"
            />
          </div>
  
          <!-- Available Dates
          <div class="mb-4">
            <label for="availableDates" class="block text-lg font-semibold text-gray-700">Available Dates</label>
            <input
              type="date"
              id="availableDates"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300"
            />
          </div>     -->
  
          <!-- Vehicle Description -->
          <div class="mb-4">
            <label for="description" class="block text-lg font-semibold text-gray-700">Vehicle Description</label>
            <textarea
              v-model="transportCreateForm.details"
              id="description"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300"
              rows="4"
              placeholder="Describe the vehicle, amenities, etc."
            ></textarea>
          </div>
  
          <!-- Submit Button -->
          <div class="flex justify-end ">
            <button
              type="submit"
              :disabled="loginload"
              class="bg-blue-500 flex items-center gap-2 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg"
            >
              <span v-if="loginload" class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 animate-spin" fill="currentColor" width="12" height="12">
                  <path d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"></path>
                </svg>
                Adding Service...
              </span>
              <span v-else>Add Service</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { useAuthStore } from '/src/stores/AuthStore.ts'
  import Breadcrumb from '/src/components/Breadcrumb.vue'
  import { useToast } from '/components/ui/toast/use-toast'
  
  const route = useRoute()
  const router = useRouter()
  const AuthStore = useAuthStore()
  const { toast } = useToast()
  
  const loginload = ref(false)
  const transportCreateForm = ref({
    name: '',
    vendor_id: AuthStore?.user.vendor.id,
    code: '',
    short_name: '',
    details: '',
    type: '',
    number_of_seats: '',
    price_per_day: ''
  })
  
  const reset = () => {
    transportCreateForm.value = {
      name: '',
      code: '',
      short_name: '',
      details: '',
      type: '',
      number_of_seats: '',
      price_per_day: ''
    }
  }
  
  const vendorForm = async () => {
    loginload.value = true
    try {
      const data = await api().post('package-transport-vendors', transportCreateForm.value)
      console.log(data)
      toast({ title: 'Application Submitted' })
      reset()
    } catch (error) {
      console.log(error)
    } finally {
      loginload.value = false
    }
  }
  </script>
  
  <style scoped>
  form {
    max-width: 1300px;
    margin: 0 auto;
  }
  </style>
  