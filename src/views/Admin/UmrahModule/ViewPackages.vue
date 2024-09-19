<template>
  <div class="px-5 bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50 py-5 w-full">
    <div class="container mx-auto my-8">
      <!-- Umrah Packages Header -->
      <div class="text-center pb-6 border-b-4 border-gray-300 mb-12">
        <p class="text-5xl font-bold text-[#286d71] tracking-tight">Umrah Packages</p>
        <p class="text-xl text-gray-600 mt-3">Find your perfect Umrah experience</p>
      </div>

      <!-- Packages Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        <div
          v-for="(pkg, index) in packages"
          :key="index"
          class="relative flex flex-col justify-between bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-gray-400 border border-gray-200"
        >
          <div>
            <!-- Package Image -->
            <div class="relative h-64 w-full overflow-hidden rounded-t-xl">
              <img :src="pkg.img" alt="Package Image" class="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </div>

            <!-- Package Details -->
            <div class="p-6 space-y-2">
              <h6 class="text-3xl text-[#1f565b] font-bold">
                {{ pkg.title }}
              </h6>
              <p class="text-lg text-gray-700 font-semibold">Package ID: {{ pkg.pkgId }}</p>
              <p class="text-lg text-gray-700 font-semibold">Country: {{ pkg.country }}</p>
              <p class="text-lg text-gray-600">City: {{ pkg.city }}</p>
              <p class="text-md text-gray-500">Start: {{ pkg.startDate }} | End: {{ pkg.endDate }}</p>
              <p class="text-gray-600 font-light leading-relaxed">
                {{ pkg.description }}
              </p>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex justify-between px-6 pb-6">
            <router-link :to="{ path: 'package_details/' }">
              <button class="bg-[#286d71] hover:bg-[#1f565b] text-white py-2 px-6 rounded-lg shadow-md transition-all duration-300">
                See Details
              </button>
            </router-link>
            <button
              class="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg shadow-md transition-all duration-300"
              @click="deletePackage(pkg.packageId)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { packages } from '@/stores/itinenary.ts'

const deletePackage = (packageId) => {
  alert(`Package ${packageId} deleted!`)
}
</script>
