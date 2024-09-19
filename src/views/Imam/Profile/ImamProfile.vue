<template>
  <div class="min-h-screen flex justify-center w-full items-center bg-gray-100 p-6">
    <div class="bg-white shadow-lg rounded-lg max-w-screen-xl mx-auto w-full">
      
      <!-- Profile Image Section -->
      <div class="relative bg-gradient-to-r from-blue-500 to-cyan-600 p-6 rounded-t-lg text-center">
        <img 
          :src="people" 
          alt="Profile Image"
          class="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
        >
        <h2 class="text-2xl text-white font-bold mt-4">Mahmadullah</h2>
        <p class="text-white text-xl font-semibold">Imam</p>
      </div>

      <!-- Toggle Edit/Profile Mode -->
      <div class="px-6 py-4">
        <div class="flex justify-end">
          <button 
            @click="isEditing = !isEditing" 
            class="px-4 py-2 rounded-md text-sm font-semibold  transition duration-300"
            :class="isEditing ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-blue-500 text-white hover:bg-blue-600'"
          > 
          <span v-if="!isEditing" class="flex items-center gap-1">
            Edit Profile 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16.7574 2.99677L14.7574 4.99677H5V18.9968H19V9.23941L21 7.23941V19.9968C21 20.5491 20.5523 20.9968 20 20.9968H4C3.44772 20.9968 3 20.5491 3 19.9968V3.99677C3 3.44448 3.44772 2.99677 4 2.99677H16.7574ZM20.4853 2.09727L21.8995 3.51149L12.7071 12.7039L11.2954 12.7063L11.2929 11.2897L20.4853 2.09727Z"></path></svg>
          </span>
          <span v-else class="flex items-center gap-1">
            Cancel Edit 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path></svg>
          </span>
          
          </button>
        </div>

        <!-- Profile Info / Edit Mode -->
        <div v-if="!isEditing" class="space-y-6 py-20">
          <!-- Display Profile Information -->
          <div v-for="(value, key) in profileFields" :key="key" class="flex justify-between items-center bg-slate-100 rounded-lg p-4 shadow font-sans">
            <p class="text-lg font-semibold text-gray-500">{{ key }}</p>
            <p class="text-lg font-medium text-gray-900">{{ value || 'N/A' }}</p>
          </div>
        </div>

        <!-- Edit Mode Form -->
        <div v-else class="space-y-6 py-6">
          <form @submit.prevent="updateProfile" class="space-y-6">
            <div v-for="(field, key) in editableFields" :key="key" class="form-group">
              <label class="block text-md font-medium text-gray-700 p-1">{{ field.label }}</label>
              <input 
                v-model="userData[key]" 
                :type="field.type" 
                class="input input-bordered w-full  px-4 py-2 rounded-lg shadow-sm border-gray-300 outline-none"
                :style="field.type == 'gender' ? 'text-transform: lowercase;' : '' "
              >
            </div>

            <!-- Image Upload -->
            <div class="form-group">
              <label class="block text-md font-medium text-gray-700 p-1">Update Image</label>
              <input 
                @change="handleImageUpload" 
                type="file" 
                class="file-input file-input-bordered w-full outline-none"
              />
            </div>

            <!-- Update Button -->
            <div class="text-center">
              <button 
                class="w-full py-3 px-6 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 transition duration-300"
                type="submit"
                :disabled="isLoading"
              >
                <span v-if="!isLoading">Update Profile</span>
                <span v-else>Updating...</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isEditing = ref(false);
import { ref } from "vue";
//  import people from "../../../assets/image/userProfile.webp";
import people from "/src/assets/image/userProfile.webp";

const profileFields = {
Name: 'Mahmadullah',
Email: 'mammad@gmail.com',
'Phone Number': '+10124543232',
Country: 'USA',
Address: 'Texas',
};

const editableFields = {
name: { label: 'Name', type: 'text' },
email: { label: 'Email', type: 'email' },
phone_no: { label: 'Phone Number', type: 'text' },
country: { label: 'Country', type: 'text' },
address: { label: 'Address', type: 'text' },
gender: { label: 'Gender', type: 'text' },
};

const userData = ref({
name: 'Mahmadultan',
email: 'mammad@gmail.com',
address: 'Texas',
phone_no: '+10124543232',
country: 'USA',
gender: 'Male',
image: people,
_method: 'PUT',
});

</script>
<style scoped>
/* Add any additional styles here */
</style>
