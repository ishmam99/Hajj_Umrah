<template>
  <div class="dashboard-content p-5 h-[70vh] overflow-auto">
    <div class="dashboard-title flex items-center gap-2 text-xl font-bold mb-6">
      <font-awesome-icon :icon="['fas', 'fa-user']" /> Personal Details
    </div>

    <div
      class="personal-details bg-gray-200 shadow-lg rounded-xl p-5 grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div class="space-y-4">
        <div class="form-element">
          <label for="name" class="font-bold text-sm">Full Name</label>
          <input
            type="text"
            v-model="user.name"
            class="w-full p-3 rounded-md border"
            placeholder="Full Name"
          />
        </div>
        <div class="form-element">
          <label for="email" class="font-bold text-sm">Email</label>
          <input
            type="text"
            v-model="user.email"
            class="w-full p-3 rounded-md border"
            disabled
            placeholder="Email"
          />
        </div>
        <div class="form-element">
          <label for="phone" class="font-bold text-sm">Phone</label>
          <input
            type="text"
            v-model="user.phone_no"
            class="w-full p-3 rounded-md border"
            placeholder="Phone"
          />
        </div>
        <div class="form-element">
          <label for="address" class="font-bold text-sm">Address</label>
          <input
            type="text"
            v-model="user.address"
            class="w-full p-3 rounded-md border"
            placeholder="Address"
          />
        </div>
      </div>

      <div class="photo relative">
        <div class="image w-40 h-40 m-3 mx-auto">
          <img
            :src="user.profileImage"
            alt="User Profile pic"
            class="w-full h-full object-cover cursor-pointer border border-cyan-300"
          />
          <label
            for="profile-image"
            class="bg-cyan-500 rounded-md p-2 text-lg text-white cursor-pointer mt-2 mx-auto block text-center"
          >
            <!-- Replace this label with an edit icon -->
            change image
            <font-awesome-icon
              :icon="['fas', 'fa-pencil-alt']"
              class="text-base"
            />
          </label>
          <input
            type="file"
            id="profile-image"
            @change="updateProfileImage"
            class="hidden"
          />
        </div>
      </div>
    </div>

    <div class="text-center mt-6">
      <!--      color change for loading , here an class is bind for isLoading-->
      <button
        @click="updateUser"
        :disabled="isLoading"
        :class="{ 'bg-cyan-500': !isLoading, 'bg-gray-400': isLoading }"
        class="text-white font-bold rounded-lg px-4 py-2"
      >
        {{ isLoading ? 'Updating...' : 'Update Profile' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { useCommonStore } from '@/stores/common'

const commonStore = useCommonStore()
const swal = inject('$swal')

let existing_phone_no = ref()
let user = ref({
  id: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).id
    : null,
  name: '',
  email: '',
  address: '',
  phone_no: '',
  profileImage: '', // You can set a default image URL here
})
let isLoading = ref(false)
let baseURL = ref(import.meta.env.VITE_ELEARNING_BASE_API)

async function fetchUserData() {
  try {
    const response = await axios.get(
      `${baseURL.value}user/edit-profile/${user.value.id}`
    )
    user.value = response.data.data
    existing_phone_no.value = user.value.phone_no
  } catch (e) {
    console.log('error', e.response)
  }
  commonStore.loading = false
}

async function updateUser() {
  try {
    isLoading.value = true
    // Create a new object with the desired key names
    const userData = {
      id: user.value.id,
      name: user.value.name,
      email: user.value.email,
      address: user.value.address,
    }

    if (existing_phone_no.value != user.value.phone_no) {
      userData.phone_no = user.value.phone_no
    }

    const response = await axios.post(
      `${baseURL.value}user/update-profile`,
      userData
    )

    showSuccessAlert(response.data.message)
  } catch (error) {
    showErrorAlert(error.response)
  } finally {
    isLoading.value = false
  }
}

function updateProfileImage(event) {
  const file = event.target.files[0]
  if (file) {
    const imageUrl = URL.createObjectURL(file)
    console.log(imageUrl)
    user.value.profileImage = imageUrl
  }
}

function showSuccessAlert(msg) {
  swal.fire('Success', msg, 'success')
}
function showErrorAlert(msg) {
  swal.fire('Error', msg, 'error')
}

onMounted(() => {
  fetchUserData()
})

onUnmounted(() => {
  commonStore.loading = false
})
</script>
