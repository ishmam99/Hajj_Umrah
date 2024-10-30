<template>
    <div class="bg-white border-x-2 border-teal-700 border-b-2">
        <h1 class="text-2xl py-3 font-semibold flex w-full items-center justify-center">
          Approve Package Hotels
        </h1>
        <div class="flex justify-end items-center py-3 px-5">
          <button @click="showHotelForm = !showHotelForm" class="btn btn-success text-white">
            Add New Hotel Details
          </button>
          <button v-if="showHotelForm" @click="showHotelForm = !showHotelForm" class="btn bg-red-500 hover:bg-red-600 text-white">
        Cancel
      </button>
        </div>
        <div class="px-10 py-5">
          <form @submit.prevent="addHotelData" v-if="showHotelForm" class="px-2 py-3 bg-gray-200 rounded-md">
            <div class="flex flex-col gap-4">
              <div class="flex gap-4 w-full">
                <div class="flex flex-col w-full">
                  <label for="hotel_id" class="font-medium text-gray-700">Select Hotel</label>
                  <select id="hotel_id" name="hotel_id" v-model="hotelData.hotel_id"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 p-3 focus:ring-opacity-50"
                    required>
                    <option v-for="hotel in hotels" :key="hotel.id" :value="hotel.id">
                      {{ hotel.name }}
                    </option>
                  </select>
                </div>
                <div class="flex flex-col w-full">
                  <label for="checkin_date" class="font-medium text-gray-700">Check-in Date</label>
                  <input type="date" id="checkin_date" name="checkin_date" v-model="hotelData.checkin_date"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 p-3 focus:ring-opacity-50"
                    required />
                </div>
                <div class="flex flex-col w-full">
                  <label for="checkout_date" class="font-medium text-gray-700">Check-out Date</label>
                  <input type="date" id="checkout_date" name="checkout_date" v-model="hotelData.checkout_date"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 p-3 focus:ring-opacity-50"
                    required />
                </div>
              </div>
              <div class="flex gap-4 mt-4 w-full">
                <div class="flex flex-col w-full">
                  <label for="two_bed" class="font-medium text-gray-700">Number of Double Bed Room
                  </label>
                  <input type="number" id="two_bed" name="two_bed" v-model="hotelData.two_bed"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 p-3 focus:ring-opacity-50"
                    required />
                </div>
                <div class="flex flex-col w-full">
                  <label for="three_bed" class="font-medium text-gray-700">Number of Triple Bed Room</label>
                  <input type="number" id="three_bed" name="three_bed" v-model="hotelData.three_bed"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required />
                </div>
                <div class="flex flex-col w-full">
                  <label for="four_bed" class="font-medium text-gray-700">Number of Quad Bed Room</label>
                  <input type="number" id="four_bed" name="four_bed" v-model="hotelData.four_bed"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required />
                </div>
              </div>
            </div>
            <div class="mt-4">
              <button type="submit"
                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Add Hotel Data
              </button>
            </div>
          </form>
        </div>
        <div class="px-10">
          <div class="overflow-x-auto py-5">
            <table class="table w-full bg-gray-200">
              <thead>
                <tr>
                  <th>Hotel Name</th>
                  <th>Location</th>
                  <th>Check-in Date</th>
                  <th>Check-out Date</th>
                  <th>Double</th>
                  <th>Triple</th>
                  <th>Quad</th>

                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="hotel in package_hotels" :key="hotel.id">
                  <!-- {{ hotel }} -->
                  <td>{{ hotel.hotel.name }}</td>
                  <td>{{ hotel.hotel.city.name }}</td>
                  <td>{{ hotel.checkin_date }}</td>
                  <td>{{ hotel.checkout_date }}</td>
                  <td>{{ hotel.two_bed }}</td>
                  <td>{{ hotel.three_bed }}</td>
                  <td>{{ hotel.four_bed }}</td>
                  <td>{{ hotel.status == 1 ? 'Confirmed' : 'Pending' }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="border-t-2 border-teal-600 p-5">
            <div class="flex justify-start gap-5 items-center w-full py-2 px-5" v-if="packageDetails">
              <h1 class="w-full px-5">Hotel Approval Status :</h1>

              <select v-model="packageDetails.package_status.hotel_approve" class="select select-bordered w-1/2">
                <option disabled selected>Select Status</option>
                <option value="0">1. In Preparation</option>
                <option value="1">1a. In Preparation -Started</option>
                <option value="1">1b. In Preparation -In Work</option>
                <option value="1">1c. In Preparation -Completed</option>
                <option value="1">2. Quotation</option>
                <option value="1">2a. Quotation -Requested</option>
                <option value="1">2b. Quotation -Received</option>
                <option value="1">2c. Quotation -Approved</option>
                <option value="1">3. Contract </option>
                <option value="1">3a. Contract -Requested</option>
                <option value="1">3b. Contract -Received</option>
                <option value="1">3c. Contract -Signed</option>
                <option value="1">3d. Contract -Fund Deposited</option>
              </select>
              <button @click="updatePackageStatus" class="btn btn-info text-white" :disabled="applying">
                <svg xmlns="http://www.w3.org/2000/svg" v-if="applying" class="animate-spin" viewBox="0 0 24 24"
                  width="18" height="18" fill="currentColor">
                  <path
                    d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z">
                  </path>
                </svg>
                Apply
              </button>
            </div>
            <!-- <div
              class="flex justify-start gap-5 items-center w-full py-2 px-5"
              v-if="packageDetails"
            >
              <div class="justify-between items-center w-full flex">
                <label class="label px-5 w-full"> Note : </label>
                <input
                  v-model="packageDetails.package_status.hotel_note"
                  type="text"
                  placeholder="Add a note"
                  class="input input-bordered w-full input-sm"
                />
              </div>
            </div> -->
          </div>
        </div>
      </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  packageDetails: Object,
  package_hotels: Array
});

const emit = defineEmits('getPackage')

const hotels = ref([])

const packageDetails = ref()
const applying = ref(false)

const getHotels = async () => {
  const { data } = await api().get('hotels')
  hotels.value = data.data
}


const showHotelForm = ref(false)
const package_hotels = ref([])

const hotelData = ref({
  checkin_date: null,
  checkout_date: null,
  hotel_id: null,
  package_id: null,
  two_bed: null,
  three_bed: null,
  four_bed: null
})


const addHotelData = async () => {
  hotelData.value.package_id = packageDetails.value.id
  console.log(hotelData.value)
  const data = await api().post('package-hotels', hotelData.value)
  emit('getPackage')
}

const getPackage = async () => {

const { data } = await api().get('package/' + packageID)
packageDetails.value = data.data
// package_flights.value = data.package_flights
package_hotels.value = data.package_hotels
// package_transportations.value = data.package_transportations
// updating.value = false
applying.value = false
}

const updatePackageStatus = async () => {
  try {
    applying.value = true
    packageDetails.value.package_status._method = 'PUT'
    const data = await api().post(
      'package-status-update/' + packageDetails.value.package_status.id,
      packageDetails.value.package_status
    )
    if (data) {
      emit('getPackage')
    }
  } catch (error) {
    console.log(error)
  }
}



onMounted(() => {
    getHotels()
})
</script>

<style lang="scss" scoped></style>