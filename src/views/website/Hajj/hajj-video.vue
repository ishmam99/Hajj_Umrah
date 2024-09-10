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
            <img src="@/assets/image/hero/hajj_services.jpg" alt="" class="" />
            <div class="head">
              <p>Hajj Exploration LLC</p>
              <h3 class="text-2xl">Exclusive hassle -free Hajj services & packages</h3>
              <button class=""><router-link to="/Signup">Apply Now</router-link></button>
            </div>
          </swiper-slide>
          
          <swiper-slide>
            <img src="@/assets/image/hajj/hajj-2.jpg" alt="" class="" />
            <div class="head">
              <p>Hajj Exploration LLC</p>
              <h3 class="text-2xl">Exclusive hassle -free Hajj services & packages</h3>
              <button class=""><router-link to="/Signup">Apply Now</router-link></button>
            </div>
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/image/hero/people.jpeg" alt="" class="" />
            <div class="head">
              <p>Hajj Exploration LLC</p>
              <h3 class="text-2xl">Exclusive hassle -free Hajj services & packages</h3>
              <button class=""><router-link to="/Signup">Apply Now</router-link></button>
            </div>
          </swiper-slide>
          
        </swiper>
      </div>
    </div>

  
    <div class="container mx-auto my-8">
      <div class="flex flex-col items-center justify-center  pb-10  my-6"> 
          <P class="text-5xl font-bold text-[#286d71]">Hajj Videos</P>
          <!-- <p class="text-xl mx-20 mt-3">Perform Hajj with a sense of luxury, ease and comfort</p> -->
      </div>
      <div class="p-4 flex item-center justify-center">
          <p class="text-2xl">Comming Soon...</p>
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
  