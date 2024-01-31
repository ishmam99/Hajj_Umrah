<template>
    <DefaultLayout>
        <div class=" bg-slate-50 pt-[80px]">
            <div class="pt-10 flex justify-between gap-5 px-[5%] pb-10">
                <MembarSidebar/>
                <div class="px-5 bg-white py-5 rounded-md shadow-md w-3/4">
                    <div class="grid grid-cols-1 gap-5">
                        <div class="flex justify-between bg-slate-100 p-5 rounded-md shadow-md">
                            <div class="flex gap-5">
                                <img src="/src/assets/image/home/download.jpeg" alt="" class="h-[90px] w-[90px] rounded-full border">
                                <div>
                                    <p class="text-lg font-bold">Preferrd Prayer : <span class="font-[500]">Asr</span></p>
                                    <p class="text-lg font-bold">Applied Date : <span class="font-[500]">10 Dec 2023</span></p>
                                </div>
                            </div>
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
            </div>
        </div>
    </DefaultLayout>
    
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import MembarSidebar from '/src/views/Member/MembarSidevar.vue'
</script>