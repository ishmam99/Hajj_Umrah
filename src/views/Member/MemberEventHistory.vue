<template>
    <DefaultLayout>
        
        <div class=" bg-slate-50">
            <!-- <div class="bg-[url('/src/assets/image/common/bg-pattern.jpg')] bg-cover">
                <div class="bg-[#4025779a]">
                  <div class="bg-[#00000057] rounded-none pt-20">
                    <div class=""></div>
                    <div class="hero-content text-center text-neutral-content">
                      <div class="text-left">
                        <div class="px-10 py-6">
                          <h1 class="mb-5 text-5xl text-white font-bold">Event</h1>
                          <p class="mb-5 text-lg font-semibold bg-[#0000002d] p-2 w-3/6 rounded-lg text-white">
                            Welcome to the IDL Masjid Event Dashboard! Explore upcoming events and join us in creating meaningful experiences. Your participation adds vibrancy to our community. Thank you for being a valued member of our events.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
            <div class="pt-[80px] flex justify-between">
                <MembarSidebar/>
                <div class="px-[5%] bg-white py-5  w-3/4">
                    <div class="flex justify-between items-center pb-4 border-b">
                        <p class="text-2xl text-yellow-600 font-semibold pb-2 ">See All Event</p>
                        <router-link to="" class="px-5 py-2 rounded-md bg-yellow-600 text-white">View All</router-link>
                    </div>
                    <div class="flex justify-between items-center pt-4">
                        <p class="text-2xl text-yellow-600 font-semibold pb-2 ">Registered Events</p>
                    </div>
                    <div class="grid grid-cols-1 gap-5 my-5">
                        <div class="rounded-md p-2 flex gap-5 bg-gray-100 shadow-md">
                            <img src="/src/assets/image/gallery/e1.jpg" alt="" class="w-1/3">
                            <div class="flex flex-col gap-2">
                              <h3 class="text-2xl font-bold">Educate Children</h3>
                              <p class="font-semibold text-yellow-600">25 Jan 2024</p>
                              <p class="font-semibold text-yellow-600">Location : <span class="text-black">Mashjib 
                                Premises
                              </span></p>
                            </div>
                        </div>
                        <div class="rounded-md p-2 flex gap-5 bg-gray-100 shadow-md">
                            <img src="/src/assets/image/gallery/e3.webp" alt="" class="w-1/3">
                            <div class="flex flex-col gap-2">
                              <h3 class="text-2xl font-bold">Feed The Hungry</h3>
                              <p class="font-semibold text-yellow-600">20 JAN 2024</p>
                              <p class="font-semibold text-yellow-600">Location : <span class="text-black">Mashjib 
                                Premises
                              </span></p>
                            </div>
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