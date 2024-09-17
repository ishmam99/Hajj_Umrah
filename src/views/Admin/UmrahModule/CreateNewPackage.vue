<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <p class="text-2xl font-bold py-3 border-b">Create New Package</p>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <form @submit.prevent="EventFormApply">
        <section>
          <!-- Country and City -->
          <div class="flex gap-5 mb-5">
            <div class="w-1/2">
              <div class="label">
                <span class="label-text">Country</span>
              </div>
              <select v-model="formData.country" class="select select-bordered w-full">
                <option disabled selected>Select a Country</option>
                <option v-for="country in countries" :value="country">{{ country.name }}</option>
              </select>
            </div>
            <div class="w-1/2">
              <div class="label">
                <span class="label-text">City</span>
              </div>
              <select v-model="formData.city" class="select select-bordered w-full">
                <option disabled selected>Select a City</option>
                <option v-for="city in formData.country.cities" :value="city">
                  {{ city.name }}
                </option>
              </select>
            </div>
          </div>

          <!-- Package Title and Code -->
          <div class="flex gap-5 mb-5">
            <div class="w-1/2">
              <div class="label">
                <span class="label-text">Package Title</span>
              </div>
              <input
                v-model="formData.packageTitle"
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full"
              />
            </div>
            <div class="w-1/2">
              <div class="label">
                <span class="label-text">Package Year</span>
              </div>
              <input
                v-model="formData.packageYear"
                @change="
                  formData.packageId = `${formData.packageYear}-${formData.country.id}-${formData.city.id}-${formData.packageCode}`
                "
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full"
              />
            </div>
          </div>

          <!-- Package Year and ID -->
          <div class="flex gap-5 mb-5">
            <div class="w-1/2">
              <div class="label">
                <span class="label-text">Package Code</span>
              </div>
              <input
                v-model="formData.packageCode"
                @change="
                  formData.packageId = `${formData.packageYear}-${formData.country.id}-${formData.city.id}-${formData.packageCode}`
                "
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full"
              />
            </div>
            <div class="w-1/2">
              <div class="label">
                <span class="label-text">Package ID</span>
              </div>
              <input
                v-model="formData.packageId"
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full"
              />
            </div>
          </div>

          <!-- Package Status and Price -->
          <div class="flex gap-5 mb-5">
            <div class="w-1/2">
              <div class="label">
                <span class="label-text">Status of Package</span>
              </div>
              <select v-model="formData.status" class="select select-bordered w-full">
                <option disabled selected>Select an option</option>
                <option v-for="status in statuses" :value="status.name">{{ status.name }}</option>
              </select>
            </div>
            <div class="w-1/2">
              <div class="label">
                <span class="label-text">Price</span>
              </div>
              <input
                v-model="formData.price"
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full"
              />
            </div>
            <div class="w-1/2">
              <div class="label">
                <span class="label-text">Pax</span>
              </div>
              <input
                v-model="formData.pax"
                type="number"
                placeholder="Type here"
                class="input input-bordered w-full"
              />
            </div>
          </div>

          <!-- Dates -->
          <div class="flex gap-5 mb-5">
            <div class="w-1/2">
              <div class="label">
                <span class="label-text">Starting Date</span>
              </div>
              <input v-model="formData.startDate" type="date" class="input input-bordered w-full" />
            </div>
            <div class="w-1/2">
              <div class="label">
                <span class="label-text">Ending Date</span>
              </div>
              <input v-model="formData.endDate" type="date" class="input input-bordered w-full" />
            </div>
          </div>

          <!-- Description -->
          <div>
            <div class="label">
              <span class="label-text">Description</span>
            </div>
            <textarea
              v-model="formData.description"
              class="textarea textarea-bordered w-full"
              placeholder="Description"
            ></textarea>
          </div>
          <div class="flex flex-col gap-5 mt-4">
            <div class="label bg-yellow-600 text-white p-2 text-lg rounded-lg">Add Route</div>
            <div class="px-5 bg-slate-50 py-5 w-4/4">
              <p class="text-2xl font-bold py-3 border-b">Create New Package</p>
              <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
                <form @submit.prevent="EventFormApply">
                  <!-- Existing form fields... -->
                  <div class="flex flex-col gap-5 mt-4">
                    <!-- <div class="label bg-yellow-600 text-white p-2 rounded-lg">Add Itinerary</div> -->

                    <!-- Add Air Fare section -->
                    <div class="px-5 bg-slate-50 py-5">
                      <p class="text-2xl font-bold py-3 border-b">1. Select Airline</p>

                      <!-- Add Fare button -->
                      <div class="text-right">
                        <button @click="showFareForm = !showFareForm" class="mt-1">
                          <span v-if="showFareForm" class="bg-red-500 text-white py-1 px-2 rounded mt-1">Hide Fare Form </span>
                          <span v-else class="bg-blue-500 text-white py-1 px-2 rounded mt-1">Add Fare Form </span>
                          <!-- {{ showFareForm ? 'Hide Fare Form' : 'Add Air Fare' }} -->
                        </button>
                      </div>

                      <!-- Fare Form -->
                      <div v-if="showFareForm" class="bg-gray-100 p-5 mt-5 rounded-lg">
                        <!-- Departure fields -->
                        <div class="flex gap-5 mb-5">
                          <div class="w-1/2">
                            <label for="" class="text-slate-600">Airport</label>
                            <input
                              v-model="newFare.departure.from"
                              type="text"
                              placeholder="From"
                              class="input input-bordered w-full my-1"
                            />
                          </div>
                          <div class="w-1/2">
                            <input
                              v-model="newFare.departure.to"
                              type="text"
                              placeholder="Refueling"
                              class="input input-bordered w-full"
                            />
                          </div>
                          <div class="w-1/2">
                            <input
                              v-model="newFare.departure.to"
                              type="text"
                              placeholder="To City"
                              class="input input-bordered w-full"
                            />
                          </div>
                        </div>

                        <div class="flex gap-5 mb-5">
                          <div class="w-1/2">
                            <input
                              v-model="newFare.departure.airline"
                              type="text"
                              placeholder="Airline"
                              class="input input-bordered w-full"
                            />
                          </div>
                          <div class="w-1/2">
                            <input
                              v-model="newFare.departure.fare"
                              type="number"
                              placeholder="Fare"
                              class="input input-bordered w-full"
                            />
                          </div>
                        </div>

                        <!-- Return fields -->
                        <!-- <div class="flex gap-5 mb-5">
                          <div class="w-1/2">
                            <input
                              v-model="newFare.return.from"
                              type="text"
                              placeholder="Return From"
                              class="input input-bordered w-full"
                            />
                          </div>
                          <div class="w-1/2">
                            <input
                              v-model="newFare.return.to"
                              type="text"
                              placeholder="Return To"
                              class="input input-bordered w-full"
                            />
                          </div>
                        </div>

                        <div class="flex gap-5 mb-5">
                          <div class="w-1/2">
                            <input
                              v-model="newFare.return.airline"
                              type="text"
                              placeholder="Return Airline"
                              class="input input-bordered w-full"
                            />
                          </div>
                          <div class="w-1/2">
                            <input
                              v-model="newFare.return.fare"
                              type="number"
                              placeholder="Return Fare"
                              class="input input-bordered w-full"
                            />
                          </div>
                        </div> -->

                        <button @click="addFare" class="btn btn-success text-white btn-sm px-5">
                          Save Fare
                        </button>
                      </div>

                      <!-- Air Fares List -->
                      <div class="mt-5">
                        <p class="font-bold">Air Fares:</p>
                        <div v-if="fares.length === 0" class="text-gray-500">No Data Added</div>

                        <div v-else>
                          <ul>
                            <li v-for="(fare, index) in fares" :key="index" class="py-2 border border-slate rounded my-1 px-1">
                              <div class="text-lg font-semibold flex  justify-between items-center ">
                                <div class="flex items-center gap-1"> 
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M21.949 10.1118C22.1634 10.912 21.6886 11.7345 20.8884 11.9489L5.2218 16.1467C4.77856 16.2655 4.31138 16.0674 4.08866 15.6662L1.46582 10.9415L2.91471 10.5533L5.3825 12.9979L10.4778 11.6326L5.96728 4.55896L7.89913 4.04132L14.8505 10.4609L20.1119 9.05113C20.9121 8.83671 21.7346 9.31159 21.949 10.1118ZM4.00013 19H20.0001V21H4.00013V19Z"></path></svg>
                                  Departure From {{ fare.departure.from}} To {{ fare.departure.to }} By {{ fare.departure.airline }}
                                </div>
                                <div>
                                   $ {{ fare.departure.fare }} 
                                </div>
                              </div> <br> 
                              <div class="text-lg font-semibold flex  justify-between items-center ">
                                <div>
                                  Return From {{ fare.return.from  }} To {{ fare.return.to }} By {{ fare.return.airline }} 
                                </div>
                                <div>
                                   $ {{ fare.return.fare }} 
                                </div>
                              </div>
                              <!-- {{ fare.departure.from }} to {{ fare.departure.to }} by
                              {{ fare.departure.airline }}: ${{ fare.departure.fare }}
                              <br />
                              {{ fare.return.from }} to {{ fare.return.to }} by
                              {{ fare.return.airline }}: ${{ fare.return.fare }} -->
                            </li>
                          </ul>
                          <div class="font-bold mt-3 text-xl flex items-center justify-end">Total: ${{ totalFare }}</div>
                        </div>
                      </div>
                    </div>

                    <!-- Add Transport button -->
                    <button
                      @click="showTransportForm = !showTransportForm"
                      type="button"
                      class="btn btn-sm btn-primary text-white px-5 mt-5"
                    >
                      {{ showTransportForm ? 'Hide Transport Form' : 'Add Transport' }}
                    </button>

                    <!-- Transport Form -->
                    <div v-if="showTransportForm" class="px-5 bg-slate-50 py-5 mt-3">
                      <p class="text-2xl font-bold py-3 border-b">2. Select Transport</p>

                      <!-- Transport Form Fields -->
                      <div class="flex gap-5 mb-5">
                        <div class="w-1/2">
                          <input
                            v-model="newTransport.from"
                            type="text"
                            placeholder="From"
                            class="input input-bordered w-full"
                          />
                        </div>
                        <div class="w-1/2">
                          <input
                            v-model="newTransport.to"
                            type="text"
                            placeholder="To"
                            class="input input-bordered w-full"
                          />
                        </div>
                      </div>

                      <div class="flex gap-5 mb-5">
                        <div class="w-1/2">
                          <input
                            v-model="newTransport.type"
                            type="text"
                            placeholder="Transport"
                            class="input input-bordered w-full"
                          />
                        </div>
                        <div class="w-1/2">
                          <input
                            v-model="newTransport.cost"
                            type="number"
                            placeholder="Cost"
                            class="input input-bordered w-full"
                          />
                        </div>
                      </div>

                      <button @click="addTransport" class="btn btn-success text-white btn-sm px-5">
                        Save Transport
                      </button>

                      <!-- Transport List -->
                      <div class="mt-5">
                        <p class="font-bold">Transports:</p>
                        <div v-if="transports.length === 0" class="text-gray-500">
                          No Data Added
                        </div>

                        <div v-else>
                          <ul>
                            <li v-for="(transport, index) in transports" :key="index" class="py-2 border border-slate rounded my-1 px-1">
                              <div class="text-lg font-semibold flex  justify-between items-center ">
                                <div>
                                  <span class="text-xl font-semibold">{{ index+1 }}.</span> {{ transport.from }}, {{ transport.to }}, {{ transport.type }} Days
                                </div>
                                <div>
                                   $ {{ transport.cost }} 
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div class="font-bold mt-3 text-xl flex items-center justify-end">Total: ${{ totalTransport }}</div>
                        </div>
                      </div>
                    </div>

                    <!-- Add Hotel button -->
                    <button
                      @click="showHotelForm = !showHotelForm"
                      type="button"
                      class="btn btn-sm btn-success text-white px-5 mt-5"
                    >
                      {{ showHotelForm ? 'Hide Hotel Form' : 'Add Hotel' }}
                    </button>

                    <!-- Hotel Form -->
                    <div v-if="showHotelForm" class="px-5 bg-slate-50 py-5 mt-3">
                      <p class="text-2xl font-bold py-3 border-b">3. Select Hotel</p>

                      <!-- Hotel Form Fields -->
                      <div class="flex gap-5 mb-5">
                        <div class="w-1/2">
                          <input
                            v-model="newHotel.city"
                            type="text"
                            placeholder="City Name"
                            class="input input-bordered w-full"
                          />
                        </div>
                        <div class="w-1/2">
                          <input
                            v-model="newHotel.name"
                            type="text"
                            placeholder="Hotel name"
                            class="input input-bordered w-full"
                          />
                        </div>
                      </div>
                      <div class="flex gap-5 mb-5">
                        <div class="w-1/2">
                          <input
                            v-model="newHotel.days"
                            type="text"
                            placeholder="Days"
                            class="input input-bordered w-full"
                          />
                        </div>
                        <div class="w-1/2">
                          <input
                            v-model="newHotel.cost"
                            type="number"
                            placeholder="Cost"
                            class="input input-bordered w-full"
                          />
                        </div>
                      </div>

                      <button @click="addHotel" class="btn btn-success text-white btn-sm px-5">
                        Save Hotel
                      </button>

                      <!-- Hotel List -->
                      <div class="mt-5">
                        <p class="font-bold">Hotels:</p>
                        <div v-if="hotels.length === 0" class="text-gray-500">No Data Added</div>

                        <div v-else>
                          <ul>
                            <li v-for="(hotel, index) in hotels" :key="index" class="py-2 border border-slate rounded my-1 px-1">
                              <div class="text-lg font-semibold flex  justify-between items-center ">
                                <div>
                                  <span class="text-xl font-semibold">{{ index+1 }}.</span> {{ hotel.name }}, {{ hotel.city }}, {{ hotel.days }}
                                </div>
                                <div>
                                   $ {{ hotel.cost }} 
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div class="font-bold mt-3 text-xl flex items-center justify-end">Total: ${{ totalHotel }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Submit and Cancel Buttons -->
                  <div class="flex justify-center gap-5 my-5">
                    <div class="font-bold mt-5 text-2xl flex justify-end">
                      Total Travel Cost: ${{ totalTravelCost }}
                    </div>
                    <!-- <button type="submit" class="btn btn-success btn-sm px-5">Create</button>
                    <button type="button" class="btn btn-error btn-sm px-5">Cancel</button> -->
                  </div>
                </form>
              </div>
            </div>
            <!-- <button @click="addNewStep" type="button" class="btn btn-sm btn-success text-white px-5">Add New Steps</button> -->
          </div>
          <!-- Buttons -->
          <div class="flex justify-center gap-5 my-5">
            <button type="submit" class="btn btn-success btn-sm px-5">Create</button>
            <button type="button" class="btn btn-error btn-sm px-5">Cancel</button>
          </div>
        </section>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useSocialStore } from '@/stores/SocialDashboard.ts'
