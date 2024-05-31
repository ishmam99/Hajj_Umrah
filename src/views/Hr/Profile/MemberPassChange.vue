<template>
    <DefaultLayout>
        <div class=" bg-slate-50">
            
        </div>
        <div class=" bg-slate-50">
            <div class="pt-20 flex flex-row-reverse justify-between">
                <div class="px-[5%] flex flex-col items-center justify-center gap-3 bg-white py-5 pb-5 rounded-md shadow-md w-3/4">
                    <p  class="text-2xl text-[#11295dc7] text-center font-bold pb-8">Change Password</p>
                    <input type="password" placeholder="Old Password" class="w-3/4 rounded-md px-2 py-1.5 text-sm border border-gray-500">
                    <input type="password" placeholder="New Password" class="w-3/4 rounded-md px-2 py-1.5 text-sm border border-gray-500">
                    <input type="password" placeholder="Confirm Password" class="w-3/4 rounded-md px-2 py-1.5 text-sm border border-gray-500">
                    <button class="bg-[#11295dc7] text-white text-sm font-semibold py-2 w-3/4 rounded-md">Change Password</button>
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