<script setup>
import axios from 'axios'
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
// import {useUserStore} from "@/stores/learning-center/userStore";

const swal = inject('$swal')
const loginApi = 'user/login'
const router = useRouter()
// const userStore = useUserStore();

let email = ref()
let password = ref()
async function login() {
  await axios
    .post(import.meta.env.VITE_ELEARNING_BASE_API + loginApi, {
      email: email.value,
      password: password.value,
    })
    .then((response) => {
      if (response.status === 200) {
        swal.fire({
          position: 'top-end',
          icon: 'success',
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        })
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))

        router.push('/dashboard')
      } else {
        console.log(response.status)
        swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Something went wrong',
          showConfirmButton: false,
          timer: 1500,
        })
        router.push('/management-login')
      }
    })
    .catch((error) => {
      if (error.response.status == 400) {
        swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        })
        router.push('/management-login')
      }
    })
}
</script>
<template>
  <div class="action-panel">
    <div>
      <h2 class="panel-title text-3xl">Management Login</h2>
      <div class="form mt-4">
        <div class="input-group">
          <label for="email">Select <span class="text-red-500">*</span></label>
          <select class="">
            <option value="">Teacher Management</option>
            <option value="">Student Management</option>
            <option value="">Advisor</option>
          </select>
        </div>
        <div class="input-group">
          <label for="email">Email <span class="text-red-500">*</span></label>
          <input v-model="email" type="text" id="email" />
        </div>
        <div class="input-group">
          <label for="password"
            >Password <span class="text-red-500">*</span></label
          >
          <input v-model="password" type="password" id="password" />
        </div>
        <button @click="login" class="btn-round-cyan">Sign in</button>
        <!-- <div class="mt-4">
                <router-link to="forgot-pass" class="text-sm font-bold">Forgot Password?</router-link>
                <div>
                    <span class="text-sm">If you don't have any account,</span> <router-link to="/management-registration" class="text-sm font-bold text-blue-500">Signup Now!</router-link>
                </div> 
            </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.action-panel {
  background: #b5e2fa;
}

.action-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
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
