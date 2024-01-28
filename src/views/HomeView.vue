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
    <Hero/> <div class="py-[30px] px-[5%] bg-slate-100 flex justify-center gap-5 my-10">
      <div class="w-full px-5">
        <h1 class="text-3xl font-bold uppercase pb-3">Virtual Tour</h1>
        <div>
            <div class="flex gap-5 rounded-xl">
              <div class="w-full shadow-xl p-5 bg-white rounded-xl">

              
                <iframe width="760" height="415" src="https://www.youtube.com/embed/IrBh3UM6J9M?si=cmKWZsNIS8HW0SVJ&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                <div class="px-4 py-5 bg-white rounded-lg ">
                <div class="px-4 py-10 bg-gray-800 rounded-lg ">
                  <!-- <p class="text-3xl uppercase text-yellow-800 font-bold">Intro</p> -->
                  <p class="text-lg font-semibold text-yellow-400 text-start">
                    Welcome to IDL Islamic Center. We serve the need of the Muslim Community living in and around the City of Dallas. Our goal is to grow a Masjid-centric community which puts all its resources, hard work and hopes into the obedience of Allah, the Creator, the Provider, the Most Beneficent, the Most Merciful. with a focus on: 
                    <br>
                    <br>
                    Raising Muslim generations following the Qur’an and Sunnah as presented by the Prophet Muhammad (pbuh) and exercised by the companions, providing a home and extended family environment for all ages (Muslim and interested non-Muslim).
                  </p>
                </div>
                </div>
            </div>
           
        </div>
      </div>
    </div>
    <div class="py-[30px] px-[5%] bg-slate-100 flex justify-center gap-5 my-10">
        <!-- <Prayer/> -->
        <Announcement/>
    </div>
    <UpcommingEvent/>
    <Services/>
    <LearningCenter/>
     <div class="py-[30px] px-[5%] bg-slate-100 flex justify-center gap-5 my-10">
      <div class="w-full px-5">
        <h1 class="text-3xl font-bold uppercase pb-3">Gallery</h1>
        <div>
            <div class="grid grid-cols-4 gap-5 rounded-xl">
              <div class="h-full w-full">
                 <img src="/src/assets/image/home/g1.jpeg" alt="">
              </div>
             <div class="h-full w-full">
                 <img src="/src/assets/image/home/g2.jpg" alt="">
              </div>
              <div class="h-full w-full">
                 <img src="/src/assets/image/home/g3.jpg" alt="" class="h-full w-full">
             </div>
           <div class="h-full w-full">
                 <img src="/src/assets/image/home/g4.jpg" alt="">
              </div>
             <div class="h-full w-full">
                 <img src="/src/assets/image/home/g5.jpg" alt="">
              </div>
             
               
            </div>
           
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