import { types, transportation_types, vendors, countries, statuses } from '@/stores/itinenary.ts'
import { useFareStore } from '@/stores/fareStore.ts'

const store = useSocialStore()

const showFareForm = ref(false)
const showTransportForm = ref(false)
const showHotelForm = ref(false)

const fares = ref([])
const newFare = ref({
  departure: { from: '', to: '', airline: '', fare: null },
  return: { from: '', to: '', airline: '', fare: null }
})

const addFare = () => {
  fares.value.push({ ...newFare.value })
  newFare.value = {
    departure: { from: '', to: '', airline: '', fare: null },
    return: { from: '', to: '', airline: '', fare: null }
  }
  showFareForm.value = false
}

const totalFare = computed(() => {
  return fares.value.reduce((sum, fare) => {
    return sum + (Number(fare.departure.fare) || 0) + (Number(fare.return.fare) || 0)
  }, 0)
})

const transports = ref([])
const newTransport = ref({ from: '', to: '', type: '', cost: null })

const addTransport = () => {
  transports.value.push({ ...newTransport.value })
  newTransport.value = { from: '', to: '', type: '', cost: null }
  // Don't close the form here
}

const totalTransport = computed(() => {
  return transports.value.reduce((sum, transport) => {
    return sum + (Number(transport.cost) || 0)
  }, 0)
})

