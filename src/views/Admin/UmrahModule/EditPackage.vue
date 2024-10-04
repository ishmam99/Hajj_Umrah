<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4" v-if="!edit">
    <div class="text-center pb-6 border-b-4 border-gray-300 mb-12">
      <p class="text-5xl font-bold text-[#149856] tracking-tight">Update Package Details</p>
      <p class="text-xl text-gray-600 mt-3">
        All package details and itinerary details are given bellow
      </p>
      <div class="w-full flex gap-3 justify-end items-center px-20">
        <button class="btn btn-success text-white" @click="edit = !edit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M5 18.89H6.41421L15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L9.24264 18.89H21V20.89ZM15.7279 6.74785L17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785Z"></path></svg> Edit</button>
        <button @click="$router.go(-1)" class="btn btn-primary text-white flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg> Back</button>
      </div>
    </div>

    <div>
        <div class=" gap-5 mb-5 border-blue-400 border p-2 rounded-md bg-blue-100">
       <h1 class="my-2 text-center text-xl text-blue-700 font-semibold">1. Package Dates Section</h1>
        <div class="flex gap-5 py-5 mb-5 border-blue-400 border p-2 rounded-md bg-blue-200">
        <div class="w-1/2">
          <div class="label">
            <span class="label-text">Starting Date</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            {{ createdPackage?.start_at }}
          </h1>
        </div>
        <div class="w-1/2">
          <div class="label">
            <span class="label-text">Ending Date</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            {{ createdPackage?.end_at }}
          </h1>
        </div>
      </div>
      </div>
        <div class="w-full  border-cyan-400 border p-2 rounded-md bg-cyan-100">
      <h1 class="my-2 text-xl text-center text-cyan-700 font-semibold">2. Imam Section</h1>
        <div class="w-full py-3 my-3 border-cyan-400 border p-2 rounded-md bg-cyan-200">
          <div class="label">
            <span class="label-text">Imam Name</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            {{ createdPackage?.imam.user.name }}
          </h1>
        </div>
        <div class="w-full py-3 my-3 border-cyan-400 border p-2 rounded-md bg-cyan-200">
          <div class="label">
            <span class="label-text">Imam Email</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            {{ createdPackage?.imam.user.email }}
          </h1>
        </div>
        </div>
        <div class="w-full my-5 border-teal-400 border p-2 rounded-md bg-teal-100">
        <h1 class="my-5 text-center text-xl text-teal-700 font-semibold">3. Agent Section</h1>
        <div class="w-full my-4 py-3 border-teal-400 border p-2 rounded-md bg-teal-200">
          <div class="label">
            <span class="label-text">Agent Name</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            {{ createdPackage?.agent.user.name }}
          </h1>
        </div>
        <div class="w-full my-4 py-3 border-teal-400 border p-2 rounded-md bg-teal-200">
          <div class="label">
            <span class="label-text">Agent Email</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
             {{ createdPackage?.agent.user.email }}
          </h1>
        </div>
        </div>
        <div class="w-full my-5 border-teal-400 border p-2 rounded-md bg-purple-100">
        <h1 class="my-5 text-center text-xl text-teal-700 font-semibold">4. Flight Section</h1>
        <div class="w-full my-4 py-3 border-teal-400 border p-2 rounded-md bg-teal-200">
          <div class="label">
            <span class="label-text">Flight Name</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            {{ createdPackage?.itineraries[0]?.activities[0]?.activity_type }} {{ createdPackage?.itineraries[0]?.activities[0]?.from }} {{ createdPackage?.itineraries[0]?.activities[0]?.to }} By {{ createdPackage?.itineraries[0]?.activities[0]?.transportation_by }}
          </h1>
        </div>
        <div class="w-full my-4 py-3 border-teal-400 border p-2 rounded-md bg-teal-200">
          <div class="label">
            <span class="label-text">Flight Date &amp; Time</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            <span class="border-e-2 border-blue-400 pe-10">{{ createdPackage?.itineraries[0]?.date }}</span>  
            <span class="ps-10">{{ createdPackage?.itineraries[0]?.activities[0]?.time }}</span>
          </h1>
        </div>
        </div>
        <div class="w-full my-5 border-teal-400 border p-2 rounded-md bg-emerald-100">
        <h1 class="my-5 text-center text-xl text-teal-700 font-semibold">5. Bus Section</h1>
        <div class="w-full my-4 py-3 border-teal-400 border p-2 rounded-md bg-teal-200">
          <div class="label">
            <span class="label-text">Bus Company Name</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            {{ createdPackage?.itineraries[2]?.activities[0]?.activity_type}} {{ createdPackage?.itineraries[2]?.activities[0]?.from }} {{ createdPackage?.itineraries[2]?.activities[0]?.to }} By {{ createdPackage?.itineraries[2]?.activities[0]?.transportation_by }}
          </h1>
        </div>
        </div>
        <div class="w-full my-5 border-teal-400 border p-2 rounded-md bg-sky-100">
        <h1 class="my-5 text-center text-xl text-teal-700 font-semibold">6. Hotel Section</h1>
        <div class="w-full my-4 py-3 border-teal-400 border p-2 rounded-md bg-teal-200">
          <div class="label">
            <span class="label-text">Hotel Name</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            {{ createdPackage?.itineraries[2]?.activities[1].activity_type}}  {{ createdPackage?.itineraries[2]?.activities[0].to}} At {{ createdPackage?.itineraries[2]?.activities[1].time}}
          </h1>
        </div>
        </div>
        <br>
        <br>
      <div class="flex gap-5 mb-5">
        <div class="w-1/3">
          <div class="label">
            <span class="label-text">Origin Country</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            {{ createdPackage?.country.name }}
          </h1>
        </div>
        <div class="w-1/3">
          <div class="label">
            <span class="label-text">Origin City</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            {{ createdPackage?.city.name }}
          </h1>
        </div>
        <div class="w-1/3">
          <div class="label">
            <span class="label-text">Origin Airport</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            {{ createdPackage?.airport.short_name }}
          </h1>
        </div>
      </div>
      <div class="flex gap-5 mb-5">
        
      
        <div class="w-1/3">
          <div class="label">
            <span class="label-text">Support Manager Name</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            {{ createdPackage?.support_manager.user.name }}
          </h1>
        </div>
      </div>

      <!-- Package Title and Code -->
      <div class="flex gap-5 mb-5">
        <div class="w-1/2">
          <div class="label">
            <span class="label-text">Package Title</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            {{ createdPackage?.package_title }}
          </h1>
        </div>
        <div class="w-1/2">
          <div class="label">
            <span class="label-text">Package Year</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            {{ createdPackage?.package_year }}
          </h1>
        </div>
      </div>

      <!-- Package Year and ID -->
      <div class="flex gap-5 mb-5">
        <div class="w-1/2">
          <div class="label">
            <span class="label-text">Package Code</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            {{ createdPackage?.package_code }}
          </h1>
        </div>
        <div class="w-1/2">
          <div class="label">
            <span class="label-text">Package ID</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            {{ createdPackage?.package_id }}
          </h1>
        </div>
      </div>

      <!-- Package Status and Price -->
      <div class="flex gap-5 mb-5">
        <div class="w-1/2">
          <div class="label">
            <span class="label-text">Status of Package</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            {{ getStatus(createdPackage?.status_of_package) }}
          </h1>
        </div>
        <div class="w-1/2">
          <div class="label">
            <span class="label-text">Price</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            ${{ createdPackage?.price }}
          </h1>
        </div>
        <div class="w-1/2">
          <div class="label">
            <span class="label-text">Member Quota</span>
          </div>
          <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
            {{ createdPackage?.pax }}
          </h1>
        </div>
      </div>

      <!-- Dates -->
    

      <!-- Description -->
      <div>
        <div class="label">
          <span class="label-text">Description</span>
        </div>
        <h1 class="text-xl font-semibold p-2 border rounded-md bg-white">
          {{ createdPackage?.description }}
        </h1>
      </div>
    </div>
    <div>
      <div class="p-2 mt-5 bg-green-50" v-if="createdPackage?.itineraries?.length > 0">
        <h1 class="text-2xl px-5 py-2 bg-blue-400 text-white font-bold">Itineraries</h1>
        <div v-for="itineraryData in createdPackage?.itineraries">
          <div class="bg-blue-100 rounded-lg shadow-md px-2 py-3">
            <h1
              class="px-3 my-2 py-2 w-full font-bold text-xl rounded-lg shadow-md bg-blue-400 text-white"
            >
              Day {{ itineraryData.day }} : {{ itineraryData.date }}
            </h1>

            <!-- Activities -->
            <div class="bg-white p-3 my-2">
              <div class="flex justify-between items-center">
                <h1 class="font-semibold text-cyan-600 underline w-full text-lg">Activities</h1>
                <button
                  v-if="showForm !== itineraryData.id"
                  type="button"
                  @click="showForm = itineraryData.id"
                  class="w-1/3 px-1 py-3 rounded-lg bg-blue-500 text-white"
                >
                  Add Activity
                </button>
              </div>

              <div
                v-if="showForm == itineraryData.id"
                class="bg-blue-100 rounded-lg shadow-md px-2 py-3"
              >
                <div class="flex items-center justify-between px-3 py-2 w-full gap-5">
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
                  <button
                    v-if="showForm == itineraryData.id"
                    type="button"
                    @click="showForm = null"
                    class="w-1/3 px-1 py-3 rounded-lg bg-red-500 text-white"
                  >
                    Cancel
                  </button>
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
                        <select
                          v-model="airRoute.destination"
                          class="select select-bordered w-full"
                        >
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
                      <div class="w-full">
                        <label for="" class="text-slate-600">Description</label>
                        <input
                          v-model="airRoute.description"
                          type="text"
                          placeholder="Description"
                          class="input input-bordered w-full"
                        />
                      </div>

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
                        <!-- <div>
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
                        </svg> -->
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
                          @click="selectRouteNewActivity(route, itineraryData.id)"
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
                              Departure From {{ fare.transit.name }} To
                              {{ fare.destination.name }} By
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
                    <div class="w-full">
                      <label for="" class="text-slate-600">Description</label>
                      <input
                        v-model="newTransport.description"
                        type="text"
                        placeholder="Description"
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
                          @click="selectTransportActivity(trs, itineraryData.id)"
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
                <div v-if="itinerary.type == 'Hotel'" class="flex gap-4">
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
                      :disabled="saving"
                      @click="saveHotelActivity(itineraryData.id)"
                      class="btn btn-success text-white btn-sm h-10 mt-5 px-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        v-if="saving"
                        class="animate-spin"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                      >
                        <path
                          d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"
                        ></path>
                      </svg>
                      Add Activity
                    </button>
                  </div>
                </div>
                <div v-if="itinerary.type == 'General Activities'">
                  <div class="flex gap-5">
                    <div class="w-1/2">
                      <label for="" class="text-slate-600">Select Time</label>
                      <input
                        v-model="selectedGeneral.time"
                        type="time"
                        placeholder="Select Time"
                        class="input input-bordered w-full"
                      />
                    </div>
                    <div class="w-full">
                      <label for="" class="text-slate-600">Activity Details</label>
                      <textarea
                        v-model="selectedGeneral.description"
                        placeholder="Activity Details"
                        class="input input-bordered w-full"
                      ></textarea>
                    </div>
                  </div>
                  <div class="flex items-center justify-center w-1/2">
                    <button
                      type="button"
                      :disabled="saving"
                      @click="saveActivityGeneral(itineraryData.id)"
                      class="btn btn-success text-white btn-sm h-10 mt-5 px-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        v-if="saving"
                        class="animate-spin"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                      >
                        <path
                          d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"
                        ></path>
                      </svg>
                      Add Activity
                    </button>
                  </div>
                </div>

                <!-- Activities End-->
              </div>
              <div
                v-if="itineraryData?.activities?.length > 0"
                v-for="activity in itineraryData?.activities"
                class="bg-green-100 my-3 px-2 py-3 rounded-lg"
              >
                <div class="flex justify-between items-center">
                  <div class="flex justify-start items-center gap-4 py-3">
                    <h1 class="bg-amber-500 text-white font-bold px-2 py-1 rounded-md">
                      {{ activity.time }}
                    </h1>
                    <!-- {{activity}} -->
                    <p class="mx-4">{{ activity.activity_type }}</p>
                    <h1 class="font-bold text-lg">{{ activity.from }}</h1>
                    <p v-if="activity.to">To</p>
                    <h1 class="font-bold text-lg">{{ activity.to }}</h1>
                    <p v-if="activity.transportation_by">By</p>
                    <h1 class="font-bold text-lg text-sky-700">{{ activity.transportation_by }}</h1>
                    <p>{{ activity.description }}</p>
                  </div>
                  <button
                    class="btn bg-red-500 text-white"
                    @click="deleteActivity(activity.id)"
                    :disabled="deleting == activity.id"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      v-if="deleting == activity.id"
                      class="w-8 h-8 animate-spin"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"
                      ></path>
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
              <div v-else>
                <h1 class="flex justify-center items-center text-gray-400">No Activities</h1>
              </div>
              <div class="flex justify-center items-center"></div>
            </div>

            <!-- Activities End-->
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center p-2 bg-sky-300 gap-8">
        <h1 class="text-2xl text-sky-800 font-semibold">Create Itinerary</h1>
        <!-- {{ itinerary }} -->

        <button
          v-if="!showItiniraryForm"
          @click="
            (showItiniraryForm = true),
              (itinerary.date = moment(createdPackage?.start_at)
                .add('days', day - 1)
                .format('yyyy-MM-DD'))
          "
          type="button"
          class="btn btn-info text-white"
        >
          Add Day
        </button>
      </div>
      <div v-if="showItiniraryForm" class="bg-blue-100 rounded-lg shadow-md px-2 py-3">
        <h1
          class="px-3 my-2 py-2 w-full font-bold text-xl rounded-lg shadow-md bg-blue-400 text-white"
        >
          Day {{ day }} : {{ itinerary.date }}
        </h1>
        <div class="flex items-center gap-5 justify-between">
          <label for="date" class="w-1/3 font-semibold text-lg text-center">Select Date</label>
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
              <div class="w-full">
                <label for="" class="text-slate-600">Description</label>
                <input
                  v-model="newTransport.description"
                  type="text"
                  placeholder="Description"
                  class="input input-bordered w-full"
                />
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
                      Return From {{ fare.return_origin.name }} To {{ fare.return_transit.name }} By
                      {{ selectdAirline.name }}
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
        <div v-if="itinerary.type == 'Ground Transportation'" class="px-5 bg-slate-50 py-5 mt-3">
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
                <option v-for="city in countries.find((e) => e.name == 'Saudi Arabia').cities">
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
            <div class="w-full">
              <label for="" class="text-slate-600">Description</label>
              <input
                v-model="newTransport.description"
                type="text"
                placeholder="Description"
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
        <div v-if="itinerary.type == 'Hotel'" class="flex gap-4">
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
        <div v-if="itinerary.type == 'General Activities'">
          <div class="flex gap-5">
            <div class="w-1/2">
              <label for="" class="text-slate-600">Select Time</label>
              <input
                v-model="selectedGeneral.time"
                type="time"
                placeholder="Select Time"
                class="input input-bordered w-full"
              />
            </div>
            <div class="w-full">
              <label for="" class="text-slate-600">Activity Details</label>
              <textarea
                v-model="selectedGeneral.description"
                placeholder="Activity Details"
                class="input input-bordered w-full"
              ></textarea>
            </div>
          </div>
          <div class="flex items-center justify-center w-1/2">
            <button
              type="button"
              @click="saveActivity"
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

              <p>{{ activity.description }}</p>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <button type="button" @click="saveItineray" class="btn btn-success text-white">
              Save Itinerary
            </button>
          </div>
        </div>

        <!-- Activities End-->
      </div>
    </div>
  </div>
  <div class="px-5 bg-slate-50 py-5 w-3/4" v-else>
    <div class="text-center pb-6 border-b-4 border-gray-300 mb-12">
      <p class="text-5xl font-bold text-[#149856] tracking-tight">Update Package Details</p>
      <p class="text-xl text-gray-600 mt-3">
        All package details and itinerary details are given bellow
      </p>
      <div class="w-full flex justify-end items-center px-20">
        <button class="btn btn-warning bg-red-600 hover:bg-red-700 text-white" @click="edit = !edit">Cancel Edit</button>
      </div>
    </div>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <form @submit.prevent="EventFormApply">
        <section>
          <!-- Country and City -->
          <div class="flex gap-5 mb-5">
            <div class="w-1/3">
              <div class="label">
                <span class="label-text">Origin Country</span>
              </div>
              <select v-model="createdPackage.country.id" class="select select-bordered w-full">
                <option disabled selected>Select a Country</option>
                <option v-for="country in countries" :value="country.id">{{ country.name }}</option>
              </select>
            </div>
            <div class="w-1/3">
              <div class="label">
                <span class="label-text">Origin City</span>
              </div>
              <select v-model="createdPackage.city.id" class="select select-bordered w-full">
                <option disabled selected>Select a City</option>
                <option
                  v-for="city in countries.find((e) => e.name == createdPackage.country.name)
                    .cities"
                  :value="city.id"
                >
                  {{ city.name }}
                </option>
              </select>
            </div>
            <div class="w-1/3">
              <div class="label">
                <span class="label-text">Origin Airport</span>
              </div>
              <select v-model="createdPackage.airport.id" class="select select-bordered w-full">
                <option disabled selected>Select an Airport</option>
                <option
                  v-for="airport in countries
                    .find((e) => e.name == createdPackage.country.name)
                    .cities.find((c) => c.id == createdPackage.city.id).airports"
                  :value="airport.id"
                >
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
              <select v-model="createdPackage.agent.id" class="select select-bordered w-full">
                <option disabled selected>Select Agent Name</option>
                <option :value="agent.id" v-for="agent in agents">{{ agent.user.name }}</option>
              </select>
            </div>
            <div class="w-1/3">
              <div class="label">
                <span class="label-text">Imam Name</span>
              </div>
              <select v-model="createdPackage.imam.id" class="select select-bordered w-full">
                <option disabled selected>Select Imam Name</option>
                <option :value="imam.id" v-for="imam in imams">{{ imam.user.name }}</option>
              </select>
            </div>
            <div class="w-1/3">
              <div class="label">
                <span class="label-text">Support Manager Name</span>
              </div>
              <select
                v-model="createdPackage.support_manager.id"
                class="select select-bordered w-full"
              >
                <option disabled selected>Select Support Manager Name</option>
                <option :value="support.id" v-for="support in support_managers">
                  {{ support.user.name }}
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
                v-model="createdPackage.package_title"
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full"
              />
            </div>
            <div class="w-1/2">
              <div class="label">
                <span class="label-text">Package Year</span>
              </div>
              <select
                v-model="createdPackage.package_year"
                @change="
                  createdPackage.package_id = `${createdPackage.package_year}-${createdPackage.country?.short_name}-${createdPackage.city?.short_name}-${createdPackage.package_code}`
                "
                class="select select-bordered w-full"
              >
                <option disabled selected>Select a year</option>
                <option v-for="year in years" :key="year">{{ year }}</option>
              </select>
            </div>
          </div>

          <!-- Package Year and ID -->
          <div class="flex gap-5 mb-5">
            <div class="w-1/2">
              <div class="label">
                <span class="label-text">Package Code</span>
              </div>
              <input
                v-model="createdPackage.package_code"
                @change="
                  createdPackage.package_id = `${createdPackage.package_year}-${createdPackage.country?.short_name}-${createdPackage.city?.short_name}-${createdPackage.package_code}`
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
                v-model="createdPackage.package_id"
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
              <select
                v-model="createdPackage.status_of_package"
                class="select select-bordered w-full"
              >
                <option disabled selected>Select an option</option>
                <option v-for="status in statuses" :value="status.id">{{ status.name }}</option>
              </select>
            </div>
            <div class="w-1/2">
              <div class="label">
                <span class="label-text">Price</span>
              </div>
              <input
                v-model="createdPackage.price"
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
                v-model="createdPackage.pax"
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
              <input
                v-model="createdPackage.start_at"
                type="date"
                class="input input-bordered w-full"
              />
            </div>
            <div class="w-1/2">
              <div class="label">
                <span class="label-text">Ending Date</span>
              </div>
              <input
                v-model="createdPackage.end_at"
                type="date"
                class="input input-bordered w-full"
              />
            </div>
          </div>

          <!-- Description -->
          <div>
            <div class="label">
              <span class="label-text">Description</span>
            </div>
            <textarea
              v-model="createdPackage.description"
              class="textarea textarea-bordered w-full"
              placeholder="Description"
            ></textarea>
          </div>

          <!-- Buttons -->
          <div class="flex justify-center gap-5 my-5">
            <button type="submit" :disabled="saving" class="btn btn-success btn-sm px-5 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                v-if="saving"
                class="h-6 w-6 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H5"
                />
              </svg>
              Save Package Data
            </button>
            <button type="button" class="btn btn-error text-white btn-sm px-5">Cancel</button>
          </div>
        </section>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useSocialStore } from '@/stores/SocialDashboard.ts'
