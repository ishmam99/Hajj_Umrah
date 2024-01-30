<template>
  <div>
    <DefaultLayout>
      <div class="px-20 pt-20 py-5 bg-cyan-800 bg-[url('../assets/image/home/dua_banner.png')] bg-repeat shadow-xl">
        <div class="pt-3 mx-36 pb rounded-xl bg-white border-blue-50 shadow-xl border-[3px]">
          <div class="flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path
                d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z"
              ></path>
            </svg>
            <p>Home</p>
            <p>/ Digital Library</p>
            <!-- <p>/ Volunteers</p> -->
            <p class="text-[#1a5047]">/ Quran</p>
          </div>
          <div class="rounded-lg flex items-center justify-center relative py-3">
            <h1 class="text-[#b4a33a] text-4xl font-semibold">Quran</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
   
  
    <div class="p-20 bg-[#58b6b9b2] gap-5 ">
      
        <div class="grid grid-cols-3 gap-3 w-full">
          
            <div v-for="surah in surahList.data" v-if="surahList">
                <Card class="rounded-2xl" >
        <CardHeader  >
           <router-link  :to="{ name: 'explore/quranview', params: { id: surah.number }}" class="text-3xl text-slate-700" >{{ surah.englishName}} <span class="text-xl" >({{ surah.name}})</span></router-link>
            <h1 class="font-semibold text-xl text-amber-600">{{ surah.englishNameTranslation}}</h1>
          
        </CardHeader>
        <CardContent class="text-gray-600" >
            <p>Number of Ayah : {{ surah.numberOfAyahs}}</p> 
            <p class="text-green-700 font-bold">Revealed at : {{ surah.revelationType}}</p> 
        </CardContent>
      </Card>
            </div>
             <div v-else class="grid grid-cols-3 gap-3 w-full">
             <Skeleton class="w-[400px] h-[190px] rounded-2xl bg-slate-300"/>
             <Skeleton class="w-[400px] h-[190px] rounded-2xl bg-slate-300"/>
             <Skeleton class="w-[400px] h-[190px] rounded-2xl bg-slate-300"/>
             <Skeleton class="w-[400px] h-[190px] rounded-2xl bg-slate-300"/>
             <Skeleton class="w-[400px] h-[190px] rounded-2xl bg-slate-300"/>
             <Skeleton class="w-[400px] h-[190px] rounded-2xl bg-slate-300"/>
            </div>
      </div>
     
</div>
     </DefaultLayout>
  </div>
</template>

<script setup lang="ts">
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
import FacilitiesMore from '../../components/FacilitiesMore.vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '/components/ui/card'
import {Skeleton } from '/components/ui/skeleton'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '/components/ui/accordion'

import {Button
} from '/components/ui/button'
import ContactMore from '/src/components/ContactMore.vue'
import { Separator } from '/components/ui/separator'
import { onMounted, ref } from 'vue'
import axios from 'axios'
const surahList = ref()
const currentsurah = ref()
const currentSection = ref()
const currentChapter = ref()
const surah = ref()
const surahOfTheDay = ref()

onMounted(() => {
  axios.get('https://api.alquran.cloud/v1/surah').then((response) => {
       surahList.value = response.data
  })
})
</script>
