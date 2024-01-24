<template>
    <div class="w-full bg-slate-50 h-screen flex justify-center items-center bg-[url('/src/assets/image/common/n1.png')]  bg-[50%]">
       
        <div class="max-h-[750px] max-w-[300px] flex flex-col justify-center bg-[#ffffffec]  p-5 rounded-lg shadow-md">
            <img src="/src/assets/image/common/n1.png" alt="" class="w-12 m-auto">
            <p class="font-semibold py-1.5">Email</p>
            <input type="email" class="border border-gray-300 focus:outline-yellw-600 rounded-md w-full py-1.5 px-3">
            <p class="font-semibold py-1.5">Password</p>
            <input type="password" class="border border-gray-300 focus:outline-yellow-600 rounded-md w-full py-1.5 px-3">
            <p class="font-semibold py-1.5">Confirm Password</p>
            <input type="password" class="border border-gray-300 focus:outline-yellow-600 rounded-md w-full py-1.5 px-3">
            <button class="bg-yellow-600 w-full px-3 py-2 rounded-md my-3 text-white font-semibold">Sign Up</button>
            <p class="text-center text-sm text-gray-600">OR</p>
            <button class="border border-gray-400 w-full px-3 py-2 rounded-md my-3 font-bold text-gray-400 flex items-center justify-center gap-2"><ion-icon name="logo-google"></ion-icon>Sign up with Google</button>
        </div>
    </div>
</template>