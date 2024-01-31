<template>
    <Default-Layout>
        <div class="w-full h-screen flex justify-center flex-row-reverse gap-4 items-center bg-slate-50">
            <form @submit.prevent="login(user)">
                <div class="max-h-[750px] w-[600px] bg-[#ffffff] px-5 py-10 rounded-lg shadow-md">
                    <img src="/src/assets/image/common/n1.png" alt="" class="w-48 m-auto">
                    <p class="font-semibold py-1.5">Email</p>
                    <input @change="error=false" v-model="data.email" type="email" class="border border-gray-300 focus:outline-yellow-600 rounded-md w-full py-1.5 px-3">
                    <p class="font-semibold py-1.5">Password</p>
                    <input v-model="data.password" type="password" class="border border-gray-300 focus:outline-yellow-600 rounded-md w-full py-1.5 px-3">
                    <div class="flex justify-between items-center gap-5 my-3">
                        <div class="flex items-center gap-2">
                            <input type="checkbox" class="">
                            <p class="text-xs">Remember me</p>
                        </div>
                        <p class="text-xs text-gray-400">Forgot Password?</p>
                    </div>
                    <p v-if="error" class="text-red-600 text-center font-bold">No user found</p>
                    <button type="submit" class="bg-[#0b2036] w-full px-3 py-2 rounded-md my-3 text-white font-semibold">Login</button>
                    <p class="text-center text-sm text-gray-600">OR</p>
                    <button class="border border-gray-400 w-full px-3 py-2 rounded-md my-3 font-bold text-gray-400 flex items-center justify-center gap-2"><ion-icon name="logo-google"></ion-icon>Sign in with Google</button>
                    <div class="flex text-sm justify-between gap-2">
                        <p class="text-gray-500">Don't have an account ? </p>
                        <router-link to="/Signup" class="text-gray-500 font-semibold hover:text-[#0b2036] cursor-pointer">Register</router-link>
                    </div>
                </div>
                
            </form>

            <div>
                <img src="../../assets/image/common/n21.avif" alt="" class=" bg-white rounded-lg">
            </div>
        </div>
    </Default-Layout>
    
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useAuthStore } from '/src/stores/AuthStore.ts';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import Tilt from 'vanilla-tilt-vue';

const router = useRouter();
const error= ref(false)

const data = ref({
  email:'',
  password: '',
});
const authStore = useAuthStore()
const login = () => {
    
    if (data.value.email == '' || data.value.password == '') {
        alert('Email or password is missing')
    }
    else {
        let check = authStore.userList.find((user) => 
        user.email == data.value.email)
        // console.log(check , data.value)
        if (check && check.password==data.value.password) {
            authStore.login(data.value);
            router.push({ name: 'Membar_Dashboard' });
        }
        else
        error.value=true
    }
    
};
</script>