const hotels = ref([])
const newHotel = ref({ name: '', cost: null, city: '', days: '' })

const addHotel = () => {
  hotels.value.push({ ...newHotel.value })
  newHotel.value = { name: '', cost: null }
  // Don't close the form here
}

const totalHotel = computed(() => {
  return hotels.value.reduce((sum, hotel) => {
    return sum + (Number(hotel.cost) || 0)
  }, 0)
})

const totalTravelCost = computed(() => {
  return totalFare.value + totalTransport.value + totalHotel.value
})

const formData = ref({
  country: '',
  city: '',
  packageTitle: '',
  packageCode: '',
  packageYear: '',
  packageId: '',
  status: '',
  price: '',
  startDate: '',
  endDate: '',
  pax: '',
  description: '',
  steps: [
    {
      title: '',
      description: ''
    }
  ]
})
const step = ref({
  type: '',
  vendor: '',
  from_country: '',
  from_city: '',
  to_country: '',
  to_city: ''
})

const addNewStep = () => {
  formData.value.steps.push(step.value)
  step.value = {
    type: '',
    vendor: '',
    from_country: '',
    from_city: '',
    to_country: '',
    to_city: ''
  }
}
const setCountryAndCity = () => {
  console.log(step.value.type.id)
  if (step.value.type.id === 3) {
    step.value.from_country = formData.value.steps[steps.value.length - 1].to_country
    step.value.to_country = formData.value.steps[steps.value.length - 1].to_country
  }
}
const removeStep = (index) => {
  formData.value.steps.splice(index, 1)
}

if (!store.createNewPackage) {
  store.createNewPackage = []
}

const EventFormApply = () => {
  store.createNewPackage.push({ ...formData.value })
  console.log('Form Data Submitted:', formData.value)

  formData.value = {
    country: '',
    city: '',
    packageTitle: '',
    packageCode: '',
    packageYear: '',
    packageId: '',
    status: '',
    price: '',
    startDate: '',
    endDate: '',
    description: ''
  }
}
</script>
