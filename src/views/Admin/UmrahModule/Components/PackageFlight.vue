<template>
      <div
       
        class="bg-white border-x-2 border-teal-700 border-b-2 px-2"
      >
 
        <h1 class="text-2xl py-3 font-semibold flex w-full items-center justify-center">
          Approve Package Flights 
        </h1>
        <div class="flex justify-end gap-2 items-center py-3 px-5">
          <button @click="showAirForm = !showAirForm" class="btn btn-success text-white">
            Add New Flight Details
          </button>
          <button v-if="showAirForm" @click="showAirForm = !showAirForm" class="btn bg-red-500 hover:bg-red-600 text-white">
            Cancel
          </button>
        </div>
        <div>

          <div class="px-10" v-if="showAirForm">
        <form class="space-y-4" @submit.prevent="saveFlightData()">
        <div class="flex w-full gap-4">
      <!-- Airline Selection -->
        <div class="flex flex-col items-center space-y-2 justify-start w-1/2">
        <label for="airline" class="w-full">Airline : </label>
        <select
          id="airline"
          v-model="selectedAirline"
          class="select select-bordered w-full"
        >
          <option disabled selected>Select Airline</option>
          <option v-for="airline in airlines" :key="airline.id" :value="airline">
            {{ airline.name}}
          </option>
        </select>
      </div>

      <!-- Origin City Selection -->
      <div class="flex flex-col items-center space-y-2 justify-start w-1/2">
        <label for="origin_city text-start font-semibold" class="w-full">Origin Country :</label>
        <select
          id="origin_country"
          v-model="selectedOriginCountry"
          class="select select-bordered w-full"
        >
          <option disabled selected>Select Origin Country</option>
          <option
            v-for="country in countries"
            :key="country.id"
            :value="country"
          >
            {{ country.name }}
          </option>
        </select>
      </div>
       <div class="flex flex-col items-center space-y-2 justify-start w-1/2">
        <label for="origin_city" class="w-full">Origin City:</label>
        <select
          id="origin_city"
          v-model="selectedOriginCity"
          class="select select-bordered w-full"
        >
          <option disabled selected>Select Origin City</option>
          <option
           v-if="selectedOriginCountry"
            v-for="city in selectedOriginCountry.cities"
            :key="city.id"
            :value="city"
          >
            {{ city.name }}
          </option>
        </select>
      </div>
      <div class="flex flex-col items-center space-y-2 justify-start w-1/2">
        <label for="origin_city" class="w-full">Origin Airport:</label>
        <select
          id="origin_city"
          v-model="selectedOriginAirport"
          class="select select-bordered w-full"
        >
          <option disabled selected>Select Origin Airport</option>
          <option
           v-if="selectedOriginCity"
            v-for="airport in selectedOriginCity.airports"
            :key="airport.id"
            :value="airport"
          >
            {{ airport.name }}
          </option>
        </select>
      </div>
    </div>
   

    <div class="flex w-full gap-4">
      <div class="flex flex-col items-center space-y-2 justify-start w-1/2">
        <label for="origin_city text-start font-semibold" class="w-full">Destination Country :</label>
        <select
          id="destination_country"
          v-model="selectedDestinationCountry"
          class="select select-bordered w-full"
        >
          <option disabled selected>Select Destination Country</option>
          <option
            v-for="country in countries"
            :key="country.id"
            :value="country"
          >
            {{ country.name }}
          </option>
        </select>
      </div>
       <div class="flex flex-col items-center space-y-2 justify-start w-1/2">
        <label for="origin_city" class="w-full">Destination City:</label>
        <select
          id="origin_city"
          v-model="selectedDestinationCity"
          class="select select-bordered w-full"
        >
          <option disabled selected>Select Destination City</option>
          <option
           v-if="selectedDestinationCountry"
            v-for="city in selectedDestinationCountry.cities"
            :key="city.id"
            :value="city"
          >
            {{ city.name }}
          </option>
        </select>
      </div>
   <div class="flex flex-col items-center space-y-2 justify-start w-1/2">
        <label for="origin_city" class="w-full">Destination Airport:</label>
        <select
          id="destination_airport"
          v-model="selectedDestinationAirport"
          class="select select-bordered w-full"
        >
          <option disabled selected>Select Destination Airport</option>
          <option
           v-if="selectedDestinationCity"
            v-for="airport in selectedDestinationCity.airports"
            :key="airport.id"
            :value="airport"
          >
            {{ airport.name }}
          </option>
        </select>
      </div>

      <!-- Departure Date -->
       <div class="flex flex-col items-center space-y-2 justify-start w-1/2">
        <label for="departure_date" class="w-full">Date:</label>
        <input
          type="date"
          v-model="departureDate"
          id="departure_date"
          class="border border-slate-300 w-full p-2 rounded-lg"
        />
      </div>
    </div>

    <!-- Save Button -->
    <div class="flex justify-center items-center mt-4">
      <button type="button" @click="getFlightRoutes()" class="btn btn-success text-white">Get Flight</button>
    </div>
    <div v-if="showAvailableList"> 
      <h1 class="text-center text-2xl border-b-2 border-gray-400" v-if="filteredRoutes.length ==0">No Available Flights Found</h1>
    <div class="w-full bg-gray-100 p-2 rounded-md shadow-md" v-else>
      <h1 class="text-center text-2xl border-b-2 border-gray-400">Available Flights List</h1>
       <div class="flex justify-between items-center px-2 py-3" >
         <h1 class="font-semibold text-md">Flight Number</h1>
         <h1 class="font-semibold text-md">Airline</h1>
         <h1 class="font-semibold text-md">Departure From</h1>
         <h1 class="font-semibold text-md ">  </h1>
         <h1 class="font-semibold text-md">Arrival To</h1>
         <h1 class="font-semibold text-md">Departure Date</h1>
         
         <h1 class="font-semibold text-md">Arrival Date</h1>
         <h1 class="font-semibold text-md">Save Flight</h1>
        
      </div>
      <div v-for="flight in filteredRoutes" :key="flight.id">
        <div class="flex justify-between items-center px-2 rounded-lg bg-white">
          <h1 class="font-semibold text-lg">{{ flight.flight_number }}</h1>
         
          <h1 class="font-semibold text-lg">{{ flight.airline.name }}</h1>
            <div
                      class="flex gap-1  px-4 py-2 w-[300px] justify-between items-center"
                    >
                      <div class="flex flex-col items-center justify-center">
                        <h1 class="font-semibold text-lg">
                          {{flight.origin_airport.short_name}}
                        </h1>
                        <h1 class="font-semibold text-xl">{{ flight.arrival_time }}</h1>
                       
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="28"
                        height="28"
                        fill="currentColor"
                      >
                        <path
                          d="M21.949 10.1118C22.1634 10.912 21.6886 11.7345 20.8884 11.9489L5.2218 16.1467C4.77856 16.2655 4.31138 16.0674 4.08866 15.6662L1.46582 10.9415L2.91471 10.5533L5.3825 12.9979L10.4778 11.6326L5.96728 4.55896L7.89913 4.04132L14.8505 10.4609L20.1119 9.05113C20.9121 8.83671 21.7346 9.31159 21.949 10.1118ZM4.00013 19H20.0001V21H4.00013V19Z"
                        ></path>
                      </svg>
                     
                      <div class="flex flex-col items-center justify-center">
                        <h1 class="font-semibold text-lg">
                          {{flight.destination_airport.short_name }} 
                        </h1>
                        <h1 class="font-semibold text-xl">{{ flight.departure_time }}</h1>
                      
                      </div>
                    </div>
        
       
            <p class="font-bold text-sm">{{  flight.arrival_date}}</p>
            <p class="font-bold text-sm">{{  flight.departure_date }}</p>
                     <button type="submit" @click="selectedFlight = flight.id" class="btn btn-success text-white" :disabled="savingFlight">
                      
                      <svg v-if="savingFlight" class="animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"></path></svg>
                      Save Flight</button>
          
        </div>
      </div>
    </div>
    </div>
  </form>
