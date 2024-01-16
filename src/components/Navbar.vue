<template>
  <div class="h-[70px] w-full flex justify-between items-center text-black fixed top-0 z-40 px-[5%] bg-white duration-300 " :class="searchBar==true ? '':'bg-slate-50'" id="navBar">  
      <div>
        <img src="/src/assets/image/common/n1.png" alt="" class="h-[50px]">
      </div> 
      <div class="flex gap-6 uppercase font-semibold">
          <router-link to="/" class="py-6 flex items-center">
              Home
          </router-link>  
          <ul class="group cursor-pointer relative ">
              <a class="py-6 flex items-center">Service</a>
              <ul class="w-0 group-hover:w-[450px] group-hover:h-auto h-0 p-0 group-hover:p-5 overflow-hidden flex flex-col gap-2 bg-slate-50 absolute top-[101%] rounded-md duration-200">
                <router-link to="/services/nikah" class="hover:pl-5 duration-300">Nikha Service</router-link>
                <router-link to="/services/facilities" class="hover:pl-5 duration-300">Facilities Service</router-link>
                <router-link to="/services/funeral" class="hover:pl-5 duration-300">Funeral Service</router-link>
                <router-link to="/services/new_muslim" class="hover:pl-5 duration-300">New Muslim Service</router-link>
                <router-link to="/services/special_needs" class="hover:pl-5 duration-300">Special Needs Service</router-link>
                <router-link to="/services/matrimony" class="hover:pl-5 duration-300">Matrimony Service</router-link>
                <router-link to="/services/education" class="hover:pl-5 duration-300">Education Service</router-link>
                <a class="hover:pl-5 duration-300">IT Training Services</a>
                <a class="hover:pl-5 duration-300">Social Services</a>
                <a class="hover:pl-5 duration-300">Financial Aid</a>
              </ul>
          </ul>

          <ul class="group cursor-pointer relative ">
            <router-link to="/Shop" class="py-6 flex items-center">Explore</router-link>
            <ul class="w-0 group-hover:w-[450px] group-hover:h-auto h-0 p-0 group-hover:p-5 overflow-hidden flex flex-col gap-2 bg-slate-50 absolute top-[101%] rounded-md duration-200">
                <li class="hover:pl-5 duration-300">Dua</li>
                <li class="hover:pl-5 duration-300">Quran</li>
                <li class="hover:pl-5 duration-300">Hadith</li>
                <li class="hover:pl-5 duration-300">Watch</li>
            </ul>
          </ul>

          <ul class="group cursor-pointer relative ">
            <router-link to="/Clearance" class="py-6 flex items-center">Learning Center</router-link>
          </ul>

          <ul class="group cursor-pointer relative ">
            <router-link to="/Contact" class="py-6 flex items-center">About Us</router-link>
            <ul class="w-0 group-hover:w-[450px] group-hover:h-auto h-0 p-0 group-hover:p-5 overflow-hidden flex flex-col gap-2 bg-slate-50 absolute top-[101%] rounded-md duration-200">
                <li class="hover:pl-5 duration-300">Board Of Directors</li>
                <li class="hover:pl-5 duration-300">Committees</li>
                <li class="hover:pl-5 duration-300">Team</li>
                <li class="hover:pl-5 duration-300">Policies</li>
            </ul>
          </ul>

          <ul class="group cursor-pointer relative ">
            <router-link to="/Event" class="py-6 flex items-center">Contact</router-link>
            <ul class="w-0 group-hover:w-[450px] group-hover:h-auto h-0 p-0 group-hover:p-5 overflow-hidden flex flex-col gap-2 bg-slate-50 absolute top-[101%] rounded-md duration-200">
                <router-link to="/Shop" class="hover:pl-5 duration-300">Ask Imam</router-link>
                <li class="hover:pl-5 duration-300">Mashjid Info</li>
            </ul>
          </ul>

          <ul class="group cursor-pointer relative ">
            <router-link to="/Blog" class="py-6 flex items-center">Event</router-link>
          </ul>
          <ul class="group cursor-pointer relative ">
            <router-link to="/Blog" class="py-6 flex items-center">More</router-link>
            <ul class="w-0 group-hover:w-[450px] group-hover:h-auto h-0 p-0 group-hover:p-5 overflow-hidden flex flex-col gap-2 bg-slate-50 absolute top-[101%] rounded-md duration-200">
                <router-link to="/Shop" class="hover:pl-5 duration-300">Future Projects</router-link>
                <!-- <li class="hover:pl-5 duration-300">Dua</li> -->
                <li class="hover:pl-5 duration-300">Ramadan Special</li>
                <li class="hover:pl-5 duration-300">Hajj And Umrah</li>
            </ul>
          </ul>
      </div>
      <div class="flex items-center gap-2 text-white font-bold">
        <button class="bg-yellow-600 px-6 py-1 rounded-full hover:bg-yellow-500">Donation</button>
        <button class="bg-yellow-600 px-6 py-1 rounded-full hover:bg-yellow-500">Member</button>
      </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.router-link-active{
 color: rgb(201, 130, 0);
}
</style>