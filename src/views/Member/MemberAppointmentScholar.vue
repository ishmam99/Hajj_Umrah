<template>
   <div class="px-5 bg-white py-5 w-3/4">
                  <p class="text-2xl font-bold py-3 border-b">Scholar Appointment List</p>
                    <div class="grid grid-cols-1 gap-5 mt-5">
                        <div class="flex justify-between bg-slate-100 p-5 rounded-md shadow-md">
                            <div class="flex gap-5">
                                <img src="/src/assets/image/home/download.jpeg" alt="" class="h-[90px] w-[90px] rounded-full border">
                                <div>
                                    <p class="text-lg font-bold">Preferrd Prayer : <span class="font-[500]">Asr</span></p>
                                    <p class="text-lg font-bold">Applied Date : <span class="font-[500]">10 Dec 2023</span></p>
                                </div>
                            </div>
                            <p class="text-blue-600 font-sm font-bold">Pending</p>
                            <p class="text-blue-600 font-sm font-bold">Pending</p>
                        </div>

                        <div class="flex justify-between bg-slate-100 p-5 rounded-md shadow-md">
                            <div class="flex gap-5">
                                <img src="/src/assets/image/home/download.jpeg" alt="" class="h-[90px] w-[90px] rounded-full border">
                                <div>
                                    <p class="text-lg font-bold">Preferrd Prayer : <span class="font-[500]">Asr</span></p>
                                    <p class="text-lg font-bold">Applied Date : <span class="font-[500]">23 Dec 2023</span></p>
                                </div>
                            </div>
                            <p class="text-green-600 font-sm font-bold">Approverd</p>
                        </div>
                        
                    </div>
                </div>
    
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import MembarSidebar from '/src/views/Member/MembarSidevar.vue'
</script>