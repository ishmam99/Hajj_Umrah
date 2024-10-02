<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Hero from '../components/hero.vue'
import Announcement from '../components/HomeFolder/announcement.vue'
import UpcommingEvent from '../components/HomeFolder/UpcommingEvent.vue'
import Services from '../components/HomeFolder/services.vue'
import LearningCenter from '../components/HomeFolder/learningCenter.vue'
import FundComponent from '../components/HomeFolder/FundComponent.vue'
import YearlyPlanner from '../components/HomeFolder/YearlyPlanner.vue'
import KhutbaKhatira from '../components/HomeFolder/KhutbaKhatira.vue'
import VirtualTour from '/src/components/HomeFolder/virtualTour.vue'
import Gallery from '/src/components/HomeFolder/Gallery.vue'

import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()

const subnav = ref(0)
</script>

<template>
  <DefaultLayout>
    <Hero />

    <div class="flex items-center justify-center bg-gray-100  pb-10"> 
        <p class="text-6xl text-cyan-600 font-bold my-6">Our Services</p>
    </div>
<div>
  <div class="grid p-10 grid-cols-3 h-full w-full justify-center items-center gap-10">
    <div>
    <div class="card w-full h-full bg-cover  bg-center text-white rounded-lg overflow-hidden">
      <img src="/src/assets/image/hajj/single-service-img-1.jpg" alt="Hajj" class="w-full z-10 h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110">
      <div class="p-4 pb-6 -mt-20 flex flex-col justify-center items-center  z-20">
        <h1 class="text-3xl font-serif font-bold">Hajj</h1>
      </div>
    </div>
    </div>
    <div class="space-y-5">
    <div class="card w-full h-1/3 bg-cover bg-blue-600 bg-center text-white shadow-lg rounded-lg overflow-hidden">
      <img src="/src/assets/image/hajj/hajj-1.jpg" alt="Hajj" class="w-full z-10 h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110">
      <div class="p-4 pb-6 -mt-20 flex flex-col justify-center items-center  z-20">
        <h2 class="text-3xl font-mono font-bold">Umrah</h2>
      </div>
    </div>
    <div class="card w-full h-1/3 bg-cover bg-blue-600 bg-center text-white shadow-lg rounded-lg overflow-hidden">
      <img src="/src/assets/image/hajj/single-service-img-3.jpg" alt="Hajj" class="w-full z-10 h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110">
      <div class="p-4 pb-6 -mt-20 flex flex-col justify-center items-center  z-20">
        <h2 class="text-3xl font-mono font-bold">Ticketing</h2>
      </div>
    </div>
    </div>
    <div>
    <div class="card w-full h-full bg-cover bg-blue-600 bg-center text-white shadow-lg rounded-lg overflow-hidden">
      <img src="/src/assets/image/hajj/single-service-img-4.jpg" alt="Hajj" class="w-full z-10 h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110">
      <div class="p-4 pb-6 -mt-20 flex flex-col justify-center items-center  z-20">
        <h2 class="text-3xl font-mono font-bold">Tourism</h2>
      </div>
    </div>
    </div>
   
  </div>
</div>
<div class="flex items-center justify-center bg-cyan-100  pb-10"> 
    <p class="text-6xl text-sky-600 font-bold my-6">Top Holiday Destinations</p>
</div>

<div class="flex bg-sky-200 flex-wrap justify-center gap-10 p-10">
  <div class="card w-1/3 bg-cover bg-center text-white shadow-lg rounded-lg overflow-hidden">
    <img src="/src/assets/image/hajj/egypt.webp" alt="Egypt" class="w-full z-10 h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110">
    <div class="p-4 pb-6 -mt-20 flex flex-col justify-center items-center z-20">
      <h2 class="text-3xl font-mono font-bold">Egypt</h2>
    </div> 
  </div>
  <div class="card w-1/3 bg-cover bg-center text-white shadow-lg rounded-lg overflow-hidden">
    <img src="/src/assets/image/hajj/dubai.jpg" alt="Dubai" class="w-full z-10 h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110">
    <div class="p-4 pb-6 -mt-20 flex flex-col justify-center items-center z-20">
      <h2 class="text-3xl font-mono font-bold">Dubai</h2>
    </div>
  </div>
  <div class="card w-1/3 bg-cover bg-center text-white shadow-lg rounded-lg overflow-hidden">
    <img src="/src/assets/image/hajj/malaysia.jpg" alt="Malaysia" class="w-full z-10 h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110">
    <div class="p-4 pb-6 -mt-20 flex flex-col justify-center items-center z-20">
      <h2 class="text-3xl font-mono font-bold">Malaysia</h2>
    </div>
  </div>
  <div class="card w-1/3 bg-cover bg-center text-white shadow-lg rounded-lg overflow-hidden">
    <img src="/src/assets/image/hajj/turkey.webp" alt="Turkey" class="w-full z-10 h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110">
    <div class="p-4 pb-6 -mt-20 flex flex-col justify-center items-center z-20">
      <h2 class="text-3xl font-mono font-bold">Turkey</h2>
    </div>
  </div>
