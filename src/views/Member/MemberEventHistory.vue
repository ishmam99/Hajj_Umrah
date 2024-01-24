<template>
    <DefaultLayout>
        <div class="px-[5%] bg-white">
            <div class="">
                <div class="flex items-center gap-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                    >
                    <path
                        d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z"
                    ></path>
                    </svg>
                    <p>Member / </p>

                    <p class="text-yellow-500">Event History</p>
                </div>
                <div class="bg-white rounded-lg relative py-3">
                    <h1 class="text-yellow-500 text-4xl font-semibold">Event History</h1>
                    <div>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
        <div class=" bg-slate-50">
            <div class="pt-10 flex justify-between gap-5 px-[5%] pb-10">
                <div class="px-[5%] bg-white py-5 rounded-md shadow-md w-3/4">
                    <p  class="text-2xl text-yellow-600 text-center font-bold">Your Event History</p>
                    <p class="text-2xl text-yellow-600 font-semibold py-2 border-b">Recently Registerd Events</p>
                    <div class="grid grid-cols-3 gap-5 my-5">
                        <div class="border border-gray-500 rounded-md p-5 flex flex-col gap-2 text-center">
                            <img src="/src/assets/image/home/e3.png" alt="" class="w-full">
                            <h3 class="text-2xl font-bold">Feed The Hungry</h3>
                            <p class="text-sm font-semibold text-yellow-600">20 JAN 2024</p>
                            <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.</p> -->
                            <!-- <button class="h-[50px] w-full rounded-md border border-gray-500">Register</button> -->
                        </div>
                    </div>
                    <p class="text-2xl text-yellow-600 font-semibold pb-2 border-b">Ongoing Events</p>
                    <div class="grid grid-cols-3 gap-5 my-5">
                        <div class="border border-gray-500 rounded-md p-5 flex flex-col gap-2 text-center">
                            <img src="/src/assets/image/home/e3.png" alt="" class="w-full">
                            <h3 class="text-2xl font-bold">Feed The Hungry</h3>
                            <p class="text-sm font-semibold text-yellow-600">20 JAN 2024</p>
                            <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.</p> -->
                            <!-- <button class="h-[50px] w-full rounded-md border border-gray-500">Register</button> -->
                        </div>
                    </div>
                    <p class="text-2xl text-yellow-600 font-semibold pb-2 border-b">Past Events</p>
                    <div class="grid grid-cols-3 gap-5 mt-5 ">
                        <div class="border border-gray-500 rounded-md p-5 flex flex-col gap-2 text-center">
                            <img src="/src/assets/image/home/e3.png" alt="" class="w-full">
                            <h3 class="text-2xl font-bold">Feed The Hungry</h3>
                            <p class="text-sm font-semibold text-yellow-600">20 JAN 2024</p>
                            <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.</p> -->
                            <!-- <button class="h-[50px] w-full rounded-md border border-gray-500">Register</button> -->
                        </div>
                        <div class="border border-gray-500 rounded-md p-5 flex flex-col gap-2 text-center">
                            <img src="/src/assets/image/home/e3.png" alt="" class="w-full">
                            <h3 class="text-2xl font-bold">Feed The Hungry</h3>
                            <p class="text-sm font-semibold text-yellow-600">20 JAN 2024</p>
                            <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.</p> -->
                            <!-- <button class="h-[50px] w-full rounded-md border border-gray-500">Register</button> -->
                        </div>
                        <div class="border border-gray-500 rounded-md p-5 flex flex-col gap-2 text-center">
                            <img src="/src/assets/image/home/e3.png" alt="" class="w-full">
                            <h3 class="text-2xl font-bold">Feed The Hungry</h3>
                            <p class="text-sm font-semibold text-yellow-600">20 JAN 2024</p>
                            <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.</p> -->
                            <!-- <button class="h-[50px] w-full rounded-md border border-gray-500">Register</button> -->
                        </div>
                    </div>
                </div>
                <MembarSidebar/>
            </div>
        </div>
    </DefaultLayout>
    
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import MembarSidebar from '/src/views/Member/MembarSidevar.vue'
</script>