<script setup>
import axios from 'axios'
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
// import {useUserStore} from "@/stores/learning-center/userStore";

const loginApi = 'user/register'
const swal = inject('$swal')
const router = useRouter()
let name = ref()
let email = ref()
let country = ref('')
let address = ref('')
let selectedResume = ref(null)
let gender = ref('')
let phone_no = ref('')

let password = ref()
let password_confirmation = ref()

let errorList = ref([])

function handleFileChange(event) {
  selectedResume.value = event.target.files[0]
}

async function registration() {
  if (selectedResume.value == null) {
    alert('Resume is Required')
  }

  const formData = new FormData()
  formData.append('name', name.value)
  formData.append('email', email.value)
  formData.append('password', password.value)
  formData.append('password_confirmation', password_confirmation.value)
  formData.append('role', 'teacher')
  formData.append('teacher_status', 'Application Submit')
  formData.append('user_status_id', 1), formData.append('gender', gender.value) // Add gender
  formData.append('phone_no', phone_no.value) // Add phone_no
  formData.append('country', country.value)
  formData.append('address', address.value)
  formData.append('status', '1')
  if (selectedResume.value) {
    formData.append('resume', selectedResume.value)
  }

  await axios
    .post(
      import.meta.env.VITE_ELEARNING_BASE_API + loginApi,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      // {
      //       name: name.value,
      //       email: email.value,
      //       password: password.value,
      //       password_confirmation: password_confirmation.value,
      //       role: 'teacher'
      //  }
    )
    .then((response) => {
      console.log(response)
      if (response.status === 200) {
        swal.fire({
          position: 'top-end',
          icon: 'success',
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500
        })
        localStorage.setItem('token', response.data.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.data.user))
        router.push('/dashboard')

        router.push('/verify-teacher')
      } else {
        swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Something went wrong',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    .catch((error) => {
      if (error.response.status == 400) {
        errorList.value = error.response.data
      }
    })
}
</script>

<template>
  <div class="action-panel py-4 mt-14">
    <h2 class="panel-title text-3xl">Signup as a Teacher</h2>

    <div class="form mt-4">
      <div class="input-group">
        <label for="">Name <span class="text-red-500">*</span></label>
        <input v-model="name" type="text" />
        <span class="error-message" v-if="errorList.name">{{ errorList.name[0] }}</span>
      </div>
      <div class="input-group">
        <label for="">Email <span class="text-red-500">*</span></label>
        <input v-model="email" type="text" />
        <span class="error-message" v-if="errorList.email">{{ errorList.email[0] }}</span>
      </div>
      <div class="input-group">
        <label for="gender">Gender</label>
        <select v-model="gender" id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div class="input-group">
        <label for="phone_no">Phone Number <span class="text-red-500">*</span></label>
        <input v-model="phone_no" type="text" id="phone_no" />
      </div>

      <div class="input-group">
        <label for="country">Country</label>
        <input v-model="country" type="text" id="country" />
      </div>
      <div class="input-group">
        <label for="address">Address</label>
        <input v-model="address" type="text" id="address" />
      </div>

      <div class="input-group">
        <label for="">Password <span class="text-red-500">*</span></label>
        <input v-model="password" type="password" />
        <span class="error-message" v-if="errorList.password">{{ errorList.password[0] }}</span>
      </div>
      <div class="input-group">
        <label for="">Confirm password <span class="text-red-500">*</span></label>
        <input v-model="password_confirmation" type="password" />
        <span class="error-message" v-if="errorList.password_confirmation">{{
          errorList.password_confirmation[0]
        }}</span>
      </div>
      <div class="input-group">
        <label for="resume">Upload Resume (PDF or DOC) <span class="text-red-500">*</span></label>
        <input type="file" id="resume" ref="resumeInput" @change="handleFileChange" />
      </div>

      <div class="input-group">
        <!-- <input v-model="role" type="hidden"> -->
        <!-- <label for="">You are</label>
        <select v-model="role">
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
        </select>
        <span class="error-message" v-if="errorList.role">{{ errorList.role[0] }}</span> -->
      </div>

      <div class="input-group-checkbox"></div>
    </div>
    <button @click="registration" class="btn-round-cyan">Signup</button>

    <p>
      Already have an account?
      <router-link to="/teacher-login" class="mt-4">Signin</router-link>
    </p>
  </div>
</template>

<style>
.error-message {
  color: red;
}

.action-panel {
  display: grid;
  background: #b5e2fa;
}

.action-panel > * {
  justify-self: center;
  align-self: center;
}

.panel-title {
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  color: #0fa3b1;
}

/* form */

.input-group {
  display: grid;
  margin-bottom: 20px;
}

.input-group > label {
  color: #0fa3b1;
  font-size: 13px;
  padding: 5px 0;
}

.input-group > input,
.input-group > select {
  border: none;
  outline: none;
  padding: 10px 15px;
  width: 300px;
}

.input-group-checkbox {
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
  gap: 10px;
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
}

.btn-round-cyan:hover {
  background: #0c818b;
}
</style>
