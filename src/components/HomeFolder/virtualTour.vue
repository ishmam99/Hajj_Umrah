<template>
  <div class="w-full px-5 pt-5">
    <!-- <h1 class="text-3xl font-bold uppercase pb-3">Virtual Tour</h1> -->
    <div>
      <div class="lg:flex gap-5 rounded-xl h-[350px] 2xl:h-[500px]">
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
              ref="swiper" 
            >
              <swiper-slide>
                <img src="@/assets/image/hero/mina.jpg" alt="" class="" />
                <div class="head">
                  <div class="ps-2 bg-gradient-to-r from-black to-transparent">
                    <p class="pt-1 text-xl md:text-3xl font-bold">Explore the wonders of Saudia Arabia, with a more comfortable & enriching</p>
                    <!-- <p class="py-2">{{ promotion.description }}</p>
                    <p><span class="text-lg font-bold">Date: </span>{{ promotion.date }}</p>
                    <p><span class="text-lg font-bold">Time: </span>{{ promotion.time }}</p> -->
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/image/hero/arafat.jpg" alt="" class="" />
                <div class="head">
                  <div class="ps-2 bg-gradient-to-r from-black to-transparent">
                    <p class="pt-1 text-xl md:text-3xl font-bold">Your Gateway to a Journey of a Lifetime</p>
                    <!-- <p class="py-2">{{ promotion.description }}</p>
                    <p><span class="text-lg font-bold">Date: </span>{{ promotion.date }}</p>
                    <p><span class="text-lg font-bold">Time: </span>{{ promotion.time }}</p> -->
                  </div>
                </div>
              </swiper-slide>
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
import { ref , onMounted } from 'vue'
import { useMediaStore } from '@/stores/mediaDashboard'
import image from '@/assets/image/hero/mina.jpg'
const modules = [Pagination, Navigation, Autoplay]

const store = useMediaStore()

const loading = ref(false)

const promotionList = async () => {
  loading.value = true
  try {
    const { data } = await api().get('promotion-list')
    store.promotionList = data.data
    console.log(data)
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

const HajjList = [
  {
    image :image,
    title : 'Explore the wonders of Saudia Arabia, with a more comfortable & enriching'
  }
]



onMounted(async () => {
  // promotionList()
})
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
.head {
  /* background: rgba(0, 0, 0, 0.452); */
  /* background-color: cadetblue; */
  text-shadow: 2px 2px 3px black;
  /* font-weight: 700; */
  color: white;
  position: absolute;
  /* text-transform: uppercase; */
  left: 0;
  text-align: left;
  height: 0%;
  width: 100%;
  /* padding: 5%; */
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-items: center;
  text-align: center; */
}
.head p {
  text-shadow: 2px 2px 3px black;
  color: rgb(255, 255, 255);

}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
