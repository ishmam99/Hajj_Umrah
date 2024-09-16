<template>
  <DefaultLayout>
  <div class="pt-[80px]"></div>
  <div class="h-[60vh] 2xl:h-[50vh] relative">
    <div class="h-full">
      <swiper
        :slidesPerView="'1'"
        :centeredSlides="true"
        :spaceBetween="0"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false
        }"
        :pagination="{
          clickable: true
        }"
        :navigation="false"
        :modules="modules"
        class="mySwiper"
      >
      <swiper-slide>
          <img src="/src/assets/image/hero/people.jpeg" alt="" class="" />
          <div class="head">
            <p>Hajj Exploration LLC</p>
            <h3 class="text-2xl">Exclusive hassle -free Umrah services & packages</h3>
            <button class=""><router-link to="/Signup">Apply Now</router-link></button>
          </div>
        </swiper-slide>
      
      <swiper-slide>
          <img src="/src/assets/image/hero/hajj_services.jpg" alt="" class="" />
          <div class="head">
            <p>Hajj Exploration LLC</p>
            <h3 class="text-2xl">Exclusive hassle -free Umrah services & packages</h3>
            <button class=""><router-link to="/Signup">Apply Now</router-link></button>
          </div>
        </swiper-slide>
        
        <swiper-slide>
          <img src="/src/assets/image/hajj/hajj-2.jpg" alt="" class="" />
          <div class="head">
            <p>Hajj Exploration LLC</p>
            <h3 class="text-2xl">Exclusive hassle -free Umrah services & packages</h3>
            <button class=""><router-link to="/Signup">Apply Now</router-link></button>
          </div>
        </swiper-slide>
        
        
      </swiper>
    </div>
  </div>

  

 
  <div class="container mx-auto mt-8 mb-8">
    <div class="flex flex-col items-center justify-center  pb-4  mt-6"> 
        <P class="text-5xl font-bold text-[#286d71]">Umrah Packages</P>
        <p class="text-3xl mx-20 mt-3"></p>
    </div>

    <div class="flex flex-row items-end justify-end my-3">

<div></div>
<form class="max-w-lg mx-full mx-10">
  <label for="countries" class="block mb-2 text-xl font-medium text-[#286d71] dark:text-white">Select Country</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
</form>


<form class="max-w-lg mx-full mr-10">
  <label for="countries" class="block mb-2 text-xl font-medium text-[#286d71] dark:text-white">Select city</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a city</option>
    <option value="US">Dallas</option>
    <option value="CA">Freeport</option>
    <option value="FR">Garland</option>
    <option value="DE">Victoria</option>
  </select>
</form>




    </div>
    <div class="mt-6 mx-10 grid grid-cols-1 gap-x-6 gap-y-10 ">
      
      <div class="group relative" v-for="packageData in socialStore.createNewPackage">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src="@/assets/image/hajj/hajj-1.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div class="flex justify-between bg-[#286d71] px-3 py-4 text-white">
          <div>
            
            <h3 class="text-xl font-bold text-white">
              <router-link
                to="/umrah-details"
                class=" text-lg !text-white"
                >{{ packageData.packageTitle }}
              </router-link>
              
            </h3>
          </div>
          <p class="text-sm text-white font-medium">${{ packageData.price }}</p>
        </div>
        <div class="bg-gray-200 px-4 py-7 ">
         <p class="text-sm text-gray-800 font-medium">{{ packageData.description }}</p>
        </div>
        
      </div>
     
     </div>
  </div>
 

  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { useSocialStore } from '@/stores/SocialDashboard.ts'

const socialStore = useSocialStore()
const modules = [Pagination, Navigation, Autoplay]
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  position: relative;
}
.head {
  text-shadow: 2px 2px 3px black;
  font-size: 54px;
  font-weight: 700;
  color: white;
  position: absolute;
  text-transform: uppercase;
  left: 5%;
  text-align: left;
}
.head p {
  text-shadow: 2px 2px 3px black;
  font-size: 34px;
  color: rgb(255, 255, 255);
}
.head button {
  font-size: 24px;
  font-weight: 500;
  padding: 8px 12px;
  border: 3px solid white;
  text-shadow: 2px 2px 3px black;
  border-radius: 8px;
  /* transition: .2s ease-in-out; */
}
.head button:hover {
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  text-shadow: none;
  /* transition: .2s ease-in-out; */
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* animation: 5s banimg linear; */
}
</style>
