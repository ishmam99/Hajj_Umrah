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
                  <option value="USA">USA</option>
                  <option value="BD">BD</option>
                </select>
              </div>
              <div class="w-1/2">
                <div class="label">
                  <span class="label-text">City</span>
                </div>
                <select v-model="formData.city" class="select select-bordered w-full">
                  <option disabled selected>Select a City</option>
                  <option value="New York">New York</option>
                  <option value="Dhaka">Dhaka</option>
                </select>
              </div>
            </div>
  
            <!-- Package Title and Code -->
            <div class="flex gap-5 mb-5">
              <div class="w-1/2"> 
                <div class="label">
                  <span class="label-text">Package Title</span>
                </div>
                <input v-model="formData.packageTitle" type="text" placeholder="Type here" class="input input-bordered w-full" />
              </div>
              <div class="w-1/2">
                <div class="label">
                  <span class="label-text">Package Code</span>
                </div>
                <input v-model="formData.packageCode" type="text" placeholder="Type here" class="input input-bordered w-full" />
              </div>
            </div>
  
            <!-- Package Year and ID -->
            <div class="flex gap-5 mb-5">
              <div class="w-1/2">
                <div class="label">
                  <span class="label-text">Package Year</span>
                </div>
                <input v-model="formData.packageYear" type="text" placeholder="Type here" class="input input-bordered w-full" />
              </div>
              <div class="w-1/2">
                <div class="label">
                  <span class="label-text">Package ID</span>
                </div>
                <input v-model="formData.packageId" type="text" placeholder="Type here" class="input input-bordered w-full" />
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
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div class="w-1/2">
                <div class="label">
                  <span class="label-text">Price</span>
                </div>
                <input v-model="formData.price" type="text" placeholder="Type here" class="input input-bordered w-full" />
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
              <textarea v-model="formData.description" class="textarea textarea-bordered w-full" placeholder="Description"></textarea>
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
import { ref } from 'vue'
import { useSocialStore } from '@/stores/SocialDashboard.ts'

const store = useSocialStore()

// Define a single object to hold all form data
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
  description: ''
})


// Ensure createNewPackage is available in the store
if (!store.createNewPackage) {
  store.createNewPackage = []
}

// Submit handler
const EventFormApply = () => {
  // Push the formData object into the createNewPackage array in the store
  store.createNewPackage.push({ ...formData.value })

  // Log formData to the console
  console.log("Form Data Submitted:", formData.value)

  // Optional: Reset form fields after submission
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
