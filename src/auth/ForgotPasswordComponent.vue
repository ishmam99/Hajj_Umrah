<template>
  <div class="action-panel">
    <h2 class="panel-title">Forgot Password</h2>
    <EmailForOtpComponent v-if="!otpSent" @otp-sent="handleOtpSent" />
    <OtpVerificationComponent v-if="otpSent && !otpVerified" :email="email" @verify-otp="handleVerifyOtp" @resend-otp="handleResendOtp" />
     <ResetPasswordComponent  v-if="otpVerified"  :email="email"/>
  </div>
</template>

<script>
import EmailForOtpComponent from '@/components/auth/EmailForOtpComponent.vue';
import OtpVerificationComponent from '@/components/auth/OtpVerificationComponent.vue';
import ResetPasswordComponent from "@/components/auth/ResetPasswordComponent.vue";
export default {
  components: {
    EmailForOtpComponent,
    OtpVerificationComponent,
    ResetPasswordComponent
  },
  data() {
    return {
      otpSent: false,
      email: '',
      otpVerified:false,
    };
  },
  methods: {
    handleOtpSent(email) {
      // Handle the event when OTP is sent
      this.otpSent = true;
      this.email = email; // Save the email
    },

    handleVerifyOtp() {
      this.otpVerified = true;
      console.log(this.email, 'from verify otp');
    },
    handleResendOtp() {
      // Handle the event to resend OTP
      this.otpSent = false; // Reset the OTP sent status
    },
  },
};
</script>



<style>
.action-panel {
  display: grid;
  background: #B5E2FA;
  justify-content: center;
  align-content: center;
  padding: 20px; /* Add padding to the panel */
}

.panel-title {
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  color: #0FA3B1;
  margin: 0 0 20px; /* Add margin to the title */
}

.success-message {
  text-align: center;
  margin-top: 20px;
  color: #4CAF50;
}
</style>
