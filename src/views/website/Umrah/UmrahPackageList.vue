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
        <div class="max-w-screen-2xl mx-auto mt-8 mb-8">
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
                <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                    <!-- Header Row -->
                    <div
                        class="grid grid-cols-1 md:grid-cols-6 bg-blue-700 text-white p-4 text-left text-lg font-semibold">
                        <div class="p-2">Name</div>
                        <div class="p-2">Start Date</div>
                        <div class="p-2">End Date</div>
                        <div class="p-2">City</div>
                        <div class="p-2">Country</div>
                        <div class="p-2 ps-6">Details</div>
                    </div>

                    <!-- Package Rows -->
                    <div class="divide-y divide-gray-300">
                        <!-- Row 1 -->
                        <div class="grid grid-cols-1 md:grid-cols-6 bg-gray-100 hover:bg-blue-100 transition-colors">
                            <div class="p-4 font-semibold text-blue-700">Premium Hajj Package</div>
                            <div class="p-4">March 1, 2025</div>
                            <div class="p-4">March 20, 2025</div>
                            <div class="p-4">Mecca</div>
                            <div class="p-4">Saudi Arabia</div>
                            <div class="p-4">
                                <router-link to="umrah-details/2"
                                    class="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded shadow-md">
                                    View Details
                                </router-link>
                            </div>
                        </div>

                        <!-- Row 2 -->
                        <div class="grid grid-cols-1 md:grid-cols-6 bg-white hover:bg-blue-100 transition-colors">
                            <div class="p-4 font-semibold text-blue-700">Economy Umrah Package</div>
                            <div class="p-4">April 5, 2025</div>
                            <div class="p-4">April 15, 2025</div>
                            <div class="p-4">Medina</div>
                            <div class="p-4">Saudi Arabia</div>
                            <div class="p-4">
                                <router-link to="umrah-details/2"
                                    class="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded shadow-md">
                                    View Details
                                </router-link>
                            </div>
                        </div>

                        <!-- Row 3 -->
                        <div class="grid grid-cols-1 md:grid-cols-6 bg-gray-100 hover:bg-blue-100 transition-colors">
                            <div class="p-4 font-semibold text-blue-700">VIP Hajj Package</div>
                            <div class="p-4">June 1, 2025</div>
                            <div class="p-4">June 15, 2025</div>
                            <div class="p-4">Jeddah</div>
                            <div class="p-4">Saudi Arabia</div>
                            <div class="p-4">
                                <router-link to="umrah-details/2"
                                    class="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded shadow-md">
                                    View Details
                                </router-link>

                            </div>
                        </div>
                    </div>
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
import { ref } from 'vue'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { useSocialStore } from '@/stores/SocialDashboard.ts'
import { useRoute } from 'vue-router'
const route = useRoute()
const selectedCountry = route.query.country || ' ' // Default to 'No Country Selected' if no country is passed
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