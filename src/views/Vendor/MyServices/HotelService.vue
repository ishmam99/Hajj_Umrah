<template>
  <section class="w-full p-10 bg-gray-100">
      <p class="text-3xl font-bold pb-10 font-mono text-blue-600">Add Hotel Service</p>
      <div class="px-12">
          <form class="bg-white shadow-md rounded-lg p-6">
              <!-- Hotel Name -->
              <div class="mb-6">
                  <label for="hotelName" class="block text-lg font-semibold text-gray-700">Hotel Name</label>
                  <input type="text" id="hotelName" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" placeholder="Enter hotel name" />
              </div>

              <!-- Location -->
              <div class="mb-6">
                  <label for="location" class="block text-lg font-semibold text-gray-700">Location</label>
                  <input type="text" id="location" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" placeholder="Enter location (e.g., Mecca, Medina)" />
              </div>

              <!-- Room Type -->
              <div class="mb-6">
                  <label for="roomType" class="block text-lg font-semibold text-gray-700">Room Type</label>
                  <select id="roomType" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300">
                      <option value="single">Single Room</option>
                      <option value="double">Double Room</option>
                      <option value="suite">Suite</option>
                      <option value="family">Family Room</option>
                  </select>
              </div>

              <!-- Price per Night -->
              <div class="mb-6">
                  <label for="price" class="block text-lg font-semibold text-gray-700">Price per Night</label>
                  <input type="text" id="price" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" placeholder="Enter price per night" />
              </div>

              <!-- Available Dates -->
              <div class="mb-6">
                  <label for="availableDates" class="block text-lg font-semibold text-gray-700">Available Dates</label>
                  <input type="date" id="availableDates" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" />
              </div>

              <!-- Amenities -->
              <div class="mb-6">
                  <label for="amenities" class="block text-lg font-semibold text-gray-700">Amenities</label>
                  <textarea id="amenities" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" rows="4" placeholder="List amenities (e.g., WiFi, Breakfast, etc.)"></textarea>
              </div>

              <!-- Submit Button -->
              <div class="flex justify-end">
                  <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg">
                      Add Hotel Service
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