</div>

          
        </div>
        <div class="px-10">
          <div class="overflow-x-auto py-5">
            <table class="table w-full bg-gray-200">
              <thead>
                <tr>
                  <th>Flight Number</th>
                  <th>Departure</th>
                
                  <th>Destination</th>
                  <th>Departure Date</th>
                  <th>Departure Time</th>
                  <th>Arrival Date</th>
                  <th>Arrival Time</th>
                  <!-- <th>Status</th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="flight in package_flights" :key="flight.id">
                  <td>
                    {{ flight.airroute.flight_number ? flight.airroute.flight_number : 'F1G56' }}
                  </td>
                  <td>{{ flight.airroute.origin_airport.short_name }}</td>
                  <td>{{ flight.airroute.destination_airport.short_name }}</td>
                

                  <td>{{ flight.airroute.departure_date }}</td>
                  <td>{{ flight.airroute.departure_time }}</td>
                  <td>{{ flight.airroute.arrival_date}}</td>
                  <td>{{ flight.airroute.arrival_time}}</td>
                  <!-- <td>{{ flight.status == 1 ? 'Confirmed' : 'Pending' }}</td> -->
                </tr>
              </tbody>
            </table>
          </div>

          <div class="border-t-2 border-teal-600 p-5">
            <div
              class="flex justify-start gap-5 items-center w-full py-2 px-5"
              v-if="packageDetails"
            >
              <h1 class="w-full px-5">Flight Approval Status :</h1>

              <select
                v-model="packageDetails.package_status.flight_approve"
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
            
          </div>
        </div>
      </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from 'vue';
