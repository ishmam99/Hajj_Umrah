<template>
  <div class="password-update flex justify-center items-center min-h-screen">
    <div
      class="password-card w-full md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 p-6 bg-white border border-gray-300 rounded-md shadow-lg"
    >
      <div class="text-3xl font-bold mb-6 text-center">Change Password</div>
      <form @submit.prevent="updatePassword" class="space-y-6">
        <div class="form-element relative">
          <label for="email" class="font-bold text-lg">Email</label>
          <input
            type="email"
            v-model="user.email"
            class="w-full p-4 rounded-md border"
            placeholder="Email"
            disabled
          />
        </div>
        <div
          v-if="errorMessage"
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded my-4"
        >
          <div v-for="(err, index) in errorMessage" :key="index" class="mb-2">
            {{ err[0] }}
          </div>
        </div>

        <div class="form-element relative">
          <label for="new-password" class="font-bold text-lg"
            >New Password</label
          >
          <div class="password-input flex items-center">
            <input
              :type="showNewPassword ? 'text' : 'password'"
              v-model="newPassword"
              class="w-full p-4 rounded-md border pr-10"
              placeholder="New Password"
            />
            <button
              @click.prevent="toggleShowNewPassword"
              class="password-toggle-button absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
            >
              <font-awesome-icon
                :icon="['far', showNewPassword ? 'eye' : 'eye-slash']"
              />
            </button>
          </div>
        </div>

        <div class="form-element relative">
          <label for="confirm-password" class="font-bold text-lg"
            >Confirm New Password</label
          >
          <div class="password-input flex items-center">
            <input
              :type="showConfirmPassword ? 'text' : 'password'"
              v-model="confirmPassword"
              class="w-full p-4 rounded-md border pr-10"
              placeholder="Confirm New Password"
            />
            <button
              @click.prevent="toggleShowConfirmPassword"
              class="password-toggle-button absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
            >
              <font-awesome-icon
                :icon="['far', showConfirmPassword ? 'eye' : 'eye-slash']"
              />
            </button>
          </div>
        </div>
        <div class="text-center">
          <button
            :disabled="isLoading"
            class="bg-cyan-500 text-white rounded-lg px-6 py-3 text-lg"
            type="submit"
          >
            Update Password
          </button>
        </div>
        <!-- Display an alert if passwords do not match -->
        <div
          v-if="passwordsDoNotMatch"
          class="text-red-600 text-center font-bold"
        >
          Passwords do not match.
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted, inject } from 'vue'
import axios from 'axios'
import { useCommonStore } from '@/stores/common'

const swal = inject('$swal')
const commonStore = useCommonStore()

let user = ref({
  email: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).email
    : '',
})

commonStore.loading = false

let newPassword = ref('')
let confirmPassword = ref('')
let showNewPassword = ref(false)
let showConfirmPassword = ref(false)
let passwordsDoNotMatch = ref(false)
let errorMessage = ref('')
let isLoading = ref(false)

function updatePassword() {
  if (newPassword.value !== confirmPassword.value) {
    passwordsDoNotMatch.value = true
    return
  }
  console.log('update password check ')
  updatePasswordApiCall()

  passwordsDoNotMatch.value = false
}

async function updatePasswordApiCall() {
  console.log('updatePasswordApiCall method called')

  const baseUrl = import.meta.env.VITE_ELEARNING_BASE_API
  const passwordData = {
    email: user.value.email,
    password: newPassword.value,
    password_confirmation: confirmPassword.value,
  }

  isLoading.value = true
  axios
    .post(`${baseUrl}user/change-password`, passwordData)
    .then((res) => {
      showSuccessAlert(res.data.message)
    })
    .catch((error) => {
      if (error.response && error.response.data && error.response.data.errors) {
        errorMessage = error.response.data.errors
        passwordsDoNotMatch.value = false
      } else {
        errorMessage.value = 'Password update failed. Please try again.'
      }

      showErrorAlert(error.response.data.message)
    })
    .finally(() => {
      isLoading.value = false
    })

  newPassword.value = ''
  confirmPassword.value = ''
}

function toggleShowNewPassword() {
  showNewPassword.value = !showNewPassword.value
}

function toggleShowConfirmPassword() {
  console.log('toggleShowNewPassword method called')
  showConfirmPassword.value = !showConfirmPassword.value
}

function showSuccessAlert(msg) {
  swal.fire('Success', msg, 'success')
}

function showErrorAlert(msg) {
  swal.fire('Error', msg, 'error')
}

onUnmounted(() => {
  commonStore.loading = true
})
</script>
