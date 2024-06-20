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
import {ref} from 'vue'
const route = useRoute()

const subnav = ref(0)
</script>

<template>
  <DefaultLayout>
    <Hero />
    <!-- <div class="flex gap-2 justify-center py-3 font-semibold bg-teal-800 text-white sticky top-[76px] z-40 items-center">
      <a href="#virtual" class="px-3 py-1.5" :class="route.hash=='#virtual' ? 'bg-white text-teal-800 rounded-md' : ''">Virtural Tour</a>
      <a href="#announcement" class="px-3 py-1.5" :class="route.hash=='#announcement' ? 'bg-white text-teal-800 rounded-md' : ''">Announcement</a>
      <a href="#fund" class="px-3 py-1.5" :class="route.hash=='#fund' ? 'bg-white text-teal-800 rounded-md' : ''">Fund Raising</a>
      <a href="#events" class="px-3 py-1.5" :class="route.hash=='#events' ? 'bg-white text-teal-800 rounded-md' : ''">Upcoming Event</a>
      <a href="#year" class="px-3 py-1.5" :class="route.hash=='#year' ? 'bg-white text-teal-800 rounded-md' : ''">Calender of Activities</a>
      <a href="#khutba" class="px-3 py-1.5" :class="route.hash=='#khutba' ? 'bg-white text-teal-800 rounded-md' : ''">Khudba & Khatira</a>
    </div> -->
    
    <div class="px-[5%] py-5 text-2xl font-bold uppercase gap-2 flex items-center">
      <a class="px-3 py-1.5" @click="subnav=0" :class="subnav==0 ? 'bg-teal-800 text-white rounded-md' : ''">Virtural Tour</a>
      <a class="px-3 py-1.5" @click="subnav=1" :class="subnav==1 ? 'bg-teal-800 text-white rounded-md' : ''">Announcement</a>
      <a class="px-3 py-1.5" @click="subnav=2" :class="subnav==2 ? 'bg-teal-800 text-white rounded-md' : ''">Fund Raising</a>
      <a class="px-3 py-1.5" @click="subnav=3" :class="subnav==3 ? 'bg-teal-800 text-white rounded-md' : ''">Upcoming Event</a>
      <a class="px-3 py-1.5" @click="subnav=4" :class="subnav==4 ? 'bg-teal-800 text-white rounded-md' : ''">Calender of Activities</a>
      <a class="px-3 py-1.5" @click="subnav=5" :class="subnav==5 ? 'bg-teal-800 text-white rounded-md' : ''">Khudba & Khatira</a>
    </div>
    
    <div id="virtual"
    v-if="subnav==0"
      class="py-[30px] px-[5%] bg-slate-50 bg-[url('/src/assets/image/home/pattern-1.png')] flex justify-center gap-5"
    >
      <VirtualTour />
    </div>
    <div id="announcement"
     v-if="subnav==1"
      class="py-[30px] px-[5%] bg-slate-200 bg-[url('/src/assets/image/home/pattern-1.png')] flex justify-center gap-5"
    >
      <!-- <Prayer/> -->
      <Announcement />
    </div>
    <div id="fund"
     v-if="subnav==2"
      class="py-[30px] rounded-lg bg-slate-50 bg-[url('/src/assets/image/home/pattern-1.png')] flex justify-center gap-5"
    >
      <FundComponent />
    </div>
    <UpcommingEvent id="events"  v-if="subnav==3"/>
    <!-- <div id="service"
      class="py-[30px] rounded-lg bg-slate-50 bg-[url('/src/assets/image/home/pattern-1.png')] flex justify-center gap-5"
    >
      <Services />
    </div> -->
    <!-- <LearningCenter  id="learning"/> -->
    <div id="year"
    v-if="subnav==4"
      class="py-[30px] rounded-lg bg-slate-50 bg-[url('/src/assets/image/home/pattern-1.png')] flex justify-center gap-5"
    >
      <YearlyPlanner />
    </div>
    <KhutbaKhatira id="khutba" class=""  v-if="subnav==5" />
    <!-- Gallery -->
    <!-- <div>
      <Gallery />
    </div> -->
  </DefaultLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
