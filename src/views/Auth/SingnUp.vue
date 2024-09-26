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
          <div class="relative">
            <p class="font-semibold py-1.5">Password</p>
          <input
            v-model="signupData.password"
            :type="showPassword ? 'text' : 'password'"
            class="border border-gray-300 focus:outline-yellow-600 rounded-md w-full py-1.5 px-3"
          />
          <button type="button" @click="togglePasswordVisibility" class="absolute right-2 top-10">
            <span v-if="showPassword">Hide</span>
            <span v-else>Show</span>
          </button>
          </div>
          <div class="relative">
            <p class="font-semibold py-1.5">Confirm Password</p>
          <input
            v-model="signupData.password_confirmation"
            :type="showConfirmPassword ? 'text' : 'password'"
            class="border border-gray-300 focus:outline-yellow-600 rounded-md w-full py-1.5 px-3"
          />
          <button type="button" @click="toggleConfirmPasswordVisibility" class="absolute right-2 top-10">
            <span v-if="showConfirmPassword">Hide</span>
            <span v-else>Show</span>
          </button>
          </div>
          <button
            type="submit"
            class="bg-[#0b2036] w-full px-3 py-2 rounded-md my-3 text-white font-semibold flex justify-center items-center gap-2" :disabled="signupLoad">
            <svg v-if="signupLoad" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 animate-spin"
              fill="currentColor">
              <path
                d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z">
              </path>
            </svg>
            Sign Up
          </button>
        </form>
        <!-- <p class="text-center text-sm text-gray-600">OR</p>
        <button
          class="border border-gray-400 w-full px-3 py-2 rounded-md my-3 font-bold text-gray-400 flex items-center justify-center gap-2"
        >
          <ion-icon name="logo-google"></ion-icon>Sign up with Google
        </button> -->
      </div>
      <div>
        <img src="@/assets/image/common/n21.avif" alt="" class="bg-white rounded-lg" />
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
const signupLoad = ref(false)
const router = useRouter();
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const toggleConfirmPasswordVisibility = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

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
  signupLoad.value = true
    try {
    const data = await api().post('member/register',signupData.value, {
     
    })
    toast({
      title: 'Success',
      description: 'sign Completed'
    })
    console.log(data)
    router.push({ name: 'Customer Login' })
  } catch (error) {
    console.log(error)
    toast({
      title: 'Error',
      description: 'Please Try Again'
    })
  }
  signupLoad.value = false
        
    }

</script>
