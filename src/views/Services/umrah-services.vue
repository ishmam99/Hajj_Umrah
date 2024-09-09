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

  

 
  <div class="container mx-auto my-8">
    <div class="flex flex-col items-center justify-center  pb-10  my-6"> 
        <P class="text-5xl font-bold text-[#286d71]">Umrah Packages</P>
        <p class="text-3xl mx-20 mt-3"></p>
    </div>

    <div class="mt-6 mx-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
      <div class="group relative">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src="@/assets/image/hajj/hajj-1.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div class="flex justify-between bg-[#286d71] px-3 py-4 text-white">
          <div>
            <h3 class="text-xl font-bold ">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0 text-lg "></span>
                Umrah Packages Titanium
              </a>
            </h3>
          </div>
          <p class="text-sm text-white font-medium">$5500</p>
        </div>
      </div>
      <div class="group relative">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src="@/assets/image/hajj/umrah-1.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>

        <div class="flex justify-between bg-[#286d71] px-3 py-4 text-white">
          <div>
            <h3 class="text-xl font-bold ">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0 text-lg "></span>
                Umrah Packages Premium
              </a>
            </h3>
          </div>
          <p class="text-sm text-white font-medium">$4500</p>
        </div>
      </div>
      <!-- <div class="group relative">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src="@/assets/image/hajj/Prime-Maktab-A-1.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
       
        <div class="flex justify-between bg-[#286d71] px-3 py-4 text-white">
          <div>
            <h3 class="text-xl font-bold ">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0 text-lg "></span>
                Prime
              </a>
            </h3>
          </div>
          <p class="text-sm text-white font-medium">$35000</p>
        </div>
      </div>
      <div class="group relative">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src="@/assets/image/hajj/Silver-Maktab-B-1.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div class="flex justify-between bg-[#286d71] px-3 py-4 text-white">
          <div>
            <h3 class="text-xl font-bold ">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0 text-lg "></span>
                Silver
              </a>
            </h3>
          </div>
          <p class="text-sm text-white font-medium">$25000</p>
        </div>
      </div> -->
   </div>
  </div>
 
  <div class="bg-gray-100">
    <div class="container mx-auto my-8 ">
    <div class="grid grid-cols-2 gap-4">
            <div class="my-10">
                <p class="text-5xl font-bold text-[#286d71]">Umrah Visa <br/> Requirements</p>
                <div class="mx-10">
                    <ul class="list-disc my-8 text-xl leading-loose">
                        <li>One recent passport size color photograph (white background).</li>
                        <li>Application form filled in with black ink pen or printed.</li>
                        <li>A non-refundable roundtrip ticket with confirmed reservations.</li>
                        <li>Proof of vaccination.</li>
                        <li>Original passport for scanning.</li>
                        <li>Four pictures 3x4 cm (light blue background)</li>
                        <li>Blood Group</li>
                        <li>Mobile number / Landline number.</li>
                        <li>Nominee name in case of emergency during travelling, must be adult/relative.</li>
                    
                    </ul>
                </div>
            </div>
            <div class="my-auto">
                <img src="@/assets/image/hajj/umrah-v.png" alt="Front"/>
            </div>
    </div>
    </div>
  </div>

  <div class="container mx-auto my-8">
    <div class="flex flex-col items-center justify-center  pb-10  my-6"> 
        <P class="text-5xl font-bold text-[#286d71]">Perform Umrah </P>
        <p class="text-xl mx-20 mt-3">Perform Umrah  with a sense of luxury, ease and comfort</p>
    </div>
    <div class="p-4 flex item-center justify-center">
        <img src="@/assets/image/hajj/perform-umrah.png" alt="" class="" />
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