// import {  statuses } from '@/stores/itinenary.ts'

import { useRoute } from 'vue-router'
import moment from 'moment'
import { computed, ref, onMounted } from 'vue'
const route = useRoute()
const store = useSocialStore()
const showActivity = ref(false)
const showFareForm = ref(false)
const showTransportForm = ref(false)
const edit = ref(false)
// const day = ref(0)
const countries = ref()
const itinerary = ref({ activities: [], type: null, date: null })
const fares = ref([])
const agents = ref([])
const imams = ref([])
const support_managers = ref([])
const itineraries = ref([])
const saving = ref(false)
const deleting = ref(null)

const deleteActivity = async (id) => {
  deleting.value = id
  try {
    const data = await api().post('activity/' + id, {
      _method: 'DELETE'
    })
    if (data) {
      getPackage()
    }
  } catch (error) {
    console.log(error)
  }
  deleting.value = null
}
const newFare = ref({
  departure: { from: '', to: '', airline: '', fare: null },
  return: { from: '', to: '', airline: '', fare: null }
})
const createdPackage = ref()
const showItiniraryForm = ref(false)
const addFare = () => {
  fares.value.push(airRoute.value)
  // newFare.value = {
  //   departure: { from: '', to: '', airline: '', fare: null },
  //   return: { from: '', to: '', airline: '', fare: null }
  // }
  showFareForm.value = false
}
const statuses = [
  { id: 1, name: 'Not In Plan' },
  { id: 2, name: 'In Plan' },
  { id: 3, name: 'In Preparation' },
  { id: 4, name: 'Fully Booked' },
  { id: 5, name: 'In Approval Process' },
  { id: 6, name: 'Approved' },
  { id: 7, name: 'Published' },
  { id: 8, name: 'Discontinued' }
]
const totalFare = computed(() => {
  // return fares.value.reduce((sum, fare) => {
  //   return sum + (Number(fare.departure.fare) || 0) + (Number(fare.return.fare) || 0)
  // }, 0)
  return 1200
})
const airports = [
  { id: 1, name: 'Houston', short_name: 'IAH' },
  { id: 2, name: 'Texas', short_name: 'DFW' },
  { id: 4, name: 'New York', short_name: 'JFK' },
  { id: 10, name: 'Washington', short_name: 'IAD' },
  { id: 3, name: 'Medina', short_name: 'MED' },
  { id: 6, name: 'Jeddah', short_name: 'JED' },
  { id: 7, name: 'Torronto', short_name: 'YYZ' }
]
// const transports = ref([])
const newTransport = ref({ from: '', to: '', activity_type: '', cost: null, description: '' })

