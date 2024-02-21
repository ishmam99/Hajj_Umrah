<template>
  <Default-Layout>
    <div
      class="w-full pt-[120px] 2xl:h-screen py-[50px] 2xl:py-[0px] flex justify-center flex-row-reverse gap-4 items-center bg-slate-50"
    >
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
          v-if="route.name == 'Member Login'"
          src="../../assets/image/common/n21.avif"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Admin Login'"
          src="../../assets/image/common/login.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Social Service Login'"
          src="../../assets/image/common/login-2.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Youth Management Login'"
          src="../../assets/image/common/login-9.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Finance Login'"
          src="../../assets/image/common/login-4.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Education Login'"
          src="../../assets/image/common/login-5.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Supply Chain Management Login'"
          src="../../assets/image/common/login-6.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'HR Login'"
          src="../../assets/image/common/login-7.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        /><img
          v-if="route.name == 'Volunteer Login'"
          src="../../assets/image/common/login-7.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Operation Login'"
          src="../../assets/image/common/login-8.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
      </div>
    </div>
  </Default-Layout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useAuthStore } from '@/stores/AuthStore'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Tilt from 'vanilla-tilt-vue'

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
    const user = authStore.userList.find((u) => u.email == data.value.email)
    // console.log(check , data.value)
    if (user && user.password == data.value.password) {
      authStore.login(user)
      if (user.role == 'member') {
        authStore.user.dashboard = { name: 'Membar_Dashboard' }
        router.push({ name: 'Membar_Dashboard' })
        store.authUser = user
      } else if (user.role == 'admin') {
        authStore.user.dashboard = { name: 'Admin_Dashboard' }
        router.push({ name: 'Admin_Dashboard' })
        store.authUser = user
      } else if (user.role == 'social') {
        authStore.user.dashboard = { name: 'Social_Dashboard' }
        router.push({ name: 'Social_Dashboard' })
        store.authUser = user
      } else if (user.role == 'youth') {
        authStore.user.dashboard = { name: 'Youth_Dashboard' }
        router.push({ name: 'Youth_Dashboard_Profile' })
        store.authUser = user
      } else if (user.role == 'finance') {
         authStore.user.dashboard = { name: 'Finance_Dashboard' }
        router.push({ name: 'Finance_Dashboard_Profile' })
        store.authUser = user
      } else if (user.role == 'education') {
        authStore.user.dashboard = { name: 'Education_Dashboard' }
        router.push({ name: 'Education_Dashboard' })
        store.authUser = user
      } else if (user.role == 'supply') {
        authStore.user.dashboard = { name: 'Supply_Dashboard' }
        router.push({ name: 'Supply_Dashboard' })
        store.authUser = user
      } else if (user.role == 'hr') {
        authStore.user.dashboard = { name: 'HR_Dashboard' }
        router.push({ name: 'HR_Dashboard_Proile' })
        store.authUser = user
      } else if (user.role == 'volunteer') {
        authStore.user.dashboard = { name: 'Volunteer_Dashboard' }
        router.push({ name: 'Volunteer_Dashboard' })
        store.authUser = user
      } else if (user.role == 'operation') {
        authStore.user.dashboard = { name: 'Operation_Dashboard' }
        router.push({ name: 'Operation_Dashboard' })
        store.authUser = user
      }
    } else error.value = true
  }
}
</script>
