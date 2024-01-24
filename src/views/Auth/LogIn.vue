<template>
    <div class="w-full bg-[url('/src/assets/image/common/n1.png')]  bg-[50%] h-screen flex justify-center items-center">
        <div class="max-h-[750px] max-w-[300px] bg-[#ffffffec] p-5 rounded-lg shadow-md">
            <img src="/src/assets/image/common/n1.png" alt="" class="w-12 m-auto">
            <p class="font-semibold py-1.5">Email</p>
            <input type="email" class="border border-gray-300 focus:outline-yellow-600 rounded-md w-full py-1.5 px-3">
            <p class="font-semibold py-1.5">Password</p>
            <input type="password" class="border border-gray-300 focus:outline-yellow-600 rounded-md w-full py-1.5 px-3">
            <div class="flex justify-between items-center gap-5 my-3">
                <div class="flex items-center gap-2">
                    <input type="checkbox" class="">
                    <p class="text-xs">Remember me</p>
                </div>
                <p class="text-xs text-gray-400">Forgot Password?</p>
            </div>
            <!-- <button class="bg-yellow-600 w-full px-3 py-2 rounded-md my-3 text-white font-semibold">Login</button> -->
            <div class="bg-yellow-600 w-full flex justify-center rounded-md my-3 text-white font-semibold">
                <router-link to="/Membar_Dashboard" class="w-full text-center px-3 py-2 ">Login</router-link>
            </div>
            <p class="text-center text-sm text-gray-600">OR</p>
            <button class="border border-gray-400 w-full px-3 py-2 rounded-md my-3 font-bold text-gray-400 flex items-center justify-center gap-2"><ion-icon name="logo-google"></ion-icon>Sign in with Google</button>
            <div class="flex text-sm justify-between gap-2">
                <p class="text-gray-500">Don't have an account ? </p>
                <router-link to="/Signup" class="text-gray-500 font-semibold hover:text-yellow-600 cursor-pointer">Register</router-link>
            </div>
        </div>
    </div>
</template>