import Swal from 'sweetalert2';

// import moment from 'moment';
const applying = ref(false)

const showAirForm = ref(false);
const props = defineProps({
  packageDetails: Object,
  countries: Array,
  package_flights: Array
});
const emit = defineEmits('getPackage')
const showAvailableList = ref(false)
const countries = props.countries
const packageDetails = props.packageDetails
const package_flights = props.package_flights
const savingFlight = ref(false)
const selectedFlight = ref()
const selectedAirline = ref()
const departureDate = ref()
const selectedOriginAirport = ref()
const selectedDestinationAirport = ref()
const selectedOriginCountry = ref()
const selectedOriginCity = ref()
const selectedDestinationCountry = ref()
const selectedDestinationCity = ref()
const airLinerRoutes = ref([])
const airlines = ref([])
const filteredRoutes = ref([])
const getAirlines = async () => {
  const { data } = await api().get('airline')
  airlines.value = data.data
}
const getAirlineRoutes = async () => {
  const { data } = await api().get('airroute')
  airLinerRoutes.value = data.data
}
const saveFlightData = async () => {
  savingFlight.value = true
  try {
    await api().post('package-flights', {
      package_id: packageDetails.value.id,
      airroute_id:selectedFlight.value
    });
   emit('getPackage') 
  if (data) {
      Swal.fire({
        icon: "success",
        title: "Flight Data Saved",
        text: "Flight Data Added to Package Successfully",
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Saving Flight Data Failed",
      text: "Something went wrong, Please Contact Support",
    });
  }
  
   savingFlight.value = false
};

const getFlightRoutes = () => {
 
  filteredRoutes.value = airLinerRoutes.value.filter(e =>
    e.airline.id == selectedAirline.value.id &&
    e.origin_airport.id == selectedOriginAirport.value.id &&
    e.destination_airport.id == selectedDestinationAirport.value.id &&
    e.departure_date == departureDate.value &&
   !package_flights.find(d=> d.airroute.id == e.id)
  )
  if (filteredRoutes.value.length > 0) {
    showAvailableList.value = true
  } else {
    showAvailableList.value = true
  }
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
      getPackage()
    }
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
 
  getAirlines()
 
  getAirlineRoutes()
})
</script>

<style lang="scss" scoped>

</style>