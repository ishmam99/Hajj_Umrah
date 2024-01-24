<template>
    
    <DefaultLayout>
        <div class="w-full bg-slate-50 h-screen flex justify-center items-center">
            <div class="max-h-[750px] w-[600px] flex flex-col justify-center bg-[#ffffff]  p-5 rounded-lg shadow-md">
                <img src="/src/assets/image/common/n1.png" alt="" class="w-12 m-auto">
                <form @submit.prevent="signup(user)">
                    <p class="font-semibold py-1.5">Email</p>
                    <input v-model="data.email" type="email" class="border border-gray-300 focus:outline-yellw-600 rounded-md w-full py-1.5 px-3">
                    <p class="font-semibold py-1.5">Password</p>
                    <input v-model="data.password" type="password" class="border border-gray-300 focus:outline-yellow-600 rounded-md w-full py-1.5 px-3">
                    <p class="font-semibold py-1.5">Confirm Password</p>
                    <input v-model="data.confirmpassword" type="password" class="border border-gray-300 focus:outline-yellow-600 rounded-md w-full py-1.5 px-3">
                    <button type="submit" class="bg-yellow-600 w-full px-3 py-2 rounded-md my-3 text-white font-semibold">Sign Up</button>
                </form>
                <p class="text-center text-sm text-gray-600">OR</p>
                <button class="border border-gray-400 w-full px-3 py-2 rounded-md my-3 font-bold text-gray-400 flex items-center justify-center gap-2"><ion-icon name="logo-google"></ion-icon>Sign up with Google</button>
            </div>
        </div>
        {{ data }}
    </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useAuthStore } from '/src/stores/AuthStore.ts';
import { ref } from 'vue'



const data = ref({
    email:'',
    password: '',
    confirmpassword:''
});
const authStore = useAuthStore();
const signup = () => {
    if (data.value.email == '' || data.value.password == '' || data.value.confirmpassword == '') {
        alert('Email or password is missing')
        console.log(data.value)
    }
    if (data.value.password != data.value.confirmpassword) {
        alert('password dont match')
    }
    else {
        authStore.signup({ email: data.value.email, password: data.value.password });
    }
}
    
</script>