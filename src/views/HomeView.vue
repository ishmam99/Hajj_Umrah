<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Hero from '../components/hero.vue';
import Announcement from '../components/HomeFolder/announcement.vue'
import Prayer from '../components/HomeFolder/prayer.vue'
import UpcommingEvent from '../components/HomeFolder/UpcommingEvent.vue'
import Services from '../components/HomeFolder/services.vue';
import LearningCenter from '../components/HomeFolder/learningCenter.vue'
</script>

<template>
  <DefaultLayout>
    <Hero/>
    <div class="py-[30px] px-[5%] bg-slate-100 flex justify-center gap-5 my-10">
        <!-- <Prayer/> -->
        <Announcement/>
    </div>
    <UpcommingEvent/>
    <Services/>
    <LearningCenter/>
  </DefaultLayout>
</template>
