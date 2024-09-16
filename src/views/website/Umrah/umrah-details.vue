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
            <img src="/src/assets/image/hero/hajj_services.jpg" alt="" class="" />
            <div class="head">
              <p>Umrah - Texas - 2024</p>
              <h3 class="text-xl">Learn about your Deen, come closer to your Lord, and explore the world with Muslim World Adventures</h3>
              <button class=""><router-link to="/Signup">Registration now!</router-link></button>
            </div>
          </swiper-slide>
          <swiper-slide>
            <img src="/src/assets/image/hero/madinah.jpg" alt="" class="" />
            <div class="head">
              <p>Umrah - Texas - 2024</p>
              <h3 class="text-xl">Learn about your Deen, come closer to your Lord, and explore the world with Muslim World Adventures</h3>
              <button class=""><router-link to="/Signup">Registration now!</router-link></button>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="container mx-auto my-8">
      <div class="flex flex-col items-center justify-center pb-10 my-6"> 
        <P class="text-5xl font-bold text-[#286d71]">Packages Details</P>
      </div>
      <div class="shadow-xl mb-20 shadow-[#36897b39] bg-slate-50 rounded-md pb-8">
        <div class="flex items-center justify-center">
          <div class="my-6 py-5 w-full mx-10">
            <div class="text-slate-800">
              <ul class="text-xl">
                <li class="flex items-center mx-2">
                  <div v-html="svgContent"> </div>
                  <span class="mx-2">Package Id - <span class="text-xl text-[#286d71] font-semibold"> {{packageDetails.packageId || 'N/A'}}</span></span>
                </li>
                <li class="flex items-center mx-2">
                  <div v-html="svgContent"> </div>
                  <span class="mx-2">Country - <span class="text-xl text-[#286d71] font-semibold"> {{packageDetails.country?.name || 'N/A'}}</span></span>
                </li>
                <li class="flex items-center mx-2">
                  <div v-html="svgContent"> </div>
                  <span class="mx-2">City - <span class="text-xl text-[#286d71] font-semibold"> {{packageDetails.city?.name || 'N/A'}}</span></span>
                </li>
                <li class="flex items-center mx-2">
                  <div v-html="svgContent"> </div>
                  <span class="mx-2">Package Code - <span class="text-xl text-[#286d71] font-semibold"> {{packageDetails.packageCode || 'N/A'}}</span></span>
                </li>
              </ul>
            </div>          
          </div>
          <div class="my-6 py-5 w-full mx-10">
            <div class="text-slate-800">
              <ul class="text-xl">
                <li class="flex items-center mx-2">
                  <div v-html="svgContent"> </div>
                  <span class="mx-2"> Package Price - <span class="text-xl text-[#286d71] font-semibold">$ {{packageDetails.price || 'N/A'}}</span></span>
                </li>
                <li class="flex items-center mx-2">
                  <div v-html="svgContent"> </div>
                  <span class="mx-2"> Package Year - <span class="text-xl text-[#286d71] font-semibold"> {{packageDetails.packageYear || 'N/A'}}</span></span>
                </li>
                <li class="flex items-center mx-2">
                  <div v-html="svgContent"> </div>
                  <span class="mx-2"> Start Date - <span class="text-xl text-[#286d71] font-semibold"> {{moment(packageDetails.startDate).format('MMMM Do YYYY') || 'N/A'}}</span></span>
                </li>
                <li class="flex items-center mx-2">
                  <div v-html="svgContent"> </div>
                  <span class="mx-2"> Ending Date - <span class="text-xl text-[#286d71] font-semibold"> {{moment(packageDetails.endDate).format('MMMM Do YYYY') || 'N/A'}}</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Itinerary Section -->
      <div class="shadow-xl shadow-[#36897b39] bg-slate-50 rounded-md pb-8 mt-8">
        <div class="flex flex-col items-center justify-center pb-10 my-6"> 
          <P class="text-5xl font-bold text-[#286d71] pt-5">Travel Itinerary</P>
        </div>
        <div class="my-6 py-5 w-full mx-10">
          <div class="text-slate-800">
            <ul class="text-xl">
              <li v-for="(step, index) in packageDetails.steps || []" :key="index" class="my-4">
                <div class="flex items-center">
                  <div v-html="svgContent" class="mr-2"> </div>
                  <div>
                    <p class="font-semibold">
                      {{ step.transportation_type?.name || 'N/A' }} - 
                      {{ step.transportation_vendor?.name || 'N/A' }}
                    </p>
                    <p>{{ step.duration || 'N/A' }}</p>
                    <p>
                      From {{ step.from_type?.name || 'N/A' }} {{ step.from || 'N/A' }} 
                      to {{ step.to_type?.name || 'N/A' }} {{ step.to || 'N/A' }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useSocialStore } from '@/stores/SocialDashboard.ts'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
const modules = [Pagination, Navigation, Autoplay]
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import moment from 'moment'

const route = useRoute()
const socialStore = useSocialStore()

const svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
`

const packageDetails = computed(() => 
  socialStore.createNewPackage.find(pkg => pkg.packageId === route.params.id) || { steps: [] }
)
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  border: 3px solid #286d71;
  text-shadow: 2px 2px 3px black;
  border-radius: 8px;
  background: #286d71;
}

.head button:hover {
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  text-shadow: none;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
