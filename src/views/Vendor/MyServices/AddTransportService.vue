<template>
  <section class="w-full p-10 bg-gray-100">
      <p class="text-3xl font-bold pb-10 font-mono text-blue-600">Add Transport Service</p>
      <div class="px-12">
          <form class="bg-white shadow-md rounded-lg p-6">
              <!-- Service Name -->
              <div class="mb-6">
                  <label for="serviceName" class="block text-lg font-semibold text-gray-700">Service Name</label>
                  <input type="text" id="serviceName" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" placeholder="Enter transport service name" />
              </div>

              <!-- Vehicle Type -->
              <div class="mb-6">
                  <label for="vehicleType" class="block text-lg font-semibold text-gray-700">Vehicle Type</label>
                  <select id="vehicleType" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300">
                      <option value="bus">Bus</option>
                      <option value="van">Van</option>
                      <option value="car">Car</option>
                      <option value="limousine">Limousine</option>
                  </select>
              </div>

              <!-- Number of Seats -->
              <div class="mb-6">
                  <label for="seats" class="block text-lg font-semibold text-gray-700">Number of Seats</label>
                  <input type="number" id="seats" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" placeholder="Enter total number of seats" />
              </div>

              <!-- Price per Day -->
              <div class="mb-6">
                  <label for="price" class="block text-lg font-semibold text-gray-700">Price per Day</label>
                  <input type="text" id="price" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" placeholder="Enter price per day" />
              </div>

              <!-- Available Dates -->
              <div class="mb-6">
                  <label for="availableDates" class="block text-lg font-semibold text-gray-700">Available Dates</label>
                  <input type="date" id="availableDates" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" />
              </div>

              <!-- Vehicle Description -->
              <div class="mb-6">
                  <label for="description" class="block text-lg font-semibold text-gray-700">Vehicle Description</label>
                  <textarea id="description" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" rows="4" placeholder="Describe the vehicle, amenities, etc."></textarea>
              </div>

              <!-- Submit Button -->
              <div class="flex justify-end">
                  <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg">
                      Add Service
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
