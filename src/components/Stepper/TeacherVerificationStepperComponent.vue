<template>
  <div class="teacher-verification-page">
    <div class="content bg-grey">
      <h2 class="title">Verify Your Teacher Information</h2>
      <p class="info"><strong>Name:</strong> {{ user.name }}</p>
      <p class="info"><strong>Email:</strong> {{ user.email }}</p>

      <div class="status-roadmap">
        <div v-for="(step, index) in steps" :key="index" :class="{ 'active': activeStep === index }">
          <div class="status-step">
            <div class="step-title">{{ step.label }}</div>
            <div class="step-message">
              {{ step.message }}
            </div>
          </div>
          <div class="status-divider" v-if="index !== steps.length - 1"></div>
        </div>
      </div>

      <button v-if="user.teacher_status === 'Hired'" class="verify-button" @click="verifyTeacher">Verify</button>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   step: Number, // Current step
  //   verifyTeacher: Function, // Function to verify teacher
  // },
};
</script>

<style scoped>
/* ... your existing styles ... */

.status-roadmap {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.status-step {
  text-align: center;
  flex: 1;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
}

.step-title {
  font-weight: bold;
}

.active .step-title {
  background-color: #d31750;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
}

.status-divider {
  flex: 1;
  border: 2px solid #d31750;
}

/* ... your existing styles ... */
</style>

