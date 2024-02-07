<template>
    <DefaultLayout>
        <div class=" bg-slate-50">
            <!-- <div class="bg-[url('/src/assets/image/common/bg-pattern.jpg')] bg-cover">
                <div class="bg-[#31451396]">
                  <div class="bg-[#00000057] rounded-none pt-20">
                    <div class=""></div>
                    <div class="hero-content text-center text-neutral-content">
                      <div class="text-left">
                        <div class="px-10 py-6">
                          <h1 class="mb-5 text-5xl text-white font-bold">Imam</h1>
                          <p class="mb-5 text-lg font-semibold bg-[#0000002d] p-2 w-3/6 rounded-lg text-white">
                            Welcome to the IDL Masjid Imam Dashboard! Here, you play a crucial role in guiding and uplifting our community. Your wisdom and leadership are instrumental in fostering a spiritually enriching environment. Thank you for your dedication to our collective journey.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
            <div class="pt-[80px] flex justify-between">
                <MembarSidebar/>
                <div class="px-5 bg-white py-5 w-3/4">
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