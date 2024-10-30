<template>
  <section class="w-4/5 p-10 bg-gray-100">
    <Breadcrumb />
    <p class="text-3xl font-bold pb-2 mb-6 text-center border-b-2 font-mono text-blue-600">
      Add Hotel Service
    </p>
    <div class="px-12">
      <form @submit.prevent="vendorHotelForm" class="bg-white shadow-md rounded-lg p-6 space-y-4">
        
        <!-- Toggle Hotel Name Input/Select -->
        <div class="flex gap-4 items-center mb-4">
          <label class="block text-lg font-semibold text-gray-700">Choose Hotel Input Method:</label>
          <button
            @click.prevent="useHotelInput = !useHotelInput"
            class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
          >
            {{ useHotelInput ? 'Switch to Select Hotel' : 'Switch to Enter Hotel Name' }}
          </button>
        </div>

        <!-- Hotel Name Field based on toggle -->
        <div class="flex gap-4">
          <div class="w-1/2" v-if="useHotelInput">
            <label for="serviceName" class="block text-lg font-semibold text-gray-700">Hotel Name</label>
            <input
              v-model="hotelCreateForm.name"
              type="text"
              id="serviceName"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300"
              placeholder="Enter hotel name"
            />
          </div>
          <div class="w-1/2" v-else>
            <label class="block text-lg font-semibold text-gray-700">Select Hotel</label>
            <select
              v-model="hotelCreateForm.name"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300"
            >
              <option value="" disabled>Select Hotel</option>
              <option v-for="hotel in hotels" :key="hotel.id" :value="hotel.name">
                {{ hotel.name }}
              </option>
            </select>
          </div>
          <div class="w-1/2">
            <label for="code" class="block text-lg font-semibold text-gray-700">Code</label>
            <input
              v-model="hotelCreateForm.code"
              type="text"
              id="code"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300"
              placeholder="Enter code"
            />
          </div>
        </div>


                  <!-- Short Name -->
                  <div>
                    <label for="shortName" class="block text-lg font-semibold text-gray-700">Short Name</label>
                    <input
                      v-model="hotelCreateForm.short_name"
                      type="text"
                      id="shortName"
                      class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300"
                      placeholder="Enter short name"
                    />
                  </div>
          
                  <!-- Country and City Selection -->
                  <div class="flex gap-4">
                    <div class="w-1/2">
                      <label class="block text-lg font-semibold text-gray-700">Select Country</label>
                      <select
                        v-model="hotelCreateForm.country_id"
                        @change="filterCitiesByCountry"
                        class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300"
                      >
                        <option value="" disabled>Select Country</option>
                        <option v-for="country in countries" :key="country.id" :value="country.id">
                          {{ country.name }}
                        </option>
                      </select>
                    </div>
                    <div class="w-1/2">
                      <label class="block text-lg font-semibold text-gray-700">Select City</label>
                      <select
                        v-model="hotelCreateForm.city_id"
                        :disabled="!filteredCities.length"
                        class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300"
                      >
                        <option value="" disabled>Select City</option>
                        <option v-for="city in filteredCities" :key="city.id" :value="city.id">
                          {{ city.name }}
                        </option>
                      </select>
                    </div>
                  </div>
          
                  <!-- Amenities -->
                  <div>
                    <label for="amenities" class="block text-lg font-semibold text-gray-700">Amenities</label>
                    <textarea
                      v-model="hotelCreateForm.details"
                      id="amenities"
                      class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300"
                      rows="4"
                      placeholder="List amenities (e.g., WiFi, Breakfast, etc.)"
                    ></textarea>
                  </div>
          
                  <!-- Submit Button -->
                  <div class="flex justify-end">
                    <button
                      type="submit"
                      :disabled="loginload"
                      class="bg-blue-500 flex items-center gap-2 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg"
                    >
                      <span v-if="loginload" class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 animate-spin" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.364 5.636L16.95 7.05A7 7 0 0 0 12 5C8.134 5 5 8.134 5 12s3.134 7 7 7 7-3.134 7-7h2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c2.485 0 4.735 1.007 6.364 2.636z"></path>
                        </svg>
                        Loading...
                      </span>
                      <span v-else>Add Hotel</span>
                    </button>
                  </div>

      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '/src/stores/AuthStore.ts'
import Breadcrumb from '/src/components/Breadcrumb.vue'
import { useToast } from '/components/ui/toast/use-toast'

const AuthStore = useAuthStore()
const { toast } = useToast()
const loading = ref(false)
const loginload = ref(false)
const countries = ref([])
const hotels = ref([])
const filteredCities = ref([])
const useHotelInput = ref(true) // Toggle between input and select for hotel name

const fetchCountries = async () => {
  loading.value = true
  try {
    const { data } = await api().get('country')
    countries.value = data.data
    const saudiArabia = countries.value.find(country => country.name === 'Saudi Arabia')
    if (saudiArabia) hotelCreateForm.value.country_id = saudiArabia.id
  } catch (err) {
    console.error(err)
    toast({ title: 'Error', description: 'Failed to load Countries', variant: 'destructive' })
  } finally {
    loading.value = false
  }
}

const fetchHotels = async () => {
  loading.value = true
  try {
    const { data } = await api().get('hotels')
    hotels.value = data.data
  } catch (err) {
    console.error(err)
    toast({ title: 'Error', description: 'Failed to load Hotels', variant: 'destructive' })
  } finally {
    loading.value = false
  }
}

const hotelCreateForm = ref({
  name: '',
  vendor_id: AuthStore?.user.vendor.id,
  code: '',
  short_name: '',
  details: '',
  country_id: '',
  city_id: '',
})

const reset = () => {
  hotelCreateForm.value = {
    name: '',
    vendor_id: '',
    code: '',
    short_name: '',
    details: '',
    country_id: '',
    city_id: '',
  }
}

const vendorHotelForm = async () => {
  loginload.value = true
  try {
    const data = await api().post('package-hotel-vendors', hotelCreateForm.value)
    toast({ title: 'Hotel Created', description: 'Hotel created successfully', variant: 'default' })
    reset()
  } catch (error) {
    console.log(error)
  } finally {
    loginload.value = false
  }
}

const filterCitiesByCountry = () => {
  const selectedCountry = countries.value.find(country => country.id === hotelCreateForm.value.country_id)
  filteredCities.value = selectedCountry ? selectedCountry.cities : []
  hotelCreateForm.value.city_id = '' // Reset city selection
}

onMounted(() => {
  fetchHotels()
  fetchCountries()
})
</script>

<style scoped>
form {
  max-width: 1300px;
  margin: 0 auto;
}
</style>
