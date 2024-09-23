<template>
    <DefaultLayout>
        <div class="pt-[80px]"></div>
        <div class="h-[60vh] 2xl:h-[50vh] relative">
            <div class="h-full">
                <swiper :slidesPerView="'1'" :centeredSlides="true" :spaceBetween="0" :loop="true" :autoplay="{
                    delay: 5000,
                    disableOnInteraction: false
                }" :pagination="{
                    clickable: true
                }" :navigation="false" :modules="modules" class="mySwiper">
                    <swiper-slide>
                        <img src="/src/assets/image/hero/people.jpeg" alt="" class="" />
                        <div class="head">
                            <p>Hajj Exploration LLC</p>
                            <h3 class="text-2xl">Exclusive hassle -free Umrah services &amp; packages</h3>
                            <button class=""><router-link to="/Signup">Apply Now</router-link></button>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/src/assets/image/hero/hajj_services.jpg" alt="" class="" />
                        <div class="head">
                            <p>Hajj Exploration LLC</p>
                            <h3 class="text-2xl">Exclusive hassle -free Umrah services &amp; packages</h3>
                            <button class=""><router-link to="/Signup">Apply Now</router-link></button>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/src/assets/image/hajj/hajj-2.jpg" alt="" class="" />
                        <div class="head">
                            <p>Hajj Exploration LLC</p>
                            <h3 class="text-2xl">Exclusive hassle -free Umrah services &amp; packages</h3>
                            <button class=""><router-link to="/Signup">Apply Now</router-link></button>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="max-w-screen-4xl mx-auto mt-8 mb-8">
            <!-- Header Section -->
            <div class="flex flex-col items-center justify-center pb-4 mt-6">
                <p class="text-5xl font-bold text-[#286d71]">{{ selectedCountry }} Package List</p>
            </div>

            <!-- Package List Section -->
            <section class="w-full p-8 bg-gray-50 rounded-lg shadow-lg">
                <!-- Title -->
                <p class="text-3xl font-bold pb-8 font-mono">Available Packages For <span class="text-blue-700">{{
                        selectedCountry }}</span></p>

                <!-- Package Table -->
                <div class="bg-white shadow-xl  rounded-lg overflow-hidden">
                  <table class="min-w-full ">
                      <!-- Header Row -->
                      <thead class="bg-blue-700 text-white">
                          <tr class="text-center text-lg font-semibold py-4">
                              <th class="py-6 border-r-2 border-gray-100">Name</th>
                              <th class="p-2 border-r-2 border-gray-100">Umrah Start Date</th>
                              <th class="p-2 border-r-2 border-gray-100">Umrah End Date</th>
                              <th class="p-2 border-r-2 border-gray-100">Package Origin Country</th>
                              <th class="p-2 border-r-2 border-gray-100">Package Origin City</th>
                              <th class="p-2 border-r-2 border-gray-100">Package Origin Airport</th>
                              <th class="p-2 border-r-2 border-gray-100">Status Of Package</th>
                              <th class="p-2">Package Details</th>
                          </tr>
                      </thead>
              
                      <!-- Package Rows -->
                      <tbody class="divide-y divide-gray-300 bg-gray-200 ">
                          <tr v-for="(packageData, index) in packageList" :key="index" class="hover:bg-blue-100 transition-colors text-center py-4 ">
                              <td class="p-2 font-semibold text-blue-700 border-r-2 border-gray-700">{{ packageData.title }}</td>
                              <td class="py-6 border-r-2 border-gray-700">{{ packageData.startDate }}</td>
                              <td class="p-2 border-r-2 border-gray-700">{{ packageData.endDate }}</td>
                              <td class="p-2 border-r-2 border-gray-700">{{ packageData.country }}</td>
                              <td class="p-2 border-r-2 border-gray-700">{{ packageData.city }}</td>
                              <td class="p-2 border-r-2 border-gray-700">{{ packageData.airport }}</td>
                              <td class="p-2 border-r-2 border-gray-700">{{ packageData.status }}</td>
                              <td class="p-2 ">
                                  <router-link :to="`umrah-details/` + packageData.id"
                                      class="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded shadow-md">
                                      View Details
                                  </router-link>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              
            </section>
        </div>

    </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { computed, ref } from 'vue'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { packages } from '@/stores/itinenary.ts'
import { useRoute } from 'vue-router'
const route = useRoute()
const selectedCountry = route.query.country || ' ' // Default to 'No Country Selected' if no country is passed
const modules = [Pagination, Navigation, Autoplay]
const packageList = computed(() => {
  let data = [];
  console.log(selectedCountry);
  if(selectedCountry !== ' '){
    data = packages.filter(e => e.country == selectedCountry);
  }
   
  return data;
})
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