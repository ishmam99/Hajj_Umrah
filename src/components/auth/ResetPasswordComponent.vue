<template>
  <div class="reset-password-panel">
    <h2 class="panel-title">Reset Password</h2>
    <form @submit.prevent="resetPassword" class="space-y-6">
      <div class="form-element">
        <label for="email" class="font-bold text-lg">Email</label>
        <input
          type="email"
          :value="email"
          class="w-full p-4 rounded-md border"
          placeholder="Email"
          disabled
        />
      </div>

      <div class="form-element relative">
        <label for="new-password" class="font-bold text-lg">New Password</label>
        <div class="password-input">
          <input
            :type="showNewPassword ? 'text' : 'password'"
            v-model="newPassword"
            class="w-full p-4 rounded-md border pr-10"
            placeholder="New Password"
          />
          <button
            @click.prevent="toggleShowNewPassword"
            class="password-toggle-button"
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
        <div class="password-input">
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            v-model="confirmPassword"
            class="w-full p-4 rounded-md border pr-10"
            placeholder="Confirm New Password"
          />
          <button
            @click.prevent="toggleShowConfirmPassword"
            class="password-toggle-button"
          >
            <font-awesome-icon
              :icon="['far', showConfirmPassword ? 'eye' : 'eye-slash']"
            />
          </button>
        </div>
      </div>

      <div class="text-center">
        <button :disabled="isLoading" class="btn-round-cyan" type="submit">
          Reset Password
        </button>
      </div>

      <div v-if="passwordsDoNotMatch" class="error-message">
        Passwords do not match.
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  props: {
    email: String, // Email passed as a prop
  },
  data() {
    return {
      router: useRouter(),
      newPassword: '',
      confirmPassword: '',
      showNewPassword: false,
      showConfirmPassword: false,
      passwordsDoNotMatch: false,
      errorMessage: '',
      isLoading: false,
    }
  },
  methods: {
    redirectToLoginPage() {
      this.router.push('/login')
    },
    resetPassword() {
      if (this.newPassword !== this.confirmPassword) {
        this.passwordsDoNotMatch = true
        return
      }

      this.resetPasswordApiCall()

      this.passwordsDoNotMatch = false
    },

    async resetPasswordApiCall() {
      const baseUrl = import.meta.env.VITE_ELEARNING_BASE_API
      const passwordData = {
        email: this.email, // Use the email from the prop
        password: this.newPassword,
        password_confirmation: this.confirmPassword,
      }

      this.isLoading = true
      axios
        .post(`${baseUrl}user/reset-password`, passwordData)
        .then((res) => {
          this.showSuccessAlert(res.data.message)
          this.redirectToLoginPage()
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.errors
          ) {
            this.errorMessage = error.response.data.errors
            this.passwordsDoNotMatch = false
          } else {
            this.errorMessage = 'Password reset failed. Please try again.'
          }

          this.showErrorAlert(error.response.data.message)
        })
        .finally(() => {
          this.isLoading = false
        })

      this.newPassword = ''
      this.confirmPassword = ''
    },

    toggleShowNewPassword() {
      this.showNewPassword = !this.showNewPassword
    },

    toggleShowConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword
    },

    showSuccessAlert(msg) {
      this.$swal.fire('Success', msg, 'success')
    },

    showErrorAlert(msg) {
      this.$swal.fire('Error', msg, 'error')
    },
  },
}
</script>

<style>
.reset-password-panel {
  display: grid;
  background: #b5e2fa;
  justify-content: center;
  align-content: center;
  padding: 20px;
}

.panel-title {
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  color: #0fa3b1;
  margin: 0 0 20px;
}

.error-message {
  background: #ffc7ce;
  border: 1px solid #d8000c;
  color: #d8000c;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin: 10px 0;
}

.password-input {
  position: relative;
}

.password-toggle-button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  cursor: pointer;
}
</style>
