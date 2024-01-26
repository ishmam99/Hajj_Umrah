<template>
    <section class="bg-slate-100 w-full my-8 py-5 px-[5%]">
    <!-- Service Section Header -->
        <h2 class="text-3xl font-bold pb-16 uppercase">Services</h2>
        <!-- Responsive Card Layout -->
        <div class="grid grid-cols-4 gap-x-5 gap-y-16">
        <!-- Loop through service items to generate cards -->
        <router-link to="/services/education">
            <div class="bg-white rounded-2xl bg-[url('../assets/image/commitees/8.png')] w-full bg-top bg-cover bg-origin-contentshadow-2xl  border border-white h-full flex flex-col items-center uppercase text-center relative">
                  <div class="h-full rounded-2xl flex flex-col items-center  bg-[#0000007c] w-full px-5 py-14">
                  <img src="/src/assets/image/home/s1.png" alt="logo 1" class="mb-4 absolute top-[-25%] p-4 rounded-full bg-white"/>
                  <h2 class="font-bold mb-2 text-white">Education Service</h2>
               </div>
            </div>
        </router-link>

        <router-link to="/services/social">
            <div class="bg-white rounded-2xl bg-[url('../assets/image/commitees/0.png')] w-full bg-top bg-cover bg-origin-contentshadow-2xl  border border-white h-full flex flex-col items-center uppercase text-center relative">
               <div class="h-full rounded-2xl flex flex-col items-center  bg-[#0000007c] w-full px-5 py-14">
                  <img src="/src/assets/image/home/s2.png" alt="logo 1" class="mb-4 absolute top-[-25%] p-4 rounded-full bg-white"/>
                  <h2 class="font-bold mb-2 text-white">Social Services</h2>
               </div>
            </div>
        </router-link>
                      

            <router-link to="/services/new_muslim">
               <div class="bg-white rounded-2xl bg-[url('../assets/image/home/e3.png')] w-full bg-top bg-cover bg-origin-contentshadow-2xl border border-white h-full flex flex-col items-center uppercase text-center relative">
                  <div class="h-full rounded-2xl flex flex-col items-center  bg-[#0000007c] w-full px-5 py-14">
                     <img src="/src/assets/image/home/s3.png" alt="logo 1" class="mb-4 absolute top-[-25%] p-4 rounded-full bg-white"/>
                     <h2 class="font-bold mb-2 text-white">New Muslim Services</h2>
                  </div>
               </div>
            </router-link>

            <router-link to="/services/special_needs">
               <div class="bg-white rounded-2xl bg-[url('../assets/image/home/l5.png')] w-full bg-top bg-cover bg-origin-contentshadow-2xl border border-white h-full flex flex-col items-center uppercase text-center relative">
                  <div class="h-full rounded-2xl flex flex-col items-center  bg-[#0000007c] w-full px-5 py-14">
                     <img src="/src/assets/image/home/s4.png" alt="logo 1" class="mb-4 absolute top-[-25%] p-4 rounded-full bg-white"/>
                     <h2 class="font-bold mb-2 text-white">Special Needs Services</h2>
                  </div>
               </div>
            </router-link>
                      
            <router-link class="view-all" to="/services/nikah">
               <div class="bg-white rounded-2xl bg-[url('../assets/image/home/w.jpg')] w-full bg-top bg-cover bg-origin-contentshadow-2xl border border-white h-full flex flex-col items-center uppercase text-center relative">
                  <div class="h-full rounded-2xl flex flex-col items-center  bg-[#0000007c] w-full px-5 py-14">
                     <img src="/src/assets/image/home/s5.png" alt="logo 1" class="mb-4 absolute top-[-25%] p-4 rounded-full bg-white"/>
                     <h2 class="font-bold mb-2 text-white">Nikah Services</h2>
                  </div>
               </div>
            </router-link>
            

            <router-link to="/services/funeral">
               <div class="bg-white rounded-2xl bg-[url('../assets/image/home/f.png')] w-full bg-top bg-cover bg-origin-contentshadow-2xl border border-white h-full flex flex-col items-center uppercase text-center relative">
                  <div class="h-full rounded-2xl flex flex-col items-center  bg-[#0000007c] w-full px-5 py-14">
                     <img src="/src/assets/image/home/s6.png" alt="logo 1" class="mb-4 absolute top-[-25%] p-4 rounded-full bg-white"/>
                     <h2 class="font-bold mb-2 text-white">Funeral Service</h2>
                  </div>
               </div>
            </router-link>
            
            <router-link to="/services/matrimony">
               <div class="bg-white rounded-2xl bg-[url('../assets/image/donation/d3.jpg')] w-full bg-top bg-cover bg-origin-contentshadow-2xl border border-white h-full flex flex-col items-center uppercase text-center relative">
                  <div class="h-full rounded-2xl flex flex-col items-center  bg-[#0000007c] w-full px-5 py-14">
                     <img src="/src/assets/image/home/s7.png" alt="logo 1" class="mb-4 absolute top-[-25%] p-4 rounded-full bg-white"/>
                     <h2 class="font-bold mb-2 text-white">Matrimony Services</h2>
                  </div>
               </div>
            </router-link>   

            <router-link to="/services/facilities">
               <div class="bg-white rounded-2xl bg-[url('../assets/image/commitees/6.png')] w-full bg-top bg-cover bg-origin-contentshadow-2xl border border-white h-full flex flex-col items-center uppercase text-center relative">
                  <div class="h-full rounded-2xl flex flex-col items-center  bg-[#0000004f] w-full px-5 py-14">
                     <img src="/src/assets/image/home/s8.png" alt="logo 1" class="mb-4 absolute top-[-25%] p-4 rounded-full bg-white"/>
                     <h2 class="font-bold mb-2  text-white">Facilities Services</h2>
                  </div>
               </div>
            </router-link>

        </div>
    </section>
</template>
<script setup>

</script>