</div>
<div>
<div class="flex bg-white items-center justify-center gap-10 p-10">
  <div class="card w-1/2 bg-cover bg-center text-white shadow-lg rounded-lg overflow-hidden">
    <img src="/src/assets/image/hajj/training.jpg" alt="Training" class="w-full z-10 h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110">
  </div>
  <div class="card rounded-xl w-1/2 bg-cover bg-center text-blue-900 shadow-lg h-full py-5 px-3 overflow-hidden">
    <p class="text-4xl border-b-2 border-cyan-600 text-cyan-600 font-bold my-6">Hajj & Umrah Training</p>
    <div class="p-4 pb-6 flex flex-col justify-center items-center z-20">
     
      <p class="text-xl py-4">Every year Hajjx arranges training programs for the Hajj and Umrah performers in order to provide them the proper guideline and minimizes any unwanted incidents while traveling or started this Holy Journey.</p>
      <p class="text-xl py-5">These training sessions cover essential topics such as rituals, customs, and safety protocols to ensure a smooth and spiritually enriching experience for all pilgrims.</p>
        
      <ul class="py-5">
        <li><i class="fas fa-check" style="color: green;"></i> Understand pilgrimage requirements</li>
        <li><i class="fas fa-check" style="color: green;"></i> Learn the proper performance of compulsory and commendable religious rituals</li>
        <li><i class="fas fa-check" style="color: green;"></i> Be aware of the forbidden practices during the pilgrimage</li>
      </ul>
    </div>
  </div>
</div>
<div class="flex bg-white items-center justify-center gap-10 p-10">
 
  <div class="card w-1/2 bg-cover bg-center text-cyan-900 shadow-lg py-5 px-4 rounded-xl overflow-hidden">
    <p class="text-4xl border-b-2 border-cyan-600 text-cyan-600 font-bold my-6">Why Hajjx</p>
    <div class="p-4 pb-6 flex flex-col justify-center items-start z-20">
    
      <p class="text-xl">Discover the unique benefits of choosing Hajjx for your pilgrimage journey. Our expert team ensures a seamless and spiritual experience, tailored to meet your individual needs.</p>
      <p class="text-xl">At Hajjx, we understand the significance of this journey and strive to provide a holistic experience that combines spiritual growth with comfort and convenience.</p>
        
      <ul class="p-5 text-xl">
        <li><i class="fas fa-check" style="color: green;"></i> Expert Guidance from experienced professionals</li>
        <li><i class="fas fa-check" style="color: green;"></i> Personalized Services to cater to your unique requirements</li>
        <li><i class="fas fa-check" style="color: green;"></i> Unparalleled Spiritual Experience through carefully curated programs</li>
        <li><i class="fas fa-check" style="color: green;"></i> Comfortable Accommodations in close proximity to holy sites</li>
        <li><i class="fas fa-check" style="color: green;"></i> Delicious and Nutritious Meal Options to fuel your journey</li>
        <li><i class="fas fa-check" style="color: green;"></i> Seamless Transportation Services to ensure easy access to all destinations</li>
      </ul>
    </div>
  </div>
   <div class="card w-1/2 bg-cover bg-center text-white shadow-lg rounded-lg overflow-hidden">
    <img src="/src/assets/image/hajj/medina.webp" alt="Training" class="w-full z-10 h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110">
  </div>
</div>
</div>
    <!-- <div class="px-[5%] text-xl justify-center font-bold uppercase gap-10 flex items-center cursor-pointer bg-gray-100">
      <a
        class="px-5 py-1.5 bg-teal-100 font-bold rounded-t-3xl scale-110"
        @click="subnav = 0"
        >Hajj Services</a
      >
      <a
        class="px-3 py-1.5 bg-orange-200 font-bold rounded-t-3xl scale-110"
        @click="subnav = 1"
        >Umrah Services</a
      >
      <a
        class="px-3 py-1.5 bg-rose-100 font-bold rounded-t-3xl scale-110"
        @click="subnav = 2"
        >Tours &amp; Travels</a
      >
      <a
        class="px-3 py-1.5 bg-lime-100 font-bold rounded-t-3xl scale-110"
        @click="subnav = 3"
        >Tickets</a
      >
      <a
        class="px-3 py-1.5 bg-[#695acd5a] font-bold rounded-t-3xl scale-110"
        @click="subnav = 4"
        >Hotels</a
      >
      <a
        class="px-3 py-1.5 bg-amber-100 font-bold rounded-t-3xl scale-110"
        @click="subnav = 5"
        >Brochure</a
      >
    </div> -->
<!-- 
    <div
      id="virtual"
      v-if="subnav == 0"
      class="pb-[30px] px-[5%] bg-slate-50 flex justify-center gap-5"
      :class="subnav == 0 ? 'bg-teal-100' : ''"
    >
      <VirtualTour />
    </div>

    <div
      id="announcement"
      v-if="subnav == 1"
      class="py-[30px] px-[5%] bg-orange-200 flex justify-center gap-5"
      :class="subnav == 1 ? 'bg-orange-200' : ''"
    >
    
      <Announcement />
    </div>

    <div
      id="fund"
      v-if="subnav == 2"
      class="py-[30px] px-[5%] bg-slate-50 flex justify-center gap-5"
      :class="subnav == 2 ? '!bg-rose-100' : ''"
    >
      <FundComponent />
    </div>

    <div v-if="subnav == 3" class="px-[5%] py-10" :class="subnav == 3 ? 'bg-lime-50' : ''">
      <UpcommingEvent id="events" />
    </div>

    <div
      id="year"
      v-if="subnav == 4"
      :class="subnav == 4 ? 'bg-[#695acd5a]' : ''"
      class="py-10 px-[5%]"
    >
      <YearlyPlanner />
    </div>

    <div  v-if="subnav == 5" class="py-10 px-[5%]" :class="subnav == 5 ? '!bg-amber-100' : ''">
      <KhutbaKhatira id="khutba" class="" />
    </div>
    -->
  
  </DefaultLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
