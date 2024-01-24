<template>
    <div class=" bg-slate-50">
        <MembarNavbar/>
        <div class="pt-[100px] flex justify-between gap-5 px-[5%] pb-10">
            <div class="px-[5%] flex flex-col gap-3 bg-white py-5 rounded-md shadow-md w-3/4">
                <p  class="text-2xl text-yellow-600 text-center font-bold pb-8">Change Password</p>
                <input type="password" placeholder="Old Password" class="w-full rounded-md px-2 py-1.5 text-sm border border-gray-500">
                <input type="password" placeholder="New Password" class="w-full rounded-md px-2 py-1.5 text-sm border border-gray-500">
                <input type="password" placeholder="Confirm Password" class="w-full rounded-md px-2 py-1.5 text-sm border border-gray-500">
                <button class="bg-yellow-600 text-white text-sm font-semibold py-2 w-full">Change Password</button>
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