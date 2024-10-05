<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <div class="flex justify-between items-center py-3">
      <p class="text-2xl font-bold py-3 border-b">Umrah Package Status Update</p>
      <button @click="$router.go(-1)" class="btn btn-primary text-white flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg> Back</button>
    </div>
    <div class="bg-slate-50 py-1">
      <div
        class="relative h-auto w-full text-white bg-sky-600 rounded-b-lg shadow-xl overflow-hidden"
      >
        <!-- <img src="/src/assets/image/hajj/hajj-3.webp" alt="Package Cover" class="h-full w-full object-cover" /> -->
        <div class="bottom-0 left-0 w-full py-6 px-8">
          <p class="text-5xl font-extrabold tracking-wide drop-shadow-md">
            {{ packageDetails?.package_title }}
          </p>
          <p class="text-2xl font-semibold mt-1">{{ packageDetails?.code }}</p>
          <p class="text-lg mt-2">
            {{ moment(packageDetails?.start_at).format('MMM Do YY') }} -
            {{ moment(packageDetails?.end_at).format('MMM Do YY') }}
          </p>
          <p class="text-lg mt-2">{{ packageDetails?.package_id }}</p>
        </div>
      </div>

      <!-- <div v-if="packageDetails" class="pt-10">
        <ul class="steps w-full steps-vertical lg:steps-horizontal lg:w-full  mb-10">
          <li v-for="(status, index) in statuses" :key="index" class="flex-1 text-center"
            :class="{ 'step step-success': isChecked(status.name), 'step': true }">

            <div class="text-lg font-semibold">{{ status.name }}</div>

            <div class="text-sm  text-gray-500 mt-1">
              <p v-if="status.name === 'Date'"
                :class="{ 'text-green-500 text-base font-semibold': isChecked(status.name) }">
                {{ packageDetails.start_at }}
              </p>
              <p v-if="status.name === 'Imam'"
                :class="{ 'text-green-500 text-base font-semibold': isChecked(status.name) }">
                {{ packageDetails.imam.name }}
              </p>
              <p v-if="status.name === 'Agent'"
                :class="{ 'text-green-500 text-base font-semibold': isChecked(status.name) }">
                {{ packageDetails.agent.name }}
              </p>
              <p v-if="status.name === 'Flight'"
                :class="{ 'text-green-500 text-base font-semibold': isChecked(status.name) }">
                Turkish Airlines
              </p>
              <p v-if="status.name === 'Bus'"
                :class="{ 'text-green-500 text-base font-semibold': isChecked(status.name) }">
                Green Line Bus
              </p>
              <p v-if="status.name === 'Hotel'"
                :class="{ 'text-green-500 text-base font-semibold': isChecked(status.name) }">
                Mövenpick Hotel
              </p>

              <div class="mt-2 space-y-3">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-sm ps-1">Note</span>
                  </label>
                  <input type="text" placeholder="Add a note" class="input input-bordered w-32 lg:w-48 input-sm" />
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-sm ps-1">Attachment</span>
                  </label>
                  <input type="file" class="file-input file-input-bordered w-32 lg:w-48 file-input-sm" />
                </div>

                <div class="form-control">
                  <label class="cursor-pointer flex justify-start gap-4 label">
                    <input type="checkbox" v-model="checkedStatus[status.name]" :disabled="index > currentCheckboxIndex"
                      @change="handleCheckboxChange(index)" class="checkbox checkbox-primary checkbox-sm" />
                    <span class="label-text text-sm">{{ checkedStatus[status.name] ? 'Is Approved' : 'Is Approve'
                      }}</span>
                  </label>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div> -->

      <div class="flex w-full justify-between mt-5 border-t-2 border-x-2 border-teal-600">
        <button
          @click="currentTab = 'date'"
          class="py-3 px-5 border-e border-white font-semibold w-full text-xl"
          :class="currentTab == 'date' ? 'bg-white text-teal-700' : 'bg-teal-600 text-white'"
        >
          Date
        </button>
        <button
          @click="currentTab = 'imam'"
          class="py-3 px-5 border-e border-white font-semibold w-full text-xl"
          :class="currentTab == 'imam' ? 'bg-white text-teal-700' : 'bg-teal-600 text-white'"
        >
          Imam
        </button>
        <button
          @click="currentTab = 'agent'"
          class="py-3 px-5 border-e border-white font-semibold w-full text-xl"
          :class="currentTab == 'agent' ? 'bg-white text-teal-700' : 'bg-teal-600 text-white'"
        >
          Agent
        </button>
        <button
          @click="currentTab = 'flight'"
          class="py-3 px-5 border-e border-white font-semibold w-full text-xl"
          :class="currentTab == 'flight' ? 'bg-white text-teal-700' : 'bg-teal-600 text-white'"
        >
          Flight
        </button>
        <button
          @click="currentTab = 'bus'"
          class="py-3 px-5 border-e border-white font-semibold w-full text-xl"
          :class="currentTab == 'bus' ? 'bg-white text-teal-700' : 'bg-teal-600 text-white'"
        >
          Bus
        </button>
        <button
          @click="currentTab = 'hotel'"
          class="py-3 px-5 border-e border-white font-semibold w-full text-xl"
          :class="currentTab == 'hotel' ? 'bg-white text-teal-700' : 'bg-teal-600 text-white'"
        >
          Hotel
        </button>
        <button
          @click="currentTab = 'fr'"
          class="py-3 px-5 border-e border-white w-full font-semibold text-xl"
          :class="currentTab == 'fr' ? 'bg-white text-teal-700' : 'bg-teal-600 text-white'"
        >
          Final Review
        </button>
      </div>
      <div v-if="currentTab == 'date'" class="bg-white border-x-2 border-teal-700 border-b-2">
        <h1 class="text-2xl py-3 font-semibold flex w-full items-center justify-center">
          Approve Package Start and Ending Date
        </h1>
        <div class="px-10">
          <div class="flex items-center my-5 justify-center" v-if="packageDetails">
            <h1 class="w-full px-5">Start Date :</h1>
            <input
              v-model="packageDetails.start_at"
              type="date"
              class="input input-bordered w-full"
            />
          </div>
          <div class="flex items-center my-5 justify-center" v-if="packageDetails">
            <h1 class="w-full px-5">End Date :</h1>
            <input
              v-model="packageDetails.end_at"
              type="date"
              class="input input-bordered w-full"
            />
          </div>

          <div class="flex justify-end items-center py-2">
            <button
              @click="updatePackageData()"
              class="btn btn-success text-white"
              :disabled="updating"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                v-if="updating"
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
              Update Date
            </button>
          </div>
        </div>

        <div class="border-t-2 border-teal-600 p-5">
          <div class="flex justify-start gap-5 items-center w-full py-2 px-5" v-if="packageDetails">
            <h1 class="w-full px-5">Date Approval Status :</h1>

            <select
              v-model="packageDetails.package_status.date_approve"
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
          <!-- <div class="flex justify-start gap-5 items-center w-full py-2 px-5" v-if="packageDetails">
            <div class="justify-between items-center w-full flex">
              <label class="label px-5 w-full"> Note : </label>
              <input
                v-model="packageDetails.package_status.date_note"
                type="text"
                placeholder="Add a note"
                class="input input-bordered w-full input-sm"
              />
            </div>
          </div> -->
        </div>
      </div>
      <div v-if="currentTab == 'imam'" class="bg-white border-x-2 border-teal-700 border-b-2">
        <h1 class="text-2xl py-3 font-semibold flex w-full items-center justify-center">
          Approve Package Imam
        </h1>
        <div class="px-10">
          <div class="flex gap-8 items-center my-5 justify-center" v-if="packageDetails">
            <h1 class="w-1/2 px-5">Current Imam :</h1>
            <h1 class="w-3/4 px-5">{{ packageDetails.imam.user.name }}</h1>
          </div>
          <div class="flex items-center gap-5 my-5 justify-center" v-if="packageDetails">
            <h1 class="w-full px-5">Change Imam:</h1>
            <select v-model="packageDetails.imam.id" class="select select-bordered w-full">
              <option disabled selected>Select Imam Name</option>
              <option :value="imam.id" v-for="imam in imams">{{ imam.user.name }}</option>
            </select>
            <button
              @click="updatePackageData()"
              class="btn btn-success text-white"
              :disabled="updating"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                v-if="updating"
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
              Update Imam
            </button>
          </div>
        </div>
        <div class="border-t-2 border-teal-600 p-5">
          <div class="flex justify-start gap-5 items-center w-full py-2 px-5" v-if="packageDetails">
            <h1 class="w-full px-5">Imam Approval Status :</h1>

            <select
              v-model="packageDetails.package_status.imam_approve" 
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
          <!-- <div class="flex justify-start gap-5 items-center w-full py-2 px-5" v-if="packageDetails">
            <div class="justify-between items-center w-full flex">
              <label class="label px-5 w-full"> Note : </label>
              <input
                v-model="packageDetails.package_status.imam_note"
                type="text"
                placeholder="Add a note"
                class="input input-bordered w-full input-sm"
              />
            </div>
          </div> -->
        </div>
      </div>
      <div v-if="currentTab == 'agent'" class="bg-white border-x-2 border-teal-700 border-b-2">
        <h1 class="text-2xl py-3 font-semibold flex w-full items-center justify-center">
          Approve Package Agent
        </h1>
        <div class="px-10">
          <div class="flex gap-8 items-center my-5 justify-center" v-if="packageDetails">
            <h1 class="w-1/2 px-5">Current Agent :</h1>
            <h1 class="w-3/4 px-5">{{ packageDetails.agent.user.name }}</h1>
          </div>
          <div class="flex items-center gap-5 my-5 justify-center" v-if="packageDetails">
            <h1 class="w-full px-5">Change Agent:</h1>
            <select v-model="packageDetails.agent.id" class="select select-bordered w-full">
              <option disabled selected>Select Agent Name</option>
              <option :value="agent.id" v-for="agent in agents">{{ agent.user.name }}</option>
            </select>
            <button
              @click="updatePackageData()"
              class="btn btn-success text-white"
              :disabled="updating"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                v-if="updating"
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
              Update Agent
            </button>
          </div>
        </div>
        <div class="border-t-2 border-teal-600 p-5">
          <div class="flex justify-start gap-5 items-center w-full py-2 px-5" v-if="packageDetails">
            <h1 class="w-full px-5">Agent Approval Status :</h1>

            <select
              v-model="packageDetails.package_status.agent_approve"
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
          <!-- <div class="flex justify-start gap-5 items-center w-full py-2 px-5" v-if="packageDetails">
            <div class="justify-between items-center w-full flex">
              <label class="label px-5 w-full"> Note : </label>
              <input
                v-model="packageDetails.package_status.agent_note"
                type="text"
                placeholder="Add a note"
                class="input input-bordered w-full input-sm"
              />
            </div>
          </div> -->
        </div>
      </div>

      <div
        v-if="currentTab == 'flight'"
        class="bg-white border-x-2 border-teal-700 border-b-2 px-2"
      >
        <h1 class="text-2xl py-3 font-semibold flex w-full items-center justify-center">
          Approve Package Flights
        </h1>
        <!-- <div class="flex justify-end items-center py-3 px-5">
          <button @click="showAirForm = !showAirForm" class="btn btn-success text-white">
            Add New Flight Details
          </button>
        </div> -->
        <div>
          <div class="px-10" v-if="showAirForm">
            <form class="space-y-4" @submit.prevent="saveFligt">
              <div class="flex items-center justify-between">
                <label for="airline" class="w-1/3">Airline:</label>
                <select
                  id="airline"
                  v-model="flightData.airline"
                  class="select select-bordered w-2/3"
                >
                  <option disabled selected>Select Airline</option>
                  <option v-for="airline in airlines" :key="airline.id" :value="airline">
                    {{ airline.name }}
                  </option>
                </select>
              </div>
              <div class="flex items-center justify-between">
                <label for="airroute" class="w-1/3">Air Route:</label>
                <select
                  id="airroute"
                  v-model="flightData.airroute_id"
                  class="select select-bordered w-2/3"
                >
                  <option disabled selected>Select Air Route</option>
                  <option
                    v-if="flightData.airline"
                    v-for="route in flightData.airline.routes"
                    :key="route.id"
                    :value="route.id"
                  >
                    {{ route.origin_airport.short_name }} - {{ route.transit_airport.short_name }}-
                    {{ route.destination_airport.short_name }}
                  </option>
                </select>
              </div>
              <div class="flex justify-center items-center mt-4">
                <button type="submit" class="btn btn-success text-white">Save Flight</button>
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
                  <th>Transit</th>
                  <th>Destination</th>
                  <th>Departure Date</th>
                  <th>Return Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="flight in package_flights" :key="flight.id">
                  <td>
                    {{ flight.airroute.flight_number ? flight.airroute.flight_number : 'F1G56' }}
                  </td>
                  <td>{{ flight.airroute.origin_airport.short_name }}</td>
                  <td>{{ flight.airroute.transit_airport.short_name }}</td>
                  <td>{{ flight.airroute.destination_airport.short_name }}</td>

                  <td>{{ packageDetails.start_at }}</td>
                  <td>{{ packageDetails.end_at }}</td>
                  <td>{{ flight.status == 1 ? 'Confirmed' : 'Pending' }}</td>
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
            <!-- <div
              class="flex justify-start gap-5 items-center w-full py-2 px-5"
              v-if="packageDetails"
            >
              <div class="justify-between items-center w-full flex">
                <label class="label px-5 w-full"> Note : </label>
                <input
                  v-model="packageDetails.package_status.flight_note"
                  type="text"
                  placeholder="Add a note"
                  class="input input-bordered w-full input-sm"
                />
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <div v-if="currentTab == 'bus'" class="bg-white border-x-2 border-teal-700 border-b-2">
        <h1 class="text-2xl py-3 font-semibold flex w-full items-center justify-center">
          Approve Package Buses
        </h1>
        <div class="flex justify-end items-center py-3 px-5">
          <button @click="showBusForm = !showBusForm" class="btn btn-success text-white">
            Add New Bus Details
          </button>
        </div>
        <div>
          <div class="px-10" v-if="showBusForm">
            <form class="space-y-4" @submit.prevent="saveBus">
              <div class="flex items-center justify-between">
                <label for="busOperator" class="w-1/3">Bus Operator:</label>
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
        <div class="px-10">
          <div class="overflow-x-auto py-5">
            <table class="table w-full bg-gray-200">
              <thead>
                <tr>
                  <th>Bus Number</th>
                  <th>Departure</th>
                  <th>Departure Timing</th>
                  <th>Destination</th>
                  <!-- <th>Departure Date</th>
                  <th>Return Date</th> -->
                  <th>Arrival Timing</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="bus in package_transportations" :key="bus.id">
                  <td>{{ bus.bus_route.bus_number }}</td>
                  <td>{{ bus.bus_route.departure_from }}</td>
                  <td>{{ bus.bus_route.departure_time }}</td>
                  <td>{{ bus.bus_route.departure_to }}</td>
                  <!-- <td>{{ bus.bus_route.departure_date }}</td>
                  <td>{{ bus.bus_route.return_date }}</td> -->
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
      <div v-if="currentTab == 'hotel'" class="bg-white border-x-2 border-teal-700 border-b-2">
        <h1 class="text-2xl py-3 font-semibold flex w-full items-center justify-center">
          Approve Package Hotels
        </h1>
        <div class="flex justify-end items-center py-3 px-5">
          <button @click="showHotelForm = !showHotelForm" class="btn btn-success text-white">
            Add New Hotel Details
          </button>
        </div>
        <div class="px-10 py-5">
          <form
            @submit.prevent="addHotelData"
            v-if="showHotelForm"
            class="px-2 py-3 bg-gray-200 rounded-md"
          >
            <div class="flex flex-col gap-4">
              <div class="flex gap-4 w-full">
                <div class="flex flex-col w-full">
                  <label for="hotel_id" class="font-medium text-gray-700">Select Hotel</label>
                  <select
                    id="hotel_id"
                    name="hotel_id"
                    v-model="hotelData.hotel_id"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 p-3 focus:ring-opacity-50"
                    required
                  >
                    <option v-for="hotel in hotels" :key="hotel.id" :value="hotel.id">
                      {{ hotel.name }}
                    </option>
                  </select>
                </div>
                <div class="flex flex-col w-full">
                  <label for="checkin_date" class="font-medium text-gray-700">Check-in Date</label>
                  <input
                    type="date"
                    id="checkin_date"
                    name="checkin_date"
                    v-model="hotelData.checkin_date"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 p-3 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div class="flex flex-col w-full">
                  <label for="checkout_date" class="font-medium text-gray-700"
                    >Check-out Date</label
                  >
                  <input
                    type="date"
                    id="checkout_date"
                    name="checkout_date"
                    v-model="hotelData.checkout_date"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 p-3 focus:ring-opacity-50"
                    required
                  />
                </div>
              </div>
              <div class="flex gap-4 mt-4 w-full">
                <div class="flex flex-col w-full">
                  <label for="two_bed" class="font-medium text-gray-700"
                    >Number of Double Bed Room
                  </label>
                  <input
                    type="number"
                    id="two_bed"
                    name="two_bed"
                    v-model="hotelData.two_bed"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 p-3 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div class="flex flex-col w-full">
                  <label for="three_bed" class="font-medium text-gray-700"
                    >Number of Triple Bed Room</label
                  >
                  <input
                    type="number"
                    id="three_bed"
                    name="three_bed"
                    v-model="hotelData.three_bed"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div class="flex flex-col w-full">
                  <label for="four_bed" class="font-medium text-gray-700"
                    >Number of Quad Bed Room</label
                  >
                  <input
                    type="number"
                    id="four_bed"
                    name="four_bed"
                    v-model="hotelData.four_bed"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="mt-4">
              <button
                type="submit"
                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
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
            <div
              class="flex justify-start gap-5 items-center w-full py-2 px-5"
              v-if="packageDetails"
            >
              <h1 class="w-full px-5">Hotel Approval Status :</h1>

              <select
                v-model="packageDetails.package_status.hotel_approve"
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
      <div v-if="currentTab == 'fr'" class="bg-white border-x-2 border-teal-700 border-b-2">
        <h1 class="text-2xl py-3 font-semibold flex w-full items-center justify-center">
          Approve Umrah Package Final Review
        </h1>
        <div class="p-5">
          <div class="overflow-x-auto">
            <table class="table-auto w-full  shadow-md rounded-lg border-collapse border border-gray-300 ">
              <thead class="bg-gradient-to-r from-teal-600 to-blue-500 text-white rounded-lg">
                <tr class="rounded-lg">
                  <th class="px-4 py-3 border border-gray-300 text-center">Date</th>
                  <th class="px-4 py-3 border border-gray-300 text-center">Day</th>
                  <th class="px-4 py-3 border border-gray-300 text-center">Time</th>
                  <th class="px-4 py-3 border border-gray-300 text-center">Activity Type</th>
                  <th class="px-4 py-3 border border-gray-300 text-center">From</th>
                  <th class="px-4 py-3 border border-gray-300 text-center">To</th>
                  <th class="px-4 py-3 border border-gray-300 text-center">Vendor</th>
                  <th class="px-4 py-3 border border-gray-300 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(itinerary, index) in packageDetails.itineraries" :key="itinerary.id">
                  <tr class="bg-gray-100 hover:bg-white transition duration-200" v-for="activity in itinerary.activities" :key="activity.id">
                    <td class="px-4 py-3 border border-gray-300 text-center">
                      <p>{{ moment(itinerary.date, 'DD-MM-YYYY').format('dddd, DD MMM YYYY') }}</p>
                    </td>
                    <td class="px-4 py-3 border border-gray-300 text-center">{{ 'Day ' + (index + 1) }}</td>
                    <td class="px-4 py-3 border border-gray-300 text-center">{{ activity.time }}</td>
                    <td class="px-4 py-3 border border-gray-300 text-center">{{ activity.activity_type }}</td>
                    <td class="px-4 py-3 border border-gray-300 text-center">{{ activity.from }}</td>
                    <td class="px-4 py-3 border border-gray-300 text-center">{{ activity.to }}</td>
                    <td class="px-4 py-3 border border-gray-300 text-center">{{ activity.transportation_by }}</td>
                    <td class="px-4 py-3 border border-gray-300 text-center">{{ activity.description }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        
          <div class="border-t-4 border-teal-600 p-5 mt-5 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg">
            <div class="flex justify-start gap-5 items-center w-full py-2 px-5">
              <h1 class="w-full font-semibold text-lg text-gray-700">Final Approval Status:</h1>
              <select v-model="packageDetails.package_status.flight_approve" class="select select-bordered w-1/2">
                <option disabled selected>Select Status</option>
                <option value="0">1. In Preparation</option>
                <option value="1">1a. In Preparation -Started</option>
                <option value="1">1b. In Preparation -In Work</option>
                <option value="1">1c. In Preparation -Completed</option>
                <option value="1">2. Quotation</option>
                <option value="1">2a. Quotation -Requested</option>
                <option value="1">2b. Quotation -Received</option>
                <option value="1">2c. Quotation -Approved</option>
                <option value="1">3. Contract</option>
                <option value="1">3a. Contract -Requested</option>
                <option value="1">3b. Contract -Received</option>
                <option value="1">3c. Contract -Signed</option>
                <option value="1">3d. Contract -Fund Deposited</option>
                <option value="1">4. Approved</option>
                <option value="1">4a. Approved -Started</option>
                <option value="1">4b. Approved -In Work</option>
                <option value="1">4c. Approved -Completed</option>
              </select>
              <button
                @click="updatePackageStatus"
                class="btn btn-info text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                :disabled="applying"
              >
                <svg xmlns="http://www.w3.org/2000/svg" v-if="applying" class="animate-spin mr-2" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"></path>
                </svg>
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from 'moment'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const currentTab = ref('date')
const route = useRoute()
const packageID = route.params.id
const packageDetails = ref()
const checkedStatus = ref({}) // Track checkbox states
const currentCheckboxIndex = ref(0) // Track the index of the currently enabled checkbox
const updating = ref(false)
const applying = ref(false)
const showAirForm = ref(false)
const showHotelForm = ref(false)
const flightData = ref({
  airline: null,
  airroute_id: null,
  package_id: null
})
const hotelData = ref({
  checkin_date: null,
  checkout_date: null,
  hotel_id: null,
  package_id: null,
  two_bed: null,
  three_bed: null,
  four_bed: null
})
const showBusForm = ref(false)
const busData = ref({
  busOperator: null,
  busRoute: null,
  package_id: null
})
const flights = ref([
  {
    id: 1,
    flight_number: 'UA123',
    departure: 'New York',
    destination: 'Jeddah',
    departure_date: '2023-02-01',
    return_date: '2023-02-15',
    status: 'pending'
  },
  {
    id: 2,
    flight_number: 'UA124',
    departure: 'Jeddah',
    destination: 'New York',
    departure_date: '2023-02-15',
    return_date: '2023-02-29',
    status: 'pending'
  }
])

const package_flights = ref([])
const package_hotels = ref([])
const package_transportations = ref([])
const getPackage = async () => {
  showAirForm.value = false
  showBusForm.value = false
  showHotelForm.value = false
  const { data } = await api().get('package/' + packageID)
  packageDetails.value = data.data
  package_flights.value = data.package_flights
  package_hotels.value = data.package_hotels
  package_transportations.value = data.package_transportations
  updating.value = false
  applying.value = false
}

const statuses = [
  { id: 1, name: 'Date' },
  { id: 2, name: 'Imam' },
  { id: 3, name: 'Agent' },
  { id: 4, name: 'Flight' },
  { id: 5, name: 'Bus' },
  { id: 6, name: 'Hotel' },
  { id: 7, name: 'Final Review' }
]

// Function to handle checkbox changes
const handleCheckboxChange = (index) => {
  // If the checkbox is checked, move to the next checkbox
  // if (packageDetails.value.statuses[index].name]) {
  //   currentCheckboxIndex.value = index + 1; // Enable the next checkbox
  // }
}

// Function to check if the status is checked
const isChecked = (statusName) => {
  return checkedStatus.value[statusName] || false
}
const imams = ref([])
const agents = ref([])
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
const airlines = ref([])
const hotels = ref([])
const buses = ref([])
const getAirlines = async () => {
  const { data } = await api().get('airline')
  airlines.value = data.data
}
const getBusRoutes = async () => {
  const { data } = await api().get('package-transport-vendors')
  buses.value = data.data
}
const getHotels = async () => {
  const { data } = await api().get('hotels')
  hotels.value = data.data
}
const saveFligt = async () => {
  const data = await api().post('package-flights', {
    package_id: packageDetails.value.id,
    airroute_id: flightData.value.airroute_id
  })
  getPackage()
}
const saveBus = async () => {
  const data = await api().post('package-transports', {
    package_id: packageDetails.value.id,
    bus_route_id: busData.value.busRoute
  })
  getPackage()
}
const addHotelData = async () => {
  hotelData.value.package_id = packageDetails.value.id
  console.log(hotelData.value)
  const data = await api().post('package-hotels', hotelData.value)
  getPackage()
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
const updatePackageData = async () => {
  updating.value = true
  try {
    packageDetails.value._method = 'PUT'
    packageDetails.value.country_id = packageDetails.value.country.id
    packageDetails.value.city_id = packageDetails.value.city.id
    packageDetails.value.airport_id = packageDetails.value.airport.id

    packageDetails.value.imam_id = packageDetails.value.imam.id
    packageDetails.value.agent_id = packageDetails.value.agent.id
    packageDetails.value.support_manager_id = packageDetails.value.support_manager.id
    const data = await api().post('package/' + packageDetails.value.id, packageDetails.value)
    if (data) {
      getPackage()
    }
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  getPackage()
  getAgents()
  getImams()
  getAirlines()
  getBusRoutes()
  getHotels()
})
</script>
