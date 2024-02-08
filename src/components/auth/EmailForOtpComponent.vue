<template>
  <div class="action-panel">
    <h2 class="panel-title">Enter your email to receive an OTP</h2>
    <input v-model="email" type="email" placeholder="Email" />
    <button @click="sendOtp" class="btn-round-cyan">Send OTP</button>
    <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      errorMessage: '', // Initialize error message
    }
  },
  methods: {
    sendOtp() {
      axios
        .post(
          import.meta.env.VITE_ELEARNING_BASE_API +
            'user/send-reset-password-code-to-mail',
          {
            email: this.email,
          }
        )
        .then((response) => {
          if (response.data.status == 'success') {
            this.$emit('otp-sent', this.email) // Emit email along with the event
          }
          // console.log(response.data)
          this.errorMessage = '' // Clear the error message on success
        })
        .catch((error) => {
          console.error(error)
          // this.$emit('otp-sent', this.email); // Emit email along with the event

          this.errorMessage =
            'An error occurred while sending the OTP. Please try again.' // Set error message
        })
    },
  },
}
</script>

<style>
.error-message {
  color: red;
  text-align: center;
  margin: 10px 0;
}
.action-panel {
  display: grid;
  background: #b5e2fa;
  justify-content: center;
  align-content: center;
  padding: 20px; /* Add padding to the panel */
}

.panel-title {
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  color: #0fa3b1;
  margin: 0 0 20px; /* Add margin to the title */
}

input {
  border: none;
  outline: none;
  padding: 10px 15px;
  width: 300px;
  margin: 0 0 15px; /* Add margin to the input */
}

.btn-round-cyan {
  width: 200px;
  border: none;
  outline: none;
  padding: 10px;
  color: white;
  background: #0fa3b1;
  border-radius: 26px;
  cursor: pointer;
  font-size: 15px;
  margin: 0 0 10px; /* Add margin to the button */
}

.btn-round-cyan:hover {
  background: #0c818b;
}
</style>
