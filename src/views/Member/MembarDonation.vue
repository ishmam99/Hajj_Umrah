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

                    <p class="text-yellow-500">Donation History</p>
                </div>
                <div class="bg-white rounded-lg relative py-3">
                    <h1 class="text-yellow-500 text-4xl font-semibold">Donation History</h1>
                    <div>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
        <div class=" bg-slate-50">
            <div class="pt-10 flex justify-between gap-5 px-[5%] pb-10">
                <div class="px-[20px] bg-white py-5 rounded-md shadow-md w-3/4">
                    <p  class="text-2xl text-yellow-600 text-center font-bold">Your Donation History</p>
                    <!-- <div class="bg-slate-50 rounded-lg gap-y-2 flex justify-between w-full px-4 py-2 border-b-gray-100  mb-2 mt-3">
                        <div class="font-semibold">
                            <p>#INV-1015</p>
                        </div>
                        
                        <div class="flex items-center gap-2 text-xs font-light absolute md:static right-4 top-2">
                            <p>Aug 07, 2023</p>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap font-semibold">
                            <p>Card Payment</p>
                        </div>
                        <div class="flex items-center font-semibold gap-2 uppercase">
                            
                            <p>xxxx-xxxx-xxxx-0123</p>
                        </div>
                        <div class="flex items-center font-semibold gap-2">
                            
                            <p>$ 1,230</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <p class="w-[80px] rounded-3xl bg-green-600 text-white text-xs font-light text-center py-[2px] absolute md:static right-4 top-10">Paid</p>
                        </div>
                    </div> -->
                    <div class="bg-slate-50 rounded-lg gap-y-2 w-full px-4 py-2 border-b-gray-100  mb-2 mt-3">
                        <div class="flex justify-between items-center mb-1">
                            <div class="font-semibold flex gap-2">
                                <p>Donation Id :</p>
                                <p>#INV-1015</p>
                            </div>
                            
                            <div class="flex items-center gap-2 text-xs font-light absolute md:static right-4 top-2">
                                <p>Donation Date</p>
                                <p>Aug 07, 2023</p>
                            </div>
                        </div>
                        <div class="flex justify-between items-center mb-1">
                            <div class="flex items-center gap-2 flex-wrap font-semibold">
                                <p>Payment Method : </p>
                                <p>Card Payment</p>
                            </div>
                            <div class="flex items-center font-semibold gap-2">
                                <p>Card Number :</p>
                                <p class="uppercase">xxxx-xxxx-xxxx-0123</p>
                            </div>
                        </div>
                        <div class="flex justify-between items-center mb-1">
                            <div class="flex items-center font-semibold gap-2">
                                <p class="">Donated Amount :</p>
                                <p>$ 1,230</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <p class="w-[80px] rounded-3xl bg-green-600 text-white text-xs font-light text-center py-[2px] absolute md:static right-4 top-10">Paid</p>
                            </div>
                        </div>
                        <div class="mt-3">
                            <!-- <p class="font-semibold">Details</p> -->
                            <p class="font-semibold">Donated For :</p>
                            <p>Lorem, ipsum dolor.</p>
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