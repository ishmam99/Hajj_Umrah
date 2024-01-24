<template>
    <div class=" bg-slate-50">
        <MembarNavbar/>
        <div class="pt-[100px] flex justify-between gap-5 px-[5%] pb-10">
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
        <foot/>
    </div>
</template>
<script setup>
import MembarSidebar from '/src/views/Member/MembarSidevar.vue'
import MembarNavbar from './MembarNavbar.vue'
import foot from '/src/components/footer.vue'
</script>