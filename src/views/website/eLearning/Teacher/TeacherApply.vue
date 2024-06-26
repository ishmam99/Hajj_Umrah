<template>
  <DefaultLayout>
    <div
      class="bg-grey-lighter flex justify-center items-center pt-[80px] pb-5 bg-[url('/src/assets/images/auth-banner.png')] min-h-[70vh] bg-cover bg-center"
    >
      <div
        v-if="authStore.isAuthenticated == true"
        class="flex flex-col items-center justify-center px-2 w-1/3"
      >
        <form @submit.prevent="studentRegister" class="w-full">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-6 font-bold text-2xl text-green-700">Register as a teacher</h1>
            <div class="flex justify-between gap-5 items-center">
              <div class="flex flex-col gap-5 w-full pb-2">
                <div class="w-full">
                  <label for="" class="text-gray-600 text-center"
                    >Import CV <span class="text-red-500">*</span></label
                  >
                  <div
                    class="flex justify-center items-center h-[45px] rounded-2xl bg-white px-4 py-2 text-sm text-gray-500 text-center relative border-2 mt-2"
                  >
                    <input
                      @change="onFileChange"
                      type="file"
                      class="h-full w-full opacity-0 absolute top-0"
                    />
                    Choose File
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Register
            </button>
          </div>
        </form>
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
<script setup>
import { ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import { useAuthStore } from '@/stores/AuthStore'
import { useToast } from '/components/ui/toast/use-toast'

const authStore = useAuthStore()
const id = authStore?.user?.id
const { toast } = useToast()

const cv = ref({
  cv: ''
})
const selectedFile = ref(null)

function onFileChange(event) {
  selectedFile.value = event.target.files[0]
  cv.value.cv = event.target.files[0]
  console.log('selected image', selectedFile.value)
}
const studentRegister = async () => {
  try {
    const data = await api().post(`apply-student/${id}`, cv.value)
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
