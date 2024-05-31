<template>
    <div>
      <DefaultLayout>
        <div
          class="px-20 pt-20 mt-5 py-5 bg-teal-800 bg-[url('../assets/image/home/bg123.png')] bg-repeat shadow-xl"
        >
          <div class="pt-3 mx-36 pb rounded-xl bg-[#ffffff] border-blue-50 shadow-xl border-[3px]">
            <div class="flex items-center justify-center gap-2 font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path
                  d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z"
                ></path>
              </svg>
              <p>Home</p>
              <p>/ Employees</p>
              <!-- <p>/ Volunteers</p> -->
              <p class="text-cyan-800">/ Employee Login</p>
            </div>
            <div class="rounded-lg flex items-center justify-center relative py-3">
              <h1 class="text-cyan-800 text-4xl font-bold">Employee Login</h1>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <!-- Supplier Information -->
        <div class="w-full py-20 flex justify-center flex-row-reverse gap-4 items-center bg-slate-50">
          <form @submit.prevent="login(u)">
            <div class="h-[550px] w-[500px] bg-[#ffffff] px-5 py-10 rounded-lg shadow-md">
              <img src="/src/assets/image/common/n1.png" alt="" class="w-20 m-auto" />
              <p class="text-2xl font-bold text-center text-[#0b2036]">{{ route.name }}</p>
              <p class="font-semibold py-1.5">Email</p>
              <input
                @change="error = false"
                v-model="data.email"
                type="email"
                class="border border-gray-300 focus:outline-yellow-600 rounded-md w-full py-1.5 px-3"
              />
              <p class="font-semibold py-1.5">Password</p>
              <input
                v-model="data.password"
                type="password"
                class="border border-gray-300 focus:outline-yellow-600 rounded-md w-full py-1.5 px-3"
              />
              <div class="flex justify-between items-center gap-5 my-3">
                <div class="flex items-center gap-2">
                  <input type="checkbox" class="" />
                  <p class="text-xs">Remember me</p>
                </div>
                <p class="text-xs text-gray-400">Forgot Password?</p>
              </div>
              <p v-if="error" class="text-red-600 text-center font-bold">No user found</p>
              <button
                type="submit"
                class="bg-[#0b2036] w-full px-3 py-2 rounded-md my-3 text-white font-semibold"
              >
                Login
              </button>
              <div v-if="route.name != 'Admin Login'">
                <p class="text-center text-sm text-gray-600">OR</p>
                <button
                  class="border border-gray-400 w-full px-3 py-2 rounded-md my-3 font-bold text-gray-400 flex items-center justify-center gap-2"
                >
                  <ion-icon name="logo-google"></ion-icon>Sign in with Google
                </button>
              </div>
  
              <div class="flex text-sm justify-between gap-2">
                <p class="text-gray-500">Don't have an account ?</p>
                <router-link
                  to="/Signup"
                  class="text-gray-500 font-semibold hover:text-[#0b2036] cursor-pointer"
                  >Register</router-link
                >
              </div>
            </div>
          </form>
  
          <div>
            <img
              v-if="route.name == 'Employee Login'"
              src="@/assets/image/common/login-3.png"
              alt=""
              class="bg-white rounded-lg h-[550px] w-[500px]"
            />
          </div>
        </div>
      </DefaultLayout>
    </div>
  </template>
  
  <script setup>
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import { useAuthStore } from '/src/stores/AuthStore.ts'
  import { ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  
  const route = useRoute()
  const router = useRouter()
  const error = ref(false)
  
  const data = ref({
    email: '',
    password: ''
  })
  const authStore = useAuthStore()
  const login = () => {
    if (data.value.email == '' || data.value.password == '') {
      alert('Email or password is missing')
    } else {
      let check = authStore.userList.find((user) => user.email == data.value.email)
      // console.log(check , data.value)
      if (check && check.password == data.value.password) {
        authStore.login(data.value)
        router.push({ name: 'Membar_Dashboard' })
      } else error.value = true
    }
  }
  </script>
  
  <style scoped>
  /* Add component-specific styles if needed */
  </style>
  