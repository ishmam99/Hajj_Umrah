<script setup>
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
      <VirtualTour />
    </div>
    <div
      class="py-[30px] px-[5%] bg-slate-100 bg-[url('../assets/image/home/pattern-1.png')] flex justify-center gap-5"
    >
      <!-- <Prayer/> -->
      <Announcement />
    </div>
    <div
      class="py-[30px] rounded-lg bg-slate-50 bg-[url('/src/assets/image/home/pattern-1.png')] flex justify-center gap-5"
    >
      <FundComponent />
    </div>
    <UpcommingEvent />
    <div
      class="py-[30px] rounded-lg bg-slate-50 bg-[url('/src/assets/image/home/pattern-1.png')] flex justify-center gap-5"
    >
      <Services />
    </div>
    <LearningCenter />
    <div
      class="py-[30px] rounded-lg bg-slate-50 bg-[url('/src/assets/image/home/pattern-1.png')] flex justify-center gap-5"
    >
      <YearlyPlanner />
    </div>
    <KhutbaKhatira class="" />
    <!-- Gallery -->
    <div>
      <Gallery />
    </div>
  </DefaultLayout>
</template>
