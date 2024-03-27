<template>
  <div class="w-full px-5">
    <h1 class="text-3xl font-bold uppercase pb-3">Virtual Tour</h1>
    <div>
      <div class="lg:flex gap-5 rounded-xl">
        <div class="w-2/3 shadow-xl p-5 bg-white rounded-xl">
          <iframe
            height="100%"
            src="https://www.youtube.com/embed/IrBh3UM6J9M?si=cmKWZsNIS8HW0SVJ&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            class="w-full"
          ></iframe>
        </div>
        <div class="rounded-lg w-1/3">
          <div class="h-full bg-white px-4 py-5 rounded-lg">
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
              class="mySwiper rounded-lg"
            >
              <swiper-slide>
                <img src="@/assets/image/commitees/12.jpg" alt="" class="" />
                <div class="head">
                  <p class="text-xl pt-1">Friday Khutba</p>
                  <p class="py-2">Imam Ali</p>
                  <h1>March 27, 2024</h1>
                </div>
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/image/commitees/10.jpg" alt="" class="" />
                <div class="head">
                  <p class="text-xl pt-2">Khatira</p>
                  <p class="py-2">Yasir Qadhi</p>
                  <h1>March 19, 2024</h1>
                </div>
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/image/commitees/14.jpg" alt="" class="" />
                <div class="head">
                  <p class="text-xl pt-1">Friday Khutba</p>
                  <p class="py-2">Omar Sulaiman</p>
                  <h1>March 27, 2024</h1>
                </div>
              </swiper-slide>
              <!-- <swiper-slide>
                <img src="/src/assets/image/hero/h6.jpg" alt="" class="" />
                <div class="head">
                  <p>Islamic Digital Lane</p>
                  <h1>New Muslim Service</h1>
                  <button class=""></button>
                </div>
              </swiper-slide> -->
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  background: rgba(0, 0, 0, 0.452);
  text-shadow: 2px 2px 3px black;
  font-size: 36px;
  font-weight: 700;
  color: white;
  position: absolute;
  text-transform: uppercase;
  left: 0;
  text-align: left;
  height: 100%;
  width: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
}
.head p {
  text-shadow: 2px 2px 3px black;
  font-size: 34px;
  color: rgb(255, 255, 255);
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
