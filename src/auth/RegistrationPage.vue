<script setup>
import axios from 'axios'
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

const loginApi = 'user/register'
const swal = inject('$swal')
const router = useRouter()

let name = ref()
let email = ref()
let phone_no = ref()
let password = ref()
let password_confirmation = ref()
let gender = ref()
let country = ref()
let address = ref()

let errorList = ref([])

async function registration() {
  await axios
    .post(import.meta.env.VITE_ELEARNING_BASE_API + loginApi, {
      name: name.value,
      phone_no: phone_no.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value,
      gender: gender.value,
      country: country.value,
      address: address.value,
      role: 'student',
      user_status_id: 22,
      status: '1',
    })
    .then((response) => {
      console.log(response)
      if (response.status === 200) {
        swal.fire({
          position: 'top-end',
          icon: 'success',
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        })
        localStorage.setItem('token', response.data.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.data.user))
        router.push('/dashboard')
      } else {
        swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Something went wrong',
          showConfirmButton: false,
          timer: 1500,
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
  <div class="action-panel py-4">
    <h2 class="panel-title text-3xl">Signup and start learning</h2>

    <div class="form mt-4">
      <div class="input-group">
        <label for="">Full Name <span class="text-red-500">*</span></label>
        <input v-model="name" type="text" />
        <span class="error-message" v-if="errorList.name">{{
          errorList.name[0]
        }}</span>
      </div>
      <div class="input-group">
        <label for="">Phone <span class="text-red-500">*</span></label>
        <input v-model="phone_no" type="text" />
        <span class="error-message" v-if="errorList.phone_no">{{
          errorList.phone_no[0]
        }}</span>
      </div>
      <div class="input-group">
        <label for="">Email <span class="text-red-500">*</span></label>
        <input v-model="email" type="text" />
        <span class="error-message" v-if="errorList.email">{{
          errorList.email[0]
        }}</span>
      </div>
      <div class="input-group">
        <input v-model="gender" type="hidden" />
        <label for="">Gender</label>
        <select v-model="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <span class="error-message" v-if="errorList.role">{{
          errorList.role[0]
        }}</span>
      </div>
      <div class="input-group">
        <label for="">Country</label>
        <input v-model="country" type="text" />
      </div>
      <div class="input-group">
        <label for="">Address</label>
        <input v-model="address" type="text" />
      </div>
      <div class="input-group">
        <label for="">Password <span class="text-red-500">*</span></label>
        <input v-model="password" type="password" />
        <span class="error-message" v-if="errorList.password">{{
          errorList.password[0]
        }}</span>
      </div>
      <div class="input-group">
        <label for=""
          >Confirm password <span class="text-red-500">*</span></label
        >
        <input v-model="password_confirmation" type="password" />
        <span class="error-message" v-if="errorList.password_confirmation">{{
          errorList.password_confirmation[0]
        }}</span>
      </div>
      <!-- <div class="input-group">
                <input v-model="role" type="hidden"> 
                <label for="">You are</label>
                <select v-model="role">
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                </select>
                <span class="error-message" v-if="errorList.role">{{ errorList.role[0] }}</span>
            </div> -->
      <div class="input-group-checkbox"></div>
    </div>
    <button @click="registration" class="btn-round-cyan">Signup</button>

    <p>
      Already have an account?
      <router-link to="/student-login">Signin</router-link>
    </p>
  </div>
</template>

<style scoped>
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
  padding: 5px 10px;
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
