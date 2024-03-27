<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Hero from '../components/hero.vue'
import Announcement from '../components/HomeFolder/announcement.vue'
import Prayer from '../components/HomeFolder/prayer.vue'
import UpcommingEvent from '../components/HomeFolder/UpcommingEvent.vue'
import Services from '../components/HomeFolder/services.vue'
import LearningCenter from '../components/HomeFolder/learningCenter.vue'
import FundComponent from '../components/HomeFolder/FundComponent.vue'
import YearlyPlanner from '../components/HomeFolder/YearlyPlanner.vue'
import KhutbaKhatira from '../components/HomeFolder/KhutbaKhatira.vue'
import VirtualTour from '/src/components/HomeFolder/virtualTour.vue'
</script>

<template>
  <DefaultLayout>
    <Hero />
    <div
      class="py-[30px] px-[5%] bg-slate-50 bg-[url('/src/assets/image/home/pattern-1.png')] flex justify-center gap-5"
    >
      <VirtualTour/>
    </div>
    <div
      class="py-[30px] px-[5%] bg-slate-100 bg-[url('../assets/image/home/pattern-1.png')] flex justify-center gap-5 mt-10"
    >
      <!-- <Prayer/> -->
      <Announcement />
    </div>
    <FundComponent />
    <UpcommingEvent />
    <Services />
    <LearningCenter />
    <!-- Yearly Planner -->

    <YearlyPlanner />
    <KhutbaKhatira class="mt-10" />
    <!-- Gallery -->
    <div class="py-[30px] px-[5%] bg-white gap-5">
      <h1 class="text-3xl font-bold uppercase pb-3">Gallery</h1>
      <div class="grid grid-cols-2 gap-5 rounded-xl">
        <router-link to="/Kabah">
          <div class="flex gap-3 p-2 rounded-md shadow-md">
            <img src="/src/assets/image/home/g4.jpg" alt="" class="w-1/2 rounded-lg" />
            <div class="w-1/2">
              <h1 class="text-blue-600 text-2xl font-bold py-1">Images of Kabah</h1>
              <p>Collections of some wounderfull pictures of Kabah</p>
            </div>
          </div>
        </router-link>
        <router-link to="/Mashjib">
          <div class="flex gap-3 p-2 rounded-md shadow-md">
            <img src="/src/assets/image/home/g2.jpg" alt="" class="w-1/2 rounded-lg" />
            <div class="w-1/2">
              <h1 class="text-blue-600 text-2xl font-bold py-1">Images of Mashjid's Interior</h1>
              <p>Collections of some wounderfull pictures of Our Mashjib</p>
            </div>
          </div>
        </router-link>
        <router-link to="/Social_Gallery">
          <div class="flex gap-3 p-2 rounded-md shadow-md">
            <img src="/src/assets/image/home/social.jpg" alt="" class="w-1/2 rounded-lg" />
            <div class="w-1/2">
              <h1 class="text-blue-600 text-2xl font-bold">Images of Social work</h1>
              <p>Collections of some wounder full pictures of our Social work</p>
            </div>
          </div>
        </router-link>
        <router-link to="/Event_Gallery">
          <div class="flex gap-3 p-2 rounded-md shadow-md">
            <img src="/src/assets/image/home/l4.png" alt="" class="w-1/2 rounded-lg" />
            <div class="w-1/2">
              <h1 class="text-blue-600 text-2xl font-bold">Images of Our Events</h1>
              <p>Collections of some wounder full pictures of our Events</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </DefaultLayout>
</template>
