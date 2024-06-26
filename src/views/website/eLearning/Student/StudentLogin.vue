<script setup></script>

<template>
  <DefaultLayout>
    <div class="bg-grey-lighter flex pt-[60px]">
      <img src="/src/assets/images/auth-banner.png" alt="" class="w-2/3" />
      <div class="flex flex-col items-center justify-center px-10 w-1/3">
        <div class="bg-white px-6 py-8 rounded shadow-xl text-black w-full">
          <h1 class="mb-6 font-bold text-2xl text-green-700">Login as a Student</h1>

          <div class="mb-3">
            <label for="">Email <span class="text-red-500">*</span></label>

            <input
              type="text"
              class="block border border-grey-light w-full p-2 rounded mb-4"
              name="email"
              id="email"
            />
          </div>

          <div class="mb-3">
            <label for="">Password <span class="text-red-500">*</span></label>
            <input
              type="password"
              class="block border border-grey-light w-full p-2 rounded mb-4"
              name="password"
              id="password"
            />
          </div>

          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Sign in
          </button>
        </div>

        <div class="text-grey-dark mt-6">
          If you don't have any account,?
          <router-link to="/student/registration" class="border-blue-500 text-blue-500">
            <span class="font-bold">Signup Now!</span> </router-link
          >.
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
