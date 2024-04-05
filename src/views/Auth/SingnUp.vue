<template>
  <DefaultLayout>
    <div
      class="w-full bg-slate-50 h-screen flex flex-row-reverse gap-4 justify-center items-center"
    >
      <div
        class="max-h-[750px] w-[600px] flex flex-col justify-center bg-[#ffffff] px-5 py-8 rounded-lg shadow-md"
      >
        <img src="/src/assets/image/common/n1.png" alt="" class="w-48 m-auto" />
        <form @submit.prevent="signup()">
            <p class="font-semibold py-1.5">Name</p>
          <input
            v-model="signupData.name"
            type="text"
            class="border border-gray-300 focus:outline-yellw-600 rounded-md w-full py-1.5 px-3"
          />
          <p class="font-semibold py-1.5">Email</p>
          <input
            v-model="signupData.email"
            type="email"
            class="border border-gray-300 focus:outline-yellw-600 rounded-md w-full py-1.5 px-3"
          />
          <p class="font-semibold py-1.5">Password</p>
          <input
            v-model="signupData.password"
            type="password"
            class="border border-gray-300 focus:outline-yellow-600 rounded-md w-full py-1.5 px-3"
          />
          <p class="font-semibold py-1.5">Confirm Password</p>
          <input
            v-model="signupData.password_confirmation"
            type="password"
            class="border border-gray-300 focus:outline-yellow-600 rounded-md w-full py-1.5 px-3"
          />
          <button
            type="submit"
            class="bg-[#0b2036] w-full px-3 py-2 rounded-md my-3 text-white font-semibold"
          >
            Sign Up
          </button>
        </form>
        <p class="text-center text-sm text-gray-600">OR</p>
        <button
          class="border border-gray-400 w-full px-3 py-2 rounded-md my-3 font-bold text-gray-400 flex items-center justify-center gap-2"
        >
          <ion-icon name="logo-google"></ion-icon>Sign up with Google
        </button>
      </div>
      <div>
        <img src="../../assets/image/common/n21.avif" alt="" class="bg-white rounded-lg" />
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useAuthStore } from '/src/stores/AuthStore.ts';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useToast } from '/components/ui/toast/use-toast'

const router = useRouter();


const { toast } = useToast()
const signupData = ref({
    name:'',
    email:'',
    password: '',
    password_confirmation:''
});
const authStore = useAuthStore();
const signup = async () => {
  console.log(signupData.value)
    try {
    const data = await api().post('member/register',signupData.value, {
     
    })
    toast({
      title: 'Success',
      description: 'sign Completed'
    })
    console.log(data)
    router.push({ name: 'Member Login' })
  } catch (error) {
    console.log(error)
    toast({
      title: 'Error',
      description: 'Please Try Again'
    })
  }
        
    }

</script>
