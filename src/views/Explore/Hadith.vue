<template>
  <div>
    <DefaultLayout>
    <div class="px-20 pt-20 mt-5 py-5 bg-cyan-800 bg-[url('../assets/image/home/bg123.png')] bg-repeat shadow-xl">
        <div class="pt-3 mx-36 pb rounded-xl bg-white  border-none shadow-xl border-[3px]">
          <div class="flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="black"
            >
              <path
                d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z"
              ></path>
            </svg>
            <p class="font-semibold">Home</p>
            <p class="font-semibold">/ Digital Library</p>
            <!-- <p>/ Volunteers</p> -->
            <p class="text-cyan-800 font-bold">/ Hadith</p>
          </div>
          <div class="rounded-lg flex items-center justify-center relative py-3">
            <h1 class="text-cyan-800 text-4xl font-bold">Hadith</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
   <div class="w-full bg-[url('../assets/image/home/dua_banner.png')] bg-cyan-800">
    <h1 class="py-10 text-center bg-[#2d292938] text-4xl text-white font-bold">  </h1>
    <!-- <p>{{ hadithOfTheDay}}</p> -->
   </div>
    <div class="p-20 bg-gray-100 gap-5 ">
          <div class="grid grid-cols-3 gap-3 w-full" v-if="!hadithList">
             <Skeleton class="w-[400px] h-[190px] rounded-2xl bg-slate-300"/>
             <Skeleton class="w-[400px] h-[190px] rounded-2xl bg-slate-300"/>
             <Skeleton class="w-[400px] h-[190px] rounded-2xl bg-slate-300"/>
             <Skeleton class="w-[400px] h-[190px] rounded-2xl bg-slate-300"/>
             <Skeleton class="w-[400px] h-[190px] rounded-2xl bg-slate-300"/>
             <Skeleton class="w-[400px] h-[190px] rounded-2xl bg-slate-300"/>
          </div>
        <div class="grid grid-cols-3 gap-3 w-full">
            <div v-for="hadith in hadithList">
              <Card class="rounded-2xl" :class="hadith.id == currentHadith?.id ?'bg-green-600' : ''">
                <CardHeader @click="getHadithSection(hadith)" >
                  <CardTitle class="text-3xl text-slate-700" :class="hadith.id == currentHadith?.id ?'text-white' : ''">{{ hadith.name}} <span class="text-xl" >({{ hadith.arabic_book_name}})</span></CardTitle>
                </CardHeader>
                <CardContent @click="getHadithSection(hadith)" class="text-gray-600" :class="hadith.id == currentHadith?.id ?'text-white' : ''">
                  <p>Number of Hadiths : {{ hadith.total_hadith_number}}</p>
                </CardContent>
              </Card>
            </div>
      </div>
      <Card class="py-10 mt-5" v-if="currentHadith">
          <CardHeader>
            <CardTitle  class="text-4xl text-center  flex justify-center items-center gap-1">{{ currentHadith.name}}  ({{ currentHadith.arabic_book_name}})
            </CardTitle> 
            <CardTitle v-if="currentSection" class="text-2xl text-center  flex justify-center items-center gap-1">Section : {{ currentSection.name}}
            </CardTitle> 
            <CardTitle v-if="hadith" class="text-xl text-center  flex justify-center items-center gap-1">Chapter : {{ hadith.name}}
            </CardTitle> 
         </CardHeader>
        <CardContent>
          <div v-if="hadith">
              <div v-for="hd in hadith.data" class="bg-gray-50 p-4 my-2 rounded-xl border-2">
                  <!-- <p>{{ hd.hadith_index}}</p> -->
                  <p class="text-lg text-teal-700"> {{ hd.arabic_description}}</p>
                  <p class="text-lg text-sky-700">{{ hd.translation}}</p>
                  <p class="font-semibold">Authenticated By : {{ hd.authenticate_name}}</p>
                  <p class="font-semibold">Narrated By :{{ hd.narrate_name}}</p>
                  
              </div>
                
              </div>
            <div v-if="currentSection" class="p-5">         
              <Accordion type="single"  collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{{currentSection.name}}</AccordionTrigger>
                  <AccordionContent>
                  <div class="grid grid-cols-2 gap-5" >
                        <div v-for="section in currentSection?.data">
                            <Button variant="secondary" @click="getHadith(section)" class="w-full text-start" >{{ section.name}}</Button>
                        </div>
                      
                      </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
          </div>
            <div class="grid grid-cols-4 gap-5">
              <div v-for="section in currentHadith?.data">
                  <Button variant="secondary" @click="getHadithChapters(section)" class="w-full" >{{ section.name}}</Button>
              </div>
            
            </div>
            <div>
            
            </div>
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
const hadithList = ref()
const currentHadith = ref()
const currentSection = ref()
const currentChapter = ref()
const hadith = ref()
const hadithOfTheDay = ref()
const getHadithSection = async (hadith) => {
     axios.get(`https://hadithadmin.islamicdigitallane.com/api/v1/hadithSection/${hadith.id}`).then((response)=> {
         currentHadith.value = hadith
       currentHadith.value.data = response.data
     })
    currentSection.value = null
    currentChapter.value = null
}
const getHadithChapters = async (section) => {
     axios.get(`https://hadithadmin.islamicdigitallane.com/api/v1/hadithChapter/${section.id}`).then((response)=> {
         currentSection.value = section
       currentSection.value.data = response.data
    })
}
const getHadith = async (chapter) => {
     axios.get(`https://hadithadmin.islamicdigitallane.com/api/v1/hadith/${chapter.id}`).then((response)=> {
         hadith.value = chapter
       hadith.value.data = response.data
    })
}
onMounted(() => {
  axios.get('https://hadithadmin.islamicdigitallane.com/api/v1/hadithbook').then((response) => {
       hadithList.value = response.data
  })
  let did = Math.floor(Math.random() * 6000)
  axios.get(`https://hadithadmin.islamicdigitallane.com/api/v1/hadith/${did}`).then((response) => {
       hadithOfTheDay.value = response.data
  })
   

})
</script>

<style lang="scss" scoped></style>
