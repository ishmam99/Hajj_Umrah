<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useAuthStore } from '@/stores/AuthStore'
const authStore = useAuthStore()
</script>
<template>
  <DefaultLayout>
    <div class="bg-grey-lighter flex pt-[80px] pb-5">
      <img src="/src/assets/images/auth-banner.png" alt="" class="w-2/3" />
      <div
        v-if="authStore.isAuthenticated == true"
        class="flex flex-col items-center justify-center px-2 w-1/3"
      >
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-6 font-bold text-2xl text-green-700">Signup as a Teacher</h1>
          <div class="mb-3">
            <label for="">Full Name <span class="text-red-500">*</span></label>
            <input
              type="text"
              class="block border border-grey-light w-full p-2 rounded"
              name="fullname"
            />
          </div>

          <div class="mb-3">
            <label for="">Phone <span class="text-red-500">*</span></label>
            <input
              type="text"
              class="block border border-grey-light w-full p-2 rounded"
              name="phone"
            />
          </div>

          <div class="mb-3">
            <label for="">Email <span class="text-red-500">*</span></label>

            <input
              type="text"
              class="block border border-grey-light w-full p-2 rounded mb-4"
              name="email"
            />
          </div>

          <div class="mb-3">
            <label for="">Gender</label>

            <select class="block border border-grey-light w-full p-2 rounded mb-4">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="">Country</label>

            <input
              type="text"
              class="block border border-grey-light w-full p-2 rounded mb-4"
              name="country"
            />
          </div>

          <div class="mb-3">
            <label for="">Address</label>

            <input
              type="text"
              class="block border border-grey-light w-full p-2 rounded mb-4"
              name="address"
            />
          </div>

          <div class="mb-3">
            <label for="">Password <span class="text-red-500">*</span></label>
            <input
              type="password"
              class="block border border-grey-light w-full p-2 rounded mb-4"
              name="password"
            />
          </div>

          <div class="mb-3">
            <label for="">Confirm Password <span class="text-red-500">*</span></label>

            <input
              type="password"
              class="block border border-grey-light w-full p-2 rounded mb-4"
              name="confirm_password"
            />
          </div>

          <div class="input-group mb-3 flex flex-col gap-2">
            <label for="resume"
              >Upload Resume <span class="font-semibold">(PDF or DOC)</span>
              <span class="text-red-500">*</span></label
            >
            <input type="file" id="resume" ref="resumeInput" @change="handleFileChange" />
          </div>

          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Register
          </button>
        </div>
      </div>
      <div v-else class="flex justify-center items-center w-1/3">
        <div>
          <P class="text-3xl font-semibold text-center pb-1">Not a member yet ?</P>
          <p class="text-center pb-2">Signin for register</p>
          <div class="flex justify-center gap-5">
            <router-link
              to="/Member_Login"
              class="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold"
              >Sign In</router-link
            >
            <router-link
              to="/Signup"
              class="px-5 py-2 rounded-lg bg-green-600 text-white font-semibold"
              >Sign Up</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
