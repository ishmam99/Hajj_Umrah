<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <div class="text-center pb-6 border-b-4 border-gray-300 mb-12">
        <p class="text-5xl font-bold text-[#286d71] tracking-tight">Create New Umrah Package</p>
        <p class="text-xl text-gray-600 mt-3">Add all package details and itinerary details </p>
      </div>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <form @submit.prevent="EventFormApply">
        <section>
          <!-- Country and City -->
          <div class="flex gap-5 mb-5">
            <div class="w-1/3">
              <div class="label">
                <span class="label-text">Country</span>
              </div>
              <select v-model="formData.country" class="select select-bordered w-full">
                <option disabled selected>Select a Country</option>
                <option v-for="country in countries" :value="country">{{ country.name }}</option>
              </select>
            </div>
            <div class="w-1/3">
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
            <div class="w-1/3">
              <div class="label">
                <span class="label-text">Airport</span>
              </div>
              <select v-model="formData.airport" class="select select-bordered w-full">
                <option disabled selected>Select an Airport</option>
                <option v-for="airport in airports" :value="airport">
                  {{ airport.name }} ({{ airport.short_name }})
                </option>
              </select>
            </div>
          </div>
           <div class="flex gap-5 mb-5">
            <div class="w-1/3">
              <div class="label">
                <span class="label-text">Agent Name</span>
              </div>
              <select v-model="formData.agent" class="select select-bordered w-full">
                <option disabled selected>Select  Agent Name</option>
                <option >MD Khalid</option>
                <option >Abrar Khan</option>
                <option >Shahid Alam</option>
              </select>
            </div>
            <div class="w-1/3">
              <div class="label">
                <span class="label-text">Imam Name</span>
              </div>
              <select v-model="formData.imam" class="select select-bordered w-full">
                <option disabled selected>Select  Imam Name</option>
                <option >Shayekh Mostafa</option>
                <option >Habib Ahsan</option>
                <option >Mirza Kaif</option>
                
              </select>
            </div>
            <div class="w-1/3">
              <div class="label">
                <span class="label-text">Support Manager Name</span>
              </div>
              <select v-model="formData.support_manager" class="select select-bordered w-full">
                <option disabled selected>Select  Support Manager Name</option>
                <option >MD Sayed</option>
                <option >Sohan Islam</option>
                <option >Wasim Akram</option>
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
          <div>
           
           
            <div class="p-2 bg-green-50" v-if="itineraries.length > 0">
              <h1>Itineraries</h1>
              <div v-for="itineraryData in itineraries">
                 <div class="bg-blue-100 rounded-lg shadow-md px-2 py-3">
              <h1
                class="px-3 my-2 py-2 w-full font-bold text-xl rounded-lg shadow-md bg-blue-400 text-white"
              >
                Day {{ itineraryData.day }} : {{ itineraryData.date }}
              </h1>
            

              <!-- Activities -->
              <div class="bg-white p-3 my-2" v-if="itineraryData.activities.length > 0">
                <h1 class="font-semibold text-cyan-600 underline text-lg">Activities</h1>
                <div
                  v-for="activity in itineraryData.activities"
                  class="bg-green-100 my-3 px-2 py-3 rounded-lg"
                >
                  <div class="flex justify-start items-center gap-4 py-3">
                    <h1 class="bg-amber-500 text-white font-bold px-2 py-1 rounded-md">
                      {{ activity.time }}
                    </h1>
                    <p class="mx-4">{{ activity.type }}</p>
                    <h1 class="font-bold text-lg">{{ activity.from }}</h1>
                    <p v-if="activity.to">To</p>
                    <h1 class="font-bold text-lg">{{ activity.to }}</h1>
                   <p v-if="activity.by">By</p> 
                    <h1 class="font-bold text-lg text-sky-700">{{ activity.by }}</h1>
                  </div>
                </div>
                <div class="flex justify-center items-center">

              </div>
              </div>

              <!-- Activities End-->
            </div>
              </div>
                
            </div>
             <div class="flex items-center justify-center p-2 bg-sky-300 gap-8">
               <h1 class="text-2xl text-sky-800 font-semibold">Create Itinerary</h1>
            <!-- {{ itinerary }} -->

            <button v-if="!showItiniraryForm" @click="day++,showItiniraryForm = true" type="button" class="btn btn-info text-white">Add Day</button>
            </div>
            <div v-if="showItiniraryForm" class="bg-blue-100 rounded-lg shadow-md px-2 py-3">
              <h1
                class="px-3 my-2 py-2 w-full font-bold text-xl rounded-lg shadow-md bg-blue-400 text-white"
              >
                Day {{ day }} : {{ itinerary.date }}
              </h1>
              <div class="flex items-center gap-5 justify-between">
                <label for="date" class="w-1/3 font-semibold text-lg text-center"
                  >Select Date</label
                >
                <input
                  type="date"
                  name="date"
                  v-model="itinerary.date"
                  class="input input-bordered w-1/2"
                />
                <button
                  @click="showActivity = true"
                  type="button"
                  class="w-1/2 px-3 py-3 rounded-lg bg-blue-500 text-white"
                >
                  Add Activity
                </button>
              </div>
              <div v-if="showActivity" class="flex items-center justify-between px-3 py-2 w-1/2">
                <label for="date" class="w-1/2 font-semibold text-lg text-center"
                  >Select Activity Type</label
                >
                <select v-model="itinerary.type" class="select select-bordered w-1/2">
                  <option disabled selected>Select an option</option>
                  <option>Air Transportation</option>
                  <option>Ground Transportation</option>
                  <option>Hotel</option>
                  <option>General Activities</option>
                </select>
              </div>

              <div v-if="itinerary.type == 'Air Transportation'" class="px-5 bg-slate-50 py-5">
                <p class="text-2xl font-bold py-3 border-b">Select Air Transportation</p>

                <!-- Fare Form -->
                <div class="bg-gray-100 p-5 mt-5 rounded-lg">
                  <div class="flex gap-3">
                    <div class="w-full">
                      <label for="" class="text-slate-600">Select Airline</label>
                      <select v-model="selectdAirline" class="select select-bordered w-full">
                        <option disabled selected>Select an option</option>
                        <option v-for="airline in airLines" :value="airline">
                          {{ airline.name }}
                        </option>
                      </select>
                    </div>
                    <div class="w-full">
                      <label for="" class="text-slate-600">Origin Airport</label>
                      <select v-model="airRoute.origin" class="select select-bordered w-full">
                        <option disabled selected>Select an option</option>
                        <option
                          v-if="selectdAirline?.origins"
                          v-for="origin in selectdAirline.origins"
                          :value="origin"
                        >
                          {{ origin.name }} ({{ origin.short_name }})
                        </option>
                      </select>
                    </div>
                    <div class="w-full">
                      <label for="" class="text-slate-600">Destination Airport</label>
                      <select v-model="airRoute.destination" class="select select-bordered w-full">
                        <option disabled selected>Select an option</option>
                        <option
                          v-if="selectdAirline?.destination"
                          v-for="destination in selectdAirline.destination"
                          :value="destination"
                        >
                          {{ destination.name }} ({{ destination.short_name }})
                        </option>
                      </select>
                    </div>
                    <!-- <div class="w-full">
                        <label for="" class="text-slate-600">Select Day</label>
                        <select
                          v-model="airRoute.day"
                          class="select select-bordered w-full"
                        >
                          <option disabled selected>Select an option</option>
                          <option v-if="selectdAirline?.days"
                            v-for="day in selectdAirline.days"
                            :value="day"
                          >
                            {{ day }}
                          </option>
                        </select>
                      </div> -->
                    <button
                      v-if="selectdAirline"
                      @click="getRoutes"
                      type="button"
                      class="btn btn-success mt-6 my-4 text-white btn-sm px-5"
                    >
                      Get Routes
                    </button>
                  </div>
                  <div v-for="route in availableRoutes" class="mt-4 flex bg-gray-200 py-3 px-2">
                    <div
                      class="flex gap-1 rounded-lg shadow-lg bg-white px-4 py-2 w-full justify-between items-center"
                    >
                      <div>
                        <h1 class="font-semibold text-lg">
                          {{ route.origin.name }} ({{ route.origin.short_name }})
                        </h1>
                        <h1 class="font-semibold text-xl">{{ route.origin_time }}</h1>
                        <p class="font-bold text-sm">{{ route.date }}</p>
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
                      <div>
                        <h1 class="font-semibold text-lg">
                          {{ route.transit.name }} ({{ route.transit.short_name }})
                        </h1>
                        <h1 class="font-semibold text-xl">{{ route.transit_time }}</h1>
                        <p class="font-bold text-sm">{{ route.date }}</p>
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
                      <div>
                        <h1 class="font-semibold text-lg">
                          {{ route.destination.name }} ({{ route.destination.short_name }})
                        </h1>
                        <h1 class="font-semibold text-xl">{{ route.destination_time }}</h1>
                        <p class="font-bold text-sm">{{ route.date }}</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-5 justify-end w-1/2">
                      <h1>Ticket Fare : $1200</h1>

                      <button
                        type="button"
                        @click="selectRoute(route)"
                        class="rounded-lg bg-orange-600 text-white px-3 py-2"
                      >
                        Select Flight
                      </button>
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
                </div>

                <!-- Air Fares List -->
                <div class="mt-5">
                  <p class="font-bold">Air Fares:</p>
                  <div v-if="fares.length === 0" class="text-gray-500">No Data Added</div>

                  <div v-else>
                    <ul>
                      <li
                        v-for="(fare, index) in fares"
                        :key="index"
                        class="py-2 border border-slate rounded my-1 px-1"
                      >
                        <!-- {{ fare }} -->
                        <div class="text-lg font-semibold flex justify-between items-center">
                          <div class="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="48"
                              height="48"
                              fill="currentColor"
                            >
                              <path
                                d="M21.949 10.1118C22.1634 10.912 21.6886 11.7345 20.8884 11.9489L5.2218 16.1467C4.77856 16.2655 4.31138 16.0674 4.08866 15.6662L1.46582 10.9415L2.91471 10.5533L5.3825 12.9979L10.4778 11.6326L5.96728 4.55896L7.89913 4.04132L14.8505 10.4609L20.1119 9.05113C20.9121 8.83671 21.7346 9.31159 21.949 10.1118ZM4.00013 19H20.0001V21H4.00013V19Z"
                              ></path>
                            </svg>
                            Departure From {{ fare.origin.name }} To {{ fare.transit.name }} By
                            {{ selectdAirline.name }}
                          </div>
                          <div>$ 1200</div>
                        </div>
                        <br />
                        <div class="text-lg font-semibold flex justify-between items-center">
                          <div class="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="48"
                              height="48"
                              fill="currentColor"
                            >
                              <path
                                d="M21.949 10.1118C22.1634 10.912 21.6886 11.7345 20.8884 11.9489L5.2218 16.1467C4.77856 16.2655 4.31138 16.0674 4.08866 15.6662L1.46582 10.9415L2.91471 10.5533L5.3825 12.9979L10.4778 11.6326L5.96728 4.55896L7.89913 4.04132L14.8505 10.4609L20.1119 9.05113C20.9121 8.83671 21.7346 9.31159 21.949 10.1118ZM4.00013 19H20.0001V21H4.00013V19Z"
                              ></path>
                            </svg>
                            Departure From {{ fare.transit.name }} To {{ fare.destination.name }} By
                            {{ selectdAirline.name }}
                          </div>
                          <div>$ 1200</div>
                        </div>
                        <br />

                        <div class="text-lg font-semibold flex justify-between items-center">
                          <div class="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="48"
                              height="48"
                              fill="currentColor"
                            >
                              <path
                                d="M21.949 10.1118C22.1634 10.912 21.6886 11.7345 20.8884 11.9489L5.2218 16.1467C4.77856 16.2655 4.31138 16.0674 4.08866 15.6662L1.46582 10.9415L2.91471 10.5533L5.3825 12.9979L10.4778 11.6326L5.96728 4.55896L7.89913 4.04132L14.8505 10.4609L20.1119 9.05113C20.9121 8.83671 21.7346 9.31159 21.949 10.1118ZM4.00013 19H20.0001V21H4.00013V19Z"
                              ></path>
                            </svg>
                            Return From {{ fare.return_origin.name }} To
                            {{ fare.return_transit.name }} By {{ selectdAirline.name }}
                          </div>
                          <div>$ 1200</div>
                        </div>
                        <div class="text-lg font-semibold flex justify-between items-center">
                          <div class="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="48"
                              height="48"
                              fill="currentColor"
                            >
                              <path
                                d="M21.949 10.1118C22.1634 10.912 21.6886 11.7345 20.8884 11.9489L5.2218 16.1467C4.77856 16.2655 4.31138 16.0674 4.08866 15.6662L1.46582 10.9415L2.91471 10.5533L5.3825 12.9979L10.4778 11.6326L5.96728 4.55896L7.89913 4.04132L14.8505 10.4609L20.1119 9.05113C20.9121 8.83671 21.7346 9.31159 21.949 10.1118ZM4.00013 19H20.0001V21H4.00013V19Z"
                              ></path>
                            </svg>
                            Return From {{ fare.return_transit.name }} To
                            {{ fare.return_destination.name }} By {{ selectdAirline.name }}
                          </div>
                          <div>$ 1200</div>
                        </div>
                      </li>
                    </ul>
                    <div class="font-bold mt-3 text-xl flex items-center justify-end">
                      Total: ${{ totalFare }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="itinerary.type == 'Ground Transportation'"
                class="px-5 bg-slate-50 py-5 mt-3"
              >
                <p class="text-2xl font-bold py-3">Select Ground Transport</p>

                <!-- Transport Form Fields -->
                <div class="grid grid-cols-3 gap-5 mb-5">
                  <div class="w-full">
                    <label for="" class="text-slate-600">Select City</label>
                    <select
                      v-model="newTransport.city"
                      placeholder="From"
                      class="select select-bordered w-full"
                    >
                      <option disabled selected>Select City</option>
                      <option
                        v-for="city in countries.find((e) => e.name == 'Saudi Arabia').cities"
                      >
                        {{ city.name }}
                      </option>
                    </select>
                  </div>
                  <div class="w-full">
                    <label for="" class="text-slate-600">Select From Location Type</label>
                    <select
                      v-model="newTransport.from_type"
                      placeholder="From Type"
                      class="select select-bordered w-full"
                    >
                      <option disabled selected>Select From Location Type</option>
                      <option>City</option>
                      <option>Airport</option>
                      <option>Location</option>
                      <option>Hotel</option>
                    </select>
                  </div>

                  <div class="w-full">
                    <label for="" class="text-slate-600">Select From</label>
                    <select
                      v-model="newTransport.from"
                      placeholder="From"
                      class="select select-bordered w-full"
                    >
                      <option disabled selected>Select From</option>
                      <option :value="location.name" v-for="location in fromLocations">
                        {{ location.name }}
                      </option>
                    </select>
                  </div>
                  <div class="w-full">
                    <label for="" class="text-slate-600">Select To Location Type</label>
                    <select
                      v-model="newTransport.to_type"
                      placeholder="To Type"
                      class="select select-bordered w-full"
                    >
                      <option disabled selected>Select From Location Type</option>
                      <option>City</option>
                      <option>Airport</option>
                      <option>Location</option>
                      <option>Hotel</option>
                    </select>
                  </div>
                  <div class="w-full">
                    <label for="" class="text-slate-600">Select To</label>
                    <select
                      v-model="newTransport.to"
                      placeholder="From"
                      class="select select-bordered w-full"
                    >
                      <option disabled selected>Select To</option>
                      <option :value="location.name" v-for="location in toLocations">
                        {{ location.name }}
                      </option>
                    </select>
                  </div>
                  <div class="w-full">
                    <label for="" class="text-slate-600">Select Transportation Type</label>
                    <select
                      v-model="newTransport.type"
                      placeholder="From"
                      class="select select-bordered w-full"
                    >
                      <option disabled selected>Select Type</option>
                      <option>Bus</option>
                      <option>Taxi</option>
                      <option>Car</option>
                    </select>
                  </div>

                  <div class="w-full">
                    <label for="" class="text-slate-600">Select Time</label>
                    <input
                      v-model="newTransport.time"
                      type="time"
                      placeholder="Select Time"
                      class="input input-bordered w-full"
                    />
                  </div>
                  <div class="flex items-center justify-center w-1/2">
                    <button
                      type="button"
                      @click="getTransports"
                      class="btn btn-success text-white btn-sm h-10 mt-5 px-5"
                    >
                      Get Transports
                    </button>
                  </div>
                </div>
                <div v-if="availableTransport.length > 0">
                  <div
                    v-for="trs in availableTransport"
                    class="flex justify-between items-center p-2 m-2 rounded-md bg-gray-300"
                  >
                    <h1>{{ trs.name }}</h1>
                    <div class="flex justify-between items-center gap-5">
                      <h1 class="text-blue-800 font-semibold">Fare :${{ trs.fare }}</h1>
                      <button
                        type="button"
                        @click="selectTransport(trs)"
                        class="rounded-lg bg-orange-600 text-white px-3 py-2"
                      >
                        Select Transport
                      </button>
                    </div>
                  </div>
                </div>

                <button @click="addTransport" class="btn btn-success text-white btn-sm px-5">
                  Save Transport
                </button>

                <!-- Transport List -->
              </div>
              <div v-if="itinerary.type =='Hotel'" class="flex gap-4">
                 <div class="w-full">
                    <label for="" class="text-slate-600">Select Hotel</label>
                    <select
                      v-model="selectedHotel.name"
                      placeholder="From"
                      class="select select-bordered w-full"
                    >
                      <option disabled selected>Select Hotel</option>
                      <option v-for="hotel in hotels">{{ hotel.name }}</option>
                     
                    </select>
                  </div>

                  <div class="w-full">
                    <label for="" class="text-slate-600">Select Time</label>
                    <input
                      v-model="selectedHotel.time"
                      type="time"
                      placeholder="Select Time"
                      class="input input-bordered w-full"
                    />
                  </div>
                  <div class="flex items-center justify-center w-1/2">
                    <button
                      type="button"
                      @click="saveHotel"
                      class="btn btn-success text-white btn-sm h-10 mt-5 px-5"
                    >
                      Add Activity
                    </button>
                  </div>
              </div>

              <!-- Activities -->
              <div class="bg-white p-3 my-2" v-if="itinerary.activities.length > 0">
                <h1 class="font-semibold text-cyan-600 underline text-lg">Activities</h1>
                <div
                  v-for="activity in itinerary.activities"
                  class="bg-green-100 my-3 px-2 py-3 rounded-lg"
                >
                  <div class="flex justify-start items-center gap-4 py-3">
                    <h1 class="bg-amber-500 text-white font-bold px-2 py-1 rounded-md">
                      {{ activity.time }}
                    </h1>
                    <p class="mx-4">{{ activity.type }}</p>
                    <h1 class="font-bold text-lg">{{ activity.from }}</h1>
                    <p v-if="activity.to">To</p>
                    <h1 class="font-bold text-lg">{{ activity.to }}</h1>
                   <p v-if="activity.by">By</p> 
                    <h1 class="font-bold text-lg text-sky-700">{{ activity.by }}</h1>
                  </div>
                </div>
                <div class="flex justify-center items-center">
                <button type="button" @click="saveItineray" class="btn btn-success text-white">Save Itinerary</button>
              </div>
              </div>

              <!-- Activities End-->
            </div>
          </div>
          <div class="flex flex-col gap-5 mt-4">
            <form @submit.prevent="EventFormApply">
              <!-- Existing form fields... -->
              <div class="flex flex-col gap-5 mt-4">
                <!-- <div class="label bg-yellow-600 text-white p-2 rounded-lg">Add Itinerary</div> -->

                <!-- Add Air Fare section -->

                <!-- Add Transport button -->
                <!-- <button
                  @click="showTransportForm = !showTransportForm"
                  type="button"
                  class="btn btn-sm btn-primary text-white px-5 mt-5"
                >
                  {{ showTransportForm ? 'Hide Transport Form' : 'Add Transport' }}
                </button> -->

                <!-- Transport Form -->

                <!-- Add Hotel button -->
                <!-- <button
                  @click="showHotelForm = !showHotelForm"
                  type="button"
                  class="btn btn-sm btn-success text-white px-5 mt-5"
                >
                  {{ showHotelForm ? 'Hide Hotel Form' : 'Add Hotel' }}
                </button> -->

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
                        <li
                          v-for="(hotel, index) in hotels"
                          :key="index"
                          class="py-2 border border-slate rounded my-1 px-1"
                        >
                          <div class="text-lg font-semibold flex justify-between items-center">
                            <div>
                              <span class="text-xl font-semibold">{{ index + 1 }}.</span>
                              {{ hotel.name }}, {{ hotel.city }}, {{ hotel.days }}
                            </div>
                            <div>$ {{ hotel.cost }}</div>
                          </div>
                        </li>
                      </ul>
                      <div class="font-bold mt-3 text-xl flex items-center justify-end">
                        Total: ${{ totalHotel }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Submit and Cancel Buttons -->
              <div class="flex justify-center gap-5 my-5" v-if="0">
                <div class="font-bold mt-5 text-2xl flex justify-end">
                  Total Travel Cost: ${{ totalTravelCost }}
                </div>
                <!-- <button type="submit" class="btn btn-success btn-sm px-5">Create</button>
                    <button type="button" class="btn btn-error btn-sm px-5">Cancel</button> -->
              </div>
            </form>

            <!-- <button @click="addNewStep" type="button" class="btn btn-sm btn-success text-white px-5">Add New Steps</button> -->
          </div>
          <!-- Buttons -->
          <div class="flex justify-center gap-5 my-5">
            <button type="submit" class="btn btn-success btn-sm px-5 text-white">Save Package Data</button>
            <button type="button" class="btn btn-error text-white btn-sm px-5">Cancel</button>
          </div>
        </section>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useSocialStore } from '@/stores/SocialDashboard.ts'
import { countries, statuses } from '@/stores/itinenary.ts'
import moment from 'moment'
import { computed, ref } from 'vue'
const store = useSocialStore()
const showActivity = ref(false)
const showFareForm = ref(false)
const showTransportForm = ref(false)
const showHotelForm = ref(false)
const day = ref(0)
const itinerary = ref({ activities: [], type: null, date: null })
const fares = ref([])
const itineraries = ref([])
const newFare = ref({
  departure: { from: '', to: '', airline: '', fare: null },
  return: { from: '', to: '', airline: '', fare: null }
})
const showItiniraryForm = ref(false)
const addFare = () => {
  fares.value.push(airRoute.value)
  // newFare.value = {
  //   departure: { from: '', to: '', airline: '', fare: null },
  //   return: { from: '', to: '', airline: '', fare: null }
  // }
  showFareForm.value = false
}

const totalFare = computed(() => {
  // return fares.value.reduce((sum, fare) => {
  //   return sum + (Number(fare.departure.fare) || 0) + (Number(fare.return.fare) || 0)
  // }, 0)
  return 1200
})
const airports = [ { id: 1, name: 'Houston', short_name: 'IAH' },
      { id: 2, name: 'Texas', short_name: 'DFW' },
      { id: 4, name: 'New York', short_name: 'JFK' },
      { id: 10, name: 'Washington', short_name: 'IAD' },
      { id: 3, name: 'Medina', short_name: 'MED' },
      { id: 6, name: 'Jeddah', short_name: 'JED' }]
// const transports = ref([])
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
const selectdAirline = ref()
// const hotels = ref([])
const newHotel = ref({ name: '', cost: null, city: '', days: '' })

const addHotel = () => {
  hotels.value.push({ ...newHotel.value })
  newHotel.value = { name: '', cost: null }
  // Don't close the form here
}
const availableRoutes = ref([])
const getRoutes = () => {
  let t = 9
  for (let i = 3; i < 7; i++) {
    let rt = { ...airRoute.value }
    rt.transit = { id: 11, name: 'Istanbul', short_name: 'IST' }

    rt.date = moment(itinerary.value.date).format('ddd, DD MMM')
    rt.origin_time = `${t}:00`
    rt.transit_time = `${t + 3}:00`
    rt.destination_time = `${t + 6}:00`
    availableRoutes.value.push(rt)
    t += 4
  }
  console.log(availableRoutes.value)
}
const transports = ref([
  {
    name: "Khalid's Taxi",
    city: 'Medina',
    type: 'Bus',
    fare: 200
  },
  {
    name: 'Mecca Express',
    city: 'Mecca',
    type: 'Bus',
    fare: 180
  },
  {
    name: 'Jeddah Shuttle',
    city: 'Jeddah',
    type: 'Taxi',
    fare: 150
  },
  {
    name: 'Medina Movers',
    city: 'Medina',
    type: 'Car',
    fare: 120
  },
  {
    name: 'Holy City Transport',
    city: 'Mecca',
    type: 'Bus',
    fare: 190
  }
])
const availableTransport = ref([])
const getTransports = () => {
  availableTransport.value = transports.value.filter(
    (e) => e.city == newTransport.value.city && e.type == newTransport.value.type
  )
}
const saveItineray = () => {
  itinerary.value.day = day.value
  itineraries.value.push(itinerary.value)
  itinerary.value = { activities: [], type: null, date: moment(itinerary.value.date).add(1, 'days').format('YYYY-MM-DD') }
  showItiniraryForm.value = false
}
const totalHotel = computed(() => {
  return hotels.value.reduce((sum, hotel) => {
    return sum + (Number(hotel.cost) || 0)
  }, 0)
})
const toLocations = computed(() => {
  let data = []
  if (newTransport.value.to_type == 'City') {
    data = [
      { id: 1, name: 'Mecca', city: 'Mecca' },
      { id: 2, name: 'Medina', city: 'Medina' },
      { id: 3, name: 'Jeddah', city: 'Jeddah' }
    ]
  } else if (newTransport.value.to_type == 'Hotel') {
    data = hotels.value
  } else if (newTransport.value.to_type == 'Airport') {
    data = [
      { id: 1, name: 'Medina Airpot', city: 'Medina' },
      { id: 2, name: 'Jeddah Airpot', city: 'Jeddah' }
    ]
  } else if (newTransport.value.to_type == 'Locations') {
    data = locations.value
  }
  return data
})
const fromLocations = computed(() => {
  let data = []
  if (newTransport.value.from_type == 'City') {
    data = [
      { id: 1, name: 'Mecca', city: 'Mecca' },
      { id: 2, name: 'Medina', city: 'Medina' },
      { id: 3, name: 'Jeddah', city: 'Jeddah' }
    ]
  } else if (newTransport.value.from_type == 'Hotel') {
    data = hotels.value
  } else if (newTransport.value.from_type == 'Airport') {
    data = [
      { id: 1, name: 'Medina Airpot', city: 'Medina' },
      { id: 2, name: 'Jeddah Airpot', city: 'Jeddah' }
    ]
  } else if (newTransport.value.from_type == 'Locations') {
    data = locations.value
  }
  if (data.length > 0) {
    console.log(data, newTransport.value.city)
   data = data.filter((e) => e.city == newTransport.value.city)
  }
  return data
})
const selectRoute = (rt) => {
  let activity1 = {
    time: rt.origin_time,
    from: rt.origin.name,
    to: rt.transit.name,
    type: 'Flight from',
    by: selectdAirline.value.name
  }
  let activity2 = {
    time: rt.transit_time,
    from: rt.transit.name,
    to: rt.destination.name,
    type: 'Flight from',
    by: selectdAirline.value.name
  }
  itinerary.value.activities.push(activity1)
  itinerary.value.activities.push(activity2)
  showActivity.value = false
  itinerary.value.type = null
  selectdAirline.value = null
  availableRoutes.value = []
}
const selectTransport = (tr) => {
  console.log(tr, newTransport.value)

  let activity1 = {
    time: newTransport.value.time,
    from: newTransport.value.from,
    to: newTransport.value.to,
    type: `${newTransport.value.type} from `,
    by: tr.name
  }

  itinerary.value.activities.push(activity1)
   showActivity.value = false
  itinerary.value.type = null
  newTransport.value = { from: '', to: '', type: '', cost: null }
  availableTransport.value = []
}
const saveHotel = ()=>{
   let activity1 = {
    time: selectedHotel.value.time,
    from: selectedHotel.value.name,
    to: null,
    type: `Check-In at `,
    by: null,
   }
  itinerary.value.activities.push(activity1)
  showActivity.value = false
  itinerary.value.type = null
  selectedHotel.value = { name: '', time:  null }
  
}

const totalTravelCost = computed(() => {
  return totalFare.value + totalTransport.value + totalHotel.value
})
const selectedHotel = ref({name :null,time:null,})
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
  itineraries: [
    
  ]
})
const airLines = ref([
  {
    id: 1,
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    name: 'Turkish Airlines',
    origins: [
      { id: 1, name: 'Houston', short_name: 'IAH' },
      { id: 2, name: 'Texas', short_name: 'DFW' },
      { id: 4, name: 'New York', short_name: 'JFK' },
      { id: 10, name: 'Washington', short_name: 'IAD' },
      { id: 3, name: 'Medina', short_name: 'MED' },
      { id: 6, name: 'Jeddah', short_name: 'JED' }
    ],
    transits: [{ id: 11, name: 'Istanbul', short_name: 'IST' }],
    destination: [
      { id: 1, name: 'Houston', short_name: 'IAH' },
      { id: 2, name: 'Texas', short_name: 'DFW' },
      { id: 4, name: 'New York', short_name: 'JFK' },
      { id: 10, name: 'Washington', short_name: 'IAD' },
      { id: 3, name: 'Medina', short_name: 'MED' },
      { id: 6, name: 'Jeddah', short_name: 'JED' }
    ]
  }
])
const hotels = ref([
  { id: 1, name: 'Anwar Al Medinah Mövenpick Hotel', city: 'Medina' },
  { id: 2, name: 'Dar Al Tawhid Intercontinental Makkah', city: 'Makkah' },
  { id: 3, name: 'Swissotel Al Maqam Makkah', city: 'Makkah' },
  { id: 4, name: 'Medinah Hilton', city: 'Medina' },
  { id: 5, name: 'Anjum Hotel Makkah', city: 'Makkah' },
  { id: 6, name: 'Le Meridien Medina', city: 'Medina' },
  { id: 7, name: 'Hyatt Regency Makkah Jabal Omar', city: 'Makkah' },
  { id: 8, name: 'Pullman Zamzam Medina', city: 'Medina' },
  { id: 9, name: 'Raffles Makkah Palace', city: 'Makkah' },
  { id: 10, name: 'Crowne Plaza Medinah', city: 'Medina' }
])
const locations = ref([
  { id: 1, name: 'Mecca', city: 'Mecca' },
  { id: 2, name: 'Masjid al-Haram', city: 'Mecca' },
  { id: 3, name: 'Safa and Marwa', city: 'Mecca' },
  { id: 4, name: 'Jabal Al Nour', city: 'Mecca' },
  { id: 5, name: 'Mina', city: 'Mecca' },
  { id: 6, name: 'Arafat', city: 'Mecca' },
  { id: 7, name: 'Muzdalifah', city: 'Mecca' },
  { id: 8, name: 'Masjid Al Nabawi', city: 'Medina' }
])
const step = ref({
  type: '',
  vendor: '',
  from_country: '',
  from_city: '',
  to_country: '',
  to_city: ''
})
// const airRouteList = ref([])
const airRoute = ref({
  origin: null,
  transit: null,
  destination: null,
  return_origin: null,
  return_transit: null,
  return_destination: null
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
  formData.value.itineraries = itineraries.value
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
    description: '',
    itineraries:[]
  }
}
</script>
