<template>
  <div class="pt-[80px]"></div>
  <div class="h-[80vh] 2xl:h-[70vh] relative">
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
          <img src="/src/assets/image/hero/kaba.jpg" alt="" class="" />
          <div class="head w-full flex flex-col items-center h-full bg-[#0802022a] justify-center">
            <p>Welcome To</p>
            <h1 class="shadow-lg">Hajj Exploration LLC</h1>
            <button class=""><router-link to="/Signup">Learn More</router-link></button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="/src/assets/image/hero/women.jpg" alt="" class="" />
          <div class="head w-full flex flex-col items-center h-full bg-[#0802022a] justify-center">
            <p>Hajj Exploration LLC</p>
            <h1>Hajj Package</h1>
            <button class=""><router-link to="/Signup">Learn More</router-link></button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="/src/assets/image/hero/arafat.jpg" alt="" class="" />
          <div class="head w-full flex flex-col items-center h-full bg-[#0802022a] justify-center">
            <p>Hajj Exploration LLC</p>
            <h1>Umrah Package</h1>
            <button class=""><router-link to="/services/new_muslim">Learn More</router-link></button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="/src/assets/image/hero/people.jpeg" alt="" class="" />
          <div class="head w-full flex flex-col items-center h-full bg-[#0802022a] justify-center">
            <p>Hajj Exploration LLC</p>
            <h1>Travel Package</h1>
            <button><router-link to="/Fund_Raising">Learn More</router-link></button>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  
  </div>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
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
  text-shadow: 4px 2px 4px rgb(2, 125, 138);
  
  font-size: 78px;
  font-weight: 700;
  color: rgb(146, 241, 249);
  position: absolute;
  text-transform: uppercase;

  text-align: left;
}
.head p {
  text-shadow: 2px 2px 3px black;
  font-size: 44px;
  color: rgb(255, 255, 255);
}
.head button {
  font-size: 24px;
  font-weight: 500;
  padding: 8px 12px;
  /* border: 3px solid white; */
  text-shadow: 2px 2px 3px black;
  border-radius: 8px;
   background: rgb(10, 147, 159);
   color:azure
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
