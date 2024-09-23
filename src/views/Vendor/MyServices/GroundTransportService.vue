<template>
  <section class="w-full p-10 bg-gray-100">
      <p class="text-3xl font-bold pb-10 font-mono text-blue-600">Add Ground Transport Service</p>
      <div class="px-12">
          <form class="bg-white shadow-md rounded-lg p-6">
              <!-- Transport Type -->
              <div class="mb-6">
                  <label for="transportType" class="block text-lg font-semibold text-gray-700">Transport Type</label>
                  <select id="transportType" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300">
                      <option value="bus">Bus</option>
                      <option value="van">Van</option>
                      <option value="privateCar">Private Car</option>
                      <option value="suv">SUV</option>
                      <option value="shuttle">Shuttle</option>
                  </select>
              </div>

              <!-- Vehicle Capacity -->
              <div class="mb-6">
                  <label for="capacity" class="block text-lg font-semibold text-gray-700">Vehicle Capacity</label>
                  <input type="number" id="capacity" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" placeholder="Enter number of passengers" />
              </div>

              <!-- Pick-up Location -->
              <div class="mb-6">
                  <label for="pickupLocation" class="block text-lg font-semibold text-gray-700">Pick-up Location</label>
                  <input type="text" id="pickupLocation" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" placeholder="Enter pick-up location (e.g., Jeddah Airport)" />
              </div>

              <!-- Drop-off Location -->
              <div class="mb-6">
                  <label for="dropoffLocation" class="block text-lg font-semibold text-gray-700">Drop-off Location</label>
                  <input type="text" id="dropoffLocation" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" placeholder="Enter drop-off location (e.g., Mecca, Medina)" />
              </div>

              <!-- Price per Trip -->
              <div class="mb-6">
                  <label for="pricePerTrip" class="block text-lg font-semibold text-gray-700">Price per Trip</label>
                  <input type="text" id="pricePerTrip" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" placeholder="Enter price per trip" />
              </div>

              <!-- Available Dates -->
              <div class="mb-6">
                  <label for="availableDates" class="block text-lg font-semibold text-gray-700">Available Dates</label>
                  <input type="date" id="availableDates" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" />
              </div>

              <!-- Additional Services -->
              <div class="mb-6">
                  <label for="additionalServices" class="block text-lg font-semibold text-gray-700">Additional Services</label>
                  <textarea id="additionalServices" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" rows="4" placeholder="Add any additional services (e.g., WiFi, Refreshments, etc.)"></textarea>
              </div>

              <!-- Submit Button -->
              <div class="flex justify-end">
                  <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg">
                      Add Transport Service
                  </button>
              </div>
          </form>
      </div>
  </section>
</template>

<style scoped>
/* Optional styling for the form */
form {
  max-width: 600px;
  margin: 0 auto;
}
</style>
