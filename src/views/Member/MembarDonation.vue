<template>
    <div class=" bg-slate-50">
        <MembarNavbar/>
        <div class="pt-[100px] flex justify-between gap-5 px-[5%] pb-10">
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
        <foot/>
    </div>
</template>
<script setup>
import MembarSidebar from '/src/views/Member/MembarSidevar.vue'
import MembarNavbar from './MembarNavbar.vue'
import foot from '/src/components/footer.vue'
</script>