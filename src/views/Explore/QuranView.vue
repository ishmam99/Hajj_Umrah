<template>
  <div>
    <DefaultLayout>
      <div class="px-20 ml-10">
        <div class="bg-white">
          <div class="flex items-center gap-2">
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
            <p>
              <router-link to="/">Home</router-link>
              
              /Explore /
              <router-link to="/explore/quran">Quran</router-link>/</p>

            
            <p class="text-yellow-500">{{ surah?.englishName}}</p>
          </div>
          <div class="bg-white rounded-lg relative py-3">
            <h1 class="text-yellow-500 text-4xl font-semibold">{{ surah?.englishName}}</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <Separator />
     
   <div class="w-full bg-[url('../assets/image/home/dua_banner.png')] bg-amber-400">
    <h1 class="py-10 text-center bg-[#2d292938] text-4xl text-white font-bold">  </h1>
    <!-- <p>{{ surahOfTheDay}}</p> -->
   </div>
    <div class="p-20 bg-gray-100 gap-5 ">
       
                <Card class="rounded-2xl border-sky-200 " v-if="surah">
        <CardHeader  >
           <CardTitle class="text-3xl text-slate-700 text-center" >{{ surah.englishName}} <span class="text-xl" >({{ surah.name}})</span></CardTitle>
            <h1 class="font-semibold text-xl text-center text-amber-600">{{ surah.englishNameTranslation}}</h1>
            <p>Number of Ayah : {{ surah.numberOfAyahs}}</p> 
            <p class="text-green-700 font-bold">Revealed at : {{ surah.revelationType}}</p> 
        </CardHeader>
        <Separator />
        <CardContent class="text-gray-600  " >
          
              <div class="py-5">
                 <p v-for="ayah in surah?.real?.ayahs" class="text-center">{{ ayah.text}}</p>
              </div>
            
               <div class="flex-wrap justify-end py-5">
              <h1 class="text-teal-600 underline underline-offset-2">Translation</h1>
            <p v-for="ayah in surah.ayahs" class="text-center">{{ ayah.text}}</p></div>
          
        </CardContent>
      </Card>
      
     
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '/components/ui/accordion'

import {Button
} from '/components/ui/button'
import ContactMore from '/src/components/ContactMore.vue'
import { Separator } from '/components/ui/separator'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
const surahList = ref()
const currentsurah = ref()
const currentSection = ref()
const currentChapter = ref()
const surah = ref()
const surahOfTheDay = ref()
 const route = useRoute();
onMounted(() => {
  console.log(route)
  axios.get(`https://api.alquran.cloud/v1/surah/${route.params.id}/en.asad`).then((response) => {
       surah.value = response.data.data
  })
  axios.get(`https://api.alquran.cloud/v1/surah/${route.params.id}`).then((response) => {
       surah.value.real = response.data.data
  })
})
</script>
