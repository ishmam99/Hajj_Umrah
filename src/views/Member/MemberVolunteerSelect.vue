<template>
    <DefaultLayout>
        
        <div class=" bg-slate-50">
            <div class="bg-[url('/src/assets/image/common/bg-pattern.jpg')] bg-cover">
                <div class="bg-[#330c358d]">
                  <div class="bg-[#00000057] rounded-none pt-20">
                    <div class=""></div>
                    <div class="hero-content text-center text-neutral-content">
                      <div class="text-left">
                        <div class="px-10 py-6">
                          <h1 class="mb-5 text-5xl text-white font-bold">Volunteer</h1>
                          <p class="mb-5 text-lg font-semibold bg-[#0000002d] p-2 w-3/6 rounded-lg text-white">
                            Welcome to the IDL Masjid Volunteer Dashboard! Your commitment to service is the heartbeat of our community. Explore opportunities, track your contributions, and make a lasting impact. Thank you for being a vital part of our volunteer family!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div class="pt-10 flex justify-between gap-5 px-8 pb-10">
                <MembarSidebar/>
                <div class="px-5 bg-white py-5 rounded-md shadow-md w-3/4">
                    <div class="grid grid-cols-1 gap-5">
                        <div class="flex justify-between bg-slate-100 p-5 rounded-md shadow-md">
                          <div class=" flex gap-5">
                            <img src="/src/assets/image/home/e3.png" alt="" class="w-[90px]">
                            <div>
                                <p class="text-lg font-bold">Applied Program : <span class="font-[500]">Feed The Hungry</span></p>
                                <p class="text-lg font-bold">Applied Date : <span class="font-[500]">23 Dec 2023</span></p>
                                <p class="text-lg font-bold">Applied Time : <span class="font-[500]">12.30 PM</span></p>
                            </div>
                          </div>
                            
                            <p class="text-sm font-bold text-green-600">Approved</p>
                        </div>

                        <div class="flex justify-between bg-slate-100 p-5 rounded-md shadow-md">
                            <div class=" flex gap-5">
                              <img src="/src/assets/image/home/e4.png" class="w-[90px]">
                              <div>
                                  <p class="font-bold">Applied Program : <span class="font-[500]">Comfort Sick</span></p>
                                  <p class="font-bold">Applied Date : <span class="font-[500]">23 Dec 2023</span></p>
                                  <p class="font-bold">Applied Time : <span class="font-[500]">11.30 PM</span></p>
                              </div>
                            </div>
                           
                            <p class="text-sm font-bold text-green-600">Approved</p>
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