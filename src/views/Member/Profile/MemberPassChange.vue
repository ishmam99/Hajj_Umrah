<template>
    <DefaultLayout>
        <div class=" bg-slate-50">
            <div class="bg-[url('/src/assets/image/common/bg-pattern.jpg')] bg-cover">
                <div class="bg-[#11295d9a]">
                  <div class="bg-[#00000057] rounded-none pt-20">
                    <div class=""></div>
                    <div class="hero-content text-center text-neutral-content">
                      <div class="text-left">
                        <div class="px-10 py-6">
                          <h1 class="mb-5 text-5xl text-white font-bold">Change Password</h1>
                          <p class="mb-5 text-lg font-semibold bg-[#0000002d] p-2 w-3/6 rounded-lg text-white">
                            Welcome to the IDL Masjid Account Settings! Ensure your account's security by updating your password here. Your commitment to a secure account helps maintain the integrity of our community platform. Thank you for your vigilance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <div class=" bg-slate-50">
            <div class="pt-10 flex flex-row-reverse justify-between gap-5 px-8 pb-10">
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