const addTransport = () => {
  transports.value.push({ ...newTransport.value })
  newTransport.value = { from: '', to: '', activity_type: '', cost: null }
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
const selectedGeneral = ref({
  time: '',
  to: '.',
  from: '.',
  description: '',
  type: 'General Activity'
})
const availableRoutes = ref([])
const getRoutes = () => {
  let t = 9
  for (let i = 3; i < 7; i++) {
    let rt = { ...airRoute.value }
    rt.transit = { id: 11, name: 'Istanbul', short_name: 'IST' }

    rt.date = moment(itinerary.value.date).format('ddd, DD MMM')
    if (rt.origin == 'Jeddah' || rt.origin == 'Medina') {
      rt.origin_time = `02:25`
      // rt.transit_time = `08:50`
      rt.destination_time = `08:50`
    } else {
      rt.origin_time = `21:25`
      // rt.transit_time = `21:00`
      rt.destination_time = `21:00`
    }
    availableRoutes.value.push(rt)
  }
  console.log(availableRoutes.value)
}
const transports = ref([
  {
    name: 'TAWFIQ',
    city: 'Medina',
    type: 'Bus',
    fare: 200
  },
  {
    name: 'TAWFIQ',
    city: 'Mecca',
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
  } else if (newTransport.value.to_type == 'Location') {
    console.log(locations.value)
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
    from: rt.destination.name,
    to: rt.destination.name,
    activity_type: 'Flight from',
    by: selectdAirline.value.name,
    description: airRoute.value.description
  }
  // let activity2 = {
  //   time: rt.transit_time,
  //   from: rt.transit.name,
  //   to: rt.destination.name,
  //   activity_type: 'Flight from',
  //   by: selectdAirline.value.name,
  //   description: airRoute.value.description
  // }
  itinerary.value.activities.push(activity1)
  // itinerary.value.activities.push(activity2)
  showActivity.value = false
  itinerary.value.type = null
  selectdAirline.value = null
  availableRoutes.value = []
}
const selectRouteNewActivity = async (rt, id) => {
  try {
    let activity1 = {
      itinerary_id: id,
      time: rt.origin_time,
      from: rt.origin.name,
      to: rt.destination.name,
      activity_type: 'Flight from',
      transportation_by: selectdAirline.value.name,
      description: airRoute.value.description
    }
    // let activity2 = {
    //   itinerary_id: id,
    //   time: rt.transit_time,
    //   from: rt.transit.name,
    //   to: rt.destination.name,
    //   activity_type: 'Flight from',
    //   transportation_by: selectdAirline.value.name,
    //   description: airRoute.value.description
    // }

    const { data } = await api().post('activity', activity1)
    if (data) {
    
        showForm.value = null
        getPackage()
      
    }
  } catch (error) {
    console.log(error)
  }
}
const selectTransport = (tr) => {
  console.log(tr, newTransport.value)

  let activity1 = {
    time: newTransport.value.time,
    from: newTransport.value.from,
    to: newTransport.value.to,
    description: newTransport.value.description,
    activity_type: `${newTransport.value.type} from `,
    by: tr.name
  }

  itinerary.value.activities.push(activity1)
  showActivity.value = false
  itinerary.value.type = null
  newTransport.value = { from: '', to: '', type: '', cost: null, description: '' }
  availableTransport.value = []
}
const selectTransportActivity = async (tr, id) => {
  let activity1 = {
    itinerary_id: id,
    time: newTransport.value.time,
    from: newTransport.value.from,
    to: newTransport.value.to,
    activity_type: `${newTransport.value.type} from `,
    transportation_by: tr.name
  }

  const { data } = await api().post('activity', activity1)
  if (data) {
    showForm.value = null
    getPackage()
  }
  newTransport.value = { from: '', to: '', type: '', cost: null }
  availableTransport.value = []
}
const saveHotel = () => {
  let activity1 = {
    time: selectedHotel.value.time,
    from: selectedHotel.value.name,
    to: null,
    activity_type: `Check-In at `,
    by: null
  }
  itinerary.value.activities.push(activity1)
  showActivity.value = false
  itinerary.value.type = null
  selectedHotel.value = { name: '', time: null }
}
const saveHotelActivity = async (id) => {
  saving.value = true
  let activity1 = {
    itinerary_id: id,
    time: selectedHotel.value.time,
    from: selectedHotel.value.name,
    to: null,
    activity_type: `Check-In at `,
    transportation_by: null
  }
  const { data } = await api().post('activity', activity1)
  if (data) {
    showForm.value = null
    getPackage()
  }
  selectedHotel.value = { name: '', time: null }
  saving.value = false
}
const saveActivity = () => {
  console.log(selectedGeneral.value)
  let activity1 = {
    time: selectedGeneral.value.time,
    from: null,
    to: null,
    activity_type: selectedGeneral.value.type,
    by: null,
    description: selectedGeneral.value.description
  }
  itinerary.value.activities.push(activity1)
  showActivity.value = false
  itinerary.value.type = null
  selectedGeneral.value = { description: '', time: null }
}
const saveActivityGeneral = async (id) => {
  saving.value = true
  let activity1 = {
    itinerary_id: id,
    time: selectedGeneral.value.time,
    from: null,
    to: null,
    activity_type: 'General Activity',
    transportation_by: null,
    description: selectedGeneral.value.description
  }
  const { data } = await api().post('activity', activity1)
  if (data) {
    showForm.value = null
    getPackage()
  }
  selectedGeneral.value = { description: '', time: null }
  saving.value = false
}

const totalTravelCost = computed(() => {
  return totalFare.value + totalTransport.value + totalHotel.value
})
const selectedHotel = ref({ name: null, time: null })
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
  itineraries: []
})
const showForm = ref(null)
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
      { id: 6, name: 'Jeddah', short_name: 'JED' },
      { id: 7, name: 'Torronto', short_name: 'YYZ' },
      { id: 8, name: 'Chicago', short_name: 'ORD' },
      { id: 11, name: 'Istanbul', short_name: 'IST' }
    ],
    transits: [{ id: 11, name: 'Istanbul', short_name: 'IST' }],
    destination: [
      { id: 11, name: 'Istanbul', short_name: 'IST' },
      { id: 1, name: 'Houston', short_name: 'IAH' },
      { id: 2, name: 'Texas', short_name: 'DFW' },
      { id: 4, name: 'New York', short_name: 'JFK' },
      { id: 10, name: 'Washington', short_name: 'IAD' },
      { id: 3, name: 'Medina', short_name: 'MED' },
      { id: 6, name: 'Jeddah', short_name: 'JED' },
      { id: 7, name: 'Torronto', short_name: 'YYZ' },
      { id: 8, name: 'Chicago', short_name: 'ORD' },

    ]
  }
])
const hotels = ref([
  { id: 1, name: 'Anwar Al Medinah Mövenpick Hotel', city: 'Medina' },
  { id: 11, name: 'Medina Intercontinental', city: 'Medina' },
  { id: 2, name: 'Dar Al Tawhid Intercontinental Makkah', city: 'Makkah' },
  { id: 3, name: 'Makkah Towers', city: 'Makkah' },
  { id: 4, name: 'Medinah Hilton', city: 'Medina' },
  { id: 5, name: 'Anjum Hotel Makkah', city: 'Makkah' },
  { id: 6, name: 'Le Meridien Medina', city: 'Medina' },
  { id: 7, name: 'Hyatt Regency Makkah Jabal Omar', city: 'Makkah' },
  { id: 8, name: 'Pullman Zamzam Medina', city: 'Medina' },
  { id: 9, name: 'Raffles Makkah Palace', city: 'Makkah' },
  { id: 10, name: 'Crowne Plaza Medinah', city: 'Medina' },
  { id: 10, name: 'Hotel Movenpick Makkah', city: 'Makkah' }
])
const locations = ref([
  { id: 1, name: 'Mecca', city: 'Mecca' },
  { id: 2, name: 'Masjid al-Haram', city: 'Mecca' },
  { id: 3, name: 'Safa and Marwa', city: 'Mecca' },
  { id: 4, name: 'Jabal Al Nour', city: 'Mecca' },
  { id: 5, name: 'Mina', city: 'Mecca' },
  { id: 6, name: 'Arafat', city: 'Mecca' },
  { id: 7, name: 'Muzdalifah', city: 'Mecca' },
  { id: 8, name: 'Masjid Al Nabawi', city: 'Medina' },
  { id: 9, name: 'Ziarat, Dates farm etc', city: 'Medina' },
  { id: 10, name: 'Ziarat', city: 'Medina' }
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
const years = Array.from({ length: 41 }, (_, i) => 2020 + i)
const EventFormApply = async () => {
  saving.value = true
  // formData.value.itineraries = itineraries.value
  // store.createNewPackage.push({ ...formData.value })
  // console.log('Form Data Submitted:', formData.value)

  // formData.value = {
  //   country: '',
  //   city: '',
  //   packageTitle: '',
  //   packageCode: '',
  //   packageYear: '',
  //   packageId: '',
  //   status: '',
  //   price: '',
  //   startDate: '',
  //   endDate: '',
  //   description: '',
  //   itineraries:[]
  // }
  let packageData = {
    country_id: formData.value.country.id,
    city_id: formData.value.city.id,
    airport_id: formData.value.airport.id,
    package_title: formData.value.packageTitle,
    package_year: formData.value.packageYear,
    package_code: formData.value.packageCode,
    package_id: formData.value.packageId,
    status_of_package: formData.value.status,
    price: formData.value.price,
    start_at: formData.value.startDate,
    end_at: formData.value.endDate,
    // image : null,
    description: formData.value.description,
    pax: formData.value.pax,
    agent_id: formData.value.agent_id,
    imam_id: formData.value.imam_id,
    support_manager_id: formData.value.support_manager_id
  }
  try {
    const data = await api().post('package', packageData)
    console.log(data)
    createdPackage.value = data.data.data
  } catch (error) {
    console.log(error)
  }
  saving.value = false
}
const getStatus = (status) => {
  const statuses = [
    { id: 1, name: 'Not In Plan' },
    { id: 2, name: 'In Plan' },
    { id: 3, name: 'In Preparation' },
    { id: 4, name: 'Fully Booked' },
    { id: 5, name: 'In Approval Process' },
    { id: 6, name: 'Approved' },
    { id: 7, name: 'Published' },
    { id: 8, name: 'Discontinued' }
  ]
  return statuses.find((s) => s.id == status)?.name || 'Unknown Status'
}
//Create API
const day = computed(() => {
  let d = 1
  if (createdPackage.value && createdPackage.value.itineraries.length > 0) {
    d = Math.max(...createdPackage.value.itineraries.map((itinerary) => itinerary.day)) + 1
  }
  return d
})
const addDay = async () => {
  // day.value++
  const data = await api().post('itinerary', {
    package_id: createdPackage.value.id,
    day: day.value,
    date: moment(createdPackage.value.start_at).add('days', day).format('dd-mm-yyyy')
  })
  itinerary.value = data.data
  showItiniraryForm.value = true
}
const saveItineray = async () => {
  console.log(itinerary.value)
  const { data } = await api().post('itinerary', {
    day: day.value,
    package_id: createdPackage.value.id,
    date: moment(itinerary.value.date).format('YYYY-MM-DD')
  })
  if (data) {
    console.log(data.data)
    for (let i = 0; i < itinerary.value.activities.length; i++) {
      const activity = itinerary.value.activities[i]
      const d = await api().post('activity', {
        itinerary_id: data.data.id,
        activity_type: activity.activity_type,
        time: activity.time,
        from: activity.from,
        to: activity.to,
        type: activity.type,
        transportation_by: activity.by,
        description: activity.description
      })
    }
  }
  itinerary.value = {
    activities: [],
    type: null,
    date: moment(itinerary.value.date).add(1, 'days').format('YYYY-MM-DD')
  }
  showItiniraryForm.value = false
  getPackage()
}

//GET API Call

const getCountries = async () => {
  try {
    const { data } = await api().get('country')
    console.log(data)
    countries.value = data.data
  } catch (error) {
    console.log(error)
  }
}
const getImams = async () => {
  try {
    const { data } = await api().get('imam')
    console.log(data)
    imams.value = data.data
  } catch (error) {
    console.log(error)
  }
}
const getAgents = async () => {
  try {
    const { data } = await api().get('agents')
    console.log(data)
    agents.value = data.data
  } catch (error) {
    console.log(error)
  }
}
const getSupports = async () => {
  try {
    const { data } = await api().get('support-manager')
    console.log(data)
    support_managers.value = data.data
  } catch (error) {
    console.log(error)
  }
}
const getPackage = async () => {
  const { data } = await api().get('package/' + route.params.id)
  createdPackage.value = data.data
}
onMounted(() => {
  getCountries()
  getImams()
  getSupports()
  getAgents()
  getPackage()
})
</script>
