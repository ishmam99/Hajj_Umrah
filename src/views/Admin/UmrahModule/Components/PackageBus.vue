<template>
    <div class="bg-white border-x-2 border-teal-700 border-b-2">
        <h1 class="text-2xl py-3 font-semibold flex w-full items-center justify-center">
          Approve Package Buses
        </h1>
        <div class="flex justify-end items-center py-3 px-5">
          <button @click="showBusForm = !showBusForm" class="btn btn-success text-white">
            Add New Bus Details
          </button>
          <button v-if="showBusForm" @click="showBusForm = !showBusForm" class="btn bg-red-500 hover:bg-red-600 text-white">
        Cancel
      </button>
        </div>
        <div>
          <div class="px-10" v-if="showBusForm">
            <form class="space-y-4" @submit.prevent="saveBus">
              <div class="flex items-center justify-between">
                <label for="busOperator" class="w-1/3">Bus Provider:</label>
                <select
                  id="busOperator"
                  v-model="busData.busOperator"
                  class="select select-bordered w-2/3"
                >
                  <option disabled selected>Select Bus Operator</option>
                  <option v-for="operator in buses" :key="operator.id" :value="operator">
                    {{ operator.name }}
                  </option>
                </select>
              </div>
              <div class="flex items-center justify-between">
                <label for="busRoute" class="w-1/3">Bus Route:</label>
                <select
                  id="busRoute"
                  v-model="busData.busRoute"
                  class="select select-bordered w-2/3"
                >
                  <option disabled selected>Select Bus Route</option>
                  <option
                    v-if="busData.busOperator"
                    v-for="route in busData.busOperator.routes"
                    :key="route.id"
                    :value="route.id"
                  >
                    {{ route.bus_number }} : {{ route.departure_from }} To {{ route.departure_to }}
                  </option>
                </select>
              </div>
              <div class="flex justify-center items-center mt-4">
                <button type="submit" class="btn btn-success text-white">Save Bus</button>
              </div>
            </form>
          </div>
        </div>
        <div class="px-10" v-if="package_transportations.length > 0">
          <div class="overflow-x-auto py-5">
            <table class="table w-full bg-gray-200">
              <thead>
                <tr>
                  <th>Transport Provider</th>
                  <th>Bus Number</th>
                  <th>Departure</th>
                  <th>Departure Timing</th>
                  <th>Destination</th>
                  <th>Arrival Timing</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="bus in package_transportations" :key="bus.id">
                  <td>{{ bus.bus_route.package_transport_vendor.name }}</td>
                  <td>{{ bus.bus_route.bus_number }}</td>
                  <td>{{ bus.bus_route.departure_from }}</td>
                  <td>{{ bus.bus_route.departure_time }}</td>
                  <td>{{ bus.bus_route.departure_to }}</td>
                  <td>{{ bus.bus_route.arrival_time }}</td>
                  <td>{{ bus.status == 1 ? 'Confirmed' : 'Pending' }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="border-t-2 border-teal-600 p-5">
            <div
              class="flex justify-start gap-5 items-center w-full py-2 px-5"
              v-if="packageDetails"
            >
              <h1 class="w-full px-5">Bus Approval Status :</h1>

              <select
                v-model="packageDetails.package_status.bus_approve"
                class="select select-bordered w-1/2" 
              >
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
              <button
                @click="updatePackageStatus"
                class="btn btn-info text-white"
                :disabled="applying"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  v-if="applying"
                  class="animate-spin"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path
                    d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"
                  ></path>
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
                  v-model="packageDetails.package_status.bus_note"
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
import { onMounted, ref,defineEmits } from 'vue';

const props = defineProps({
  packageDetails: Object,
  package_transportations: Array
});

const emit = defineEmits(['getPackage'])

const buses = ref([])
const countries = ref([])

const packageDetails = ref(props.packageDetails)
const applying = ref(false)

const showBusForm = ref(false)

const package_transportations = ref(props.package_transportations)

const busData = ref({
  busOperator: null,
  busRoute: null,
  package_id: null
})

const getCountries = async () => {
  const { data } = await api().get('country')
  countries.value = data.data.reverse()
}

const saveBus = async () => {
  const data = await api().post('package-transports', {
    package_id: packageDetails.value.id,
    bus_route_id: busData.value.busRoute
  })
  emit('getPackage')
}


const getPackage = async () => {

showBusForm.value = false
// showHotelForm.value = false
const { data } = await api().get('package/' + packageID)
packageDetails.value = data.data
// package_flights.value = data.package_flights
// package_hotels.value = data.package_hotels
package_transportations.value = data.package_transportations
updating.value = false
applying.value = false
}





const getBusRoutes = async () => {
  const { data } = await api().get('package-transport-vendors')
  buses.value = data.data
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
  getBusRoutes()
  getCountries()
})

</script>

<style lang="scss" scoped></style>