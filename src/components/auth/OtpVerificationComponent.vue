<template>
  <div class="action-panel">
    <h2 class="panel-title">OTP Verification</h2>
    <p>Please enter the OTP sent to {{ email }}</p>
    <div class="otp-input-container">
      <!-- Create input fields for OTP -->
      <input v-model="token" type="text" maxlength="5" />
    </div>
    <button @click="verifyOtp" class="btn-round-cyan">Verify OTP</button>
    <!-- Add a condition to disable the Resend OTP button -->
    <button
      @click="resendOtp"
      class="btn-round-cyan"
      :disabled="resendDisabled"
      :style="{ backgroundColor: resendDisabled ? 'gray' : '#0FA3B1' }"
    >
      Resend OTP
      <span v-if="resendDisabled">
        ({{ countdownMinutes }}:{{ countdownSeconds < 10 ? '0' : ''
        }}{{ countdownSeconds }})
      </span>
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    email: String,
  },
  data() {
    return {
      token: null, // Use a single string to store OTP
      resendDisabled: false, // Flag to control whether Resend OTP is disabled
      countdownMinutes: 5, // Initial minutes for countdown
      countdownSeconds: 0, // Initial seconds for countdown
      baseUrl: import.meta.env.VITE_ELEARNING_BASE_API, // Store the base URL in data
    }
  },
  methods: {
    verifyOtp() {
      // Perform OTP verification logic
      const enteredOtp = this.token

      console.log(this.token, 'otttp')
      axios
        .post(`${this.baseUrl}user/reset-password-code-check`, {
          token: enteredOtp,
          email: this.email,
        })
        .then((response) => {
          console.log(response.data)
          if (response.data.success == true) {
            this.$emit('verify-otp')
          } else {
            alert(response.data.message)
            // this.$emit('verify-otp')
          }
          console.log(response)
          // Handle the response from the API
        })
        .catch((error) => {
          // this.$emit('verify-otp')

          // Handle API error
          console.log(error)
        })

      // Disable the Resend OTP button and start the countdown
      this.resendDisabled = true
      this.startCountdown() // Call the separate countdown method
    },

    startCountdown() {
      const countdownInterval = setInterval(() => {
        if (this.countdownSeconds > 0) {
          this.countdownSeconds--
        } else if (this.countdownMinutes > 0) {
          this.countdownMinutes--
          this.countdownSeconds = 59
        } else {
          clearInterval(countdownInterval)
          this.resendDisabled = false
        }
      }, 1000)
    },

    resendOtp() {},
  },
}
</script>

<style>
/* ... Your existing style ... */
</style>

<style>
.otp-confirmation-container {
  display: grid;
  background: #b5e2fa;
  justify-content: center;
  align-content: center;
  padding: 20px;
}

h2 {
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  color: #0fa3b1;
  margin: 0 0 20px;
}

p {
  text-align: center;
  color: #333;
  margin: 0 0 20px;
}

/* Add styling for OTP input boxes and additional features as needed */
</style>
