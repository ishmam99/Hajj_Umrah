<template>
  <DefaultLayout>
    <div class="bg-grey-lighter flex justify-center items-center pt-[80px] pb-5 bg-[url('/src/assets/images/auth-banner.png')] min-h-[70vh] bg-cover bg-center">
      <div
        v-if="authStore.isAuthenticated == true"
        class="flex flex-col items-center justify-center px-2 w-1/3"
      >
        <form @submit.prevent="studentRegister" class="w-full">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-6 font-bold text-2xl text-green-700">Signup and start learning</h1>
            
            <button
              type="submit"
              class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <div v-else class="flex justify-center items-center w-1/3 bg-white p-10 rounded-md shadow-md">
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
<script setup>
import { ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import { useAuthStore } from '@/stores/AuthStore'
import { useToast } from '/components/ui/toast/use-toast'

const authStore = useAuthStore()
const id = authStore?.user?.id
const { toast } = useToast()

const studentRegister = async () => {
  try {
    const data = await api().post(`apply-student/${id}`,)
    toast({
      title: 'Register form submitted',
      description: 'You will be notify in 24 hours'
    })
    console.log(data)
  } catch (error) {
    console.log(error)
    toast({
      title: 'Error',
      description: 'Please Try Again'
    })
  }
}
</script>
