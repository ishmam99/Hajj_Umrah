<template>
  <div class="teacher-verification-page">
    <div class="content bg-grey">
      <h2 class="title">Verify Your Teacher Information</h2>
      <p class="info"><strong>Name:</strong> {{ user.name }}</p>
      <p class="info"><strong>Email:</strong> {{ user.email }}</p>
      <div>
        <ul class="step-list">
          <li :class="{ 'active-step': user.teacher_status === 'Application Submit' }">
            <span class="step-number">1</span>
            <span class="step-name" :class="{ 'bg-green-400': user.teacher_status === 'Application Submit' }">Application Submit</span>
            <div v-if="user.teacher_status === 'Application Submit'" class="status-message bg-green-400">
              Your application is submitted successfully. We will review the CV and get back to you very soon.
            </div>
          </li>
          <div class="arrow-container">
            <div class="arrow"></div> <!-- Add arrow element here -->
            <div class="tail"></div> <!-- Add tail element here -->
          </div>
          <li :class="{ 'active-step': user.teacher_status === 'interview' }">
            <span class="step-number">2</span>
            <span class="step-name" :class="{ 'bg-green-400': user.teacher_status === 'interview' }">Interview</span>
            <div v-if="user.teacher_status === 'interview'" class="status-message bg-green-400">
              Congratulations, you are selected for the interview. Our HR department will contact you very soon for the details.
            </div>
          </li>
          <div class="arrow-container">
            <div class="arrow"></div> <!-- Add arrow element here -->
            <div class="tail"></div> <!-- Add tail element here -->
          </div>
          <li :class="{ 'active-step': user.teacher_status === 'offer' }">
            <span class="step-number">3</span>
            <span class="step-name" :class="{ 'bg-green-400': user.teacher_status === 'offer' }">Offer</span>
            <div v-if="user.teacher_status === 'offer'" class="status-message bg-green-400">
              I am pleased to extend an offer of employment to you for the 'Mentor' at our platform. We were impressed with your qualifications and look forward to having you join our team.
            </div>
          </li>


          <div class="arrow-container">
            <div class="arrow"></div> <!-- Add arrow element here -->
            <div class="tail"></div> <!-- Add tail element here -->
          </div>
          <li :class="{ 'active-step': user.teacher_status === 'On review' }">
            <span class="step-number">4</span>
            <span class="step-name" :class="{ 'bg-green-400': user.teacher_status === 'On review' }">On Review</span>
            <div v-if="user.teacher_status === 'On review'" class="status-message bg-green-400">
              Your application is on review. If you are selected, we will call for an interview very soon.
            </div>
          </li>

          <div class="arrow-container">
            <div class="arrow"></div> <!-- Add arrow element here -->
            <div class="tail"></div> <!-- Add tail element here -->
          </div>

          <li :class="{ 'active-step': user.teacher_status === 'Hired' }">
            <span class="step-number">5</span>
            <span class ="step-name" :class="{ 'bg-green-400': user.teacher_status === 'Hired' }">Hired</span>
            <div v-if="user.teacher_status === 'Hired'" class="status-message bg-green-400">
              I am pleased to extend an offer of employment to you for the 'Mentor' at our platform. We were impressed with your qualifications and look forward to having you join our team.
            </div>
          </li>
          <div class="arrow-container">
            <div class="arrow"></div> <!-- Add arrow element here -->
            <div class="tail"></div> <!-- Add tail element here -->
          </div>

          <li :class="{ 'active-step': user.teacher_status !== 'Application Submit' && user.teacher_status !== 'interview' && user.teacher_status !== 'Hired' && user.teacher_status !== 'On review' && user.teacher_status !== 'offer' }">
            <span class="step-number">6</span>
            <span class="step-name">Default</span>
            <div v-if="user.teacher_status !== 'Application Submit' && user.teacher_status !== 'interview' && user.teacher_status !== 'Hired' && user.teacher_status !== 'On review' && user.teacher_status !== 'offer'" class="status-message">
              This is the default message for cases that do not match any of the specified statuses.
            </div>
          </li>
        </ul>
      </div>
      <button v-if="user.teacher_status === 'Hired'" class="verify-button" @click="verifyTeacher">Verify</button>
    </div>
  </div>
</template>

<style scoped>
.arrow-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.arrow {
  width: 0;
  height: 0;
  border-left: 15px solid transparent; /* Adjust the size of the arrow */
  border-right: 15px solid transparent; /* Adjust the size of the arrow */
  border-top: 20px solid #888888; /* Adjust the color of the arrow and size accordingly */
}

.tail {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 15px solid #888888; /* Adjust the color of the tail and size accordingly */
  margin-top: -5px; /* Adjust the vertical positioning of the tail */
}

.step-list {
  list-style-type: none;
  padding: 0;
}

.step-list li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px; /* Add padding to the step lists */
  color: grey;
  background-color: #f2f2f2; /* Default background color for step lists */
}

.active-step {
  color: #26c5d0;
  background-color: #2c9299; /* Green background for the active step list */
}

.step-number {
  font-size: 18px;
  margin-right: 10px;
}

.step-name {
  font-size: 16px;
  margin-right: 10px;
}

.teacher-verification-page {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  height: 80vh;
  overflow: auto;
}

.content {
  text-align: center;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}

.info {
  font-size: 20px;
  margin-bottom: 10px;
}

.verify-button {
  background-color: #d31750;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
}

.verify-button:hover {
  background-color: #87CEEB;
}

.status-message {
  font-size: 16px;
  background-color: #dff0f1;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  text-align: left;
  color: black;
}

.bg-green-400 {
  background-color: #b9f4f8;
  color: black;
}
</style>

<script>
import { useRouter } from 'vue-router';

export default {
  props: {
    user: Object
  },
  setup() {
    const router = useRouter();

    const verifyTeacher = () => {
      router.push('/dashboard');
    };

    return {
      verifyTeacher,
    };
  },
};
</script>
