<template>
    <div class="h-[80vh] pb-5 relative">
        <div class="h-full">
            <swiper
                :slidesPerView="'1'"
                :centeredSlides="true"
                :spaceBetween="0"
                :loop="true"
                :autoplay="{
                    delay: 5000,
                    disableOnInteraction: false,
                }"
                :pagination="{
                    clickable: true,
                }"
                :navigation="false"
                :modules="modules"
                class="mySwiper"
            >       
                    <swiper-slide> 
                        <img src="/src/assets/image/hero/h1.jpg" alt="" class="">
                        <div class="head">
                          <p>Welcome To</p>
                          <h1>Islamic Digital Lane</h1>
                          <button class="py-2 px-3 rounded-lg border-1 border-white"><router-link to="/Signup">Join Now</router-link></button>
                        </div>
                    </swiper-slide>
                    <swiper-slide> 
                        <img src="/src/assets/image/hero/h2.jpg" alt="" class="">
                        <div class="head">
                          <p>IDL</p>
                          <h1>Learning Center</h1>
                          <button class="py-2 px-3 rounded-lg border-1 border-white"><router-link to="/onsitelearning">Join Now</router-link></button>
                        </div>
                    </swiper-slide>        
                    <swiper-slide> 
                        <img src="/src/assets/image/hero/h5.jpg" alt="" class="">
                        <div class="head">
                          <p>IDL</p>
                          <h1>Prayer Service</h1>
                          <button class="py-2 px-3 rounded-lg border-1 border-white"><router-link to="/Signup">Join Now</router-link></button>
                        </div>
                    </swiper-slide>
                    <swiper-slide> 
                        <img src="/src/assets/image/hero/h6.jpg" alt="" class="">
                        <div class="head">
                          <p>IDL</p>
                          <h1>New Muslim Service</h1>
                          <button class="py-2 px-3 rounded-lg border-1 border-white"><router-link to="/services/new_muslim">Join Now</router-link></button>
                        </div>
                    </swiper-slide>
            </swiper>
        </div>
        <div class="w-1/4 px-5 absolute top-[50%] translate-y-[-50%] right-[5%] z-30">
          <!-- <h1 class="text-3xl font-bold text-white uppercase pb-3">Prayer time</h1> -->
          <div class="bg-[#ffffffe0] p-5 rounded-2xl drop-shadow-md">
              <p class="mx-3 text-sm font-semibold text-gray-500 text-center">11 th January,2024</p>
              <div class="grid grid-cols-2">
                  <div>
                      <h4 class="text-blue-600 text-4xl font-semibold uppercase">Next</h4>
                      <p class="text-gray-500 text-xl font-semibold">Prayer</p>
                  </div>
                  <div class="text-right text-sm font-semibold">
                      <p class="text-gray-600">Dhuhr</p>
                      <p class="text-yellow-600">1:00 PM</p>
                      <p class="text-green-600">4h 16m left</p>
                  </div>
              </div>
              <div class="">
                  <div class="pt-3 pb-1 flex gap-2 text-center font-bold border-b">
                      <p class="w-1/3">Prayer</p>
                      <p class="w-1/3">Adhaan</p>
                      <p class="w-1/3">Iqamah</p>
                  </div>
                  <div class="pt-3 pb-1 flex gap-2 text-center border-b font-semibold">
                      <p class="w-1/3 text-sm">Fajr</p>
                      <p class="w-1/3 text-sm">06:18 AM</p>
                      <p class="w-1/3 text-sm">06:30 AM</p>
                  </div>
                  <div class="pt-3 pb-1 flex gap-2 text-center border-b font-semibold">
                      <p class="w-1/3 text-sm">Sunrise</p>
                      <p class="w-1/3 text-sm">07:31 AM</p>
                      <p class="w-1/3 text-sm"></p>
                  </div>
                  <div class="pt-3 pb-1 flex gap-2 text-center border-b font-semibold">
                      <p class="w-1/3 text-sm">Dhuhr</p>
                      <p class="w-1/3 text-sm">12:35 PM</p>
                      <p class="w-1/3 text-sm">02:00 PM</p>
                  </div>
                  <div class="pt-3 pb-1 flex gap-2 text-center border-b font-semibold">
                      <p class="w-1/3 text-sm">Asr</p>
                      <p class="w-1/3 text-sm">03:20 PM</p>
                      <p class="w-1/3 text-sm">04:00 PM</p>
                  </div>
                  <div class="pt-3 pb-1 flex gap-2 text-center border-b font-semibold">
                      <p class="w-1/3 text-sm">Maghrib</p>
                      <p class="w-1/3 text-sm">05:39 PM</p>
                      <p class="w-1/3 text-sm">05:44 PM</p>
                  </div>
                  <div class="pt-3 pb-1 flex gap-2 text-center border-b font-semibold">
                      <p class="w-1/3 text-sm">Isha</p>
                      <p class="w-1/3 text-sm">06:52 PM</p>
                      <p class="w-1/3 text-sm">08:00 PM</p>
                  </div>
                  <div class="pt-3 pb-1 flex gap-2 text-center font-semibold">
                      <p class="w-1/3 text-sm">Jumu’ah</p>
                      <p class="w-1/3 text-sm">06:52 PM</p>
                      <p class="w-1/3 text-sm">08:00 PM</p>
                  </div>
              </div>
          </div>
        </div>
    </div>
    
  </template>
   <script setup>
   // Import Swiper Vue.js components
   import { Swiper, SwiperSlide } from 'swiper/vue';
   
   // Import Swiper styles
   import 'swiper/css';
   
   import 'swiper/css/pagination';
   import 'swiper/css/navigation';
   
   // import required modules
   import { Pagination, Navigation, Autoplay } from 'swiper/modules';
   const modules = [Pagination, Navigation, Autoplay];
   
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
.head{
    text-shadow: 2px 2px 3px black;
    font-size: 54px;
    font-weight: 700;
    color: white;
    position: absolute;
    text-transform: uppercase;
    left: 5%;
    text-align: left;
}
.head p{
  text-shadow: 2px 2px 3px black;
  font-size: 34px;
  color: rgb(194, 127, 3);
}
.head button{
  font-size: 24px;
  font-weight: 500;
  padding: 10px 20px;
  border: 2px solid white;
  text-shadow: 2px 2px 3px black;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* animation: 5s banimg linear; */
}

@keyframes banimg {
    0%{
        scale: 1;
    }
    50%{
        scale: 1.1;
    }
    100%{
        scale: 1;
    }
}
</style>
  